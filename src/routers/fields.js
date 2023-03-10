const express = require('express');
const router = express.Router({ mergeParams: true});
const fieldController = require('../controllers/fields');
const fieldSchemaValidation = require('../middlewares/fieldValidation');

router.patch('/', fieldSchemaValidation.addFieldValidation, fieldController.addField);
router.patch('/:oldName', fieldSchemaValidation.updateFieldValidation, fieldController.updateField);
router.delete('/:fieldName', fieldSchemaValidation.deleteFieldValidation, fieldController.deleteField);

module.exports = router;