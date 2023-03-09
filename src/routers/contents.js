const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contents');
const fieldRouter = require('./fields');
const collectionRouter = require('./collections');


router.get('/', contentController.getAllContents);
router.post('/', contentController.createContent);
router.get('/:contentId', contentController.getContentById);
router.patch('/:contentId', contentController.updateContentName);

router.use('/:contentId/fields', fieldRouter);
router.use('/:contentId/collections', collectionRouter);

module.exports = router;
