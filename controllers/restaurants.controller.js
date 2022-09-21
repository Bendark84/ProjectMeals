const { Restaurant } = require('../models/restaurants.model');

const getAllRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findAll({
      where: { status: 'active' },
    });

    res.status(200).json({
      status: 'success',
      data: { restaurant },
    });
  } catch (error) {
    console.log(error);
  }
};

const createRestaurant = async (req, res) => {
  try {
    const { name, address, rating } = req.body;

    const newRestaurant = await Restaurant.create({
      name,
      address,
      rating,
    });

    res.status(201).json({
      status: 'success',
      data: { newRestaurant },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const { name, address } = req.body;
    const { restaurant } = req;

    await restaurant.update({ name, address });

    res.status(200).json({
      status: 'success',
      data: { restaurant },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const { restaurant } = req;

    await restaurant.update({ status: 'cancelled' });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
