<template>
  <div id="ground">
    <div class="field" ref="field">
      <canvas id="canvas" ref="canvas" width="1000px" height="563px" @click="canvasClick($event)" @mousedown="canvasDown($event)"  @mousemove="canvasMove($event)" @mouseup="canvasUp($event)" @dragenter="dragEnter($event)" @dragover="dragOver($event)" @drop="dragFinished($event)"></canvas>
      <input type="text" id="inputText" ref="inputText">
    </div>
  </div>
</template>

<script>
  import Selection from '../tool/selection'
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
      }
    },
    computed:{
      tool(){
        return this.$store.state.tool;
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
      }

    },
    methods: {
      canvasDown(event){
        let canvas = this.canvas;
        this.start = this.canvasMousePos(canvas,event);
        if(this.tool){
          this.mouseDown = true;
        }else if(JSON.stringify(this.selectObj) === "{}"){
          let ctx = canvas.getContext("2d");
          let stack = this.stack;
          ctx.clearRect(0, 0, this.width, this.height);
          for(let obj of stack){
            obj.draw();
            if(obj.inRange(this.start.x,this.start.y)){
              obj.drawEdges();
              this.selectObj = obj;
              if(obj instanceof Selection){
                obj.diffX = this.start.x - obj.start.x;
                obj.diffY = this.start.y - obj.start.y;
              }
            }
          }
        }
      },
      canvasMove(event){
        let mouseDown = this.mouseDown;
        let tool = this.tool;
        let canvas = this.canvas;
        let ctx = canvas.getContext("2d");
        if(mouseDown){
          this.end = this.canvasMousePos(canvas,event);
          ctx.clearRect(0, 0, this.width, this.height);
          if(tool === 'square' || tool === 'rectangle' || tool === 'circular'){
            let selectionColor = this.color[this.shapesColor];
            this.obj = new Selection(ctx,tool,this.start,this.end,selectionColor);
            this.obj.draw();
            this.reDraw();
          }else if(tool === 'solidArrowLine' || tool === 'dottedArrowLine' || tool === 'waveLine' || tool === 'dottedLine'){
            let lineColor = this.color[this.linesColor];
            this.obj = new Line(ctx,tool,this.start,this.end,lineColor);
            this.obj.draw();
            this.reDraw();
          }
        }else if(JSON.stringify(this.selectObj) !== "{}"){
          this.end = this.canvasMousePos(canvas,event);
          let diffX = this.end.x -  this.start.x;
          let diffY = this.end.y -  this.start.y;
          if(this.selectObj instanceof Line){
            this.selectObj.move(this.end.x - this.start.x, this.end.y - this.start.y);
          }else {
            this.selectObj.move(this.end.x,this.end.y);
          }
          ctx.clearRect(0, 0, this.width, this.height);
          this.reDraw();
        }
      },
      canvasUp(){
        this.mouseDown = false;
        if(JSON.stringify(this.obj) !== "{}"){
          this.obj.drawEdges();
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
        }else if(this.selectObj instanceof Line){
          this.selectObj.cache.start.x = this.selectObj.start.x;
          this.selectObj.cache.start.y = this.selectObj.start.y;
          this.selectObj.cache.end.x = this.selectObj.end.x;
          this.selectObj.cache.end.y = this.selectObj.end.y;
          this.selectObj = {};
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
      dragEnter(event){

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
        if(allGraph.indexOf(tool) > -1){this.end = this.canvasMousePos(canvas,event);
          this.obj = new Graph(ctx,tool,this.start,this.end);
          ctx.clearRect(0, 0, this.width, this.height);
          this.reDraw();
          this.obj.draw();
          this.obj.drawEdges();
          this.stack.push(this.obj);
        }else if(allIcon.indexOf(tool) > -1){
          let color = '';
          if(tool === 'point' || tool === 'triangle'){
            color = this.color[this.equipmentColor];
          }else if(tool === 'ring' || tool === 'halfRing' || tool === 'halfTriangle' || tool === 'halfCircular'){
            color =  this.color[this.playersColor];
          }
          this.obj = new Icon(ctx,tool,this.start,this.end,color);
          ctx.clearRect(0, 0, this.width, this.height);
          this.reDraw();
          this.obj.draw();
          this.obj.drawEdges();
          this.stack.push(this.obj);
        }else if(tool = 'text'){
          this.inputText.style.display = 'block';
          this.inputText.parentNode.style.position = 'relative';
          this.inputText.style.top = this.end.y  + 'px';
          this.inputText.style.left = this.end.x  + 'px';
          this.inputText.focus();
          document.onkeydown = (e) =>{
            if(e.keyCode === 13 ){
              let text = this.inputText.value;
              this.inputText.style.display = 'none';
              this.inputText.value = '';
              this.inputText.parentNode.style.position = '';
              this.obj = new Text(ctx,text,this.start,this.end);
              ctx.clearRect(0, 0, this.width, this.height);
              this.reDraw();
              this.obj.draw();
              this.obj.drawEdges();
              this.stack.push(this.obj);
            }
          }
        }
        this.$store.commit('setTool','');
      },
      canvasClick(event){
//        let canvas = this.canvas;
//        let ctx = canvas.getContext("2d");
//        this.end = this.canvasMousePos(canvas,event);
//        let stack = this.stack;
//        ctx.clearRect(0, 0, this.width, this.height);
//        for(let obj of stack){
//          obj.draw();
//          if(obj.inRange(this.end.x,this.end.y)){
//            obj.drawEdges();
//            this.selectObj = obj;
//          }
//        }
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
//            let img = new Image();
//            img.src = url;
//            document.body.appendChild(img);
            let a = document.createElement('a');
            a.href = url;
            a.download = new Date() + ".png";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
        });
      }

    },
    watch:{
      downloading(){
//        let url = this.canvas.toDataURL();
//        let a = document.createElement('a');
//        a.href = url;
//        a.download = new Date() + ".png";
//        document.body.appendChild(a);
//        a.click();
//        document.body.removeChild(a);
        this.downImg()
      }
    },
    mounted(){
      let context = this.canvas.getContext("2d"),
        moveToFunction = CanvasRenderingContext2D.prototype.moveTo;
      CanvasRenderingContext2D.prototype.lastMoveToLocation = {};
      CanvasRenderingContext2D.prototype.moveTo = function(x, y) {
        moveToFunction.apply(context, [x, y]);
        this.lastMoveToLocation.x = x;
        this.lastMoveToLocation.y = y;
      };
      CanvasRenderingContext2D.prototype.dashedLineTo = function(x, y, dashLength) {
        dashLength = dashLength === undefined ? 3 : dashLength;
        let startX = this.lastMoveToLocation.x;
        let startY = this.lastMoveToLocation.y;
        let deltaX = x - startX;
        let deltaY = y - startY;
        let numDashes = Math.floor(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / dashLength);
        for (let i = 0; i < numDashes; ++i) {
          this[i % 2 === 0 ? 'moveTo' : 'lineTo'](startX + (deltaX / numDashes) * i, startY + (deltaY / numDashes) * i);
        }
        this.moveTo(x, y);
      };
    }
  }
</script>

<style lang="scss" scoped>
  #ground{
    background-image: url("../assets/background.png");
    background-repeat: repeat;
    display: flex;
    justify-content: center;
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
    border: solid 2px rgb(69, 214, 149);
  }
  .field{
    margin-top: 50px;
    width: 1000px;
    height: 563px;
    background-image: url("../assets/footballField.png");
    background-repeat: no-repeat;
    background-size: 750px 500px;
    background-position: 125px 31px;
    border: dashed 2px rgb(69, 214, 149) ;
  }
</style>
