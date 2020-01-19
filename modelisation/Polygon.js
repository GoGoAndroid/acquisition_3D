class Polygon{

  constructor(pts,ctx){

    this.pts=pts
    ctx.beginPath();
    ctx.fillStyle="#" + Math.random().toString(16).slice(2,8);;
    ctx.moveTo(pts[0].x,pts[0].y);
    pts.filter((v,i) => i>0).map(p=> ctx.lineTo(p.x,p.y))

    ctx.closePath()
    ctx.stroke();
    ctx.fill();
  }

  symetrieY(coord,P,lines,canvas,ctx){
      let pts=[]
      for(var i=0;i<this.pts.length;i++){

          P[`SY_${coord}_${this.pts[i].name}`]=  new Point(
                this.pts[i].x ,
                coord - (this.pts[i].y-coord),
                `SY_${coord}_${this.pts[i].name}`,
                lines,
                canvas
              )
          pts.push(
            P[`SY_${coord}_${this.pts[i].name}`]
          )
      }
      new Polygon(pts,ctx)
  }
}
