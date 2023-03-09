const express = require('express');
const router = express.Router({ mergeParams: true});
const fieldController = require('../controllers/fields');

router.patch('/', fieldController.addField);
router.patch('/:oldName', fieldController.updateField);
router.delete('/:fieldName', fieldController.deleteField);

module.exports = router;