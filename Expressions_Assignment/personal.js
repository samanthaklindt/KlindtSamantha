/**
 * Created by samanthaklindt on 11/15/13.
 */

//Personal


var age= prompt('What is your age?');
var year= prompt('What year is it?');
var yearRandom= prompt('What year will it be in 20 years?');
var equation= (yearRandom - year);
var futureAge= age + equation;

console.log('You will be ' + (futureAge) + ' years old in ' + (yearRandom));



var storageString=' ';
    if(futureAge=18) {
        storageString +='You can vote.';

    } else if(futureAge<18)
    {
        storageString +='Sorry, You cannot vote.';
    }

console.log(storageString);

