import React from 'react'

export async function GET(request) {
    const limit = Number(process.env.LIMIT || 12);
    const product = Array.from({ length: 5 }).map((_, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
        price: (10 + i + 1.25).toFixed(2),
        inStock: i % 3 !== 0,
    }));
    return Response.json({
        ok: true,
        total: product.length,
        products: product.slice(0, limit),
    })
}
