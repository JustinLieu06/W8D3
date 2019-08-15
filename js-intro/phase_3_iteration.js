Array.prototype.bubbleSort = function() {
  let sorted = false;

  let temp;
  while (!sorted){
    sorted = true;
    for (let i = 0; i < this.length; i++){
      if (this[i] > this[i + 1]){
        sorted = false;
        temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
      }
    }
    
  }
  return this;
};

String.prototype.substrings = function() {
  let subs = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j < this.length + 1; j++){
      subs.push(this.slice(i,j));
    }
  }
  return subs;
};