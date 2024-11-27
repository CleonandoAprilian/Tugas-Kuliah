const filterGenap = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

console.log(filterGenap([1, 2, 3, 4, 5, 6]));
