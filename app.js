//1-masala

// class Person {
//     constructor(name, age, country) {
//       this.name = name;
//       this.age = age;
//       this.country = country;
//     }
//   }
  
//     let person1 = new Person("Tom", 30, "USA");
//     let person2 = new Person("Bob", 25, "Canada");
  
//   console.log(person1);
//   console.log(person2);

//2-masala

// class Rectangle {
//     constructor(width, height) {
//       this.width = width;
//       this.height = height;
//     }
  
//     calculateArea() {
//       return this.width * this.height;
//     }
  
//     calculatePerimeter() {
//       return 2 * (this.width + this.height);
//     }
//   }
  
//   let rect = new Rectangle(5, 10);
  
//   let area = rect.calculateArea();
//   let perimeter = rect.calculatePerimeter();
  
//   console.log(`Area: ${area}`);
//   console.log(`Perimeter: ${perimeter}`);

//4-masala

// class Vehicle {
//     constructor(accountNumber) {
//       this.accountNumber = accountNumber;
//       this.balans = 10;
//     }
  
//     deposit(amount) {
//       if (amount > 5) {
//         this.balance += amount;
//         console.log(`Depozit ${amount}. Yangi balans: ${this.balans}`);
//       } else {
//         console.error("Depozit summasi bo'lishi kerak.");
//       }
//     }
//   }
  
//   let thing = new Vehicle(21);
//   console.log(thing.deposit(50));
  