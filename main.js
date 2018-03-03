function func(searchStr, subStrA, subStrB) {
  if (searchStr === '') {
    return -1;
  }

  let i = searchStr.length - 1;
  let aIndex = -1;
  let bIndex = -1;

  while (aIndex === -1 && bIndex === -1 && i > 0) {
    if (searchStr[i] === subStrA) {
      aIndex = i;
    }
    if (searchStr[i] === subStrB) {
      bIndex = i;
    }
    i = i - 1;
  }

  if (aIndex === -1 && bIndex === -1) {
    return -1;
  }

  if (aIndex !== -1 && bIndex !== -1) {
    return Math.max(aIndex, bIndex);
  }

  if (aIndex !== -1) {
    return aIndex;
  }

  return bIndex;
}

/*
* find 1st index match from string end
* if it equals -1 return 2nd index match
* else return 1st match index
*/

module.exports = func;
