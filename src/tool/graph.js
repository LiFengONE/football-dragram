export default class Graph{
  constructor(ctx,type,start,end){
    this.ctx = ctx;
    this.type = type;
    this.start = start;
    this.end = end;
  }
  draw(){
    let width = this.end.x - this.start.x;
    let height = this.end.y - this.start.y;
    let img = new Image();
    img.src = `/static/img/${this.type}.png`;
    img.onload = ()=> {
      this.ctx.drawImage(img,this.end.x,this.end.y);
    };
  }
}
