class Person {
  constructor(name = "Anonymous", age = "unknown") {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi.  I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major = "undecided") {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  isTraveling() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.isTraveling()) {
      greeting += ` I am from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Traveler("Steve Babb", 56, "Lawrence, Kansas");
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
