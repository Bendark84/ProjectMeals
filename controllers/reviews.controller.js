const { Review } = require('../models/reviews.model');

const { catchAsync } = require('../utils/catchAsync.util');

const getAllReviews = catchAsync(async (req, res) => {
  const review = await Review.findAll({
    // where: { status: 'active' },
  });

  res.status(200).json({
    status: 'success',
    data: { review },
  });
});

const createReview = catchAsync(async (req, res) => {
  const { comment, rating } = req.body;

  const newReview = await Review.create({
    comment,
    rating,
  });

  res.status(201).json({
    status: 'success',
    data: { newReview },
  });
});

const updateReview = catchAsync(async (req, res) => {
  const { comment, rating } = req.body;
  const { review } = req;

  await review.update({ comment, rating });

  res.status(200).json({
    status: 'success',
    data: { review },
  });
});

const deleteReview = catchAsync(async (req, res) => {
  const { review } = req;

  await review.update({ status: 'deleted' });

  res.status(204).json({ status: 'success' });
});

module.exports = {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
};
