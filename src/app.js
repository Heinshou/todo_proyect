const express = require('express');
const taskRouter = require('./tasks/tasks.router').router

const app = express()

app.use(express.json());

app.use('/proyect/v1', taskRouter)

app.listen(8000, () => {
    console.log("Server started at port 8000")
})