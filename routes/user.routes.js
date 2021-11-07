const express = require('express')
const router = express.Router()
const UsersController= require('../controllers/users.controllers')

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
router.post('/create',UsersController.create)

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
router.post('/auth',UsersController.create)

module.exports = router