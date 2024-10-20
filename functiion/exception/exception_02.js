
function checkNumberException(value1) {
    if(typeof value1 !== 'number') {
        throw `${value1}이 숫자가 아닙니다`;
    }
}