function checkEmail(email) {
    if (email === undefined || email.includes("@") === false) {
        console.log("이메일 입력을 확인해 주세요");
        return false;
    }
    else {
        return true;
    }
}

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
    return myTemplate;
}

function sendTokenToEmail(myEmail, template) {
    console.log(`${myEmail}로 인증번호 ${template}을 전송합니다.`);
}

function createUser({ name, age, school, email, createdAt }) {
    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    if (checkEmail(email) === false) return;

    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomTemplate({ name, age, school, createdAt });

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTokenToEmail(email, myTemplate);
}

function getToday() {
    const createdAt = new Date();
    const year = createdAt.getFullYear();
    const month = (createdAt.getMonth() + 1).toString().padStart(2, '0');
    const date = createdAt.getDate().toString().padStart(2, '0');
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][createdAt.getDay()];
    return formattedDate = `${year}-${month}-${date}-${day}`
}

const name = "철수";
const age = 8;
const school = "다람쥐초등학교";
const email = "a@a.com";
const createdAt = getToday();
createUser({ name, age, school, email, createdAt });