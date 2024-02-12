import { checkEmail, getWelcomTemplate, sendTokenToEmail } from './email.js'
import { getToday } from './util.js'
function createUser({ name, age, school, email, createdAt }) {
    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    if (checkEmail(email) === false) return;

    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomTemplate({ name, age, school, createdAt });

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTokenToEmail(email, myTemplate);
}

const name = "철수";
const age = 8;
const school = "다람쥐초등학교";
const email = "a@a.com";
const createdAt = getToday();
createUser({ name, age, school, email, createdAt });