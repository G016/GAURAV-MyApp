const { getEmailSend } = require("../service/service");

var func = {
    getLoginPost:(req, res, next)=>{
        getEmailSend(req)
        
        res.json({ "Name": req.body, "movie":"KGF ch3"})
        console.log("sholay is the best movie of all time");
        
    }
}

module.exports = func;