// const express = require('express') // 옛날방식 (common js 방식)
import express from 'express' // 요즘방식 (module 방식)
import { createTokenOfPhone } from './phone.js'

const app = express()
app.use(express.json()) // json데이터 해석 가능
app.get('/boards', function (req, res) {
    // 1. DB에 접속 후 데이터를 조회
    const result = [
        { number: 1, writer: "철수", title: "제목입니다", contents: "내용입니다" },
        { number: 2, writer: "철수2", title: "제목입니다", contents: "내용입니다" },
        { number: 3, writer: "철수3", title: "제목입니다", contents: "내용입니다" },
    ]
    // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기

    res.send(result);
})

app.post('/boards', function (req, res) {
    // 1. 브라우저에서 보내준 데이터 확인
    console.log(req);
    console.log("---------------------------");
    console.log(req.body);

    // 2. DB에 접속 후, 데이터를 저장

    // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
    res.send('게시물 등록에 성공하였습니다.');
    console.log("+++++++++++++++++++++++++++");
})

app.post('/tokens/phone', function (req, res) {
    const tokenCheck = createTokenOfPhone(req.body.phoneNumber)
    if (tokenCheck) res.send('token생성 완료');
})
app.listen(3000)