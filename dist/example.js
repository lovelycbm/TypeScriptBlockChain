"use strict";
// 클래스랑 비슷한데 굳이 인터페이스랑 클래스가 분리되어있네?
// 자바스크립트쪽에서 안보이게 하고싶을때 사용?
// interface Human {
//     name:string,
//     age:number,
//     gender:string
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("lynn", 16, "female");
// const sayHi =(name:string,age:Number,gender:string): string=>{
//     return `Hello ${name}, you are ${age}, you are a ${gender}!!!`
// }
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!!!`;
};
//# sourceMappingURL=example.js.map