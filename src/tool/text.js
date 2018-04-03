export default class Text{
  constructor(ctx,text,start,end){
    this.ctx = ctx;
    this.text = text;
    this.start = start;
    this.end = end;
  }
  draw(){
    let width = this.end.x - this.start.x;
    let height = this.end.y - this.start.y;
    this.ctx.font = "bold 40px";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(this.text,this.end.x,this.end.y);
  }
}
