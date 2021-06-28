class Student{
    name:string;
    age:number;
    gender:string;
    nationality:string;

    constructor(name:string, age:number, nationality:string){
        this.name = name;
        this.age = age;
        this.gender = 'female';
        this.nationality = nationality;
    }

    getNationality(){
        return this.nationality;
    }

    getGender(){
        return this.gender;
    }
}

class Undergraduates extends Student implements Iundergrad{
   batch:number;
   gpa:number;
   constructor(name:string, age:number, nationality:string, batch:number, gpa:number){
       super(name, age, nationality);
       this.batch = batch;
       this.gpa = gpa;
   }
}

let stud1 = new Student("Joe Bob", 40, "American");
console.log(stud1.getNationality());
console.log(stud1.getGender());


let stud2 = new Undergraduates("Jet Bob", 39, "Canadian", 1, 3.8);
console.log(stud2);


interface Iundergrad{
    name:string;
    age:number;
    gender:string;
    nationality:string;
    batch:number;
    gpa:number;
}

let studs:Array<Iundergrad> = [
    {name: "John Smith", age: 23, gender: 'male', nationality: 'Canadian', batch: 2, gpa: 3.9},
    {name: "Joan Smith", age: 24, gender: 'female', nationality: 'Canadian', batch: 3, gpa: 3.8},
    {name: "Jack Smith", age: 23, gender: 'male', nationality: 'Canadian', batch: 4, gpa: 3.7},
];

console.log(studs);