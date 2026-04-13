"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

const PROJECT_TYPES = ["OEM", "Fleet", "Facility", "Fabrication", "Not Sure"];

const SCOPE_OPTIONS = [
  { value: "single", label: "Single unit" },
  { value: "multiple", label: "Multiple units" },
  { value: "multi-location", label: "Multi-location" },
  { value: "ongoing", label: "Ongoing" },
];

const BUDGET_OPTIONS = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-50k", label: "$15,000 – $50,000" },
  { value: "50k-100k", label: "$50,000 – $100,000" },
  { value: "100k+", label: "$100,000+" },
  { value: "undisclosed", label: "Prefer not to say" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <h2>We&apos;ve got your project details.</h2>
        <p>
          Someone will follow up with you shortly. If you have files to share
          in the meantime, feel free to email them to{" "}
          <a href="mailto:info@tlagraphics.ca">info@tlagraphics.ca</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      name="startProject"
      onSubmit={handleSubmit}
      className={styles.form}
      encType="multipart/form-data"
    >
      <input type="hidden" name="form-name" value="startProject" />
      <div style={{ display: "none" }}>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="company" className={styles.label}>
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            autoComplete="organization"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>
            Phone{" "}
            <span className={styles.optional}>optional</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.field}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Project Type</legend>
          <div className={styles.pillGroup}>
            {PROJECT_TYPES.map((type) => (
              <label key={type} className={styles.pill}>
                <input
                  type="radio"
                  name="projectType"
                  value={type}
                  required
                  className={styles.pillInput}
                />
                <span className={styles.pillLabel}>{type}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className={styles.field}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Scope</legend>
          <div className={styles.pillGroup}>
            {SCOPE_OPTIONS.map((opt) => (
              <label key={opt.value} className={styles.pill}>
                <input
                  type="radio"
                  name="scope"
                  value={opt.value}
                  required
                  className={styles.pillInput}
                />
                <span className={styles.pillLabel}>{opt.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className={styles.field}>
        <label htmlFor="description" className={styles.label}>
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          placeholder="Describe what you need — materials, dimensions, quantities, application, any relevant context."
          className={styles.textarea}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="timeline" className={styles.label}>
            Timeline
          </label>
          <input
            type="text"
            id="timeline"
            name="timeline"
            required
            placeholder="e.g., 3 weeks, end of May, ASAP"
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="budget" className={styles.label}>
            Budget{" "}
            <span className={styles.optional}>optional</span>
          </label>
          <select
            id="budget"
            name="budget"
            className={styles.select}
            defaultValue=""
          >
            <option value="" disabled>
              Select a range
            </option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="attachment" className={styles.label}>
          Attach Files{" "}
          <span className={styles.optional}>optional</span>
        </label>
        <input
          type="file"
          id="attachment"
          name="attachment"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.ai,.eps,.zip,.svg"
          className={styles.fileInput}
        />
        <span className={styles.fileHint}>
          PDF, images, AI, EPS, ZIP — up to 10 MB
        </span>
      </div>

      {error && (
        <p className={styles.error}>
          Something went wrong. Please try again or email us at{" "}
          <a href="mailto:info@tlagraphics.ca">info@tlagraphics.ca</a>.
        </p>
      )}

      <button type="submit" className={styles.button} disabled={submitting}>
        {submitting ? "Submitting…" : "Start Your Project"}
      </button>
    </form>
  );
}
