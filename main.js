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

const getNames = [];
const createTeam = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];

// создаем цикл, который принимает имена сотрудиков и создает массив имен с таким же количеством как массив специальностей.
for (i = 0; i < createTeam.length; i++) {
    let getName = prompt(`Ведите имя сотрудника команды ${createTeam[i]}`);
    getNames.push(getName);
}

console.log(getNames);


// создаем массив из объектов с свойствами name и position

const team = [];

for (j = 0; j < createTeam.length; j++) {
    var obj = {};
    obj.name = getNames[j];
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






let salary = Math.random();

// const position = 

const calculatesSalary = function(position) {

        if (salary < 0.34) {
            computer = 'камень';
        } else if (salary <= 0.68) {
            computer = 'ножницы';
        } else {
            computer = 'бумага';
        }

}


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