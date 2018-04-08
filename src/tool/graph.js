export default class Graph{
  constructor(ctx,type,start,end){
    this.ctx = ctx;
    this.type = type;
    this.start = start;
    this.end = end;
  }
  draw(){
    //let width = this.end.x - this.start.x;
    //let height = this.end.y - this.start.y;
    let img = new Image();
    img.src = `/static/img/${this.type}.png`;
    img.onload = ()=> {
      this.ctx.drawImage(img,this.end.x,this.end.y);
    };
  }
  inRange(x,y){
    let img = new Image();
    img.src = `/static/img/${this.type}.png`;
    let imgWidth = img.width;
    let imgHeight = img.height;
    return this.end.x <= x && this.end.y <= y && (this.end.y + imgHeight) >= y && (this.end.x + imgWidth) >= x;
  }
  move(x,y){
    this.end.x = x;
    this.end.y = y;
  }
  drawEdges(){
    this.ctx.strokeStyle = `rgb(69, 214, 149)`;
    let img = new Image();
    img.src = `/static/img/${this.type}.png`;
    let imgWidth = img.width;
    let imgHeight = img.height;
    this.ctx.strokeRect(this.end.x ,this.end.y,imgWidth,imgHeight);
  }
}
