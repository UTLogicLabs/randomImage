const router = require('express').Router();
const Images = require('./image.controller');

router.get('/:height', Images.get);
router.get('/:width/:height', Images.get);

router.get('/id/:id/:height', Images.get);
router.get('/id/:id/:width/:height', Images.get);

router.get('/seed/:seed/:height', Images.get);
router.get('/seed/:seed/:width/:height', Images.get);


module.exports = router;