const { User } = require('./users.model');
const { Review } = require('./reviews.model');
const { Order } = require('./orders.model');
const { Restaurant } = require('./restaurants.model');
const { Meal } = require('./meals.model');

const initModels = () => {
  // 1 User <------> M Review
  User.hasMany(Review, { foreignKey: 'userId' });
  Review.belongsTo(User);

  // 1 User <-------> M Orders
  User.hasMany(Order, { foreignKey: 'userId' });
  Order.belongsTo(User);

  //1 Restautant <------> M Review
  Restaurant.hasMany(Review, { foreignKey: 'restaurantId' });
  Review.belongsTo(Restaurant);

  //1 Restaurant <-----> M Meals
  Restaurant.hasMany(Meal, { foreignKey: 'restaurantId' });
  Meal.belongsTo(Restaurant);

  //1 Meal <-------> 1 Orders
  Meal.hasOne(Order, { foreignKey: 'mealId' });
  Order.belongsTo(Meal);
};

module.exports = { initModels };
