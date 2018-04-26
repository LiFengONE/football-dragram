export default class Line{
  constructor(ctx,type,start,end,color){
    this.ctx = ctx;
    this.type = type;
    this.start = start;
    this.end = end;
    this.color = color;
    this.cache = {
      start: {
        x: start.x,
        y: start.y
      },
      end: {
        x: end.x,
        y: end.y
      }
    };
    this.diffX = 0;
    this.diffY = 0;
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
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.moveTo(this.start.x, this.start.y);
        this.ctx.lineTo(this.end.x, this.end.y);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.restore();
        this.drawArrow(this.start.x, this.start.y, this.end.x, this.end.y);
        break;
      case 'dottedArrowLine':
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.setLineDash([5,6]);
        this.ctx.moveTo(this.start.x, this.start.y);
        this.ctx.lineTo(this.end.x, this.end.y);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.restore();
        this.drawArrow(this.start.x, this.start.y, this.end.x, this.end.y);
        break;
      case 'waveLine':
        let width = this.end.x - this.start.x;
        let height = this.end.y - this.start.y;
        let alpha = Math.atan2(width, height);
        let len = Math.sqrt(width * width + height * height);
        this.ctx.save();
        this.ctx.moveTo(this.start.x,this.start.y);
        this.ctx.translate(this.start.x,this.start.y);
        this.ctx.rotate(  Math.PI / 2 - alpha);
        let x = 0;
        let y;
        let i = 0;
        let lastPoint = [0,0];
        while (x < len - 15){
          let index = i % 4;
          let firstMiddlePoint;
          let secondMiddlePoint;
          switch (index){
            case 0:
              y = 0;
              firstMiddlePoint = [lastPoint[0] ,lastPoint[1] + 2.5];
              secondMiddlePoint = [lastPoint[0] + 2.5 , lastPoint[1] + 5];
              break;
            case 1:
              y = 5;
              firstMiddlePoint = [lastPoint[0] + 2.5 ,lastPoint[1] + 5];
              secondMiddlePoint = [lastPoint[0] + 5 , lastPoint[1] + 2.5];
              break;
            case 2:
              y = 0;
              firstMiddlePoint = [lastPoint[0]  ,lastPoint[1] - 2.5];
              secondMiddlePoint = [lastPoint[0] + 2.5 , lastPoint[1] - 5];
              break;
            case 3:
              y = -5;
              firstMiddlePoint = [lastPoint[0] + 2.5 ,lastPoint[1] - 5];
              secondMiddlePoint = [lastPoint[0] + 5 , lastPoint[1] - 2.5];
              break;
          }
          this.ctx.beginPath();
          this.ctx.moveTo(lastPoint[0],lastPoint[1]);
          this.ctx.bezierCurveTo(firstMiddlePoint[0],firstMiddlePoint[1],secondMiddlePoint[0],secondMiddlePoint[1],x,y);
          this.ctx.closePath();
          this.ctx.stroke();
          lastPoint = [x,y];
          x += 5;
          i ++;
        }
        this.ctx.restore();
        this.drawArrow(this.start.x, this.start.y, this.end.x, this.end.y);
        break;
      case 'dottedLine':
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.setLineDash([5,6]);
        this.ctx.moveTo(this.start.x, this.start.y);
        this.ctx.lineTo(this.end.x, this.end.y);
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
  inRange(x,y){
    let vs = [
      [this.start.x - 10 ,this.start.y  ],
      [ this.start.x + 10, this.start.y ],
      [ this.end.x - 10,this.end.y ],
      [this.end.x + 10,this.end.y ]
    ];
    let inside = false;
    for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      let xi = vs[i][0], yi = vs[i][1];
      let xj = vs[j][0], yj = vs[j][1];
      let intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  }
  move(diffX,diffY){
    this.diffX = diffX;
    this.diffY = diffY;
    this.start.x = diffX + this.cache.start.x;
    this.start.y = diffY + this.cache.start.y;
    this.end.x = diffX + this.cache.end.x;
    this.end.y = diffY + this.cache.end.y;
  }
  drawEdges(){
    this.ctx.strokeStyle = `rgb(69, 214, 149)`;
    this.ctx.strokeRect(this.start.x - 8,this.start.y - 8,16,16);
    this.ctx.strokeRect(this.end.x - 8,this.end.y - 8,16,16);
  }
}
