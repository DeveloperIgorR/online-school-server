const express = require('express')
const router = express.Router()
const StudentsController= require('../controllers/students.controllers')

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

router.get('/',StudentsController.getAll)

/**
 * @swagger
 * /api/students/{id}:
 *  get:
 *      summary: Get student with {id}
 *      tags:
 *        - Students
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of student
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get('/:id',StudentsController.getOne)

/**
 * @swagger
 *  /api/students/create:
 *    post:
 *      summary: Add new student
 *      description:
 *          Add new 'Students' object.
 *      tags:
 *          - Student
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
 *         example: #pokemon
 *         description: Students Telegram
 *       Instagram:
 *         type: string
 *         example: #pokemon
 *         description: Students Instagram
 *       date:
 *         type: string
 *         example: Modest
 *         description: date of registration
 *       login:
 *         type: string
 *         example: Modest
 *         description: Students mail 
 *       module:
 *         type: object
 *         example: ['React', 'JS', 'HTML/CSS']
 *         description: Students modules 
 *     required:
 *      - name
 *      - Telegram
 *      - Instagram
 *      - date
 *      - login
 *      - module
 */
router.post('/create',StudentsController.create)

/**
 * @swagger
 * /api/students/update/{id}:
 *  put:
 *      summary: Updates a student with {id}
 *      tags:
 *        - Students
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a student to update
 *          type: integer
 *        - in: body
 *          name: Student
 *          required: true
 *          description: Object to update
 *          schema:
 *              $ref: '#/definitions/Students'
 *      responses:
 *          '200':
 *              description: Successfull response
 */
router.put('/update/:id',StudentsController.update)

/**
 * @swagger
 * /api/students/delete/{id}:
 *  delete:
 *      summary: Delete student with {id}
 *      tags:
 *        - Students
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of a student to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */
router.delete('/delete/:id',StudentsController.delete)

module.exports = router