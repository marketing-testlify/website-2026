"use client";

import { useState } from "react";

const FIELD =
  "w-full font-[inherit] text-[15px] text-ink px-[15px] py-[13px] border-[1.5px] border-[#EEDFE0] rounded-xl bg-[#FEFCFB] transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-coral focus:shadow-[0_0_0_4px_rgba(242,63,68,0.12)]";

const LABEL = "block text-[13px] font-semibold text-[#2A1A1D] mb-[7px]";
const FIELD_WRAP = "mb-4";
const FROW = "grid grid-cols-2 gap-[14px] max-[960px]:grid-cols-1";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    size: "1–50",
    interest: "A product demo",
    message: "",
  });

  const set =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  if (sent) {
    return (
      <div className="bg-[#EAF8F0] border border-[#BFE8D2] text-[#1B7F4B] rounded-[14px] p-[22px] text-[15px] font-semibold text-center">
        Thanks — your message is on its way. Our team will get back to you
        within one business day.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="bg-white border border-warm rounded-[22px] p-[34px] shadow-[0_30px_70px_rgba(110,11,14,0.10)]"
    >
      <div className={FROW}>
        <div className={FIELD_WRAP}>
          <label htmlFor="firstName" className={LABEL}>
            First name
          </label>
          <input
            id="firstName"
            type="text"
            required
            placeholder="Jane"
            value={form.firstName}
            onChange={set("firstName")}
            className={FIELD}
          />
        </div>
        <div className={FIELD_WRAP}>
          <label htmlFor="lastName" className={LABEL}>
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            required
            placeholder="Doe"
            value={form.lastName}
            onChange={set("lastName")}
            className={FIELD}
          />
        </div>
      </div>

      <div className={FROW}>
        <div className={FIELD_WRAP}>
          <label htmlFor="email" className={LABEL}>
            Work email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="jane@company.com"
            value={form.email}
            onChange={set("email")}
            className={FIELD}
          />
        </div>
        <div className={FIELD_WRAP}>
          <label htmlFor="company" className={LABEL}>
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Company Inc."
            value={form.company}
            onChange={set("company")}
            className={FIELD}
          />
        </div>
      </div>

      <div className={FROW}>
        <div className={FIELD_WRAP}>
          <label htmlFor="size" className={LABEL}>
            Company size
          </label>
          <select
            id="size"
            value={form.size}
            onChange={set("size")}
            className={FIELD}
          >
            <option>1–50</option>
            <option>51–200</option>
            <option>201–1,000</option>
            <option>1,000+</option>
          </select>
        </div>
        <div className={FIELD_WRAP}>
          <label htmlFor="interest" className={LABEL}>
            I&apos;m interested in
          </label>
          <select
            id="interest"
            value={form.interest}
            onChange={set("interest")}
            className={FIELD}
          >
            <option>A product demo</option>
            <option>Pricing &amp; plans</option>
            <option>Enterprise &amp; security</option>
            <option>Support</option>
            <option>Partnerships</option>
          </select>
        </div>
      </div>

      <div className={FIELD_WRAP}>
        <label htmlFor="message" className={LABEL}>
          How can we help?
        </label>
        <textarea
          id="message"
          placeholder="Tell us a little about your hiring and what you'd like to see…"
          value={form.message}
          onChange={set("message")}
          className={`${FIELD} resize-y min-h-[110px]`}
        />
      </div>

      <button
        type="submit"
        className="w-full border-0 font-[inherit] cursor-pointer bg-coral text-white font-bold text-[16px] p-[15px] rounded-[13px] shadow-[0_12px_26px_rgba(242,63,68,0.3)] transition-[translate] duration-200 ease-[ease] hover:-translate-y-0.5"
      >
        Send message
      </button>

      <p className="text-[12.5px] text-faint text-center mt-[14px]">
        By submitting, you agree to receive email updates from Testlify. You can
        opt out anytime.
      </p>
    </form>
  );
}
