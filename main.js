var numMoves = 0
var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
var box3 = document.querySelector('.box3')
var box4 = document.querySelector('.box4')
var box5 = document.querySelector('.box5')
var box6 = document.querySelector('.box6')
var box7 = document.querySelector('.box7')
var box8 = document.querySelector('.box8')
var box9 = document.querySelector('.box9')
var tttBox = document.querySelector('.tttBox')

// function playerOneTurn(event) {
//     var boxClicked = event.target
//     if (boxClicked.tagName === 'DIV') {
//         boxClicked.style.backgroundColor = 'red'
//     }
//     // var boxClicked = event.target
//     // console.log(boxClicked)
//     // if (boxClicked.tagName.toLowerCase() === 'div') {
//     //     boxClicked.style.backgroundColor = "red"
//     // }
// }

// function playerTwoTurn(event) {
//     var boxClicked = event.target
//     if (boxClicked.tagName === 'DIV') {
//         boxClicked.style.backgroundColor = 'blue'
//     }
// }

// function swapPlayer(){
//     if (numMoves % 2 === 0) {
//         playerOneTurn()
//     } else {
//         playerTwoTurn()
//     }
// }

function swapPlayer(event) {
    var boxClicked = event.target
    if (boxClicked.tagName === 'DIV') {
        if (numMoves % 2 === 0) {
            if (boxClicked.style.backgroundColor === 'red' || boxClicked.style.backgroundColor === 'blue') {
                // dont need to do anything
            } else {
                boxClicked.style.backgroundColor = 'red'
                boxClicked.textContent = 'X'
                boxClicked.style.fontSize = '50px'
                //var getClass = boxClicked.getAttribute('class')
                numMoves += 1
            }
        } else if (numMoves % 2 !== 0) {
            if (boxClicked.style.backgroundColor === 'red' || boxClicked.style.backgroundColor === 'blue') {
                // dont need to do anything
            } else {
                boxClicked.style.backgroundColor = 'blue'
                boxClicked.textContent = 'O'
                boxClicked.style.fontSize = '50px'
                numMoves += 1
            }
        }
    }
    console.log(boxClicked)
    checker()
}

tttBox.addEventListener('click', swapPlayer)


// win check
function checker() {
    if ((box1.textContent === 'X' && box2.textContent === 'X' && box3.textContent === 'X') ||
        (box4.textContent === 'X' && box5.textContent === 'X' && box6.textContent === 'X') ||
        (box7.textContent === 'X' && box8.textContent === 'X' && box9.textContent === 'X') ||
        (box7.textContent === 'X' && box8.textContent === 'X' && box9.textContent === 'X') ||
        (box1.textContent === 'X' && box4.textContent === 'X' && box7.textContent === 'X') ||
        (box2.textContent === 'X' && box5.textContent === 'X' && box8.textContent === 'X') ||
        (box3.textContent === 'X' && box6.textContent === 'X' && box9.textContent === 'X') ||
        (box1.textContent === 'X' && box5.textContent === 'X' && box9.textContent === 'X') ||
        (box3.textContent === 'X' && box5.textContent === 'X' && box7.textContent === 'X')) {
        console.log('we have a winner')

    } else if ((box1.textContent === 'O' && box2.textContent === 'O' && box3.textContent === 'O') ||
        (box4.textContent === 'O' && box5.textContent === 'O' && box6.textContent === 'O') ||
        (box7.textContent === 'O' && box8.textContent === 'O' && box9.textContent === 'O') ||
        (box7.textContent === 'O' && box8.textContent === 'O' && box9.textContent === 'O') ||
        (box1.textContent === 'O' && box4.textContent === 'O' && box7.textContent === 'O') ||
        (box2.textContent === 'O' && box5.textContent === 'O' && box8.textContent === 'O') ||
        (box3.textContent === 'O' && box6.textContent === 'O' && box9.textContent === 'O') ||
        (box1.textContent === 'O' && box5.textContent === 'O' && box9.textContent === 'O') ||
        (box3.textContent === 'O' && box5.textContent === 'O' && box7.textContent === 'O')) {
        console.log('we have a winner')

    } else if (numMoves === 9) {
        console.log('we have a draw')
    } else {
        console.log('keep playing')
    }
}