const express = require('express')
const router = express.Router()
const studentsRoutes = require('./student.routes')

router.use('/students', studentsRoutes)

module.exports = router