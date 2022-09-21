const express = require('express');
const { body, validationResult } = require('express-validator');

const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

//Middleware
const { userExists } = require('../middlewares/users.middlewares');

const usersRoutes = express.Router();
usersRoutes.get('/', getAllUser);
usersRoutes.post('/', createUser);
usersRoutes.patch('/:id', userExists, updateUser);
usersRoutes.delete('/:id', userExists, deleteUser);

module.exports = { usersRoutes };
