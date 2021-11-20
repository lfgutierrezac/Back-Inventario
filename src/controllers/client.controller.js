const Client = require('../models/client')

const registerClient = async function (req,res){
    try {
        const client = new Client(req.body)
        await client.save();
        res.send(client)
    } catch (error) {
        res.send(error)
    }
}

module.exports = registerClient