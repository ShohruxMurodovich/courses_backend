const model = require('./model')

module.exports = {
  ADD_COURSE: async (req, res) => {
    try {
        const { title, price, type, img, user_id } = req.body

        const newcourse = await model.addCourse(title, price, type, img, user_id)

        res.json(newcourse)
    } catch (err) {
        console.log(err.message)
    }
  },
  COURSES: async (req, res) => {
    try {

        const courses = await model.courses()

        res.json(courses)
    } catch (err) {
        console.log(err.message)
    }
  },
  DEL_COURSE: async (req, res) =>{
    try{
      const {id} = req.body

      const delcourse = await model.delCourse(id)

      res.json(delcourse)
    }catch (err) {
      console.log(err.message)
    }
  },

  EDIT_COURSE: async (req, res) =>{
    try{
      const {title, price, type, img, user_id, id} = req.body

      const editcourse = await model.editCourse(title, price, type, img, user_id, id)

      res.json(editcourse)
    }catch (err) {
      console.log(err.message)
    }
  }
}