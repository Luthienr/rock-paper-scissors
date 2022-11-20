function computerChoice(){
        //Computer
        const choice = ['Rock', 'Paper', 'Scissors'];
        let computerChoice = choice[Math.floor(Math.random()*3)];
        //Computer
}



function rockPaperScissors(){
    let i = 0;
    let playerWins = 0;
    let computerWins = 0;
    const choice = ['Rock', 'Paper', 'Scissors'];
    alert('There will be 5 rounds.\nMay the best of you win!')
    while (i < 5){
        alert(`Round ${i + 1}!`);

        //Player
        let playerChoice = prompt('Write your choice!');
        let playerChoice2 = playerChoice.toLowerCase();
        playerChoice2 = playerChoice2[0].toUpperCase() + playerChoice2.slice(1,playerChoice2.length);
        if (choice.indexOf(playerChoice2) < 0) {
            alert("Please restart the page.");
            return
        }   
        //Player
        //Who win?
        if (playerChoice2 == 'Rock' && computerChoice == 'Rock'){
            alert(`Computer chose Rock\nIt's a tie.\nNobody wins!`);
            alert(`Player:${playerWins}-----Computer${computerWins}`);
        }else if (playerChoice2 == 'Rock' && computerChoice == 'Paper'){
            computerWins+=1;
            alert('Computer chose Paper\nYou lost!')
            alert(`Player:${playerWins}-----Computer${computerWins}`);
        }else if (playerChoice2 == 'Rock' && computerChoice == 'Scissors'){
            playerWins+=1;
            alert('Computer chose Scissors\nYou win!')
            alert(`Player:${playerWins}-----Computer${computerWins}`);
        }else if (playerChoice2 == 'Paper' && computerChoice == 'Paper'){
            alert(`Computer chose Paper\nIt's a tie.\nNobody wins!`);
            alert(`Player:${playerWins}-----Computer${computerWins}`);
        }else if (playerChoice2 == 'Paper' && computerChoice == 'Rock'){
            playerWins+=1;
            alert('Computer chose Rock\nYou win!')
            alert(`Player:${playerWins}-----Computer${computerWins}`);
        }else if (playerChoice2 == 'Paper' && computerChoice == 'Scissors'){
            computerWins+=1;
            alert('Computer chose Scissors\nYou lost!')
            alert(`Player:${playerWins}-----Computer${computerWins}`);
        }else if (playerChoice2 == 'Scissors' && computerChoice == 'Scissors'){
            alert(`Computer chose Scissors\nIt's a tie.\nNobody wins!`);
            alert(`Player:${playerWins}-----Computer${computerWins}`);
        }else if (playerChoice2 == 'Scissors' && computerChoice == 'Rock'){
            computerWins+=1;
            alert('Computer chose Rock\nYou lost!')
            alert(`Player:${playerWins}-----Computer${computerWins}`);
        }else if (playerChoice2 == 'Scissors' && computerChoice == 'Paper'){
            playerWins+=1;
            alert('Computer chose Paper\nYou win!')
            alert(`Player:${playerWins}-----Computer${computerWins}`);
        }
        //Who win?
        i++;
    }
}



rockPaperScissors();









































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






// alert(`Welcome to the Rock Paper Scissors game.\n There will be 5 rounds.`);
// let i = 1;
// while (i < 6){
//     alert(`${i}. Round`)
//     /* Computer Side */

//     let choices = ["Rock", "Paper", "Scissors"];
//     let choiceIndex = Math.floor(Math.random()*3);
//     let computerChoice = choices[choiceIndex];

//     /* Human Side */

//     let playerInput = String(prompt("Your choose = "));
//     playerInput = playerInput.toLowerCase();
//     playerInput = playerInput.replace(playerInput[0], playerInput[0].toUpperCase());
//     /** Choice correctness **/
//     // if (choices[playerInput] === undefined){
//     //     alert("You have typed wrong choice.");
//     // }

//     /* Winner */ 

//     if (playerInput == "Rock" && computerChoice == "Scissors"){
//         alert(`Computer chose ${computerChoice}\n You win!`);
//     }else if (playerInput == "Rock" && computerChoice == "Paper"){
//         alert(`Computer chose ${computerChoice}\n You lose!`);
//     }else if (playerInput == "Paper" && computerChoice == "Rock"){
//         alert(`Computer chose ${computerChoice}\n You win!`);
//     }else if (playerInput == "Paper" && computerChoice == "Scissors"){
//         alert(`Computer chose ${computerChoice}\n You lose!`);
//     }else if (playerInput == "Scissors" && computerChoice == "Paper"){
//         alert(`Computer chose ${computerChoice}\n You win!`);
//     }else if (playerInput == "Scissors" && computerChoice == "Rock"){
//         alert(`Computer chose ${computerChoice}\n You lose!`);
//     }
//     i+=1;
// }