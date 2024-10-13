// 데이터 불변성 
// 원시 데이터 : String, Number, Boolean, undefined, null

let a = 1;
let b = 4;
console.log(a, b, a === b); // false => 메모리 주소가 서로 다름 
b = a; // 재할당 
console.log(a, b, a === b); // true => 재할당을 통해 a와 b가 가리키는 메모리 주소가 같음
a = 7;
console.log(a, b, a === b); // false => a = 7 b =1 로 바라보는 메모리 주소가 다름 
let c = 1;
console.log(b, c, b === c); 
//  true => 새로운 원시 데이터가 메모리에 들어있다면 기존의 메모리 주소를 바라보는 것.

// 참조형 데이터: Object, Array, Function
// 1) 데이터 불변성이 없음.
// 2) 생김새가 같더라도 같은 데이터가 아닐 수도 있음 
// 3) 같은 메모리를 바라보고 있는 여러 변수에서 하나의 변수의 값 수정 시 다른 변수의 값도 바뀌어 있음.
// 4) 값을 할당 시 
let a = { k : 1};
let b = { k : 1};

console.log(a, b, a === b); // false => 서로 다른 메모리 주소를 가리킴.
a.k = 7;
b = a;
console.log(a, b, a === b); // true => 동일한 메모리 주소를 가리킴 
a.k = 2;
console.log(a, b, a === b); // true
let c = b;
console.log(a, b, c, a === c); // true 
a.k = 9;
console.log(a, b, c, a === c); // true => 같은 메모리 주소를 가리키고 있음

// 얕은 복사, 깊은 복사 

const user = {
  name: 'James',
  age: 85,
  emails: ['thescon@gmail.com']
};

// const copyUser = Object.assign({}, user);
const copyUser = {...user}
console.log(copyUser === user);   // 같은 메모리 주소를 가리킴 => true

user.age = 22;  
console.log('user', user); 
console.log('copyUser', copyUser); 

user.emails.push('nwe@zillnks.com');
// 다시 이해하기 
console.log(user.emails === copyUser.emails) // => true
