// 목표 : 함수 프로퍼티 
// 함수의 자료형은 객체이다.

// PART1. name 프로퍼티
// * 함수의 이름명을 값으로 가져온다.

// 1. 함수 선언식
function sayHi() {
  console.log("Hello function");
}
console.log(sayHi.name);    // sayHi

// 2. 익명 함수 표현식
let sayHi2 = function() {
  console.log("Hello sayHi2 Function!");
}
console.log(sayHi2.name);   // sayHi2

// 3. 기명 함수 표현식
// * 기명을 통해 함수 내에서 본인을 참조할 수 있음.
// * 기명 함수 표현식 외부에서는 사용하지 못함.
// * 함수 선언문은 내부 이름 지정할 수 없음.
let sayHi3 = function func(name) {
  if (name) { 
    console.log(`Hello ${name}`);   // Hello Guest
  } else {
    // sayHi3(`${name}은 손님입니다.`);    // TypeError: sayHi3 is not a function
    func("Guest");
  }
};

let visitant = sayHi3;
sayHi3 = null;
visitant();  

// func();   // ReferenceError: func is not defined

function func2(sayHi4 = function() {}) {
  console.log(sayHi4.name);  // sayHi4
}
func2();

// 4. 객체 / 배열 
let user = {
  name: 'Anna',
  loud() {
    return `${this.name}이 소리를 크게 냅니다.`;
  },
  sayBye() {
    return `${this.name}이 잘가라고 합니다.`;
  }
};

console.log(user.loud.name);  // loud
console.log(user.sayBye.name);  // sayBye

let arr = [ function() {}];
console.log(arr[0].name);  // 이름을 추론하지 못하므로 빈문자열 출력함

// PART2. length 프로퍼티 
// 함수 매개변수의 개수를 반환함.(나머지 매개변수는 포함되지 않음)
// 다른 함수 내 동작하는 함수 동작을 검사 시 사용함.

function funtion1(a) {}
function funtion2(a, b) {}
function otherFunction(a, b, ...more) {}

console.log(funtion1.length);   //  length: 1
console.log(funtion2.length);   //  length: 2
console.log(otherFunction.length);   //  length: 2 => 나머지 매개변수는 포함 안됨.


// PART3. 커스텀 프로퍼티 
// * 프로퍼티는 변수가 아님을 주의하자.
function sayHi4() {
  console.log("sayHi4 function");
  sayHi4.counter++;
}
sayHi4.counter = 0;

sayHi4();
sayHi4();