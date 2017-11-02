const { saveSection, getSection } = require('../model/form_queries');

exports.get = (req, res) => {
  let context = {
    activePage: { background: true },
    errorMessages: req.flash('error'),
    successMessages: req.flash('success'),
    pageTitle: 'Your background',
    progressPercentage: '80',
    previousPage: '/about',
    nextPage: '/send',
  };
  getSection(req.session.id, 'background')
    .then((data) => {
      context.data = data;
      res.render('background', context);
    })
    .catch((err) => {
      console.log(err);
      req.flash('error', 'Sorry - we couldn\'t load your saved answers for this section');
      res.render('background', context);
    });
};

exports.post = (req, res) => {
  saveSection(req.session.id, 'background', req.body)
    .then(() => {
      res.redirect('send');
    })
    .catch((err) => {
      console.log(err);
      req.flash('error', 'Sorry - the background section couldn\'t be saved');
      res.redirect('background');
    });
};
