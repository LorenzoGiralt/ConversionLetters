/**
 * It's allow to do this conversion to LowerCase or reverse
 */

const regex = /[A-Z]/;
const arrays = [];
function OnLowerToUpperReverse(array) {
if (array[0] != array.match(regex)) {
    for (let i = 1; i < array.length; i++) {
arrays.push(array[i].toUpperCase());
    }
    return `Conversion to UpperCase à partir de index [1]: ${array[0]}${arrays.join('')}`
}
else
    {
        for (i = 1; i < array.length; i++) {
            arrays.push(array[i].toLowerCase());
    }
    return `Conversion to LowerCase à partir de index [1]: ${array[0]}${arrays.join('')}`
}
}

console.log(OnLowerToUpperReverse('Hello World'));

   
