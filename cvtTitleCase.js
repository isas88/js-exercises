//convert to title case
let strInp = 'this is a sample text to convert to title case';
let strOut = '';

//let arrStr = strInp.split(' ');
//method1
// for (value of arrStr){
//     strOut = strOut + value[0].toUpperCase() + value.substring(1) + ' ' ;
// }

//using foreach
// arrStr.forEach(value => 
//     strOut = strOut + value[0].toUpperCase() + value.substring(1) + ' ' );
// console.log(strOut); 

//using array function

let out = strInp
            .toLowerCase()
            .split(' ')
            .map(value => value[0].toUpperCase() + value.substr(1))
            .join(' ');

console.log(out);

