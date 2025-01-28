class Animal {
    speak() {
    console.log('Animal speaks');
    }
   }


class Cat extends Animal {
    speak() {
    console.log('Meow');
    }
   }


class Dog extends Animal {
    speak() {
    console.log('Woof');
    }
   }



function makeAnimalSpeak(animal) {
    animal.speak(); // new Cat().speak()
   }


makeAnimalSpeak(new Cat()); // Meow
makeAnimalSpeak(new Dog()); // Woof

//Assignment: Raed extensively and make a note on 
// Polymorphism, Encapsulation, Inheritance and Abstraction

//You will defend it on your next class


//using inheritance, create a class school with a property representing director
// then create two other classes for 2 different courses offered by the school with properties 
//returning the faculty name for each courses.