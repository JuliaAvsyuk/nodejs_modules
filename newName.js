function User(name, age){
    this.name = name;
    this.age = age;
    this.displayInfo = function () {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}
module.export = User;