//let arr = new Array(); // пустой 
//let arr = new Array(5); // массив на 5 элементов
//let arr = new Array(1, 'hi', 1.5); // массив с элементами
//let arr = []; // пустой массив
//let arr = [1, 'hi', 1.5]; // массив с элементами
//alert(arr); //1, 'hi', 1.5
//arr[0] = 2; // редактирование
//alert(arr); //1, 2, 1.5
//arr[3] = 'hi'; // добавление
//arr[4] = 'hello'; // добавление
//alert(arr);
// 1. Создать массив с 3-мя элементами
// 2. Вывод массива
// 3. Отредактировать элемент с индексом 0. Вывод массива
// 4. Добавить еще 2-а элемента. Вывод массива
// заполнение массива в цикле
//let arr = []
//for (let i=0; i<3; i++) {
//    arr[i] = prompt('Введите элемент массива', 0);
//}
//alert(arr);
// вывод элементов
//for (let i=0; i<arr.length; i++) {
//    alert(arr[i]);
//}
// перебор элементов
//let sum = 0; // сумма
//for (let i=0; i<arr.length; i++) {
//    sum+=+arr[i]; // sum = sum + arr[i]
//}
//alert(sum);
//let arr = [];
//arr[499] = 'hi';
//alert(arr.length);
//let arr = [1, 1.5, 'hi'];
//alert('Элементы массива '+ arr.join(' '));
// join
// Cоздать массив с 5-ю элементами
// Вывести элементы массива в строковом виде
// Для разделителя использовать '&'

// циклы!
// Создать массив и внести элементы при помощи prompt
// Посчитать среднее значение элементов массива

//let arr = [1,2,3,4,5];
//alert(arr.join('&'));

//let arr = [];
//for (let i = 0; i<3; i++) {
//    arr[i] = prompt();
//}
//alert(arr);

//let sum = 0;
//for (let i = 0; i<arr.length; i++) {
//    sum += +arr[i];
//}
//alert(sum);
//alert(sum/arr.length);

//let arr = [[1,2,3],[4,5,6]];
//alert(arr[0][1]) // 2

//let arr = [];
//for (let i=0; i<2; i++){
//    arr[i] = [];
//}

//for (let i=0; i<2; i++){ // по строке
//    for (let j=0; j<2; j++){ // по столбцу
//        arr[i][j] = prompt();
//    }
//}

let num = 0; // количество ходов
function step(t) { // функция с указателем на ячейку
    if (t.innerHTML == '') { // если ячейка пустая
        if (num % 2 == 0) { // и если ход четный
            t.style.color = 'blue';
            t.innerHTML = 'X'; // ставим Х           
        } else { 
            t.style.color = 'red';
            t.innerHTML = 'O'; // иначе ставим О           
        }
        num++; // добавляем 1 к переменной
        analiz(t)
    } else {
        alert('Error'); // если ячейка не пустая, то ошибка
    }   
}

function analiz(t) {
    let tr = t.parentNode.parentNode;
    let el = [];
    let win = false;
    for (let i = 0; i<9; i++){
        el[i] = tr.getElementsByTagName('td')[i].innerHTML;
    }
    // 1 строка
    if ((el[0]==el[1] && el[1]==el[2]) && (el[0]=='X'||el[0]=='O')) {
        win = true;
        alert('win');
    }
    // 2 строка
    if ((el[3]==el[4] && el[4]==el[5]) && (el[3]=='X'||el[3]=='O')) {
        win = true;
        alert('win');
    }
    // 3 строка
    if ((el[6]==el[7] && el[7]==el[8]) && (el[6]=='X'||el[6]=='O')) {
        win = true;
        alert('win');
    }

    // 1 столбец
    if ((el[0]==el[3] && el[3]==el[6]) && (el[0]=='X'||el[0]=='O')) {
        win = true;
        alert('win');
    }
    // 2 столбец
    if ((el[1]==el[4] && el[4]==el[7]) && (el[1]=='X'||el[1]=='O')) {
        win = true;
        alert('win');
    }
    // 3 столбец
    if ((el[2]==el[5] && el[5]==el[8]) && (el[2]=='X'||el[2]=='O')) {
        win = true;
        alert('win');
    }

    // главная диаг
    if ((el[0]==el[4] && el[4]==el[8]) && (el[0]=='X'||el[0]=='O')) {
        win = true;
        alert('win');
    }
    // побочная диаг
    if ((el[2]==el[4] && el[4]==el[6]) && (el[2]=='X'||el[2]=='O')) {
        win = true;
        alert('win');
    }

    if (win == true) {
        for (let i = 0; i<9; i++) {
            tr.getElementsByTagName('td')[i].innerHTML = '';
            win = false;
            num = 0;
        }
    }
}


