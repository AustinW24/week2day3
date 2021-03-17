/*******************************************************************************

 Examples:

 let isEven = function (n) {
     return n % 2 === 0;
    };

    let isPositive = function (n) {
        return n > 0;
    };

    console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
    // [ 8, 6, 12 ]

    let isUpperCase = function (s) {
        return s === s.toUpperCase();
    };

    let startsWithA = function (s) {
        return s[0].toUpperCase() === 'A';
    }
    console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
    // [ 'APPLES', 'ART' ]

    Write a function `andSelect` that accepts an array and two callbacks. The function
    should return a new array containing elements of the original array that result in
    true when passed into both callbacks.
*******************************************************************************/
// do
// set params as array, cb1, cb2
// set variable to arr.filter

let andSelect = function(array, cb1, cb2) {
    let newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (cb1(array[i]) && cb2(array[i])) {
            newArr.push(array[i])
        }
    }
    return newArr;
};

let isEven = function (n) {
    return n % 2 === 0;
   };

   let isPositive = function (n) {
       return n > 0;
   };

   console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
   // [ 8, 6, 12 ]

   let isUpperCase = function (s) {
       return s === s.toUpperCase();
   };

   let startsWithA = function (s) {
       return s[0].toUpperCase() === 'A';
   }
   console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
   // [ 'APPLES', 'ART' ]




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = andSelect;
