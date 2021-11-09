const Users = require('../Users')
const bcrypt = require("bcrypt")
const salt = 5

class UsersService {

  async registration(body) {
    try {
      let { email, password } = body
      const hashedPassword = await bcrypt.hash(password, salt)      
      let candidate = await Users.findOne({ email: email })        
        if (candidate) {
          return res.status(400).json("User with this login already exists")
        } else {          
          const newUser = await Users.create({ ...body, password: hashedPassword })
          console.log(newUser)
          return newUser
        }
      }catch (e) {      
      res.send({ message: "Server error" })
    }
  }

  async login(body){
    return new Promise(async(res,rej) => {
      const { email, password } = body
      const user = await Users.findOne({ email: email })
      
    })
  }

}

module.exports = new UsersService