//  Q # 1

let fNumber = +prompt("Enter the first number:");
let snumber = +prompt("Enter the second number:");

if (fNumber > snumber) {
  console.log(fNumber + " is larger.");
} else if (snumber > fNumber) {
  console.log(snumber + " is larger.");
} else {
  console.log("The two numbers are equal.");
} 

// Q # 2

let num = +prompt("Enter a number:");
let sign = "";

if (num > 0) {
  sign = "+";
} else if (num < 0) {
  sign = "-";
} else {
  sign = "Neither positive nor negative";
}

alert("The sign is " + sign);

// Q # 3

let num1 = +prompt("Enter the first number:");
let num2 = +prompt("Enter the second number:");
let num3 = +prompt("Enter the third number:");
let num4 = +prompt("Enter the fourth number:");
let num5 = +prompt("Enter the fifth number:");

let largest = num1;

if (num2 > largest) {
  largest = num2;
}

if (num3 > largest) {
  largest = num3;
}

if (num4 > largest) {
  largest = num4;
}

if (num5 > largest) {
  largest = num5;
};

console.log("The largest number is " + largest);

// Q # 4

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  };

// Q # 5

let mark1 = 80;
let mark2 = 75;
let mark3 = 92;
let mark4 = 61;
let mark5 = 45;

let average = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;
console.log("The average marks are " + average);

if (average < 60) {
  console.log("The grade is F");
} else if (average < 70) {
  console.log("The grade is D");
} else if (average < 80) {
  console.log("The grade is C");
} else if (average < 90) {
  console.log("The grade is B");
} else {
  console.log("The grade is A");
}

// Q # 6

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

// Q # 7

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
  


