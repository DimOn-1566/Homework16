
console.log('Задание №1 ' );
function string (x){
    let main = [ ]
    let numbers = [] 
    let strings = x.split('')
    let result = 0;
    let resultString =[];
    for ( let i = 0 ; i < x.length ; i++){
        main.push(x[i])
        for ( let r = 0; r < x.length; r++){
            if(Number(main[i]) === r  &&  Number(main[i]) != ' '){
                numbers.push((main[i])) 
            }
        }  
    }
    for( let e = 0; e < strings.length; e++){ 
        if ( strings[e].toLowerCase().localeCompare('a') >= 0 && 'z'.toLowerCase().localeCompare(strings[e]) >= 0  ){
            resultString.push(strings[e])
            result += 1   
        }
    }
    let simvols = x.length - result - numbers.length
    console.log( `Количество иных символов ${simvols}`);
    console.log( `Колличество букв в строке ${result}`);
    console.log( `Количество цифер в строке ${numbers.length}`);
}
string('Hello $ World 56')

// ********************************************************
// ********************************************************

// console.log('Задание №2');

function numberResult(twoDigitNum) {
    let info = [ ]
    let decimal = {2: 'Двадцать', 3: 'Тридцать', 4: 'Сорок',  5: 'Пятьдесят',  6: 'шестьдесят',  7: 'семьдесят', 8: "восемьдесят",  9: 'Девяносто'
    }
    let values = {
        1: "один", 2: 'два',   3: 'три', 4: 'четыре',5: 'пять',6: 'шесть',7: 'семь',8: 'восемь',9: 'девять', 0: ' '
    }
let result;
let resultTwo;
let numString = String(twoDigitNum)
 if( Number(numString) < 20 && Number(numString) >= 10 ){
    switch (twoDigitNum) {
        case  10: console.log('десять ');
        break
        case  11: console.log('одиннадцать ');
        break
        case  12: console.log('Двенадцать  ');
        break
        case  13: console.log('Тринадцать  ');
        break
        case  14: console.log('четырнадцать  ');
        break
        case  15: console.log('пятнадцать ');
        break
        case  16: console.log('шестнадцать  ');
        break
        case  17: console.log('Семнадцать  ');
        break
        case  18: console.log('Восемнадцать ');
        break
        case  19: console.log('Девятнадцать ');
        break
        case  20: console.log('Двадцать ');
        break
    }
 } else if (Number(numString) > 20 ) {
    for( let i = 0; i < numString.length; i++ ){
        numString[0]
        numString[1]
    }
    for ( key in decimal){
        if(key == numString[0] ){
            result = decimal[key] 
        }
    }
    for ( key in values){
        if ( key == numString[1]){
            resultTwo = values[key]
        }
    }
    console.log(`${result} ${resultTwo}`);
 } else if (Number(numString) < 10 ){
    console.log("число меньше 10 ");
 }  
info.push(twoDigitNum)
}

numberResult(12)

console.log("Задание 3 ");

function bigSmallLetters(values) {
    let x = [ ]
    for( let i = 0; i < values.length; i++){
        if( values[i] === values[i].toLowerCase() &&   Number.isNaN(+values[i])){
           x.push(values[i].toUpperCase())}
          else if ( values[i] === values[i].toUpperCase() && Number.isNaN(+values[i])){
            x.push(values[i].toLowerCase())
          } else if( !Number.isNaN(+values[i])){
           x.push('_')        }
    }
    console.log(x.join(''));
}

bigSmallLetters('DimOn-1566')

console.log('Задание 4');

function camelcase ( values){
   let x = values.split('')
   for ( let i = 0; i < x.length; i++){
      if(x[i] == '-' ){
          x.splice([i] , 1)
      }

   }
   console.log(x.join(''));
  
   
}
camelcase('adasd-ad-as')





console.log('Задание 5');
function abbreviation(values) {
    let x =  values.split('')
    let capitalletters = [ ]
    let e
for( i = 0; i < x.length; i++){
    if( x[i] == x[i].toUpperCase()){
    if ( x[i] != ' '){ 
        // console.log( x[i]);
        capitalletters.push(x[i])
    } 
    } 
}
e = capitalletters.join('')

console.log(`Значение ${e}`);
}
abbreviation('Объектно Ориентированное Програмирование')



console.log('задание 6'); 

function longString(value) {
   let y = []
   let x = value.split( ' ')
   for ( let i = 0; i < x.length; i++){
      y.push(x[i])
   }
   console.log(y.join(''));
   return y
}
longString('мы все ждем пятницу ')

console.log('задание 7');

function calculator (value){
let x = value.split(' ')
if (x[1] == '+'){
   console.log(Number(x[0])  + Number(x[2]) );
}
if (x[1] == '-'){
   console.log(Number(x[0]) - Number(x[2]) );
}
if (x[1] == '/'){
   console.log(Number(x[0]) / Number(x[2]) );
}
if (x[1] == '*'){
   console.log(Number(x[0]) * Number(x[2]) );
}
}
calculator('5 + 9')

// console.log('Задание 8');

function urls ( value){
    let arr = value.split('://')
    let domain = value.split('://').pop().split('/')
    let path = value.split('://').pop().split('/').slice(1).join()
    console.log(`Протокол ${arr[0]}\nДомен ${domain[0]}\nПуть  /${path} ` );
}
urls('https://learn.javascript.ru/array-methods')
    

console.log('Задание 9 не выполненно');



// function delimiter(value) {

  
//     let separator = []
//     let strings = []

//     for( i = 0; i < value.length; i++){
//         if ( value[i] != '/'){
//             strings.push(value[i])
//         }
//     }
    
//      console.log(strings);
    
// }
// delimiter('22/12/2013')



console.log('Задание 10 не выполненно');