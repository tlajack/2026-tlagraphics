"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className={styles.success}>
        <h2>Thank You!</h2>
        <p>
          Your message has been sent. We&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form
      name="webContact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={() => setSubmitted(true)}
      className={styles.form}
    >
      <input type="hidden" name="form-name" value="webContact" />
      <div style={{ display: "none" }}>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </div>

      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="phone" className={styles.label}>
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="subject" className={styles.label}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={styles.textarea}
        />
      </div>

      <button type="submit" className={styles.button}>
        Send Message
      </button>
    </form>
  );
}
