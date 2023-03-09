const express = require('express');
const router = express.Router({mergeParams: true});
const collectionController = require('../controllers/collections');
const { collectionValidation } = require('../middlewares/collectionValidation');

router.get('/', collectionController.getAllCollections);
router.get('/:collectionId', collectionController.getCollectionById);
router.post('/', collectionValidation, collectionController.createCollection);
router.patch('/:collectionId', collectionValidation, collectionController.updateCollection);
router.delete('/:collectionId', collectionController.deleteCollection);


module.exports = router;

