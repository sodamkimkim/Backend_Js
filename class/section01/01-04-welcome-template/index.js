function getWelcomTemplate({ name, age, school, createdAt }) {
    const myTemplate =
        `
        <html>
            <body>
                <h1>${name}씨 가입을 환영합니다.</h1>
                <hr/>
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
                </body>
        </html>
    `
    console.log(myTemplate);
}
const name = "영구";
const age = "12";
const school = "다람쥐초";
const createdAt = "2020-10-10";
getWelcomTemplate({ name, age, school, createdAt }); // shorthand property : 객체의 key와 value가 같을 때 하나만 입력할 수 있다.