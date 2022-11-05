// function getComputerChoice(){
//     let choices = ["Rock", "Paper", "Scissors"];
//     let choiceIndex = Math.floor(Math.random()*3);
//     let computerChoice = choices[choiceIndex];
// } 

// function playerSelection(){
//     let playerInput = String(prompt("Your choose = "));
//     playerInput = playerInput.toLowerCase();
//     playerInput = playerInput.replace(playerInput[0], playerInput[0].toUpperCase());
//     /** Choice correctness **/
//     let choices = ["Rock", "Paper", "Scissors"];
//     if (choices.indexOf(playerInput)){
//         alert("You have typed wrong choice.");
//     }
// }


function rockPaperScissors(){
    alert(`Welcome to the Rock Paper Scissors game.\n There will be 5 rounds.`);
    let i = 1;
    while (i < 6){
        alert(`${i}. Round`)
        /* Computer Side */

        let choices = ["Rock", "Paper", "Scissors"];
        let choiceIndex = Math.floor(Math.random()*3);
        let computerChoice = choices[choiceIndex];

        /* Human Side */

        let playerInput = String(prompt("Your choose = "));
        playerInput = playerInput.toLowerCase();
        playerInput = playerInput.replace(playerInput[0], playerInput[0].toUpperCase());
        /** Choice correctness **/
        // if (choices[playerInput] === undefined){
        //     alert("You have typed wrong choice.");
        // }

        /* Winner */ 

        if (playerInput == "Rock" && computerChoice == "Scissors"){
            alert(`Computer chose ${computerChoice}\n You win!`);
        }else if (playerInput == "Rock" && computerChoice == "Paper"){
            alert(`Computer chose ${computerChoice}\n You lose!`);
        }else if (playerInput == "Paper" && computerChoice == "Rock"){
            alert(`Computer chose ${computerChoice}\n You win!`);
        }else if (playerInput == "Paper" && computerChoice == "Scissors"){
            alert(`Computer chose ${computerChoice}\n You lose!`);
        }else if (playerInput == "Scissors" && computerChoice == "Paper"){
            alert(`Computer chose ${computerChoice}\n You win!`);
        }else if (playerInput == "Scissors" && computerChoice == "Rock"){
            alert(`Computer chose ${computerChoice}\n You lose!`);
        }
        i+=1;
    }
}

rockPaperScissors();