//---- ELEMENTS ----//
const timerEl = document.getElementById("timer")

const homeTitleEl = document.getElementById("home-title")
const guestTitleEl = document.getElementById("guest-title")

const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")

const homePlusOne = document.getElementById("homePlusOne")
const homePlusTwo = document.getElementById("homePlusTwo")
const homePlusThree = document.getElementById("homePlusThree")

const guestPlusOne = document.getElementById("guestPlusOne")
const guestPlusTwo = document.getElementById("guestPlusTwo")
const guestPlusThree = document.getElementById("guestPlusThree")

const homeFoulsEl = document.getElementById("home-fouls-score")
const guestFoulsEl = document.getElementById("guest-fouls-score")

const homeFoulsBtn = document.getElementById("homeFoulsBtn")
const guestFoulsBtn = document.getElementById("guestFoulsBtn")

const newGameBtn = document.getElementById("new-game-button")

let homeScore = Number(homeScoreEl.textContent)
let guestScore = Number(guestScoreEl.textContent)
let homeFouls = Number(homeFoulsEl.textContent)
let guestFouls = Number(guestFoulsEl.textContent)

//---- EVENT LISTERENS ----//

homePlusOne.addEventListener("click", function(){scorePlus("home", 1)})
homePlusTwo.addEventListener("click", function(){scorePlus("home", 2)})
homePlusThree.addEventListener("click", function(){scorePlus("home", 3)})
guestPlusOne.addEventListener("click", function(){scorePlus("guest", 1)})
guestPlusTwo.addEventListener("click", function(){scorePlus("guest", 2)})
guestPlusThree.addEventListener("click", function(){scorePlus("guest", 3)})
newGameBtn.addEventListener("click", reset)

homeFoulsBtn.addEventListener("click", function(){
    homeFouls++
    refreshScore()
})

guestFoulsBtn.addEventListener("click", function(){
    guestFouls++
    refreshScore()
})

//---- FUNCTIONS ----//

function scorePlus(team, num) {
    team === "home" ? homeScore += num : guestScore += num
    refreshScore()
}

function refreshScore() {
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    homeFoulsEl.textContent = homeFouls
    guestFoulsEl.textContent = guestFouls
    highlightLeader()
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeFouls = 0
    guestFouls = 0
    refreshScore()
    startTimer()
}

function highlightLeader() {
    if (homeScore > guestScore) {
        homeTitleEl.style.color = "yellow";
        guestTitleEl.style.color = "white";
    } else if (guestScore > homeScore) {
        guestTitleEl.style.color = "yellow";
        homeTitleEl.style.color = "white";
    } else {
        guestTitleEl.style.color = "white";
        homeTitleEl.style.color = "white";
    }
}

function startTimer() {
    periodTime = 12 * 60 - 1 // seconds
    setInterval(function() {
        minutes = Math.floor(periodTime / 60);
        seconds = periodTime % 60;
        timerEl.textContent = `${minutes}:${seconds}`;
        periodTime--
        console.log(minutes + "_" +seconds);
    }, 1000);
}