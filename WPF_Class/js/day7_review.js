/**
 *
 *
 * Created by samanthaklindt on 11/11/13.
 *
 *
 */

//*PRACTICE* for loop conditional find out if something is divisible by 3 from 1-100 into a single string of comma delimited values

    //var myList= '';
    //for (i=1;i<=100;i++){
    //    if(i%3==0){
    //        myList += i +', ';
    //    }
    //
    //}
    //console.log(myList);


//*PRACTICE* string of numbers count the number of increases/decreases
//STEPS//
//create a random LIST(array) of numbers
//house the numbers in an array?
//loop to compare number
//numeric bounds? (1-3)

    //var arr=[];
    //
    //for (i=0;i<=20;i++){
    //    arr[i]= Math.ceil(Math.random()*3);
    //    if(arr[i]>arr[i-1]){
    //        console.log(arr);
    //    }
    //  }

//*REAL ANSWER* string of numbers count the number of increases/decreases

var storageArray =[];
var storageString = ' ';
var storageCounter = 0;
for(i=0;i<=20;i=i+1){
    storageArray[i]=Math.ceil(Math.random()*3);
    if(i>0 && storageArray[i-1]> storageArray[i]){
        storageCounter++;
        storageString += 'D, ';
    }else if(i>0 && storageArray[i-1]< storageArray[i]){
        storageString +='I, '
    }else{
        storageString +='S, '
    }
    console.log(storageArray);
    console.log(storageString);
    console.log(storageCounter);


}


//*PROGRAMMERS SPELLING QUIZ* be able to write and describe each of the the following commands(narrative description of use... MEMORIZE

//if
    //example:
    // definition - conditional used to check values against each other
    //coding -
                //if(stuff to be checked
                    //uses && (and) || (or) for complex values
                    //uses ==, <=, >=, != to check values
                    //)
                    //{
                        //stuff done when thing are checked and true
                    //}
//for

//else

//if else

//expressions

//assignments

//arrays

//for loop
    //definition - a for loop is a programing construct which is used to repeat actions over and over again
    //coding -
                //for(){
                    //actions to be performed.

                //}

//KNOW THIS AND YOU'RE SET
//
//          for(variableValue=1024;  //sets the incrementer
//          ;variableValue>10  //condition to be met
//          ;variableValue =variableValue-100  //what we do to the incrementer
//
//          ){
//          //what it is doing over and over...
//          }

