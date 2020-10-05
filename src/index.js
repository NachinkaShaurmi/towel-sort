
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    if (arguments.length === 0) return result;

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
           result = result.concat(matrix[i]);
        } else {
            result = result.concat(matrix[i].reverse());
        }
    }
    console.log(result);
    return result;
}
