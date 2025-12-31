'use strict';

const score_1 = document.querySelector('.player-0-score h2')
const score_2 = document.querySelector('.player-1-score h2')
const current_1 = document.querySelector('.player-0-current h2')
const current_2 = document.querySelector('.player-1-current h2')
const but_1 = document.querySelector('.but-1')
const but_2 = document.querySelector('.but-2')
const but_3 = document.querySelector('.but-3')
const dices = document.querySelector('.dices')
const player_1 = document.querySelector('.player-1')
const player_2 = document.querySelector('.player-2')
const pops = document.querySelector('.pop')




score_1.textContent = 0;
score_2.textContent = 0;
dices.classList.add('hidden');
player_1.classList.add('active_background');



let p_score_1 = 0;
let p_score_2 = 0;

let c_score = 0;
let active_player = 0;
let playing = true;

//document.querySelector('.player-1').style.backgroundColor = 'rgb(240, 109, 175)';
//background-color: rgb(240, 109, 175);

but_2.addEventListener('click', function () {

    if (playing) {
        

         
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    dices.classList.remove('hidden');
    dices.src = `dice-${dice}.png`;
    
if (dice !== 1) { 
    c_score += dice
    document.querySelector(`.player-${active_player}-current h2`).textContent = c_score
    
    

} else {

    document.querySelector(`.player-${active_player}-current h2`).textContent = 0;
    c_score = 0;
  // player_1.classList.remove('active_background');
       // player_2.classList.add('active_background');

    if (active_player === 0) {
        active_player  = 1;
       player_1.classList.remove('active_background')
        player_2.classList.add('active_background')

        
        
    } else {
        active_player = 0;
        player_2.classList.remove('active_background')
        player_1.classList.add('active_background')
        
    }
    

//active_player = active_player === 0 ? 1 : 0;

}
    }
   



})

but_3.addEventListener('click', function () {

    if (playing) {
        
        if (active_player === 0) {
            p_score_1 += c_score;
            document.querySelector(`.player-${active_player}-score h2`).textContent = p_score_1;
            document.querySelector(`.player-${active_player}-current h2`).textContent = 0;
            c_score = 0;
            active_player  = 1;
            player_1.classList.remove('active_background')
            player_2.classList.add('active_background')
           
            
            
        } else {
            p_score_2 += c_score;
            document.querySelector(`.player-${active_player}-score h2`).textContent = p_score_2;
            document.querySelector(`.player-${active_player}-current h2`).textContent = 0;
            c_score = 0;
            active_player = 0;
            player_2.classList.remove('active_background')
                player_1.classList.add('active_background')
             
        }
    
        if (p_score_1 >= 100) {
            document.querySelector('.x').textContent = 'player -1';
           
           

        }
        else if(p_score_2 >= 100){
            document.querySelector('.x').textContent = 'player -2';
           
           
        }
      
        
     if(p_score_1 >= 100 || p_score_2 >= 100 ) {

        playing = false;
        document.querySelector('.t-1').textContent = `TEAM:PLAYER 1 SCORE: ${p_score_1}`;
        document.querySelector('.t-2').textContent = `TEAM:PLAYER 1 SCORE: ${p_score_2}`;
        pops.classList.remove('hidden');
    }
    
    }



   
    
    
})
