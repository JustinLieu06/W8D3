Array.prototype.uniq = function () {
  let unique = [];
  for (let i = 0; i < this.length; i++) {
    if (!unique.includes(this[i])) {
      unique.push(this[i]);
    }
  }
  return unique;
};

Array.prototype.twoSum = function () {
  let ret = [];
  for (let i = 0; i < this.length; i++){
    for (j = i + 1; j < this.length; j++){
      if (this[i] + this[j] === 0){
        ret.push([i,j]);
      }
    }
  }
  return ret;
};

Array.prototype.transpose = function () {
  let ret = Array.from(this[0], () => [] );
  for (let i = 0; i < this.length; i++){
    for (j = 0; j < this[i].length; j++){
      ret[j].push(this[i][j]);
    }
  }
  return ret;
};
