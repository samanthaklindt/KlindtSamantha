/**
 * Created by samanthaklindt on 11/1/13.
 */
//Conditional Logic - Relational Expressions

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
    //you can ride!
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present");
}else{
    //sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first!");
}


//Conditional Logic - Logical Operators

var budget = 300;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less our budget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLottery){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}


//Conditional Logic - Ternary Operators

var age = 6;
var book;

//If the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);