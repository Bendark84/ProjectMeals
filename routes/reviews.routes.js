const express = require('express');

const {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviews.controller');

//Middleware
const { reviewExists } = require('../middlewares/reviews.middlewares');
const { protectSession } = require('../middlewares/auth.middlewares');

const reviewRoutes = express.Router();

reviewRoutes.get('/', getAllReviews);

reviewRoutes.use(protectSession);

reviewRoutes.post('/reviews/:restaurantId', createReview);
reviewRoutes.patch('/reviews/:id', reviewExists, updateReview);
reviewRoutes.delete('/reviews/:id', reviewExists, deleteReview);

module.exports = { reviewRoutes };
