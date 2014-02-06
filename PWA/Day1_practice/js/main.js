/// Sam

console.log("started");
//
//
//for(var i=10;i>-1;i--){
//    console.log(i);
//}

function triangle(b,h){
    var area = (.5*b)*h;
    return area;
}


function getAverage(arr){
        var total = 0;
        var average = 0;
        for (var i=0;i<arr.length;i++){

            total+=arr[i];

        }
        avg = total/arr.lengths;
        return avg;
}

var myTriangle = triangle(6,10);

var average = getAverage([10,20,30]);

console.log("The area of my triangle is:",myTriangle);

