export default class Icon{
  constructor(ctx,type,start,end,color){
    this.ctx = ctx;
    this.type = type;
    this.start = start;
    this.end = end;
    this.color = color;
  }
  draw(){
    let width = this.end.x - this.start.x;
    let height = this.end.y - this.start.y;
    switch (this.type){
      case 'point':
        this.ctx.beginPath();
        this.ctx.arc(this.end.x, this.end.y, 4, 0, Math.PI*2, true);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        break;
      case 'triangle':
        this.ctx.beginPath();
        this.ctx.moveTo(this.end.x,this.end.y);
        this.ctx.lineTo(this.end.x - 7,this.end.y + 18);
        this.ctx.lineTo(this.end.x + 7,this.end.y + 18);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        break;
      case 'ring':
        this.ctx.beginPath();
        this.ctx.arc(this.end.x,this.end.y,10,0,Math.PI * 2,false);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(this.end.x,this.end.y,7,0,Math.PI * 2,false);
        this.ctx.closePath();
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        break;
      case 'halfRing':
        this.ctx.beginPath();
        this.ctx.arc(this.end.x,this.end.y,10,0,Math.PI * 2,false);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(this.end.x,this.end.y,7,0,Math.PI * 2,false);
        this.ctx.arc(this.end.x,this.end.y,10,Math.PI / 3,Math.PI * 2 / 3,false);
        this.ctx.closePath();
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.moveTo(this.end.x - 3.5,this.end.y + 6);
        this.ctx.lineTo(this.end.x - 6.5,this.end.y + 9);
        this.ctx.lineTo(this.end.x - 5,this.end.y + 11.5);
        this.ctx.lineTo(this.end.x - 2,this.end.y + 7.5);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.moveTo(this.end.x + 3.5,this.end.y + 6);
        this.ctx.lineTo(this.end.x + 6.5,this.end.y + 9);
        this.ctx.lineTo(this.end.x + 5,this.end.y + 11.5);
        this.ctx.lineTo(this.end.x + 2,this.end.y + 7.5);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.fillStyle = 'black';
        this.ctx.font = "bold 28px"; //字体样式
        this.ctx.fillText("GK", this.end.x - 6 , this.end.y + 5);
        break;
      case 'halfTriangle':
        this.ctx.beginPath();
        this.ctx.moveTo(this.end.x,this.end.y );
        this.ctx.lineTo(this.end.x - 10,this.end.y + 20);
        this.ctx.lineTo(this.end.x + 10,this.end.y + 20);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.moveTo(this.end.x,this.end.y );
        this.ctx.lineTo(this.end.x - 3,this.end.y + 6);
        this.ctx.lineTo(this.end.x + 3,this.end.y + 6);
        this.ctx.closePath();
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
        break;
      case 'halfCircular':
        this.ctx.beginPath();
        this.ctx.arc(this.end.x,this.end.y,10,0,Math.PI * 2,false);
        this.ctx.closePath();
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(this.end.x,this.end.y,10,0,Math.PI * 7 / 6,false);
        this.ctx.arc(this.end.x,this.end.y,10,Math.PI * 11 / 6,Math.PI * 2,false);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        break;
    }
  }
}
