// scope 
function scope() {
  if(true) {
    var a = 3 // 지역 변수
    console.log("local variable result: ", a);
  }
}
scope();


// Block level 
// 1. 함수 밖에서 선언하면 함수 스코프 변수처럼 전역 변수로 접근
// 2. 블록 안에서 설정 시 {} 내 해당 블록과 하위 블록에 접근

// 함수 level
// 1. 함수 내에서 선언된 변수는 함수 내에서 유효하고 함수 외부 참조 x


// 호이스팅
// 함수 선언부가 유효 범위 최상단 끌어올려지는 현상

const a1 = 7;

double(); 

function double() {
  console.log("const a1 result : ", a1 * 2);
}

// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 일정 시간 간격 함수 실행

// 타이머 함수
// const timer = setInterval(() => {
//   console.log('Heropy');
// }, 3000);

// const h1El = document.querySelector('h1');
// h1El.addEventListener('click', () => {
//   clearInterval(timer);
// });

// 콜백(callback)
// 함수의 인수로 사용되는 함수

function timeout(cb) {
  setTimeout(() => {
    console.log('Call back');
    cb()
  }, 3000)
}
timeout(() => {
  console.log('Done!');
})

// 생성자 함수 
// 1. 여러개 동일한 프로퍼티 가지는 객체 생성을 위해 필요성
// 2. prototype 이용하여 메모리 절감 필요

// const heropy = {
//   firstName: 'SeungEun',
//   lastName: 'Roh',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(heropy.getFullName())

// const secondID = {
//   firstName: 'minji',
//   lastName: 'park',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(secondID.getFullName())

// const thirdID = {
//   firstName: 'chanho',
//   lastName: 'park',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(thirdID.getFullName())


// function user(first, last) {
//   this.firstName = first
//   this.lastName = last
// }

// // user => 객체 Property
// const heropy =  new user('heropy', 'park')
// console.log(heropy)
// const heropy = {}


// 생성자 함수

function User(first, last) {  
  this.firstNum = first;
  this.lastNum = last;
  // this.getFullName = function() {
  //   return `${this.firstNume} ${this.lastNum}`;
  // }
} 
User.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}
const heropy = new user('minji', 'park');
const amy = new user('Amy', 'Clarke');
const neo = new user('Neo', 'Smith');

console.log(heropy.getFullName());
console.log(amy.getFullName());
console.log(neo.getFullName());