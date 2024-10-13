// 참고: Javascript modern tutorial
// 목표: 함수 내 arguments 객체 이해

// PART 1. arguments
// ↪ 함수 호출시 전달되는 값으로 함수의 인수를 참조함.
// * [주의] 배열처럼 인덱스로 접근 가능하지만 arguments 객체는 배열이 아니다.(유사 배열 객체)
// * 전달 인자의 개수와 매개변수의 개수가 달라도 에러를 반환하지 않기에 더 많은 인수로 호출 가능함.
// * 모든 함수 내 사용 가능한 지역 변수
function addNumber(num1, num2) {
  console.log("args", arguments);                   // [Arguments] { '0': 50, '1': 30 }
  console.log("args first index", arguments[0]);    // 50
  console.log("args length", arguments.length);     // 2
  return num1 + num2;
}

addNumber(50, 30);

// arguments 객체를 array로 변환 
function minusNumber(num1, num2, ...more) {
  // let args = Array.from(arguments);
  let arr = [...arguments];
  console.log("minus function expect array", arr);   // [ 10, 5 ]
  return arr;
}

minusNumber(10, 5);

// arguments는 화살표 함수 지원하지 않는다.
function testFunction() {
  // 화살표 함수
  // * arguments 지원하지 않음
  // * this, super 바인딩 없으며 method 지원하지 않음.
  // * 생성자 지원하지 않음
  let showArg = () => console.log("arguments result", arguments);  //  [Arguments] { '0': 1 }
  showArg();
}

testFunction(1);

// 단, 화살표 함수를 arguments 접근하고 싶은 경우 나머지 매개변수를 활용할 것.
const testFunction2 = (...args) => {
  // console.log(arguments[0]);         // ReferenceError: arguments is not defined
  console.log("rest parameter", args);  //  [ 1, 2, 3 ]
}

testFunction2(1, 2, 3);   


// PART2. arguments 객체 실습으로 내용 정리

// 1. arguments 객체를 for문 이용 
function sum() {
  let result = 0;
  // arguments.length는 함수의 전달된 arguments 수를 반환함.
  console.log(arguments.length); 
  for(let i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 === 0) {
      result += arguments[i];
    } 
  }
  console.log(result);
  return result;
}

sum(1, 2, 3, 4, 5, 6);


// 2. arguments 객체를 배열 변환

// * arguments 객체는 유사 배열 객체이지만, 배열과 다르다.
function arrayFunction() {
  let arr = Array.prototype.slice.call(arguments);
  console.log("array", arr);                          // ['a', 'b']
  console.log("arr.length", arr.length);              // 2
  console.log("expect object", arguments instanceof Object);  // true 
}

arrayFunction('chair', 'desk');

// * arguments 객체는 length를 제외하고는 Array 속성은 없다. 
function arrayFunction2() {
  let arr = Array.prototype.slice.call(arguments);
  console.log("array", arr);                                  // [ 'Bindaetteok', 'Bibimbap', 'Gimbap', 'Haemulpajeon' ]
  console.log("array.indexOf", arr.indexOf('Haemulpajeon'));               // 3
  console.log("arguments.indexOf", arguments.indexOf('Haemulpajeon'));  // TypeError: arguments.indexOf is not a function
}
arrayFunction2('Bindaetteok', 'Bibimbap', 'Gimbap', 'Haemulpajeon');


// 3. arguments 객체를 이용한 화살표 함수
// * 화살표 함수는 arguments 객체를 지원하지 않는다.
// => 해결 방법 : '나머지 매개변수를 활용'한다. 

const restFunction = (...args) => {
  let result = [];
  console.log("restFunction parameter", args);  // [ 'APPLE', 'MANGO', 'ORANGE' ]
  for(let i = 0; i < args.length; i++) {
    result[i] = args[i].toLowerCase();
  }
  console.log("result Lower Case", result);  // [ 'apple', 'mango', 'orange' ]
  return result;
}

restFunction('APPLE', 'MANGO', 'ORANGE');   