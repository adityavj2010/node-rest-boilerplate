
const express = require('express')
const apiRouter = require('./api')
const authRouter = require('./auth')

const app = express()


app.use("/api/", apiRouter);
app.use("/auth/", authRouter);

module.exports = app