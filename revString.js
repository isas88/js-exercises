//  let strOrg = 'madam';
// let revStr = '';
// console.log('original string :',strOrg);

//1 using reverse
// console.log('reverse string is: ', 
//             strOrg.split('')
//             .reverse()
//             .join(''));

//2 using traditonal for loop
// let str = strOrg.split('');

// for (let idx=0;idx<str.length;idx++){
//     revStr = str[idx] + revStr;
// }
// console.log('reverse string is: ', revStr);

//3 using ES6 for loop
// for (let elem of strOrg){
//     revStr = elem + revStr;
// }

//4 using forEach
// strOrg.split('')
// .forEach(element => revStr = element + revStr);
   
//5 using higher order function reduce
// revStr = strOrg.split('')
// .reduce((revStr, elem) => elem + revStr, '');
// console.log('reverse string :',revStr);

//6 is palindrome

// if (isPalindrome('madam'))
// {
//     console.log('Is Palindrome');
// }

function isPalindrome(strOrg){
const revStr = strOrg.split('')
            .reduce((revStr,elem)=> elem + revStr,'');
return strOrg === revStr;
}
 
//reverse integer
// let intOrg = -54321;
// console.log(
//             parseInt(intOrg
//                 .toString()
//                 .split('')
//                 .reverse()
//                 .join(''))
//                 * Math.sign(intOrg));

module.exports = {
    isPalindrome
};