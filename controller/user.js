
const User = require("../models/user")
exports.postuser = async (req, res, next) =>{
    const password = req.body.password;
    const email = req.body.email;
    const Usr = new User (null, email, password);
    Usr.save();
}

exports.findbyemail = async (req, res, next) =>{
    
    const email = req.body.email;
    User.find_by_email(email);
}