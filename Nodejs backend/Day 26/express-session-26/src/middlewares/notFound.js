const ApiError = require("../utils/ApiError")
function norFound(req, _res, next) {
    next(new ApiError(`Rute not Found:${req.method} ${req.originalUrl}`), 404)

}
module.exports = norFound;
