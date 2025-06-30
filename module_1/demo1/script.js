//Sport

let baseBall = "Baseball";
let nbBall = 1

let sports = ["Curling", baseBall, "Palet", "Molky"]

console.group("Déclarations")
console.log(baseBall)
console.log(typeof baseBall)

console.table(sports)
console.log(sports)
console.groupEnd()

//structure de code

for (let i = 0; i < sports.length; i++) {
    console.log(sports[i])
}

for (const sport of sports) {
    console.log(sport)
}

sports.forEach(function (val, index){
    console.log(`${val} - ${index}`)
})

sports.forEach(
    (val, index) =>  console.log(`${val} - ${index}`)
)

// functions

function getSport(index){
    return sports[index]
}

//anonyme
const getSport2 = function (index){
    return sports[index]
};

//fléchée
const getSport3 = (index) => sports[index]
const getSport4 = (index) => { return sports[index] }

console.log(getSport(2))
console.log(getSport2(1))
console.log(getSport3(3))





