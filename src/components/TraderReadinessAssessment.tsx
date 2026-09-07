"use client";

import Link from "next/link";
import { FormEvent, type ReactNode, useMemo, useState } from "react";
import {
  ASSESSMENT_OPTIONS,
  COUNTRY_OPTIONS,
  EMPTY_ASSESSMENT,
  isAssessmentComplete,
  LANGUAGE_OPTIONS
} from "@/lib/audience/assessment";
import { scoreAssessment } from "@/lib/audience/scoring";
import type { AssessmentAnswers, AssessmentResult } from "@/lib/audience/types";

type TraderReadinessAssessmentProps = {
  captureEnabled: boolean;
};

type ChoiceField =
  | "marketExperience"
  | "approach"
  | "challenge"
  | "reviewFrequency"
  | "riskLimits"
  | "weeklyCommitment"
  | "educationHistory"
  | "investmentComfort";

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-kicker trader-assessment__section-label">{children}</p>;
}

export function TraderReadinessAssessment({
  captureEnabled
}: TraderReadinessAssessmentProps) {
  const [answers, setAnswers] = useState<AssessmentAnswers>(EMPTY_ASSESSMENT);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const completed = useMemo(() => isAssessmentComplete(answers), [answers]);

  const updateChoice = (field: ChoiceField, value: string) => {
    setAnswers((current) => ({ ...current, [field]: value }));
  };

  const toggleMultiChoice = (field: "markets" | "objectives", value: string) => {
    setAnswers((current) => ({
      ...current,
      [field]: current[field].includes(value)
        ? current[field].filter((entry) => entry !== value)
        : current[field].length < 2 ? [...current[field], value] : current[field]
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!completed) {
      setSubmitMessage("Please complete the required assessment questions before viewing your result.");
      return;
    }

    if (answers.contactPreference === "yes" && (!answers.fullName.trim() || !answers.email.trim() || !answers.marketingConsent)) {
      setSubmitMessage("To request contact from Aeora, please provide your name, email and explicit marketing consent.");
      return;
    }

    const assessmentResult = scoreAssessment(answers);
    setResult(assessmentResult);

    if (answers.contactPreference !== "yes") {
      setSubmitMessage("Your result is ready. No contact details have been stored.");
      return;
    }

    if (!captureEnabled) {
      setSubmitMessage("Your result is ready. Private contact capture is not yet enabled, so no personal information has been stored.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/trader-readiness", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers)
      });
      const body = (await response.json()) as { stored?: boolean; message?: string };

      setSubmitMessage(
        body.stored
          ? "Your request has been securely recorded. An Aeora team member will review it before contacting you."
          : body.message ?? "Your result is ready. We could not store a contact request at this time."
      );
    } catch {
      setSubmitMessage("Your result is ready. We could not store a contact request at this time.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="trader-assessment" id="assessment">
      <form className="trader-assessment__form" onSubmit={handleSubmit} noValidate>
        <div className="trader-assessment__intro">
          <div>
            <SectionLabel>Assessment / 10 questions</SectionLabel>
            <h2>Build a clearer picture of your current trading process.</h2>
          </div>
          <p>
            This assessment is for trader development. It does not assess wealth,
            promise outcomes or make an investment recommendation.
          </p>
        </div>

        <section className="trader-assessment__group" aria-labelledby="assessment-practice-title">
          <div className="trader-assessment__group-heading">
            <SectionLabel>01 / Current practice</SectionLabel>
            <h3 id="assessment-practice-title">How you currently operate.</h3>
          </div>

          <fieldset>
            <legend>How long have you been actively involved in markets?</legend>
            <div className="trader-assessment__choice-grid">
              {ASSESSMENT_OPTIONS.marketExperience.map((option) => (
                <label key={option} className="trader-assessment__choice">
                  <input
                    type="radio"
                    name="marketExperience"
                    value={option}
                    checked={answers.marketExperience === option}
                    onChange={() => updateChoice("marketExperience", option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Which markets do you actively trade? <small>Choose up to two answers.</small></legend>
            <div className="trader-assessment__choice-grid trader-assessment__choice-grid--compact">
              {ASSESSMENT_OPTIONS.markets.map((option) => (
                <label key={option} className="trader-assessment__choice">
                  <input
                    type="checkbox"
                    value={option}
                    checked={answers.markets.includes(option)}
                    disabled={answers.markets.length >= 2 && !answers.markets.includes(option)}
                    onChange={() => toggleMultiChoice("markets", option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Which best describes your current approach?</legend>
            <div className="trader-assessment__choice-grid">
              {ASSESSMENT_OPTIONS.approach.map((option) => (
                <label key={option} className="trader-assessment__choice">
                  <input
                    type="radio"
                    name="approach"
                    value={option}
                    checked={answers.approach === option}
                    onChange={() => updateChoice("approach", option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="trader-assessment__two-column-fields">
            <fieldset>
              <legend>What is your biggest challenge?</legend>
              <select value={answers.challenge} onChange={(event) => updateChoice("challenge", event.target.value)}>
                <option value="">Select one</option>
                {ASSESSMENT_OPTIONS.challenge.map((option) => <option key={option}>{option}</option>)}
              </select>
            </fieldset>
            <fieldset>
              <legend>How often do you review performance?</legend>
              <select value={answers.reviewFrequency} onChange={(event) => updateChoice("reviewFrequency", event.target.value)}>
                <option value="">Select one</option>
                {ASSESSMENT_OPTIONS.reviewFrequency.map((option) => <option key={option}>{option}</option>)}
              </select>
            </fieldset>
            <fieldset>
              <legend>Do you currently use written risk limits?</legend>
              <select value={answers.riskLimits} onChange={(event) => updateChoice("riskLimits", event.target.value)}>
                <option value="">Select one</option>
                {ASSESSMENT_OPTIONS.riskLimits.map((option) => <option key={option}>{option}</option>)}
              </select>
            </fieldset>
          </div>
        </section>

        <section className="trader-assessment__group" aria-labelledby="assessment-development-title">
          <div className="trader-assessment__group-heading">
            <SectionLabel>02 / Development intent</SectionLabel>
            <h3 id="assessment-development-title">Where you want to take the process.</h3>
          </div>

          <fieldset>
            <legend>What are you trying to achieve? <small>Choose up to two answers.</small></legend>
            <div className="trader-assessment__choice-grid trader-assessment__choice-grid--compact">
              {ASSESSMENT_OPTIONS.objectives.map((option) => (
                <label key={option} className="trader-assessment__choice">
                  <input
                    type="checkbox"
                    value={option}
                    checked={answers.objectives.includes(option)}
                    disabled={answers.objectives.length >= 2 && !answers.objectives.includes(option)}
                    onChange={() => toggleMultiChoice("objectives", option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="trader-assessment__two-column-fields">
            <fieldset>
              <legend>How much time can you commit each week?</legend>
              <select value={answers.weeklyCommitment} onChange={(event) => updateChoice("weeklyCommitment", event.target.value)}>
                <option value="">Select one</option>
                {ASSESSMENT_OPTIONS.weeklyCommitment.map((option) => <option key={option}>{option}</option>)}
              </select>
            </fieldset>
            <fieldset>
              <legend>Have you invested in trading education before?</legend>
              <select value={answers.educationHistory} onChange={(event) => updateChoice("educationHistory", event.target.value)}>
                <option value="">Select one</option>
                {ASSESSMENT_OPTIONS.educationHistory.map((option) => <option key={option}>{option}</option>)}
              </select>
            </fieldset>
            <fieldset>
              <legend>If a programme is a strong fit, what investment would you consider? <span>(optional)</span></legend>
              <select value={answers.investmentComfort} onChange={(event) => updateChoice("investmentComfort", event.target.value)}>
                <option value="">Prefer not to say</option>
                {ASSESSMENT_OPTIONS.investmentComfort.map((option) => <option key={option}>{option}</option>)}
              </select>
              <small>This optional question is used only from your explicit answer. Aeora does not infer financial capacity.</small>
            </fieldset>
          </div>
        </section>

        {captureEnabled && <section className="trader-assessment__group trader-assessment__group--contact" aria-labelledby="assessment-contact-title">
          <div className="trader-assessment__group-heading">
            <SectionLabel>03 / Optional follow-up</SectionLabel>
            <h3 id="assessment-contact-title">Would you like Aeora to contact you?</h3>
          </div>

          <fieldset className="trader-assessment__contact-choice">
            <legend>Contact preference</legend>
            <label className="trader-assessment__choice">
              <input type="radio" name="contactPreference" checked={answers.contactPreference === "yes"} onChange={() => setAnswers((current) => ({ ...current, contactPreference: "yes" }))} />
              <span>Yes, I would like to discuss professional trader development.</span>
            </label>
            <label className="trader-assessment__choice">
              <input type="radio" name="contactPreference" checked={answers.contactPreference === "no"} onChange={() => setAnswers((current) => ({ ...current, contactPreference: "no", marketingConsent: false }))} />
              <span>No, show my result without storing contact details.</span>
            </label>
          </fieldset>

          {answers.contactPreference === "yes" && (
            <div className="trader-assessment__contact-fields">
              <label>
                Name
                <input value={answers.fullName} onChange={(event) => setAnswers((current) => ({ ...current, fullName: event.target.value }))} autoComplete="name" />
              </label>
              <label>
                Email
                <input type="email" value={answers.email} onChange={(event) => setAnswers((current) => ({ ...current, email: event.target.value }))} autoComplete="email" />
              </label>
              <label>
                Country or region
                <select value={answers.country} onChange={(event) => setAnswers((current) => ({ ...current, country: event.target.value }))}>
                  <option value="">Prefer not to say</option>
                  {COUNTRY_OPTIONS.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label>
                Preferred language
                <select value={answers.preferredLanguage} onChange={(event) => setAnswers((current) => ({ ...current, preferredLanguage: event.target.value }))}>
                  <option value="">Prefer not to say</option>
                  {LANGUAGE_OPTIONS.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label className="trader-assessment__consent">
                <input type="checkbox" checked={answers.marketingConsent} onChange={(event) => setAnswers((current) => ({ ...current, marketingConsent: event.target.checked }))} />
                <span>I agree that Aeora Research may use my submitted information to respond about trader development. I can request deletion or opt out at any time.</span>
              </label>
            </div>
          )}
        </section>

        }
        <div className="trader-assessment__submit">
          <p aria-live="polite">{submitMessage}</p>
          <button className="button button--dark" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving request" : "View my assessment"}
          </button>
        </div>
      </form>

      {result && (
        <section className="trader-assessment__result" aria-live="polite" aria-labelledby="assessment-result-title">
          <p className="section-kicker">Your result</p>
          <h2 id="assessment-result-title">{result.category.replaceAll("_", " ")}</h2>
          <p className="trader-assessment__result-feedback">{result.feedback}</p>
          <dl className="trader-assessment__scores">
            <div><dt>Trader fit</dt><dd>{result.scores.traderFit}</dd></div>
            <div><dt>Development intent</dt><dd>{result.scores.intent}</dd></div>
            <div><dt>Process readiness</dt><dd>{result.scores.readiness}</dd></div>
          </dl>
          <div className="trader-assessment__result-grid">
            <div>
              <h3>Strengths to carry forward</h3>
              <ul>{result.strengths.length ? result.strengths.map((item) => <li key={item}>{item}</li>) : <li>Begin by defining one consistent market and trading routine.</li>}</ul>
            </div>
            <div>
              <h3>Next areas to strengthen</h3>
              <ul>{result.focusAreas.length ? result.focusAreas.map((item) => <li key={item}>{item}</li>) : <li>Continue developing a documented process and review rhythm.</li>}</ul>
            </div>
          </div>
          <p className="trader-assessment__next-step">{result.recommendedNextStep}</p>
          <div className="trader-assessment__result-actions">
            <Link className="button button--dark" href="/pinnacle">Explore Aeora Trader Development</Link>
            <Link className="button button--quiet" href="/research">Read Aeora research</Link>
          </div>
        </section>
      )}
    </div>
  );
}
