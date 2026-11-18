export default class person{
    constructor (id,name,age,car,house){
        this.Userid = id;
        this.name = name;
        this.age = age;
       
    this.properties = {
        car : car,
        house: house
    }
    }
     greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
     fight(person){
        console.log(`${this.name} is fighting ${person.name}`);
    }
    
}


