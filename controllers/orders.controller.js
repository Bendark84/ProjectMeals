const { Order } = require('../models/orders.model');

const getAllOrder = async (req, res) => {
  try {
    const order = await Order.findAll({
      where: { status: 'active' },
    });

    res.status(200).json({
      status: 'success',
      data: { order },
    });
  } catch (error) {
    console.log(error);
  }
};

const createOrder = async (req, res) => {
  try {
    const { mealId, userId, quantity } = req.body;

    const newOrder = await Order.create({
      mealId,
      userId,
      quantity,
    });

    res.status(201).json({
      status: 'success',
      data: { newOrder },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateOrder = async (req, res) => {
  try {
    const { status } = req.body;
    const { order } = req;

    await order.update({ status });

    res.status(200).json({
      status: 'success',
      data: { order },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { order } = req;

    await order.update({ status: 'cancelled' });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
