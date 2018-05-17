<template>
  <div id="ground" ref="ground" :class="type === 'coach' ? 'coachBg' : 'standardBg'">
    <div :class="['field', type === 'coach' ? hasGrid ? 'hasGrid1' : 'noGrid1' : hasGrid ? 'hasGrid2' : 'noGrid2', type === 'coach' ? 'coachFieldBorder' : 'standardFieldBorder']" ref="field">
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
        stack:[],
        imgWrap:[],
        obj:{},
        selectObj:{},
        imgArr:[],
        bgImg:{},
        polygonObj:{},
        edgeColor:''
      }
    },
    props:['type'],
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
        let stack = this.stack;
        ctx.clearRect(0, 0, this.width, this.height);
        if(this.tool === 'polygon'){
          if(JSON.stringify(this.polygonObj) === "{}"){
            let selectionColor = this.color[this.shapesColor];
            this.polygonObj = new Polygon(ctx,[[this.start.x,this.start.y]],[],selectionColor,this.edgeColor);
            console.log(this.polygonObj)
          }
        }else {
          this.polygonObj = {};
        }
        let arr = [];
        for(let obj of stack){
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
          if(this.tool){
            this.end = this.canvasMousePos(canvas,event);
            ctx.clearRect(0, 0, this.width, this.height);
            if(tool === 'square' || tool === 'rectangle' || tool === 'circular' || tool === 'reTriangle'){
              let selectionColor = this.color[this.shapesColor];
              this.obj = new Selection(ctx,tool,this.start,this.end,selectionColor,this.edgeColor);
              this.obj.draw();
              this.obj.drawEdges();
              this.reDraw();
            }else if(tool === 'ruler'){
              let selectionColor = this.color[this.shapesColor];
              this.obj = new Line(ctx,tool,this.start,this.end,selectionColor,this.edgeColor);
              this.obj.draw();
              this.obj.drawEdges();
              this.reDraw();
            } else if(tool === 'solidArrowLine' || tool === 'dottedArrowLine' || tool === 'waveLine' || tool === 'dottedLine'){
              let lineColor = this.color[this.linesColor];
              this.obj = new Line(ctx,tool,this.start,this.end,lineColor,this.edgeColor);
              this.obj.draw();
              this.obj.drawEdges();
              this.reDraw();
            }else if(tool === 'polygon'){
              this.polygonObj.next = [this.end.x,this.end.y];
              this.polygonObj.draw();
              this.reDraw();
            }
          }else if(JSON.stringify(this.selectObj) !== "{}"){
            this.end = this.canvasMousePos(canvas,event);
            if(this.selectObj instanceof Line){
              this.selectObj.move(this.end.x - this.start.x, this.end.y - this.start.y);
            }else {
              this.selectObj.move(this.end.x,this.end.y);
            }
            ctx.clearRect(0, 0, this.width, this.height);
            this.selectObj.drawEdges();
            this.reDraw();
          }
        }
      },
      canvasUp(){
        this.mouseDown = false;
        if(JSON.stringify(this.obj) !== "{}"){
          this.stack.push(this.obj);
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
            this.stack.push(this.polygonObj);
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
          this.obj.draw();
          this.obj.drawEdges();
          this.reDraw();
          this.stack.push(this.obj);
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
          this.obj.draw();
          this.obj.drawEdges();
          this.reDraw();
          this.stack.push(this.obj);
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
              this.obj.draw();
              this.obj.drawEdges();
              this.reDraw();
              this.stack.push(this.obj);
              this.selectObj = this.obj;
              console.log(this.selectObj);
              this.$store.commit('changeSelectState',true);
              this.$store.commit('changePlayerTextState',false);
              this.obj = {};
              this.$store.commit('setTool','');
            }
          }
        }
      },
      reDraw(){
        let stack = this.stack;
          for(let obj of stack){
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
        this.canvas.getContext("2d").clearRect(0, 0, this.width, this.height);
      },
      toDelete(){
        console.log(this.selectObj);
        let index = this.stack.indexOf(this.selectObj);
        this.stack.splice(index,1);
        this.selectObj = {};
        this.canvas.getContext("2d").clearRect(0, 0, this.width, this.height);
        this.reDraw();
      },
      toRotate(){
        this.selectObj.rotateSelf();
        this.canvas.getContext("2d").clearRect(0, 0, this.width, this.height);
        this.selectObj.drawEdges();
        this.reDraw();
      },
      text(){
        if(this.selectObj instanceof Icon || (this.selectObj instanceof Line && this.selectObj.type === 'ruler')){
          this.selectObj.text = this.text;
          this.canvas.getContext("2d").clearRect(0, 0, this.width, this.height);
          this.selectObj.drawEdges();
          this.reDraw();
        }
      }
    },
    mounted(){
      let srcArr = [
        '/static/img/ball.png',
        '/static/img/bigGate.png',
        '/static/img/smallGate.png',
        '/static/img/wheel.png',
        '/static/img/railing.png',
        '/static/img/stool.png',
        '/static/img/column.png',
      ];
      for(let i = 0; i < srcArr.length; i ++){
        this.imgArr[i] = new Image();
        this.imgArr[i].src = srcArr[i];
      }
      this.edgeColor = this.type === 'coach' ? 'rgb(69, 214, 149)' : 'white';
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
    background-size: 750px 500px;
    background-position: 125px 31px;
    border: dashed 2px rgb(69, 214, 149) ;
  }
  .coachFieldBorder{
    border: dashed 2px rgb(69, 214, 149) ;
  }
  .standardFieldBorder{
    border: dashed 2px white ;
  }
  .hasGrid1{
    background-image: url("../assets/footballField2.png");
  }
  .noGrid1{
    background-image: url("../assets/footballField.png");
  }
  .hasGrid2{
    background-image: url("../assets/footballField4.png");
  }
  .noGrid2{
    background-image: url("../assets/footballField3.png");
  }
  #canvas{
    width: 1000px;
    height: 563px;
  }
</style>
