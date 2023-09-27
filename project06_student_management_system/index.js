var Subject = /** @class */ (function () {
    function Subject(name, cost) {
        this.name = name;
        this.cost = cost;
    }
    return Subject;
}());
var ai = new Subject("AI", 500);
var blockchain = new Subject("Blockchain", 1000);
var os = new Subject("OS", 200);
var Student = /** @class */ (function () {
    function Student(name) {
        this.balance = 0;
        this.courses = [];
        this.stdName = name;
        this.stdId = Student.prototype.generateId();
    }
    Student.prototype.generateId = function () {
        return Math.floor(Math.random() * 100000).toString();
    };
    Student.prototype.enrollStd = function (subject) {
        this.courses.push(subject.name);
        this.balance += subject.cost;
    };
    Student.prototype.showStatus = function () {
        console.log("Name: ".concat(this.stdName, " \nId: ").concat(this.stdId, " \nTotal Fees: ").concat(this.balance, " \nCourses: ").concat(this.courses, "\n \n \n"));
    };
    return Student;
}());
var rohan = new Student("Rohan");
rohan.enrollStd(ai);
rohan.enrollStd(blockchain);
rohan.showStatus();
var daniyal = new Student("Daniyal");
daniyal.enrollStd(ai);
daniyal.showStatus();
var umar = new Student("Umar");
umar.enrollStd(ai);
umar.enrollStd(blockchain);
umar.enrollStd(os);
umar.showStatus();
