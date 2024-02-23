const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll();
    return res.json(users)
});
const createUser = catchError(async(req, res) => {
    const { first_name, last_name, email, password,birthday, image_url } = req.body;
    const user = await User.create({ 
        first_name: first_name, 
        last_name: last_name,
        email: email,
        password: password,
        birthday: birthday,
        image_url: image_url,
  });
return res.status(201).json(user)
});
const getOneUser = catchError(async(req, res) => {
    const user = await User.findByPk(1)
return res.json(user)
});
const removeUser = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: {id: id}});
return res.sendStatus(204);
});
const updateUser = catchError(async(req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password, birthday, image_url } = req.body;
const user = await User.update(
            { 
                    first_name, 
                    last_name,
                    email,
                    password,
                    birthday,
                    image_url
            }, 
            { where: {id}, returning: true }
    );
return res.json(user[1][0]);
});

module.exports = {
    getAll, createUser, getOneUser, removeUser, updateUser
}