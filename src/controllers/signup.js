const { sign } = require('./passwordModule')();
const { getUser, addUser } = require('../model/user_queries');
const { validateSignUp } = require('./validate');


exports.get = (req, res) => {
  res.render('signup', {
    activePage: {
      signup: true,
    },
    pageTitle: 'Signup',
  });
};


exports.post = (req, res) => {
  const userData = req.body;
  const validatedUser = validateSignUp(userData);
  if (!validatedUser.isValid) {
    res.status(400).render('signup', {
      pageTitle: 'Signup',
      messages: [{
        content: validatedUser.message,
        error: true,
      }],
    });
  } else {
    getUser(userData.email)
      .then((existingUser) => {
        if (!existingUser) {
          const hashedPassword = sign(userData.password);
          addUser(userData.name, userData.email, hashedPassword)
            .then((id) => {
              req.session.user = userData.name;
              req.session.id = id;
              res.redirect('/home');
            })
            .catch((err) => {
              console.log(err);
              res.status(500).render('error', {
                layout: 'error',
                statusCode: 500,
                errorMessage: 'Internal server error',
              });
            });
        } else {
          // email already in database
          res.status(400).render('signup', {
            pageTitle: 'Signup',
            messages: [{
              content: `Account already exists for ${userData.email}`,
              error: true,
            }],
            userData,
          });
        }
      })
      .catch((err) => {
        console.log('err: ', err);
        res.status(500).render('error', {
          layout: 'error',
          statusCode: 500,
          errorMessage: 'Internal server error',
        });
      });
  }
};
