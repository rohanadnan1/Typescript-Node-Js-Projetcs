class Subject{
    name: string
    cost: number
    
    constructor(name:string, cost: number){
        this.name = name
        this.cost = cost
    }

}

let ai = new Subject("AI", 500)
let blockchain = new Subject("Blockchain", 1000)
let os = new Subject("OS", 200)



class Student {
    stdName: string
    stdId: string
    balance: number = 0
    courses: string[] = []
    constructor(name: string){
        this.stdName = name
        this.stdId = Student.prototype.generateId()
    }

    generateId(): string{
        return Math.floor(Math.random() * 100000).toString()
    }

    enrollStd(subject: Subject){
        this.courses.push(subject.name)
        this.balance += subject.cost
    }

    showStatus(){
        console.log(`Name: ${this.stdName} \nId: ${this.stdId} \nTotal Fees: ${this.balance} \nCourses: ${this.courses}\n \n `)
    }

}

let rohan = new Student("Rohan")
rohan.enrollStd(ai)
rohan.enrollStd(blockchain)
rohan.showStatus()


let daniyal = new Student("Daniyal")
daniyal.enrollStd(ai)
daniyal.showStatus()


let umar = new Student("Umar")
umar.enrollStd(ai)
umar.enrollStd(blockchain)
umar.enrollStd(os)
umar.showStatus()