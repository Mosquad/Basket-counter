let countELHome = document.getElementById("scorehome")
let countH = 0
let countELGuest = document.getElementById("scoreguest")
let countelReset = document.getElementById("clear")
let countG = 0

//* Home teller *//

function increment_home1() {
    countH += 1
    countELHome.textContent = countH
}
function increment_home2() {
    countH += 2
    countELHome.textContent = countH
}
function increment_home3() {
    countH += 3
    countELHome.textContent = countH
}

//* Guest teller *//

function increment_guest1() {
    countG += 1
    countELGuest.textContent = countG
}
function increment_guest2() {
    countG += 2
    countELGuest.textContent = countG
}
function increment_guest3() {
    countG += 3
    countELGuest.textContent = countG
}

//* New Game *//

function increment_new() {
    countELHome.textContent = 0
    countELGuest.textContent = 0
    countH = 0
    countG = 0
}