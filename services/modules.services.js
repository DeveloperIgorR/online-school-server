const Modules = require("../Modules")

class ModulesService{

    async create(module) {                    
        const createdModule = await Modules.create(module)
        return createdModule          
    }

    async getAll() {                 
        const modules = await Modules.find()
        return modules          
    }

   
}

module.exports = new ModulesService()