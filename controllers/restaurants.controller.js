const { Restaurant } = require('../models/restaurants.model');
const { catchAsync } = require('../utils/catchAsync.util');

const getAllRestaurant = catchAsync(async (req, res) => {
  const restaurant = await Restaurant.findAll({
    where: { status: 'active' },
  });

  res.status(200).json({
    status: 'success',
    data: { restaurant },
  });
});

const getOneRestaurant = catchAsync(async (req, res) => {
  const restaurant = await Restaurant.findOne({
    where: { status: 'active' },
  });

  res.status(200).json({
    status: 'success',
    data: { restaurant },
  });
});

const createRestaurant = catchAsync(async (req, res) => {
  const { name, address, rating } = req.body;

  const newRestaurant = await Restaurant.create({
    name,
    address,
    rating,
  });

  res.status(201).json({
    status: 'success',
    data: { newRestaurant },
  });
});

const updateRestaurant = catchAsync(async (req, res) => {
  const { name, address } = req.body;
  const { restaurant } = req;

  await restaurant.update({ name, address });

  res.status(200).json({
    status: 'success',
    data: { restaurant },
  });
});

const deleteRestaurant = catchAsync(async (req, res) => {
  const { restaurant } = req;

  await restaurant.update({ status: 'cancelled' });

  res.status(204).json({ status: 'success' });
});

module.exports = {
  getAllRestaurant,
  getOneRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
