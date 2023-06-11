
let tokenCheck = async function(req,res,next) {
    try {
        const token=req.cookies["token"]
        if(!token) return res.status(200).send({status : false , error : "please Login"})
        let decodedToken = jwt.verify(token , process.env.SECRETKEY)
        if(!decodedToken)  return res.status(401).send({status : false ,error : "The token is not matching"})
        req.head=decodedToken.id
         next()
    } catch(error) {
        res.status(500).send({error : error})
    }
}

module.exports = {tokenCheck}
