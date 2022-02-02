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
var modal = document.querySelector(".myModal");
var yesBtn = document.querySelector(".yes-modal");

var modal = document.querySelector(".modal");
var span = document.getElementsByClassName("close-modal")[0];


span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function playerOneTurn(event) {
    var boxClicked = event.target
    if (boxClicked.style.backgroundColor === 'red' || boxClicked.style.backgroundColor === 'blue') {
        // dont need to do anything
    } else {
        boxClicked.style.backgroundColor = 'red'
        boxClicked.textContent = 'X'
        boxClicked.style.fontSize = '50px'
        numMoves += 1
    }
}

function playerTwoTurn(event) {
    var boxClicked = event.target
    if (boxClicked.tagName === 'DIV') {
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

function swapPlayer(event) {
    if (numMoves % 2 === 0) {
        playerOneTurn(event)
    } else {
        playerTwoTurn(event)
    }
    checker()
}

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
        modal.style.display = "block"
        modal.querySelector('p').textContent = "Player 1 is our winner! Would you like to play again?"

    } else if ((box1.textContent === 'O' && box2.textContent === 'O' && box3.textContent === 'O') ||
        (box4.textContent === 'O' && box5.textContent === 'O' && box6.textContent === 'O') ||
        (box7.textContent === 'O' && box8.textContent === 'O' && box9.textContent === 'O') ||
        (box7.textContent === 'O' && box8.textContent === 'O' && box9.textContent === 'O') ||
        (box1.textContent === 'O' && box4.textContent === 'O' && box7.textContent === 'O') ||
        (box2.textContent === 'O' && box5.textContent === 'O' && box8.textContent === 'O') ||
        (box3.textContent === 'O' && box6.textContent === 'O' && box9.textContent === 'O') ||
        (box1.textContent === 'O' && box5.textContent === 'O' && box9.textContent === 'O') ||
        (box3.textContent === 'O' && box5.textContent === 'O' && box7.textContent === 'O')) {
        modal.style.display = "block"
        modal.querySelector('p').textContent = "Player 2 is our winner! Would you like to play again?"

    } else if (numMoves === 9) {
        modal.style.display = "block"
        modal.querySelector('p').textContent = "We have a draw! Would you like to play again?"
    }
}

function resetBoard() {
    numMoves = 0
    box1.textContent = ''
    box2.textContent = ''
    box3.textContent = ''
    box4.textContent = ''
    box5.textContent = ''
    box6.textContent = ''
    box7.textContent = ''
    box8.textContent = ''
    box9.textContent = ''
    box1.style.backgroundColor = ''
    box2.style.backgroundColor = ''
    box3.style.backgroundColor = ''
    box4.style.backgroundColor = ''
    box5.style.backgroundColor = ''
    box6.style.backgroundColor = ''
    box7.style.backgroundColor = ''
    box8.style.backgroundColor = ''
    box9.style.backgroundColor = ''
    modal.style.display = "none";
}

function endBoard() {
    box1.textContent = ''
    box2.textContent = 'Thank'
    box3.textContent = ''
    box4.textContent = ''
    box5.textContent = 'You'
    box6.textContent = ''
    box7.textContent = ''
    box8.textContent = 'For Playing'
    box9.textContent = ''
    box1.style.backgroundColor = ''
    box2.style.backgroundColor = ''
    box3.style.backgroundColor = ''
    box4.style.backgroundColor = ''
    box5.style.backgroundColor = ''
    box6.style.backgroundColor = ''
    box7.style.backgroundColor = ''
    box8.style.backgroundColor = ''
    box9.style.backgroundColor = ''
    modal.style.display = "none";
}

function changeModal() {

}

yesBtn.addEventListener('click', resetBoard)
tttBox.addEventListener('click', swapPlayer)