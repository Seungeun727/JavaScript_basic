// 클로저를 통한 은닉화

// 1. 외부함수가 할당된 변수 counter를 호출하면 내부의 익명 함수를 참조한다.
// 2. 외부 함수가 실행이 끝나도 외부 함수 내 인자, 변수를 참조한다. (===> 자유 변수)

// 실행: 전역 렉시컬 환경:  makeCounter: function, counter: 사용x (초기화x)
// 실행: makeCounter 렉시컬 환경: 


// 클로저-은닉화 예제 함수 1

// 전역 스코프
function makeCounter() {
  let num = 0;  // 데이터 은닉화
  // 외부 함수 스코프
  return function() {
    // 내부 함수 스코프
    return num++;
  };
}

// 외부에서 makeCounter() 함수의 내부 변수 접근이 불가능하다.
// console.log(num);  // ReferenceError: num is not defined


// 전역 렉시컬 환경: makeCounter: function, counter: function
// makeCounter 렉시컬 환경: num: 0
let counter = makeCounter();

// console.log(counter());
// 익명함수 렉시컬 환경: num: 0
// console.log(counter());
// 익명함수 렉시컬 환경: num: 1
// console.log(counter());
// 익명함수 렉시컬 환경: num: 2


/** 클로저-은닉화 예제 함수 2
 * @param {string} name 
 * @returns string 반환함
 */

function printInfo(name) {
  let _name = name;  

  return function (hobby) {  
    console.log(`저의 이름은 ${_name} 이고 취미는 ${hobby}입니다.`);
  };
}

// 클로저로 독립적인 렉시컬 환경이 존재한다.
// 단점: 클로저 사용 시 메모리 차지로 인한 성능 저하
// => 클로저가 필요한 경우 사용하거나 사용 후 참조를 제거한다.
let result1 = printInfo('Mike');
let result2 = printInfo('Anna');
let result3 = printInfo('Yuna');

result1('춤');
result2('요리');
result3('노래');


// closure 예제 만들어보기 

// 전역 스코프
let c = 3;  

// 지역 스코프 
function basicFunc(a, b) {
  console.log(a + b + c);  // closure
  return a + b;
}

basicFunc(1, 5);

function calcMinus() {
  const x = 5;
  return function(y) {
    // console.log(x + y);
    return x - y;
  }  
}

let minus = calcMinus();
console.log(minus(2));


function repeatFunc() {
  // var (함수 단위 스코프로, 블록 밖에서 접근 가능함) => result: 4, 4, 4, 4 
  // let (블록 단위 스코프, 블록 밖에서 접근 불가능함) => result: 0, 1, 2, 3 
  for (let i = 0; i < 3; i++) {
    // for문 실행 후 setTimeout 함수가 실행된다.
    setTimeout(function() { 
      console.log(i);
    }, i * 1000);
  }
}

// repeatFunc();

// JS 200제 closure 참고하며 작성함.
function makeCount2() {
  let count = 0;
  return {
    updateCount() {
      return count++;
    },
    getCount() {
      console.log(count);
      return count;
    }
    ,
    multiplyCount(value) {
      console.log(count * value);
    }
  };
}

const setCount1 = makeCount2();
const setCount2 = makeCount2();

setCount1.getCount();
setCount1.updateCount();
setCount1.multiplyCount(5);