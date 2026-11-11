console.log(" PART 1: PRIMITIVE DATA TYPES ");

// Task 1
let studentName = "Ramnaraianan";
console.log("Student Name:", studentName);
console.log("Data Type:", typeof studentName);

// Task 2
let employeeAge = 23;
console.log("Employee Age:", employeeAge);
console.log("Data Type:", typeof employeeAge);

// Task 3
let isWorking = true;
console.log("Is Working:", isWorking);
console.log("Data Type:", typeof isWorking);

// Task 4
let unassigned;
console.log("Unassigned Variable:", unassigned);

// Task 5
let myString = "JavaScript";
let myNumber = 42;
let myBoolean = true;
let myUndefined;
let myNull = null;

// Task 6
console.log("String:", typeof myString);
console.log("Number:", typeof myNumber);
console.log("Boolean:", typeof myBoolean);
console.log("Undefined:", typeof myUndefined);
console.log("Null:", typeof myNull); // Important: typeof null is "object"

// Task 7
let courseName = "JavaScript";
console.log("Course Name:", courseName);

// Task 8
let batchNumber = 42;
console.log("Batch Number:", batchNumber);
console.log("Data Type:", typeof batchNumber);

console.log(" PART 2: ARRAYS ");

// Task 9
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
console.log("Fruits:", fruits);

// Task 10
console.log("First Fruit:", fruits[0]);

// Task 11
console.log("Third Fruit:", fruits[2]);

// Task 12
console.log("Last Fruit:", fruits[fruits.length - 1]);

// Task 13
let personalDetails = ["Ramnaraianan", 23, "Salem", "Java Developer"];
console.log("Personal Details:", personalDetails);

// Task 14
console.log("Name:", personalDetails[0]);
console.log("Age:", personalDetails[1]);
console.log("City:", personalDetails[2]);
console.log("Designation:", personalDetails[3]);

// Task 15
let mixedArray = ["JavaScript", 100, true];
console.log("Mixed Array:", mixedArray);

// Task 16
console.log("Total Elements:", mixedArray.length);

// Task 17
let mobileBrands = ["Apple", "Samsung", "Vivo", "Oppo", "OnePlus"];
console.log("Second Mobile Brand:", mobileBrands[1]);

// Task 18
let programmingLanguages = [
    "Java",
    "JavaScript",
    "Python",
    "C",
    "C++",
    "PHP"
];

console.log(
    "Last Programming Language:",
    programmingLanguages[programmingLanguages.length - 1]
);


console.log(" PART 3: OBJECTS ");

// Task 19
let student = {
    name: "Ramnaraianan",
    age: 23,
    city: "Salem"
};

// Task 20
console.log("Student Name:", student.name);

// Task 21
console.log("Student Age:", student.age);

// Task 22
let employee = {
    name: "Arun",
    salary: 25000,
    designation: "Software Developer"
};

console.log("Employee:", employee);

// Task 23
let developer = {
    skills: ["Java", "Spring Boot", "MySQL", "React", "JavaScript"]
};

console.log("Third Skill:", developer.skills[2]);

// Task 24
let toyCollection = {
    fruit: "Apple",
    number: 10,
    boolean: true,
    toy: "Car"
};

console.log("Toy Collection:", toyCollection);

// Task 25
console.log("Toy:", toyCollection.toy);

// Task 26
let company = {
    companyName: "TechNova",
    location: "Chennai",
    employeeCount: 50
};

console.log("Company:", company);

console.log(" PART 4: ARITHMETIC OPERATORS ");

// Task 27
console.log("Addition:", 20 + 10);

// Task 28
console.log("Subtraction:", 20 - 10);

// Task 29
console.log("Multiplication:", 2 * 3 * 4);

// Task 30
console.log("Division:", 100 / 5);

// Task 31
console.log("Remainder:", 25 % 4);

// Task 32
console.log("Exponentiation:", 3 ** 4);

// Task 33
let numA = 20;
let numB = 5;

console.log("Addition:", numA + numB);
console.log("Subtraction:", numA - numB);
console.log("Multiplication:", numA * numB);
console.log("Division:", numA / numB);
console.log("Modulus:", numA % numB);
console.log("Exponentiation:", numA ** numB);

console.log(" PART 5: INCREMENT AND DECREMENT ");

// Task 34
let preIncrement = 10;
console.log("Pre-increment:", ++preIncrement);

// Task 35
let postIncrement = 20;
console.log("Post-increment:", postIncrement++);
console.log("After post-increment:", postIncrement);

// Task 36
let preDecrement = 30;
console.log("Pre-decrement:", --preDecrement);

// Task 37
let postDecrement = 40;
console.log("Post-decrement:", postDecrement--);
console.log("After post-decrement:", postDecrement);


// Task 38

let a = 10;
let b = a++;

console.log("Task 38 - a:", a);
console.log("Task 38 - b:", b);


// Task 39

let x = 15;
let y = ++x;

console.log("Task 39 - x:", x);
console.log("Task 39 - y:", y);


// Task 40

let num1 = 25;
let num2 = --num1;
let num3 = num2++;
let num4 = ++num3;

console.log("Task 40 - num1:", num1);
console.log("Task 40 - num2:", num2);
console.log("Task 40 - num3:", num3);
console.log("Task 40 - num4:", num4);