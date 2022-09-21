const express = require('express');

const {
  getAllOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/orders.controller');

//Middleware
const { orderExists } = require('../middlewares/orders.middlewares');

const orderRoutes = express.Router();
orderRoutes.get('/', getAllOrder);
orderRoutes.post('/', createOrder);
orderRoutes.patch('/:id', orderExists, updateOrder);
orderRoutes.delete('/:id', orderExists, deleteOrder);

module.exports = { orderRoutes };
