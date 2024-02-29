const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')

async function create(req, res) {
    try {
        const user = await User.create(req.body)

        const token = createJWT(user)

        res.json(token) // returning the token
    } catch (e){
        res.status(400).json(e);
    }
}

  async function logIn (req,res){
    try {
        // Find the user by their email address
        const user = await User.findOne({email: req.body.email});
        if (!user) throw new Error();
        
        // Check if the password matches
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        res.status(200).json( createJWT(user) );
      } catch {
        res.status(400).json({ msg: e.message, reason: 'Bad Credentials' });
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
    logIn
};