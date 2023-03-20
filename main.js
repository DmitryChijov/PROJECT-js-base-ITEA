// 1. Принять от пользователя имена людей для набора в команду. Имена принять и сохранить в новом массиве. Количество имён должно соответсвовать количеству должностей. 
// Массив с должностями - ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'].
// 2. Создать объект team в котором будут храниться новые объекты-сотрудники с параметрами name и position, данные для этих свойств добавляем из массивов.
// 3. Добавить сотрудникам зарплаты (свойство salary) при помощи метода Math.random(), который будет выдавать произвольное число в промежутке между N1 и N2 исходя из принципа:
// если в должности есть слово "junior" сумма будет от 500 до 1000;
// если в должности есть слово "middle" сумма будет от 1500 до 2000;
// если в должности есть слово "senior" сумма будет от 2500 до 3000;
// для всех остальных - от 4000 до 4500; Для определения того есть ли слово в имени должности используйте метод str.indexOf('часть строки для поиска'). Например:
//    var name = 'Junior developer';
//    name.indexOf('Junior'); 

//  в данном случае вернет 0, если такая строка отсутсвует вернет -1. 
//  Регистр имеет значение, по этому строка "junior" вернет -1

// 4. Добавить каждому сотруднику метод tellAboutYourSelf(), который будет сообщать информацию о пользователе (например "Меня зовут John и я - Project manager. Я зарабатываю 4863$.").
// 5. Добавить объекту team метод showTeam(), который будет выводить информацию о всех сотрудниках в консоль в формате: "John - Project manager. Зарплата - 4863$."*
// Для удобства создайте по порядку все необходимые функции и в конце сделать вызов этих функций в логическом порядке. Например:

// getNames();
// createTeam();
// setSalary();
// создание цикла для установки метода tellAboutYourSelf();
// создание team.showTeam = function() {...};
// вызов метода showTeam();


const createTeam = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];
const arrayGetNames = [];


// создаем функцию, который принимает имена сотрудиков и создает массив имен с таким же количеством как массив специальностей.
function getNames() {

    

    for (i = 0; i < createTeam.length; i++) {

        let getName = prompt(`Ведите имя сотрудника команды ${createTeam[i]}`);
        arrayGetNames.push(getName);
    }
}
getNames();




// создаем массив из объектов с свойствами name и position

const team = [];

for (j = 0; j < createTeam.length; j++) {
    let obj = {};
    obj.name = arrayGetNames[j];
    obj.position = createTeam[j];
    team.push(obj);
}

console.log(team);


// расчитываем и добавляем salary

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};


for (member of team) {

    if (!member.position.toLowerCase().indexOf('junior')) {
        member.salary = getRandomInt(500, 1000);
        
    } else if (!member.position.toLowerCase().indexOf('middle')) {
        member.salary = getRandomInt(1500, 2000);

    } else if (!member.position.toLowerCase().indexOf('senior')) {
        member.salary = getRandomInt(2500, 3000);

    } else {
        member.salary = getRandomInt(4000, 4500);
    }
}

console.table(team);


// создаем и добавляем в каждый объект метод, который будет сообщать информацию о сотруднике

for (member of team) {

    member.tellAboutYourSelf = function() {
                                console.log(`Меня зовут ${this.name} и я - ${this.position}. Я зарабатываю ${this.salary}$.`);
                                } 
}


for (member of team) {
    member.tellAboutYourSelf();
}


// создаем метод выводящий данные всей команды

function showTeam() {
    for (member of team) {
        console.log(`${member.name} - ${member.position}. Зарплата - ${member.salary}$.`);
    }
}

showTeam();





























// вывод полей из объекта
// let animals = [ 
//     { name: 'Vasya', type: 'Cat', age: 4},
//     { name: 'Murka', type: 'Cat', age: 1.5 },
//     { name: 'Varna', type: 'Turtle', age: 21 },
//     { name: 'Kesha', type: 'Parrot', age: 3 },
//     { name: 'Nayda', type: 'Dog', age: 2.5 },
//     { name: 'Pufic', type: 'Humster', age: 2.5 },
//     { name: 'Randy', type: 'dog', age: 12 },
// ];
// document.write('<ol start="0">');
// animals.forEach( animal => {
//   document.write(`<li>${animal.type} <span style="color: #1a55cc">${animal.name}</span> 
//            is ${animal.age} years old.</li>`);
// });
// document.write('<ol>');


// добавление свойства в обїект
// Создадим новый объект, добавив к исходному объекту новое свойство, не меняя при этом исходный объект.

// const spreadableObject = {
//   name: 'Robert',
//   phone: 'iPhone'
// };

// const newObject = {
//   ...spreadableObject,
//   carModel: 'Volkswagen'
// }
// объект newObject будет выглядеть так:
// { carModel: 'Volkswagen', name: 'Robert', phone: 'iPhone' }