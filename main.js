var numMoves = 0
var numGames = 0
var playerSwap = false
var lastGameDraw = false
var hiddenCounter = 0
var audioActive = false
const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const box4 = document.querySelector(".box4")
const box5 = document.querySelector(".box5")
const box6 = document.querySelector(".box6")
const box7 = document.querySelector(".box7")
const box8 = document.querySelector(".box8")
const box9 = document.querySelector(".box9")
const playerList1 = document.querySelector(".player-list1")
const playerList2 = document.querySelector(".player-list2")
const playerOneSection = document.querySelector(".player-one")
const playerTwoSection = document.querySelector(".player-two")
const playerOneHeading = document.querySelector(".player-one h2")
const playerTwoHeading = document.querySelector(".player-two h2")
const playerOneImages = document.querySelectorAll(".player-list1 img")
const playerTwoImages = document.querySelectorAll(".player-list2 img")
const tttBox = document.querySelector(".tttBox")
const yesBtn = document.querySelector(".yes-modal")
const changeBtn = document.querySelector(".change-modal")
const subtitle = document.querySelector(".subtitle")
const modal = document.querySelector(".modal")
const spanModal = document.querySelector(".close-modal")
const audio = document.querySelector(".audio")

function selectPlayerOne(event) {
  var boxClicked = event.target
  for (var i = 0; i < playerOneImages.length; i++) {
    playerOneImages[i].style.display = "none"
  }
  boxClicked.style.display = "block"
  boxClicked.className = "picked-one"
  playerList1.style.display = "flex"
  playerOneHeading.textContent = boxClicked.getAttribute("alt")
  playerOneSection.style.backgroundColor = "transparent"
}

function selectPlayerTwo(event) {
  var boxClicked = event.target
  for (var i = 0; i < playerTwoImages.length; i++) {
    playerTwoImages[i].style.display = "none"
  }
  boxClicked.style.display = "block"
  boxClicked.className = "picked-two"
  playerList2.style.display = "flex"
  playerTwoHeading.textContent = boxClicked.getAttribute("alt")
  playerTwoSection.style.backgroundColor = "transparent"
}

function playerOneTurn(event) {
  var boxClicked = event.target
  if (
    boxClicked.textContent === "X" ||
    boxClicked.textContent === "O" ||
    boxClicked.textContent === `\ud83d\udc3e`
  ) {
    // dont do anything
  } else {
    boxClicked.style.backgroundColor = "#ad5fbb"
    boxClicked.textContent = "X"
    giveTurnToPlayerTwo()
    numMoves += 1
  }
}

function playerTwoTurn(event) {
  var boxClicked = event.target
  if (boxClicked.tagName === "DIV") {
    if (
      boxClicked.textContent === "X" ||
      boxClicked.textContent === "O" ||
      boxClicked.textContent === `\ud83d\udc3e`
    ) {
      // dont do anything
    } else {
      boxClicked.style.backgroundColor = "#5fbbb7"
      boxClicked.textContent = "O"
      giveTurnToPlayerOne()
      numMoves += 1
    }
  }
}

function giveTurnToPlayerTwo() {
  subtitle.textContent = "Player Two's Turn!"
  playerTwoHeading.textContent = `It's your turn ${document
    .querySelector(".picked-two")
    .getAttribute("alt")}!`
  playerOneHeading.textContent = ``
  playerTwoSection.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
  playerOneSection.style.backgroundColor = "transparent"
}

function giveTurnToPlayerOne() {
  subtitle.textContent = "Player One's Turn!"
  playerOneHeading.textContent = `It's your turn ${document
    .querySelector(".picked-one")
    .getAttribute("alt")}!`
  playerTwoHeading.textContent = ``
  playerOneSection.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
  playerTwoSection.style.backgroundColor = "transparent"
}

