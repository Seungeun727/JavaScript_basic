// 2로 나누어 떨어지는 숫자 구하기
let arr2 = [1, 2, 3, 4, 5];

function remainFunc(num = []) {
  if (typeof num !== 'object') return num;
  let result = [];
  return [...num].forEach(item => {
    if (item % 2 == 0 ) {
      result.push(item);
    } else {
      return item;
    }
  });
}
// remainFunc(arr2);

// 가격 구하기
let obj = {
  code: 'vegetable',
  type: [
    { name: 'Carrot', price: 2000, producer: 'Jane'},
    { name: 'Lettuce', price: 4000, producer: 'Mike'},
    { name: 'Garlic', price: 3000, producer: 'Mike'}
  ]
}

let str = "string";

function findProducerName(product) {
  if (product instanceof Object) return product;
  if (Array.isArray(product.type)) {
    return Object.values(product.type).filter(item => item.price === 3000);
  } else {
    return `${product}은 데이터 형식이 만족하지 않습니다.`;
  }
}

// findProducerName(str);


// BMI(체질량 지수) 계산하기 
function calculateBMI(height, weight = 0, checkBMI) {
  // 체질량 지수 = 몸무게 / (키의 제곱) 
  const formatHeight = height * 0.01;  
  const calcBMI1 = (weight) / (formatHeight * formatHeight);    
  const calcBMI2 = parseFloat(weight) / parseFloat(formatHeight * formatHeight);    

  // 매개 변수가 정수라면 calcBMI1, 실수라면 calcBMI2
  if (Number.isInteger(height) && Number.isInteger(weight)) {
    const MY_BMI = (Math.round(calcBMI1 * 100 ) / 100);
    return checkBMI(MY_BMI);
  } else {
    const MY_BMI = (Math.round(calcBMI2 * 100 ) / 100);
    return checkBMI(MY_BMI);
  }
};

const checkBMI = (BMI) => {
  if(BMI < 18.5) {
    console.log(`${BMI}는 저체중입니다.`);
  } else if (18.5 <= BMI && BMI < 23) {
    console.log(`${BMI}는 정상 체중입니다.`);
  } else if (23 <= BMI && BMI < 25){
    console.log(`${BMI}는 과체중입니다.`);
  } else {
    console.log(`${BMI}는 비만입니다.`);
  }
};

calculateBMI(164.4, 53.5, checkBMI);