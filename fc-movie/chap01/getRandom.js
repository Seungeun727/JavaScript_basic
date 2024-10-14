// 하나의 JS파일에서 2개의 통로를 내보낼 수 있음.
// 1. 이름으로 지정하는 내보내기 
export function random() {
  // Math.floor() : 인수로 들어온 숫자를 내림 처리함.
  return Math.floor(Math.random() * 10);
}

export const user = {
  name: 'james',
  age: 85
}

// 2. 기본 내보내기 
export default 123; 