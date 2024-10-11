// 문자형(String)
// JS는 문자열 따옴표로 묶는다.
const str = 'hello';
console.log('typeof str1', typeof str);   // string

// string 내부 데이터 인덱스 접근
console.log('string length', str.length);   // string(4) + 1

// 문자열 추출 메서드
console.log(str.charAt(3));   //  result : l
console.log(str.charAt(0));   //  result : h 
console.log(str.charAt(2, 4));   //  result : l


// indexOf
const str2 = 'Hello Javascript';
console.log(str2.indexOf('Java'));   // result: 6
console.log(str2.indexOf('ll'));     // result: 2

// replace
// 목표: replace 사용해서 문자열 변환 익숙해지기

// 1. 문자열 변환 
let str3 = 'ppppssssskkkk';
let updatedWord = str3.replace(/[sk]/gi, 'p');  // result: ppppppppppppp

// 2.문자열 치환
// \w: 문자가 아닌 글자, \s: 공백 글자 일치
let str4 = 'Seoul SouthKorea';
let replaceWord = str4.replace(/(\w+)\s(\w+)/, '$2, $1');  // result: SouthKorea, Seoul


// split: 문자열을 분할하여 배열을 반환함.

// 1. 공백 제거로 배열에 담는다.
const str5 = 'Cabbage Carrot Onion Potato';
const vegetables = str5.split(" ");
console.log(vegetables instanceof Array);  // true
console.log(vegetables.length);            // 3
console.log(vegetables[2]);                // result: Carrot

// 2. 쉼표만큼 분할하여 배열에 담는다.
const str6 = 'Apple,Mango,Avocado,Kiwi';
const words = str6.split(",");
console.log(words);                   // result: [ 'Apple', 'Mango', 'Avocado', 'Kiwi' ]


// 3. 파라미터가 없다면 문자열 자체를 복사해서 배열을 반환함.
const str7 = 'Cabbage Carrot Onion Potato';
const vegetables2 = str7.split();     //result: [ 'Cabbage Carrot Onion Potato' ]

const space = '';
const splits = space.split("");       // result: []