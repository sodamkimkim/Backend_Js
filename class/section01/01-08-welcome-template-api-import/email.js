export function checkEmail(email) {
    if (email === undefined || email.includes("@") === false) {
        console.log("이메일 입력을 확인해 주세요");
        return false;
    }
    else {
        return true;
    }
}

export function getWelcomTemplate({ name, age, school, createdAt }) {
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

export function sendTokenToEmail(myEmail, template) {
    console.log(`${myEmail}로 인증번호 ${template}을 전송합니다.`);
}
