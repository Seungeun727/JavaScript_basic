// 구조 분해 할당
const user = {
  // key: value
  name: 'James',
  age: 85,
  email: 'tsdfjks@gmail.com',
  address: 'USA'
} 
// user 객체 데이터에서 구조 분해해서 원하는 속성만 꺼내서 사용하는 것.
const { name: james, age, address = 'Korea' } = user;

console.log(`사용자의 이름은 ${james}입니다.`);
console.log(`${james}의 나이는 ${age}세 입니다.`);
console.log(`${james}의 이메일 주소는 ${user.email} 입니다.`);
console.log(user.address);  

const fruits = ['Apple', 'Banana', 'Cherry'];
// const [a, b, c, d] = fruits;  // 배열 데이터는 이름으로 구조 분해가 아닌 순서대로 구조 분해함.
// console.log(a, b, c, d);

const [, , b] = fruits;
console.log("B의 데이터 :", b);