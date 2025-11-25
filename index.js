function computerTurn(){
    let game=["rock","paper","scissor"];
    return  game[Math.floor(Math.random() * game.length)]
}

// function humanTurn(){
//     const entry=prompt("enter here").toLowerCase();
//     if(!["rock","paper","scissor"].includes(entry)) {
//         console.log("Invalid Input");
//         return null
//     }
//     return entry
// }

let hyumanScore=0;
let computerScore=0;
function playGame(e){
    const humanValue=e.target.dataset.choice;
    console.log(humanValue);
    
    const computervalue=computerTurn();

    console.log("you choose",humanValue);
    console.log("computer choose",computervalue);

    

    if(!humanValue) return

    if(
        (computervalue == "rock" && humanValue=="paper") ||
        ( computervalue == "paper" && humanValue=="scissor") ||
        (  computervalue == "scissor" && humanValue=="rock" )
    ){  
        hyumanScore ++
        document.querySelector("#result").textContent="You Won";
    }else if(computervalue===humanValue){
        console.log("Draw");
        document.querySelector("#result").textContent="Draw!!";
    }else{
        computerScore++;
        document.querySelector("#result").textContent="PC Won"
    }

    document.querySelector("#human").textContent=hyumanScore;
    document.querySelector("#pc").textContent=computerScore;
}

// playGame()
console.log("humanScore : ",hyumanScore);
console.log("PcScore : ",computerScore);



document.querySelectorAll(".btn").forEach((btn)=>{
    btn.addEventListener("click",playGame)
})

let human=document.querySelector(".human");
let pc=document.querySelector(".pc");

// human.textContent=`Your Score ${hyumanScore}`;
// pc.textContent=`Pc Score ${computerScore}`;


// console.log(computerTurn());
// console.log(humanTurn());



