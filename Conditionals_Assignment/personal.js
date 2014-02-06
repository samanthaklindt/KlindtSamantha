/**
 * Created by samanthaklindt on 11/18/13.
 */

//Personal
// JMD COMMENT- When you are using dates there is an problem which comes up. Imagine it is January 1 2000, I was born on Dec 31 1999. According to your formula how old am I? 



var name; //This variable stores the prompted variable for name.
name = prompt('What is your name?'); //This variable prompts the user to input their name.
var year= prompt('What year were you born in?'); //This variable prompts the user to input their year of birth.
var todaysYear= prompt('What year is it now?'); //This variable prompts the user to input the year they are currently in.
var age= todaysYear - year; //This variable is subtracting todaysYear from year to get the users age.

console.log('Hello '+name+ '! You are '+age+' years old.'); //This line puts together both the name and age variable to give the user an answer.

if(age<18){ //This if statement requires the age to be less than 18 in order to print the answer.
    console.log('You are a minor!'); //This line tells the user they are a minor based on their age which is less than 18.
} else{(age>18) //JMD COMMENT- -5% Any condition which requires a check is an if not an else. 

// This else statement requires the age of the user to be greater than 18 in order to print the given.
    console.log('You are an adult!'); //This line tells the user that they are an adult based on their age being over 18.
}

