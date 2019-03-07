console.log('%c Le fichier js est chargé', 'color: green; font-weight: bold;')
if ($) {
    console.log('%c Jquery est chargé', 'color: green; font-weight: bold;')
}

let case1 = $('#case1');
let case2 = $('#case2');
let case3 = $('#case3');
let case4 = $('#case4');
let iteration = [];
let inputIteration = [];
let lvl = 0;

/**************************
* CORE PLAY
*************************/

function nextIteration() 
{
    let numberRandom = Math.floor((Math.random() * 4) + 1);
    iteration = [...iteration, `case${numberRandom}`];
    console.table(iteration);

}

function initSequence() 
{
    for (let i = 0; i <= 2; i++) {
        nextIteration();
    }
}

function validateInput()
{
    if(iteration[lvl] !== inputIteration[lvl]) 
    {
        iteration = [];
        inputIteration = [];
        lvl = 0;
        alert('Game Over, Click Ok pour rejouer !');
    } else 
    {
        lvl++;
        console.log('ok');
        if(lvl === iteration.length){
            console.log('OK seq');
            alert('Well Done !');
            inputIteration = [];
            lvl = 0;
            nextIteration();
            displayIteration();
        }
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

/**************************
* RENDER PLAY
*************************/

function displayIteration()
{
    let time = 0;
    iteration.forEach(element => {
        setTimeout(() => {
            changeColor(element);
        }, time);
        time = time + 800;
    });

}

/**************************
* IN GAME
*************************/

$("#case1").click(function() {
    changeColor('case1');
    inputIteration = [...inputIteration, 'case1'];
    validateInput();
  });

$("#case2").click(function() {
    changeColor('case2');
    inputIteration = [...inputIteration, $('#case2').attr('id')];
    validateInput();
  });

$("#case3").click(function() {
    changeColor('case3');
    inputIteration = [...inputIteration, $('#case3').attr('id')];
    validateInput();
  });

$("#case4").click(function() {
    changeColor('case4');
    inputIteration = [...inputIteration, $('#case4').attr('id')];
    validateInput();
  });

initSequence();
console.table(iteration);
displayIteration();