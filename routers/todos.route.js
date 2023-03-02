const { Router } = require('express')
const { todosController } = require('../controllers/todos.controller')


const router = Router()

router.post('/todos', todosController.addTodos)
router.get('/todos', todosController.getTodos)
router.delete('/todos/:id', todosController.deleteTodos)
router.patch('/todos/:id', todosController.updateTodos)

module.exports = router