const Users = require('../Users')
const bcrypt = require("bcrypt")
const salt = 5

class UsersService{

    async registration(body) {
        try {
          let { email, password } = body;
          const hashedPassword = await bcrypt.hash(password, salt);
          return new Promise(async (res, rej) => {
            let candidate = await Users.findOne({ where: { email } }).then();
            if (candidate) {
              rej("User with this login already exists");
            } else {
              const newUser = Users.create({ ...body, password: hashedPassword });
              res(newUser);
            }
          });
        } catch {
          if (err) throw err;
        }
      }
}

module.exports = new UsersService