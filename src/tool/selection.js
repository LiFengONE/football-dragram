export default class Selection{
  constructor(ctx,type,start,end,color){
    this.ctx = ctx;
    this.type = type;
    this.start = start;
    this.end = end;
    this.color = color;
    this.diffX = 0;
    this.diffY = 0;
  }
  draw(){
    let colorArr = [];
    for(let i=1; i<7; i+=2){
      colorArr.push(parseInt("0x"+this.color.slice(i,i+2)));
    }
    this.ctx.fillStyle = `rgba(${colorArr.join(",")},0.3)`;
    let width = this.end.x - this.start.x;
    let height = this.end.y - this.start.y;
    switch (this.type){
      case 'square':
        let length = width > height ? height : width;
        this.ctx.fillRect(this.start.x,this.start.y,length,length);
        break;
      case 'rectangle':
        this.ctx.fillRect(this.start.x,this.start.y,width,height);
        break;
      case 'circular':
        let center = {
          x: (this.end.x + this.start.x) / 2 ,
          y: (this.end.y + this.start.y) / 2
        };
        let a = Math.abs(this.end.x - this.start.x) / 2;
        let b = Math.abs(this.end.y - this.start.y) / 2;
        let ox = 0.5 * a,
          oy = 0.6 * b;
        this.ctx.save();
        this.ctx.translate(center.x, center.y);
        this.ctx.beginPath();
        //从椭圆纵轴下端开始逆时针方向绘制
        this.ctx.moveTo(0, b);
        this.ctx.bezierCurveTo(ox, b, a, oy, a, 0);
        this.ctx.bezierCurveTo(a, -oy, ox, -b, 0, -b);
        this.ctx.bezierCurveTo(-ox, -b, -a, -oy, -a, 0);
        this.ctx.bezierCurveTo(-a, oy, -ox, b, 0, b);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.restore();
        break;
    }
  }
  inRange(x,y){
    return this.start.x <= x && this.start.y <= y && this.end.y >= y && this.end.x >= x;
  }
  move(x,y){
    let width = this.end.x - this.start.x;
    let height = this.end.y - this.start.y;
    let length = width > height ? height : width;
    this.start.x = x - this.diffX;
    this.start.y = y - this.diffY;
    switch (this.type){
      case 'square':
        this.end.x = this.start.x + length;
        this.end.y = this.start.y + length;
        break;
      case 'rectangle':
        this.end.x = this.start.x + width;
        this.end.y = this.start.y + height;
        break;
      case 'circular':
        this.end.x = this.start.x + width;
        this.end.y = this.start.y + height;
        break;
    }
  }
  drawEdges(){
    this.ctx.strokeStyle = `rgb(69, 214, 149)`;
    let width = this.end.x - this.start.x;
    let height = this.end.y - this.start.y;
    switch (this.type){
      case 'square':
        let length = width > height ? height : width;
        this.ctx.strokeRect(this.start.x,this.start.y,length,length);
        this.ctx.strokeRect(this.start.x - 4  ,this.start.y - 4,8,8);
        this.ctx.strokeRect(this.start.x + length - 4  ,this.start.y - 4,8,8);
        this.ctx.strokeRect(this.start.x - 4 ,this.start.y + height -4,8,8);
        this.ctx.strokeRect(this.start.x + length - 4 ,this.start.y + height -4,8,8);
        break;
      case 'rectangle':
        this.ctx.strokeRect(this.start.x,this.start.y,width,height);
        this.ctx.strokeRect(this.start.x - 4  ,this.start.y - 4,8,8);
        this.ctx.strokeRect(this.start.x + width - 4  ,this.start.y - 4,8,8);
        this.ctx.strokeRect(this.start.x + width / 2 - 4  ,this.start.y - 4,8,8);
        this.ctx.strokeRect(this.start.x - 4 ,this.start.y + height -4,8,8);
        this.ctx.strokeRect(this.start.x + width / 2 - 4  ,this.start.y + height - 4,8,8);
        this.ctx.strokeRect(this.start.x + width - 4 ,this.start.y + height -4,8,8);
        break;
      case 'circular':
        this.ctx.strokeRect(this.start.x,this.start.y,width,height);
        this.ctx.strokeRect(this.start.x - 4  ,this.start.y - 4,8,8);
        this.ctx.strokeRect(this.start.x + width - 4  ,this.start.y - 4,8,8);
        this.ctx.strokeRect(this.start.x + width / 2 - 4  ,this.start.y - 4,8,8);
        this.ctx.strokeRect(this.start.x - 4 ,this.start.y + height -4,8,8);
        this.ctx.strokeRect(this.start.x + width / 2 - 4  ,this.start.y + height - 4,8,8);
        this.ctx.strokeRect(this.start.x + width - 4 ,this.start.y + height -4,8,8);
        break;
    }
  }

}
