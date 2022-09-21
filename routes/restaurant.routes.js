const express = require('express');

const {
  getAllRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require('../controllers/restaurants.controller');

//Middleware
const { restaurantExists } = require('../middlewares/restaurant.middlewares');

const restaurantRoutes = express.Router();
restaurantRoutes.get('/', getAllRestaurant);
restaurantRoutes.post('/', createRestaurant);
restaurantRoutes.patch('/:id', restaurantExists, updateRestaurant);
restaurantRoutes.delete('/:id', restaurantExists, deleteRestaurant);

module.exports = { restaurantRoutes };
