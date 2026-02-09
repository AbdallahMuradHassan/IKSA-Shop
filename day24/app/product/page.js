import React from 'react'

async function getProducts() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/api/product`, { cash: "no-cache", })
    if (!res.ok) throw new Error("failed to featch product");
    return res.json();
}
export default async function ProdectPage() {
    const data = await getProducts();
    return (
        <main style={{ padding: 24 }}>
            <h1>Products </h1>
            <p>
                total:{data.total}
            </p>
            <div className='box'>

                {data.products.map(p =>
                    <div key={p.id} className='contat'>
                        <img src={`/hand-pynit/HPCT${p.id}.jpeg`}></img>
                        <div className='info'>
                            <h3>{p.name}</h3>
                            <p>Price:JOD {p.price}</p>
                            <p>In Stcok: {p.inStock ? "YES" : "NO"}</p>
                        </div>
                    </div>)}
            </div>

        </main>
    )

}
