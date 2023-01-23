const {fetchData, fetchRow} = require('../../utils/postgres')

const LOGIN = `
SELECT * FROM users WHERE email = $1 AND password = $2
`

const ADD_USER = `
INSERT INTO users(name, email, password) VALUES($1, $2, $3)
`

const ALL_USERS = `
SELECT * FROM users;
`

const DEL_USER = `
DELETE FROM users WHERE id = $1
`

const EDIT_USER = `
UPDATE users SET name = $1, email = $2, password = $3  WHERE id = $4
`


const login = (email, password) => fetchRow(LOGIN, email, password)
const addUser = (name, email, password) => fetchData(ADD_USER, name, email, password)
const editUser = (name, email, password, id) => fetchData(EDIT_USER, name, email, password, id)
const allUsers = () => fetchData(ALL_USERS)
const delUser = (id) => fetchData(DEL_USER, id)

module.exports = {
  login,
  addUser,
  allUsers,
  delUser,
  editUser,
}