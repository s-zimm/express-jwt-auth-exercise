const jwt = require('jsonwebtoken');
const findUserByUsername = require('../db/db').findUserByUsername;

const signature = 'ELOHELasignature';

const createToken = user => {
    return jwt.sign(
        { id: user.id },
        signature
    );
}

const postToken = async (req, res) => {
    let {username, password} = req.body;
    let user = findUserByUsername(username);
    console.log(user)

    if (password === user.password) {
        let token = await createToken(user);
        console.log(token)
        res.redirect('/home.html');
    } else {
        res.send('Invalid credentials!');
    }
}

const checkAuthentication = (req, res, next) => {
    if (req.authentication) {
        next();
    } else {
        res.send('NOT AUTHENTICATED');
    }
}

module.exports = {
    createToken,
    postToken,
    checkAuthentication
}