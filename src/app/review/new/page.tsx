"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StarRating from "@/components/StarRating";
import Link from "next/link";

const NJ_COUNTIES = [
  "Atlantic", "Bergen", "Burlington", "Camden", "Cape May",
  "Cumberland", "Essex", "Gloucester", "Hudson", "Hunterdon",
  "Mercer", "Middlesex", "Monmouth", "Morris", "Ocean",
  "Passaic", "Salem", "Somerset", "Sussex", "Union", "Warren",
];

const PROJECT_TYPES = [
  "Kitchen Remodel", "Bathroom Renovation", "Addition", "Deck/Patio",
  "Roofing", "Siding", "Windows", "HVAC", "Plumbing", "Electrical",
  "General Repairs", "Other",
];

const COST_RANGES = [
  "Under $10,000", "$10,000 - $25,000", "$25,000 - $50,000",
  "$50,000 - $100,000", "$100,000 - $250,000", "$250,000+",
];

const ISSUE_OPTIONS = [
  "Communication problems", "Missed deadlines", "Cost overruns",
  "Poor workmanship", "Subcontractor issues", "Permit/inspection delays",
  "Left project incomplete", "Unresponsive to concerns", "Contract disputes",
  "Safety concerns", "No major issues",
];

export default function NewReviewPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [formData, setFormData] = useState({
    builderName: "",
    projectType: "",
    costRange: "",
    county: "",
    rating: 0,
    issues: [] as string[],
    wouldHireAgain: "" as "yes" | "no" | "unsure" | "",
    comment: "",
    positiveHighlights: "",
    consentChecked: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      issues: prev.issues.includes(option)
        ? prev.issues.filter((i) => i !== option)
        : [...prev.issues, option],
    }));
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consentChecked: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.builderName || !formData.projectType || !formData.costRange || !formData.county || formData.rating === 0) {
        alert("Please fill in all fields on this step");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.wouldHireAgain) {
        alert("Please select whether you would hire again");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!formData.comment || formData.comment.length < 50 || !formData.consentChecked) {
        alert("Please provide a review of at least 50 characters and check the consent box");
        return;
      }
      console.log("Form submitted:", formData);
      router.push("/review/submitted");
    }
  };

  const isStep1Valid = formData.builderName && formData.projectType && formData.costRange && formData.county && formData.rating > 0;
  const isStep2Valid = formData.wouldHireAgain !== "";
  const isStep3Valid = formData.comment.length >= 50 && formData.consentChecked;

  return (
    <div className="container-narrow section-sm">
      <h1 className="heading-2" style={{ marginBottom: "var(--space-1)" }}>
        Share Your Experience
      </h1>
      <p className="body-lg" style={{ marginBottom: "var(--space-4)" }}>
        Your anonymous review helps other homeowners make informed decisions.
      </p>

      {/* Step Indicator */}
      <div style={{ marginBottom: "var(--space-5)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-2)" }}>
          {[1, 2, 3].map((s) => (
            <div key={s} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-lg)",
                  fontWeight: 700,
                  fontSize: "var(--text-sm)",
                  transition: "all var(--duration) var(--ease)",
                  backgroundColor: s <= step ? "var(--color-teal)" : "var(--color-bg-muted)",
                  color: s <= step ? "white" : "var(--color-muted)",
                }}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  style={{
                    flex: 1,
                    height: "3px",
                    margin: "0 var(--space-1)",
                    borderRadius: "var(--radius-pill)",
                    transition: "all var(--duration) var(--ease)",
                    backgroundColor: s < step ? "var(--color-teal)" : "var(--color-bg-muted)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {["Project Info", "Issues & Rating", "Your Review"].map((label) => (
            <span key={label} className="body-sm" style={{ fontWeight: 500, textAlign: "center", flex: 1 }}>
              {label}
            </span>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {/* Step 1 */}
        {step === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <div>
              <label className="label" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                Builder or Contractor Name *
              </label>
              <input
                type="text"
                name="builderName"
                value={formData.builderName}
                onChange={handleInputChange}
                placeholder="e.g., Thompson & Sons Construction"
                className="input-base"
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <label className="label" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                Project Type *
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="input-base"
                style={{ width: "100%" }}
              >
                <option value="">Select a project type</option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}
              className="sm:grid sm:grid-cols-2 sm:gap-6"
            >
              <div>
                <label className="label" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                  Cost Range *
                </label>
                <select
                  name="costRange"
                  value={formData.costRange}
                  onChange={handleInputChange}
                  className="input-base"
                  style={{ width: "100%" }}
                >
                  <option value="">Select range</option>
                  {COST_RANGES.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                  County *
                </label>
                <select
                  name="county"
                  value={formData.county}
                  onChange={handleInputChange}
                  className="input-base"
                  style={{ width: "100%" }}
                >
                  <option value="">Select county</option>
                  {NJ_COUNTIES.map((county) => (
                    <option key={county} value={county}>{county}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="label" style={{ display: "block", marginBottom: "var(--space-2)" }}>
                Overall Rating *
              </label>
              <StarRating rating={formData.rating} size="lg" interactive={true} onRate={(rating) => setFormData((prev) => ({ ...prev, rating }))} />
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <div>
              <label className="label" style={{ display: "block", marginBottom: "var(--space-2)" }}>
                What issues did you experience?
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                {ISSUE_OPTIONS.map((option) => (
                  <label
                    key={option}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-2)",
                      cursor: "pointer",
                      fontSize: "var(--text-body)",
                      color: "var(--color-charcoal)",
                      padding: "var(--space-2) var(--space-1)",
                      minHeight: "44px",
                      borderRadius: "var(--radius-md)",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.issues.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      style={{
                        width: "22px",
                        height: "22px",
                        accentColor: "var(--color-teal)",
                        cursor: "pointer",
                        flexShrink: 0,
                      }}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "var(--space-3)" }}>
              <label className="label" style={{ display: "block", marginBottom: "var(--space-2)" }}>
                Would you hire them again? *
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                {["yes", "no", "unsure"].map((option) => (
                  <label
                    key={option}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-2)",
                      padding: "var(--space-2)",
                      border: "2px solid",
                      borderColor: formData.wouldHireAgain === option ? "var(--color-teal)" : "var(--color-border)",
                      backgroundColor: formData.wouldHireAgain === option ? "var(--color-teal-light)" : "var(--color-bg)",
                      borderRadius: "var(--radius-lg)",
                      cursor: "pointer",
                      transition: "all var(--duration) var(--ease)",
                      minHeight: "56px",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    <input
                      type="radio"
                      name="wouldHireAgain"
                      value={option}
                      checked={formData.wouldHireAgain === option}
                      onChange={handleInputChange}
                      style={{
                        width: "22px",
                        height: "22px",
                        accentColor: "var(--color-teal)",
                        cursor: "pointer",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ color: "var(--color-charcoal)", fontWeight: 700, fontSize: "var(--text-body)" }}>
                      {option === "yes" ? "Yes, would hire again" : option === "no" ? "No, would not hire again" : "Not sure"}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <div>
              <label className="label" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                Your Review *
              </label>
              <p className="body-sm" style={{ marginBottom: "var(--space-2)" }}>Minimum 50 characters</p>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                placeholder="Share your honest experience. What went well? What could have been better?"
                rows={6}
                className="input-base"
                style={{ resize: "none", width: "100%" }}
              />
              <div className="body-sm" style={{ marginTop: "var(--space-1)" }}>
                {formData.comment.length} / 50 characters minimum
              </div>
            </div>

            <div>
              <label className="label" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                What went well? (Optional)
              </label>
              <textarea
                name="positiveHighlights"
                value={formData.positiveHighlights}
                onChange={handleInputChange}
                placeholder="Highlight specific strengths or positive experiences..."
                rows={4}
                className="input-base"
                style={{ resize: "none", width: "100%" }}
              />
            </div>

            <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "var(--space-3)" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-2)",
                  cursor: "pointer",
                  padding: "var(--space-2) 0",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <input
                  type="checkbox"
                  checked={formData.consentChecked}
                  onChange={handleConsentChange}
                  style={{
                    width: "24px",
                    height: "24px",
                    accentColor: "var(--color-teal)",
                    cursor: "pointer",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                />
                <span className="body-sm" style={{ lineHeight: "var(--leading-body)" }}>
                  I confirm this review is honest and based on my personal experience.
                  I understand that false, defamatory, or spam reviews may be removed
                  and could result in legal action. I agree to BuildChex&apos;s{" "}
                  <Link href="/terms" style={{ color: "var(--color-teal)", fontWeight: 500 }}>Terms of Service</Link>{" "}
                  and{" "}
                  <Link href="/privacy" style={{ color: "var(--color-teal)", fontWeight: 500 }}>Privacy Policy</Link>. *
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-2)",
            paddingTop: "var(--space-4)",
            borderTop: "1px solid var(--color-border)",
          }}
          className="sm:flex-row sm:gap-4"
        >
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep((s) => (s === 1 ? 1 : (s - 1) as 1 | 2 | 3))}
              className="btn-secondary btn-lg btn-mobile-full"
              style={{ flex: 1 }}
            >
              Back
            </button>
          )}
          <button
            type="submit"
            disabled={step === 1 ? !isStep1Valid : step === 2 ? !isStep2Valid : !isStep3Valid}
            className="btn-primary btn-lg btn-mobile-full"
            style={{ flex: 1 }}
          >
            {step === 3 ? "Submit Review" : "Continue"}
          </button>
        </div>
      </form>

      <p
        className="body-sm"
        style={{ textAlign: "center", marginTop: "var(--space-5)", color: "var(--color-muted)" }}
      >
        Your identity will remain completely anonymous. We use AI moderation and
        human review to ensure quality and authenticity.
      </p>
    </div>
  );
}
