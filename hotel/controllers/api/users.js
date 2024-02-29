const User = require("../../models/User");
const jwt = require("jsonwebtoken");

async function create(req, res) {
    try {
        const user = await User.create(req.body)

        const token = createJWT(user)

        res.json(token) // returning the token
    } catch (e){
        res.status(400).json(e);
    }
}
    // Helper Function 

    function createJWT(user){
        return jwt.sign(
            { user },
            process.env.SECRET,
            { expiresIn: '24h'}
        )
    }

module.exports = {
    create,
};