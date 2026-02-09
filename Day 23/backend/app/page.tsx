import Link from "next/link";
export default function HomePage() {
  return (
    <div className="">
      <main style={{ display: "grid", gap: 12, }}>
        <h1>session 23c - Api Routw next.js</h1>
        <p>this app contain both :
          <br /> backend (API Routes)
          <br /> Frontend (Server Routes)
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link href="./api/hello" style={linkStyle} >Open /api/hello API</Link>
          <Link href="./product" style={linkStyle} >Open produc API</Link>
          <Link href="./api/product" style={linkStyle} >Open /api/products (ssr page)</Link>
          <hr />
          <p style={{ opacity: 0.8 }}>
            teach tip : ask students which files are frontend vs backend
            <br />
            <code>page.js</code> ,<code>route.js</code>,<code>layout.js</code>
          </p>

        </div>
      </main>
    </div>
  );
}
const linkStyle = {
  display: "inline-bolck",
  padding: "10px 12px",
  border: "1px solid #ddd",
  borderRadius: 10,
  textDecoration: "none"

}
