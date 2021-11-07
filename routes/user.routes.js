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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        success: false,
        errors: errors.array(),
      });
    } else {
      try {
        const newUser = await UsersController.registration(req.body);
        res.send(newUser);
      } catch (err) {
        res.status(500).send(err);
      }
    }
  }
)

/**
 * @swagger
 *  /api/users/auth:
 *    post:
 *      summary: Авторизация
 *      description:
 *          Add new 'Users' object.
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
 *          description: Возвращает токен и данные о пользователе
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
router.post('/auth',UsersController.registration)

module.exports = router