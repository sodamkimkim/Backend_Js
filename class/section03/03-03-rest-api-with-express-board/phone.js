function checkPhoneNum(str) {
    if (str.length < 10 || str.length > 11) { // early-exit pattern : 일찍 에러를 찾아서 함수 종료 시켜버린다.
        console.log("휴대폰 자릿수 불합격");
        return false;
    } else return true;
}
function getToken() {
    const resultToken = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    console.log(resultToken);
    return resultToken;
}
function sendTokenToSMS(str, resultToken) {
    console.log(`${str}번호로 인증번호 ${resultToken}을 전송합니다.`);
}

export function createTokenOfPhone(str) {
    const isValid = checkPhoneNum(str);
    if (isValid === false) return;

    sendTokenToSMS(str, getToken());
    return true;
}

//createTokenOfPhone("01012345678");