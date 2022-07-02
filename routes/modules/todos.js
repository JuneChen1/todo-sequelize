const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo
const User = db.User

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const UserId = req.user.id
  const name = req.body.name
  return Todo.create({name, UserId})
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  Todo.findOne({UserId, id})
    .then(todo => res.render('edit', { todo: todo.toJSON() }))
    .catch(err => console.log(err))
})

router.put('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  const { name, isDone } = req.body
  Todo.findOne({ UserId, id })
    .then(todo => {
      todo.name = name
      todo.isDone = isDone === 'on'
      todo.save()
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router
