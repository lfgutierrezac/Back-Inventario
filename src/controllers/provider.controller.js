const Provider = require('../models/provider')

const providerController = {
    registerProvider:async function (req,res){
    try {
        const provider = new Provider(req.body)
        await provider.save();
        // res.send(provider)
        res.status(200).json({"provider":provider})
    } catch (error) {
        // res.send(error)
        res.status(500).json({"error":error})
    }
    },
    getProvider:async function (req,res){
        try {
            const provider = await Provider.find({user:req.body.user});
            // res.send(provider)
            res.status(200).json({"providers":provider})
        } catch (error) {
            // res.send(error)
            res.status(500).json({"error":error})
        }
    }
}
module.exports = providerController