function drawSquare(x1, y1, x2, y2) {

    var square = new THREE.Geometry();

    //set 4 points
    square.vertices.push( new THREE.Vector3( x1,y2,0) );
    square.vertices.push( new THREE.Vector3( x1,y1,0) );
    square.vertices.push( new THREE.Vector3( x2,y1,0) );
    square.vertices.push( new THREE.Vector3( x2,y2,0) );

    //push 1 triangle
    square.faces.push( new THREE.Face3( 0,1,2) );

    //push another triangle
    square.faces.push( new THREE.Face3( 0,3,2) );

    //return the square object with BOTH faces
    return square;
}
