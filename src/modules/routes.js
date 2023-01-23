const express = require('express')
const users = require('./users/users')
const courses = require('./courses/courses')

const router = express.Router()


router
  .post('/login', users.LOGIN)
  .post('/add/user', users.ADD_USER)
  .post('/add/course', courses.ADD_COURSE)
  .post('/del/course', courses.DEL_COURSE)
  .post('/del/user', users.DEL_USER)
  .post('/edit/user', users.EDIT_USER)
  .post('/edit/course', courses.EDIT_COURSE)
  .get('/courses', courses.COURSES)
  .get('/users', users.ALL_USERS)




module.exports = router