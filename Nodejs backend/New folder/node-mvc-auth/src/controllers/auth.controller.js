const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const tokenService = require('../services/token.service')
const {
    generateAccessToken,
    generateRefreshToken,
} = require('../config/jwt.config')

// LOGIN
exports.login = (req, res) => {
    const { username, password } = req.body

    const user = User.findByUsername(username)
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }

    const payload = { id: user.id, username: user.username }

    const accessToken = generateAccessToken(payload)
    const refreshToken = generateRefreshToken(payload)

    tokenService.saveToken(refreshToken)

    res.json({
        accessToken,
        refreshToken,
    })
}

// LOGOUT
exports.logout = (req, res) => {
    const { refreshToken } = req.body
    tokenService.removeToken(refreshToken)
    res.sendStatus(204)
}
