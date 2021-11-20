const Client = require('../models/client')

const clientController = {
    registerClient:async function (req,res){
    try {
        const client = new Client(req.body)
        await client.save();
        res.send(client)
    } catch (error) {
        res.send(error)
    }
},
getClient:async function (req,res){
    try {
        const client = await Client.find();
        res.send(client)
    } catch (error) {
        res.send(error)
    }
}
}
module.exports = clientController