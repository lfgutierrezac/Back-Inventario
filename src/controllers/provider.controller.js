const Provider = require('../models/provider')

const providerController = {
    registerProvider:async function (req,res){
    try {
        const provider = new Provider(req.body)
        await provider.save();
        res.send(provider)
    } catch (error) {
        res.send(error)
    }
},
getProvider:async function (req,res){
    try {
        const provider = await Provider.find();
        res.send(provider)
    } catch (error) {
        res.send(error)
    }
}
}
module.exports = providerController