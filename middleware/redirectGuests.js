module.exports = function(req,res,next){
    if (!req.user){
        res.redirect('/login');
        return;
    }

    next();
}
const redirectGuests = require('../middleware/redirectGuests');

router.get('/',redirectGuests,pageController.renderDashboard);
router.get('/accounting',redirectGuests,pageController.renderAccounting);
router.get('marketing',redirectGuests,pageController.renderMarketing);
router.get('/sales',redirectGuests,pageController.renderSales);
router.get('/hr',redirectGuests,pageController.renderHR);
router.get('/profile',redirectGuests,pageController.viewProfile);