const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth.middleware')
const ModulesController= require('../controllers/modules.controllers')

/**
 * @swagger
 * /api/students:
 *  get:
 *      summary: Get all students
 *      description: Returns all students from DB
 *      tags:
 *          - Students
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get('/', authMiddleware, ModulesController.getAll)


/**
 * @swagger
 *  /api/students/create:
 *    post:
 *      summary: Add new student
 *      description:
 *          Add new 'Students' object.
 *      tags:
 *          - Students
 *      parameters:
 *        - name: Student
 *          in: body
 *          description: task object
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Students'
 *      responses:
 *        200:
 *          description: Successful response
 *          schema:
 *              title: Return String
 *              type: string
 *              example: "Section added succesfully"
 *        500:
 *          description: Error
 *          schema:
 *            type: string
 *            example: "Could not add Section"
 * definitions:
 *   Students:
 *     description: Student object
 *     properties:
 *       name:
 *         type: string
 *         example: Modest
 *         description: Student name
 *       Telegram:
 *         type: string
 *         example: pokemon
 *         description: Students Telegram
 *       Instagram:
 *         type: string
 *         example: pokemon
 *         description: Students Instagram
 *       date:
 *         type: string
 *         example: 10.21.2020
 *         description: date of registration
 *       login:
 *         type: string
 *         example: Modest
 *         description: Students mail 
 *       modules:
 *         type: object
 *         example: ['React', 'JS', 'HTML/CSS']
 *         description: Students modules 
 *     required:
 *      - name
 *      - Telegram
 *      - Instagram
 *      - date
 *      - login
 *      - modules
 */
router.post('/create',authMiddleware, ModulesController.create)

module.exports = router
