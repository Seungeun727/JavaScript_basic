// 참고- JS 코딩의 기술 

const { set } = require("lodash");

// map 사용시 부수 효과를 피하는 법

const defaults = new Map()
  .set('color', 'brown')
  .set('breed', 'beagle')
  .set('region', 'Kansas');

const filters = new Map()
  .set('color', 'black');

// defaults와 filters의 key값 확인
function applyDefaults(map, defaults) {
  for(const [key, value] of defaults) {
    if(!map.has(key)) {     // has(): 특정 요소를 포함한 요소를 선택
      map.set(key, value);
    }
  }
}

// 기본값만 아닌 사용자가 선택한 조작도 얻으려면
//  -> 맵의 사본 생성해야 부수적인 효과를 피할 수 있음.  
// 다시 이해하기.
function applyDeaults2(map, defaults) {
  const copy = new Map([...map]);
  console.log("copy", copy);
  for(const [key, value] of defaults) {
    if(!copy.has(key)) {
      copy.set(key, value);
    }
  }
  return copy;
}

const filters2 = new Map()
  .set('color', 'black')
  .set('color', 'brown');

  // 'color'를 가진 모든 값을 가지고 오는 게 아님
//  마지막으로 선언되는 값으로 갖고옴
filters2.get('color');  // result : brown


// 객체 펼침 연산자를 통해 맵 두개를 병합
let filters3 = new Map()
  .set('color', 'black');
  
let filters4 = new Map()
.set('color', 'brown');

let update = new Map([...filters3, ...filters4]);
update.get('color');


const defaults2 = new Map()
  .set('color', 'brown')
  .set('breed', 'beagle')
  .set('region', 'Kansas');


function applyDeaults3(map, defaults2) {
  return new Map([...defaults2, ...map]);
}

let student = new Map()
  .set('name', 'minsu')
  .set('name', 'minju');

let student2 = new Map()
  .set('name', 'jaeho')
  .set('name', 'james');

let updateProfile = new Map([...student, ...student2]);
console.log("updateProfile", updateProfile);  // result: { 'name' => 'james' }


// set를 이용해 배열의 고유값을 관리

// 배열인 dogs 생성
const dogs = [
  {
    name: 'Max',
    size: 'small',
    breed: 'Boston Terrier',      // breed: 견종
    color: 'black'
  },
  {
    name: 'donny',
    size: 'large',
    breed: 'Labrador Retriever',      
    color: 'black'
  },
  {
    name: 'shado',
    size: 'medium',
    breed: 'Labrador Retriever',      
    color: 'brown'
  }
];

// 1. 색상의 값을 담은 배열만 추출
function getColors(dogs) {
  return dogs.map(dog => dog['color']);
}

getColors(dogs);
// result : [ 'black', 'black', 'brown' ]


// 2. 중복 제거와 고유값만 추출
// 적기만 하였지만 흐름을 이해하자.

// 설명
function getUnique(attributes) {
  const unique = {};
  for (const attributes of attributes) {
    if(!unique.includes(attribute)) {    // includes()는 포함되었는지 확인하고 true/false 반환 
      unique.push(attribute);  // attribute의 값을 unique 빈 배열에 값을 삽입함
    }
  }
  return unique;
}

// const colors = getColors(dogs);
// getUnique(colors);

// map()과 달리 set()는 인스턴스 생성 시 인수를 배열로 받는다.(주의!)
const colors = ['black', 'black', 'brown'];   
const unique = new Set(colors);

console.log("unique", unique);   // result :  { 'black', 'brown'}


// 3. 고유 속성만 담김 배열을 펼침 연산자로 얻음

// 설명
function getUnique2(attribute) {
  return [...newSet(attributes)];
}

// Set()
//  add(), delete(), has(), clear() 사용 가능함.
let names = new Set();
names.add('joe');

console.log("names", names);

//  세트를 이용해 고유한 color 추출
function getUniqueColors(dogs) {
  const unique = new Set();
  for (const dog of dogs) {
    unique.add(dog.color);
  }
  return [...unique];
}

console.log(getUniqueColors(dogs));   // result : [ 'black', 'brown' ]

const dogList =[...dogs.reduce((colors, {color}) => colors.add(color), new Set())];
console.log("dogs", dogList);  // result :  [ 'black', 'brown' ]