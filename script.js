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
var Student = /** @class */ (function () {
    function Student(name, age, nationality) {
        this.name = name;
        this.age = age;
        this.gender = 'female';
        this.nationality = nationality;
    }
    Student.prototype.getNationality = function () {
        return this.nationality;
    };
    Student.prototype.getGender = function () {
        return this.gender;
    };
    return Student;
}());
var Undergraduates = /** @class */ (function (_super) {
    __extends(Undergraduates, _super);
    function Undergraduates(name, age, nationality, batch, gpa) {
        var _this = _super.call(this, name, age, nationality) || this;
        _this.batch = batch;
        _this.gpa = gpa;
        return _this;
    }
    return Undergraduates;
}(Student));
var stud1 = new Student("Joe Bob", 40, "American");
console.log(stud1.getNationality());
console.log(stud1.getGender());
var stud2 = new Undergraduates("Jet Bob", 39, "Canadian", 1, 3.8);
console.log(stud2);
var studs = [
    { name: "John Smith", age: 23, gender: 'male', nationality: 'Canadian', batch: 2, gpa: 3.9 },
    { name: "Joan Smith", age: 24, gender: 'female', nationality: 'Canadian', batch: 3, gpa: 3.8 },
    { name: "Jack Smith", age: 23, gender: 'male', nationality: 'Canadian', batch: 4, gpa: 3.7 },
];
console.log(studs);
