export default class Selection{
  constructor(ctx,type,start,end,color){
    this.ctx = ctx;
    this.type = type;
    this.start = start;
    this.end = end;
    this.angle = 0;
    this.color = color;
    this.width = this.end.x - this.start.x;
    this.height =  this.end.y - this.start.y;
    this.length = this.width > this.height ? this.height : this.width;
    //this.diffX = 0;
    //this.diffY = 0;
    this.diffStartX = 0;
    this.diffStartY = 0;
    this.diffEndX = 0;
    this.diffEndY = 0;
  }
  draw(){
    let colorArr = [];
    for(let i=1; i<7; i+=2){
      colorArr.push(parseInt("0x"+this.color.slice(i,i+2)));
    }
    let point = {
      x: - this.width / 2,
      y: - this.height / 2
    };
    let center = {};
    if(this.type === 'square'){
      center = {
        x: this.start.x + this.length / 2,
        y: this.start.y + this.length / 2
      }
    }else {
      center ={
        x: (this.end.x + this.start.x) / 2 ,
        y: (this.end.y + this.start.y) / 2
      };
    }
    this.ctx.save();
    this.ctx.translate(center.x,center.y);
    this.ctx.rotate(this.angle);
    this.ctx.fillStyle = `rgba(${colorArr.join(",")},0.3)`;
    switch (this.type){
      case 'square':
        this.ctx.fillRect(point.x,point.y,this.length,this.length);
        break;
      case 'rectangle':
        this.ctx.fillRect(point.x,point.y,this.width,this.height);
        break;
      case 'circular':
        let a = this.width / 2;
        let b = this.height / 2;
        let ox = 0.5 * a,
          oy = 0.6 * b;
        //this.ctx.save();
        //this.ctx.translate(this.center.x, this.center.y);
        this.ctx.beginPath();
        //从椭圆纵轴下端开始逆时针方向绘制
        this.ctx.moveTo(0, b);
        this.ctx.bezierCurveTo(ox, b, a, oy, a, 0);
        this.ctx.bezierCurveTo(a, -oy, ox, -b, 0, -b);
        this.ctx.bezierCurveTo(-ox, -b, -a, -oy, -a, 0);
        this.ctx.bezierCurveTo(-a, oy, -ox, b, 0, b);
        this.ctx.closePath();
        this.ctx.fill();
        break;
    }
    this.ctx.restore();
  }
  inRange(x,y){
    let points = [];
    if(this.type === 'square'){
      points = [
        [this.start.x , this.start.y],
        [this.start.x + this.length ,this.start.y],
        [this.start.x + this.length, this.start.y + this.length],
        [this.start.x, this.start.y + this.length]
      ];
    }else {
      points = [
        [this.start.x , this.start.y],
        [this.start.x + this.width ,this.start.y],
        [this.start.x + this.width, this.start.y + this.height],
        [this.start.x, this.start.y + this.height]
      ];
    }
    let center = {};
    if(this.type === 'square'){
      center = {
        x: this.start.x + this.length / 2,
        y: this.start.y + this.length / 2
      }
    }else {
      center ={
        x: (this.end.x + this.start.x) / 2 ,
        y: (this.end.y + this.start.y) / 2
      };
    }
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
    this.start.x = x - this.diffStartX;
    this.start.y = y - this.diffStartY;
    this.end.x = x + this.diffEndX;
    this.end.y = y + this.diffEndY;
  }
  rotateSelf(){
    this.angle += Math.PI / 4;
  }
  drawEdges(){
    let point = {
      x: - this.width / 2,
      y: - this.height / 2
    };
    let center = {};
    if(this.type === 'square'){
      center = {
        x: this.start.x + this.length / 2,
        y: this.start.y + this.length / 2
      }
    }else {
      center ={
        x: (this.end.x + this.start.x) / 2 ,
        y: (this.end.y + this.start.y) / 2
      };
    }
    this.ctx.save();
    this.ctx.translate(center.x,center.y);
    this.ctx.rotate(this.angle);
    this.ctx.strokeStyle = `rgb(69, 214, 149)`;
   if(this.type === 'square'){
     this.ctx.strokeRect(point.x,point.y,this.length,this.length);
     this.ctx.strokeRect(point.x - 4  ,point.y - 4,8,8);
     this.ctx.strokeRect(point.x + this.length - 4  ,point.y - 4,8,8);
     this.ctx.strokeRect(point.x - 4 ,point.y + this.length -4,8,8);
     this.ctx.strokeRect(point.x + this.length - 4 ,point.y + this.length -4,8,8);
   }else {
     this.ctx.strokeRect(point.x,point.y,this.width,this.height);
     this.ctx.strokeRect(point.x - 4  ,point.y - 4,8,8);
     this.ctx.strokeRect(point.x + this.width - 4  ,point.y - 4,8,8);
     this.ctx.strokeRect(point.x - 4 ,point.y + this.height -4,8,8);
     this.ctx.strokeRect(point.x + this.width - 4 ,point.y + this.height -4,8,8);
   }
    // switch (this.type){
    //   case 'square':
    //     let length = width > height ? height : width;
    //     this.ctx.strokeRect(this.start.x,this.start.y,length,length);
    //     this.ctx.strokeRect(this.start.x - 4  ,this.start.y - 4,8,8);
    //     this.ctx.strokeRect(this.start.x + length - 4  ,this.start.y - 4,8,8);
    //     this.ctx.strokeRect(this.start.x - 4 ,this.start.y + height -4,8,8);
    //     this.ctx.strokeRect(this.start.x + length - 4 ,this.start.y + height -4,8,8);
    //     break;
    //   case 'rectangle':
    //     this.ctx.strokeRect(this.start.x,this.start.y,width,height);
    //     this.ctx.strokeRect(this.start.x - 4  ,this.start.y - 4,8,8);
    //     this.ctx.strokeRect(this.start.x + width - 4  ,this.start.y - 4,8,8);
    //     this.ctx.strokeRect(this.start.x + width / 2 - 4  ,this.start.y - 4,8,8);
    //     this.ctx.strokeRect(this.start.x - 4 ,this.start.y + height -4,8,8);
    //     this.ctx.strokeRect(this.start.x + width / 2 - 4  ,this.start.y + height - 4,8,8);
    //     this.ctx.strokeRect(this.start.x + width - 4 ,this.start.y + height -4,8,8);
    //     break;
    //   case 'circular':
    //     this.ctx.strokeRect(this.start.x,this.start.y,width,height);
    //     this.ctx.strokeRect(this.start.x - 4  ,this.start.y - 4,8,8);
    //     this.ctx.strokeRect(this.start.x + width - 4  ,this.start.y - 4,8,8);
    //     this.ctx.strokeRect(this.start.x + width / 2 - 4  ,this.start.y - 4,8,8);
    //     this.ctx.strokeRect(this.start.x - 4 ,this.start.y + height -4,8,8);
    //     this.ctx.strokeRect(this.start.x + width / 2 - 4  ,this.start.y + height - 4,8,8);
    //     this.ctx.strokeRect(this.start.x + width - 4 ,this.start.y + height -4,8,8);
    //     break;
    // }
    this.ctx.restore();
  }
}
