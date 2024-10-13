// 접근자 프로퍼티 getter/setter 

// getter: 인수가 없으며 속성을 읽기 위해 사용한다.
// setter: 인수가 하나이며 속성값을 설정하기 위해 사용한다.

let obj = {
  firstName: 'Mike',
  get fullName() {
   return `${this.firstName} `; 
  },
  set fullName(value) {
    this.firstName = value;
    return `${this.firstName}`;
  }
};

// console.log(obj.fullName());   // TypeError: obj.fullName is not a function

// set() 쓰기 전
// obj.fullName = "test";         // TypeError: Cannot set property fullName of #<Object> which has only a getter

// set() 쓰고 난 후
obj.fullName = "Noah";         
console.log(obj.firstName);    // Noah


let student = {
  name: 'Joy',
  hobby: ['dance', 'movie'],
  active: false,
  get show() {
    return `${this.name}의 취미는 ${this.hobby}입니다.`
  }, 
  set show(value) {
    this.hobby = value;
  }
};

student.show = "piano";
console.log(student.show);


let product = {
  get name() {
    return this._name;
  },

  set name(value) {
    if(value !== 'Avocado') {
      return false;
    }
    this._name = value;
  }
};

product.name = "Avocado";
console.log(product.name);   // Avocado
product.name = "Carrot";
console.log(product.name);   // Avocado


// getter/setter 복습
// 객체의 속성을 getter/setter로 접근 이유
// 1. 객체의 데이터를 은닉함.(캡슐화)
// 2. 객체의 속성을 직접 접근 방지함
// 3. 호출없이 속성 접근, 속성값 검증 가능함.

let car = {
  name: 'BMW',
  _speed: 0,
  
  // 매개 변수 없고 반환값은 존재할 것.
  get speed() {
    return `${this.name}는 평균 속도 ${this._speed}로 달립니다.`;
  },
  // 매개 변수 하나만 존재할 것.
  set speed(updateSpeed) {
    if (updateSpeed <= 50) {
      this._speed = updateSpeed;
    }
    return;
  }
};

// RangeError: Maximum call stack size exceeded
// 원인: setter 호출 반복으로 스택 메모리가 넘치게 된다.
// 해결: speed 속성과 getter/setter 명과 같을 시 _speed로 변경한다.

console.log(car.speed);

car.speed=35;
console.log(car.speed);  // BMW 100 속도로 달립니다.
car.speed=55;
console.log(car.speed);  // BMW 100 속도로 달립니다.

const movie = {
  _title: [],
  get title() {
    return this._title;
  },
  set title(value) {
    return this._title = value.toUpperCase();
  },
}

movie.title='Pirates of the Caribbean';
console.log(movie.title);