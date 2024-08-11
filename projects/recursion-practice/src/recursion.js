// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
//default product to 1
var factorial = function(n, product = 1 ) {
  //base
  //if n is less than zero
  if ( n < 0 ){
    //return null
    return null
  }
  //if n is 1 or 0
  if ( n === 1 || n === 0 ){
    //return the product
    return product;
  }
  //recursion
  //multiply product by n
  product *= n 
  //return the factorial number minus 1 and the new product
  return  factorial(n - 1, product);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, number = 0) {
  //base
  //if the array is empty
  if(array.length === 0){
    //return a number
    return number;
    //else do recursion
  } else {
  //recursion
  //add array index value to number
  number += array[0]
  //slice the array, return the new number
  return sum(array.slice(1), number)
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
/**
 * i: number
 * o: 
 * c:
 * e: the edge cases 
 * 
 */  
  //change n to positive. math.abs(value) returns the absolute value of a number
  n = Math.abs(n);
  //base
  //if n is zero
  if( n === 0 ){
    //return true
    return true;
  }//if n is 1
  if ( n === 1 ){
    //return false
    return false;
  }
  //recursion return is even minus 2
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  /**
   * I: number
   * O: number
   * C:
   * E: 
   */
  // base

  // recursion
  //if n is greater than zero
  if( n > 0 ){
    //return n minus 1 plus the sum below n minus 1
    return n - 1 + sumBelow( n - 1 );
  };
  //if n is negative
  if( n < 0 ){
    //return n plus 1 and the sum below plus 1
    return  n + 1 + sumBelow( n + 1 );
  }  else {
    //else return zero
    return 0
    
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function ( x, y, array = [] ) {
//base
//if x is the same as y
if( x === y ){
  //pop last value off defaulted array
 array.pop();
 //return the array
 return array;
}
//if x is greater than y
if (x < y){
//recursion, add x + 1 to the array
  array.push(x + 1); 
  //return the range with x plus 1, y, and new array
  return range( x + 1, y, array);
  //if y is less than x
  } else if(y < x){
    //add x minus 1 to the array
  array.push( x - 1); 
  //return the range taking in x minus 1, y, and the array
  return range( x - 1, y, array);
  }
  
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base if the exponent is zero 
  if(exp === 0){
    return 1;
  }
  //recursion
  //if the exponent is negative
  if(exp < 0){
    //return 1 divided by the exponent function with a positive exponent
    return 1 /  exponent(base, -exp );
  }
  //return the base multiplied by result of invoking 
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base
  if( n < 1){
    return false
  }
  if(n === 1){
    return true
  }
  //recursion
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
//default parameters are an empty string, and i which is the length of the string minus 1
var reverse = function(string, reversed = '', i = string.length - 1 ){
  //base
  //i will be the index starting from the end, when it is equal to -1
  if(i === -1){
    //return the reversed string
    return reversed
  }

  //recursion
  //add the string at its last index to the beginning of the empty reversed string
  reversed += string[i]
  //decrease index by 1
  i--
  //return the function with the new reversed and index
  return reverse(string, reversed, i)
};

// 10. Write a function that determines if a string is a palindrome.
//default parameters of index to 0, second index to the last index
var palindrome = function(string, i = 0, i2 = string.length - 1) {     
  //base
  //if the index is empty
  if(string[i] === ' '){
    //call palindrome and skip it
    return palindrome(string, i + 1, i2);
  } //if the other index is empty
   if (string[i2] === ' '){
    //return palindrome and skip it
    return palindrome(string, i, i2 - 1)
  }//double checking
  console.log(i2)
  //if the letters at both indexes dont match
  if(string[i].toUpperCase() != string[i2].toUpperCase() ){
    //return false
    return false
  }//if we make it to the end
  if (i2 === 0){
    //return true
    return true
  } 

  //recursion
 //if the letters match, and the recursion is incomplete due to i2 not being equal to zero
  if(string[i].toUpperCase() === string[i2].toUpperCase() && i2 != 0){
    //return the palindrome function call and move to the next index
    return palindrome(string, i + 1 , i2 - 1 );
  }

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y, product = x ) {

  if( product === 0 ){
    return 0
  } else if ( y - 1 === 0  ){
    return product
  } else if ( x - 1 === 0 ){
      return y
  } else if ( y + 1 === 0 ){
    return -product
  } else if ( x + 1 === 0 ){
    return -y
  }
  let bothValues = (num1, num2) => {
    if(num1 > 0 && num2 > 0){
      return true
    } else if( num1 < 0 && num2 < 0) {
      return false
    } else if(num1 > 0 && num2 < 0){
      return "y is negative"
    } else if(num1 < 0 && num2 > 0){
      return "x is negative"
    }
  }

  switch ( bothValues(x, y)) {
    case true: 
      return multiply( x, y - 1, product + x );
    case false: 
      return multiply(x, y + 1,product + x )
    case "x is negative":
      return multiply(x, y - 1, product + x ); 
     case "y is negative":
        return multiply(x, y + 1, product + x)         
  }
    
};


// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {

};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
//default a bool to true
var compareStr = function(str1, str2, bool = true) {
  //base
  //when both lengths are zero
  if(str1.length === 0 && str2.length === 0 ){
    //return the bool
    return bool
  }
  
  //recursion
  //if the first index of each string matches
  if(str1[0] === str2[0]){
    //use recursion, return compareStr function with each string sliced and current bool
    return compareStr(str1.slice(1), str2.slice(1), bool)
    //if the strings dont match at a certain character
  } else if(str1[0] != str2[0]){
    //use recursion, call the func again slice 1 on both strings, set bool to false
    return compareStr(str1.slice(1), str2.slice(1), bool = false)
    //if the sliced strings lengths do not match
  } else if(str.slice(1).length !== str.slice(1).length){
    //continue slicing both strings in recursion, switch bool to false
    return compareStr(str1.slice(1), str2.slice(1), bool = false )
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
//declare default array
var createArray = function(str, array = []){
  //base, if string length is zero
  if(str.length === 0){
    //return an array
    return array
  }
  //recursion
  //push the first index of the string to the array
  array.push(str[0])
  //return the array function slice 1 off string
  return createArray(str.slice(1), array)

};

// 17. Reverse the order of an array
//create default array
var reverseArr = function (array, defaultArray = []) {
  //base
  //if array is empty
  if(array.length === 0){
    //return default array
    return defaultArray;
  }
  //recursion
  //add each index of array to end
  defaultArray.unshift(array[0]);
  //slice value off of array
  return reverseArr(array.slice(1), defaultArray)
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
//default an array
var buildList = function(value, length, array = []) {
  //base
  //if length is zero
  if(length === 0){
    //return the array
    return array
  }
  //recursion
  //push current value into the array
  array.push(value);
  //return the buildlist taking in the value, and decrease length by 1, insert new array
  return buildList(value, length - 1, array);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
//default an occurances parameter to 0
var countOccurrence = function(array, value, occurances = 0) {
  //base
  //if the array is empty
  if(array.length === 0){
    //return occurances
    return occurances
  }
  //recursion
  //if the 0 index of array is the value
  if(array[0] === value){
    //increment occurances by 1
    occurances += 1
  }
  //return the countOccurence function with array sliced 1, and occurances
  return countOccurrence(array.slice(1), value, occurances)
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
//default a mapped parameter to an empty array
var rMap = function(array, callback, mapped = []) {
  //base
  //if the length of the array is empty
  if(array.length === 0){
    //return the mapped array
    return mapped;
  }

  // recursion
  //push the result of the callback on the array at the first index into the mapped array
  mapped.push(callback(array[0]));
  //return the function with the array slice 1 and the updated mapped array
  return rMap(array.slice(1), callback, mapped)
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n, array = [0], fibnum = 1, i = 1) {
//base
if(n === 0){
  return array;
} else if( n < 0 ){
  return null
}
//recursion
n -= 1;
array.push(fibnum);
i += 1;
  fibnum = array[i - 1] + array[i - 2];
return fibonacci(n, array, fibnum, i);
};


// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
//default an array with 1 value of 0, fibnum at 1, index at 1
var nthFibo = function(n, array = [0], fibnum = 1, i = 1) {
//base
//if n is zero
if(n === 0){
  //return last value in array
  return array[array.length - 1];
  //if n is negative
} else if( n < 0 ){
  //return null
  return null
}
//recursion
//subtract 1 from n
n -= 1;
//push the fibnum into the array
array.push(fibnum);
//increase index by 1
i += 1;
//reassign fibnum to previous 2 array indexes
  fibnum = array[i - 1] + array[i - 2];
  //return the nthFibo call with updated values
return nthFibo(n, array, fibnum, i);
}

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
//default an index to zero and a new array
var capitalizeWords = function(input, i = 0, newArray = []) {
  //base
  //if the index equals the array length
  if(i === input.length ){
    //return the new array
    return newArray
  }
  //recursion
  //push value at current index to uppercase into the new array
  newArray.push(input[i].toUpperCase());
  //return the function call with index incremented by 1
  return capitalizeWords(input, i + 1, newArray);
};


// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
//default new array and index to 0
var capitalizeFirst = function(array, newArray = [], i = 0) {
  //base //if the index is equal to the length of the array
  if(i === array.length){
    //return the new array
    return newArray
  }
  //recursion
  //push into the new array the value of the first character in the array to uppercase plus the sliced value of the remaining value
  newArray.push(array[i][0].toUpperCase() + array[i].slice(1))
  //return the call of capitalizeFirst with index incremented by 1
  return capitalizeFirst(array, newArray, i + 1)
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
//default an empty object and an index
var letterTally = function(str, obj = {}, i = 0) {
  //base
  //if the index is the length of the string
  if(i === str.length ){
    //return the object
    return obj
  }
  //recursion
  //if the object key exists that holds the value of the letter
  if( obj[str[i]] ){
    //increment that value by 1
  obj[str[i]] += 1
  //else
  } else {
    //assign that key to the value of 1
    obj[str[i]] = 1;
  } //return the lettertally function with the updated object and index increased by 1
  return letterTally(str, obj, i + 1 )
};


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
//create default parameters, i, and an empty array
var compress = function(list, i = 0, array = []) {
  //base
  //if i is equal to the length of the array
  if(i === list.length){
    //return the array
    return array
  }
  //recursion
  //if the current value of the index in the array is not equal to the NEXT value at the NEXT index
  if(list[i] != list[i + 1]){
    //push the value into the array
  array.push(list[i])
  }
  //return the result of calling this function taking in an updated index that increases by 1
  return compress(list, i + 1, array )
};


// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
//default an empty array, and an index of zero
var minimizeZeroes = function(array, newArray = [], i = 0) {
  //base
  //if i is equal to the array length
  if(i === array.length){
    //return a new array
    return newArray;
  }
  //recursion
  //if the array at the current and next index is 0
  if(array[i] === 0 && array[i - 1] === 0){
    //return the function call, increment index by 1
    return minimizeZeroes(array, newArray, i + 1)
  }
  //push the current value into the new array
  newArray.push(array[i]);
  //return the function, increase i by 1
  return minimizeZeroes(array, newArray, i + 1)
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
//default an empty array and an index to 0
var alternateSign = function(array, altArr = [], i = 0) {
  //initialize var x to absolute value of current array index
  let x = Math.abs(array[i]);
  //base
  //if i equals the array length
  if(i === array.length){
    //return new array
    return altArr
  }
  //recursion
  //switch statement on remaindder of i / 2
 switch (i % 2) {
  //if o
  case 0:
    //push x into alt array
  altArr.push(x)
  //return the function with updated parameter
    return alternateSign(array, altArr, i + 1)
    //if 1
  case 1:
    //push negative x into the alternate array
  altArr.push(-x)
  //return the alternatesign function call with 1 added to index
    return alternateSign(array, altArr, i + 1)
 }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
//default parameters i to zero and newStr to an empty string
var numToText = function(str, i = 0, newStr = "") {
//base //if the index is equal to the length of the string
if(i === str.length){
  //return the new string
  return newStr;
}
//recursion
//switch statement takes in result of parseFloat on teh current index val of string. parsefloat converts a string to a number
switch (parseFloat(str[i])){
  //if the result is a number
  case 0:
    //add to the string the english transnlation of the corresponding number 
    newStr += "zero";
    //return a call of the same function, increase index by 1
    return numToText(str, i + 1, newStr);
  case 1:
    newStr += "one";
    return numToText(str, i + 1, newStr);
  case 2:
    newStr += "two";
    return numToText(str, i + 1, newStr);
  case 3:
    newStr += "three";
    return numToText(str, i + 1, newStr);
  case 4:
    newStr += "four";
    return numToText(str, i + 1, newStr);
  case 5:
    newStr += "five";
    return numToText(str, i + 1, newStr);
  case 6:
    newStr += "six";
    return numToText(str, i + 1, newStr);
  case 7:
    newStr += "seven";
    return numToText(str, i + 1, newStr);
  case 8:
    newStr += "eight";
    return numToText(str, i + 1, newStr);
  case 9:
    newStr += "nine";
    return numToText(str, i + 1, newStr);
    //default statement triggers if no number was found
 default: //add the value to the new string
    newStr += str[i];
    //return a call of the function with index increased by 1
    return numToText(str, i + 1, newStr);
}
};
/*
// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};


*/
//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
