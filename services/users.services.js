const Users = require('../Users')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const salt = 5
const generateAceessToken = (email, id) => {
  const payload = {
    id,
    email    
  }
  return jwt.sign(payload, process.env.SECRET_PHRASE);
};
const loginFailed = {  
  message: "Error: введены неверные данные",
  token: null,
}

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
    try {
      return new Promise(async(res,rej) => {
      const { email, password } = body
      const user = await Users.findOne({ email: email })
      if(!user){
        rej(loginFailed)
      } else {
        const validPassword = bcrypt.compare(
          password,
          user.password,
          function(err, result){
            if(result){
              const token = generateAceessToken(
                email,
                user._id
              )
              res({
                user,
                message: "Success",
                token
              })
            } else {
              rej(loginFailed)
            }
          }
        )
      }
    })
    }catch (e) {
      throw new Error("Server error")
    }    
  }

}

module.exports = new UsersService()