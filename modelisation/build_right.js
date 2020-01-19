
function build_right(P_face,lines_face) {
 

  let canvas_margin=40;

  const canvas = document.getElementById('canvas_right');
  const ctx = canvas.getContext('2d');
  ctx.strokeStyle = 'grey';
  ctx.lineWidth = 0.5;
  let lines=new Lines(canvas,ctx, canvas_margin)

  function t(d){ return 60 ;}
  function hd(d){ return d*5;}
  let epaisseur_axe=5

  let P={}
  let i=1

  P[i]= new Point(t(0),t(0),'right_'+i,lines,canvas);
  P[2]=P[1].right(  hd((largeur_bord=2)),'right_2')
  P[3]=P[2].down(P_face[3].y-P_face[2].y,'right_3')
  P[4]=P[3].left(hd(largeur_bord=2),'right_4')
  new Polygon([P[1],P[2],P[3],P[4]],ctx)

  P[5]=P[4].left(hd((largeur_facette=6)/2),'right_5')
  P[6]=P[5].right(hd(largeur_facette),'right_6')
  P[7]=P[6].down(hauteur_facette= P_face[6].y-P_face[5].y,'right_7')
  P[8]=P[7].left(hd(largeur_facette),'right_8')
  new Polygon([P[5],P[6],P[7],P[8]],ctx)
  console.log("hauteur_facette",hauteur_facette,P_face[6].y-P_face[5].y,P_face[6].y,P_face[5].y)
  P=P[6].square(hd(1),hauteur_facette,P,ctx)
   
}

