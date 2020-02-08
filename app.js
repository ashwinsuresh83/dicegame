var scores,roundScore,activePlayer,gamePlaying,prevRoll=0;
gamePlaying=true;
scores=[0,0];
activePlayer=0;
roundScore=0;
document.querySelector('.dice').style.display='none';
document.querySelector('#score-0').textContent='0';
document.querySelector('#score-1').textContent='0';
document.querySelector('#current-0').textContent='0';
document.querySelector('#current-1').textContent='0';
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
    var dice=Math.floor(Math.random()*6)+1;
    
    document.querySelector('.dice').style.display='block';
    document.querySelector('.dice').src='images/dice-' + dice + '.png';
    if(dice===6 &&prevRoll===6){
        scores[activePlayer]=0;
        document.querySelector('#score-' + activePlayer).textContent=0;

        nextPlayer();
    }
    else if(dice>1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent=roundScore;
        prevRoll=dice;
        
    }
    
    
    else{
        nextPlayer();
        
    }
}
});
document.querySelector('.btn-hold').addEventListener('click' , function(){
    if(gamePlaying){
    scores[activePlayer]+=roundScore;
    document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
    if(scores[activePlayer] >= 100 ){
        document.querySelector('#name-' + activePlayer).textContent='Winner';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
    }
    else{
    nextPlayer();
    }
}


    

    
});
document.querySelector('.btn-new').addEventListener('click',function(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
    document.querySelector('#score-0').textContent='0';
    document.querySelector('#score-1').textContent='0';
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';


});
function nextPlayer(){
    prevRoll=0;
    roundScore=0;
        document.querySelector('#current-' + activePlayer).textContent=0;
        activePlayer === 0? activePlayer=1:activePlayer=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}

