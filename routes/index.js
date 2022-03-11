var express = require('express');
var router = express.Router();
const pageController = require('../controllers/pageController');
const userController = require('../controllers/userController');

router.get('/', pageController.renderDashboard);
router.get('/accounting', pageController.renderAccounting);
router.get('/marketing', pageController.renderMarketing);
router.get('/sales',pageController.renderSales);
router.get('/hr', pageController.renderHR);
router.get('/profile',pageController.viewProfile);

router.get('/register',userController.renderRegistrationForm);
router.get('/register',userController.registerUser);

router.get('/login',userController.renderLoginForm);
router.post('/login',userController.loginUser);
module.exports = router;
router.get('/layout',userController.logout);
