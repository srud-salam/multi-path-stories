const express = require('express');
const router = express.Router();

const storyController = require('../controller/storyController');

router.get('/', function (req, res) {
  res.render('index', { stories: storyController.getAll(), pageId: storyController.getCurrentPageId });
});

router.get('/page/:pageId/:storyId/:sentence/:isClicked', function (req, res) {
  const { pageId, storyId, sentence, isClicked } = req.params;

  if (isClicked === 'true') {
    res.redirect('/page/' + pageId);
  } else {
    storyController.update(storyId, sentence, 'true');
    storyController.new(sentence);
    res.redirect('/');
  }
});

router.get('/page/:pageId', function (req, res) {
  const { pageId } = req.params;
  storyController.updateCurrentPageId(pageId);
  res.redirect('/');
});

router.post('/add/:storyId', function (req, res) {
  const { sentence } = req.body;
  const { storyId } = req.params;

  storyController.add(storyId, sentence);
  res.redirect('/');
});

module.exports = router;
