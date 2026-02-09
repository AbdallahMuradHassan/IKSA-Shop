export function ok(data, status = 200) {
    return Response.json({ ok: true, data }, { status });
}
export function fail(data, status = 400, details = null) {
    return Response.json({ ok: false, message, details }, { status });
}