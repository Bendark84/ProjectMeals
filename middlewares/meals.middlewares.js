const { Meal } = require('../models/meals.model');

const mealExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const meal = await Meal.findOne({ where: { id } });

    if (!meal) {
      return res.status(404).json({
        status: 'error',
        message: 'Meal not Found',
      });
    }
    req.meal = meal;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  mealExists,
};
