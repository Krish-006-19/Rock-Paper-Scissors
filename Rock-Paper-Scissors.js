let obj = {
    wins: 0,
    loses: 0,
    ties: 0
};
let obj1 = JSON.parse(localStorage.getItem('obj'));
if (obj1) {
    obj = obj1;
}
document.querySelector('.e3').innerHTML = `Wins: ${obj.wins} loses: ${obj.loses} ties: ${obj.ties}`;
let x = document.querySelector('.c1');
let y = document.querySelector('.c2');
let z = document.querySelector('.c3');
let d = document.querySelector('.d');
let d1 = document.querySelector('.d1')
x.addEventListener('click',()=>{
    decision('rock');
});
y.addEventListener('click',()=>{
    decision('paper');
});
z.addEventListener('click',()=>{
    decision('scissors');
});
d.addEventListener('click',()=>{
    document.querySelector('.p1').innerHTML=`Are you sure about that?`;
        let bt1 = document.querySelector('.bt1');
        bt1.innerHTML=`Yes`;
        bt1.style.color='white'; 
        let bt2 = document.querySelector('.bt2');
        bt2.innerHTML=`No`;
        bt2.style.color='white'; 
        bt1.addEventListener('click',()=>{
        bt1.innerHTML=``;
        bt2.innerHTML=``;
        bt1.style.color='black'; 
        bt2.style.color='black'; 
        document.querySelector('.p1').innerHTML=``;
    resetScore();
    
});
bt2.addEventListener('click',()=>{
bt1.innerHTML=``;
bt2.innerHTML=``;
bt1.style.color='black'; 
bt2.style.color='black'; 
document.querySelector('.p1').innerHTML=``;
});
});
d1.addEventListener('click',()=>{
    autoPlay();
});
document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
    decision('rock');
    }
    else if(event.key === 'p'){
        decision('paper');
        }
    else if(event.key === 's'){
        decision('scissors');
        }
    else if(event.key === 'a'){
        autoPlay();
    }
    else if(event.key === 'Backspace'){
        document.querySelector('.p1').innerHTML=`Are you sure about that?`;
        let bt1 = document.querySelector('.bt1');
        bt1.innerHTML=`Yes`;
        bt1.style.color='white'; 
        let bt2 = document.querySelector('.bt2');
        bt2.innerHTML=`No`;
        bt2.style.color='white'; 
        bt1.addEventListener('click',()=>{
        bt1.innerHTML=``;
        bt2.innerHTML=``;
        bt1.style.color='black'; 
        bt2.style.color='black'; 
        document.querySelector('.p1').innerHTML=``;
            resetScore();
        });
        bt2.addEventListener('click',()=>{
        bt1.innerHTML=``;
        bt2.innerHTML=``;
        bt1.style.color='black'; 
        bt2.style.color='black'; 
        document.querySelector('.p1').innerHTML=``;
        });
    }
});
function sure(){
    
}
let cont; 
let isAutoMode = true;
function autoPlay(){
    if(isAutoMode){
       cont = setInterval(()=>{
            let UserInput = computerInput();
            decision(UserInput);
        }, 1000);
        isAutoMode = false;
        document.querySelector('.d1').innerHTML='STOP';
    }
    else{
        clearInterval(cont);
        isAutoMode = true;
        document.querySelector('.d1').innerHTML='Auto Play';
    }
    
}

function decision(UserInput) {
    let compInput = computerInput();
    let result = '';

    if (UserInput === 'rock') {
        if (compInput === 'rock') {
            result = 'Tie';
        } else if (compInput === 'Paper') {
            result = 'You Lose';
        } else if (compInput === 'scissors') {
            result = 'You Win';
        }
    } else if (UserInput === 'paper') {
        if (compInput === 'rock') {
            result = 'You Win';
        } else if (compInput === 'paper') {
            result = 'Tie';
        } else if (compInput === 'scissors') {
            result = 'You Lose';
        }
    } else if (UserInput === 'scissors') {
        if (compInput === 'rock') {
            result = 'You Lose';
        } else if (compInput === 'paper') {
            result = 'You Win';
        } else if (compInput === 'scissors') {
            result = 'Tie';
        }
    }
    if (result === 'You Win') {
        obj.wins++;
    } else if (result === 'You Lose') {
        obj.loses++;
    } else if (result === 'Tie') {
        obj.ties++;
    }
    document.querySelector('.e1').innerHTML =` ${result}`;
    document.querySelector('.e2').innerHTML =`you <img class="c11" src="${UserInput}.png"> <img class="c11" src="${compInput}.png" style="transform: scaleX(-1);" > computer`;
    
    document.querySelector('.e3').innerHTML =` Wins: ${obj.wins} loses: ${obj.loses} ties: ${obj.ties}`;
    localStorage.setItem('obj', JSON.stringify(obj));
}
function resetScore() {
    obj.wins = 0;
    obj.loses = 0;
    obj.ties = 0;
    localStorage.removeItem('obj');
    document.querySelector('.e3').innerHTML =` Wins: ${obj.wins} loses: ${obj.loses} ties: ${obj.ties}`;
}
function computerInput() {
    let random = Math.random();
    if (random < 1 / 3) {
        return 'rock';
    } else if (random < 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
