const { Restaurant } = require('../models/restaurants.model');
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const restaurantExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const restaurant = await Restaurant.findOne({
    where: { id, status: 'active' },
  });

  if (!restaurant) {
    return next(new AppError('Restaurant not Found', 404));
  }
  req.restaurant = restaurant;
  next();
});

module.exports = {
  restaurantExists,
};
