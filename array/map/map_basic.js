// Map
// 1. 키 저장
// 2. 다양한 자료형 허용

let map = new Map();


// map.set key로 value 저장
map.set('1', 'str');
map.set(1, 'num1');
map.set(true, 'bolean');

// map.get : 키에 해당하는 value 반환
map.get(1);   // num1;

// map.has : key 존재 시 true, 존재 x => false 반환
map.has(1);

// map.clear() :  맵 안의 모든 요소를 제거함
map.clear();

// map.size : 요소의 개수를 반환
map.size;

let person =  { name: 'Harry', age: 18 };
let admin = new Map();
admin.set(person, true);


// 배열 문제 풀기

let numArr = [ 1, 2, 4, 6, 8, 10];

let doubleArray = numArr.map(function(el) {
  return el * 2;
});

console.log("double Array result: ", doubleArray);

let numArr2 = [ 1, 2, 3, 4];

let doubleArray2 = numArr2.map(num => num * 3);
console.log("dobuleArray2 result: ", doubleArray2);

// 베열 내 객체를 포함한 경우 map 이용
const users = [
  { name: 'John', age: 25},
  { name: 'Harry', age: 16},
  { name: 'Hermione', age: 17},
  { name: 'Ron Weasley', age: 15},
];
  
const students = users.map(user => user.name);
console.log("Array users Result: ", students); // [ 'John', 'Harry', 'Hermione', 'Ron Weasley' ]

let arr2 = [1, 2, 3, 4, 5];
let newArr2 = arr2.map(arr => arr + 1);
console.log("plus arr2 result : ",  newArr2);  //  [ 2, 3, 4, 5, 6 ]


// 참고: JS 코딩 기술
// MAP 객체 활용해보기 

const dogs = [
  {
    name: 'Max',
    size: 'small',
    breed: 'boston terrier',
    color: 'black' 
  },
  {
    name: 'Navi',
    size: 'large',
    breed: 'labrador letriever',
    color: 'brown' 
  },
  {
    name: 'shadow',
    size: 'large',
    breed: 'labrador letriever',
    color: 'black' 
  }
];


let filters = new Map()
  .set('breed','labrador letriever')
  .set('size','large')
  .set('color', 'black');

filters.get('size');


// let filters2 = new Map([
//   ['breed','labrador letriever'],
//   ['size','large']
//   ['color', 'black']
// ]);
// filters2.get('color');
// filters2.delete('color');
// filters2.get('color');

// console.log('filters Array Result', filters);

const petFilters = new Map();

function addPetFilter(filters, key,value) {
  filters.set(key, value);
}

function deletePetFilter(filters, key) {
  filters.delete(key);
}

function clearPetFilter(filters) {
  filters.clear();
}


let numbers = [ 1, 5, 6, 7, 15];

let numberFilters = numbers.map(function (number) {
  return number * number;
})

console.log("numberFilters Result : ",numberFilters)