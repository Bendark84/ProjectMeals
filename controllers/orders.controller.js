const { Meal } = require('../models/meals.model');
const { Order } = require('../models/orders.model');
const { catchAsync } = require('../utils/catchAsync.util');

const getAllOrder = catchAsync(async (req, res) => {
  const order = await Order.findAll({
    where: { status: 'active' },
  });

  res.status(200).json({
    status: 'success',
    data: { order },
  });
});

const getOneOrder = catchAsync(async (req, res) => {
  const order = await Order.findOne({
    where: { status: 'active' },
  });

  res.status(200).json({
    status: 'success',
    data: { order },
  });
});

const createOrder = catchAsync(async (req, res) => {
  const { mealId, quantity } = req.body;
  const { userId, totalPrice } = req.params;

  const meal = await Meal.findOne({ where: { id: mealId } });

  // if (!meal) {
  // Send error
  // }

  // chequear esta solucion
  const Price = meal.price * quantity;
  const newOrder = await Order.create({
    mealId,
    quantity,
    userId,
    totalPrice,
    Price,
  });

  res.status(201).json({
    status: 'success',
    data: { newOrder },
  });
});

const updateOrder = catchAsync(async (req, res) => {
  const { status } = req.body;
  const { order } = req;

  await order.update({ status });

  res.status(200).json({
    status: 'success',
    data: { order },
  });
});

const deleteOrder = catchAsync(async (req, res) => {
  const { order } = req;

  await order.update({ status: 'cancelled' });

  res.status(204).json({ status: 'success' });
});

module.exports = {
  getAllOrder,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
