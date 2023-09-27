class Person{
    name: string;
    personality: 1 | 2
    constructor(name: string, personality: 1 | 2){
        this.name = name
        this.personality = personality
    }

    checkPersonality(){
        if(this.personality == 1){
            console.log(`Its nice to know ${this.name} that you are extrovert`)
        }else if(this.personality == 2){
            console.log(`Its ok to be introvert ${this.name}`)
        }
    }
}



class Extrovert extends Person{
    sclName: string
    constructor(person: Person, sclName: string){
        super(person.name, person.personality)
        this.sclName = sclName
    }

    tellScl(){
        if(this.personality == 1){
            console.log(`Its nice to know ${this.name} that you are extrovert and you studies in ${this.sclName}`)
        }
    }
}

let daniyal = new Person("Daniyal", 2)
daniyal.checkPersonality()

let rohan = new Person("Rohan", 1)

let extrovertRohan = new Extrovert(rohan, "PIAIC")
extrovertRohan.tellScl()

