// fastcampus 개념 정리본
// 배열 
const numbers1 = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

console.log(numbers1[1]);
console.log(fruits[2]);

// .length
console.log(numbers1.length);  // 4
console.log(fruits.length);  // 2
console.log([1, 2].length);   // 2

console.log([].length);    // 0


// .concat() 
const num = [1, 2, 3];
const fruits2 = ['Banana', 'Orange', 'Mango'];

// concat() : 두 개의 배열 데이터를 합쳐서 새로운 배열을 반환
// => 원본 데이터는 유지됨
console.log(num.concat( fruits2));  
console.log(num, fruits2);

// .forEach() 
// : 배열 데이터 총 개수만큼 특정한 Callback을 반복적 실행하는 용도.
fruits.forEach(function (item, index, array) {
  console.log("forEach ", item, index, array);
})

// fruits.forEach(function (fruit, i) {
//   console.log("forEach ", fruit, i);
// })

// .map() 
// forEach()는 반환되는 값이 없음
// map()는 Callback 반환된 특정 데이터를 기준으로 새로운 배열을  반환 
const fruit2 = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`);
})
console.log(fruit2);   // result: undefined 

const b = fruits.map((fruit, index) => ({
  id: index,
  name: fruit
}))
console.log(b);

// .filter()
// 어떠한 배열 데이터 내 아이템들을 특정한 기준으로 필터링하여 새배열로 반환
// maps(), filter() 원본 데이터의 영향을 주지않고 새로운 배열 생성함.

const numMap = numbers1.map(number => number < 3)
console.log(numMap);  // [true, true, false, false]

const numFilter = numbers1.filter(number => number < 3)
console.log(numFilter);   // [`, 2]

// .find(), .findIndex()
// .find() : callback함수로 배열 내부 순환하여 특정 조건 충족시 true/false 반환함.
// .findIndex() : callback 함수로 배열 내부 순환하여 배열 인덱스 반환함
const fruitFind = fruits.find(fruit => /^C/.test(fruit));  // /^B/: B로 시작하는 문자 데이터
console.log(fruitFind);

const fruitFindIndex = fruits.findIndex(fruit => /^C/.test(fruit));  // /^B/: B로 시작하는 문자 데이터
console.log(fruitFindIndex);

// .includes() 
//  : 배열 데이터에서 인수로 데이터가 포함되는지 true/false 반환
const numIncludes = numbers1.includes(3);
console.log(numIncludes);   // true 반환

const x = numbers1.includes('Mango');
console.log(x);    // 배열 내 해당 데이터가 없으므로 false 반환함.

// .push(), .unshift()
// !! 원본 데이터 수정되므로 주의할 것 !!
// .push(): 배열 데이터 뒤.쪽.에 원소를 삽입함.
// .unshift(): 배열 데이터 가장 앞.쪽.에 원소를 삽입함
numbers1.push(5);
console.log("numbers Array Result: ", numbers1);   // [1, 2, 3, 4, 5]

numbers1.unshift(0);
console.log("numbers Array Result: ", numbers1);   // [0, 1, 2, 3, 4, 5]

// .reverse() : 배열 내 데이터 역순 정렬함
// 원본 데이터 수정되는 것을 주의하자
numbers1.reverse();
fruits.reverse();

console.log("numbers1 result: ",numbers1); // [5, 4, 3, 2, 1. 0]
console.log("fruits Array Result: ", fruits);  // ['Cherry', 'Banana', 'Apple']

// .splice() : 배열 인덱스 특정 요소 수정
// 원본 데이터 수정되는 것을 주의하자
// numbers.splice(시작할 인덱스, 삭제할 요소의 개수, 추가될 요소들...)
const num1 = [1, 2, 3, 4]
const fruit = ['Lemon', 'Melon', 'Mango'] 
num1.splice(2, 1, 999); 
console.log(num1);  // [1, 2, 999, 4]

fruit.splice(2, 0, 'Orange')
console.log(fruit)  // ['Lemon', 'Melon', 'Orange', 'Mango'] 

// 펼침 연산자(spread operator)

// push() 등 데이터 혼란, 부수효과를 방지할 수 있다.(원본 배열 변화 x)

// 1. 각 요소를 전개
const a = [1, 2, 3];
console.log(...a);   

// 2. 배열 리터럴 전개
const numbers = [1, 2, 3];
const numbers2 = [...a];

console.log(numbers === numbers2);

const item1 = ['Onion', 'Grape', 'Cucumnumbers2er'];
const item2 = [...item1, 'Carrot'];
console.log(item2);   // [ 'Carrot', 'Onion', 'Grape', 'Cucumnumbers2er' ]


