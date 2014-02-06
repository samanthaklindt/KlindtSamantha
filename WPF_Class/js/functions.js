/**
 * Created by samanthaklindt on 11/18/13.
 */

//create functions for each object, you may use objects within each other

//circle-area pi(r)^2
//cylinder-area pi(r)^2*h
//square-area
//cube-area
//cone-volume
//sphere-volume 4(pi)*r*r


function circle(r){
    return r*r*Math.PI;
}

function cylinder(areaCircle,h){
    return areaCircle*h;
}

console.log(cylinder(circle(10),15));


function square(b,h){
    return b*h;
}

function cube(l,w,h){
    return l*w*h;
}
function cubeFromSquare(area, h){
    return area*h;
}
console.log(cube(4,6,8));
console.log(cubeFromSquare(square(4,6),8));


function cone(b, h){
    return (1/3)*b*h;
}

console.log(cone(square (5,10),15));


function sphere(r){
    return (4)*Math.PI*r*r;
}

console.log(sphere(circle(7)));
