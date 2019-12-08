const fs = require('fs');
/*
<NB POINTS> <NB SUFRACES> 0
X1 Y1 Z1
...
Xi Yi Zi
...
<NB POINTS DE LA SURFACE 1> S1_POINT1 ..S1_PONTi
..
<NB POINTS DE LA SURFACE i> Si_POINT1 Si_POINT ..S1_PONTl



*/
let points=fs.readFileSync('./points.txt').toString()
  .split('\n').map( l => l.split(' '))
  .filter( v => v.length==2)
  .map( p => {p.push(0); return p})
points.push(points[0])
let dZ=20.0
let pointsDz=points.map(p=>[p[0],p[1],20])


let off='OFF\n\n';

off+=2*points.length+' '+(2+points.length)+' '+(points.length-1)*3+'\n'; //Nb points NB surface 0


off+=points.reduce( (acc, p)=> acc+p.map(p=>''+p+'.0').join(' ')+'\n','' ); // points 0
off+=pointsDz.reduce( (acc, p)=> acc+p.map(p=>''+p+'.0').join(' ')+'\n','' ); //points dZ

off+=' '+points.length;
for (let i=0;i<points.length;i++){off+=' '+i;} // surface 0
off+='\n';

for (let i=0;i<points.length-1;i++){ //edges
  off+=' 4 '+i+ ' '+(i+1)+ ' '+(i+points.length+1)+' '+(i+points.length)+' 0 0 0\n'
}
off+=' '+points.length;
for (let i=0;i<points.length;i++){off+=' '+(i+points.length);} // surface 0
off+='\n';


fs.writeFileSync('points.off',off)
fs.writeFileSync('points.xxz',
)
