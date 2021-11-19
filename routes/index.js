const express = require('express')
const UsersController= require('../controllers/users.controllers')
const router = express.Router()
const studentsRoutes = require('./student.routes')
const usersRoutes = require('./user.routes')
const modulesRoutes = require('./modules.routes')

router.use('/students', studentsRoutes)
router.use('/users', usersRoutes)
router.use('/modules',modulesRoutes)
/**
 * @swagger
 *  /api/auth:
 *    post:
 *      summary: Авторизация
 *      description:
 *          Login route.
 *      tags:
 *          - Auth
 *      parameters:
 *        - name: User
 *          in: body
 *          description: login object
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Users'
 *      responses:
 *        200:
 *          description: Successful response
 *          schema:
 *              title: Return String
 *              type: string
 *              example: "Auth was succesfully"
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

 router.post("/auth", async (req, res) => {
    try {
      let data = await UsersController.login(req.body);
      res.send(data);
    } catch (err) {
      res.send(err);
    }
  })

module.exports = router