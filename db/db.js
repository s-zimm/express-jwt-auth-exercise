const db = [
    { id: 1, username: 'boba', password: 'fett'},
    { id: 2, username: 'princess', password: 'leah' }
]

const findUserByUsername = (username) => {
    return db.find(user => user.username === username);
}

module.exports = { db, findUserByUsername }