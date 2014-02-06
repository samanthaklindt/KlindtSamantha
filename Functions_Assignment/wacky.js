/**
 * Created by samanthaklindt on 11/19/13.
 */

//Wacky


var planet= prompt('What planet are you on right now?');

function dinosuarGen(planet){

    var randomEvent=Math.random();
    if(planet=='Earth'){
        (randomEvent);}
        if(randomEvent>.25){
            console.log('Pterodactyl!');
        }else if(randomEvent<.75){
            console.log('T-Rex!');
        }    return 'Welcome to the old ages of ' +planet + '!';
}

console.log("You have been taken back in time to the age of the dinosaurs! Look there\'s a ...");

console.log(dinosuarGen(planet));