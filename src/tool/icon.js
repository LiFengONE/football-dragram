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
  inRange(x,y){
    switch (this.type){
      case 'point':
        return (this.end.x - 4) <= x && (this.end.y - 4) <= y && (this.end.y + 4) >= y && (this.end.x + 4) >= x;
        break;
      case 'triangle':
        return (this.end.x - 7) <= x && this.end.y <= y && (this.end.y + 18) >= y && (this.end.x + 7) >= x;
        break;
      case 'ring':
        return (this.end.x - 10) <= x && (this.end.y - 10) <= y && (this.end.y + 10) >= y && (this.end.x + 10) >= x;
        break;
      case 'halfRing':
        return (this.end.x - 10) <= x && (this.end.y - 10) <= y && (this.end.y + 10) >= y && (this.end.x + 10) >= x;
        break;
      case 'halfTriangle':
        return (this.end.x - 7) <= x && this.end.y <= y && (this.end.y + 18) >= y && (this.end.x + 7) >= x;
        break;
      case 'halfCircular':
        return (this.end.x - 10) <= x && (this.end.y - 10) <= y && (this.end.y + 10) >= y && (this.end.x + 10) >= x;
        break;
    }
  }
  move(x,y){
    this.end.x = x;
    this.end.y = y;
  }
  drawEdges(){
    this.ctx.strokeStyle = `rgb(69, 214, 149)`;
    switch (this.type){
      case 'point':
        this.ctx.strokeRect(this.end.x - 8,this.end.y - 8,16,16);
        break;
      case 'triangle':
        this.ctx.strokeRect(this.end.x - 9,this.end.y - 2,18,22);
        break;
      case 'ring':
        this.ctx.strokeRect(this.end.x - 12,this.end.y - 12,24,24);
        break;
      case 'halfRing':
        this.ctx.strokeRect(this.end.x - 12,this.end.y - 12,24,24);
        break;
      case 'halfTriangle':
        this.ctx.strokeRect(this.end.x - 9,this.end.y - 2,18,22);
        break;
      case 'halfCircular':
        this.ctx.strokeRect(this.end.x - 12,this.end.y - 12,24,24);
        break;
    }
  }
}
