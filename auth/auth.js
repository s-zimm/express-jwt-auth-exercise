const jwt = require('jsonwebtoken');
const findUserByUsername = require('../db/db').findUserByUsername;

const signature = 'ELOHELasignature';

const createToken = user => {
    jwt.sign(
        { id: user.id },
        signature,
        { expiresIn: '7d' }
    );
}

const postToken =(req, res) => {
    let {username, password} = req.body;
    let user = findUserByUsername(username);

    if (password === user.password) {
        let token = createToken(user);
        res.send(token);
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