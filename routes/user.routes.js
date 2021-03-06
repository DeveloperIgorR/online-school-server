const express = require('express')
const router = express.Router()
const UsersController= require('../controllers/users.controllers')
const { body, validationResult } = require("express-validator")
const Validator = require('../middleware/validator')

/**
 * @swagger
 *  /api/users/create:
 *    post:
 *      summary: Регистрация
 *      description:
 *          данные для логина
 *      tags:
 *          - Auth
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
 *              example: "User added succesfully"
 *        500:
 *          description: Error
 *          schema:
 *            type: string
 *            example: "Could not add User"
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
router.post('/registration',Validator.validateLogin(),async (req, res) => {
    const errors = validationResult(req)    
    if (!errors.isEmpty()) {
      return res.status(400).send({
        success: false,
        errors: errors.array(),
      })
    } else {      
      try {        
        const newUser = await UsersController.registration(req.body)
        console.log('$$$$$')
        return res.json(newUser)
      } catch (e) {
        res.status(500).json(e.message)
      }
    }
  }
)

module.exports = router