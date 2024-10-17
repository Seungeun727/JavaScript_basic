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