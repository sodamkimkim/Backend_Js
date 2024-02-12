
function createTokenOfPhone(str) {
    // 1. 휴대폰 자릿수 맞는지 확인하기
    if (str.length < 10 || str.length > 11) { // early-exit pattern : 일찍 에러를 찾아서 함수 종료 시켜버린다.
        console.log("휴대폰 자릿수 불합격");
        return;
    }

    // 2. 휴대폰 토큰 6자리 만들기
    const resultToken = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    console.log(resultToken);

    // 3. 휴대폰에 토큰 전송
    console.log(`${str}번호로 인증번호 ${resultToken}을 전송합니다.`);
}

createTokenOfPhone("01012345678");