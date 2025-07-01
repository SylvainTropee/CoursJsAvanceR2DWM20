class Character {

    #name
    _species
    age

    constructor(name, species = 'Human', ageCharacter = null) {
        this.#name = name
        this._species = species
        this.age = ageCharacter
    }

    description(){
        return `${this.#name}, ${this._species}`;
    }

    get species(){
        return this._species
    }

    get name(){
        return this.#name
    }

    set name(value){
        this.#name = value
    }
}


const chewie = new Character("Chewbacca", "Wookie", 120)
const han = new Character("Han Solo", "Human", 45)
const jarjarbinks = new Character("Jar jar")
const anakin = new Character();


Character.prototype.food = "Gloubiboulga"

console.log(chewie)
chewie.name = "Michel"
console.log(chewie.name, "name")
chewie.age = 180
console.log(chewie.description())
chewie.weapon = "Arabalète laser"
console.log(chewie)

han['weapon'] = "Flingue laser"
han.friend = chewie
console.log(han)

console.log(jarjarbinks)
console.log(anakin.description())




//// Syntaxe ES6

const million = 1_000_000
console.log(million)

let michel = {
    name : "Michel",
    address : null //street
}

console.log(michel.address?.street ?? "rue des acacias")

//spread
let tab1 = [1,2,3]
let tab2 = [4,5,6]

tab1.push(...tab2)
console.log(tab1)

function infinityParam(...args){
    console.log(args)
}

infinityParam("Michel", 123, "coucou", true)























