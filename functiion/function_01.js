// 참고 - JS 코딩의 기술

// 목표 : 유연한 함수를 만드는 방법

// PART 1. 화살표 함수
const user = {
  first: 'Lemmy',
  last: 'Kilmister'
};

// console.log(user.first)
// function getName({first, last}) {
//   return `${first} ${last}`;
// }

// getName(user);

// const getName = { first, last } => `${first} ${last}`;

const comic = {
  first: 'Peter',
  last: 'Bagge',
  city: 'Seattle',
  state: 'Washington'
};
// 화살표 함수
// 1. 매개변수, 템플릿 리터럴 제거하고 => 추가함.
// 2. 특별한 매개변수 사용 시 () 붙여줘야 typeError 발생하지 않음.
// 3. 함수에서 객체를 반환하는 경우 return문 생략시 객체를 괄호로 묶어줄 것.

const getName = ({first, last}) => ({fullName: `${first} ${last}`});
getName(comic);
 
const getNameandLocation = ({first, last, city, state}) => ({
  fullName: `${first} ${last}`,
  location: `${city} ${state}`
});
getNameandLocation(comic);

// 고차 함수 예제
// const discounter = discount => {
//   return price => {
//     return price * (1 - discount);
//   };
// };
const discounter = discount => price => price * (1 - discount);
const tenPercentOff = discounter(0.1);
tenPercentOff(100);
discounter(0.1)(100);


// 공식문서 개념 정리
// ■ 화살표 함수
// this나 super 바인딩이 없고 methods로 사용못함
// 생성자로 사용할 수 없음

const elements = [
  'Hydrogen',
  'Helium',
  'lithium',
  'Beryllium'
];

// 새로운 배열을 반환함.
const test = elements.map(function(element) {
  return element.length;
});

// 화살표 함수는 매개변수, 리터럴 제외하고 => 붙인다.
const test2 = elements.map((element) => {
  return element.length;
})

// 파라미터가 하나일 경우 괄호를 생략할 수 있음.
const test3 = elements.map(element => {
  return element.length;
})

// return과 중괄호 생략 가능함.
const test4 = elements.map(element => element.length);

// 원하는 유효한 변수명으로 변경 가능함.
const test5 = elements.map(({ length:  lengthFooBArx }) => lengthFooBArx);

// 분해 파라미터 할당의 경우
const test6 = elements.map(({ length }) => length);


// 만들어보기
const products = [
  {
    name: 'Apple',
    price: 8000,
    count: 5,
    inventory: 10,
    managmentAdmin: 'James' 
  },
  {
    name: 'Mango',
    price: 7000,
    count: 1,
    inventory: 10,
    managmentAdmin: 'James' 
  },
  {
    name: 'Banana',
    price: 2500,
    count: 1,
    inventory: 10,
    managmentAdmin: 'James' 
  }
];

const getProductName = products.map(product => product.name);
console.log(getProductName);

// PART2. 부분적용 함수를 이용
const building = {
  hours: '8am. - 8pm.',
  address: 'Jayhak Blvd'
};

const manager = {
  name: 'Augsto',
  phone: '02-5555-5555'
};

const program = {
  name: 'Presenting Research',
  room: '415',
  hours: '3-6'
};

const exhibit = {
  name: 'Emerging Scholarship',
  contact: 'Dyan'
};

function getMergeProgramInformation(building, manager, event) {
  const { hours, address } = building;
  const { name, phone } = manager;
  const defaults = {
    hours, 
    address,
    contact: name, 
    phone
  };

  return program => {
    return { ...defaults, ...event};
  };
}

// 함수 분리
const programInfo = getMergeProgramInformation(building, manager, program);
const exhibitInfo = getMergeProgramInformation(building, manager, exhibit);


const fruits = ['Mango', 'Apple', 'Cherry'];

// 함수 이해
// 1. 문법 
/* 
// * 함수 선언
function(키워드) 함수 이름 (매개 변수) {
  // 함수 실행부
}
// * 함수 호출
// 함수 이름();
*/

// 2. 함수는 함수 선언문과 함수 표현식으로 구분된다.

// 함수 선언문
function getProductList1(fruits) {
  console.log("fruits2", fruits);
}
getProductList1('apple');

// 함수 표현식
// * 변수에 함수 리터럴을 할당함.
const productList= function(fruits) {
  console.log("product", fruits);
};
productList('banana');

// 호이스팅
// * 함수 선언부가 유효 범위 최상단 끌어올려지는 현상
// * 실제 메모리에는 영향 주지 않음.
// var과 함수 선언문은 호이스팅 대상에 포함된다.
// let, const, 함수 표현식에서는 동작하지 않음.

// 함수 선언문- 호이스팅
// 결과: 두 개의 함수 선언문은 정상적으로 결과를 반환한다.
declareFunction('Mike');  // result :  Mike
function declareFunction(name) {
  console.log("name_declare", name);
}

function declareFunction2(name) {
  console.log("name_declare2", name);
}
declareFunction2('Anna');  // result :  Anna


// 함수 표현식- 호이스팅
// 결과: let과 const, 함수 표현식은 호이스팅에 동작하지 않는다.
// expression();  // TypeError: expression is not a function
// var expression = function() {
//   console.log("expression function var");
// }

// var로 선언한 함수 표현식은 변수로 인식이 되어 undefined가 할당된다.
// undefined는 호출할 수 없기에 TypeError가 발생함.
var expressionTest;
expressionTest();  // TypeError: expressionTest is not a function
var expressionTest = function() {
  console.log("expression test var2"); 
}

expression2(); // ReferenceError: Cannot access 'expression2' before initialization
let expression2 = function() {
  console.log("expression function let");
}

expression3();   // ReferenceError: Cannot access 'expression' before initialization
const expression = function() {
  console.log("expression Function test");
}


// PART3. new Function()
// 1. 런타임 상 받은 문자열로 새로운 함수를 만든다.
// 2. 어떤 문자열 형태를 새로운 함수를 생성하고 실행할 수 있다.
// 3. Function 인스턴스는 .prototype에서 메서드, 속성을 상속받음
// ※ 단 꼭 필요한 경우에 사용하며, new 키워드로 함수 생성하지 않는 것을 권장함.
// ↪ new 연산자 없는 함수는 코드의 크기를 약 4byte 감소한다.

// 인수가 있는 경우
let sum = new Function('a', 'b', 'return a + b');  // 기본
let sum2 = new Function('a,b', 'return a + b');    // 쉼표 구분
let sum3 = new Function('a , b', 'return a + b');  // 쉼표, 공백 구분
console.log(sum(1, 2));

// 인수가 없고 함수 본문만 있는 경우
let func2 = new Function('console.log("newFunction start")');

// 자료형 확인
console.log(typeof func2);  // function
console.log(func2 instanceof Function);  // true