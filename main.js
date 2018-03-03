function multiMatch(searchStr, subStrA, subStrB) {
  if (searchStr === '') {
    return -1;
  }

  let aIndex = -1;
  let bIndex = -1;

  for (let i = searchStr.length - 1; i > 0; i--) {
    if (searchStr[i] === subStrA) {
      aIndex = i;
    }
    if (searchStr[i] === subStrB) {
      bIndex = i;
    }

    if (aIndex !== -1 || bIndex !== -1) {
      break;
    }
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
