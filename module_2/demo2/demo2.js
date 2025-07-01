function Character(name, species = 'Human', ageCharacter = null) {
    this.name = name
    this.species = species
    this.age = ageCharacter

    this.description = function () {
        return `${this.name}, ${this.species}`;
    }
}

const chewie = new Character("Chewbacca", "Wookie", 120)
const han = new Character("Han Solo", "Human", 45)
const jarjarbinks = new Character("Jar jar")
const anakin = new Character();

console.log(chewie)
console.log(chewie.name)
chewie.age = 180
console.log(chewie.description())
chewie.weapon = "Arabalète laser"
console.log(chewie)

han['weapon'] = "Flingue laser"
han.friend = chewie
console.log(han)

console.log(jarjarbinks)
console.log(anakin.description())
