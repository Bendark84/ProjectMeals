const { Review } = require('../models/reviews.model');

const getAllReviews = async (req, res) => {
  try {
    const review = await Review.findAll({
      // where: { status: 'active' },
    });

    res.status(200).json({
      status: 'success',
      data: { review },
    });
  } catch (error) {
    console.log(error);
  }
};

const createReview = async (req, res) => {
  try {
    const { userId, comment, restaurantId, rating } = req.body;

    const newReview = await Review.create({
      userId,
      comment,
      restaurantId,
      rating,
    });

    res.status(201).json({
      status: 'success',
      data: { newReview },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateReview = async (req, res) => {
  try {
    const { comment, rating } = req.body;
    const { review } = req;

    await review.update({ comment, rating });

    res.status(200).json({
      status: 'success',
      data: { review },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { review } = req;

    await review.update({ status: 'deleted' });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
};
