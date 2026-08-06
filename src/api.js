const API_BASE = "http://localhost:8080";

export async function getAll() {
  const res = await fetch(`${API_BASE}/all`);
  if (!res.ok) throw new Error(`GET /all failed (${res.status})`);
  return res.json();
}

export async function postForm(name, age) {
  const body = new URLSearchParams({ name, age });
  const res = await fetch(`${API_BASE}/form`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  if (!res.ok) throw new Error(`POST /form failed (${res.status})`);
  return res.text(); // handler returns a plain string, not JSON
}

export async function deletePerson(id) {
  const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error(`DELETE /${id} failed (${res.status})`);
  return res.text();
}
