const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contents');
const fieldRouter = require('./fields');
const collectionRouter = require('./collections');
const contentValidation = require('../middlewares/contentValidation');


router.get('/', contentController.getAllContents);
router.post('/', contentValidation.createContentValidation, contentController.createContent);
router.get('/:contentId', contentValidation.getContentByIdValidation, contentController.getContentById);
router.patch('/:contentId', contentValidation.updateContentNameValidation, contentController.updateContentName);

router.use('/:contentId/fields', fieldRouter);
router.use('/:contentId/collections', collectionRouter);

module.exports = router;
