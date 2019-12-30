

let indicePoint=0;

function loadImage(i, path){

  var c = document.getElementById(`canvas_${i}`);
  var ctx = c.getContext("2d");

  var img = new Image();
  img.onload = function() {
  var scale = Math.min(c.width / img.width, c.height / img.height);
  var x = (c.width / 2) - (img.width / 2) * scale;
  var y = (c.height / 2) - (img.height / 2) * scale;
  ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

  };
  img.src = path;

  c.addEventListener("click", clicked, false);
}



function clicked(evt){

  var e = evt.target;
  var dim = e.getBoundingClientRect();
  var x = evt.clientX - dim.left;
  var y = evt.clientY - dim.top;

  let indice=prompt(indicePoint,indicePoint)
  indicePoint=indice;
  document.getElementById("log").innerText=
  document.getElementById("log").innerText+x+" "+y+"\n";

  evt.target.getContext("2d").fillText(""+indicePoint++, x, y )

}
