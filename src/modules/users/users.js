const jwt = require('../../utils/jwt')
const model = require('./model')

module.exports = {
  LOGIN: async (req, res) => {
    try {
      const {email, password} = req.body

      const user = await model.login(email, password)

      if(user){
          res.json({
            message: "Authorized",
            access_token: jwt({id: user.id}),
            id: user.id
        })
      }else{
        return res.sendStatus(401)
      }
    } catch (err) {
      console.log(err)
    }
  },
  ADD_USER: async (req, res) => {
    try {
        const { name, email, password } = req.body

        const newuser = await model.addUser(name, email, password)

        res.json(newuser)
    } catch (err) {
        console.log(err.message)
    }
  },
  ALL_USERS: async (req, res ) => {
    try {
      const allusers = await model.allUsers()

      res.json(allusers)
  } catch (err) {
      console.log(err.message)
  }
  },

  DEL_USER: async (req, res) =>{
    try{
      const {id} = req.body

      const deluser = await model.delUser(id)

      res.json(deluser)
    }catch (err) {
      console.log(err.message)
    }
  },
  EDIT_USER: async (req, res) =>{
    try{
      const {name, email, password, id} = req.body

      const edituser = await model.editUser(name, email, password, id)

      res.json(edituser)
    }catch (err) {
      console.log(err.message)
    }
  }
}