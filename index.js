//Мы можем создать свои. проект состоял из файла app.js, в котором создавался сервер, обрабатывающий запросы. Добавим в тот же каталог новый файл greeting.js
//console.log("greeting module");\
//В файле app.js подключим наш модуль:
//var greeting = require("./greeting");
let greeting = require("./greeting");
let http = require("http");
http.createServer(function (request, response) {
       response.end("Hello WOrld!!");
}).listen(3000, "127.0.0.1", function () {
    console.log("Server starts");
});