import React, { useState, useEffect, useCallback } from "react";
import { TOKENS, DISPLAY_FONT, MONO_FONT, BODY_FONT } from "./theme";
import { getAll, postForm, deletePerson } from "./api";
import Plate from "./components/Plate";
import Field from "./components/Field";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import Banner from "./components/Banner";
import Card from "./components/Card";
import PersonTag from "./components/PersonTag";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ kind: "", msg: "" });

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const loadPeople = useCallback(async () => {
    setLoading(true);
    setLoadError("");
    try {
      const data = await getAll();
      setPeople(Array.isArray(data) ? data : []);
    } catch (e) {
      setLoadError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPeople();
  }, [loadPeople]);

  const handleDelete = async (id) => {
    setDeletingId(id);
    setLoadError("");
    try {
      await deletePerson(id);
      setPeople((prev) => prev.filter((p) => p.id !== id));
    } catch (e) {
      setLoadError(e.message);
    } finally {
      setDeletingId(null);
    }
  };

  const submit = async () => {
    setSubmitting(true);
    setStatus({ kind: "", msg: "" });
    try {
      const responseText = postForm(name, age);
      setStatus({ kind: "ok", msg: responseText });
      setName("");
      setAge("");
      loadPeople();
    } catch (e) {
      setStatus({ kind: "error", msg: e.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: TOKENS.ink,
        padding: "28px 16px",
        fontFamily: BODY_FONT,
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <div style={{ marginBottom: 26 }}>
          <div
            style={{
              fontFamily: MONO_FONT,
              fontSize: 11,
              letterSpacing: "0.2em",
              color: TOKENS.teal,
              textTransform: "uppercase",
            }}
          >
            NamerThing
          </div>
          <div
            style={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              fontSize: 32,
              letterSpacing: "0.01em",
              color: TOKENS.ivory,
              textTransform: "uppercase",
            }}
          >
            Add a Player
          </div>
        </div>

        <Card>
          <Field label="Name">
            <TextInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
            />
          </Field>
          <Field label="Age">
            <TextInput
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
            />
          </Field>
          <Button onClick={submit} disabled={submitting || !name || !age}>
            {submitting ? "Saving…" : "Add Player"}
          </Button>
          <Banner kind={status.kind === "error" ? "error" : "ok"}>
            {status.msg}
          </Banner>
        </Card>

        <Plate eyebrow={`${people.length} on file`} title="Roster" />
        {loading && (
          <div style={{ color: TOKENS.slate, fontSize: 14 }}>Loading…</div>
        )}
        <Banner kind="error">{loadError}</Banner>
        {!loading && people.length === 0 && !loadError && (
          <div style={{ color: TOKENS.slate, fontSize: 14 }}>
            No players yet — add one above.
          </div>
        )}
        {people.map((p) => (
          <PersonTag
            key={p.id}
            person={p}
            onDelete={handleDelete}
            deleting={deletingId === p.id}
          />
        ))}
      </div>
    </div>
  );
}
