var numMoves = 0
var numGames = 0
var playerSwap = false
var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
var box3 = document.querySelector('.box3')
var box4 = document.querySelector('.box4')
var box5 = document.querySelector('.box5')
var box6 = document.querySelector('.box6')
var box7 = document.querySelector('.box7')
var box8 = document.querySelector('.box8')
var box9 = document.querySelector('.box9')
var playerList1 = document.querySelector('.player-list1')
var playerList2 = document.querySelector('.player-list2')
var playerOneSection = document.querySelector('.player-one')
var playerTwoSection = document.querySelector('.player-two')
var playerOneHeading = document.querySelector('.player-one h2')
var playerTwoHeading = document.querySelector('.player-two h2')
var playerOneImages = document.querySelectorAll('.player-list1 img')
var playerTwoImages = document.querySelectorAll('.player-list2 img')
var tttBox = document.querySelector('.tttBox')
var yesBtn = document.querySelector(".yes-modal")
var subtitle = document.querySelector(".subtitle")
var modal = document.querySelector(".modal")
var span = document.querySelector(".close-modal")

function selectPlayerOne(event) {
    var boxClicked = event.target
    for (var i = 0; i < playerOneImages.length; i++) {
        document.querySelectorAll('.player-list1 img')[i].style.display = 'none'
    }
    boxClicked.style.display = 'block'
    playerList1.style.display = 'flex'
    playerOneHeading.textContent = boxClicked.getAttribute('alt')
    playerOneSection.style.backgroundColor = 'transparent'
    // boxClicked.style.border = ''
}

function selectPlayerTwo(event) {
    var boxClicked = event.target
    for (var i = 0; i < playerOneImages.length; i++) {
        playerTwoImages[i].style.display = 'none'
    }
    boxClicked.style.display = 'block'
    playerList2.style.display = 'flex'
    playerTwoHeading.textContent = boxClicked.getAttribute('alt')
    playerTwoSection.style.backgroundColor = 'transparent'
}

function playerOneTurn(event) {
    var boxClicked = event.target
    if (boxClicked.textContent === 'X' || boxClicked.textContent === 'O') {
        // dont need to do anything
    } else {
        boxClicked.style.backgroundColor = '#ad5fbb'
        boxClicked.textContent = 'X'
        turnMessageOne()
        numMoves += 1
    }
}

function playerTwoTurn(event) {
    var boxClicked = event.target
    if (boxClicked.tagName === 'DIV') {
        if (boxClicked.textContent === 'X' || boxClicked.textContent === 'O') {
            // dont need to do anything
        } else {
            boxClicked.style.backgroundColor = '#5fbbb7'
            boxClicked.textContent = 'O'
            turnMessageTwo()
            numMoves += 1
        }
    }
}

function turnMessageOne() {
    subtitle.textContent = "Player Two's Turn!"
    playerTwoHeading.textContent = `It's your turn!`
    playerOneHeading.textContent = ``
    playerTwoSection.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    playerOneSection.style.backgroundColor = 'transparent'
}

function turnMessageTwo() {
    subtitle.textContent = "Player One's Turn!"
    playerOneHeading.textContent = `It's your turn!`
    playerTwoHeading.textContent = ``
    playerOneSection.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    playerTwoSection.style.backgroundColor = 'transparent'
}

function swapPlayer(event) {
    if (event.target.tagName === 'DIV') {
        if (playerSwap === true) {
            if (numMoves % 2 === 0) {
                playerTwoTurn(event)
            } else {
                playerOneTurn(event)
            }
        } else if (playerSwap === false) {
            if (numMoves % 2 === 0) {
                playerOneTurn(event)
            } else {
                playerTwoTurn(event)
            }
        }
    }
    checker()
}

function resetBoard() {
    numMoves = 0
    for (var i = 0; i < document.querySelectorAll('.tttBox div').length; i++) {
        document.querySelectorAll('.tttBox div')[i].textContent = ''
        document.querySelectorAll('.tttBox div')[i].style.backgroundColor = ''
    }
    modal.style.display = "none";
    numGames += 1
    backgroundChange()
    if (modal.querySelector('p').textContent === "Player Two is our winner! Would you like to play again?") {
        subtitle.textContent = "Welcome back! It is Player One's turn!"
        playerSwap = false
    } else if (modal.querySelector('p').textContent === "Player One is our winner! Would you like to play again?") {
        subtitle.textContent = "Welcome back! It is Player Two's turn!"
        playerSwap = true
    } else {
        if (playerSwap === false) {
            turnMessageOne()
            playerSwap = true
        } else {
            turnMessageTwo()
            playerSwap = false
        }
    }
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
        modal.style.display = "flex"
        modal.querySelector('p').textContent = "Player One is our winner! Would you like to play again?"
        subtitle.textContent = "We have a winner!"


    } else if ((box1.textContent === 'O' && box2.textContent === 'O' && box3.textContent === 'O') ||
        (box4.textContent === 'O' && box5.textContent === 'O' && box6.textContent === 'O') ||
        (box7.textContent === 'O' && box8.textContent === 'O' && box9.textContent === 'O') ||
        (box7.textContent === 'O' && box8.textContent === 'O' && box9.textContent === 'O') ||
        (box1.textContent === 'O' && box4.textContent === 'O' && box7.textContent === 'O') ||
        (box2.textContent === 'O' && box5.textContent === 'O' && box8.textContent === 'O') ||
        (box3.textContent === 'O' && box6.textContent === 'O' && box9.textContent === 'O') ||
        (box1.textContent === 'O' && box5.textContent === 'O' && box9.textContent === 'O') ||
        (box3.textContent === 'O' && box5.textContent === 'O' && box7.textContent === 'O')) {
        modal.style.display = "flex"
        modal.querySelector('p').textContent = "Player Two is our winner! Would you like to play again?"
        subtitle.textContent = "We have a winner!"


    } else if (numMoves === 9) {
        modal.style.display = "flex"
        modal.querySelector('p').textContent = "We have a draw! Would you like to play again?"
        subtitle.textContent = "Draw!"
    }
}

function backgroundChange() {
    if (numGames % 3 === 1) {
        // document.querySelector('body').style.background = 'url(./images/blue-background.jpg) no-repeat center center fixed;'
        document.querySelector('body').style.backgroundImage = 'url(./images/blue-background.jpg)'

    } else if (numGames % 3 === 2) {
        // document.querySelector('body').style.background = 'url(./images/blues-house.jpg) no-repeat center center fixed;'
        document.querySelector('body').style.backgroundImage = 'url(./images/blues-kitchen.jpeg)'

    } else {
        document.querySelector('body').style.backgroundImage = 'url(./images/blues-room.jpeg)'
    }
}

yesBtn.addEventListener('click', resetBoard)
tttBox.addEventListener('click', swapPlayer)
playerList1.addEventListener('click', selectPlayerOne)
playerList2.addEventListener('click', selectPlayerTwo)

span.addEventListener('click', function () {
    modal.style.display = "none";
})

window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})