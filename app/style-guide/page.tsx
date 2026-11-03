import { ArrowUpRight } from "lucide-react";
import styles from "./style-guide.module.css";

const colors = [
  {
    name: "Ink",
    value: "#111416",
    usage: "Primary backgrounds, footer, navigation",
  },
  {
    name: "Paper",
    value: "#F5F2EB",
    usage: "Light surfaces and readable content sections",
  },
  {
    name: "Signal Gold",
    value: "#DDB45A",
    usage: "Calls to action, emphasis, active accents",
  },
  { name: "Mist", value: "#D7D9D2", usage: "Borders, dividers, muted UI" },
  {
    name: "Moss",
    value: "#66705D",
    usage: "Secondary surfaces and image overlays",
  },
];

const typeStyles = [
  {
    label: "Display / editorial",
    sample: "Make your presence felt.",
    style: "Neue Haas Grotesk Display + Canela italic",
    className: "display",
  },
  {
    label: "Section heading",
    sample: "Built to move people.",
    style: "Sans + italic serif emphasis",
    className: "sectionHeading",
  },
  {
    label: "Body copy",
    sample: "Thoughtful strategy for a more connected world.",
    style: "Inter, 18px / 1.5",
    className: "body",
  },
  {
    label: "Eyebrow / navigation",
    sample: "DIGITAL COMMUNICATIONS, REIMAGINED",
    style: "Mono, 10px / 1.8 / 0.24em",
    className: "eyebrow",
  },
];

