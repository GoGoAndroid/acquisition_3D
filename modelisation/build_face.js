data_exported=(function() {


let xs={}
let ys={}
let zs={}
let canvas_margin=40;

const canvas = document.getElementById('canvas_face');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'grey';
ctx.lineWidth = 0.5;
let lines=new Lines(canvas,ctx, canvas_margin)

function t(d){ return 60 ;}
function hd(d){ return d*5;}
let epaisseur_axe=5

let P={}
let i=0

i=1;P[i]=new Point(t(0),t(0),''+i,lines,canvas);
P[2]=P[1].right(  hd((largeur_piece=40)),'2')
P[3]=P[2].down( hd((hauteur_vers_languette=25)),'3')
P[4]=P[3].left( hd((rebord_languette=2)),'4')
P['4d']=P[4].right(hd(1),'4d')


P[5]=P[4].right( hd((largeur_languette=10)),'5')
P[6]=P[5].down( hd((hauteur_languette=8)),'6')
P[7]=P[6].left( hd(largeur_languette),'7');
P['7d']=P[7].right(hd(1),'7d')
new Polygon([P[4],P['4d'],P['7d'],P[7]],ctx)
new Polygon([P['4d'],P[5],P[6],P['7d']],ctx)

P[8]=P[7].down( hd(entre_languette=12),'8')
P['8d']=P[8].right(hd(1),'8d')

P[9]=P[8].right(hd(largeur_languette),'9')
P[10]=P[9].down(hd(hauteur_languette),'10')
P[11]=P[10].left(hd(largeur_languette),'11')
P['11d']=P[11].right(hd(1),'11d')
new Polygon([P[8],P['8d'],P['11d'],P[11]],ctx)

new Polygon([P['8d'],P[9],P[10],P['11d']],ctx)

P[12]=P[11].right(hd(rebord_languette),'12')

P[13]=P[12].down(hd(hauteur_vers_languette),'13')
P[14]=P[13].left(hd(largeur_piece),'14')

P[15]=P[14].up(hd(epaisseur_bord=1),15)
P[16]=P[15].right(hd(distance_gauche_au_centre=20),16)
P[17]=P[16].down(hd(epaisseur_bord),17)
let bordBasGauche=new Polygon([P[14],P[15],P[16],P[17]],ctx)


P[18]=P[17].right(hd((largeur_axe=6)),18)
P[19]=P[18].down(hd((epaisseur_axe)),19)
P[20]=P[19].left(hd((largeur_axe)),20)
P['18b']=P[18].up(hd(1),'18b')
let axePieceBord=new Polygon([P[16],P['18b'],P[19],P[20]],ctx)

P[21]=P[20].left(hd(1),21)
P[22]=P[21].down(hd(1),22)
P[23]=P[22].right(hd(largeur_axe+2),23)
P[24]=P[23].up(hd(1),24)
let bordAxePieceBord =new Polygon([P[21],P[22],P[23],P[24]],ctx)

let base_hauteur=hauteur_vers_languette*2+hauteur_languette*2+entre_languette

P[25]=P[16].right(hd(largeur_axe/2),25)
P[26]=P[25].up(hd(base_hauteur-2),26)
P[27]=P[26].right(hd(1),27)
P[28]=P[27].down(hd(base_hauteur-2),28)
new Polygon([P[25],P[26],P[27],P[28]],ctx)

// segment 1
i=29;P[i]=P[25].up(hd(vers_segment_1=6),i)
i=30;P[i]=P[i-1].left(hd(gauche_segment=1.5),i)
i=31;P[i]=P[i-1].up(hd(1),i)
i=32;P[i]=P[i-1].right(hd(gauche_segment),i)
new Polygon([P[i],P[i-1],P[i-2],P[i-3]],ctx)

i=33;P[i]=P[i-1].right(hd(1),i)
i=34;P[i]=P[i-1].right(hd(droite_segment=5),i)
i=35;P[i]=P[i-1].down(hd(1),i)
i=36;P[i]=P[i-1].left(hd(droite_segment),i)
new Polygon([P[i],P[i-1],P[i-2],P[i-3]],ctx)

//
let inter_segment=10.5;

for (k=0;k<6;k++){

  P[++i]=P[i-8].up(hd(inter_segment),i)
  P[++i]=P[i-1].left(hd(gauche_segment),i)
  P[++i]=P[i-1].up(hd(1),i)
  P[++i]=P[i-1].right(hd(gauche_segment),i)
  console.log("dente gauche "+k,i,i-1,i-2,i-3)
  new Polygon([P[i],P[i-1],P[i-2],P[i-3]],ctx)

  P[++i]=P[i-1].right(hd(1),i)
  if (k==2)   P[++i]=P[i-1].right(hd(droite_segment+5),i)
  else        P[++i]=P[i-1].right(hd(droite_segment),i)
  P[++i]=P[i-1].down(hd(1),i)
  if(k==2)    P[++i]=P[i-1].left(hd(droite_segment+5),i)
  else        P[++i]=P[i-1].left(hd(droite_segment),i)
  console.log("dente droite "+k,i,i-1,i-2,i-3)
  new Polygon([P[i],P[i-1],P[i-2],P[i-3]],ctx)

}

P[++i]=P[15].right(hd(largeur_bord_fin=5),i)
P[++i]=P[i-1].up(hd(hauteur_bord_fin=2),i)
P[++i]=P[i-1].left(hd(largeur_bord_fin-1),i)
P[++i]=P[i-1].up(hd(base_hauteur-hauteur_bord_fin*2-2),i)
P[++i]=P[i-1].right(hd(largeur_bord_fin-1),i)
P[++i]=P[i-1].up(hd(hauteur_bord_fin),i)
P[++i]=P[i-1].left(hd(largeur_bord_fin+1),i)
P[++i]=P[i-1].down(hd(base_hauteur-2),i)

new Polygon([P[i],P[i-1],P[i-2],P[i-3],P[i-4],P[i-5],P[i-6],P[i-7]],ctx)
new Polygon([
  P[90],
  P[89],
  P[88],
  P[87],
  P[86],
  P[85],

  P[25],

  P[29],
  P[30],
  P[31],
  P[32],

 P[40], P[39], P[38], P[37],
 P[48], P[47], P[46], P[45],
 P[56], P[55], P[54], P[53],
 P[64], P[63], P[62], P[61],
 P[72], P[71], P[70], P[69],
 P[80], P[79], P[78], P[77],

 P[26]

],ctx)

P[++i]=P[27].up(hd(1),i);



axePieceBord.symetrieY(yCentre=P[55].y+(P[53].y-P[55].y)/2,P,lines,canvas,ctx)
bordAxePieceBord.symetrieY(yCentre,P,lines,canvas,ctx)
bordBasGauche.symetrieY(yCentre,P,lines,canvas,ctx)

P[++i]=P[25].left(hd(gauche_segment),i)
let bordZGaucheCran1= new Polygon([P[30],P[29],P[25],P[i]],ctx)
let bordZGaucheCran2= new Polygon([P[38],P[37],P[32],P[31]],ctx)
let bordZGaucheCran3= new Polygon([P[46],P[45],P[40],P[39]],ctx)
let bordZGaucheCran4= new Polygon([P[54],P[53],P[48],P[47]],ctx)

bordZGaucheCran1.symetrieY(yCentre,P,lines,canvas,ctx)
bordZGaucheCran2.symetrieY(yCentre,P,lines,canvas,ctx)
bordZGaucheCran3.symetrieY(yCentre,P,lines,canvas,ctx)
bordZGaucheCran4.symetrieY(yCentre,P,lines,canvas,ctx)
bordZGaucheCran4.symetrieY(yCentre,P,lines,canvas,ctx)

P['db']=P['18b'].right(P[35].x-P['18b'].x,'db')
P['dh']=P['SY_255_18b'].right(P[35].x-P['18b'].x,'dh')

P['mdb']=P[60].right(P[58].x-P[34].x,'mdb')
P['mdh']=P[57].right(P[58].x-P[34].x,'mdh')

new Polygon(
  [P[93],P[2],P[3],P[4],P[7],  P[11],P[12],P[13],P[18],P['18b'],
  P['db'],
  P['mdb'],P[59],P[58],P['mdh'],
  P['dh']
  ],ctx)

new Polygon([P[28],P[36],P[35], P['db']],ctx)
new Polygon([P[33],P[44],P[43],P[34]],ctx)
new Polygon([P[41],P[52],P[51],P[42]],ctx)
new Polygon([P[49],P[60],P['mdb'],P[50]],ctx)
new Polygon([P[57],P[68],P[67],P['mdh']],ctx)
new Polygon([P[65],P[76],P[75],P[66]],ctx)
new Polygon([P[73],P[84],P[83],P[74]],ctx)
new Polygon([P[81],P[27],P['dh'],P[82]],ctx)


lines.drawLines(canvas_face);

return{lines:lines,P:P}


})()

build_right (data_exported.P,data_exported.lines);
