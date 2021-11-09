const UsersService = require('../services/users.services')

class UsersController {
    async registration(body) {
        try {
            const user = await UsersService.registration(body)
            return user
        }
        catch (e) {
            res.status(500).json(e.message)
        }
    }

    async login(body) {
        const token = await UsersService.login(body);
        return token
    }
}
module.exports = new UsersController()