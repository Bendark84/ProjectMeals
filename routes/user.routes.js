const express = require('express');
const { body, validationResult } = require('express-validator');

const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  login,
} = require('../controllers/user.controller');

//Middleware
const { userExists } = require('../middlewares/users.middlewares');
const {
  protectSession,
  protectUsersAccount,
  protectAdmin,
} = require('../middlewares/auth.middlewares');
const {
  createUserValidators,
} = require('../middlewares/validators.middlewares');

const usersRoutes = express.Router();

usersRoutes.post('/signup', createUserValidators, createUser);
usersRoutes.post('/login', login); //!revisar si funciona
usersRoutes.get('/', getAllUser);

usersRoutes.use(protectSession);

usersRoutes.patch('/:id', userExists, protectUsersAccount, updateUser);
usersRoutes.delete('/:id', userExists, protectUsersAccount, deleteUser);

module.exports = { usersRoutes };
