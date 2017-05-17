function match(matchtype, left, right) {
  const notFoundVal = -1;
  let results = [];
  let compareArray;
  let dataArray;
  
  if (matchtype === 'left' || matchtype === 'inner') {
    compareArray = left;
    dataArray = right;
  } else if (matchtype === 'right') {
    compareArray = right;
    dataArray = left;
  }
  
  compareArray.forEach((item, index1) => {
    let isFound = false;
    dataArray.forEach((dItem, index2) => {
      if (dItem === item) {
        results.push([index1, index2]);
        isFound = true;
      }
    });
    
    if (!isFound && matchtype !== 'inner') {
      results.push([index1, notFoundVal]);
    }
  });
  
  
  return results;
}

console.log(match('right', ['apple','grape','grape','melon'], ['grape', 'lemon', 'apple']));