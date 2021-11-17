const ModulesService = require("../services/modules.services")

class ModulesController{
    async create(req,res) {
        try {            
            const module = await ModulesService.create(req.body)
            return res.json(module)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
    async getAll(req,res) {
        try {           
            const modules = await ModulesService.getAll()
            return res.json(modules)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }   
}
module.exports = new ModulesController()