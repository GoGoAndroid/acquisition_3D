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

let off='OFF\n'
off+=points.length+' '+(2+points.length-1)+' 0\n'
off+=points.reduce( (acc, p)=> acc+p[0]+' '+p[1]+ ' '+p[2]+'\n','' )
off+=points.reduce( (acc, p)=> acc+p[0]+' '+p[1]+ ' '+(p[2]+20)+'\n','' )
off+=points.length+ " "+points.map( (p,i)=> ''+(i+1) ).join(' ')+'\n'
off+=points.length+ " "+" "+points.map( (p,i)=> ''+(points.length+i+1) ).join(' ')+'\n'

console.log(off)
