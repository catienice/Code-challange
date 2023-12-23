const findSum = function(array) {
    let sum = 0
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
  };
  

const findFrequency = function(array) {
    let count = {};
    for (let i = 0; i < array.length; i++) {
        let letter = array[i];
        if (count[letter]){
            count[letter] += 1;
        } else {
            count[letter] = 1;
        }
    }
  };


const isPalindrome = function(str) {
    const lowerStr = str.toLowerCase();
    for (let i = 0; i< Math.floor(str.length/2); i++) {
       if(lowerStr[i] !== lowerStr[str.length - i - 1]){
        return false;
       }
    }
    return true;
  };
  
const largestPair = function(array) {
    if(array.length < 2){
        return null;
    }
    let biggestProduct = array[0] * array[1];
    for (let i = 1; i < array.length - 1; i++) {
        let product = array[i] * array[i+1]
        if(product > biggestProduct){
            biggestProduct = product;
        }
    }
    return biggestProduct;
  };


const removeParenth = function(str) {
   cleanString = str.replace("(", "");
   cleanString = cleanString.replace(")", "");
   return cleanString;
  };

const scoreScrabble = function(str) {
  let alphabet = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t:1, d: 2, g: 2,b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 };
  let total = 0
  str = str.toLowerCase();
  for (let i = 0; i  < str.length; i++) {
    total += alphabet[str[i]] || 0;
  }
return total;
  };
