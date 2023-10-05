//linearSearch("a", bananaList); // 1

bananaList = "bananas".split(""); // ["b", "a", "n", "a", "n", "a", "s"]

function linearSearch(searchTerm, arr) {
  if (arr.indexOf(searchTerm) !== -1) {
    return arr.indexOf(searchTerm);
  } else {
    return undefined;
  }
}

function globalLinearSearch(searchTerm, arr) {
  indexArr = [];

  for(i=0;i<arr.length;i++){
    if(arr[i] === searchTerm){
      indexArr.push(i)
    }
  }

  return indexArr;
}

//console.log(linearSearch('n',bananaList))
console.log(globalLinearSearch("n", bananaList));

module.exports = { linearSearch, globalLinearSearch };
