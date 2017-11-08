const checkEmail = require('./check_email');
const sendemail = require('sendemail');
const env = require('env2')('config.env');

const email = sendemail.email;
sendemail.set_template_directory('src/email_templates');
const {getForm} = require('../model/form_queries');
const { addData } = require('./helpers.js');
const { validateSendEmail } = require('./validate');

exports.get = (req, res) => {
  res.render('send', {
    errorMessages: req.flash('error'),
    successMessages: req.flash('success'),
    activePage: {
      send: true,
    },
    pageTitle: 'Send',
  });
};

exports.post = (req, res) => {
  const validatedEmail = validateSendEmail(req.body);
  if (!validatedEmail.isValid) {
    req.flash('error', validatedEmail.message);
    res.redirect('send');
  } else {
    getForm(req.session.id).then((data) => {
      const context = Object.assign(data, { name: req.session.user });
      const options = {
        templateName: 'Hello',
        subject: 'All about me questionnaire',
        toAddresses: [req.body.email],
        htmlCharset: 'utf16',
        textCharset: 'utf16',
        subjectCharset: 'utf8',
        context,
      };

      if (req.body.sendemailcopy) {
        options.bccAddresses = [data.email];
      }
      return options;
    }).catch((error) => {
      console.log('error from send email', error);
      res.status(500).render('error', {
        layout: 'error',
        statusCode: 500,
        errorMessage: 'Internal server error'
      });
    }).then((options) => {
      sendemail.sendMany(options, (error, result) => {
        console.log(' - - - - - - - - - - - - - - - - - - - - -> email sent: ');
        console.log(result);
        console.log('error: ', error);
        console.log('options', options);
        console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - -');
      });
    });
    res.redirect('finish');
  }
};
