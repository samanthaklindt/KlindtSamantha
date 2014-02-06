//Samantha Klindt
//
//February 4,2014
//
//Goal 1: Assignment: The Duel - Part I


//player name
var playerOneName = "Finn"
var playerTwoName = "Ice King"

//player health
var playerOneHealth = 100
var playerTwoHealth = 100

//player damage
var player1Damage = 50
var player2Damage = 50

var round = 0

function fight(){
    console.log("Player's are now fighting");

    alert(playerOneName+": "+playerOneHealth+"  "+"**START**"+"  "+playerTwoName+": "+playerTwoHealth);

        for(i=0;i<10;i++){
        console.log(i);

            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;

            var f1 = ~~(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = ~~(Math.random()*(player2Damage-minDamage2)+minDamage2);


              playerOneHealth -= f1;
              playerTwoHealth -= f2;

              console.log(playerOneHealth);
              console.log(playerTwoHealth);

    console.log(playerOneName+": "+playerOneHealth+"  "+playerTwoName+": "+playerTwoHealth);

    var results = winnerCheck();
    console.log(results);

    if(results === "No Winner"){
        round++;
        alert(playerOneName+": "+playerOneHealth+"  "+" **ROUND "+round+" OVER** "+"  "+playerTwoName+": "+playerTwoHealth);

    }else{
      alert(results);
        break;
    }

}

}

function winnerCheck(){

        var result = 'No Winner';

    if(playerOneHealth<1 && playerTwoHealth<1){
        result = "Both Finn and the Ice King are dead, No Winner!!";

    }else if(playerOneHealth<1){
        result = playerTwoName+" WINS!!"

    }else if(playerTwoHealth<1)
        result = playerOneName+" WINS!!"

    return result;
}

fight();






