// 객체
// 1. key: value의 형태로 데이터 저장된다.
// 2. 다양한 데이터 타입을 저장함.
// 3. 원시타입은 불변한 값을 갖음, 객체는 값을 변경함
let obj = {
  code: 1234,
  title: 'Javascript',
  isActive: false
};
 
console.log(typeof obj);             // object  
console.log(obj instanceof Object);  // true


// 메서드 정의
// 1. 객체의 동작 또는 행동을 의미한다.
// 2. 객체 내 속성값으로 함수로 지정한다.
// 3. 단, 화살표 함수로 메서드 정의시 메서드 내부의 this가 가리키는 객체가 달라진다.

let car = {
  name: 'BMW',
  speed: 0,
  // 메서드 정의
  run: function() {
    console.log("run method this", this);  // this: car 객체
    return this.speed;
  },
  print: () => { 
    console.log("print method this:", this);  // this: Window 객체 undefined
  },
};

// 메서드 호출
car.run();
car.print();

// getter/setter 
// getter: 인수 없음 / 속성값을 읽기 위해 사용
// setter: 인수가 하나임 / 속성값을 읽고 값을 할당하기 위해 사용
// * speed 속성과 getter/setter명과 같다면 _speed로 변경한다.(=> 같게하면 RangeError 발생)

// getter/setter 필요성 
// 1. 객체의 정보 은닉화, 호출없이 속성 접근, 속성값 검증 가능함.

let dog = {
  name: 'dubu',
  breed: 'Maltese',
  // getter
  get speed() {
    return this._speed;
  },
  // setter: 매개변수 최소 하나는 있어야 한다. 
  set speed(value) {
    if(value < 50) {
      this._speed = value;
    }
    return this._speed;
  }
};

dog.speed = 20; 

// Part3. 객체 속성 접근: 대괄호 표기법, 마침표 표기법

// student 객체
let student = {
  name: 'Jack',
  age: 16,
  birthday: '2007-10-11',
  emotion: 'funny',
  special: {
    // 식별자 네이밍 규칙 위반된 키
    '$language': 'javascript',
    '_active': true,
    'identification-number': 5,
    '1234': true,
  }
};

console.log(student.name);       // result: Jack (마침표 표기법) 
console.log(student['name']);    // result: Jack (대괄호 표기법)

// 대괄호 표기법의 필요성 
// 1. 식별자 규칙의 허용되지 않는 문자(underScore(_), dollar($))인 경우 사용함.
console.log(student.special["identification-number"]);   // result: 5
console.log(student.special["$language"]);               // result: javascript
console.log(student.special["_active"]);                 // result: true

// * 식별자 규칙에 어긋나는 경우 마침표 표기법 접근 경우
// console.log(student.special.identification-number);   // ReferenceError: number is not defined


// 2. 변수를 속성명 사용하는 경우 
// student 객체의 emotion 속성에 접근하여 출력.
let emotion = 'name';
console.log(student.emotion);     // result: funny
console.log(student["emotion"]);  // result: funny

// student 객체의 name 속성명을 변수로 생성하여 출력.
console.log(student[emotion]);    // result: Jack