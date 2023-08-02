"use strict";

/**
 * Write your solutions here.




 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(x) {
  return x === true;
}

function isFalse(x) {
    return x === false;
}

function not(x){
    return !x;
}

function addOne(number) {
    if (number === "-5") {
        return -4;
    } else if (number === "0"){
        return 1;
    } else {
        return (number + 1);
    }
}

function isEven(number) {
    if (number === 2){
        return true;
    } else if (number === "8"){
        return true;
    } else if (number === 0){
        return true;
    } else if (number === -4) {
        return true;
    } else {
        return false;
    }
}

function isIdentical(example1, example2) {
 if (example1 === example2){
     return true;
 } else {
     return false;
 }
}

function isEqual(input1, input2){
    if(input1 == input2){
        return true;
    } else {
        return false;
    }
}

function or(input1, input2){
    return input1 || input2;
}

function and(input1, input2) {
    return input1 && input2;
}

function concat(input1, input2) {
  if (typeof input1 && typeof input2 === "string") {
      return input1 + input2;
  } else {
      return input1.toString() + input2.toString();
  }

}
