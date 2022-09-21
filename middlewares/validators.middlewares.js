const { body, validationResult } = require('express-validator');

// const express = require('express');

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMsgs = errors.array().map((err) => err.msg);

    const message = errorMsgs.join('. ');

    return res.status(400).json({
      status: 'error',
      message,
    });
  }
  next();
};

module.exports = {};
