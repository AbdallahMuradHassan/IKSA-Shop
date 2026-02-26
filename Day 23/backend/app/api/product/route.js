import { NextResponse } from "next/server";
import { addProduct, getProducts } from "@/lib/productsStore";

// GET all products
export async function GET() {
  return NextResponse.json(getProducts());
}

