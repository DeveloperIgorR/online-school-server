const Users = require('../Users')

class UsersService{

    async create(user) {                    
        const createdStudent = await Users.create(user)
        return createdStudent          
    }    
}

module.exports = new UsersService