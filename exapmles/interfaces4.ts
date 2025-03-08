interface Person {
  name: string
  email: string
  age: number
  about(): string
}

class Bob implements Person {
  constructor(public name: string, public email: string, public age: number) {

  }

  public about(): string {
    return `Hello ${this.name}, This is your email address: ${this.email}.`;
  }
}

const bob: Bob = new Bob('Bob', 'bob2002@gmail.com', 22);
console.log(bob);
