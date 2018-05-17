export default class Polygon{
  constructor(ctx,points,next,color,edgeColor){
    this.ctx = ctx;
    this.points = points;
    this.next = next;
    this.angle = 0;
    this.color = color;
    this.edgeColor = edgeColor;
    this.finish = false;
    this.diff = [];
  }
  draw(){
    let colorArr = [];
    for(let i=1; i<7; i+=2){
      colorArr.push(parseInt("0x"+this.color.slice(i,i+2)));
    }
    this.ctx.save();
    this.ctx.fillStyle = `rgba(${colorArr.join(",")},0.3)`;
    this.ctx.strokeStyle = this.color;
    this.ctx.beginPath();
    this.ctx.moveTo(this.points[0][0], this.points[0][1]);
    for(let point of this.points){
      this.ctx.lineTo(point[0], point[1]);
    }
    if(this.finish){
      this.ctx.closePath();
      this.ctx.fill()
    }else {
      this.ctx.lineTo(this.next[0], this.next[1]);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }
  inRange(x,y){
    let points = this.points;
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
    for(let i = 0; i < this.points.length; i ++){
      this.points[i][0] = x - this.diff[i][0];
      this.points[i][1] = y - this.diff[i][1];
    }
  }
  drawEdges(){
    this.ctx.save();
    this.ctx.strokeStyle = this.edgeColor;
    this.ctx.beginPath();
    this.ctx.moveTo(this.points[0][0], this.points[0][1]);
    for(let point of this.points){
      this.ctx.lineTo(point[0], point[1]);
    }
    this.ctx.lineTo(this.points[0][0], this.points[0][1]);
    this.ctx.stroke();
    this.ctx.restore();
  }
}
