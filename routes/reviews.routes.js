const express = require('express');

const {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviews.controller');

//Middleware
const { reviewExists } = require('../middlewares/reviews.middlewares');

const reviewRoutes = express.Router();
reviewRoutes.get('/', getAllReviews);

reviewRoutes.post('/', createReview);
reviewRoutes.patch('/:id', reviewExists, updateReview);
reviewRoutes.delete('/:id', reviewExists, deleteReview);

module.exports = { reviewRoutes };
