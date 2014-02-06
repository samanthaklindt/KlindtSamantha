/**
 * Created by samanthaklindt on 11/1/13.
 */
//Arrays of Arrays
//var arrayLayerOne = [];
//arrayLayerOne[0]=[];
//arrayLayerOne[1]=[];
//arrayLayerOne[2]=[];
//
//arrayLayerOne[0][0]='Dog';
//arrayLayerOne[0][1]='Cat';
//arrayLayerOne[0][2]='Bird';
//
//arrayLayerOne[1][0]='1';
//arrayLayerOne[1][1]='10';
//arrayLayerOne[1][2]='908277.28827';
//
//arrayLayerOne[2][0]=['Dog','monkey'];
//arrayLayerOne[2][1]=['Cat','dolphin'];
//arrayLayerOne[2][2]=['Bird','whale'];
//
//console.log(arrayLayerOne[0][0]);
//console.log(arrayLayerOne[2][0]);
//console.log(arrayLayerOne[2][0][0]);

//*PRACTICE* wrong way... multiplication grid, no var but array four by four grid, produces a multiplication factor of a times table, multiply factors by prompt

//var question;
//question =prompt("Multiply factors by what number?");
//
//var arrayTimesTable =[];
//arrayTimesTable[0]=[];
//arrayTimesTable[1]=[];
//arrayTimesTable[2]=[];
//arrayTimesTable[3]=[];
//
//arrayTimesTable[0][0]=1;
//arrayTimesTable[0][1]=2;
//arrayTimesTable[0][2]=3;
//arrayTimesTable[0][3]=4;
//
//arrayTimesTable[0][0]=1;
//arrayTimesTable[1][0]=2;
//arrayTimesTable[2][0]=3;
//arrayTimesTable[3][0]=4;
//
//
//console.log((arrayTimesTable[0][0]* question),(arrayTimesTable[0][1]* question),(arrayTimesTable[0][2]* question),(arrayTimesTable[0][3]* question));
//
//console.log((arrayTimesTable[0][0]* question),(arrayTimesTable[1][0]* question),(arrayTimesTable[2][0]* question),(arrayTimesTable[3][0]* question));


//*PRACTICE ANSWER* right way... Create a multiplication table. which is then multiplied by a prompted value

//var pro=parseInt(prompt('Give me an integer'));
//var arr = [];
//arr[0]=[];
//arr[1]=[];
//arr[2]=[];
//arr[3]=[];
//
//var seed=(prompt("Enter a seed number"));
//var modifier=(prompt("Enter a modifier number"));
//var answer = answer
//
//arr[0][0]= seed;
//arr[0][1]= seed + modifier = answer;
//arr[0][2]= answer + modifier = answer;
//arr[0][3]= answer + modifier = answer;
//
//arr[1][0]= answer + modifier = answer;
//arr[2][0]= answer + modifier = answer;
//arr[3][0]= answer + modifier = answer;
//
//arr[1][1]=arr[0][1]*arr[1][0]*pro;
//arr[1][2]=arr[0][2]*arr[1][0]*pro;
//arr[1][3]=arr[0][3]*arr[1][0]*pro;
//
//arr[2][1]=arr[0][1]*arr[2][0]*pro;
//arr[2][2]=arr[0][2]*arr[2][0]*pro;
//arr[2][3]=arr[0][3]*arr[2][0]*pro;
//
//arr[3][1]=arr[0][1]*arr[3][0]*pro;
//arr[3][2]=arr[0][2]*arr[3][0]*pro;
//arr[3][3]=arr[0][3]*arr[3][0]*pro;
//
//arr[0][0] = arr[0][0]*pro;
//arr[0][1] = arr[0][1]*pro;
//arr[0][2] = arr[0][2]*pro;
//arr[0][3] = arr[0][3]*pro;
//arr[1][0] = arr[1][0]*pro;
//arr[2][0] = arr[2][0]*pro;
//arr[3][0] = arr[3][0]*pro;
//
//console.log(arr[0]);
//console.log(arr[1]);
//console.log(arr[2]);
//console.log(arr[3]);



//for(i=0;i<=2;i=i+1){
//    for(j=0;j<=2;j++) {
//        console.log('['+i +']['+j+']');
//
//
//    }
//
//
//
//
//}


//*PRACTICE* prompt value into loop

//var pro1 =prompt('Give me a number');
//
//    for(i=0;i<=pro1;i=i+1){
//        console.log(i*2);
//
//
//    }


//prompted value, console log i only and formulate the square loop, i should be squared (5,10,15,20), dont start at 0


var pro2 =prompt('Give me a number');

    for(i=5;i<=pro2;i=i++){
       console.log (i*2));


    }



