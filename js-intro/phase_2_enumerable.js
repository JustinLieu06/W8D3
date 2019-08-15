Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  let mapped = [];

  this.myEach( function (el) { 
    mapped.push(callback(el)); 
  });

  return mapped;
};

Array.prototype.myReduce = function (callback, acc=this[0]) {
  // let acc;
  // if (!initialValue) { 
  //   acc = this[0]; 
  // }
  // else { 
  //   acc = initialValue; 
  // }

  this.myEach( function(el) {
    acc = callback(acc, el);
  });

  return acc;
};