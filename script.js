const player1 = {
    score : 0,
    display : document.querySelector('#p1Display'),
    button : document.querySelector('#p1Button')
}
const player2 = {
    score : 0,
    display : document.querySelector('#p2Display'),
    button : document.querySelector('#p2Button')
}

const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playToSelect');
let winningScore = 3;
let isGameOver = false;

function updateScores(ply, opponent ){
    if(isGameOver===false){
        ply.score += 1 ;
    if(ply.score===winningScore){
        isGameOver = true;
        ply.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        ply.button.disabled = true;
        opponent.button.disabled = true;
    }
    ply.display.textContent = ply.score;
}
}

player1.button.addEventListener('click' , () => {
    updateScores(player1 ,player2);
})


player2.button.addEventListener('click' , () => {
    updateScores(player2 ,player1)
})

winningScoreSelect.addEventListener('change' , function() {
    winningScore = parseInt(this.value)
    reset();
})

resetBtn.addEventListener('click' , reset )

function reset(){
    isGameOver = false;
    for(let player of [player1,player2]){
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('has-text-success');
        player.display.classList.remove('has-text-danger');
        player.button.disabled = false;
    }
}
