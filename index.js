//Мы можем создать свои. проект состоял из файла app.js, в котором создавался сервер, обрабатывающий запросы. Добавим в тот же каталог новый файл greeting.js
//console.log("greeting module");\
//В файле app.js подключим наш модуль:
//var greeting = require("./greeting");
let greeting = require("./greeting");
let os = require("os");
let userName = os.userInfo().username;
let User = require("./user");
let Julia = new User("Julia", 25);
Julia.displayInfo();
Julia.sayHello();
//Все экспортированные методы и свойства модуля доступны по имени: greeting.date и greeting.getMessage().
console.log(`Дата запроса: ${greeting.date}`);
console.log( greeting.getMessage(userName));
let http = require("http");
http.createServer(function (request, response) {
       response.end("Hello WOrld!!");
}).listen(3000, "127.0.0.1", function () {
});

let newName = require("./newName");
let newname = new User("Jessy", 20);
console.log(`Hello, ${newname.name}. Are you ${newname.age} years old?`);
//D:\Programming\Training\трен_1\nodejs_modules>node index.js
//Name: Julia Age: 25
//Hello! My name is Julia. I'm 25 years old. Nice to meet you!
//Дата запроса: Sun Sep 09 2018 15:33:19 GMT+0300 (Беларусь (зима))
//Good afretnoon, ЮЛЯ
// Hello, Jessy. Are you 20 years old?

