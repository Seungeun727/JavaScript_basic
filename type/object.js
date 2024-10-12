// 참고 : Javascript 코딩의 기술 공부

// 객체
// 1. 변화가 없고 구조화된 키: 값을 다루는 데이터가 적합함. (정적 정보)
// 2. 자주 갱신되거나 실행되기 전 알 수 없는 동적 정보는 적합하지 않음.
// 3. 갱신, 반복, 정렬, 대체는 적합 x


// 객체 리터럴 :  중괄호에 키 : 값을 작성하는 것.
const colors = {
  red: '#d10202',
  green: '#19db36',
  blue: '#0e33d8'
};

// 2개 함수 적용해보기
function getBill(item) {
  return {
    name: item.name,
    // due: twoWeeksFromNow(item.weeks),
    // total: calculateTotal(item.price)
  };
}

const bill = getBill({
  name: '객실 청소',
  price: 30,
  weeks: 2
});

function displayBill(bill) {
  return `${bill.name}`
  // return `${bill.name} 비용은 ${bill.price} 달러이며 납부일은 ${bill.due} 입니다.`;
}

// Object.assign()
// 조작없이 객체를 생성함.
// 다른 객체의 속성을 이용해서 새로운 객체를 생성함.


const origin = {
  author: '',
  title: '',
  year: 2017,
  rating: null
};

const book = {
  author:'Joe Morgan',
  title: 'Simplefying JavaScript',
};

function addbook(origin, book) {
  // const fields = Object.assign(origin);
  // const updated = {};
  // for (let i = 0; i < fields.length; i++) {
  //   const field = fields[i];
  //   updated[field] = book[field] || origin[field];
  // }
  // return updated;
  Object.assign(origin, book);    // 코드 간결해짐과 동시에 원본 객체를 조작함.
}
 
console.log("origin data",  Object.assign(origin, book));

//  {
//   author: 'Joe Morgan',
//   title: 'Simplefying JavaScript',
//   year: 2017,
//   rating: null
// }


const authBook = {
  title: 'Another book',
  year: 2016
};

Object.assign(origin, authBook);
console.log("authBook data", Object.assign(origin, authBook));   

// authBook data {
//   author: 'Joe Morgan',
//   title: 'Another book',
//   year: 2016,
//   rating: null
// }

// 조작되려는 객체 피하는 방법
// 1. 첫 번째 객체에 빈 객체를 사용하여 새로운 값이 갱신되어 반환.

const origin2 = {
  author: '',
  title: '',
  year: 2017,
  rating: null
};

const book2 = {
  author:'Joe Morgan',
  title: 'Simplefying JavaScript',
};

const updatedData = Object.assign( {}, origin2, book2);
console.log("updatedData", updatedData);

// updatedData {
//   author: 'Joe Morgan',
//   title: 'Simplefying JavaScript',
//   year: 2017,
//   rating: null
// } 


// Object.asign()은 값이 다른 객체인 경우 문제가 발생함

const defaultStaff = {
  name : {
    first: '',
    last: ''
  },
  years: 0
};

const fixStaff = Object.assign({}, defaultStaff);
console.log("fixStaff data", fixStaff);  //  { name: { first: '', last: '' }, years: 0 }


// 깊은 복사 : 중첩된 객체가 있는 객체를 복사하는 것.
// 참조에 대한 복사만으로 깊은 복사를 수행할 수  없음
// => 원본 객체 혹은 복사 객체 중 객체의 값이 변경하면 원본 객체와 복사된 객체 둘다 변경됨.

fixStaff.name.first = 'Joe';
console.log("defaultStafff", defaultStaff);   // defaultStafff { name: { first: 'Joe', last: '' }, years: 0 }

// 증첩된 객체를 피하는 방법
// 1. 중첩된 객체를 만들지 않는다.
// 2. Object.assign()을 통해 중첩된 객체를 복사함.
// 3. lodash 라이브러리로 cloneDeeper() 사용함.

// 다시 공부 필요
const fixStaff2 = Object.assign(
  {}, 
  defaultStaff,
  {
    name: Object.assign({}, defaultStaff.name), 
  },
);