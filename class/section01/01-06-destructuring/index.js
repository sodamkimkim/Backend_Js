// # 구조분해할당 예제
const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐 초등학교"
}
const { name, school } = profile; // # 구조분해 할당 - 객체에서 원하는 것만 뽑아 씀

console.log(name); // 철수 출력
console.log(school); // 다람쥐 초등학교 출력

// 1. 일반변수 전달
function example1(param) {
    console.log(param);
}
example1("apple");

// 2. 객체 전달
function example2(param) {
    console.log(param);
    console.log(param.apple);
}
example2({ apple: 3, banana: 10 });

// 3. 구조분해 할당
function example3({ apple, banana }) { // **
    console.log(apple);
    console.log(banana);
}
example3({ apple: 3, banana: 10 });

