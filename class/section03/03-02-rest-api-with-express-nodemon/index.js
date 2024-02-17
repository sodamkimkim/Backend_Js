// const express = require('express') // 옛날방식 (common js 방식)
import express from 'express' // 요즘방식 (module 방식)

const app = express()

app.get('/www', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)