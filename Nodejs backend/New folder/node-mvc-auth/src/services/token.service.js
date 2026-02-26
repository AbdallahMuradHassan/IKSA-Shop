let refreshTokens = []

const saveToken = (token) => refreshTokens.push(token)

const removeToken = (token) => {
    refreshTokens = refreshTokens.filter(t => t !== token)
}

const isValidToken = (token) => refreshTokens.includes(token)

module.exports = {
    saveToken,
    removeToken,
    isValidToken,
}
