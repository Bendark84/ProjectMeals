const { Review } = require('../models/reviews.model');
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const reviewExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const review = await Review.findOne({ where: { id, status: 'active' } });

  if (!review) {
    return next(new AppError('review not Found', 404));
  }
  req.review = review;
  next();
});

module.exports = {
  reviewExists,
};
