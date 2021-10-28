const StudentsService = require("../services/students.services")

class StudentsController{
    async create(req,res) {
        try {            
            const tasks = await StudentsService.create(req.body)
            return res.json(tasks)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
    async getAll(req,res) {
        try {           
            const tasks = await StudentsService.getAll()
            return res.json(tasks)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
    async getOne(req,res) {
        try {           
            const tasks = await StudentsService.getOne(req.params.id)
            return res.json(tasks)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
    async update(req,res) {
        try {           
            const updatedTask = await StudentsService.update(
                req.params.id,
                req.body
                )
            return res.json(updatedTask)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
    async delete(req,res) {
        try {            
            const task = await StudentsService.delete(req.params.id)
            return res.json(task)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
}

module.exports = new StudentsController