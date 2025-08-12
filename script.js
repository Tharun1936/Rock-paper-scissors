let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genComputerChoice=()=>{
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    console.log("Draw..!");
    msg.innerText="DRAW..!";
};

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;  
        console.log("You win");
        msg.innerText="You WIN..!";
        msg.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose");
        msg.innerText="You LOSE..!";
        msg.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user-choice= ",userChoice);
    const compChoice=genComputerChoice();
    console.log("comp-choice= ",compChoice);  
    if(userChoice===compChoice) {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false : true;
        }
        else{
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        console.log("clicked",choiceId);
        playGame(choiceId);
    });
}); 