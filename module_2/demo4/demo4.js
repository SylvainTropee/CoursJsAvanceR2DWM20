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
