/**
 *
 *
 * Created by samanthaklindt on 11/15/13.
 *
 *
 */

var world1= createWorld();
var quitTest = true;
var x=1;
var y=1;
var charName =prompt('What is your character name?');
charName= charName.substring(0,6);

console.log(worldDisplay(world1,x,y,charName));
do
{
    var userInput=prompt('Which direction would you like to move? (N,S,E,W,Q)');

    if(userInput==null){quitTest=false;
        break;}
    if(userInput.toUpperCase()=='Q'){quitTest=false;}
    else {
        if(userInput.toUpperCase()=='N'){y--;}
        if(userInput.toUpperCase()=='S'){y++;}
        if(userInput.toUpperCase()=='W'){x--;}
        if(userInput.toUpperCase()=='E'){x++;}
        if(x<0){x=9;}
        if(x>9){x=0;}
        if(y<0){y=9;}
        if(y>9){y=0;}
        console.log(worldDisplay(world1,x,y,charName));
    }
}  while(quitTest);  //this is true
