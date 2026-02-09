import { addProducts, getProducts } from "@/lib/productsStore"
export async function GET() {

    return Response.json(getProducts);
}
export async function POST(request) {
    let body;
    try {
        body = await request.json()
    } catch (e) {
        return Response.json({ error: "invalid JSON" }, { status: 400 });
    }
}