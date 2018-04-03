export default class Line{
  constructor(ctx,type,start,end,color){
    this.ctx = ctx;
    this.type = type;
    this.start = start;
    this.end = end;
    this.color = color;
  }
  getArrow(start, end, beta, length) {
    let alpha = Math.atan2(end.y - start.y, end.x - start.x) * 180 / Math.PI;
    let angle1 = (alpha + beta) * Math.PI / 180;
    let angle2 = (alpha - beta) * Math.PI / 180;
    return {
      left: {
        x: end.x - length * Math.cos(angle1),
        y: end.y + length * Math.sin(angle1)
      },
      right: {
        x: end.x - length * Math.cos(angle2),
        y: end.y + length * Math.cos(angle2)
      }
    }
  }
  draw(){
    this.ctx.strokeStyle = this.color;
    this.ctx.fillStyle = this.color;
    this.ctx.lineWidth = 1;
    switch (this.type){
      case 'solidArrowLine':
        this.ctx.beginPath();
        this.ctx.moveTo(this.start.x, this.start.y);
        this.ctx.lineTo(this.end.x, this.end.y);
        this.ctx.lineTo(this.end.x, this.end.y);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.restore();
        this.drawArrow(this.start.x, this.start.y, this.end.x, this.end.y);
        break;
      case 'dottedArrowLine':
        this.ctx.beginPath();
        this.ctx.moveTo(this.start.x, this.start.y);
        this.ctx.dashedLineTo(this.end.x, this.end.y);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.restore();
        this.drawArrow(this.start.x, this.start.y, this.end.x, this.end.y);
        break;
      case 'waveLine':
        break;
      case 'dottedLine':
        this.ctx.beginPath();
        this.ctx.moveTo(this.start.x, this.start.y);
        this.ctx.dashedLineTo(this.end.x, this.end.y);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.restore();
        break;
    }
  }
  drawArrow(x1, y1, x2, y2) {
    let endRadians = Math.atan((y2 - y1) / (x2 - x1));
    endRadians += ((x2 > x1) ? 90 : -90) * Math.PI / 180;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(x2, y2);
    this.ctx.rotate(endRadians);
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(5, 20);
    this.ctx.lineTo(-5, 20);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.restore();
  }
}