// 3. 원본 데이터 부수효과 발생 예제

// 3-1 push()로 원본 데이터 영향 받음
const arr = [10, 20, 30];
const arr2 = [40, 50, 60];

arr.push(arr2);
console.log(arr);    // [ 10, 20, 30, [ 40, 50, 60 ] ]

// push()로 인한 원본 데이터 영향 받지 않음
const arr3 = [10, 20, 30];
const arr4 = [40, 50, 60];
const arr5 = [...arr3, ...arr4];
console.log(arr5);   // [ 10, 20, 30, 40, 50, 60 ]


// 3-2 push()로 원본 배열 데이터에 영향을 준 결과
const items = ['Computer', 'Mouse', 'Headset', 'iPad'];

function testFunc(items, input) {
  if (!items.includes(input)) {
    items.push(input);
    return items;
  }
  console.log(items);
  return items;
}

testFunc(items, 'Speaker'); 
console.log(items);  // [ 'Computer', 'Mouse', 'Headset', 'iPad', 'Laptop' ]


// push()를 쓰지 않고 원본 배열 데이터 유지.
const list = ['Computer', 'Mouse', 'Headset', 'iPad'];
function testFunc2(list, input) {
  if (!list.includes(input)) {
    // list.push(item);
    const newItems = [input,...list];
    return newItems;
  }
  return list;
}

testFunc2(list, 'Speaker'); 
console.log("list result:", list);  // [ 'Computer', 'Mouse', 'Headset', 'iPad' ]


// 다양하게 연습해보기

// 1. 평균 값 구하기
const number3 = [1, 10, 20, 15, 30];

function averageFunc(num1, num2, ...rest) {
  rest = [num1, num2, ...rest];
  const addNum = [...rest].reduce((prev, curr) => prev += curr, 0);
  return addNum / rest.length;
}

averageFunc(...number3);


// 2. 재복습
const list2 = ['Banana', 'Grape', 'Plum'];

// const test = ...list2;  // SyntaxError: Unexpected token '...'
const list3 = [...list2];

console.log(list2 === list3);   // false
console.log(list3);             // [ 'Banana', 'Grape', 'Plum' ]
console.log(...list3);          // Banana Grape Plum


// 다차원 배열 복사가 펼침연산자가 적합하지 않은 경우 
// 참고: Javascript mdn

// 배열 복사 시 1레벨 깊이에서 동작한다.
let a1 = [[1], [2], [3]]; 
let b1 = [...a1];

b1.shift().shift();   
console.log("a1 result", a1);  //  [ [], [ 2 ], [ 3 ] ]
console.log("b1 result", b1);  //   [ [ 2 ], [ 3 ] ]


// 객체에서 전개 연산자 

// 객체 리터럴 전개
// 얕은 복사로 새로운 객체를 복사하한다.
const book = {
  title: 'The Adventures of Huckleberry Finn',
  author: 'Mark Twain',
  createdAt: '1885'  
};

const newBook = {
  title: 'The Da Vinci Code',
  author: 'Daniel Brown',
  createdAt: '2003.03.18',
  language: 'English'
};

const updatedBook = {...book, ...newBook};
console.log(updatedBook);


// 깊은 병합에서 전개 연산자
// 참고: JS 코딩 기술 - 객체 펼침 연산자

const staffInfo = {
  staff: [
    {
      name: '',
      age: 0,
      gender: ''
    }
  ],
  open: false,
  holiday: ['Monday', 'Tuesday'],
};

const newStaff = {
  ...staffInfo, 
  staff: {
    name: 'Mike',
    age: 25,
    gender: 'male',
  },
  ...staffInfo.holiday
};

console.log(staffInfo === newStaff);  // false
console.log(staffInfo.holiday, newStaff.holiday);  // true


// 펼침연산자 => 함수 사용
const movie = ['Good Will Hunting', 'Gus Van Sant', 'Matt Damon' ];

function printMovie(title, ...rest) {
  return `${title}에서 ${rest[1]} 배우가 출연했습니다.`;
}

printMovie(...movie);


const productList = ['icecream', 'bread'];

function checkItems(...items) {
  return items.indexOf('icecream') === 0 ? "포함" : "미포함" ;
}

checkItems(...productList);

// Array prototype
// * Array => Array.prototype => Object.prototype

const arr1 = [];
const obj = {};

console.log(arr1);
console.log(arr1.__proto__);             // Array(0) => Array.prototype 확인
console.log(arr1.__proto__.__proto__);   // Object   => Object.prototype 확인
console.log(arr1.prototype);             // undefined


// 배열과 객체 타입 체크 
console.log(typeof arr1);   // object
console.log(typeof obj);   // object