function multiMatch(searchStr, subStrA, subStrB) {
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

  if (aIndex !== -1 && bIndex !== -1) {
    return Math.max(aIndex, bIndex);
  }

  if (aIndex !== -1) {
    return aIndex;
  }

  return bIndex;
}

module.exports = multiMatch;
