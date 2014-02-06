/**
 * Created by samanthaklindt on 11/18/13.
 */

//Industry

var computer= Math.random()*4; //This variable creates a random output and is multiplied by 4.
var mobileDevice= Math.random()*10; //This variable creates a random output and is multiplied by 10.
var totalDevices= computer + mobileDevice; //This variable adds together the first and second variable to make one variable.

if(totalDevices>5){ //This if statement is looking for the variable totalDevices to be greater than 5.
    console.log('You have '+totalDevices+' and that is greater than 5... If you get anymore computers or mobile devices you might go crazy!') //This line is printing out the total number of devices you currently have and tells you that you should not get more unless you want to go crazy.
}else{(totalDevices<5) //This if statement is looking for the variable totalDevices to be less than 5.
    console.log('You have '+totalDevices+' and that is less than 5... You may want to look into getting more computers or mobile devices!') //This line is printing out the total number of devices you currently have and tells you that you should get more devices.
}
//JMD What happens when you have exactly 5?
