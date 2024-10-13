// 참고- Javascript Document
// 목표: for...in, for...of를 활용한 반복문 작성 

const firms = new Map()
  .set(10, 'Ivie Group')
  .set(23, 'Soundscaping Source')
  .set(31, 'Big 6');

console.log("firms", firms);

const entries = [...firms];

const firms2 = {
 '10' : 'Ivie Group',
 '23' : 'Soundscaping Source',
 '31' : 'Big 6',
};

// for...in과 for...of
// for...in : 객체의 모든 열거 가능한 속성을 반복함.
// for...of : 배열의 반복에서 사용함.

// for...in 
// 1. 객체의 모든 열거 가능한 속성의 반복을 위해 사용됨. 배열의 반복은 for...of가 이미 존재함
// 2. 객체의 속성 확인(특정한 키가 있는지 확인) => 디버깅에 사용됨.
// 3. 현재 속성을 기준으로 반복하는 객체의 속성, 추가, 삭제하지 않는 것을 가장 좋음.
// 4. for...in은 value값을 접근하기 위해 객체명[key 값]으로 접근해야 한다.
// 5. enumerable만 출력함 

// for (variable in object) {...}
const obj = { a: 1, b: 2, c: 3 };

for(const item in obj) {
  console.log(`${item} : ${obj[item]}`);
}

// for...in 예제 만들기
const structure = {
  libraries: '서울 도서관',
  librarian: 'James',
  holiday: 'every Monday',
  region: 'Seoul',
  createdAt: '2011.10.29'
};

for(key in structure) {
  // console.log(key, structure[key]);
  console.log(Object.getOwnPropertyDescriptor(structure, 'librarian'));
}

// enumerable 
// * 객체 속성에서 내부적을오 사용하는 숨겨진 속성들 중 하나가 enumerable임.
// * enumerable이 true만 for...in에서 반복해서 출력함.
// {
//   value: 'James',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }


// for...of
// 1. 반복 가능한 객체(Array, Map, Set, String, TypedArray 등) 컬렉션 전용 반복 구문

// for (variable of iterable) { statement }
// variable : 각 반복을 통한 서로 다른 속성 값이 variable 할당됨
// iterable : 반복되는 열거 가능한 속성이 있는 객체

// 기본 예제
const array = ['a', 'b', 'c'];

for (const element of array) {
  console.log("array element", element);
}

// 배열이 아닌 객체를 반복한다면 ?
// ※ TypeError: obj2 is not iterable 결과가 출력되므로 for...of는 배열의 반복을 하는 것을 증명함.
const obj2 = {'pencil' : 2, 'chair': 3, 'desk' : 4 };

for (const element of obj2) {
  console.log("obj2 element", element);
}

// 블록 내부 변수 let 대신 const 사용 가능함
// 단, (블록 내부 변수 수정하지 않을 때)
let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log("iterable value", value);
}

// TypedArray도 for...of 사용
let iterable2 = new Uint8Array([0x00, 0xff]);

for (let value of iterable2) {
  console.log("iterable2 value", value);
}

// Map도 for...of 사용
let iterable3 = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable3) {
  console.log("iterable3 entry", entry);
}
// reuslt 
// iterable3 entry [ 'a', 1 ]
// iterable3 entry [ 'b', 2 ]
// iterable3 entry [ 'c', 3 ]

let iterable4 = new Set([1, 1, 2, 2, 3]);

for (let value of iterable4) {
  console.log("iterable4 value", value);
}

// for...of 예제 만들어보기
// Map도 for...of 사용
let fruits = new Map([["Apple", 3], ["Banana", 2], ["Mango", 4]]);

for (let fruit of fruits) {
  console.log("fruits in fruit", fruit);
}

const numbers = [1, 3, 5, 9, 10];

for (const number of numbers) {
  console.log("numbers in number",number);
}