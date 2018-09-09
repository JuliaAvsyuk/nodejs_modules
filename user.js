function User(name, age){
    this.name = name;
    this.age = age;
    this.displayInfo = function () {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}
User.prototype.sayHello = function () {
    console.log(`Hello! My name is ${this.name}. I'm ${this.age} years old. Nice to meet you!`);
};
module.exports = User;