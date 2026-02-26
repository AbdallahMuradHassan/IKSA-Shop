function logger(req, _res, next) {
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} ${req.orignalURL}`);
    next();
}
module.exports = logger;