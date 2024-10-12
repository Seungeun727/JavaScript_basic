import { movieInfo, student, product } from '../info/basic.js';
// 참고: modern Javscript tutorial
// 객체의 얕은 복사와 깊은 복사 비교

// 1. 객체 얕은 복사 
// * 원본객체의 같은 메모리 공간(=주소값, 참조값)을 참조 한다.
// * 메모리 주소의 값이 변경시 원본 객체, 복사된 객체의 속성값도 변경된다.

// 일치 연산자로 객체 참조값 확인
let obj = { name: 'Alex'};
let obj2 = obj; 

// obj와 obj2는 같은 메모리 주소를 가리키고 있다.
console.log("obj, obj2 is match", obj === obj2);        // true
// 원본 객체의 속성을 수정하면 복사된 객체의 속성도 영향을 준다.
obj.name = "tonny";
console.log("name is match", obj.name === obj2.name);   // true


let user = { name: 'John'};

let address = {
  country: 'Korea',
  location: ['Seoul', 'Jongno-gu'],
  show: false
};

// Object.assign 얕은 복사
let copy = Object.assign(user, address);
copy.name = "Mike";
// 같은 메모리 주소를 참조한다.
console.log("copy, user is Match", copy === user);   // true               // true
// 변경된 name 속성이 두 객체에 적용되었다.
console.log("name property is Match", copy.name === user.name);  // true   // true 


const dog1 = { 
  name: 'Dubu', 
  breed: 'Maltese', 
  speed: 30,
  test: ['a', 'b'],
};

const dog2 = Object.assign({}, dog1);

// 주의 1) 중첩 객체의 참조 위치만 복사
// * Object.assign(), 전개연산자 동일(즉, 1레벨 깊이만 적용된다.) 
// * 서로 다른 메모리 주소를 참조하므로 dog1의 speed 속성만 변경된다.
dog1.speed = 50;     

console.log("dog1, dog2 is match", dog1 === dog2);                  // false
console.log("speed property is match", dog1.speed === dog2.speed);  // false: dog2.speed는 속성값이 변경되지 않음.
console.log("name property is match", dog1.name === dog2.name);    // true

// 즉, 객체 내 배열과 중첩 객체는 두 객체 모두 영향을 준다.
dog1.test.push('c');
console.log(dog1);   // { name: 'Dubu', breed: 'Maltese', speed: 50, test: [ 'a', 'b', 'c' ] }
console.log(dog2);   // { name: 'Dubu', breed: 'Maltese', speed: 30, test: [ 'a', 'b', 'c' ] }


// 주의2) for...in 객체 속성 순회 시 문제 [다시 생각해보기]
const obj5 = { a: 1, num: { x: 10, y: 20, z: 30 } };
const newObj2 = {};

for(let key in obj5) {
  newObj2[key] = obj5[key];
}

newObj2.a = 3;
newObj2.num.z = 20;
console.log("obj5", obj5);       // { a: 3, num: { x: 10, y: 20, z: 20 } }
console.log("newObj", newObj2);  // { a: 3, num: { x: 10, y: 20, z: 20 } }


// 2. 깊은 복사 
// * 원본 객체에 영향을 주지 않고 같은 구조를 가진 독립된 객체를 생성한다.
// * 중첩된 객체를 포함된 객체를 복사한다.

// 원시타입 깊은 복사
let x = 1;
let y = x;

// 변수 x의 값은 변경되지만 y는 영향 받지 않음
x = 10;
console.log(x, y);   // x: 10,  y: 1


// 참조타입 깊은 복사 

// * 중첩객체를 가진 객체는 '중첩객체의 참조 위치만 복사'한다.
// * 원본 객체의 데이터와 복사된 객체의 값이 변경된다.

const newMovie = Object.assign({}, movieInfo);
newMovie.actor.name = "James";
console.log(newMovie.actor.name);    // James: 복사된 객체의 데이터 변경
console.log(movieInfo.actor.name);   // James: 원본 객체의 데이터 변경


// 깊은 복사로 원본 객체 조작 피하는 방법.

// 1. JSON.Stringify()/JSON.parse() 사용.
// 참고: Javascript mdn 
// 객체 => JSON 문자열로 변환 => 새 객체 생성
let arr = ["noodles", { list: ["eggs", "flour", "water"]}];
let copyList = JSON.parse(JSON.stringify(arr));

copyList[1].list = ["rice flour", "water"];
console.log(copyList[1].list);  // [ 'rice flour', 'water' ]
console.log(arr[1].list);       // [ 'eggs', 'flour', 'water' ]


// 직접 객체에 적용해보기 
let obj6 = { name: 'Juice', etc: { size: 5, count: 5, sale: false }};
let copy2 = JSON.parse(JSON.stringify(obj6));

copy2.etc.sale = true;
console.log("obj6, copyObj6 is match", obj6 === copy2);              // false
console.log("nested obj is change", obj6.etc.sale, copy2.etc.sale);  // false, true


// 2. 전개 연산자를 활용한다.
let updatedProduct = {
  ...product,
  name: 'Carrot',
  volume: {
    count: 5,
    size: 'lg'
  },
};

console.log("product, updatedProduct is match", product === updatedProduct);      // false
console.log("name property is match", product.name === updatedProduct.name);      // false


const transfer = {
  ...student, 
  hobby: {
    ...student.hobby,
  },
};

transfer.hobby.level = 5;
// 원본 객체 영향 없음, 복사된 객체의 중첩 객체 속성만 변경되었다.
console.log("netsted object is change", transfer.hobby.level);   // 5


// 재귀 함수를 이용한 방법 
// 참고: modern Javascript, Haerang94 blog 깊은 복사 설명
// 기존 for...in으로 원시값 복사 이상 없음, 중첩 객체는 원본에도 영향을 미친다.
const person = {
  name: 'mike',
  age: '15',
  test: '',
  school: {
    grade: 0,
    class: 0,
    Tardy: 0,
  },
};

// 재귀함수
function recursiveFunc(inputObj) {
  let copyObj = {};
  // inputObj가 객체라면 재귀 호출하여 복사함.
  if (typeof inputObj === "object"){
    for(let key in inputObj) {
      copyObj[key] = recursiveFunc(inputObj[key]);
    }
  } else {
    // String, number, null 타입의 값을 담는다.
    copyObj = inputObj;
  }
  return copyObj;
};

let newPerson = recursiveFunc(person);
console.log(person === newPerson);    // false

// 복사된 객체의 속성 변경 시 원본 객체의 속성에 영향을 주지 않는다.
newPerson.name = "William";
console.log(newPerson.name);         // William
console.log(person.name);            // mike

// 중첩 객체 속성을 변경해도 원본 데이터에 영향은 없다.
newPerson.school.grade = 5;
console.log(person.school);         // { grade: 0, class: 0, Tardy: 0 }
console.log(newPerson.school);      // { grade: 5, class: 0, Tardy: 0 } 