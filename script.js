console.log('%c Script load', 'color: green; font-weight: bold;')
if ($) {
    console.log('%c Jquery load', 'color: green; font-weight: bold;')
}

let case1 = $('#case1');
let case2 = $('#case2');
let case3 = $('#case3');
let case4 = $('#case4');
let iteration = [];
let inputIteration = [];
let lvl = 0;
let bestScore = 0;
let currentScore = 0;

/**************************
* FUNCTION PLAY
*************************/

function nextIteration() 
{
    let numberRandom = Math.floor((Math.random() * 4) + 1);
    iteration = [...iteration, `case${numberRandom}`];

}

function initSequence() 
{
    if(iteration.length === 0){
        for (let i = 0; i <= 2; i++) {
            nextIteration();

        }
    }

}

function validateInput()
{
    if(iteration[lvl] !== inputIteration[lvl]) 
    {
        reset();
        alert('Game Over, Click Ok to try again !');
    } else 
    {
        lvl++;
        if(lvl === iteration.length){
            success();
            alert('Good Game !');
            nextIteration();
            displayIteration();
            displayScore();
        }
    }

}

function displayScore() 
{
    $('.currentScore').html(currentScore);
    let currentBestScore = $('.bestScore').text();
    if(bestScore > currentBestScore) {
        $('.bestScore').html(bestScore);
    }
}


function changeColor(c)
{
    switch (c) {
        case 'case1':
        $('#case1').css({"backgroundColor": "#ee7452"});
        setTimeout(function (){
            $('#case1').css({"backgroundColor": "#F25022"});
        }, 500);
        break;
        case 'case2':
        $('#case2').css({"backgroundColor": "#9ed428"});
        setTimeout(function (){
            $('#case2').css({"backgroundColor": "#7FBA00"});
        }, 500);
        break;
        case 'case3':
        $('#case3').css({"backgroundColor": "#5ecafc"});
        setTimeout(function (){
            $('#case3').css({"backgroundColor": "#00A4EF"});
        }, 500);
        break;
        case 'case4':
        $('#case4').css({"backgroundColor": "#fdcf51"});
        setTimeout(function (){
            $('#case4').css({"backgroundColor": "#FFB900"});
        }, 500);
        break;
    }
    
}

function displayIteration()
{
    setTimeout(() => {
        let time = 0;
        iteration.forEach(element => {
            setTimeout(() => {
                changeColor(element);
            }, time);
            time = time + 800;
        });
    }, 500);
    
}

function success() {
    bestScore++;
    currentScore++;
    inputIteration = [];
    lvl = 0;
}

function reset() {
    iteration = [];
    inputIteration = [];
    lvl = 0;
    currentScore = 0;
    bestScore = 0;
}


/**************************
 * CORE GAME
 *************************/

$("#case1").click(() => {
    changeColor('case1');
    inputIteration = [...inputIteration, 'case1'];
    validateInput();
  });

$("#case2").click(() => {
    changeColor('case2');
    inputIteration = [...inputIteration, $('#case2').attr('id')];
    validateInput();
  });

$("#case3").click(() => {
    changeColor('case3');
    inputIteration = [...inputIteration, $('#case3').attr('id')];
    validateInput();
  });

$("#case4").click(() => {
    changeColor('case4');
    inputIteration = [...inputIteration, $('#case4').attr('id')];
    validateInput();
  });

$(".start").click(() => {
    initSequence();
    displayIteration();
  });
