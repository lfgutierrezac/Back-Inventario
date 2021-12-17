const jwt = require('jsonwebtoken')
 
const Authenticate = (req, res, next)=>{
    const token = req.header('x-auth-token')
    if(!token){
        res.status(403).json({msg: "unauthorized"})
    }
 
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.body.user = decoded
        // req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({msg: "invalid token"})
        // res.send(error)
    }
}

module.exports = Authenticate