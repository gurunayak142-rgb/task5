


//task-5
//1

function guru(a,b){
    console.log("addtion:",a+b);
    
}
 guru(10,20)

 //2
 function hello(a,b,c){
    console.log("multiplication:",a*b*c);
    
}
 hello(2,2,2)

 //3
 function nayak(a,b){
    return a-b
}
 let roko=nayak(10,20)
console.log(roko);

//5
function callback(){
    console.log("task completed");
    
}
callback()
//6
function high(){
    console.log("higher order function");
    
}
 
function low(){
    console.log("lower order function");
    
}
high(low(high()))
//7
function multiplication(result){
    console.log(result*2);
    
}
function addtion(a,b,callback){
   let total= a+b;

console.log(total);
callback(total)
}
addtion(10,22,multiplication)
//8
function call(){
    console.log("wellcome");
    
}
function call1(call){
    console.log("well");
    
}
call1()
//9 

const task = () => {
    console.log("Task Completed");
};

function execute(callback) {
    callback();
}

execute(task);
//10
function student() {
    console.log("Student Details");
}

function display(callback) {
    callback();
}

display(student);
//11
function* genator(){
    yield "nayak"
    yield "vijay"
    yield "rajiv"
    yield "guru"
    yield "teja"
}
const genators=genator()
console.log(genators.next());
console.log(genators.next());
console.log(genators.next());
console.log(genators.next());
console.log(genators.next());
console.log(genators.next());
//12
function* call(){
    yield 1
    yield 2
    yield 3
}
let calls=call()
console.log(calls.next().value);
console.log(calls.next().value);
console.log(calls.next().value);
console.log(calls.next(). value);
//13
function* callss(){
    yield 10
    yield 20
    yield 30
    yield 40
}
let callse=callss()
console.log(callse.next().value);
console.log(callse.next().value);
console.log(callse.next().value);
console.log(callse.next(). value);
//15
function* clas(){
    yield "Good morning"
    yield "Good Afternoon"
    yield "Good Night"
}
let helo=clas()
console.log(helo.next().value);
console.log(helo.next().value);
console.log(helo.next().value);
console.log(helo.next(). value);
//16
function* cal(){
    yield "10%cashback"
    yield "20%cashback"
    yield "30%cashback"
    yield "40%cashback"
    yield "50%cashback"
}
let oh=cal()
console.log(oh.next().value);
console.log(oh.next().value);
console.log(oh.next().value);
console.log(oh.next().value);
console.log(oh.next().value);
//part-3
//17
function student(name, department = "ECE") {
    console.log("Name:", name);
    console.log("Department:", department);
}

student("Guru");

// 18

function employee(name, designation = "Trainee") {
    console.log("Employee:", name);
    console.log("Designation:", designation);
}

employee("guru");

// 19

function details(name, age, city = "Chennai") {
    console.log(name);
    console.log(age);
    console.log(city);
}

details("guru", 24);

// 20

function student(name, department = "ECE") {
    console.log(name, department);
}

// Without optional argument
student("guru"); // guru ECE

// With optional argument
student("Arun", "CSE")

// 21

function product(name, price = 100) {
    console.log("Product:", name);
    console.log("Price:", price);
}

product("Laptop");
product("Mouse", 500);

// 22

function addition(a, b, c) {
    console.log(a + b + c);
}

addition(10, 20, 30);

// 23

function additions(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}

additions(10)(20)(30);

// 24

function student(name) {
    return function(age) {
        return function(city) {
            console.log("Name:", name);
            console.log("Age:", age);
            console.log("City:", city);
        };
    };
}

student("nayak")(22)("puttaparthi");


// 25

function multiplication(a) {
    return function(b) {
        return function(c) {
            console.log(a * b * c);
        };
    };
}

multiplication(2)(3)(4); 

// 26

function employee(name, role, salary) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Salary:", salary);
}

employee("Guru", "Developer", 25000);

// 27

// Normal Function

function addition(a, b, c) {
    console.log(a + b + c);
}

addition(10, 20, 30);


// Currying Function

function add(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}

add(10)(20)(30);

// 28

let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];

let result = [...arr1, ...arr2];

console.log(result); 

// 29

let fruits1 = ["Pineapple", "Papaya", "Watermelon", "Guava", "Kiwi"];

let fruits2 = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

let allFruits = [...fruits1, ...fruits2];

console.log(allFruits);

// 30

let original = [10, 20, 30, 40];

let copy = [...original];

console.log(original);
console.log(copy);

// 31

let employee1 = {
    name: "Guru",
    age: 24
};

let employee2 = {
    role: "Developer",
    salary: 250000
};

let employees = {
    ...employee1,
    ...employee2
};

console.log(employees);

// 32

let students = {
    name: "Guru",
    age: 22
};

let address = {
    city: "puttaparthi",
    state: "AP"
};

let detail = {
    ...students,
    ...address
};

console.log(detail);

// 33

let obj1 = {
    name: "Guru",
    age: 22
};

let obj2 = {
    name: "Arun",
    city: "Chennai"
};

let results = {
    ...obj1,
    ...obj2
};

console.log(results);



function numbers(a, b, ...remaining) {
    console.log("First:", a);
    console.log("Second:", b);
    console.log("Remaining:", remaining);
}

numbers(10, 20, 30, 40, 50);

function collect(a, b, ...numbers) {
    console.log(numbers);
}

collect(10, 20, 30, 40, 50, 60, 70, 80);

let number = [10, 20, 30, 40, 50, 60, 70];

let [a, b, c] = number;

console.log(a); 
console.log(b); 
console.log(c); 

// 37

let studentss = {
    name: "Guru",
    age: 22,
    location:"AP"
};

let { name, age, location } = studentss;

console.log(name);
console.log(age);
console.log(location);

// 38

function numbers(...values) {
    console.log(values);
}

numbers(10, 20, 30, 40, 50);

// 39

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let cop = [...num];

console.log(cop);

// 40

function student(name, age, ...marks) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Marks:", marks);
}

student("Mohan", 22, 80, 85, 90, 95, 88, 92);



// Mini Project Challenge – Student Information Management Program


let studentNames = ["Nayak", "Arun", "Hari", "Vijay"];

console.log("Student Names:", studentNames);


let student1 = {
    name: "Nayak",
    age: 22
};

let student2 = {
    department: "Computer Science",
    city: "AP"
};


let studentDetails = {
    ...student1,
    ...student2
};

console.log("Student Details:", studentDetails);


function calculateMarks(...marks) {
    console.log("Student Marks:", marks);
}

calculateMarks(80, 85, 90, 95, 88);

function displayStudent() {
    console.log("Name:", studentDetails.name);
    console.log("Age:", studentDetails.age);
    console.log("Department:", studentDetails.department);
    console.log("City:", studentDetails.city);
}

function studentInformation(callback) {
    callback();
}

studentInformation(displayStudent);


function departmentDetails(name, department = "CSE") {
    console.log("Student:", name);
    console.log("Department:", department);
}

departmentDetails("Guru");

function student(name) {
    return function(age) {
        return function(department) {
            console.log("Name:", name);
            console.log("Age:", age);
            console.log("Department:", department);
        };
    };
}

student("Guru")(22)("Computer Science");




