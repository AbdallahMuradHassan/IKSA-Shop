export async function ProdectList() {
    const res = await fetch('https://dummyjson.com/products');
    const result = await res.json();
    const data = result.products;
    return {
        props: { data }
    };
}