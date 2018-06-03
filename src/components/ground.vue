<template>
  <div id="ground" ref="ground" :class="type === 'coach' ? 'coachBg' : 'standardBg'">
    <div :class="['field',type === 'coach' ? 'coachFieldBorder' : 'standardFieldBorder']" ref="field">
      <canvas id="canvas" ref="canvas" width="1000px" height="563px" @mousedown="canvasDown($event)"  @mousemove="canvasMove($event)" @mouseup="canvasUp($event)" @dragover="dragOver($event)" @drop="dragFinished($event)"></canvas>
      <input type="text" id="inputText" :class="type === 'coach' ? 'coachInputBorder' : 'standardInputBorder'" ref="inputText">
    </div>
  </div>
</template>

<script>
  import Selection from '../tool/selection'
  import Polygon from '../tool/polygon'
  import Line from '../tool/line'
  import Graph from '../tool/graph'
  import Icon from '../tool/icon'
  import Text from '../tool/text'
  export default {
    name: 'ground',
    data(){
      return {
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        },
        mouseDown: false,
        mouseEnter:false,
        playerStack: [],
        otherStack:[],
        imgWrap:[],
        obj:{},
        selectObj:{},
        imgArr:[],
        bgImg:{},
        polygonObj:{},
        edgeColor:''
      }
    },
    props:['type','index'],
    computed:{
      tool(){
        return this.$store.state.tool;
      },
      hasGrid(){
        return this.$store.state.hasGrid;
      },
      canvas(){
        return this.$refs.canvas;
      },
      field(){
        return this.$refs.field;
      },
      inputText(){
        return this.$refs.inputText;
      },
      width(){
        return this.$refs.canvas.width;
      },
      height(){
        return this.$refs.canvas.height;
      },
      shapesColor(){
        return this.$store.state.shapesColor;
      },
      equipmentColor(){
        return this.$store.state.equipmentColor;
      },
      playersColor(){
        return this.$store.state.playersColor;
      },
      linesColor(){
        return this.$store.state.linesColor;
      },
      color(){
        return this.$store.state.color;
      },
      downloading(){
        return this.$store.state.downloading;
      },
      toClear(){
        return this.$store.state.toClear;
      },
      toDelete(){
        return this.$store.state.toDelete;
      },
      toRotate(){
        return this.$store.state.toRotate;
      },
      text(){
        return this.$store.state.text;
      }
    },
    methods: {
      canvasDown(event){
        let canvas = this.canvas;
        this.start = this.end = this.canvasMousePos(canvas,event);
        this.mouseDown = true;
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, this.width, this.height);
        if(this.tool === 'polygon'){
          if(JSON.stringify(this.polygonObj) === "{}"){
            let selectionColor = this.color[this.shapesColor];
            this.polygonObj = new Polygon(ctx,[[this.start.x,this.start.y]],[],selectionColor,this.edgeColor);
          }
        }else {
          this.polygonObj = {};
        }
        let arr = [];
        for(let obj of this.otherStack){
          obj.draw();
          if(obj.inRange(this.start.x,this.start.y)){
            arr.push(obj);
          }
        }
        for(let obj of this.playerStack){
          obj.draw();
          if(obj.inRange(this.start.x,this.start.y)){
            arr.push(obj);
          }
        }
        let thisObj = {};
        if(arr.length === 1){
          thisObj = arr[0];
        }else if(arr.length > 1){
          let selectionArr = [];
          let othersArr = [];
          for(let obj of arr){
            if(obj instanceof Selection){
              selectionArr.push(obj);
            }else {
              othersArr.push(obj);
            }
          }
          if(selectionArr.length !== 0 && othersArr.length === 1){
            thisObj = othersArr[0];
          }else if(othersArr.length === 0){
            let widthSortedArr = selectionArr.sort(function (a,b) {
              return a.width - b.width;
            });
            let heightSortedArr = selectionArr.sort(function (a,b) {
              return a.height - b.height;
            });
            if(widthSortedArr[0] === heightSortedArr[0]){
              thisObj = widthSortedArr[0];
            }
          }
        }
        if(JSON.stringify(thisObj) === "{}"){
          this.selectObj = {};
          this.$store.commit('changeSelectState',false);
          this.$store.commit('changePlayerTextState',false);
          this.$store.commit('changeIsLineState',false);
        }else {
          this.$store.commit('changeSelectState',true);
          thisObj.drawEdges();
          this.selectObj = thisObj;
          if(thisObj instanceof Selection){
            thisObj.diffStartX = this.start.x - thisObj.start.x;
            thisObj.diffStartY = this.start.y - thisObj.start.y;
            thisObj.diffEndX = thisObj.end.x  - this.start.x;
            thisObj.diffEndY = thisObj.end.y - this.start.y;
            this.$store.commit('changePlayerTextState',false);
            this.$store.commit('changeIsLineState',false);
          }else if(thisObj instanceof Text){
            thisObj.diffX = this.start.x - thisObj.pos.x;
            thisObj.diffY = this.start.y - thisObj.pos.y;
            this.$store.commit('changePlayerTextState',false);
            this.$store.commit('changeIsLineState',true);
          }else if(thisObj instanceof Icon){
            this.$store.commit('changeIsLineState',false);
            this.$store.commit('setText',thisObj.text);
            if(thisObj.type === 'ring' || thisObj.type === 'halfTriangle' || thisObj.type === 'halfCircular'){
              this.$store.commit('changeIsPlayerState',false);
              this.$store.commit('changePlayerTextState',true);
            }else if(thisObj.type === 'halfRing'){
              this.$store.commit('changeIsPlayerState',true);
              this.$store.commit('changePlayerTextState',true);
            }else {
              this.$store.commit('changePlayerTextState',false);
            }
          }else if(thisObj instanceof Line){
            if(thisObj.type === 'ruler'){
              this.$store.commit('changeIsPlayerState',false);
              this.$store.commit('changePlayerTextState',true);
              this.$store.commit('setText',thisObj.text);
            }
            this.$store.commit('changeIsLineState',true);
          }else if(thisObj instanceof Polygon){
            for(let point of thisObj.points){
              let theDiff = [];
              theDiff[0] = this.start.x - point[0];
              theDiff[1] = this.start.y - point[1];
              thisObj.diff.push(theDiff);
            }
            this.$store.commit('changePlayerTextState',false);
            this.$store.commit('changeIsLineState',true);
          }else {
            this.$store.commit('changePlayerTextState',false);
            this.$store.commit('changeIsLineState',false);
          }
        }
      },
      canvasMove(event){
        let mouseDown = this.mouseDown;
        let tool = this.tool;
        let canvas = this.canvas;
        let ctx = canvas.getContext("2d");
        if(mouseDown){
          if(this.tool) {
            this.end = this.canvasMousePos(canvas, event);
            ctx.clearRect(0, 0, this.width, this.height);
            if(tool === 'square' || tool === 'rectangle' || tool === 'circular' || tool === 'reTriangle'){
              let selectionColor = this.color[this.shapesColor];
              this.obj = new Selection(ctx,tool,this.start,this.end,selectionColor,this.edgeColor);
              this.reDraw();
              this.obj.draw();
              this.obj.drawEdges();
            }else if(tool === 'ruler'){
              let selectionColor = this.color[this.shapesColor];
              this.obj = new Line(ctx,tool,this.start,this.end,selectionColor,this.edgeColor);
              this.reDraw();
              this.obj.draw();
              this.obj.drawEdges();
            } else if(tool === 'solidArrowLine' || tool === 'dottedArrowLine' || tool === 'waveLine' || tool === 'dottedLine'){
              let lineColor = this.color[this.linesColor];
              this.obj = new Line(ctx,tool,this.start,this.end,lineColor,this.edgeColor);
              this.reDraw();
              this.obj.draw();
              this.obj.drawEdges();
            }else if(tool === 'polygon'){
              this.polygonObj.next = [this.end.x,this.end.y];
              this.reDraw();
              this.polygonObj.draw();
            }
          }else if(JSON.stringify(this.selectObj) !== "{}"){
            this.end = this.canvasMousePos(canvas,event);
            if(this.selectObj instanceof Line){
              this.selectObj.move(this.end.x - this.start.x, this.end.y - this.start.y);
            }else {
              this.selectObj.move(this.end.x,this.end.y);
            }
            ctx.clearRect(0, 0, this.width, this.height);
            this.reDraw();
            this.selectObj.drawEdges();
          }
        }
      },
      canvasUp(){
        this.mouseDown = false;
        if(JSON.stringify(this.obj) !== "{}"){
          let diffX = Math.abs(this.end.x - this.start.x);
          let diffY = Math.abs(this.end.y - this.start.y);
          let len = Math.sqrt(diffX * diffX + diffY * diffY);
          if( ((this.obj.type === 'rectangle' || this.obj.type === 'circular') && (diffX > 40 || diffY > 40)) || ((this.obj.type === 'square' || this.obj.type === 'reTriangle') && (diffX > 40 && diffY > 40)) || (this.obj instanceof Line && len > 60)){
            this.otherStack.push(this.obj);
          }else {
            this.canvas.getContext("2d").clearRect(0, 0, this.width, this.height);
            this.reDraw();
          }
          this.obj = {};
          this.start = {
            x : 0,
            y : 0
          };
          this.end = {
            x : 0,
            y : 0
          }
        }else if(JSON.stringify(this.polygonObj) !== "{}"){
          let len = Math.sqrt(Math.pow(this.polygonObj.next[0] - this.polygonObj.points[0][0] , 2)  + Math.pow(this.polygonObj.next[1] - this.polygonObj.points[0][1] , 2));
          if(len < 10){
            this.polygonObj.finish = true;
            this.otherStack.push(this.polygonObj);
            this.canvas.getContext("2d").clearRect(0, 0, this.width, this.height);
            this.reDraw();
            this.polygonObj.drawEdges();
            this.polygonObj = {};
          }else {
            this.polygonObj.points.push(this.polygonObj.next);
          }
          this.start = {
            x : 0,
            y : 0
          };
          this.end = {
            x : 0,
            y : 0
          }
        } else if(this.end.x !== this.start.x || this.end.y !== this.start.y){
          if(this.selectObj instanceof Line){
            this.selectObj.cache.start.x = this.selectObj.start.x;
            this.selectObj.cache.start.y = this.selectObj.start.y;
            this.selectObj.cache.end.x = this.selectObj.end.x;
            this.selectObj.cache.end.y = this.selectObj.end.y;
          }
        }
      },
      getScrollTop(){
        let scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
          scrollTop = document.body.scrollTop;
        }
        return scrollTop;
      },
      canvasMousePos(canvas, event){
        let x = (document.documentElement.scrollLeft || document.body.scrollLeft) + (event.clientX || event.pageX);
        let y = (event.clientY || event.pageY) + this.getScrollTop();
        return {
          x: x - canvas.offsetLeft,
          y: y - canvas.offsetTop
        }
      },
      dragOver(event){
        event.preventDefault();
      },
      dragFinished(event){
        event.preventDefault();
        let canvas = this.canvas;
        let ctx = canvas.getContext("2d");
        let tool = this.tool;
        let allGraph = 'ball bigGate smallGate wheel railing stool column';
        let allIcon = 'point triangle ring halfRing halfTriangle halfCircular';
        this.end = this.canvasMousePos(canvas,event);
        if(allGraph.indexOf(tool) > -1){
          let img;
          switch (tool){
            case 'ball':
              img = this.imgArr[0];
              break;
            case 'bigGate':
              img = this.imgArr[1];
              break;
            case 'smallGate':
              img = this.imgArr[2];
              break;
            case 'wheel':
              img = this.imgArr[3];
              break;
            case 'railing':
              img = this.imgArr[4];
              break;
            case 'stool':
              img = this.imgArr[5];
              break;
            case 'column':
              img = this.imgArr[6];
              break;
          }
          this.obj = new Graph(ctx,tool,img,this.end,this.edgeColor);
          ctx.clearRect(0, 0, this.width, this.height);
          this.reDraw();
          this.obj.draw();
          this.obj.drawEdges();
          this.otherStack.push(this.obj);
          this.selectObj = this.obj;
          this.$store.commit('changeSelectState',true);
          this.$store.commit('changePlayerTextState',false);
          this.obj = {};
          this.$store.commit('setTool','');
        }else if(allIcon.indexOf(tool) > -1){
          let color = '';
          if(tool === 'point' || tool === 'triangle'){
            color = this.color[this.equipmentColor];
            this.$store.commit('changePlayerTextState',false);
          }else if(tool === 'ring' || tool === 'halfRing' || tool === 'halfTriangle' || tool === 'halfCircular'){
            color =  this.color[this.playersColor];
            this.$store.commit('changePlayerTextState',true);
          }
          this.obj = new Icon(ctx,tool,this.end,color,this.edgeColor);
          if(this.tool === 'halfRing'){
            this.$store.commit('changeIsPlayerState',true);
            this.$store.commit('setText','GK');
          }else {
            this.$store.commit('changeIsPlayerState',false);
            this.$store.commit('setText','');
          }
          ctx.clearRect(0, 0, this.width, this.height);
          this.reDraw();
          this.obj.draw();
          this.obj.drawEdges();
          this.playerStack.push(this.obj);
          this.selectObj = this.obj;
          this.$store.commit('changeSelectState',true);
          this.obj = {};
          this.$store.commit('setTool','');
        }else if(tool = 'text'){
          this.inputText.style.display = 'block';
          this.inputText.parentNode.style.position = 'relative';
          this.inputText.style.top = this.end.y  + 'px';
          this.inputText.style.left = (this.end.x - 100)  + 'px';
          this.inputText.focus();
          document.onkeydown = (e) =>{
            if(e.keyCode === 13 ){
              let text = this.inputText.value;
              this.inputText.style.display = 'none';
              this.inputText.value = '';
              this.inputText.parentNode.style.position = '';
              this.obj = new Text(ctx,text,this.end,this.edgeColor);
              ctx.clearRect(0, 0, this.width, this.height);
              this.reDraw();
              this.obj.draw();
              this.obj.drawEdges();
              this.otherStack.push(this.obj);
              this.selectObj = this.obj;
              this.$store.commit('changeSelectState',true);
              this.$store.commit('changePlayerTextState',false);
              this.obj = {};
              this.$store.commit('setTool','');
            }
          }
        }
      },
      reDraw(){
        for(let obj of this.otherStack){
          obj.draw();
        }
        for(let obj of this.playerStack){
          obj.draw();
        }
      },
      downImg() {
        html2canvas( this.field, {
          onrendered: function(canvas) {
            let url = canvas.toDataURL();
            let a = document.createElement('a');
            a.href = url;
            a.download = new Date() + ".png";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
        });
      },
    },
    watch:{
      downloading(){
        this.downImg();
      },
      toClear(){
        this.otherStack = [];
        this.playerStack = [];
        this.canvas.getContext("2d").clearRect(0, 0, this.width, this.height);
        this.reDraw();
      },
      toDelete(){
        let index1 = this.otherStack.indexOf(this.selectObj);
        let index2 = this.playerStack.indexOf(this.selectObj);
        if(index1 > -1){
          this.otherStack.splice(index1,1);
        }else if(index2 > -1){
          this.playerStack.splice(index2,1);
        }
        this.selectObj = {};
        this.canvas.getContext("2d").clearRect(0, 0, this.width, this.height);
        this.reDraw();
      },
      toRotate(){
        this.selectObj.rotateSelf();
        this.canvas.getContext("2d").clearRect(0, 0, this.width, this.height);
        this.reDraw();
        this.selectObj.drawEdges();
      },
      text(){
        if(this.selectObj instanceof Icon || (this.selectObj instanceof Line && this.selectObj.type === 'ruler')){
          this.selectObj.text = this.text;
          this.canvas.getContext("2d").clearRect(0, 0, this.width, this.height);
          this.reDraw();
          this.selectObj.drawEdges();
        }
      },
      hasGrid(){
        if(this.hasGrid){
          this.$refs.field.style.backgroundImage = `url(/static/img/${this.type}BgGrid${this.index}.png)`
        }else {
          this.$refs.field.style.backgroundImage = `url(/static/img/${this.type}Bg${this.index}.png)`
        }
      }
    },
    mounted(){
      let DOMURL = window.URL || window.webkitURL || window;
      let data = [
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
              <title>ball</title>
              <path fill="#140a1e" d="M16.043 32.059c8.749-0.004 15.936-7.133 16.010-16.097-0.004-8.749-7.348-16.014-16.097-16.010s-15.936 7.133-16.010 16.097c0.004 8.749 7.348 16.014 16.097 16.010z"></path>
              <path fill="#fff" d="M14.851 24.582l-3.433 1.435c-1.29-0.465-2.64-1.438-3.698-2.548l0.38-3.751 4.586-1.262 2.055 1.713 0.11 4.413z"></path>
              <path fill="#fff" d="M20.597 26.168l-3.363-1.456-0.032-4.628 2.066-1.685 4.593 1.413 0.342 3.768c-0.895 1.135-2.143 1.9-3.606 2.588z"></path>
              <path fill="#fff" d="M25.75 10.53c0.765 1.248 1.238 2.633 1.34 4.371l-2.376 2.545-3.948-1.181-1.005-3.278 2.393-3.268 3.596 0.81z"></path>
              <path fill="#fff" d="M13.665 4.958c0.8-0.197 1.523-0.18 2.245-0.162s1.66 0.113 2.383 0.13l1.943 3.373-2.161 2.623-4.121-0.028-1.96-2.651 1.671-3.286z"></path>
              <path fill="#fff" d="M10.006 9.713l2.45 3.313-0.948 3.303-3.863 1.28-2.468-2.591c0.113-1.66 0.578-2.951 1.336-4.378l3.493-0.927z"></path>
         </svg>`,
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="52" height="16" viewBox="0 0 104 32">
              <title>goal-large</title>
              <path d="M12 14c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M16 10c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M20 14c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M24 10c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M28 14c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M32 10c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M36 14c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M40 10c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M44 14c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M48 10c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M52 14c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M56 10c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M60 14c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M64 10c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M68 14c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M72 10c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M76 14c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M80 10c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M84 14c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M88 10c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M16 18c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M24 18c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M32 18c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M40 18c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M48 18c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M56 18c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M64 18c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M72 18c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M80 18c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M88 18c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M92 14c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M12 22c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M20 22c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M28 22c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M36 22c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M44 22c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M52 22c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M60 22c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M68 22c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M76 22c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M84 22c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M92 22c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M12 6c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M20 6c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M28 6c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M36 6c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M44 6c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M52 6c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M60 6c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M68 6c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M76 6c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M84 6c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M92 6c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
              <path d="M96 0h-88c-2.209 0-4 1.791-4 4v0 20c0 2.209-1.791 4-4 4v0 4h104v-4c-2.209 0-4-1.791-4-4v0-20c0-2.209-1.791-4-4-4v0zM8 28v-24h88v24z"></path>
            </svg>`,
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 56 32">
              <title>goal-small</title>
              <path d="M12 14h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M16 10h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M20 14h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M24 10h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M27.999 14h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M31.999 10h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M35.999 14h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M39.999 10h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M44 14h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M16 18h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M24 18h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M31.999 18h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M39.999 18h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M12 21.999h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M20 21.999h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M27.999 21.999h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M35.999 21.999h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M44 21.999h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M12 6h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M20 6h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M27.999 6h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M35.999 6h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M44 6h0.001c1.104 0 2 0.895 2 2v0.001c0 1.104-0.895 2-2 2h-0.001c-1.104 0-2-0.895-2-2v-0.001c0-1.104 0.895-2 2-2z"></path>
              <path d="M55.999 28v0c-2.209-0-3.999-1.791-3.999-4v-20c0-2.209-1.791-4-4-4v0h-39.999c-0 0-0 0-0.001 0-2.209 0-3.999 1.791-3.999 3.999 0 0 0 0.001 0 0.001v-0 20c0 2.209-1.791 4-4 4v0 4h55.999zM8 28v-24h39.999v24z"></path>
         </svg>`,
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="10" viewBox="0 0 77 32">
              <title>mannequin</title>
              <path fill="#fff" d="M25.596 17.597c0 2.651-2.149 4.799-4.799 4.799v0h-12.798c-2.651 0-4.799-2.149-4.799-4.799v0 0c0-2.651 2.149-4.799 4.799-4.799v0h12.798c2.651 0 4.799 2.149 4.799 4.799v0z"></path>
              <path fill="#fff" d="M71.989 15.998c0.008 0.115 0.012 0.249 0.012 0.385 0 3.046-2.24 5.568-5.162 6.010l-0.034 0.004h-10.43c-2.956-0.446-5.195-2.969-5.195-6.014 0-0.135 0.004-0.27 0.013-0.403l-0.001 0.018c-0.008-0.115-0.012-0.249-0.012-0.385 0-3.046 2.24-5.568 5.162-6.010l0.034-0.004h10.43c2.956 0.446 5.195 2.969 5.195 6.014 0 0.135-0.004 0.27-0.013 0.403l0.001-0.018z"></path>
              <path fill="#fff" d="M38.394 3.2c7.068 0 12.798 5.73 12.798 12.798s-5.73 12.798-12.798 12.798c-7.068 0-12.798-5.73-12.798-12.798s5.73-12.798 12.798-12.798z"></path>
              <path fill="#fff" d="M50.936 24.156c0.159-0.526 0.253-1.131 0.256-1.758v-12.8c-0.003-0.628-0.097-1.233-0.268-1.805l0.012 0.045c0.539 1.052 1.615 1.76 2.857 1.76 0.008 0 0.016-0 0.023-0h13.373c1.764 0.008 3.358 0.728 4.511 1.887l0 0c0.297 0.291 0.57 0.605 0.817 0.939l0.015 0.021c-0.263-0.368-0.536-0.692-0.833-0.993l0.001 0.001c-1.156-1.147-2.748-1.856-4.506-1.856-0.002 0-0.004 0-0.005 0h-12.798c-1.767 0-3.2 1.432-3.2 3.2v0 6.399c0 1.767 1.432 3.2 3.2 3.2v0h-0.576c-0.007-0-0.014-0-0.022-0-1.242 0-2.319 0.708-2.849 1.742l-0.008 0.018zM25.852 24.156c-0.539-1.052-1.615-1.76-2.857-1.76-0.008 0-0.016 0-0.023 0h-0.575c1.767 0 3.2-1.432 3.2-3.2v0 3.2c0.003 0.628 0.097 1.233 0.268 1.805l-0.012-0.045zM67.19 22.397c1.764-0.008 3.358-0.728 4.511-1.887l0-0c0.216-0.189 0.405-0.399 0.568-0.629l0.007-0.011c-0.171 0.241-0.36 0.451-0.572 0.636l-0.004 0.004c-1.153 1.16-2.747 1.88-4.51 1.888h-0.001zM9.599 22.397c-1.764-0.008-3.358-0.728-4.511-1.887l-0-0c-0.297-0.275-0.561-0.579-0.788-0.91l-0.012-0.018c0.264 0.356 0.526 0.669 0.805 0.965l-0.005-0.006c1.156 1.147 2.748 1.856 4.506 1.856 0.002 0 0.004 0 0.005 0h-0zM25.596 12.798c0-1.767-1.432-3.2-3.2-3.2v0h-12.798c-1.764 0.008-3.358 0.728-4.511 1.887l-0 0c-0.217 0.206-0.417 0.425-0.598 0.659l-0.010 0.013c0.191-0.247 0.39-0.466 0.605-0.669l0.003-0.003c1.153-1.16 2.747-1.88 4.51-1.888h13.375c0.007 0 0.014 0 0.022 0 1.242 0 2.319-0.708 2.849-1.742l0.008-0.018c-0.159 0.526-0.253 1.131-0.256 1.758v0.002zM31.995 3.2v0z"></path>
              <path fill="#2f313c" d="M44.793 0h-12.798c-4.143 0.012-7.668 2.647-9.002 6.332l-0.021 0.067h-13.374c-5.301 0-9.599 4.297-9.599 9.599s4.297 9.599 9.599 9.599v0h13.374c1.354 3.752 4.879 6.387 9.021 6.399h12.8c4.143-0.012 7.668-2.648 9.002-6.332l0.021-0.067h13.374c5.301 0 9.599-4.297 9.599-9.599s-4.297-9.599-9.599-9.599v0h-13.374c-1.354-3.752-4.879-6.387-9.021-6.399h-0.001zM31.995 25.596c-1.767 0-3.2-1.432-3.2-3.2v0-12.798c0-1.767 1.432-3.2 3.2-3.2v0h12.798c1.767 0 3.2 1.432 3.2 3.2v0 12.798c0 1.767-1.432 3.2-3.2 3.2v0zM54.392 19.197v-6.399h12.798c0.005-0 0.012-0 0.019-0 0.879 0 1.675 0.354 2.253 0.928l-0-0c0.585 0.58 0.946 1.384 0.946 2.272s-0.362 1.692-0.946 2.271l-0 0c-0.578 0.573-1.374 0.928-2.253 0.928-0.007 0-0.013-0-0.019-0h0.001zM9.599 19.197c-0.005 0-0.012 0-0.018 0-0.879 0-1.675-0.354-2.253-0.928l0 0c-0.585-0.58-0.946-1.384-0.946-2.272s0.362-1.692 0.946-2.271l0-0c0.578-0.573 1.374-0.928 2.253-0.928 0.007 0 0.013 0 0.020 0h12.797v6.399z"></path>
          </svg>`,
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="44" height="14" viewBox="0 0 101 32">
              <title>ladder</title>
              <path fill="#2F313C" d="M0 27.429h100.571v4.571h-100.571v-4.571z"></path>
              <path fill="#2F313C" d="M0 0h100.571v4.571h-100.571v-4.571z"></path>
              <path fill="#2F313C" d="M6.857 4.571h4.571v22.857h-4.571v-22.857z"></path>
              <path fill="#2F313C" d="M20.571 4.571h4.571v22.857h-4.571v-22.857z"></path>
              <path fill="#2F313C" d="M34.286 4.571h4.571v22.857h-4.571v-22.857z"></path>
              <path fill="#2F313C" d="M48 4.571h4.571v22.857h-4.571v-22.857z"></path>
              <path fill="#2F313C" d="M61.714 4.571h4.571v22.857h-4.571v-22.857z"></path>
              <path fill="#2F313C" d="M75.429 4.571h4.571v22.857h-4.571v-22.857z"></path>
              <path fill="#2F313C" d="M89.143 4.571h4.571v22.857h-4.571v-22.857z"></path>
         </svg>`,
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="6" viewBox="0 0 128 32">
              <title>hurdle</title>
              <path d="M0 10.667h10.667v21.333h-10.667v-21.333z"></path>
              <path d="M117.333 10.667h10.667v21.333h-10.667v-21.333z"></path>
              <path d="M0 0h128v10.667h-128v-10.667z"></path>
         </svg>`,
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="8" height="25" viewBox="0 0 10 32">
              <title>slalom-pole</title>
              <path d="M3.84 0h2.56v32h-2.56v-32z"></path>
              <path d="M5.12 24.32l5.12 7.68h-10.24l5.12-7.68z"></path>
         </svg>`,
      ];
      for(let i = 0; i < data.length; i ++){
        this.imgArr[i] = new Image();
        let svg = new Blob([data[i]], {type: 'image/svg+xml;charset=utf-8'});
        this.imgArr[i].src = DOMURL.createObjectURL(svg);
      }
      this.edgeColor = this.type === 'coach' ? 'rgb(69, 214, 149)' : 'white';
      this.$refs.field.style.backgroundImage = `url(/static/img/${this.type}Bg${this.index}.png)`;
      let index = parseInt(this.index);
      if(index === 1){
        this.$refs.field.style.backgroundSize = '320px 480px';
        this.$refs.field.style.backgroundPosition = '340px 41px';
      }else if(index === 2){
        this.$refs.field.style.backgroundSize = '750px 500px';
        this.$refs.field.style.backgroundPosition = '125px 31px';
      }else if(index === 3 || index === 4){
        this.$refs.field.style.backgroundSize = '400px 480px';
        this.$refs.field.style.backgroundPosition = '300px 41px';
      }else if(index === 5){
        this.$refs.field.style.backgroundSize = '560px 480px';
        this.$refs.field.style.backgroundPosition = '220px 41px';
      }else if(index === 6 || index === 7){
        this.$refs.field.style.backgroundSize = '518px 480px';
        this.$refs.field.style.backgroundPosition = '241px 41px';
      }else if(index === 8){
        this.$refs.field.style.backgroundSize = '442px 480px';
        this.$refs.field.style.backgroundPosition = '279px 41px';
      }else if(index === 9 || index === 10 || index === 11 || index === 16){
        this.$refs.field.style.backgroundSize = '880px 450px';
        this.$refs.field.style.backgroundPosition = '60px 54px';
      }else if(index === 12){
        this.$refs.field.style.backgroundSize = '460px 500px';
        this.$refs.field.style.backgroundPosition = '270px 31px';
      }else if(index === 13 || index === 14 || index === 15){
        this.$refs.field.style.backgroundSize = '500px 500px';
        this.$refs.field.style.backgroundPosition = '250px 31px';
      }else if(index === 17){
        this.$refs.field.style.backgroundSize = '290px 480px';
        this.$refs.field.style.backgroundPosition = '355px 41px';
      }else if(index === 18){
        this.$refs.field.style.backgroundSize = '750px 450px';
        this.$refs.field.style.backgroundPosition = '125px 54px';
      }
    }
  }
</script>

<style lang="scss" scoped>
  #ground{
    background-repeat: repeat;
    display: flex;
    justify-content: center;
  }
  .coachBg{
    background-image: url("../assets/coachBg.png");
  }
  .standardBg{
    background-image: url("../assets/standardBg.png");
  }
  #inputText {
    display: none;
    position: absolute;
    outline: none;
    opacity: 0.5;
    width: 200px;
    height: 20px;
    filter: alpha(opacity=50);
    padding-left: 10px;
    line-height: 20px;
  }
  .coachInputBorder{
    border: solid 2px rgb(69, 214, 149);
  }
  .standardInputBorder{
    border: solid 2px white;
  }
  .field{
    margin-top: 50px;
    width: 1000px;
    height: 563px;
    background-repeat: no-repeat;
    background-size: auto;
  }
  .coachFieldBorder{
    border: dashed 2px rgb(69, 214, 149) ;
  }
  .standardFieldBorder{
    border: dashed 2px white ;
  }
  #canvas{
    width: 1000px;
    height: 563px;
  }
</style>
