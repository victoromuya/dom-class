
let dog = {
    breed: 'Rotwailer',
    color: 'black',

    sound() {
        console.log('bark!');
    }

   };

   dog.sound(); // bark!


class Animal {
    constructor(name) {
        this.thename = name;
    }

   speak() {
    console.log(`${this.thename} makes a noise.`);
    }
   }

   
   let animal = new Animal('Dog');
   animal.speak(); // Dog makes a noise.

   //property
   //object
   //parameter
   //argument
   //class