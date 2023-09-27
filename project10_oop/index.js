var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, personality) {
        this.name = name;
        this.personality = personality;
    }
    Person.prototype.checkPersonality = function () {
        if (this.personality == 1) {
            console.log("Its nice to know ".concat(this.name, " that you are extrovert"));
        }
        else if (this.personality == 2) {
            console.log("Its ok to be introvert ".concat(this.name));
        }
    };
    return Person;
}());
var Extrovert = /** @class */ (function (_super) {
    __extends(Extrovert, _super);
    function Extrovert(person, sclName) {
        var _this = _super.call(this, person.name, person.personality) || this;
        _this.sclName = sclName;
        return _this;
    }
    Extrovert.prototype.tellScl = function () {
        if (this.personality == 1) {
            console.log("Its nice to know ".concat(this.name, " that you are extrovert and you studies in ").concat(this.sclName));
        }
    };
    return Extrovert;
}(Person));
var daniyal = new Person("Daniyal", 2);
daniyal.checkPersonality();
var rohan = new Person("Rohan", 1);
var extrovertRohan = new Extrovert(rohan, "PIAIC");
extrovertRohan.tellScl();
