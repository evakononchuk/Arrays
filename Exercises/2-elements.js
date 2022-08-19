"use strict";

const removeElements = (array, ...items) => {
  for (const val of items) {
    const index = array.indexOf(val);
    if (index !== -1) array.splice(index, 1);
  }
  return array;
};

module.exports = { removeElements };
