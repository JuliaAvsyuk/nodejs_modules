var welcome = require("./welcome");

welcome.getMorningMessage();
welcome.getAfternoonMessage();
welcome.getEveningMessage();
let express = require("express");
//create app


// npm install express --save
//файл простейшего сервера
//В Express мы можем связать обработку запросов с определенными маршрутами. Например, "/" - представляет главную страницу или корневой маршрут. Для обработки запроса вызывается функция app.get(). Первый параметр функции - маршрут, а второй - функция, которая будет обрабатывать запрос по этому маршруту. И чтобы сервер начал прослушивать подключения, надо вызвать метод app.listen(), в который передается номер порта.
let app = express();
//устанавливаем обработчик для маршрута /
app.get("/", function (request, response) {
    response.end("Hello from Express!");
});
//начинаем прослушивание подключений на порту 3000
app.listen(3000);

//npm install возьмет определение всех пакетов из секций dependencies и загрузит их в проект
//npm uninstall express для удаления пакетов

//добавляем секцию "script": {
//"script": "node app.js"
//},
//в терминале npm start


