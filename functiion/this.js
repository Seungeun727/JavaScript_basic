// 함수 보충 this

// this
// this는 함수 호출 방식에 따라 this에 바인딩할 객체가 동적으로 결정된다.

// 1. 함수 호출 
// 함수 호출은 this가 window/global 전역객체를 참조한다.
const gretting = function () {
  console.log(this);  // window 전역 객체
  console.log(this === global);  // false

}

gretting();  

// 2. 메서드 호출
// 메서드 호출도 this가 window/global 전역객체를 참조한다.
let user = {
  name: 'MinJu',
  getName: function() {
    console.log("method this", this);  // user 객체
    function inner() {
      console.log("inner this", this);  // window 전역 객체
    }
    inner();
  }
}

user.getName();

// 3. 생성자 함수 호출
// new를 붙이지 않고 호출할 경우 타입에러 반환함
function Animal(name) {
  console.log("constructor this", this);  // this = {}
  this.name = name;  
}

// TypeError: Cannot set property 'name' of undefined
// let notAnimal = Animal('Rabbit');
// console.log(notAnimal.name);   

// 정상 동작하는 경우
let mAnimal = new Animal('Rabbit');
console.log(mAnimal.name);  // Rabbit


// 4. apply/call/bind 호출

// bind 사용
const village = {
  name: '행복마을',
  park: 5,
  getVillage: function() {
    console.log("getVillage method this", this);   // this => village 객체
    return `${this.name}은 공원이 ${this.park}개 입니다.`;
  }
}

const mVillage = village.getVillage;  // TypeError: Cannot read property 'name' of undefined, this => Window 객체를 참조함

const bindVillage = mVillage.bind(village);
console.log(bindVillage());   // 행복마을은 공원이 5개 입니다.


// 생성자 함수에서 call 사용
// 참고: poiemaweb 생성자 this 코드 참고 => 비슷한 예제 만들어보기
function Country(land) {
  this.land = land;
}

Country.prototype.move = function(callback) {
  console.log("prototype.move this", this);  // { land: 'Seoul' }
  callback.call(this);
};

function printCountry() {
  console.log(this.land);
}

let country = new Country('Seoul');
country.move(printCountry);

// 생성자 실습
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function(callback) {
  // console.log("prototype hello this", this);  // undefined
  console.log("prototype hello this", this);  // { name: 'Minho', age: 25 }
  if(typeof(this.age) === 'number' && this.age < 30) {
    callback.call(this);
  }
}

function printPerson() {
  // console.log(this);  // undefined
  console.log("printPerson this", this);  // { name: 'Minho', age: 25 }
}

let p1 = new Person('Minho', 25);
p1.hello(printPerson);
