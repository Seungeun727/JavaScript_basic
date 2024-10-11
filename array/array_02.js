// 참고 : JavaScript 책 [코딩의 기술] 공부 

// 배열- 펼침 연산자 
// 펼침 연산자를 통해 최소한의 코드 => 새로운 배열을 생성, 조작.
// 펼침 연산자 : (...) 로 표시함.
// * 배열의 목록: 매개변수 혹은 새로운 배열의 사용되는 항목
// * 배열의 항목 : 데이터

// cart 배열 생성
const cart = ['Notebook', 'pencil'];

// 펼침 연산자 사용
// ...cart;  // error : 선언문이 필요함
const copyCart = [...cart];

// 배열의 항목을 제거
function removeToItem(items, removable) {
  const updatedItems = [];
  for(let i = 0; i < items.length; i++) {
    if(items[i] !== removable) {
      updatedItems.push() = items[i];   // push() 변이 메서드 사용
      console.log('updatedItems', updatedItems);
    }
  }
}

// removeToItem 리팩토링
function removeToItem2(items, removable) {
  const index = items.indexOf(removable);
  items.splice(index, 1);  // 인덱스 1을 찾아서 제거함 
}

// splice()는 원본의 배열의 데이터 조작을 명심해야 한다.
const products = ['Notebook', 'Apple', 'pencil'];

const spliceData = removeToItem2(products, 'Apple');
const spliceData2 = removeToItem2(products, 'pencil');
console.log("products removeToItem2", products);   // result : ['Notebook']

// 원본 배열 데이터 조작의 혼란을 해결 => slice() 사용
function removeToItem3(items, removeable) {
  const index = item.indexOf(removeable);
  items.slice(0, index).concat(items.slice(index + 1));

}

// 해당 줄부터 다시 코드 정리 필요함.

// 반환값을 정확히 알기 위한 펼침 연산자 사용
// 펼침 연산자의 이점 : 코드 재사용 유리, 조작이 없음, 가독성을 높임
function removeToItem4(items, removable) {
  const index = items.indexOf(removable);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}

// 보간법 사용
const userList = ['Lily', 22, 'female' ];

function userInformation(name, age, gender) {
  return `${name} by ${age} ${gender}`;     // 보간법은 ``(backtick)기호  필요함
}

// userInformation(userList[0], userList[1], userList[2]);  

// 배열을 인수목록으로 펼침 연산자 사용 
userInformation([...userList]);

// 배운 내용에서 정리가 필요한 부분
// javascript 공식 문서 보고 정리 

// slice() 
// 배열의 시작부터 끝까지 얕은 복사본을 새로운 배열 객체로 반환함
const person = ['Mike', 'Robert', 'Kevin', 'David', 'Paul'];

// 인덱스 시작을 2부터 끝까지 새로운 배열 객체로 반환
console.log("person : begin 2 end ", person.slice(2));  // result: ['kevin', 'David', 'Paul']
// 인덱스 시작을 2부터 4까지 새로운 배열 객체로 반환
console.log("person : begin 2 end 4", person.slice(2, 4));  // result: ['kevin', 'David']

// 인덱스 시작을 역순으로  새로운 배열 객체로 반환 
console.log("person : begin -2", person.slice(-2));   // result: ['David', 'Paul']

// 인덱스 시작을 2부터 끝을 새로운 배열 객체로 반환
console.log("person begin 2 end -1", person.slice(2, -1));  // result : ['Kevin', 'David']


// concat() 
// 인자로 주어진 배열이나 값을 기존 배열에 합쳐서 새 배열을 반환함
// 특징) 기존 배열을 변경하지 않음, `추가된 새배열을 반환`함

const fruitList = ['apple', 'mango', 'orange'];
const foodList = ['pizza', 'chicken', 'meat'];

const categoryList = fruitList.concat(foodList);
console.log("concat() : categoryList", categoryList);  // result : [ 'apple', 'mango', 'orange', 'pizza', 'chicken', 'meat' ]