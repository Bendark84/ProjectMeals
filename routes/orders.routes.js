const express = require('express');

const {
  getAllOrder,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/orders.controller');

//Middleware
const { orderExists } = require('../middlewares/orders.middlewares');
const { protectSession } = require('../middlewares/auth.middlewares');

const orderRoutes = express.Router();

orderRoutes.use(protectSession);

orderRoutes.get('/', getAllOrder);
orderRoutes.get('/:id', getOneOrder);
orderRoutes.post('/', createOrder);
orderRoutes.patch('/:id', orderExists, updateOrder);
orderRoutes.delete('/:id', orderExists, deleteOrder);

module.exports = { orderRoutes };
