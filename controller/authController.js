const authModel = require('../model/authModel')


const login = (req, res)=>{
        let {email, password} = req.body;
        res.send(email)
}
const signup = async(req, res) =>{
        let {username, email, password} = req.body;
        const signUpResult = new authModel({username,email,password})
        let result = await signUpResult.save()
        res.send(result)
}


module.exports = {login, signup}
