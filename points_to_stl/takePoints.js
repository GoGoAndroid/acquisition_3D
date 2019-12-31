

let indicePoint=0;
var x0_image=0;
var y0_image=0;
let scale=0;

function log(text){
  document.getElementById("log").innerHtml=document.getElementById("log").innerHtml+"<br>"+text
}
function loadImage(i, path){

  var c = document.getElementById(`canvas_${i}`);

  /*
  var ctx = c.getContext("2d");
  var img = new Image();
  img.onload = function() {
  scale = Math.min(c.width / img.width, c.height / img.height);
  //x0_image = (c.width / 2) - (img.width / 2) * scale;
  //y0_image = (c.height / 2) - (img.height / 2) * scale;
  ctx.drawImage(img,0,0, img.width * scale, img.height * scale);

  };
  */
  //c.src = path;
  c.addEventListener("click", clicked, false);
}


function setText(id,text,x,y){

  var div = document.createElement("div");
  div.style.position= "absolute";
  div.style.top= y;
  div.style.left= x;
  div.style.background = "red";
  div.style.color = "white";
  div.innerHTML = text;
  div.class='id'
  document.body.appendChild(div);
}


function clicked(evt){

  var e = evt.target;
  var dim = e.getBoundingClientRect();
  console.log(evt)
  var x = (evt.pageX ) ;
  var y = (evt.pageY) ;

  setText(evt.id, ""+indicePoint++,x,y)


}
