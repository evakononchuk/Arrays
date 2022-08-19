"use strict";

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  //let unique = [...new Set(array)];
  const newArray = [];
  for (const item of array) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = { unique };
