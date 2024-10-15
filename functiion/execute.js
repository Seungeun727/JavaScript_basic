// 참고: 생활 코딩 자바스크립트
// 목표: Execute Context

// 실행 컨텍스트(Execute Context)
// 실행 가능 코드를 실행하기 위한 필요한 환경 정보를 모은 객체
// global, evel() 함수, 함수 


// 1. global execute context
// 전역 영역에 존재하는 코드  
// 키워드 없이 변수를 선언하면 무조건 global scope에 저장된다.

// a = 1;   // global
var a2 = 1;  // global
let a3 =  1;  // script
const a4 = 1; // script


// 2. function execute context 
// 함수 실행 컨텍스트로 실행하면 실행 컨텍스트 스택 생성/소멸한다.  

// 전역 컨텍스트 ===> 1.
var c = 5;  // 전역 변수 

function testFunc()  {
  // b = 1;     // global
  var b2 = 1;   // local
  let b3 = 1;   // local
  const b4 = 1; // local

  // 3. inner 함수 컨텍스트 
  function check () {  // 내부 함수 
    var d = 10;   // 지역 변수 
    console.log(b2, c, d);
  }
  check();  // ===> (3)
}

testFunc();  // ===> (2) 

// 실행 컨텍스트 호출 스택 순서
// 호출 스택 : 실행 컨텍스트를 저장하는 스택 자료구조(LIFO 구조)임.
// 1(전역컨텍스트)=> 2 => 3 => 2 => 1(전역 컨텍스트)

console.log(typeof window === undefined) 


// 실행 컨텍스트 스택 순서 복습
let mango = 10;

function func1() {
  func2();
}

function func2() {
  let apple = 5;
  console.log(`inner func2 mango: ${mango}, apple: ${apple}`);
}
func1();  
console.log("global variables mango", mango);

// 콜 스택 순서
// 1. 실행 후 전역 컨텍스트에 스택에 push(삽입)한다.
// 2. func1()를 실행 후 func1()의 함수 실행 컨택스트가 push(삽입)한다.
// 3. func2()를 실행 후 func2()의 함수 실행 컨택스트가 push(삽입)한다.
// 4. func2()의 실행 끝나면 func2()의 함수 실행 컨텍스트 pop(제거)한다.
// 4. func1()의 실행 끝나면 func1()의 함수 실행 컨텍스트 pop(제거)한다.
// 5. 전역 실행 컨텍스트가 (pop)제거된다.
