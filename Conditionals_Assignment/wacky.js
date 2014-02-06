/**
 * Created by samanthaklindt on 11/18/13.
 */

//Wacky

var year= prompt('What year is it?'); //This variable prompts the user to input their current year.


if(year<2013){
    console.log('Congratulations, You have some how figured out time travel and are in a past time!');
}else if(year>2013){
    console.log('Congratulations, You have some how figured out time travel and are in a future time!');
}if(year=2013){//the useage of an if here is not tied to the previous if/else. It is correct but if you want a condition which is a catch all you need to use an else.
    console.log('You are in the year 2013, you have not figured out time travel and most likely won\'t until you work even harder!');
}
