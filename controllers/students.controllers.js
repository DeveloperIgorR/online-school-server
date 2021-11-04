const StudentsService = require("../services/students.services")
const Students = require("../Students")

class StudentsController{
    async create(req,res) {
        try {            
            const student = await StudentsService.create(req.body)
            return res.json(student)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
    async getAll(req,res) {
        try {           
            const students = await StudentsService.getAll()
            return res.json(students)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
    async getOne(req,res) {
        try {           
            const student = await StudentsService.getOne(req.params.id)
            return res.json(student)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
    async searchStudent(req,res) {
        try {   
            console.log(req.params.serchName)                   
            const student = await StudentsService.searchStudent(req.params.serchName)  
                     
            return res.json(student)            
        }
        catch (e) {
            return res.status(400).json({message: 'Search error'})      
        }
    }
    async update(req,res) {
        try {           
            const updatedStudent = await StudentsService.update(
                req.params.id,
                req.body
                )
            return res.json(updatedStudent)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
    async delete(req,res) {
        try {            
            const student = await StudentsService.delete(req.params.id)
            return res.json(student)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
}
module.exports = new StudentsController