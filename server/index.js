"use strict";
const express = require('express');
// const config = require('./config');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// const allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Access-Control-Allow-Headers', '*');
//   next();
// }

const authMiddleware = require('./middleware')

// app.use(allowCrossDomain)
// app.use(passport.initialize());
// app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// google?
// const localSignupStrategy = require('./passport/local-signup');
// const localLoginStrategy = require('./passport/local-login');
// passport.use('local-signup', localSignupStrategy);
// passport.use('local-login', localLoginStrategy);

router.use((req, res, next) => {
  console.log("something is happening");
  next();
})

// router.get('/', (req, res) => {
//   // check google auth by org (BNR) if authed ->
//   if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
//   let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 });

//   // redirect with token
//   res.status(200).send({ auth: true, token: token, user: user });
// })

// all routes query google if authed redirect to... need this?
// app.get('*', (request, response) => {
//   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
// });

router.use('/api', authMiddleware);
router.use('/api', (req, res) => {
  res.status(200).json({hello: 'hello'})
})

app.use(router)

app.listen(PORT,  () => {
  console.log(`listening on ${PORT}`)
})
