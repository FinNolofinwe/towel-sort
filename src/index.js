
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix && (matrix.length > 0)) {
      var arr = [];
      for (i =0; i < matrix.length; i++) {
          if ( i % 2 == 1 ) {
            matrix[i] = matrix[i].reverse();
            arr.push(matrix[i]);
          } else {
            arr.push(matrix[i]);
          }     
      } 
      return arr.flat();
    } else {
    return [];
  }
}
