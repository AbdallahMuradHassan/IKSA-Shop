// Fake users (replace with DB later)
const users = [
    { id: 1, username: 'admin', password: '123456' },
    { id: 2, username: 'user', password: 'password' },
]

const findByUsername = (username) => {
    return users.find(u => u.username === username)
}

module.exports = {
    findByUsername,
}