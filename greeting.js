let currentDate = new Date();
//переменная currentDate из вне недоступна. доступна только в пределах данного модуля. Чтобы какие переменные или функции модуля были доступны, необходимо определить их в объекте module.exports - это то, что возвращает функция require() при получении модуля.
module.exports.date = currentDate;
module.exports.getMessage = function (name) {
    let hour = currentDate.getHours();
    if(hour>16){
        return "Good evening, " + name;
    }else if(hour>10){
        return "Good afretnoon, " + name;
    } else {
        return "Good morning, " + name;
    }
};
