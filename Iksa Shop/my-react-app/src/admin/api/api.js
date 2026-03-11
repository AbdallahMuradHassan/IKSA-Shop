import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    withCredentials: true
});

api.interceptors.request.use(async (config) => {

    // skip refresh endpoint
    if (config.url === "/auth/refresh") return config;

    let accessToken = localStorage.getItem("accessToken");

    // 🚨 only refresh if token exists
    if (accessToken && isTokenExpired(accessToken)) {

        try {

            const response = await axios.post(
                "http://localhost:5000/api/v1/auth/refresh",
                {},
                { withCredentials: true }
            );

            accessToken = response.data.accessToken;

            localStorage.setItem("accessToken", accessToken);

        } catch (error) {

            localStorage.removeItem("accessToken");
            return Promise.reject(error);

        }
    }

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;

});

function isTokenExpired(token) {
    try {

        const payload = JSON.parse(atob(token.split(".")[1]));

        return payload.exp * 1000 < Date.now();

    } catch {

        return true;

    }
}

export default api;