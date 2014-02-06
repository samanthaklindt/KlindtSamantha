/**
 * Created by samanthaklindt on 11/19/13.
 */

//Industry


var designer;
designer= prompt('To see what kind of designer you are, insert \'Designer\'' + '!');

function webGen(designer){

    var webEvent=Math.random();
    if(designer=='Designer'){
        (webEvent)
        if(webEvent>.60){
            console.log('Web Developer');
        }else if(webEvent<.10){
            console.log('Mobile Developer');
        }
    }
        return 'Welcome ' +designer + '!';
}

console.log(webGen(designer));
