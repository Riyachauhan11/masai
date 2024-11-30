// Initialize the numbers array
let numbers = [5, 3, 8, 1, 2];

console.log("Initial array:", numbers);

// Function to add a number to the array
function addNumber(array, number) {
    array.push(number);
    return array;
}

// Function to remove the first occurrence of a number from the array
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    } else {
        console.log(`Number ${number} not found in the array.`);
    }
    return array;
}

// Function to sort the array in ascending order
function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

// Function to calculate the sum of numbers in the array
function calculateSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

// Function to calculate the average of numbers in the array
function calculateAverage(array) {
    if (array.length === 0) return 0;
    return calculateSum(array) / array.length;
}

// Main program demonstrating each function

// Add a number to the array
numbers = addNumber(numbers, 4);
console.log("After adding 4:", numbers);

// Remove a number from the array
numbers = removeNumber(numbers, 3);
console.log("After removing 3:", numbers);

// Sort the numbers in ascending order
const sortedNumbers = sortNumbers(numbers);
console.log("Sorted array:", sortedNumbers);

// Calculate the sum of numbers in the array
const sum = calculateSum(numbers);
console.log("Sum of numbers:", sum);

// Calculate the average of numbers in the array
const average = calculateAverage(numbers);
console.log("Average of numbers:", average);
