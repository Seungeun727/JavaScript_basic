// 학습 목표: Array 객체의 prototype 흐름 이해
// Array prototype
// * Array => Array.prototype => Object.prototype

const arr = [];
const obj = {};

console.log(arr);
console.log(arr.__proto__);             // Array(0) => Array.prototype 확인
console.log(arr.__proto__.__proto__);   // Object   => Object.prototype 확인
console.log(arr.prototype);             // undefined


// 배열과 객체 타입 체크 
console.log(typeof arr);   // object
console.log(typeof obj);   // object


// prototype 속성 수정
Array.prototype.hello = "hello";

// 생성자 함수로 객체 생성
const arr2 = new Array();

// __proto__
console.log(arr2.__proto__);        // Object(0) [ hello: 'hello' ]
console.log(arr2.__proto__.hello);  // hello
console.log(arr2.hello);            // hello

console.log(arr2.__proto__ === Array.prototype);               // true
console.log(arr2.__proto__.__proto__ === Object.prototype);    // true
console.log(arr2.__proto__.constructor === Array);             // true


// prototype 속성
console.log(Array.prototype);              // Object(0) [ hello: 'hello' ]
console.log(Array.prototype.constructor);  // [Function: Array]

console.log(Array.prototype.constructor === Array);   // true  


// 프로토타입 복습 
// 1. arr => Array.prototype => Object.prototype => null 
// 2. 프로토타입 체인: prototype 속성을 찾을 때까지 상위 프로퍼티를 탐색해서 가까운 속성을 반환함.
// 3. 배열의 프로토타입 체인의 끝은 null이다.
let myArr = new Array();
console.log(myArr.__proto__);                      // Array     
console.log(myArr.__proto__.__proto__);            // Object
console.log(myArr.__proto__.__proto__.__proto__);  // null


let obj2 = new Object();

// 자바스크립트 표준 내장 함수 객체 Object(), Array()는 prototype을 가진다.
Object.prototype.fruit="object apple";  
Object.prototype.furniture="object desk";

Array.prototype.fruit="array apple";
// Array.prototype.furniture="array desk";


// 1. 변수 myArr device 속성이 없는 경우 
console.log(myArr.device);    // undefined

// 2. 변수에 속한 속성이 없는 경우 =>  가장 가까운 Array 프로토타입에서 찾는다.
console.log(myArr.fruit);     // array apple

// 3. 변수 속한 속성, Array 프로타입이 없는 경우  => Object 프로타입에서 찾는다.
console.log(myArr.furniture); // object desk

// 4. 변수 속한 속성이 있는 경우
myArr.food = "myarr stake";
console.log(myArr.food);      // myarr stake


// Array.prototype.push
let cart = ["Carrot", "Onion"];

// __proto__는 생략이 가능하다. 
// push(): 배열 끝에 여러 요소를 추가한다.(원본 배열 변경)
cart.push("Avocado");
// pop(): 배열 끝에 마지막 요소를 제거한다.
cart.pop();