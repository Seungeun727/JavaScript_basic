// JS 코딩의 기술 공부

// 객체 펼침 연산자
// 1. 키 : 값 쌍의 목록을 반환함
// 2. 새로운 데이터를 펼침 연산자의 앞과 뒤에 추가 가능함.
// 3. 독립적 사용 x, 객체에 펼쳐지게 해야 함.

// book 객체 생성
const book =  {
  title: 'Reasons and Persons',
  author: 'Derek Parfit'
};

const updateBook = {...book, year: 1984 };
console.log("updateBook", updateBook);  

// result :  { title: 'Reasons and Persons', author: 'Derek Parfit', year: 1984 }

const updateBook2 = {...book, title: 'Reasons & Persons'};
console.log('updateBook2', updateBook2);  

// result : { title: 'Reasons & Persons', author: 'Derek Parfit' }


// Object.assign()을 이용해서 데이터 갱신

const defaults = {
  author: '',
  title: '',
  year: 2017,
  rating: null
};

const book2 = {
  author: 'Joe Morgan',
  title: 'Simplifying JavaScript'
};

const addDefaults = Object.assign({}, defaults, book2);
console.log("addDefaults result", addDefaults);  

// addDefaults result
// {
//   author: 'Joe Morgan',
//   title: 'Simplifying JavaScript',
//   year: 2017,
//   rating: null
// }

// 객체 펼침연산자 사용
const default2 = {
  title: '',
  author: '',
  year: 2017,
  rating: null
};

const book3 = {
  author: 'Joe Morgan',
  title: 'ES6 Tips'
};

const bookWidthDefaults = {...default2, ...book3};
console.log("bookWidthDefaults", bookWidthDefaults);   
// result : { title: 'ES6 Tips', author: 'Joe Morgan', year: 2017, rating: null }


// Object.assign()에서 발생되는 깊은 복사 
const defaultEmployee = {
  name : {
    first: '',
    last: ''
  },
  years: 0
};

const employee2 = Object.assign(
  {}, 
  defaultEmployee, 
  {
    name: Object.assign({}, defaultEmployee.name)
  },
);

console.log("employee2", employee2);      // result: { name: { first: '', last: '' }, years: 0 }


// 해당 부분을 객체 펼침 연산자를 사용해서 바꿔보기
const employee3 = {...defaultEmployee, name: {...defaultEmployee.name }};
console.log("employee3", employee3);      // result : { name: { first: '', last: '' }, years: 0 }

// 객체 펼침 연산자의 장점
// 1. 코드 가독성이 쉬움
// 2. 객체 생성의 명확한 의도를 타인에게 전달함.
// 3. 조작 우려 감소