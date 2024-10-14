// JS 코딩의 기술 
// 반복문 

// 화살표 함수를 사용한 반복문 

// 화살표 함수를 사용하기 전의 예제

function captilze(name) {
  return name[0].toUpperCase() + name.slice(1);
}

// 화살표 함수를 사용 예제
// 화살표 함수의 필요성 : 불필요한 정보가 많은 경우

// 화살표 함수 변형 전
const captilze = (name) => {
  return name[0].toUpperCase() + name.slice(1);
}

// 함수를 화살표 함수로 변형
function greet(first, last) {
  return `Hello ${captilze(first)} ${captilze(last)} 님`;
}

// 매개 변수가 2개인 경우 ()로 담을 수 있음
const greet = (first, last) => {
  return `Hello ${captilze(first)} ${captilze(last)} 님`;
}

// return 문도 한줄에 표현 가능함
const greet = (first, last) => `Hello ${captilze(first)} ${captilze(last)} 님`;

// 화살표 함수를 익명 함수로 표현 가능함 (다시 이해 필요함)
function applyCustomGreeting(name, cb) {
  return cb(captilze(name));
}

// 매개 변수가 1개인 익명 함수
applyCustomGreeting('mark', function(name) {
  return `Hello ${name}`;
});

// 위에 예제인 익명함수를 화살표 함수로 변형
applyCustomGreeting('mark', name  => `Hello ${name}`);


// 예제를 바탕으로 직접 해보기

// person 배열 생성
const person = [ 
  { 
    name: 'Annna',
    age: 25,
    gender: 'female'
  }
];

console.log("person", person[0]);
console.log("person name", person[0].name);

// 함수를 화살표 함수로 변형 전 
function userList(person) {
  return `Hello ${person[0].name}님의 나이는 ${person[0].age} 입니다.`;
}

// userList(person);
console.log("userList", userList(person));

// 함수를 화살표 함수로 변형 후
const userList2 = (person) => {
  return `Hello ${person[0].name}님의 나이는 ${person[0].age} 입니다.`;
}
console.log("userList2", userList2(person));

// 함수를 화살표 함수로 변형, return문 제거 
const userList3 = (person) => `Hello ${person[0].name}님의 나이는 ${person[0].age} 입니다.`;
