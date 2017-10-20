const express = require('express');
const passport = require('passport');
const reflect = require('reflect-node');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();

/* GET user profile. */
router.get('/', ensureLoggedIn, function(req, res, next) {

  user = req.user

  path = 'supply';

  // If the user is logged in, render the page and pass on the user object
  res.render(path, { user });
});

module.exports = router;
