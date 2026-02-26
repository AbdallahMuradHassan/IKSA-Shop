function Product() {
    return {
        Fields: {
            "ProductID": "id",
            "ProductName": "item_name",
            "stock": "track_stock",
            "Description": "description",
            "PriceID": "variant_id",
            "CategoryID": "category_id",
        },
        Messages: {
            NOT_FOUND: "the Product is not found ",
            ADDED_PRODUCT: "the Product added sccses "
        },
    }
}