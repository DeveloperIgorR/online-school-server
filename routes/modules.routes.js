const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth.middleware')
const ModulesController= require('../controllers/modules.controllers')

/**
 * @swagger
 * /api/modules:
 *  get:
 *      summary: Get all modules
 *      description: Returns all modules from DB
 *      tags:
 *          - Modules
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get('/', authMiddleware, ModulesController.getAll)


/**
 * @swagger
 *  /api/modules/create:
 *    post:
 *      summary: Add new module
 *      description:
 *          Add new 'Modules' object.
 *      tags:
 *          - Modules
 *      parameters:
 *        - name: Module
 *          in: body
 *          description: task object
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Modules'
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
 *   Modules:
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
