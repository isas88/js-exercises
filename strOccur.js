const inpStr = 'abcdefghijkal'; 

//const inpStr = 'efghiabcdababcabcdabcde'; 
// const inpStr = 'efghiabcdababcabcda'; 
// const inpStr = 'abcdae';

// let arrStr = inpStr.split('');
// console.log(arrStr);

// let strTemp='';
// let strFnl='';
// let start =0;
// let end = start + 1;
// for (; i<arrStr.length; start++) {
//     const value = arrStr[i];
//     console.log('arrvalue: ',value);
//     if (!strTemp.includes(value)){
//         strTemp = strTemp.concat(value);
//         if(strTemp.length >= strFnl.length) { 
//             //repetition of character and string length greater save it
//             strFnl = strTemp;
//             console.log('elseif-strFnl: ',strFnl);
//             console.log('elseif-strTemp: ',strTemp);
            
//         }
//     } else {
//         strTemp = value;
//     }
// }

let holder = [];
let output = '';
for (let i=0; i<inpStr.length; i++) {
    for (let j=i; j<inpStr.length; j++) {
        const current = inpStr.charAt(j);
        if (holder.includes(current)){
            const temp = inpStr.substring(i,j);
            if (temp.length >= output.length) {
                output = temp;
            }
            holder = [];
            break;
        } else {
            holder.push(current);
        }
    }
}

console.log('Final o/p :', output);