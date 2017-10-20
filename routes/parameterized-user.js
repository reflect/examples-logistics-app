const express = require('express');
const passport = require('passport');
const reflect = require('reflect-node');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();

// Reflect View keys
// If no keys provided, send bad keys to render error message
const reflectSecretKey = process.env.REFLECT_SECRET_KEY || '12345';
const reflectAccessKey = process.env.REFLECT_ACCESS_KEY || '12345';

/* GET user profile. */
router.get('/', ensureLoggedIn, function(req, res, next) {

  // Logic for Reflect parameterization
  user = req.user

  userParams = [{
              field: 'Customer Name',
              op: '=',
              value: 'Logan Haushalter'
            }];
            // Replace the field and the harcoded user value with your unique user attribute
            // for example, field: 'id' and value: user.id,

  reflectSignedToken = reflect.generateToken(reflectSecretKey, userParams);

  reflectUserAuth = { reflectAccessKey, reflectSignedToken };

  path = 'distribution';

  // If the user is logged in, render the page and pass on the user object and Reflect auth tokens
  res.render(path,{ user, reflectUserAuth });
});

module.exports = router;
