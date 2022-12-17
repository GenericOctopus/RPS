const game = () => {

    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');

    const playerOptions = [rockBtn, paperBtn, scissorsBtn];
    const compOptions = ['rock', 'paper', 'scissors'];


    playerOptions.forEach(
        option => {option.addEventListener('click', function(){

            const randNum = Math.floor(Math.random()*3);
            const compChoice = compOptions[randNum];

            winner(this.innerText, compChoice);
    })})


    const winner = (player, computer) => {
        const result = document.querySelector('.result');

        player = player.toLowerCase();

        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
 
            }else{
                result.textContent = 'Player Won'
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
            }else{
                result.textContent = 'Player Won';
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
            }else{
                result.textContent = 'Player Won';

            }
        }
    }
}

game();