const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contents');
const fieldRouter = require('./fields');


router.get('/', contentController.getAllContents);
router.post('/', contentController.createContent);
router.get('/:id', contentController.getContentById);
router.patch('/:id', contentController.updateContentName);

router.use('/:id/fields', fieldRouter);

module.exports = router;
