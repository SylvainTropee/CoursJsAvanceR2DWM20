const chewie = {
    name : "Chewbacca",
    species : "Wookie",
    age : 130,
    description : function (){
        return `${this.name}, grand ami de Han Solo !`;
    }
}

console.log(chewie)
console.log(chewie.name)
chewie.age = 180
console.log(chewie.description())
chewie.weapon = "Arabalète laser"
console.log(chewie)
