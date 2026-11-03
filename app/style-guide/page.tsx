import type { CSSProperties } from "react";

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
    <main
      className="guide"
      style={
        {
          "--ink": "#111416",
          "--paper": "#F5F2EB",
          "--gold": "#DDB45A",
        } as CSSProperties
      }
    >
      <style>{`
        .guide { min-height: 100vh; background: var(--paper); color: var(--ink); font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
        .guide * { box-sizing: border-box; }
        .guide-header { padding: 28px clamp(24px, 5vw, 72px); background: var(--ink); color: var(--paper); display: flex; justify-content: space-between; gap: 32px; align-items: center; }
        .guide-mark { display: flex; align-items: center; gap: 12px; font-size: 15px; letter-spacing: .08em; }
        .guide-mark-symbol { width: 26px; height: 26px; border: 1px solid var(--gold); border-radius: 50% 50% 50% 8%; transform: rotate(45deg); }
        .guide-header small, .eyebrow { color: var(--gold); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 10px; letter-spacing: .22em; text-transform: uppercase; }
        .guide-section { padding: clamp(56px, 9vw, 128px) clamp(24px, 8vw, 120px); border-bottom: 1px solid rgba(17,20,22,.16); }
        .guide-section.dark { background: var(--ink); color: var(--paper); }
        .guide-section h1, .guide-section h2 { margin: 18px 0 0; max-width: 920px; font-size: clamp(52px, 9vw, 132px); font-weight: 400; line-height: .88; letter-spacing: -.065em; }
        .guide-section h2 { font-size: clamp(42px, 6.5vw, 92px); }
        .italic { color: var(--gold); font-family: Georgia, 'Times New Roman', serif; font-style: italic; font-weight: 400; }
        .guide-intro { max-width: 560px; margin-top: 32px; color: rgba(245,242,235,.72); font-size: clamp(16px, 1.7vw, 21px); line-height: 1.5; }
        .grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 12px; margin-top: 48px; }
        .swatch { min-height: 170px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid rgba(17,20,22,.12); }
        .swatch span:last-child { font: 10px ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: .08em; }
        .type-grid { display: grid; gap: 0; margin-top: 48px; }
        .type-row { display: grid; grid-template-columns: 180px 1fr; gap: 24px; padding: 28px 0; border-top: 1px solid rgba(17,20,22,.16); }
        .type-label { font: 10px ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: .16em; text-transform: uppercase; }
        .type-meta { margin-top: 8px; color: #66705D; font-size: 12px; }
        .display { font-size: clamp(42px, 6vw, 88px); letter-spacing: -.06em; line-height: .9; }
        .sectionHeading { font-size: clamp(32px, 4vw, 56px); letter-spacing: -.05em; line-height: .95; }
        .body { max-width: 520px; font-size: 18px; line-height: 1.5; }
        .eyebrow { font-size: 11px; }
        .layout-notes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
        .note { padding: 24px; background: #D7D9D2; min-height: 150px; }
        .note strong { display: block; margin-bottom: 12px; font-size: 20px; font-weight: 500; }
        .note p { margin: 0; color: rgba(17,20,22,.68); line-height: 1.5; }
        .guide-control { display: inline-flex; align-items: center; justify-content: center; gap: 12px; min-height: 44px; padding: 14px 22px; border: 1px solid transparent; border-radius: 999px; background: var(--gold); color: var(--ink); font: 700 11px ui-sans-serif, system-ui, sans-serif; letter-spacing: .16em; text-transform: uppercase; text-decoration: none; cursor: pointer; transition: transform .15s ease, background-color .15s ease; }
        .guide-control:hover { transform: translateY(-2px); background: #E7C779; }
        .guide-control:active { transform: translateY(0); }
        .guide-control:disabled { opacity: .45; cursor: not-allowed; transform: none; }
        .guide-link { color: inherit; text-decoration: underline; text-decoration-color: #967126; text-underline-offset: 6px; transition: color .15s ease; }
        .guide-link:hover { color: #795A1D; }
        .guide-nav-link { display: inline-flex; align-items: center; min-height: 44px; font-size: 11px; text-transform: uppercase; letter-spacing: .22em; text-decoration: none; }
        .guide-nav-link:hover { text-decoration: underline; }
        .guide a:focus-visible, .guide button:focus-visible { outline: 3px solid #795A1D; outline-offset: 5px; }
        .guide .dark a:focus-visible { outline-color: var(--gold); }
        .interaction-copy { max-width: 720px; margin-top: 32px; line-height: 1.6; }
        .interaction-row { padding: 28px 0; border-top: 1px solid rgba(17,20,22,.16); }
        .interaction-row h3 { font-size: 20px; font-weight: 500; margin-bottom: 12px; }
        .interaction-row p { max-width: 720px; line-height: 1.6; margin-bottom: 20px; }
        .guide-popover { max-width: min(440px, calc(100vw - 48px)); margin: auto; padding: 28px; background: #F5F2EB; color: #111416; border: 1px solid #967126; border-radius: 12px; line-height: 1.6; }
        .guide-popover::backdrop { background: rgba(17,20,22,.45); }
        @media (prefers-reduced-motion: reduce) { .guide-control { transition: none; } .guide-control:hover { transform: none; } }
        .component-demo { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; margin-top: 48px; }
        @media (max-width: 760px) { .grid { grid-template-columns: repeat(2, 1fr); } .layout-notes { grid-template-columns: 1fr; } .type-row { grid-template-columns: 1fr; gap: 12px; } .guide-header { align-items: flex-start; flex-direction: column; } }
      `}</style>

      <section className="guide-section dark">
        <div className="eyebrow">Branding Matters</div>
        <h1>
          Relata&apos;s v2 <span className="italic">style</span> guide.
        </h1>
        <p className="guide-intro">
          Codifying our website's design principles while setting a solid
          departure from our{" "}
          <a
            style={{ color: "#DDB45A", textDecoration: "underline" }}
            href="https://www.luminatemarketing.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            original inspiration
          </a>
          . Open to review and further iteration!
        </p>
      </section>

      <section className="guide-section">
        <div className="eyebrow">01 / Color palette</div>
        <h2>
          Dark foundations. <span className="italic">Warm signals.</span>
        </h2>
        <div className="grid">
          {colors.map((color) => (
            <div
              className="swatch"
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

      <section className="guide-section">
        <div className="eyebrow">02 / Typography</div>
        <h2>
          Artistic typography, <span className="italic">clear voice.</span>
        </h2>
        <div className="type-grid">
          {typeStyles.map((item) => (
            <div className="type-row" key={item.label}>
              <div>
                <div className="type-label">{item.label}</div>
                <div className="type-meta">{item.style}</div>
              </div>
              <div className={item.className}>{item.sample}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="guide-section">
        <div className="eyebrow">03 / Layout principles</div>
        <h2>
          The rule of <span className="italic">threes.</span>
        </h2>
        <div className="layout-notes">
          <div className="note">
            <strong>Generous rhythm</strong>
            <p>
              Use large vertical sections, open margins, and intentional pauses
              between ideas.
            </p>
          </div>
          <div className="note">
            <strong>Asymmetric balance</strong>
            <p>
              Pair oversized editorial type with compact metadata and grounded
              body copy.
            </p>
          </div>
          <div className="note">
            <strong>Image-led mood</strong>
            <p>
              Use tactile, human imagery with dark overlays so type remains the
              first voice.
            </p>
          </div>
        </div>

      </section>
      <section id="buttons-and-links" className="guide-section" aria-labelledby="interaction-title">
        <div className="eyebrow">04 / Buttons and links</div>
        <h2 id="interaction-title">
          Clear actions. <span className="italic">Useful connections.</span>
        </h2>
        <p className="interaction-copy">
          Use a button to perform an action, such as submitting a form or opening
          a menu. Use a link to navigate to a page, section, or external resource.
          A navigation CTA can look like a button while remaining a link.
        </p>
        <div className="type-grid">
          <div className="interaction-row">
            <h3>Primary CTA</h3>
            <p>
              Reserve the gold pill for the main next step. Use dark text, a
              compact uppercase label, generous spacing, and an optional arrow.
              Prefer specific labels such as “Start a conversation.”
            </p>
            <a className="guide-control" href="/contact">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="interaction-row">
            <h3>Action buttons</h3>
            <p>
              Use a native button for actions. Set type="button" for controls
              and type="submit" for form submission. Keep disabled actions visibly
              muted and explain why they are unavailable nearby.
            </p>
            <div className="component-demo" style={{ marginTop: 0 }}>
              <button className="guide-control" type="button" popoverTarget="guide-action-preview">
                Open example
              </button>
              <button className="guide-control" type="button" disabled aria-describedby="disabled-explanation">
                Submit
              </button>
            </div>
            <p id="disabled-explanation" style={{ marginTop: 16 }}>
              Submit is disabled in this example because there is no form to send.
            </p>
            <div id="guide-action-preview" className="guide-popover" popover="auto">
              <p>This button opened a popover. Actions use buttons; navigation uses links.</p>
              <button className="guide-control" type="button" popoverTarget="guide-action-preview" popoverTargetAction="hide">
                Close example
              </button>
            </div>
          </div>
          <div className="interaction-row">
            <h3>Text and navigation links</h3>
            <p>
              Underline links within copy so color is not the only cue. Secondary
              CTAs use a gold underline and may include an arrow. Navigation uses
              compact uppercase labels; mark the current page with aria-current="page".
              Use descriptive text that makes sense on its own.
            </p>
            <div className="component-demo" style={{ marginTop: 0 }}>
              <a className="guide-link" href="/services">Explore our services <span aria-hidden="true">↗</span></a>
              <a className="guide-link" href="/#about">About Relata</a>
              <a className="guide-link guide-nav-link" href="/contact">Contact</a>
            </div>
          </div>
          <div className="interaction-row">
            <h3>Interaction and accessibility</h3>
            <p>
              Hover adds emphasis; pressing a button returns it to its resting
              position. Keyboard focus must have a visible outline on both light
              and dark surfaces. Keep controls at least 44px tall, respect reduced
              motion preferences, and give icon-only controls an accessible name.
              Links activate with Enter; buttons activate with Enter or Space.
              Decorative arrows stay hidden from assistive technology.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
