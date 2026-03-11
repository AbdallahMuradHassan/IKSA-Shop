// categoryRoutes.js
export const categoryRoutes = {
    URLs: {
        get: "/api/v1/categories",
        post: "/api/v1/categories",
        delete: "/api/v1/categories/:id",
        patch: "/api/v1/categories/:id",
    },
    fields: {
        id: "id",
        name: "name",
        description: description,
        image: images,
    },
    errors: {
        404: "Not Found",

    },
};