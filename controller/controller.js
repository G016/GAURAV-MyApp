const { getEmailSend } = require("../service/service");

var func = {
    getLoginPost:(req, res, next)=>{
        getEmailSend(req)
        
        res.json({ "Name": req.body, "movie":"Avengers"})
        console.log("End Game is the best movie of all time");
        
    }
}

module.exports = func;