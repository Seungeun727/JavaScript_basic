// 참고: bit 배운 내용 정리
// 불린형(boolean) : 논리형 타입
// - true(참)과 false(거짓)으로 구분함

const isValue1 = true;
const isValue2 = false;

// undefined :  JS 엔진에 허용된 DATA / null : 개발자에게 허용된 DATA
// let a1;          // result: undefined
let a2 = null;      // result : null  
// console.log("---typeof:", typeof a1,  a1 == null);       
console.log("---typeof:", typeof a2,  a2 == null);            // ---typeof: object true
console.log("---undefiend:", typeof a2, a2 == undefined);     // ---undefiend: object true


// 논리연산자
// AND(&&) : 인수 중 두 쪽 다 참 일 경우 TRUE 반환
// OR(||)  : 인수 중 한 쪽만 참일 경우 TRUE  반환
// NOT(!) :  참이 아닐 경우
// * 논리 연산자의 우선 순위 : ! > && > ||

let str1 = 'Hello!!';
let str2 = 'Hello!';

console.log(true && str2);   // result : Hello! 
console.log(false && str2);  // result : false


console.log(true || str2);   // result : true
console.log(false || str2);  // result : Hello! 

console.log(!str2);    // result: false

console.log("result: ", str1 == str2);           // result : false      
console.log("result && type:,", str1 === str2);  // result && type:, false
