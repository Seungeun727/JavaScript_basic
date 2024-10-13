// 숫자 
const pi = 3.1415926358979;
console.log(pi);

const str = pi.toFixed(2);   
console.log(str);
console.log(typeof str);

const integer = parseInt(str);
const float = parseFloat(str);

// 전역함수 setTimeout, setInterval, clearTimeout, clearInterval
console.log(integer);
console.log(float);
console.log(typeof integer, typeof float);

// Math: 수학정보를 가지고 있는 객체 데이터 
// Math.abs() : 주어진 숫자의 절댓값을 반환함 
//  ex) -1 => 1, -99 => 99
console.log('abs: ', Math.abs(-12));  // 12

// Math.min() : 인수로 들어온 숫자 중 가장 작은 값 반환.
console.log('min: ', Math.min(2, 8));  // 2

// Math.max() : 인수로 들어온 숫자 중 가장 큰 값 반환.
console.log('min: ', Math.max(2, 8));  // 8

// Math.ceil() : 인수로 들어온 숫자를 올림 처리
console.log('ceil: ', Math.ceil(3.14));  // 3

// Math.round() : 인수로 들어온 숫자를 내림 처리
console.log('round: ', Math.round(3.14));  // 3

// Math.random() : 인수로 들어온 숫자를 랜덤 처리
console.log('ceil: ', Math.ceil());  