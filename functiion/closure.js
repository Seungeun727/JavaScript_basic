// 참고 - JavaScript modern tutorial

// PART1. 클로저
// * 함수와 함수가 선언됐을 때 어휘적 환경의 조합.
// * 렉시컬 환경(외부함수 기준으로 내부 함수가 선언된 스코프, 범위)을 기억하는 함수.

// 단점 - 클로저의 잘못된 관리로 메모리 누수가 발생할 수 있음.
// 장점 - 스코프를 통해 제한된 데이터를 저장

// 1. 외부 함수에 중첩된 내부 함수는 외부 함수 범위에서 선언한 변수를 접근 가능함 
function init() {  // 외부 함수
  var name = 'Mozila';      // 지역변수
  function displayName() {  // 내부 함수 
    console.log("displayName name", name);
  }
  displayName();
}
init();

// 2. 클로저가 만들어지면 어휘적 환경은 사라지지 않음.(어휘적 환경의 참조가 존재함)
// * makeFunction은 실행되고 displayName을 반환함
// * makeFunction의 함수 실행 컨텍스트는 제거되지만 렉시컬 환경은 여전히 존재함.
// * myFunc은 makeFunction이 실행되고 생성된 함수의 인스턴스 참조가 존재한다.

function makeFunction() {
  var name = 'Mozila';
  function displayName() {
    console.log("displayName name", name);
  }
  return displayName;
}

var myFunc = makeFunction();
myFunc();

function makeAdder(x) {
  var y = 1;
  return function(z) {
    y = 100;
    return x + y + z;
  };
}

// 둘 다 클로저이지만 각각 다른 렉시컬 환경에 값을 저장한다.
var add1 = makeAdder(5);   // 105
var add2 = makeAdder(10);  // 110

console.log(add1(2));   // 107
console.log(add2(2));   // 112

// PART2. new Function 함수의 closure
// 1. [[ Environmenrt ]] 프로퍼티는 현재 렉시컬 환경이 아닌 전역 렉시컬 환경을 참조함.
// 2. 자신의 지역변수와 전역변수에만 접근 가능하다. 

// new Function() 렉시컬 환경값 출력
function getFunc() {
  let value = "test";

  // 인수가 없고 함수 본문만 있는 경우
  let func = new Function('console.log(value)'); 
  return func;
}

getFunc()();  // ReferenceError: value is not defined


// 일반 함수의 렉시컬 환경 값 출력
function getFunc2() {
  let value = "test";
  
  let func = function() { console.log(value) };

  return func;
} 

getFunc2()();  // result: test => getFunc의 현재 렉시컬 환경값 출력


// new Function()의 ReferenceError 설명 예제
let x = 10;

function createFunc() {
  let x = 20;
  // 전역 변수 x의 값을 참조함
  return new Function('return x;');
}

function createFunc2() {
  let x = 20;
  function f() {
    return x;
  }
  return f;
}

// 브라우저 환경: 10
// 현재 node 환경 : ReferenceError: x is not defined
// → node.js의 최상위 스크립트 범위가 전역이 아닌 모듈로 x도 모듈 범위에 종속된다. 
let f1 = createFunc();
console.log(f1());  // 브라우저 정상 동작 시 10 / 현재는 node 환경으로 ReferenceError: x is not defined

let f2 = createFunc();
console.log(f2());  // 20