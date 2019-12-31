class ProjectedKeyPoint {

  constructor(xInImage,yInImage,pageX,pageY,numberInImage,projectionImage){

      this.numberInImage=numberInImage;
      this.xInImage=xInImage;
      this.yInImage=yInImage;
      this.pageX=pageX;
      this.pageY=pageY;
      this.projectionImage=projectionImage
      this.element = document.createElement("div");
      this.element.classList.add('projected_key_point');
      this.element.classList.add(projectionImage.img.name);
      this.element.style.opacity=projectionImage.img.style.opacity;
      this.element.style.top= pageY;
      this.element.style.left= pageX;
      this.element.innerHTML =""+numberInImage;
      document.body.appendChild(this.element);
  }

  show_as_main(){
    this.element.style.top= this.pageY;
    this.element.style.left= this.pageX;
  }

  show(scalingX,scalingY,deltaX,deltaY){

    console.log("showing with",scalingX,scalingY,deltaX,deltaY,'so',deltaX+(this.xInImage*scalingX),deltaY+(this.yInImage*scalingY))

    this.element.style.left=deltaX+(this.xInImage*scalingX)
    this.element.style.top=deltaY+(this.yInImage*scalingY)
  }
}
