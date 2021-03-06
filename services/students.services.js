const Students = require("../Students")

class StudentsService{

    async create(student) {                    
        const createdStudent = await Students.create(student)
        return createdStudent          
    }

    async getAll() {                 
        const students = await Students.find()
        return students          
    }

    async getOne(id) {            
        if(!id){
            throw new Error('не указан id') 
        }          
        const student = await Students.findById(id)
        return student         
    }    
    
    async searchStudent(searchName) {             
        if(searchName === 'null'){           
            const student = await Students.find() 
            return student
        } else { 
            console.log(searchName)  
        const student = await Students.find({"name": {"$regex": searchName, "$options": "i"}})
        return student 
        }        
    }    

    async update(id,student) {        
        if(!id){
            throw new Error('не указан id') 
        }
        const updatedStudent = await Students.findByIdAndUpdate(id, student, {new: true})
        return updatedStudent         
    }

    async delete(id) {       
        if(!id){
            throw new Error('не указан id') 
        }          
        const student = await Students.findByIdAndDelete(id)
        return student         
    }
}

module.exports = new StudentsService()