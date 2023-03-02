const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const port = 4500

app.use(cors())
app.use(express.json())
app.use(require('./routers/todos.route'))


mongoose
.connect('mongodb+srv://Kolizey08:Maga080898@cluster0.nmzoj5b.mongodb.net/Todos')
.then(()=> console.log("Успешно соединились с сервером MongoDB"))
.catch(() => console.log("Ошибка при соединении с сервером MongoDB"))

app.listen(port, ()=> {
    console.log("Сервер запущен успешно");
})