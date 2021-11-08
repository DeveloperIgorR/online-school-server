const Users = require('../Users')
const bcrypt = require("bcrypt")
const salt = 5

class UsersService {

  async registration(body) {
    try {
      let { email, password } = body
      const hashedPassword = await bcrypt.hash(password, salt)
      return new Promise(async (res, rej) => {
        let candidate = await Users.findOne({ email: email })        
        if (candidate) {
          rej("User with this login already exists")
        } else {          
          const newUser = await Users.create({ ...body, password: hashedPassword })
          console.log(newUser)
          res(newUser)
        }
      });
    } catch (e) {      
      res.send({ message: "Server error" })
    }
  }
}

module.exports = new UsersService