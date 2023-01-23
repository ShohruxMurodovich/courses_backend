const {fetchData, fetchRow} = require('../../utils/postgres')


const ADD_COURSE = `
INSERT INTO courses(title, price, type, img, user_id) VALUES($1, $2, $3, $4, $5)
`

const COURSES = `
SELECT * FROM courses
`

const DEL_COURSE = `
DELETE FROM courses WHERE id = $1
`

const EDIT_COURSE = `
UPDATE courses SET title = $1, price = $2, type = $3, img = $4, user_id = $5 WHERE id = $6
`


const addCourse = (title, price, type, img, user_id) => fetchData(ADD_COURSE, title, price, type, img, user_id)
const courses = () => fetchData(COURSES)
const delCourse = (id) => fetchData(DEL_COURSE, id)
const editCourse = (title, price, type, img, user_id, id) => fetchData(EDIT_COURSE,title, price, type, img, user_id, id)


module.exports = {
  addCourse,
  courses,
  delCourse,
  editCourse
}