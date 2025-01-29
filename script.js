let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
    return Math.floor(Math.random()*9 + 1);
}

function compareGuesses(human, pc, target){
    let humanDifference = Math.abs(target-human);
    let pcDifference = Math.abs(target-pc);
    if (humanDifference <= pcDifference){
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human'){
        humanScore++;
    } else if (winner === 'computer') {
        computerScore ++;
    }
} 

const advanceRound = () =>{
    currentRoundNumber++;
}