
// You should implement your task here.

module.exports = function towelSort (matrix) {
  console.log(matrix)
  if (!Array.isArray(matrix) || !matrix) {
    return [];
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 1) {
      matrix[i].reverse()
    }
  }

  let towel = matrix.reduce((a, b) => a.concat(b), [])
  console.log(towel)
  return towel
}