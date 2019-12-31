class ProjectionImageDisplay{

  constuctor(){
  }

  setDisplayFor(projectionImage_main,projectionImage_comparison){

    this.name=projectionImage_main.img.name

    projectionImage_main.show('image_main','main')
    projectionImage_comparison.show('image_comparison','comparison')

    projectionImage_main.setKeyPointEvent();
    projectionImage_comparison.unSetKeyPointEvent();

    document.getElementById('frontImageName').innerText=projectionImage_main.img.name+"/"+projectionImage_comparison.img.name
    console.log("ok")
  }

}
