import { userList } from '../info/user.js';
// 참고 : Javascript modern tutorial

// 심볼(Symbol)
// ↪ '원시형 데이터로 유일한 식별자를 생성' 시 사용함

// PART1. '심볼은 유일한 값을 보장하는 자료형'이다.
let id = Symbol("id");
let id2 = Symbol("id");

console.log(id);  // Symbol(id)
console.log("id match check", id === id2);   // false


// 1-1. 심볼은 new 연산자로 명시적인 래퍼 객체를 생성하지 못함.
let symbol = new Symbol();  // TypeError: Symbol is not a constructor

// 단, 심볼 래퍼 객체 생성으로 Object()를 이용한다.
let symbol2 = Symbol("hello");
let symbol_obj = Object(symbol2);
console.log("symbol2 typeof", typeof symbol_obj);  // object


// PART2. 심볼은 '숨김 프로퍼티' 사용 가능함.
// * 숨김 프로퍼티: 외부 코드 접근이 불가능하며 값을 덮을 수 없는 프로퍼티.
// * 식별자의 충돌 발생하지 않음.
let id3 = Symbol("id");
userList[id3] = "제3 스크립트 id값";
console.log(userList[id3]);


let uid = Symbol("id");
let user = {
  name: "John",
  [uid]: 123
};

// for...in에서 숨김 프로퍼티로 외부에서 심볼 키에 접근하지 못함.
for(let key in user) {
  console.log("user keyValue", key);
}

let uid2 = Symbol("id");
let users = {
  [uid2]: 123
};

// 대신 Object.assign에서는 심볼 숨김 프로퍼티도 복사 가능함.
let copyUid = Object.assign({}, users);
console.log(copyUid[uid2]);  // 123


// PART 3. 전역 심볼(global Symbol)과 정적메서드
// ↪ 전역 심볼 레지스트리 안에 있는 심볼(APP에서 광범위 사용하는 경우)

// 정적 메서드 
// Symbol.for(key) : 레지스트리 안에 전역 심볼 탐색/접근 및 생성
// * 찾는 전역 심볼이 있다면 반환, 없다면 새로운 심볼 생성 후 반환함.
// * 반환값: 심볼 key 반환
let uid3 = Symbol.for("id");

// 동일명 "id"로 심볼 다시 접근함
let readUid3 = Symbol.for("id");

// 심볼 uid3과 readUid3의 일치 여부
console.log(uid3 === readUid3);   // true

// Symbol.keyFor(sym): 전역 심볼 레지스트리 내 찾는 심볼명을 반환함.
// * 전역 심볼이 아닌 경우 undefined를 반환함.
// * 전역 심볼이 아닌 모든 심볼은 description 프로퍼티를 사용

let global_symbol = Symbol.for("id");
console.log("golbalSymbol find",Symbol.keyFor(global_symbol));  // id

let local_symbol = Symbol("birthday");
console.log("localSymbol find", Symbol.keyFor(local_symbol));  // undefined
console.log("localSymbol description", local_symbol.description);  // birthday


// Symbol.toPrimitive
// ↪ 객체를 문자열, 숫자 등 원시형으로 자동 변환시 사용된다.
// * 객체 형 반환은 string, number, default로 구성된다.
// * 반환값은 원시값이다.
let user3 = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    return hint == "string" ? `{name: "${this.name}"}`: this.money;
  }
};

// boolean은 hint 없음. 
console.log(user3);        // hint: string  => 문자열 연산
console.log(+user3);       // hint : number => 수학 연산
console.log(user3 + 500);  // hint: default => 자료형이 확실하지 않은 경우


// Symbol.toPrimitive 만들어보기
let product = {
  name: "Carrot",
  price: 2000,
  [Symbol.toPrimitive](hint) {
    if(hint === "number") {
      return this.price;
    } else if (hint === "string"){
      return this.name;
    } 
    return true;
  }
}

console.log(product);         // { name: 'Carrot', age: 2000, [Symbol(Symbol.toPrimitive)]: [Function: [Symbol.toPrimitive]]}
console.log(+product);        // hint: number,  expect: 2000 => result: 2000
console.log(product + 150);   // hint: default, exepct: 151 => result: 151
console.log(product + '');    // hint: default, result: true
console.log(`${product}`);  // hint: string, result: Carrot