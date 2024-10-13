import { vegetables, device } from "../info/product.js";
// 목표: map을 이용하여 간단하게 만들어보기 

const arr = [1, 4, 9, 16];
const map = arr.map(x => x * 2);
console.log("map", map);

const words = ['comply', 'refrain', 'revise', 'deserve'];
const length = words.map(word => word.length); 
console.log("word length", length);

const cart = [...vegetables].map(obj => obj.price === 4000);
console.log("cart result:", cart);

const cart2 = vegetables.map(obj => obj.price === 4000);
console.log("cart2 result:", cart2);

const cart3 = vegetables.map(function(obj) {
  let newObj = {};
  newObj[obj.name] = obj.price;
  return newObj;
});

console.log("cart3 result:", cart3);

const formatDevice = device.map(function(obj) {
  let price = obj.price;
  let formatPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (price > 0) {
    return `${formatPrice}원`;
  }  
  return price;
});

console.log("formmtDevice result: ", formatDevice);

// 참고: Javascript mdn
// 목표: 불변 객체를 만드는 방법 

// PART1. 불변객체 만들기 전
// 원시타입은 값을 변경할 수 없다.
// 객체는 원시타입과 다르게 값을 변경할 수 있다.

// const
// 1. 블록단위 스코프로 변수 선언과 동시에 값을 할당해야 한다.
// 2. 재할당은 허용되지 못한다.

const nickName = "Alex";
// nickName = "James";    // TypeError: Assignment to constant variable.

// const로 객체 사용 시 재할당을 못하고 '속성은 변경'할 수 있다.(= 불변 객체가 아님.)
const school = {
  type: 'middle school',
  location: ['South korea', 'Seoul']
};
 
// school = { type: 'Elementary School'};  // TypeError: Assignment to constant variable.
school.type = 'Elementary School';         // 속성 변경됨을 확인

// 1. 깊은 복사를 수행하는 방법 
let fruit = {
  name: 'Apple',
  count: 5,
  producer: ["Jane", "mike"],
  etc: {
    createdAt: "2022-09-27",
    origin: 'South Korea'
  }
};

let deepCopyObj = (obj) => {
  let result = {};
  if (typeof obj === "object") {
    for (let key in obj) {
      result[key] = deepCopyObj(obj[key]);
    }
  } else {
    result = obj;
  }
  return result;
}

let newItem = deepCopyObj(fruit);
newItem.name = "Avocado";
// 중첩 범위 객체는 영향이 생긴다.
newItem.etc.origin = "America";
console.log("newItem obj === fruit obj", newItem === fruit);  // false

// 객체 내 배열이 있다면 ? 
// let device = {
//   code: "device",
//   admin: 'Jane',
//   type: [
//     { id: 1001, name: 'Laptop', price: 500000},
//     { id: 1002, name: 'IPad pencil', price: 100000},
//     { id: 1003, name: 'Headset', price: 80000},
//   ]
// };


let deepCopyObj2 = (inputObj) => {
  let newObj = [];
  if(Array.isArray(inputObj)) {
    if (typeof inputObj === "object") {
      for(let key of Object.values(inputObj)) {
        newObj = deepCopyObj2(key);
      }
    } else {
      newObj = inputObj;   // type: no object
    }
    return newObj;
  } else {
    return inputObj;
  } 
};

let newDevice = deepCopyObj2(device);
console.log("newDevice obj result: ", newDevice);

// object.freeze()
// 1. 불변 객체(다른 속성/추가 못함)로 만들어 프로타입 변경도 방지한다.
// 2. 읽기만 가능한 상태로 변경된다.
let obj = {
  title: "The Adventures of Tom Sawyer"
};
let obj2 = Object.freeze(obj);
// obj.title = "Le Petit Prince";

console.log("obj title : ", obj.title);
console.log("obj2 result : ", obj2);

// 객체 내 중첩된 객체가 있는 경우 영향을 받지 않고 속성을 변경 가능함.
// 해결 방안: 중첩 객체도 동결하려면 deep copy + 재귀함수를 수행한다.
let store =  {
  name: 'Fish Restaurant',
  cook: ['John', 'Jane'],
  address: {
    country: 'South korea',
    location: 'Jonglo logu'
  }
};

Object.freeze(store);             // 동결 적용
Object.isFrozen(store);           // 동결 확인 
// store.name = "Fish Restaurant2";  // 변경 방지
// store.cook = "Mike";              // 변경 방지
store.address.location = "Seoul";
console.log("store result: ", store);
console.log("store address result: ", store.address);      // { country: 'South korea', location: 'Seoul' }