let homePointsNum = document.getElementById("home-team-points")
let guestPointsNum = document.getElementById("guest-team-points")

let homePoints = 0
let guestPoints = 0

function highlightTopScore() {
  if (homePoints > guestPoints) {
    homePointsNum.classList.add("top-score");
    guestPointsNum.classList.remove("top-score");
  }
  else if (guestPoints > homePoints) {
    guestPointsNum.classList.add("top-score");
    homePointsNum.classList.remove("top-score");
  }
  else {
    homePointsNum.classList.remove("top-score")
    guestPointsNum.classList.remove("top-score")    
  }
}

function add1PointsHome() {
  homePoints += 1
  homePointsNum.textContent = homePoints
  highlightTopScore()
}

function add2PointsHome() {
  homePoints += 2
  homePointsNum.textContent = homePoints
  highlightTopScore()
}

function add3PointsHome() {
  homePoints += 3
  homePointsNum.textContent = homePoints
  highlightTopScore()
}

function add1PointsGuest() {
  guestPoints += 1
  guestPointsNum.textContent = guestPoints
  highlightTopScore()
}

function add2PointsGuest() {
  guestPoints += 2
  guestPointsNum.textContent = guestPoints
  highlightTopScore()
}

function add3PointsGuest() {
  guestPoints += 3
  guestPointsNum.textContent = guestPoints
  highlightTopScore()
}

function resetGamePoints() {
  homePoints = 0
  guestPoints = 0
  homePointsNum.textContent = homePoints
  guestPointsNum.textContent = guestPoints
  highlightTopScore()
}