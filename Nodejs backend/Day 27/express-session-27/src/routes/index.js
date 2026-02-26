const express = require("express");
const usersRoutes = require("./users.routes");
const proifleRoutes = require("./profile.routes");


const router = express.Router();

router.get("/health", (_req, res) => {
    res.json({ ok: true, message: "API is healthy" });
});

router.use("/users", usersRoutes);
router.use("/profileRoutes", proifleRoutes);


module.exports = router;
