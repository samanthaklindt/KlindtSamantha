/**
 *
 *
 * Created by samanthaklindt on 11/13/13.
 *
 *
 */
//Quiz 1 - Samantha Klindt

//Creating Variables
//The variable is a container for any number, string or specific piece of information given to set within it.

var vari= 'The Variable is '+ 90;
console.log(vari);



//Writing Expressions
//Expressions are used to match or show patterns within the contained items.

var newRegExp = /'ab+c'/;
console.log(newRegExp);



//Addition/Subtraction
//Addition and Subtraction are the most basic mathematical fundamentals in JavaScript and all you have to do is set up variables and create
//a problem to solve, the computer will simply add or subtract the given commands.

//Addition
var exam1= 10;
var exam2= 9;
var exam3= (exam1) + (exam2);
var number;
number = exam3;

console.log('Exam total after addition is... ' + number);

//Subtraction
var apple= 50;
var banana= 25;
var problem= (apple) - (banana);
var fruits;
fruits= problem;

console.log('Number of fruits after subtraction... ' + fruits);



//Multiplication/Division, Modulus
//Multiplication and Division are the second most basic mathematical fundamentals in JavaScript, just create the problem and the computer will multiply and
//divide on its own.
//Modulus is when you set something equal to 0.

//Multiplication
var meal= 4;
var drink= 4;
var product = (meal) * (drink);
var answer;
answer= product;

console.log('You recieve a total of ' + answer + ' meals and drinks!');

//Division
var computer= 24;
var phone= 6;
var divisor= (computer) / (phone);
var done;
done= divisor;

console.log('24 divided by 6 is... ' + done);

//Modulus
var who= 6;
var why= 2;
var modulo= (who) % (why);
var what;
what= modulo;

console.log('The answer is clearly... ' + what);



//For loop
//The for loop consists of your index(i=1), the condition(i<=10) and the incrementor of the index(i++).
//The for loop will continue to loop whatever is within it until it is proven true.

for(i=1;i<=10;i++){
    console.log(i);
}



//If Statement
//If statements are for testing something as true. The psuedocode for this syntax would be... If something is true, than say that it is true.
//There are also statements known as the if-else, these statements are testing to see if an item is true, however if it is false, shows another set item.

//If
if(i=100-50){
    console.log('i equals... ' + 50);
}

//If else
if(j=74){
    console.log('j is equal to... ' + j)
}else{
    console.log('j is not equal to... ' + j)
}
