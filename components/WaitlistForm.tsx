"use client";

import { FormEvent, useState } from "react";
import { siteContent } from "@/data/siteContent";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  commune: string;
  format: string;
  goal: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  commune: "",
  format: "",
  goal: "",
};

export default function WaitlistForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSuccess(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const missing = Object.values(form).some((value) => value.trim().length === 0);
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

    if (missing) {
      setError("Completa todos los campos para sumarte a la lista.");
      return;
    }

    if (!validEmail) {
      setError("Ingresa un email válido para poder contactarte.");
      return;
    }

    // Future integration point: send `form` to Google Forms, Airtable, Typeform, Supabase or a CRM.
    setSuccess(true);
    setForm(initialState);
  }

  return (
    <form className="surface-card grid gap-4 p-5 sm:p-7" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={siteContent.waitlist.fields.name}>
          <input
            className="field"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Tu nombre"
            autoComplete="name"
          />
        </Field>
        <Field label={siteContent.waitlist.fields.email}>
          <input
            className="field"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="correo@ejemplo.com"
            autoComplete="email"
          />
        </Field>
        <Field label={siteContent.waitlist.fields.whatsapp}>
          <input
            className="field"
            value={form.whatsapp}
            onChange={(event) => updateField("whatsapp", event.target.value)}
            placeholder="+56 9 ..."
            autoComplete="tel"
          />
        </Field>
        <Field label={siteContent.waitlist.fields.commune}>
          <input
            className="field"
            value={form.commune}
            onChange={(event) => updateField("commune", event.target.value)}
            placeholder="Comuna"
            autoComplete="address-level2"
          />
        </Field>
      </div>

      <Field label={siteContent.waitlist.fields.format}>
        <select
          className="field"
          value={form.format}
          onChange={(event) => updateField("format", event.target.value)}
        >
          <option value="">Selecciona una opción</option>
          {siteContent.waitlist.formatOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label={siteContent.waitlist.fields.goal}>
        <select
          className="field"
          value={form.goal}
          onChange={(event) => updateField("goal", event.target.value)}
        >
          <option value="">Selecciona una opción</option>
          {siteContent.waitlist.goalOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      {error ? <p className="text-sm font-medium text-[#f1b8a8]">{error}</p> : null}
      {success ? (
        <p className="border border-[#8e9b79]/40 bg-[#8e9b79]/10 p-4 text-sm leading-6 text-[#e9e2d4]">
          {siteContent.waitlist.success}
        </p>
      ) : null}

      <button className="btn-primary w-full" type="submit">
        {siteContent.cta.primary}
      </button>
      <p className="text-xs leading-5 text-[#a9a193]">{siteContent.waitlist.legal}</p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[#f4efe5]">
      <span>{label}</span>
      {children}
    </label>
  );
}
