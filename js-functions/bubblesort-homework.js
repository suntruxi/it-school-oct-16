const numbers1 = [-1, 74, 2, -20, 10, 204, 86, 73, 90];
const numbers2 = [10, 5, 3, -7];
function bubbleSort(numbers, type) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (type === "asc") {
        if (numbers[j] > numbers[j + 1]) {
          const temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
        }
      } else {
        if (numbers[j] < numbers[j + 1]) {
          const temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
        }
      }
    }
  }
}

bubbleSort(numbers1, "asc");
bubbleSort(numbers2, "desc");

console.log(numbers1);
console.log(numbers2);
