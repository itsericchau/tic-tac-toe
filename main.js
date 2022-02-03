var numMoves = 0
var numGames = 0
var playerSwap = false
var lastGameDraw = false
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
var changeBtn = document.querySelector(".change-modal")
var subtitle = document.querySelector(".subtitle")
var modal = document.querySelector(".modal")
var span = document.querySelector(".close-modal")

function selectPlayerOne(event) {
    var boxClicked = event.target
    for (var i = 0; i < playerOneImages.length; i++) {
        playerOneImages[i].style.display = 'none'
    }
    boxClicked.style.display = 'block'
    boxClicked.className = 'picked-one'
    playerList1.style.display = 'flex'
    playerOneHeading.textContent = boxClicked.getAttribute('alt')
    playerOneSection.style.backgroundColor = 'transparent'
}

function selectPlayerTwo(event) {
    var boxClicked = event.target
    for (var i = 0; i < playerTwoImages.length; i++) {
        playerTwoImages[i].style.display = 'none'
    }
    boxClicked.style.display = 'block'
    boxClicked.className = 'picked-two'
    playerList2.style.display = 'flex'
    playerTwoHeading.textContent = boxClicked.getAttribute('alt')
    playerTwoSection.style.backgroundColor = 'transparent'
}

function playerOneTurn(event) {
    var boxClicked = event.target
    if (boxClicked.textContent === 'X' || boxClicked.textContent === 'O' || boxClicked.textContent === `\ud83d\udc3e`) {
        // dont do anything
    } else {
        boxClicked.style.backgroundColor = '#ad5fbb'
        boxClicked.textContent = 'X'
        giveTurnToPlayerTwo()
        numMoves += 1
    }
}

function playerTwoTurn(event) {
    var boxClicked = event.target
    if (boxClicked.tagName === 'DIV') {
        if (boxClicked.textContent === 'X' || boxClicked.textContent === 'O' || boxClicked.textContent === `\ud83d\udc3e`) {
            // dont do anything
        } else {
            boxClicked.style.backgroundColor = '#5fbbb7'
            boxClicked.textContent = 'O'
            giveTurnToPlayerOne()
            numMoves += 1
        }
    }
}

function giveTurnToPlayerTwo() {
    subtitle.textContent = "Player Two's Turn!"
    playerTwoHeading.textContent = `It's your turn ${document.querySelector('.picked-two').getAttribute('alt')}!`
    playerOneHeading.textContent = ``
    playerTwoSection.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    playerOneSection.style.backgroundColor = 'transparent'
}

function giveTurnToPlayerOne() {
    subtitle.textContent = "Player One's Turn!"
    playerOneHeading.textContent = `It's your turn ${document.querySelector('.picked-one').getAttribute('alt')}!`
    playerTwoHeading.textContent = ``
    playerOneSection.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    playerTwoSection.style.backgroundColor = 'transparent'
}

function checkIfPlayersPicked() {
    if ((document.querySelector('.picked-one') == null) && (document.querySelector('.picked-two') == null)) {
        for (var i = 0; i < playerOneImages.length; i++) {
            playerOneImages[i].style.display = 'none'
        }
        document.querySelector('#blue').style.display = 'block'
        document.querySelector('#blue').className = 'picked-one'
        playerList1.style.display = 'flex'
        playerOneHeading.textContent = document.querySelector('#blue').getAttribute('alt')
        playerOneSection.style.backgroundColor = 'transparent'

        for (var i = 0; i < playerTwoImages.length; i++) {
            playerTwoImages[i].style.display = 'none'
        }
        document.querySelector('#magenta').style.display = 'block'
        document.querySelector('#magenta').className = 'picked-two'
        playerList2.style.display = 'flex'
        playerTwoHeading.textContent = document.querySelector('#magenta').getAttribute('alt')
        playerTwoSection.style.backgroundColor = 'transparent'

    } else if ((document.querySelector('.picked-one') !== null) && (document.querySelector('.picked-two') == null)) {
        for (var i = 0; i < playerTwoImages.length; i++) {
            playerTwoImages[i].style.display = 'none'
        }
        document.querySelector('#magenta').style.display = 'block'
        document.querySelector('#magenta').className = 'picked-two'
        playerList2.style.display = 'flex'
        playerTwoHeading.textContent = document.querySelector('#magenta').getAttribute('alt')
        playerTwoSection.style.backgroundColor = 'transparent'
    } else if ((document.querySelector('.picked-one') == null) && (document.querySelector('.picked-two') !== null)) {
        for (var i = 0; i < playerOneImages.length; i++) {
            playerOneImages[i].style.display = 'none'
        }
        document.querySelector('#blue').style.display = 'block'
        document.querySelector('#blue').className = 'picked-one'
        playerList1.style.display = 'flex'
        playerOneHeading.textContent = document.querySelector('#blue').getAttribute('alt')
        playerOneSection.style.backgroundColor = 'transparent'
    }
}

