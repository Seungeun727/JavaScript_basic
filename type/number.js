// parseFloat(): 값을 부동 소수점 숫자로 변환한다.
console.log(parseFloat(2.65));
console.log(parseFloat('2.65'));        // 문자를 포함한 숫자를 넣으면 number로 변환함.
console.log(typeof parseFloat(6.667));  // number

function addFunc(num1, num2) {
  if (!Number.isInteger(num1) && !Number.isInteger(num2)) {
    let result2 = (num1 * 10 + num2 * 10) / 10;
    return result2;
  } else {
    let result = num1 + num2;
    return `정수 계산: ${result}`;
  }
}

addFunc(0.053, 0.35);

function addFunc2(num1, num2) {
  // let totalNum = ((num1 + num2) * 100) / 100;           // 0.4200000000000001
  let totalNum = Math.round((num1 + num2) * 1e12) / 1e12;  // 0.42
  return totalNum;
}

addFunc2(0.2, 0.22);

// 숫자 자리 반올림
const n1 = 233.423;
console.log(typeof n1 === "number");      // true
console.log(Math.round(n1 * 10) / 10);    // 233.4
console.log(Math.round(n1 * 100) / 100);  // 233.42

// 소수점 다음 값 내림
const n2 = 15.936;
console.log(typeof n2 === "number");     // true
console.log(Math.floor(n2 * 10) / 10);   // 15.9
console.log(Math.floor(n2 * 10) / 100);  // 1.59