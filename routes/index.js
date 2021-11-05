const express = require('express')
const router = express.Router()
const studentsRoutes = require('./student.routes')
const usersRoutes = require('./user.routes')

router.use('/students', studentsRoutes)
router.use('/users', usersRoutes)

module.exports = router