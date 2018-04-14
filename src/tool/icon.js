export default class Icon{
  constructor(ctx,type,pos,color){
    this.ctx = ctx;
    this.type = type;
    this.pos = pos;
    this.color = color;
    this.width = 20;
    this.height = 20;
    this.angle = 0;
  }
  draw(){
    this.ctx.save();
    this.ctx.translate(this.pos.x,this.pos.y);
    this.ctx.rotate(this.angle);
    switch (this.type){
      case 'point':
        //this.width = 6;
        //this.height = 6;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 4, 0, Math.PI*2, true);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        break;
      case 'triangle':
        //this.width = 16;
        //this.height = 20;
        this.ctx.beginPath();
        this.ctx.moveTo(0, - 9);
        this.ctx.lineTo( - 7, 9);
        this.ctx.lineTo( 7, 9);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        break;
      case 'ring':
        //this.width = 12;
        //this.height = 12;
        this.ctx.beginPath();
        this.ctx.arc(0 , 0, 10, 0,Math.PI * 2,false);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(0,0,7,0,Math.PI * 2,false);
        this.ctx.closePath();
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        break;
      case 'halfRing':
        //this.width = 12;
        //this.height = 12;
        this.ctx.beginPath();
        this.ctx.arc(0,0,10,0,Math.PI * 2,false);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(0,0,7,0,Math.PI * 2,false);
        this.ctx.arc(0,0,10,Math.PI / 3,Math.PI * 2 / 3,false);
        this.ctx.closePath();
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.moveTo( - 3.5,  6);
        this.ctx.lineTo( - 6.5, 9);
        this.ctx.lineTo( - 5, 11.5);
        this.ctx.lineTo( - 2, 7.5);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.moveTo( 3.5, 6);
        this.ctx.lineTo( 6.5, 9);
        this.ctx.lineTo( 5, 11.5);
        this.ctx.lineTo( 2, 7.5);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.fillStyle = 'black';
        this.ctx.font = "bold 28px"; //字体样式
        this.ctx.fillText("GK",  - 6 ,  5);
        break;
      case 'halfTriangle':
        //this.width = 20;
        //this.height = 20;
        this.ctx.beginPath();
        this.ctx.moveTo(0, -10 );
        this.ctx.lineTo( - 10, 10);
        this.ctx.lineTo( 10, 10);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.moveTo(0,-10);
        this.ctx.lineTo( -3, -4);
        this.ctx.lineTo( 3, -4);
        this.ctx.closePath();
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
        break;
      case 'halfCircular':
        //this.width = 12;
        //this.height = 12;
        this.ctx.beginPath();
        this.ctx.arc(0,0,10,0,Math.PI * 2,false);
        this.ctx.closePath();
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(0,0,10,0,Math.PI * 7 / 6,false);
        this.ctx.arc(0,0,10,Math.PI * 11 / 6,Math.PI * 2,false);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        break;
    }
    this.ctx.restore();
  }
  inRange(x,y){
    let points = [
      [this.pos.x - this.width / 2, this.pos.y - this.height / 2],
      [this.pos.x + this.width / 2, this.pos.y - this.height / 2],
      [this.pos.x + this.width / 2, this.pos.y + this.height / 2],
      [this.pos.x - this.width / 2, this.pos.y + this.height / 2]
    ];
    let center = {
      x: this.pos.x,
      y: this.pos.y
    };
    for(let i = 0; i < points.length; i++){
      let x = points[i][0];
      let y = points[i][1];
      points[i][0] = (x - center.x) * Math.cos(this.angle) + (y - center.y) * Math.sin(this.angle) + center.x;
      points[i][1] = -(x - center.x) * Math.sin(this.angle) + (y - center.y) * Math.cos(this.angle) + center.y;
    }
    let inside = false;
    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
      let xi = points[i][0], yi = points[i][1];
      let xj = points[j][0], yj = points[j][1];
      let intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  }
  move(x,y){
    this.pos.x = x;
    this.pos.y = y;
  }
  rotateSelf(){
    this.angle += Math.PI / 4;
  }
  drawEdges(){
    this.ctx.save();
    this.ctx.translate(this.pos.x,this.pos.y);
    this.ctx.rotate(this.angle);
    this.ctx.strokeStyle = `rgb(69, 214, 149)`;
    this.ctx.strokeRect(- this.width / 2 , - this.height / 2 , this.width, this.height);
    this.ctx.restore();
  }
}
