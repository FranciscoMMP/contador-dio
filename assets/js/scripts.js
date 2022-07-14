var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;


document.getElementById("adicionar").addEventListener("click",increment);



document.getElementById("subtrair").addEventListener("click",decrement);


function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }


function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }


//Número somente entre 0 e 10
var currentNumberWrapper010 = document.getElementById("currentNumber010");
var currentNumber010 = 0;


document.getElementById("adicionar0_10").addEventListener("click",increment010);



document.getElementById("subtrair0_10").addEventListener("click",decrement010);


function increment010(){
    if(currentNumber010 < 10){
    currentNumber010 = currentNumber010 + 1;
    currentNumberWrapper010.innerHTML = currentNumber010;
    }
}

function decrement010(){
    if(currentNumber010 > 0){
    currentNumber010 = currentNumber010 - 1;
    currentNumberWrapper010.innerHTML = currentNumber010;
    }
}

//Número vermelho ao ficar negativo
var currentNumberWrapperRed = document.getElementById("currentNumberVermelho");
var currentNumberVermelho = 0;
document.getElementById("adicionarVermelho").addEventListener("click",incrementRed);



document.getElementById("subtrairVermelho").addEventListener("click",decrementRed);



function incrementRed(){
    currentNumberVermelho = currentNumberVermelho + 1;
    currentNumberWrapperRed.innerHTML = currentNumberVermelho;
    if (currentNumberVermelho >= 0){
        currentNumberWrapperRed.style.color = "black";
    }
    }  

function decrementRed(){
    currentNumberVermelho = currentNumberVermelho - 1;
    currentNumberWrapperRed.innerHTML = currentNumberVermelho;
    if (currentNumberVermelho < 0){
        currentNumberWrapperRed.style.color = "red";
    }
    }
