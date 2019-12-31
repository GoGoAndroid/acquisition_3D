class ProjectionImage {

  constructor( path, imagesRegistry) {

    this.switch_role={comparison:'main',main:'comparison'}
    this.points=[];
    this.img = document.createElement('img');

    this.img.name=path.replace(/^.*[\\\/]/, '').replace(/\.[a-zA-Z0-9]+$/,"")
    this.img.id=  this.img.name
    imagesRegistry[this.img.name]=this
    this.img.src=path;

    this.createControles()
    this.KeyPointEventSet=false;
  }

  setClassFromRole(role){
      this.img.classList.remove('image_projection_'+this.switch_role[role]) ;
      this.img.classList.add('image_projection_'+role);
  }
  createControles(){


  }

  show(plot,role){
    document.getElementById(plot).innerHTML=''
    this.setClassFromRole(role)
    document.getElementById(plot).appendChild(this.img)

    this.imagePosition=this.img.getBoundingClientRect();
    console.log('image position',this.imagePosition)
    if (role=='main')
          this.points.forEach( p => p.show_as_main() )
    else
    this.points.forEach( p => p.show(

        1/2,
        1/2,
        this.img.offsetLeft-10,
        this.img.offsetTop-10,
       ))


  }
  setKeyPointEvent(){
    console.log(this)
    this.img.addEventListener("click", this.clicked , false);
    this.KeyPointEventSet=true;
    this.img.style.z_index=1;
  }
  unSetKeyPointEvent(){
    this.img.removeEventListener("click", this.clicked );
    this.KeyPointEventSet=false;
    this.img.style.z_index=0;
  }


  clicked(evt) {
    console.log("clicked")
    let this_=imagesRegistry[evt.target.name]
    this_.points.push(new ProjectedKeyPoint(
      evt.clientX,evt.clientY,
      evt.pageX,evt.pageY,
      this_.points.length,this_))
  }
}
