import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js/min";
import Seo from "../components/Seo.jsx";
import EmbeddedCheckout from "../components/EmbeddedCheckout.jsx";
import { getStartedFlow } from "../data/content.js";
import { uploadInvoiceFiles } from "../lib/blobUpload.js";
import { phoneCountries, DEFAULT_PHONE_COUNTRY } from "../lib/phoneCountries.js";
import { getStripe } from "../lib/stripeClient.js";
import styles from "./GetStartedPage.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = {
  firstName: "",
  lastName: "",
  businessName: "",
  email: "",
  phone: "",
  phoneCountry: DEFAULT_PHONE_COUNTRY,
  distributor: "",
  monthlySpend: "",
  locations: "",
};

function validateStep1(form) {
  const errors = {};
  if (!form.firstName.trim()) errors.firstName = "Required";
  if (!form.lastName.trim()) errors.lastName = "Required";
  if (!form.businessName.trim()) errors.businessName = "Required";
  if (!form.email.trim()) errors.email = "Required";
  else if (!EMAIL_RE.test(form.email.trim())) errors.email = "Enter a valid email address";
  if (!form.phone.trim()) errors.phone = "Required";
  else if (!isValidPhoneNumber(form.phone, form.phoneCountry)) errors.phone = "Enter a valid phone number for the selected country";
  if (!form.distributor) errors.distributor = "Required";
  if (!form.monthlySpend) errors.monthlySpend = "Required";
  return errors;
}

function TextField({ label, required, error, value, onChange, type = "text", ...rest }) {
  return (
    <label className={styles.field}>
      <span>
        {label}
        {required && <em className={styles.reqStar}> *</em>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        {...rest}
      />
      {error && <span className={styles.fieldError}>{error}</span>}
    </label>
  );
}

function SelectField({ label, required, error, value, onChange, options, placeholder = "Select one" }) {
  return (
    <label className={styles.field}>
      <span>
        {label}
        {required && <em className={styles.reqStar}> *</em>}
      </span>
      <select value={value} onChange={(e) => onChange(e.target.value)} aria-invalid={Boolean(error)}>
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.fieldError}>{error}</span>}
    </label>
  );
}

function PhoneField({ label, required, error, country, phone, onCountryChange, onPhoneChange }) {
  return (
    <label className={styles.field}>
      <span>
        {label}
        {required && <em className={styles.reqStar}> *</em>}
      </span>
      <div className={styles.phoneRow}>
        <select
          className={styles.phoneCountry}
          value={country}
          onChange={(e) => onCountryChange(e.target.value)}
          aria-label="Country"
        >
          {phoneCountries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name} (+{c.dialCode})
            </option>
          ))}
        </select>
        <input
          type="tel"
          className={styles.phoneInput}
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          aria-invalid={Boolean(error)}
          autoComplete="tel-national"
          placeholder="Phone number"
        />
      </div>
      {error && <span className={styles.fieldError}>{error}</span>}
    </label>
  );
}

