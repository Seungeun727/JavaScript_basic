// Date 객체
// 1970SUS 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위를 나타내는 정수값.
// Date 객체는 UCT 기준이지만 날짜, 시간 등 메서드는 현지 시간을 나타냄.

// new 연산자 
let date = new Date(); // 생성자 호출하여 새로운 Date 객체(현재 날짜와 시간)를 반환함. 
console.log(date);

let nothing = new Date(0);  //  // 1970-01-01T00:00:00.000Z

let getDate = new Date("2021-08-15");  // 2021-08-15T00:00:00.000Z

let today = new Date(2022, 8, 23);
console.log(today);  

// Date(년/월/일/시간/분/초/밀리초)
today = new Date(2022, 7, 24, 7, 30, 25);
console.log(today);  

// Date.now(): UTC 시간 기준으로 현 시간까지 지난 밀리초를 반환함.
let now = Date.now();  // 1661335004971

// get 
// getFullYear(): 현지 시간 기준 연도(4자리)를 반환함
console.log("year", today.getFullYear());

// getMonth(): 현지 시간 기준 (0-11)월 반환함.
// ex) 0: 1월 / 11: 12월
console.log("month", today.getMonth() + 1);

// getDate(): 현지 시간 기준 (1-31)일 반환함.
console.log("day", today.getDate()); 

// getDay(): 현지 시간 기준 (0-6)요일 반환함.
// ex) 0 : 월요일, 6: 일요일
console.log("day for week", today.getDay());

// getHours(): 현지 시간 기준 (0-12)시간 반환함
console.log("hour", today.getHours());  // 7

// set 
today.setFullYear(2023);   // 1692829825000
today.setMonth(5);         // 1687559425000 => 6월
today.setDate(6);          // 1686004225000 => 5일
today.setHours(10);
console.log("update today", today);   // 2023-06-06T01:30:25.000Z
