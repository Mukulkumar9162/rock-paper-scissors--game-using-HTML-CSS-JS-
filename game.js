
let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");




const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    // rock, paper,scissors
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];


};
const drawGame=()=>{
    // console.log("game was draw.");
        msg.innerText="game was draw!play again";
        msg.style.backgroundColor="rgb(2, 2, 35)";


};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
       userScore++;
       userScorepara.innerText=userScore;
        // console.log("you win!");
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }else{
        compScore++;
       compScorepara.innerText=compScore;
        // console.log("you lose");
       msg.innerText=`you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";


    }

}


const palygame=(userChoice)=>{
    // console.log("user Choice=",userChoice);
    // generate computer choice->modular
    const compChoice=genCompChoice();
    // console.log("comp Choice=",compChoice);

    if(userChoice===compChoice){
        // Draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            // secissor,paper
           userWin= compChoice==="paper" ?false:true;
        }else if(userChoice==="paper"){
            // rock,scissor
            userWin=compChoice==="scissor" ? false :true;
        }else{
            // rock,paper
            userWin=compChoice==="rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


};

   choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        palygame(userChoice);


    });
   });
