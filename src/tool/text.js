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
    this.ctx.fillText(this.text,this.end.x,this.end.y + 5);
  }
  inRange(x,y){
    return (this.end.x - 5) <= x && (this.end.y - 5) <= y && (this.end.y + 20) >= y && (this.end.x + 200) >= x;
  }
  move(x,y){
    this.end.x = x;
    this.end.y = y;
  }
  drawEdges(){
    this.ctx.strokeStyle = `rgb(69, 214, 149)`;
    this.ctx.strokeRect(this.end.x - 5 ,this.end.y - 7,210,20);
    this.ctx.strokeRect(this.end.x - 9 ,this.end.y - 11,8,8);
    this.ctx.strokeRect(this.end.x - 9 ,this.end.y + 9,8,8);
    this.ctx.strokeRect(this.end.x + 201 ,this.end.y - 11,8,8);
    this.ctx.strokeRect(this.end.x + 201 ,this.end.y + 9,8,8);
  }
}