function resetPlayers() {
    for (var i = 0; i < playerOneImages.length; i++) {
        playerOneImages[i].style.display = 'block'
        playerOneImages[i].className = ''
    }
    playerList1.style.display = 'grid'
    playerOneSection.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'

    for (var i = 0; i < playerTwoImages.length; i++) {
        playerTwoImages[i].style.display = 'block'
        playerTwoImages[i].className = ''
    }
    playerList2.style.display = 'grid'
    playerTwoSection.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    modal.style.display = "none"
    playerOneHeading.textContent = `Select new Player One`
    playerTwoHeading.textContent = `Select new Player Two`
    resetBoard()
}

function swapPlayer(event) {
    checkIfPlayersPicked()
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
    modal.style.display = "none"
    numGames += 1
    backgroundChange()
    drawResolver()
}

function drawResolver() {
    if (playerSwap === true && lastGameDraw === true) {
        giveTurnToPlayerTwo()
    } else if (playerSwap === false && lastGameDraw === true) {
        giveTurnToPlayerOne()
    } else if (playerSwap === true && lastGameDraw === false) {
        subtitle.textContent = "Player Two's Turn!"
    } else if (playerSwap === false && lastGameDraw === false) {
        subtitle.textContent = "Player Ones's Turn!"
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
        modal.querySelector('p').textContent = `Player One ${document.querySelector('.picked-one').getAttribute('alt')} is our winner! Would you like to play again?`
        subtitle.textContent = "We have a winner"
        coverUnusedTiles()
        playerSwap = true
        lastGameDraw = false
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
        modal.querySelector('p').textContent = `Player Two ${document.querySelector('.picked-two').getAttribute('alt')} is our winner! Would you like to play again?"`
        subtitle.textContent = "We have a winner!"
        coverUnusedTiles()
        playerSwap = false
        lastGameDraw = false
    } else if (numMoves === 9) {
        modal.style.display = "flex"
        modal.querySelector('p').textContent = "We have a draw! Would you like to play again?"
        subtitle.textContent = "Draw!"
        lastGameDraw = true
    }
}

function backgroundChange() {
    if (numGames % 3 === 1) {
        document.querySelector('body').style.background = 'url(./images/blues-kitchen.jpeg) no-repeat center center fixed'
        document.querySelector('body').style.backgroundSize = 'cover'
    } else if (numGames % 3 === 2) {
        document.querySelector('body').style.background = 'url(./images/blue-background.jpg) no-repeat center center fixed'
        document.querySelector('body').style.backgroundSize = 'cover'
    } else {
        document.querySelector('body').style.background = 'url(./images/blues-room.jpeg) no-repeat center center fixed'
        document.querySelector('body').style.backgroundSize = 'cover'
    }
}

function coverUnusedTiles() {
    for (var i = 0; i < tttBox.children.length; i++) {
        if (tttBox.children[i].textContent !== 'X' && tttBox.children[i].textContent !== 'O') {
            tttBox.children[i].textContent = `\ud83d\udc3e`
        }
    }
}

yesBtn.addEventListener('click', resetBoard)
changeBtn.addEventListener('click', resetPlayers)
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