var express = require('express');
var router  = express.Router();
var controller = require('../../controllers/users.controller.js')

// GET all users
router.get('/', controller.verifyUser, controller.getAllUser)
router.post('/register', controller.createUser)
router.post('/login', controller.login)
router.put('/:id', controller.verifyUser, controller.updateUser)
router.delete('/:id', controller.verifyUser, controller.deleteUser)


module.exports = router;
