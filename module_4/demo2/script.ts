//variables
let age :number = 22
// age = "coucou"

let job : any = "Dev"
job = 60000

class ThingSylvainLike implements Frequencyiable{

    private _name : string | number

    constructor(name : string, private loveLevel : number = 1) {
        this._name = name
    }

    get name(): string | number {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    public display(){
        console.log(`Sylvain aime ${this._name} sur une échelle de ${this.loveLevel}/10`)
    }

    frequency: number = 19;

    getFrequency(): number {
        return this.frequency;
    }
}

const holiday = new ThingSylvainLike("Vacances", 9)
const ctf = new ThingSylvainLike("CTF", 7)

holiday.name = "Argent"

holiday.display()
ctf.display()


interface Frequencyiable {
    frequency : number
    getFrequency() : number
}

let truc : Frequencyiable = {
    frequency : 12,
    getFrequency(): number {
        return this.frequency
    }

}


