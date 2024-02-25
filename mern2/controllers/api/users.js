const User = require("../../models/User");
const jwt = require('jswonwebtoken')

async function create (req, res) {
    try {
        const user = await User.create(req.body)

        res.json(user) // returning the token
    }catch (e){
        res.status(400).json(e);
    }
}
    

module.exports = {
    create,
};