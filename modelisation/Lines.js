class Lines{

  constructor(canvas,ctx,margin){
    this.canvas=canvas
    this.ctx=ctx
    this.margin=margin
    this.linesX={}
    this.linesY={}
  }

  add(point){
    if (!this.linesX.hasOwnProperty(point.x)){
      this.linesX[point.x]=point.name,
      this.drawLine(point.x,0,point.x,this.canvas.height)
    }
    if (!this.linesY.hasOwnProperty(point.y)){
      this.linesY[point.y]=point.name
      this.drawLine(0,point.y,this.canvas.width,point.y)
    }
  }
  drawLines(){

    let this_=this;
    Object.keys(this.linesX).sort().forEach( (x,i)=>{
      console.log("x key",x)
      this_.make_text(Number(x)+this.canvas.offsetLeft+2,
        50+ (i%2)*20,x+', P'+this.linesX[x],"| ",'x')
    })
    Object.keys(this.linesY).sort().forEach( (y,i)=>{
      console.log("y key",y,Number(this.canvas.style) )
      this_.make_text(
        this.margin-10+(i%2)*20,
        Number(y)+this.canvas.offsetTop,y+', P'+this.linesY[y],"__",'y')
    })
  }

  make_text(x,y,label,mark,css){
    console.log("making text at ",x,y,label,mark,css)
    this.element = document.createElement("div");
    this.element.classList.add('projected_line_'+css);
    this.element.style.top= y;
    this.element.style.left= x;
    this.element.title =label;
    this.element.innerHTML =mark;
    document.body.appendChild(this.element);
    return this.element
  }

  drawLine(x1,y1,x2,y2){
    this.ctx.beginPath();
    this.ctx.setLineDash([1, 1]); // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
    this.ctx.moveTo(x1,y1);
    this.ctx.lineTo(x2,y2);
    this.ctx.stroke();
  }


}
