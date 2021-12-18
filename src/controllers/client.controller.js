const Client = require('../models/client')

const clientController = {
    registerClient:async function (req,res){
    try {
        const client = new Client(req.body)
        await client.save();
        // res.send(client)
        res.status(200).json({"client":client})
    } catch (error) {
        // res.send(error)
        res.status(500).json({"error":error})
    }
    },
    getClient:async function (req,res){
        try {
            const client = await Client.find({user:req.body.user});
            // res.send(client)
            res.status(200).json({"clients":client})
        } catch (error) {
            // res.send(error)
            res.status(500).json({"error":error})
        }
    }
}
module.exports = clientController