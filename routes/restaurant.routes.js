const express = require('express');

const {
  getAllRestaurant,
  getOneRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require('../controllers/restaurants.controller');

//Middleware
const { restaurantExists } = require('../middlewares/restaurant.middlewares');
const { protectSession } = require('../middlewares/auth.middlewares');

const restaurantRoutes = express.Router();

restaurantRoutes.get('/', getAllRestaurant);
restaurantRoutes.get('/:id', getOneRestaurant);

restaurantRoutes.use(protectSession);

restaurantRoutes.post('/', createRestaurant);
restaurantRoutes.patch('/:id', restaurantExists, updateRestaurant);
restaurantRoutes.delete('/:id', restaurantExists, deleteRestaurant);

module.exports = { restaurantRoutes };
