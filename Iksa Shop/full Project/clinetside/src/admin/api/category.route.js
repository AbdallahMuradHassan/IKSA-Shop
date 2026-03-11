// categoryRoutes.js
export const categoryRoutes = {
    URLs: {
        get: "/api/categories",
        post: "/api/categories",
        delete: "/api/categories/:id",
        patch: "/api/categories/:id",
    },
    fields: {
        id: "id",
        name: "name",
    },
    errors: {
        404: "Not Found",
    },
};