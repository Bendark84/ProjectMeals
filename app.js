const express = require('express');

const { usersRoutes } = require('./routes/user.routes');
const { restaurantRoutes } = require('./routes/restaurant.routes');
const { mealRoutes } = require('./routes/meal.routes');
const { orderRoutes } = require('./routes/orders.routes');
const { reviewRoutes } = require('./routes/reviews.routes');

// Controllers
const { globalErrorHandler } = require('./controllers/error.controller');

const app = express();

app.use(express.json());

//Endpoints

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/restaurant', restaurantRoutes);
app.use('/api/v1/meal', mealRoutes);
app.use('/api/v1/order', orderRoutes);
app.use('/api/v1/review', reviewRoutes);

// Global error handler
app.use(globalErrorHandler);

//Catch non-existing endpoints
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
