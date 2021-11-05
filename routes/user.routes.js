const express = require('express')
const router = express.Router()
const UsersController= require('../controllers/users.controllers')

/**
 * @swagger
 *  /api/users/create:
 *    post:
 *      summary: Add new users
 *      description:
 *          Add new 'Users' object.
 *      tags:
 *          - Users
 *      parameters:
 *        - name: User
 *          in: body
 *          description: task object
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Users'
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
 *   Users:
 *     description: User object
 *     properties:
 *       email:
 *         type: string
 *         example: user@.ru
 *         description: Users mail
 *       password:
 *         type: string
 *         example: pokemon
 *         description: Users password      
 *     required:
 *      - email
 *      - password     
 */
router.post('/create',UsersController.create)

module.exports = router