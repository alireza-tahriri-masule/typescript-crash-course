"use strict";
class Bob {
    name;
    email;
    age;
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    about() {
        return `Hello ${this.name}, This is your email address: ${this.email}.`;
    }
}
const bob = new Bob('Bob', 'bob2002@gmail.com', 22);
console.log(bob);
