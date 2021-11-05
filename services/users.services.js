const Users = require('../Users')

class UsersService{

    async create(user) {                    
        const createdUser = await Users.create(user)
        return createdUser          
    }    
}

module.exports = new UsersService