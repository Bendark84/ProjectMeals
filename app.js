const express = require('express');

const { usersRoutes } = require('./routes/user.routes');
const { restaurantRoutes } = require('./routes/restaurant.routes');
const { mealRoutes } = require('./routes/meal.routes');
const { orderRoutes } = require('./routes/orders.routes');
const { reviewRoutes } = require('./routes/reviews.routes');

const app = express();

app.use(express.json());

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/restaurant', restaurantRoutes);
app.use('/api/v1/meal', mealRoutes);
app.use('/api/v1/order', orderRoutes);
app.use('/api/v1/review', reviewRoutes);

module.exports = { app };
