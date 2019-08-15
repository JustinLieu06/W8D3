function myRange(start, end) {
  if (start === end){ return [end];}
  return [start].concat(myRange(++start, end));
}

function sumRec(arr) {
  if (arr.length === 0) {return 0;}
  return arr[0] + sumRec(arr.slice(1, arr.length));
}