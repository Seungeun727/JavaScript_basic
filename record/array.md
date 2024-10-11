## ✏️ 배열(Array)
- 개체를 사용하면 키값 컬렉션을 사용할 수 있다.
- 순차적인 순서가 있으며 키값 추가/제거로 배열의 유연성을 확장한다.
- 다양한 자료형의 데이터를 담을 수 있다.(객체, 함수 등등)
- 일차원 배열, 다차원 배열을 가진다.

<br />

## 🔧 배열 문법 
<br />

### 🔎 배열 선언 / 인덱스 
```javascript
// 선언
let arr1 = new Array();  // 생성자 함수
let arr2 = [];           // 빈 배열로 선언

// 선언과 동시에 초기화
let number = [1, 2, 3];

let book = ['Harry porter', 'Da Vinci Code', 'lord of the rings'];
book[0];  // Harry porter
book[2]   // lord of the rings
book[-1]; // undefined
```
<br />

### ⚠️ 배열은 데이터 타입을 가리지 않는다.
```javascript
let arr3 = [
  1234,   // number
  'test', // string
  true,   // boolean
];
```
<br />

## 🔎 배열 프로퍼티
|메서드|의미|반환값
|------|----|-----|
|length|배열의 길이 확인| number

<br />

## 🔎 배열 내장 메서드 
|메서드|의미|반환값
|------|--|--|
|isArray|배열 자료형 확인| True/False
|push()|배열 끝 항목 추가| Number
|pop()|배열 앞에서부터 항목 제거| Undefined
|shift()|배열 앞에서부터 항목 제거| Undefined
|unshift()|배열 앞에서부터 항목 추가| 배열의 새로운 길이 반환함.
|indexOf()|배열 내 항목 인덱스 여부 | Number
|splice()|배열 내 특정 부분을 복사하여 반환한다|추출 요소를 포함한 새로운 배열
|splice()|배열 내 특정 인덱스 위치 항목 제거|제거한 요소를 담은 배열
|concat()|주어진 배열 혹은 값을 기존 배열에 합쳐서 새 배열을 반환함|

<br />

```javascript
// isArray
let size = ['small', 'medium', 'large', 'x-large'];

Array.isArray(size);       // true
Array.isArray(1);          // false
Array.isArray('string');   // false
Array.isArray({age: 25});  // false
```
<br />

## 📝 배열 펼침 연산자 
- 원본 배열의 데이터을 조작하지 않는다.
- 많은 메서드가 필요하지 않는다.

```javascript 
const items = ['Apple', 'Mango', 'Banana'];
const copyItem =[...items];
```
<br />

## 📝 배열 검색 

### ⭐ find, includes
- find는 특정 조건을 맞는 요소를 찾는다.
- callback 함수의 반환값은 true/false이다. 
```javascript 
const list = ['desk', 'chair', 'pencil'];
// includes(): 해당 요소가 포함되었는지 True/False 반환한다.
const findEl = list.find(element => element.includes('pencil'));  // pencil 포함 확인
```

### ⭐ filter(정렬)
- filter는 특정 조건에 해당하는 요소를 필터링한다.
- callback 함수 반환값은 true/false이다.
```javascript
const product = ['Carrot', 'Onion', 'Potato'];
const filterItem = product.filter(item => item === 'Potato');  // [ 'Potato' ]
```

## 📝 배열 순회 

### 💡 for...in문 
- `사용하지 않을 것을 권장함`
```javascript 
let fruits = ['Apple', 'Kiwi', 'Cherry'];
for (let item in fruits) {
  console.log(fruits[item]);
}
```
<br />

### 💡forEach() 사용
- 주어진 callback을 배열의 각 요소를 오름차순으로 한 번씩 실행함.
- forEach()는 배열을 변형하지 않음 (단 cb는 배열 변형 가능함.)

<br />

#### 🔧 구문과 매개변수
```javascript
// arr.forEach(callback(currentValue[, index[, array]])[,thisArg]);
const users = ['Anna', 'Jack', 'Noah', 'Alice'];
const userName = users.forEach(user => console.log(user));  // Anna Jack Noah Alice
```

표현|의미  
----|:--|
callback | 각 요소에 대해 실행할 함수
currentValue | 현재 처리할 요소 
index | 현재 처리할 요소의 인덱스
array | forEach()를 호출한 배열
thisArg | callback 실행 시 this로 사용할 값

<br />

#### 🔥 forEach()의 필요성
- forEach()를 통해 부수효과(함수의 유효값 범위를 벗어나는 경우)가 발생하여 예측가능성이 높아짐
- 체이닝을 통해 다른 배열 메서드와 결합 가능함.
- 조건 만족 시 반복은 for문 이용할 것. forEach()는 중간에 반복 종료할 수 없음.


## 📌 참고
- Modern Javascript tutorial
- Javascript mdn
- Javascript 코딩의 기술