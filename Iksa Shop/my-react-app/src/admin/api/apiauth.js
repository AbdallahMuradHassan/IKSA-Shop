import api from "./api";

export const adminLoginApi = (data) => {
    return api.post("/admin/login", data);
};