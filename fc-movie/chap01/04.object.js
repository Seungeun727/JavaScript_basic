// 객체
const userAge = {
  // key: value
  name: 'james',
  age: 85
}

const userEmail = {
  name: 'james',
  email: 'tsdfjks@gmail.com'
}

// Object 전역객체에 직접적으로 assign() 사용함
// assign()는 객체 데이터 자체에는 사용할 수 없음
// 대상 객체 : userAge, 출처 객체 : userEmail
const target = Object.assign(userAge, userEmail);
console.log(target);
console.log(userAge);
console.log(target === userAge);  // true => 같은 메모리 주소를 가리키고 있음

const a = { k: 123 };
const b = { k: 123 };
console.log(a === b);  
// false => 왜? 형태는 같아서 true라고 생각할 수 있지만 서로 다른 메모리 주소를 가리키고 있음
// ** 참조형 데이터(특정 메모리 주소 참조) - 객체, 배열, function

// 새로운 객체로 생성하고 싶은 경우
// 출처 객체에서는 원본 데이터가 손상되지 않음
// 대상 객체 : {},  출처 객체 : userAge, userEmail

const target2 = Object.assign({}, userAge, userEmail);
console.log(target2);
console.log(userAge);
console.log(target2 === userAge);

// 출처 객체의 원본 데이터 손상하지 않고 속성을 대상객체: {}로 옮겨서 Object.assign()으로 복사본 만듬
const target3 = Object.assign({}, userAge);
console.log(target2);
console.log(userAge);
console.log(target2 === userAge);

const user = {
  // key: value
  name: 'james',
  age: 85,
  email: 'tsdfjks@gmail.com'
} 

// Object.keys 정적 메소드를 통해 key값만 추출되어 새로운 객체 생성
const keys = Object.keys(user);  // ['name', 'age', 'email']
console.log(user['email']);

const values = keys.map(key => user[key]);
console.log(values);
