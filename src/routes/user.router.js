const {getAll,createUser, getOneUser, removeUser, updateUser} = require('../controllers/user.controller.js')
const express = require('express');

const userRouter = express.Router();

userRouter.route("/users")
		.get(getAll)
        .post(createUser)
        
userRouter.route( "/users/:id" )
        .delete(removeUser)
        .patch(updateUser)
        .get(getOneUser)

module.exports = userRouter;