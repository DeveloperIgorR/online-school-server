const UsersService = require('../services/users.services')

class UsersController{
    async create(req,res) {
        try {            
            const user = await UsersService.create(req.body)
            return res.json(user)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }    
}
module.exports = new UsersController