function checkIfPlayersPicked() {
  if (
    (document.querySelector(".picked-one") == null &&
      document.querySelector(".picked-two") == null) ||
    (document.querySelector(".picked-one") == "" &&
      document.querySelector(".picked-two") == "")
  ) {
    for (var i = 0; i < playerOneImages.length; i++) {
      playerOneImages[i].style.display = "none"
    }
    document.querySelector("#blue").style.display = "block"
    document.querySelector("#blue").className = "picked-one"
    playerList1.style.display = "flex"
    playerOneHeading.textContent = document
      .querySelector("#blue")
      .getAttribute("alt")
    playerOneSection.style.backgroundColor = "transparent"

    for (var i = 0; i < playerTwoImages.length; i++) {
      playerTwoImages[i].style.display = "none"
    }
    document.querySelector("#magenta").style.display = "block"
    document.querySelector("#magenta").className = "picked-two"
    playerList2.style.display = "flex"
    playerTwoHeading.textContent = document
      .querySelector("#magenta")
      .getAttribute("alt")
    playerTwoSection.style.backgroundColor = "transparent"
  } else if (
    document.querySelector(".picked-one") !== null &&
    document.querySelector(".picked-two") == null
  ) {
    for (var i = 0; i < playerTwoImages.length; i++) {
      playerTwoImages[i].style.display = "none"
    }
    document.querySelector("#magenta").style.display = "block"
    document.querySelector("#magenta").className = "picked-two"
    playerList2.style.display = "flex"
    playerTwoHeading.textContent = document
      .querySelector("#magenta")
      .getAttribute("alt")
    playerTwoSection.style.backgroundColor = "transparent"
  } else if (
    document.querySelector(".picked-one") == null &&
    document.querySelector(".picked-two") !== null
  ) {
    for (var i = 0; i < playerOneImages.length; i++) {
      playerOneImages[i].style.display = "none"
    }
    document.querySelector("#blue").style.display = "block"
    document.querySelector("#blue").className = "picked-one"
    playerList1.style.display = "flex"
    playerOneHeading.textContent = document
      .querySelector("#blue")
      .getAttribute("alt")
    playerOneSection.style.backgroundColor = "transparent"
  }
}

function resetPlayerChoice() {
  for (var i = 0; i < playerOneImages.length; i++) {
    playerOneImages[i].style.display = "block"
    playerOneImages[i].className = null
  }
  playerList1.style.display = "grid"
  playerOneSection.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
  for (var i = 0; i < playerTwoImages.length; i++) {
    playerTwoImages[i].style.display = "block"
    playerTwoImages[i].className = null
  }
  playerList2.style.display = "grid"
  playerTwoSection.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
  modal.style.display = "none"
  playerOneHeading.textContent = `Select new Player One`
  playerTwoHeading.textContent = `Select new Player Two`
  resetBoard()
}

