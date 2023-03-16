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

//Property Listing

let castle = {
    forSale: true,
    price: 280.40,
    tags: ["london", "kitchen", "garage"]
}

console.log(castle.tags)
console.log(castle.price)

// Objects

let object = {
    name: "max",
    age: 17,
    country: "uk"
}

function logData() {
    console.log(object.name + " is " + object.age + " and lives in " + object.country)
}

logData()

// Conditionals

let age = 70

function discount() {
    if (age < 6) {
        return "Free"
    }
    else if (age > 6 && age <17) {
    return "Child Discount"
    }
    else if (age >18 && age <26) {
        return "Student Discount"
    }
    else if (age > 27 && age < 66) {
        return "Full Price"
    }
    else {
        return "Senior Citizen Discount"
    }
}

console.log(discount())

// For Loops

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
largeCountries.shift()
largeCountries.unshift("China1")
largeCountries.pop()
largeCountries.push("yes")



for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}

// Rock Paper Scissors

let hands = ["rock", "paper", "Scissors"]

function handGesture () {
    let gesture = Math.floor(Math.random() * 3)
    return hands[gesture]
}

console.log(handGesture())