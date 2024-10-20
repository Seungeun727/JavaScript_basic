// 목표 : JS 함수 예외처리 방법

// 예외 정의 : 실행 중 프로그램에서 예기치 못한 상황 발생하여 진행할 수 없는 상황.


// 1. Throw문 : 고의로 에러 발생하여 예외 상황 알림. 
function checkNumberException(value) {
    if (typeof value !== 'number') throw '유효하지 않은 값: Error!';
    console.log('Return Type Number');
}
checkNumberException(100);    // Number => Return Type Number   
// checkNumberException(true);   // Boolean => 유효하지 않은 값: Error!

// throw 문의 한계 : 에러 발생하지만 프로그램 중단을 막을 수 없음
// =>  try-catch-finally문 이용해야 함


// 2. try-catch-finally 문
// try 블록 : 발생된 에러 정보를 처리함
// catch 블록 : 발생된 에러 정보를 변수로 전달하여 에러 발생 여부 확인
// finally : 에러 발생 여부 상관없이 무조건 실행됨
try {
    checkNumberException(100);   // 실행 코드
} catch (e) {    // e: 매개변수 사용
    console.log(`Error가 발생했습니다--!`);
} finally {
    console.log('함수가 완료했습니다.');
}

// checkNumberException(100);    // Number => Return Type Number   
// checkNumberException('100');  // String => 유효하지 않은 값: Error!
// checkNumberException(true);   // Boolean => 유효하지 않은 값: Error!

const value = 6;
setTimeout(function(value) {
    try {
      if(value%2 == 0) {
        console.log(`${value}는 짝수가 아닙니다`);
      }
    } catch {
        console.log('에러가 발생했습니다.');
    }
}, 1000);