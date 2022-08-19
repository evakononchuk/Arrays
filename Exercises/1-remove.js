"use strict";

const removeElement = (array, item) => {
  return array.filter(function (x) {
    return x != item;
  });
};

module.exports = { removeElement };
