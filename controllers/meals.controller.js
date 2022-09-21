const { Meal } = require('../models/meals.model');

const getAllMeal = async (req, res) => {
  try {
    const meal = await Meal.findAll({
      where: { status: 'active' },
    });

    res.status(200).json({
      status: 'success',
      data: { meal },
    });
  } catch (error) {
    console.log(error);
  }
};
const getOneMeal = async (req, res) => {
  try {
    const meal = await Meal.findOne({
      where: { status: 'active' },
    });

    res.status(200).json({
      status: 'success',
      data: { meal },
    });
  } catch (error) {
    console.log(error);
  }
};

const createMeal = async (req, res) => {
  try {
    const { name, price, restaurantId } = req.body;

    const newMeal = await Meal.create({
      name,
      price,
      restaurantId,
    });

    res.status(201).json({
      status: 'success',
      data: { newMeal },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateMeal = async (req, res) => {
  try {
    const { name, price } = req.body;
    const { meal } = req;

    await meal.update({ name, price });

    res.status(200).json({
      status: 'success',
      data: { meal },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteMeal = async (req, res) => {
  try {
    const { meal } = req;

    await meal.update({ status: 'cancelled' });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllMeal,
  getOneMeal,
  createMeal,
  updateMeal,
  deleteMeal,
};