function swapPlayer(event) {
  checkIfPlayersPicked()
  if (event.target.tagName === "DIV") {
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
  checkWinOrDraw()
}

function resetBoard() {
  numMoves = 0
  for (var i = 0; i < document.querySelectorAll(".tttBox div").length; i++) {
    document.querySelectorAll(".tttBox div")[i].textContent = ""
    document.querySelectorAll(".tttBox div")[i].style.backgroundColor = ""
  }

  modal.style.display = "none"
  numGames += 1
  backgroundChange()
  drawResolver()
}

function drawResolver() {
  if (playerSwap === true && lastGameDraw === true) {
    subtitle.textContent = "Player Two's Turn!"
  } else if (playerSwap === false && lastGameDraw === true) {
    subtitle.textContent = "Player One's Turn!"
  } else if (playerSwap === true && lastGameDraw === false) {
    subtitle.textContent = "Player Two's Turn!"
  } else if (playerSwap === false && lastGameDraw === false) {
    subtitle.textContent = "Player Ones's Turn!"
  }
}

function checkWinOrDraw() {
  if (
    (box1.textContent === "X" &&
      box2.textContent === "X" &&
      box3.textContent === "X") ||
    (box4.textContent === "X" &&
      box5.textContent === "X" &&
      box6.textContent === "X") ||
    (box7.textContent === "X" &&
      box8.textContent === "X" &&
      box9.textContent === "X") ||
    (box7.textContent === "X" &&
      box8.textContent === "X" &&
      box9.textContent === "X") ||
    (box1.textContent === "X" &&
      box4.textContent === "X" &&
      box7.textContent === "X") ||
    (box2.textContent === "X" &&
      box5.textContent === "X" &&
      box8.textContent === "X") ||
    (box3.textContent === "X" &&
      box6.textContent === "X" &&
      box9.textContent === "X") ||
    (box1.textContent === "X" &&
      box5.textContent === "X" &&
      box9.textContent === "X") ||
    (box3.textContent === "X" &&
      box5.textContent === "X" &&
      box7.textContent === "X")
  ) {
    modal.style.display = "flex"
    modal.querySelector("p").textContent = `Player One ${document
      .querySelector(".picked-one")
      .getAttribute("alt")} is our winner! Would you like to play again?`
    subtitle.textContent = `${document
      .querySelector(".picked-one")
      .getAttribute("alt")} won the game!`
    coverUnusedTiles()
    playerSwap = true
    lastGameDraw = false
  } else if (
    (box1.textContent === "O" &&
      box2.textContent === "O" &&
      box3.textContent === "O") ||
    (box4.textContent === "O" &&
      box5.textContent === "O" &&
      box6.textContent === "O") ||
    (box7.textContent === "O" &&
      box8.textContent === "O" &&
      box9.textContent === "O") ||
    (box7.textContent === "O" &&
      box8.textContent === "O" &&
      box9.textContent === "O") ||
    (box1.textContent === "O" &&
      box4.textContent === "O" &&
      box7.textContent === "O") ||
    (box2.textContent === "O" &&
      box5.textContent === "O" &&
      box8.textContent === "O") ||
    (box3.textContent === "O" &&
      box6.textContent === "O" &&
      box9.textContent === "O") ||
    (box1.textContent === "O" &&
      box5.textContent === "O" &&
      box9.textContent === "O") ||
    (box3.textContent === "O" &&
      box5.textContent === "O" &&
      box7.textContent === "O")
  ) {
    modal.style.display = "flex"
    modal.querySelector("p").textContent = `Player Two ${document
      .querySelector(".picked-two")
      .getAttribute("alt")} is our winner! Would you like to play again?"`
    subtitle.textContent = `${document
      .querySelector(".picked-two")
      .getAttribute("alt")} won the game!`
    coverUnusedTiles()
    playerSwap = false
    lastGameDraw = false
  } else if (numMoves === 9) {
    modal.style.display = "flex"
    modal.querySelector("p").textContent =
      "We have a draw! Would you like to play again?"
    subtitle.textContent = "Draw!"
    lastGameDraw = true
  }
}

function backgroundChange() {
  if (numGames % 3 === 1) {
    document.querySelector("body").style.background =
      "url(./images/blues-kitchen.jpeg) no-repeat center center fixed"
    document.querySelector("body").style.backgroundSize = "cover"
  } else if (numGames % 3 === 2) {
    document.querySelector("body").style.background =
      "url(./images/blue-background.jpg) no-repeat center center fixed"
    document.querySelector("body").style.backgroundSize = "cover"
  } else {
    document.querySelector("body").style.background =
      "url(./images/blues-room.jpeg) no-repeat center center fixed"
    document.querySelector("body").style.backgroundSize = "cover"
  }
}

function coverUnusedTiles() {
  for (var i = 0; i < tttBox.children.length; i++) {
    if (
      tttBox.children[i].textContent !== "X" &&
      tttBox.children[i].textContent !== "O"
    ) {
      tttBox.children[i].textContent = `\ud83d\udc3e`
    }
  }
}

yesBtn.addEventListener("click", resetBoard)
changeBtn.addEventListener("click", resetPlayerChoice)
tttBox.addEventListener("click", swapPlayer)
playerList1.addEventListener("click", selectPlayerOne)
playerList2.addEventListener("click", selectPlayerTwo)

spanModal.addEventListener("click", function () {
  modal.style.display = "none"
})

document.querySelector(".music").addEventListener("click", function () {
  // console.log('hello')
  if (audioActive === false) {
    audio.play()
    audioActive = true
  } else {
    audio.pause()
    audioActive = false
  }
})

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
})

document.querySelector(".hidden-button").addEventListener("click", function () {
  subtitle.textContent = "You found a secret button!"
  numGames += 1
  backgroundChange()
})

document.querySelector(".easter-egg").addEventListener("click", function () {
  subtitle.textContent = "You found an easter egg!"

  if (hiddenCounter >= 7) {
    hiddenCounter = 0
    document.querySelector(
      "html"
    ).style.cursor = `url(./images/handpointer${hiddenCounter}.cur), auto`
  } else {
    hiddenCounter += 1
    document.querySelector(
      "html"
    ).style.cursor = `url(./images/handpointer${hiddenCounter}.cur), auto`
  }
})