export default function StyleGuide() {
  return (
    <main className={styles["guide"]}>
      <section className={[styles["guide-section"], styles["dark"]].join(" ")}>
        <div className={styles["eyebrow"]}>Branding Matters</div>
        <h1>
          Relata<span className={styles["apostrophe"]}>&apos;</span>s
          <span className={styles["version"]}> v2</span>{" "}
          <span className={styles["italic"]}>style</span> guide.
        </h1>
        <p className={styles["guide-intro"]}>
          Codifying our design principles, beyond our{" "}
          <a
            className={styles["inspiration-link"]}
            href="https://www.luminatemarketing.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            original inspiration
          </a>
          . All open to review and further iterations.
        </p>
      </section>

      <section className={styles["guide-section"]}>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#62615b]">
          01 / Color palette
        </p>
        <h2>
          Dark foundations.{" "}
          <span className={styles["italic"]}>Warm signals.</span>
        </h2>
        <div className={styles["grid"]}>
          {colors.map((color) => (
            <div
              className={styles["swatch"]}
              key={color.name}
              style={{
                background: color.value,
                color: color.name === "Ink" ? "#F5F2EB" : "#111416",
              }}
            >
              <strong>{color.name}</strong>
              <span>{color.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["guide-section"]}>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#62615b]">
          02 / Typography
        </p>
        <h2>
          Artistic typography,{" "}
          <span className={styles["italic"]}>clear voice.</span>
        </h2>
        <div className={styles["type-grid"]}>
          {typeStyles.map((item) => (
            <div className={styles["type-row"]} key={item.label}>
              <div>
                <div className={styles["type-label"]}>{item.label}</div>
                <div className={styles["type-meta"]}>{item.style}</div>
              </div>
              <div className={styles[item.className]}>{item.sample}</div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className={styles["guide-section"]}>
        <div className={styles["eyebrow"]}>03 / Layout principles</div>
        <h2>
          The rule of <span className={styles["italic"]}>threes.</span>
        </h2>
        <div className={styles["layout-notes"]}>
          <div className={styles["note"]}>
            <strong>Generous rhythm</strong>
            <p>
              Use large vertical sections, open margins, and intentional pauses
              between ideas.
            </p>
          </div>
          <div className={styles["note"]}>
            <strong>Asymmetric balance</strong>
            <p>
              Pair oversized editorial type with compact metadata and grounded
              body copy.
            </p>
          </div>
          <div className={styles["note"]}>
            <strong>Image-led mood</strong>
            <p>
              Use tactile, human imagery with dark overlays so type remains the
              first voice.
            </p>
          </div>
        </div>
      </section> */}
      <section
        id="buttons-and-links"
        className={styles["guide-section"]}
        aria-labelledby="interaction-title"
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#62615b]">
          03 / Buttons and links
        </p>
        <h2 id="interaction-title">
          Clear actions.{" "}
          <span className={styles["italic"]}>Useful connections.</span>
        </h2>
        <p className={styles["interaction-copy"]}>
          This is how our links, buttons, and interactive elements should appear
          and behave.
        </p>
        <div className={styles["type-grid"]}>
          <div className={styles["interaction-row"]}>
            <h3>Primary CTA</h3>
            <p>
              Reserve the gold pill for the main next step. Use dark text, a
              compact uppercase label, generous spacing, and an optional arrow.
              Prefer specific labels such as “Start a conversation.”
            </p>
            <a className={styles["guide-control"]} href="/contact">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className={styles["interaction-row"]}>
            <h3>Outline CTA / dark background</h3>
            <p>
              Use the footer’s outline pill for a quieter invitation on dark
              backgrounds. Pair a thin gold border with gold text and a
              transparent fill. On hover, fill the button with gold and switch
              the text to ink. Keep a visible gold keyboard focus ring.
            </p>
            <div
              className={[styles["outline-preview"], styles["dark"]].join(" ")}
            >
              <a className={styles["outline-control"]} href="/contact">
                Let’s connect <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className={styles["interaction-row"]}>
            <h3>Outline CTA / light background</h3>
            <p>
              On paper or other light surfaces, use a dark ink outline and text
              with a transparent fill. On hover, fill the pill with ink and
              switch the text to paper. Use a dark keyboard focus ring.
            </p>
            <div
              className={[
                styles["outline-preview"],
                styles["outline-preview-light"],
              ].join(" ")}
            >
              <a
                className={[
                  styles["outline-control"],
                  styles["outline-control-light"],
                ].join(" ")}
                href="/contact"
              >
                Let's connect <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className={styles["interaction-row"]}>
            <h3>Action buttons</h3>
            <p>
              Use a native button for actions. Set type="button" for controls
              and type="submit" for form submission. Keep disabled actions
              visibly muted and explain why they are unavailable nearby.
            </p>
            <div className={styles["component-demo"]}>
              <button
                className={styles["guide-control"]}
                type="button"
                popoverTarget="guide-action-preview"
              >
                Open example
              </button>
              <button
                className={styles["guide-control"]}
                type="button"
                disabled
                aria-describedby="disabled-explanation"
              >
                Submit
              </button>
            </div>
            <p
              id="disabled-explanation"
              className={styles["disabled-explanation"]}
            >
              Submit is disabled in this example because there is no form to
              send.
            </p>
            <div
              id="guide-action-preview"
              className={styles["guide-popover"]}
              popover="auto"
            >
              <p>
                This button opened a popover. Actions use buttons; navigation
                uses links.
              </p>
              <button
                className={styles["guide-control"]}
                type="button"
                popoverTarget="guide-action-preview"
                popoverTargetAction="hide"
              >
                Close example
              </button>
            </div>
          </div>
          <div className={styles["interaction-row"]}>
            <h3>Text and navigation links</h3>
            <p>
              Underline links within copy so color is not the only cue.
              Secondary CTAs use a gold underline and may include an arrow.
              Navigation uses compact uppercase labels; mark the current page
              with aria-current="page". Use descriptive text that makes sense on
              its own.
            </p>
            <div className={styles["component-demo"]}>
              <a className={styles["guide-link"]} href="/services">
                Explore our services <span aria-hidden="true">↗</span>
              </a>
              <a className={styles["guide-link"]} href="/#about">
                About Relata
              </a>
              <a
                className={[
                  styles["guide-link"],
                  styles["guide-nav-link"],
                ].join(" ")}
                href="/contact"
              >
                Contact
              </a>
            </div>
          </div>
          <div className={styles["interaction-row"]}>
            <h3>Interaction and accessibility</h3>
            <p>
              Hover adds emphasis; pressing a button returns it to its resting
              position. Keyboard focus must have a visible outline on both light
              and dark surfaces. Keep controls at least 44px tall, respect
              reduced motion preferences, and give icon-only controls an
              accessible name. Links activate with Enter; buttons activate with
              Enter or Space. Decorative arrows stay hidden from assistive
              technology.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
