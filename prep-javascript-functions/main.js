function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var totalMinutes = convertHoursToMinutes(2);
console.log('Total Minutes: ', totalMinutes);

function getGreeting(name) {
  return 'Hello ' + name;
}
var greet = getGreeting('Giancarlo');
console.log(greet);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var sumOfAddandMultiplyBy5 = addAndMultiplyBy5(10, 5);
console.log(sumOfAddandMultiplyBy5);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
var sumOfMultiplyAndDivideBy5 = multiplyAndDivideBy5(35, 10);
console.log(sumOfMultiplyAndDivideBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var sumOfSubtractTwoNumbers = subtractTwoNumbers(22, 7);
console.log(sumOfSubtractTwoNumbers);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var sumOfCircleCircumference = getCircleCircumference(5);
console.log(sumOfCircleCircumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Giancarlo', 'Massoni');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
var sumOfCube = cube(5);
console.log(sumOfCube);
