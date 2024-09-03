'use strict'

let name = prompt('Введите ваше имя', 'Имя');
alert(`Ваше имя ${name}`);
let secondname = prompt('Введите вашу фамилию', 'Фамилия');
alert(`Ваша фамилия ${secondname}`);
let thirdname = prompt('Введите ваше отчество', 'Отчество');
alert(`Ваше отчество ${thirdname}`);

let isTrue = confirm(`Это действительно ваше фио? ${secondname} ${name} ${thirdname}`);
alert(isTrue)