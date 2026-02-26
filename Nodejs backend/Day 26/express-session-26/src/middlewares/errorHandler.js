function errorHandler(err, _req, res, _next) {
    const status = err.statusCode || 500;
    if (err.name === "CastError") {
        return res.status(400).json({
            ok: false,
            Message: "InvalidID",
            error: err.Message
        });
    }
    if (err.name === "ValidationError") {
        return res.status(400).json({
            ok: false,
            Message: "Invalid DATa",
            error: err.Message
        });
    }
    res.status(status).json({
        ok: false,
        Message: err.Message || "Server Error",
        datails: err.datails || null,
        ...(process.env.NODE_ENV === "development" ? { stack: err.stack } : {})
    });

}
module.exports = errorHandler;
