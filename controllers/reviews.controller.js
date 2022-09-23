const { Review } = require('../models/reviews.model');

const { catchAsync } = require('../utils/catchAsync.util');

const getAllReviews = catchAsync(async (req, res, next) => {
  const review = await Review.findAll({
    // where: { status: 'active' },
  });

  res.status(200).json({
    status: 'success',
    data: { review },
  });
  next();
});

const createReview = catchAsync(async (req, res, next) => {
  const { comment, rating } = req.body;
  const { userId, restaurantId } = req.params;

  const newReview = await Review.create({
    comment,
    rating,
    userId,
    restaurantId,
  });

  res.status(201).json({
    status: 'success',
    data: { newReview },
  });
  next();
});

const updateReview = catchAsync(async (req, res, next) => {
  const { comment, rating } = req.body;
  const { review } = req;

  await review.update({ comment, rating });

  res.status(200).json({
    status: 'success',
    data: { review },
  });
  next();
});

const deleteReview = catchAsync(async (req, res, next) => {
  const { review } = req;

  await review.update({ status: 'deleted' });

  res.status(204).json({ status: 'success' });
  next();
});

module.exports = {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
};
