 //UNFINISHED
 
 //set interval of entire timer = 10000 ms = 10 seconds


 function startTimer() {
    setInterval(secondOnes.innerHTML++, 1000);
 }
 

let secondTens = document.querySelector("#secondTens");
let secondOnes = document.querySelector("#secondOnes");
let msHundreds = document.querySelector("#msHundreds");
let msTens = document.querySelector("#msTens");

secondTens.innerHTML = 0;
secondOnes.innerHTML = 0;
msHundreds.innerHTML = 0;
msTens.innerHTML = 0;





 startTimer();