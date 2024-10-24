// 출처: JS 코딩의 기술

// 목표 : 화살표 함수(Arrow Function)로 복잡도 감소

const name = {
	first: 'Lemy',
	last: 'Kilmister',
};


// 기본 함수
function getName({first, last}) {
	return `${first} ${last}`;
}

// 화살표 함수
// const getName2 = { first, last } => `${first} ${last}`;  // ; expected 

const comic = {
	first: 'Peter',
	last: 'Bagge',
	city: 'Seattle',
	state: 'Washington'
};

const getFullName = ({ first, last }) => `${first} ${last}`;
getFullName(comic); 


const getNameAndLocation = ({ first, last, city, state }) => ({
	fulName: `${first} ${last}`,
	location: `${city} ${state}`,
});
getNameAndLocation(comic);


// 고차 함수의 반환 값 : 함수 몸체에서 다른 함수를 반환
const discounter = discount => {
	return price => {
		return price * ( 1- discount);
	};
};

const tenPercentOff = discounter(0.1);
tenPercentOff(100);

const discounter2 = discount => price => price * (1-discount);

const tenPercentOff2 = discounter(0.1);
tenPercentOff2(100);


const students = [
	{ id: 0, name: 'Jake'},
	{ id: 1, name: 'Navi'},
	{ id: 2, name: 'John'},
	{ id: 3, name: 'Rain'},
	{ id: 4, name: 'Nami'},
];

// 객체 내 속성 접근 
let personData = students.map((person, index) => person.name);
console.log(personData);


let personList = students.map((student) => {
	let personObj = {};
	personObj[student.id] = student.name;
	return personObj;  
});

console.log("personList result: ",personList);

let personData2 = students.map((student, index) => {
	let newArr = [];
	if(index % 2 == 0) newArr.push(student.name);
	return newArr;
},[])

let personData3 = students.map((student, index) => {
	return Object.assign(student, { grade: 2});
})

console.log("personData2 result: ", personData2);
console.log("personData3 result: ", personData3);
