const { Meal } = require('../models/meals.model');
const { catchAsync } = require('../utils/catchAsync.util');

const getAllMeal = catchAsync(async (req, res) => {
  const meal = await Meal.findAll({
    where: { status: 'active' },
  });

  res.status(200).json({
    status: 'success',
    data: { meal },
  });
});
const getOneMeal = catchAsync(async (req, res) => {
  const meal = await Meal.findOne({
    where: { status: 'active' },
  });

  res.status(200).json({
    status: 'success',
    data: { meal },
  });
});

const createMeal = catchAsync(async (req, res) => {
  const { name, price } = req.body;
  const { restaurantId } = req.params;

  const newMeal = await Meal.create({
    name,
    price,
    restaurantId, //TODO => FUNCIONO PROBARLO EN OTRO CONTROLLER
  });
  // await Restaurant.create({ restaurantId: newMeal.id });

  res.status(201).json({
    status: 'success',
    data: { newMeal },
  });
});

const updateMeal = catchAsync(async (req, res) => {
  const { name, price } = req.body;
  const { meal } = req;

  await meal.update({ name, price });

  res.status(200).json({
    status: 'success',
    data: { meal },
  });
});

const deleteMeal = catchAsync(async (req, res, next) => {
  const { meal } = req;

  await meal.update({ status: 'cancelled' });

  res.status(204).json({ status: 'success' });
  next();
});

module.exports = {
  getAllMeal,
  getOneMeal,
  createMeal,
  updateMeal,
  deleteMeal,
};
