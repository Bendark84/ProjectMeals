const express = require('express');

const {
  getAllMeal,
  getOneMeal,
  createMeal,
  updateMeal,
  deleteMeal,
} = require('../controllers/meals.controller');

//Middleware
const { mealExists } = require('../middlewares/meals.middlewares');
const { protectSession } = require('../middlewares/auth.middlewares');

const mealRoutes = express.Router();

mealRoutes.get('/', getAllMeal);
mealRoutes.get('/:id', getOneMeal);

mealRoutes.use(protectSession);

mealRoutes.post('/:restaurantId', createMeal);
mealRoutes.patch('/:id', mealExists, updateMeal);
mealRoutes.delete('/:id', mealExists, deleteMeal);

module.exports = { mealRoutes };
