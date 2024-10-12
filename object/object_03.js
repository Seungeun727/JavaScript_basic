// 참고: JS 코딩의 기술
// 프로젝트 중 filter, map을 이용하였지만 제대로 파악하기 위해 공부

// map과 펼침연산자로 객체 순회 
// map 사용 : { 키 : 값 } 컬렉션의 데이터를 자주 삭제/추가하는 경우 적합함

const filters = {
  color: 'black',
  breed: 'Labrador Retriever'
};

// 객체에 순서를 보장하지 않음 => 정렬하지 못함..

function getAppliedFilters(filters) {   // 인자로 filters 받음
  const keys = Object.keys(filters);  
  console.log("keys", keys);
  const applied = [];
  for( const key of keys) {
    applied.push(`${key}:${filters[key]}`);
  }
  return `선택한 조건은 ${applied.join(',')} 입니다.`;
}

// 객체의 순서 보장을 위해 키를 정렬한뒤 필터링 조건을 정렬한다.

const filters2 = {
  color: 'black',
  breed: 'Labrador Retriever'
};

function getAppliedFilters2(filters2) {   // 인자로 filters 받음
  const keys = Object.keys(filters2);  
  keys.sort();
  // console.log("keys", keys);
  const applied = [];
  for( const key of keys) {
    applied.push(`${key}:${filters2[key]}`);
  }
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}

// map()은 정렬과 순회의 기능이 내장되어 있음 => 장점.

const filters3 = new Map()
  .set('color', 'black')
  .set('breed', 'Labrador Retriever');

function checkFilters(filters3) {
  for (const entry of filters3) {
    console.log("entry", entry);
  }
}
console.log(checkFilters(filters3));

// result 
// ['color', 'black'],
// ['breed', 'Labrador Retriever']

// entries() : 맵에 있는 키:값 쌍을 묶은 맵이터레이터를 반환함. (다시 이해)
// filters2.entries();


// getAppliedFilters2 최소화
const filters4 = {
  color: 'black',
  breed: 'Labrador Retriever'
};

function getAppliedFilters3(filters4) {
  const applied = [];
  for (const [key, value] of filters4) {
    applied.push(`${key}:${value}`);
  }
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}


// 맵도 배열과 같이 펼침 연산자를 사용한다.
const animal = {
  color: 'black',
  breed: 'Labrador Retriever'
};

// const animal = new Map()
//   .set('color', 'black')
//   .set('breed', 'Labrador Retriever');

// console.log("animal data", [...animal]);
console.log("animal data", animal);


function sortByKey(a, b) {
  return a[0] > b[0] ? 1 : -1;  // 삼항 연산자
}

function getSortedAppliedFilters(animal) {
  const applied = [];
  for (const [key, value] of [...animal].sort(sortByKey)) {
    applied.push(`${key}:${value}`);
  }
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}

// 위의 최소화
function getSortedAppliedFilters2(animal) {
  const applied = [...animal].map(([key, value]) => {
    return `${key}:${value}`;
  });
  // for (const [key, value] of [...animal].sort(sortByKey)) {
  //   applied.push(`${key}:${value}`);
  // }
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}


// sort(), join() 사용 => 다시 이해 필요.. 
function getSortedAppliedFilters2(animal) {
  const applied = [...animal]
    .sort(sortByKey)
    .map(([key, value]) => {
      return `${key}:${value}`;
    })
    .join(', '); 
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}