// 클래스랑 비슷한데 굳이 인터페이스랑 클래스가 분리되어있네?
// 자바스크립트쪽에서 안보이게 하고싶을때 사용?
// interface Human {
//     name:string,
//     age:number,
//     gender:string
// }

class Human {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

}

const lynn = new Human("lynn",16,"female")
// const sayHi =(name:string,age:Number,gender:string): string=>{
//     return `Hello ${name}, you are ${age}, you are a ${gender}!!!`

// }

const sayHi =(person:Human): string=>{
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!!!`

}

//console.log(sayHi(lynn))

export {};