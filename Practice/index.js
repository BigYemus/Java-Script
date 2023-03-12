//Human to dog age calculator

let  MyAge = 17
let HumanDogRatio = 7
let MyDogAge = MyAge * HumanDogRatio

console.log(MyDogAge);


//Game skeleton

let BonusPoints = 50

BonusPoints =  BonusPoints + 50
console.log(BonusPoints)

BonusPoints =  BonusPoints -75
console.log(BonusPoints);

BonusPoints =  BonusPoints +45
console.log(BonusPoints);

//Race

let LapsCompleted = 0

function AddedLaps () {
    LapsCompleted = LapsCompleted + 1
}

AddedLaps()
AddedLaps()
AddedLaps()

console.log(LapsCompleted)

// Message app

let username = "per"
let message = "You have 3 new messages, "
let messageToUser = message + username 
console.log(messageToUser)

// For loops

for (let i = 10; i < 101; i += 10)
console.log(i)

// Fastest race

let raceTime1 = 180
let raceTime2 = 190

function fastestRaceTime() {
    if (raceTime1 < raceTime2) {
        return raceTime1
    }
    else if (raceTime1 > raceTime2) {
        return racetime2
    }
}

fastestRaceTimeResult = fastestRaceTime()

console.log(fastestRaceTimeResult)