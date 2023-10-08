const Router = require('express');
const router = Router();
const controller = require('./controller');

router.get('/',controller.getintialdata);
router.get('/getcsv',controller.getcsv);
router.get('/getword',controller.getword);
router.get('/getexcel',controller.getexcel);
router.get('/getpdf',controller.getpdf);

module.exports = router;
