/**
 * Created by samanthaklindt on 2/6/14.
 */

//Day 2 Practice

(function(){

})();

var helloworld1 = function(){           //anonymous function

}

function helloworld2(){                 //name function

}

helloworld1();                          //calling anon function
helloworld2();                          //calling name function


//Both functions are called with the same code

//Have to know both functions, but pick the one you think is best as a student to use.


//Strings

(function(){
    var name = "Full Sail University";
    var 1 = name.charAt(10);            //.charAt(10) - Gives the character of the specified index


    var r = name.indexOf("S");          //.indexOf() - Gives the index number of the given string

    var t = name.length;                //.length - Gives the length of the given string

    var splitTest = "I love JavaScript much!";
    var words = splitTest.split(" ")    //.split - Gives whatever sort of spacing to the string

    console.log(splitTest);             //Converts to array

    console.log(words);                 //Prints the list into array form

    console.log(words[2]);              //Prints out the index of 2 = JavaScript

    var piece = name.substr(5,4);       //.substr - Gives the info from the asked for arguement

    var anotherPiece = name.substring(5,8); //.substring - Gives the info from the asked for arguement

    console.log(piece);

    console.log(anotherPiece);


})();