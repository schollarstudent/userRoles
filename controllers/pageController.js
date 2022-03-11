module.exports.renderAccounting = function(req, res){
    res.render('pages/accounting');
}
module.exports.renderDashboard = function(req, res){
    res.render('pages/dashboard');
}
module.exports.renderHR = function(req, res){
    res.render('pages/hr');
}
module.exports.renderMarketing = function(req, res){
    res.render('pages/marketing');
}
module.exports.renderSales= function(req, res){
    res.render('pages/sales');
}
module.exports.viewProfile = function (req,res){
    res.render('pages/profile');
}
module.exports.renderDashboard = function (req,res){
    if (!res.user.can(action)){
        res.redirect('/');
        return;
    }
    res.redirect('pages/dashboard');
}

