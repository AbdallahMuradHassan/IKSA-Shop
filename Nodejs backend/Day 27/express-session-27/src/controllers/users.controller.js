const ApiError = require("../utils/ApiError");

// In-memory DB
let USERS = [
    { id: "1", name: "Alaa", email: "alaa@test.com" },
    { id: "2", name: "Sara", email: "sara@test.com" },
];

// GET /api/users?search=al
function listUsers(req, res) {
    const search = String(req.query.search || "").toLowerCase();
    const data = search
        ? USERS.filter(u => u.name.toLowerCase().includes(search)
            ||
            u.email.toLowerCase().includes(search))
        : USERS;

    res.json({ ok: true, data, total: data.length });
}

// GET /api/users/:id
function getUser(req, res, next) {
    const { id } = req.params;
    const user = USERS.find(u => u.id === id);
    if (!user) return next(new ApiError("User not found", 404));
    res.json({ ok: true, data: user });
}

// POST /api/users
function createUser(req, res) {
    const { name, email } = req.body;

    const id = String(Date.now());
    const newUser = { id, name, email };
    USERS.unshift(newUser);

    res.status(201).json({ ok: true, message: "User created", data: newUser });
}

// PATCH /api/users/:id
function updateUser(req, res, next) {
    const { id } = req.params;
    const idx = USERS.findIndex(u => u.id === id);
    if (idx === -1) return next(new ApiError("User not found", 404));

    USERS[idx] = { ...USERS[idx], ...req.body };
    res.json({ ok: true, message: "User updated", data: USERS[idx] });
}

// DELETE /api/users/:id
function deleteUser(req, res, next) {
    const { id } = req.params;
    const before = USERS.length;
    USERS = USERS.filter(u => u.id !== id);

    if (USERS.length === before) return next(new ApiError("User not found", 404));
    res.json({ ok: true, message: "User deleted" });
}

module.exports = { listUsers, getUser, createUser, updateUser, deleteUser };
