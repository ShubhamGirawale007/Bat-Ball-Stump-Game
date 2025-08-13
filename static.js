
    let batchoice=document.getElementsByClassName('button')[0];
    batchoice.addEventListener('click',() => { 
    computerChoice= generatecomputerChoice();
    resultMsg = getresult('Bat',computerChoice);
    showresult('Bat',computerChoice,resultMsg)});

    let ballchoice=document.getElementsByClassName('button')[1];
    ballchoice.addEventListener('click', () =>{
    computerChoice= generatecomputerChoice();
    resultMsg = getresult('Ball',computerChoice);
    showresult('Ball',computerChoice,resultMsg);
   });

    let stumpchoice=document.getElementsByClassName('button')[2];
    stumpchoice.addEventListener('click', () =>{
    let computerChoice= generatecomputerChoice(); 
    resultMsg = getresult('Stump',computerChoice);
    showresult('Stump',computerChoice,resultMsg);
   });
    
   let reload = document.getElementsByClassName('button')[3];
   reload.addEventListener('click',() =>{
   localStorage.clear();
   resetScore(null);document.getElementById('score').innerText = score.displayScore();
   })

    


  let resultMsg; 
    let scoreStr = localStorage.getItem('score');
    let score;
    resetScore(scoreStr);
        function resetScore(scoreStr){
          score = scoreStr ? JSON.parse(scoreStr) :{
            win:0,
            lost:0,
            tie:0,
          };
       

   score.displayScore= function(){
      return `Win:${score.win}  lost:${score.lost}   Tie : ${score.tie}`;
    
   };
   };
    function generatecomputerChoice(){
    let randomNumber= Math.random() * 3;
    if(randomNumber > 0 && randomNumber <= 1){
    return 'Bat';
    }else if(randomNumber > 1 && randomNumber <= 2){
    return 'Ball';
    }else{
    return 'Stump';
    }
    }

    function getresult(userMove,computerMove){
      if(userMove ==='Bat' ){
         if(computerMove === 'Ball'){
          score.win++;
          return' user won. ';
          
         }else if(computerMove ==='Bat'){
           score.tie++;
          return`It's a tie`;
         
         }else if(computerMove ==='Stump') {
           score.lost++;
          return'computer has won';
         
         }
      }
      else if(userMove==='Ball'){
        if(computerMove === 'Ball') {
          score.tie++;
          return `It's a tie`;
          
        }else if(computerMove ==='Bat'){
          score.lost++
          return'Computrer has a win';
        }else if(computerMove ==='Stump') {
          score.win++;
          return'User has a Win';
        }
      }
      else if(userMove ==='Stump'){
        if(computerMove === 'Ball'){
          score.lost++;
          return 'Computer won';
        }else if(computerMove ==='Bat'){
          score.win++;
          return'user won';
  }else if(computerMove ==='Stump') {
         score.tie++;
          return`It's a tie`;
  }
      }

    }

    function showresult(userMove,computerMove){
    
      localStorage.setItem('score',JSON.stringify(score));
      document.querySelector('#user-move').innerText = `You have chosen ${userMove}`;
      document.querySelector('#computer-move').innerText = `Computer chosen ${computerMove}`;
      document.querySelector('#result').innerText = resultMsg;
      document.querySelector('#score').innerText = score.displayScore();
    }  