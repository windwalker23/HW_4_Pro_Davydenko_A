fisrtQuestion = prompt('Сколько будет 2+2?');
console.log(fisrtQuestion);

secondQuestion = prompt('Солнце встает на востоке?');
if(secondQuestion != null) {
    secondQuestion = secondQuestion.trim().toLowerCase();
}
console.log(secondQuestion);

thirdQuestion = prompt('Сколько будет 5 / 0?');
if(thirdQuestion != null) {
    thirdQuestion = thirdQuestion.trim().toLowerCase();
}
console.log(thirdQuestion);

fourthQuestion = prompt('Какого цвета небо?');
if(fourthQuestion != null) {
    fourthQuestion = fourthQuestion.trim().toLowerCase();
}
console.log(fourthQuestion);

fifthQuestion = prompt('Какой правильный ответ на главный вопрос жизни, вселенной и вообще?');
console.log(fifthQuestion);

points = 0;

if(fisrtQuestion == 4) {
    points +=10;
    console.log(points);
}

if(secondQuestion == "да") {
    points +=10;
    console.log(points);
}

if(thirdQuestion == "на ноль делить нельзя") {
    points +=10;
    console.log(points);
}

if(fourthQuestion == "голубое") {
    points +=10;
    console.log(points);
}

if(fifthQuestion == 42) {
    points +=10;
    console.log(points);
}

alert(`Ваш результат ${points} баллов`);