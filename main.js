function func(str, subStrA, subStrB) {
  if (str === '') {
    return -1;
  }

  let i = str.length - 1;
  let aIndex = -1;
  let bIndex = -1;

  while (aIndex === -1 && bIndex === -1 && i > 0) {
    if (str.substring(i, i + 1) == subStrA) {
      aIndex = i;
    }
    if (str.substring(i, i + 1) == subStrB) {
      bIndex = i;
    }
    i = i - 1;
  }

  if (aIndex !== -1 && bIndex === -1) {
    return aIndex;
  } else {
    return Math.max(aIndex, bIndex);
  }

  if (bIndex !== -1) {
    return bIndex;
  }

  return -1;
}

module.exports = func;
