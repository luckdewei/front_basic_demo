function Person(name, age) {
  this.name = name;
  this.age = age;  
}

let p = new Person('Tom', 18);
console.log(p);
// console.log(p.__proto__.constructor)
console.log(p.__proto__ === Person.prototype);
