const UsersService = require('../services/users.services')

class UsersController{
    async registration(body) {
        try {            
            const user = await UsersService.registration(body)
            return user          
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }    
}
module.exports = new UsersController