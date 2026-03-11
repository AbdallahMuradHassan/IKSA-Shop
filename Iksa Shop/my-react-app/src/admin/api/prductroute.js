export const productRoutes = {
    basceURL: {
        server: "http://localhost:5000"
    },
    URLs: {
        get: "/api/v1/products",
        post: "/api/v1/products",
        delete: "/api/v1/products/:id",
        patch: "/api/v1/products/:id",
    },
    fields: {
        name: "name",
        description: "description",
        price: "price",
        category: "category",
        supplier: "supplier",
        images: "images",
        isActive: "isActive",
        inStock: "inStock"
    },
    errors: {
        404: "Not Found",

    },
};