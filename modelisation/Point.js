

class Point{

  constructor(x,y,name,lines,canvas){
    this.canvas=canvas
    this.name=name
    this.x=x;
    this.y=y;
    this.lines=lines;

    this.lines.add(this)
    this.make_line(
          this.make_text(this.x+this.canvas.offsetLeft,this.y+this.canvas.offsetTop,-30,-30,this.name),
          this.make_point(this.x+this.canvas.offsetLeft,this.y+this.canvas.offsetTop)
      )
    this.addControl()
    this.check_changed()
    this.restorePosition()
  }

  addControl(){

    this.control = document.createElement('div');
    this.control.classList.add("inline")

    let span = document.createElement('span');
    span.innerText=this.name
    let input = document.createElement('input');
    input.type='checkbox'
    if (localStorage.getItem(this.name+'_checked')!== null){
      console.log(this.name,localStorage.getItem(this.name+'_checked'))
      input.checked=localStorage.getItem(this.name+'_checked')=="true"
    }  else  input.checked=true

    this.control.appendChild(span)
    this.control.appendChild(input)
    this.checkBoxShow=input
    document.getElementById('controls').append(this.control)
    let this_=this
    input.onchange=function(e){this_.check_changed()}
    input.onmouseover=function(e){this_.show_label()}
    input.onmouseout=function(e){this_.check_changed()}

  }

  show_label(){
    this.element.style.visibility='visible'
    //this.dotElement.style.visibility='visible'
    this.line.show()
  }
  hide_label(){
    this.element.style.visibility='hidden'
    this.line.hide()
  }

  check_changed(){
    localStorage.setItem(this.name+'_checked',this.checkBoxShow.checked)
    if (this.checkBoxShow.checked)
      this.show_label()
    else
      this.hide_label()
  }

  make_text(x,y,dx,dy,numberInImage){
    this.element = document.createElement("div");
    this.element.classList.add('projected_key_point');
    this.element.style.top= y+dy;
    this.element.style.left= x+dx;
    this.positionLabel={left:x+dx,top:y+dy}
    this.element.innerHTML =""+numberInImage;
    document.body.appendChild(this.element);
    return this.element
  }

  make_point(x,y){
      this.dotElement = document.createElement("div");
      this.dotElement.classList.add('projected_dot_key_point');
      this.dotElement.style.top=y;
      this.dotElement.style.left=x;
      this.dotElement.title=this.name

      document.body.appendChild(this.dotElement);
      return this.dotElement
    }

  make_line(element,dotElement){

      this.draggable= new PlainDraggable(element);
      this.line=  new LeaderLine(
            element,
            dotElement,
             {color: 'red', size: 1,path:'straight'}
      );

      let this_=this;
      this.draggable.onMove = function(newPosition) {
        this_.line.position();
        this_.positionLabel=newPosition;
        this_.storePosition(newPosition)
      };
  }

  storePosition(position){
    localStorage.setItem(this.name,JSON.stringify(position))
  }

  restorePosition(){
    if (localStorage.getItem(this.name)){
        let position=JSON.parse(localStorage.getItem(this.name))
        this.draggable.setOptions({'left':position.left,'top':position.top})
        this.line.position()
    }
  }
  left(delta,name){
    return new Point(this.x-delta,this.y,name,this.lines,this.canvas)
  }
  right(delta,name){
    return new Point(this.x+delta,this.y,name,this.lines,this.canvas)
  }
  up(delta,name){
    return new Point(this.x,this.y-delta,name,this.lines,this.canvas)
  }
  down(delta,name){
    return new Point(this.x,this.y+delta,name,this.lines,this.canvas)
  }

  square(largeur, hauteur, P, ctx){
      console.log('P',P)
      let p_name=this.name+'_square_'
      let i=1;
      P[p_name+i ]= this.right(largeur,p_name+i++ )
      P[p_name+i ]= P[p_name+(i-1)].down(hauteur,p_name+i++ )
      console.log("down",hauteur)
      P[p_name+i ]= P[p_name+(i-1)].left(largeur,p_name+i++ )
     
      new Polygon([this, P[p_name+1],P[p_name+2] ,P[p_name+3]],ctx)
      return P
  }

  setX(x){this.x=x;}
  setX(y){this.y=y;}

}