export default function GetStartedPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  const [agreed, setAgreed] = useState(false);

  const [uploadStatus, setUploadStatus] = useState("idle"); // idle | uploading | done | error
  const [uploadError, setUploadError] = useState(null);
  const uploadPromiseRef = useRef(null);
  const uploadedFilesRef = useRef([]);

  // Caches the in-flight/created Checkout Session for the current form
  // submission, so React re-rendering (or a dev-mode StrictMode
  // double-effect) doesn't create a second session for the same data.
  // Cleared on every step 1 (re-)submit so edited form data always gets a
  // fresh session — see handleStep1Submit, which also warms this cache
  // proactively rather than waiting for step 3 to mount.
  const clientSecretCacheRef = useRef(null);

  // Start loading the Stripe.js library the moment someone lands on this
  // page, not when step 3 mounts. It's ~150KB from Stripe's CDN and was
  // otherwise sitting entirely on the critical path between clicking
  // "Continue" on step 2 and the payment form actually appearing.
  useEffect(() => {
    getStripe();
  }, []);

  function updateField(name, value) {
    setForm((f) => ({ ...f, [name]: value }));
  }

  function startUpload(selectedFiles) {
    setUploadStatus("uploading");
    setUploadError(null);
    uploadPromiseRef.current = uploadInvoiceFiles(selectedFiles)
      .then((results) => {
        uploadedFilesRef.current = results;
        setUploadStatus("done");
        return results;
      })
      .catch((err) => {
        setUploadStatus("error");
        setUploadError(err.message || "Upload failed");
        throw err;
      });
  }

  function handleFilesChange(e) {
    const selected = Array.from(e.target.files || []);
    setFiles(selected);
  }

  function handleStep1Submit(e) {
    e.preventDefault();
    const validationErrors = validateStep1(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) return;

    // Kick the upload off in the background now so it's likely already done
    // by the time the user reaches the payment step.
    if (files.length && uploadStatus === "idle") {
      startUpload(files);
    }

    // Also kick off Checkout Session creation now, in parallel with the
    // upload, instead of waiting until step 3 mounts. Reading + agreeing to
    // the terms on step 2 usually takes longer than this round trip, so by
    // the time someone clicks "Continue" the session is often already
    // cached and step 3 can mount the payment form instantly. Clear any
    // stale cached session first — this fires on every (re)submit of step 1,
    // including after going back and editing details, so edited data always
    // gets its own fresh session instead of reusing an old one.
    clientSecretCacheRef.current = null;
    fetchClientSecret().catch(() => {});

    setStep(2);
  }

  function handleStep2Continue() {
    if (!agreed) return;
    setStep(3);
  }

  // Passed to <EmbeddedCheckout>, which calls this whenever Stripe.js needs
  // a client secret to mount the payment form.
  const fetchClientSecret = useCallback(async () => {
    if (clientSecretCacheRef.current) return clientSecretCacheRef.current;

    const promise = (async () => {
      let fileResults = uploadedFilesRef.current;
      if (uploadPromiseRef.current && uploadStatus !== "done") {
        fileResults = await uploadPromiseRef.current;
      }
      if (uploadStatus === "error") {
        throw new Error("File upload failed — go back and try uploading again.");
      }

      const parsedPhone = parsePhoneNumber(form.phone, form.phoneCountry);
      const submittedForm = { ...form, phone: parsedPhone ? parsedPhone.number : form.phone };

      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: submittedForm, files: fileResults, origin: window.location.origin }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      return data.clientSecret;
    })();

    clientSecretCacheRef.current = promise;
    // Let a failed attempt be retried (Stripe.js will call this again if it throws).
    promise.catch(() => {
      clientSecretCacheRef.current = null;
    });
    return promise;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, uploadStatus]);

  // Best-effort immediate cleanup when someone explicitly gives up on the
  // flow after files are already uploaded. Not load-bearing for correctness
  // (api/cron/cleanup-orphaned-uploads.js is the real safety net) — this
  // just makes the common case tidy up right away instead of waiting for
  // the next scheduled sweep.
  function handleLeaveFlow() {
    const fileUrls = uploadedFilesRef.current.map((f) => f.url);
    if (!fileUrls.length) return;
    fetch("/api/cancel-upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileUrls }),
    }).catch(() => {});
  }

  return (
    <>
      <Seo title={getStartedFlow.headline} description={getStartedFlow.subhead} path="/get-started" />

      <article className={`section ${styles.section}`}>
        <div className={`container ${styles.container}`}>
          <Link to="/" className={styles.back} onClick={handleLeaveFlow}>
            ← Back to home
          </Link>

          <span className="eyebrow">{getStartedFlow.eyebrow}</span>
          <h1 className={styles.title}>{getStartedFlow.headline}</h1>
          <p className={styles.sub}>{getStartedFlow.subhead}</p>

          <ol className={styles.stepper}>
            {getStartedFlow.steps.map((label, i) => {
              const num = i + 1;
              const cls = [styles.stepItem, step === num && styles.stepActive, step > num && styles.stepDone]
                .filter(Boolean)
                .join(" ");
              return (
                <li key={label} className={cls}>
                  <span className={styles.stepNumber}>{step > num ? "✓" : num}</span>
                  <span>{label}</span>
                </li>
              );
            })}
          </ol>

          <motion.div
            key={step}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={styles.card}
          >
            {step === 1 && (
              <form onSubmit={handleStep1Submit} className={styles.form} noValidate>
                <div className={styles.row2}>
                  <TextField
                    label="First name"
                    required
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={(v) => updateField("firstName", v)}
                    error={errors.firstName}
                  />
                  <TextField
                    label="Last name"
                    required
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={(v) => updateField("lastName", v)}
                    error={errors.lastName}
                  />
                </div>

                <TextField
                  label="Business / restaurant name"
                  required
                  autoComplete="organization"
                  value={form.businessName}
                  onChange={(v) => updateField("businessName", v)}
                  error={errors.businessName}
                />

                <TextField
                  label="Email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(v) => updateField("email", v)}
                  error={errors.email}
                />

                <PhoneField
                  label="Phone"
                  required
                  country={form.phoneCountry}
                  phone={form.phone}
                  onCountryChange={(v) => updateField("phoneCountry", v)}
                  onPhoneChange={(v) => updateField("phone", v)}
                  error={errors.phone}
                />

                <div className={styles.row2}>
                  <SelectField
                    label="Main distributor"
                    required
                    value={form.distributor}
                    onChange={(v) => updateField("distributor", v)}
                    options={getStartedFlow.distributorOptions}
                    error={errors.distributor}
                  />
                  <SelectField
                    label="Approx. monthly food spend"
                    required
                    value={form.monthlySpend}
                    onChange={(v) => updateField("monthlySpend", v)}
                    options={getStartedFlow.spendOptions}
                    error={errors.monthlySpend}
                  />
                </div>

                <SelectField
                  label="Number of locations"
                  placeholder="Prefer not to say"
                  value={form.locations}
                  onChange={(v) => updateField("locations", v)}
                  options={getStartedFlow.locationsOptions}
                />

                <label className={styles.field}>
                  <span>Upload your invoices</span>
                  <input type="file" multiple accept=".pdf,image/*" onChange={handleFilesChange} />
                  <span className={styles.fieldHint}>PDF or images, multiple files allowed.</span>
                  {files.length > 0 && (
                    <ul className={styles.fileList}>
                      {files.map((f) => (
                        <li key={f.name}>{f.name}</li>
                      ))}
                    </ul>
                  )}
                </label>

                <button type="submit" className="btn btn-primary">
                  Get started now <span aria-hidden>→</span>
                </button>
              </form>
            )}

            {step === 2 && (
              <div className={styles.form}>
                <label className={styles.checkboxRow}>
                  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                  <span>
                    I&apos;ve read and agree to the{" "}
                    <Link to="/terms" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                      engagement terms
                    </Link>
                    .
                  </span>
                </label>

                <div className={styles.stepActions}>
                  <button type="button" className={styles.backStepBtn} onClick={() => setStep(1)}>
                    ← Back
                  </button>
                  <button type="button" className="btn btn-primary" disabled={!agreed} onClick={handleStep2Continue}>
                    Continue <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className={styles.form}>
                <div className={styles.summaryBox}>
                  <p className={styles.summaryLabel}>One-time invoice audit fee</p>
                  <p className={styles.summaryValue}>{getStartedFlow.auditFee}</p>
                  <p className={styles.summaryNote}>
                    Refunded in full if we don&apos;t find savings. Credited against our fee if we do.
                  </p>
                </div>

                {uploadStatus === "uploading" && <p className={styles.statusNote}>Uploading your files…</p>}
                {uploadStatus === "error" && <p className={styles.errorNote}>{uploadError}</p>}

                <EmbeddedCheckout key={step} fetchClientSecret={fetchClientSecret} />

                <div className={styles.stepActions}>
                  <button type="button" className={styles.backStepBtn} onClick={() => setStep(2)}>
                    ← Back
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </article>
    </>
  );
}
