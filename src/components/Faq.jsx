import { useState } from 'react';

const faqs = [
  {
    q: 'How long does the publishing process take?',
    a: 'Most projects take between 4 to 8 weeks, depending on package and revision turnaround.',
  },
  {
    q: 'Will I get a printed copy to review before it goes live?',
    a: 'Yes. We send you a proof copy so you can review everything before the book is published.',
  },
  {
    q: "Do I get any free copies of my book once it's published?",
    a: 'Yes, you receive author copies once your book is live. The number depends on your package.',
  },
  {
    q: 'Who handles the printing and shipping to readers?',
    a: 'Our distribution partners handle printing and shipping, so you never have to manage orders yourself.',
  },
  {
    q: 'Do I keep the rights to my book? Who actually owns it?',
    a: 'You do. You keep 100% of the rights to your book. We never take ownership.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="container my-5 py-4">
      <div className="row g-4 align-items-start">
        <div className="col-12 col-lg-5">
          <h2
            className="fw-bolder mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            Frequently Asked <br />
            Questions
          </h2>

          <div className="rounded-5 p-4" style={{ background: '#fdfbfd' }}>
            <i className="bi bi-record-circle fs-3 d-block mb-2"></i>
            <h5 className="fw-bold mb-1">Book a 30 min call</h5>
            <p className="small text-secondary mb-4">
              We'll sit down one-on-one to validate your idea and answer every
              "what if" on your mind.
            </p>
            <a href="#contact" className="btn btn-purple w-100 py-3 rounded-3">
              Book a Call
            </a>
          </div>
        </div>

        <div className="col-12 col-lg-7">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-4 mb-2 ${isOpen ? 'bg-white shadow-sm' : ''}`}
                style={isOpen ? {} : { background: '#f6f6f6' }}
              >
                <button
                  type="button"
                  className="btn w-100 d-flex justify-content-between align-items-center text-start px-4 py-3 border-0"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="small fw-medium">{f.q}</span>
                  <span
                    className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 ms-3 ${
                      isOpen ? 'bg-purple text-white' : 'bg-lime text-dark'
                    }`}
                    style={{ width: 22, height: 22 }}
                  >
                    <i className={`bi ${isOpen ? 'bi-dash' : 'bi-plus'}`}></i>
                  </span>
                </button>

                <div className={`collapse ${isOpen ? 'show' : ''}`}>
                  <p className="small text-secondary px-4 pb-3 mb-0">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}