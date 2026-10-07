import { useState } from 'react';

const contacts = [
  { icon: 'bi-telephone', text: '+1(646)-389-2410', link: true },
  { icon: 'bi-envelope', text: 'info@goodspeedpublishing.com' },
  { icon: 'bi-geo-alt', text: '276 5th Avenue New York, NY 10001' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="container my-5">
      <div className="bg-lime rounded-5 position-relative overflow-hidden p-4 p-md-5">
        <img
          src="/public/images/ddadds 1.png"
          alt=""
          className="position-absolute top-0 start-0 d-none d-md-block"
          style={{ width: 280 }}
        />

        <div className="row align-items-center g-5 position-relative">
          <div className="col-12 col-lg-5">
            <small
              className="text-uppercase d-block mb-2"
              style={{ letterSpacing: '2px', fontSize: '0.6rem' }}
            >
              Let's start your booking
            </small>
            <h2 className="display-4 fw-bolder mb-3" style={{ letterSpacing: '-0.03em' }}>
              Talk to Us.
            </h2>
            <p className="small mb-4" style={{ maxWidth: 300 }}>
              Drop us a line and we'll send your free, personalized publishing plan
              within 24 hours.
            </p>

            {contacts.map((c) => (
              <div key={c.text} className="d-flex align-items-center gap-3 mb-3">
                <span
                  className="rounded-circle bg-dark text-lime d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: 28, height: 28, fontSize: '0.75rem' }}
                >
                  <i className={`bi ${c.icon}`}></i>
                </span>
                <span className={`small ${c.link ? 'text-decoration-underline' : ''}`}>
                  {c.text}
                </span>
              </div>
            ))}
          </div>

          <div className="col-12 col-lg-7">
            <form onSubmit={handleSubmit} className="bg-white rounded-5 shadow p-4">
              <div className="row g-4 mb-3">
                <div className="col-12 col-md-6">
                  <label className="field-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control line-input"
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="field-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="form-control line-input"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="field-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control line-input"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="field-label">Tell us about your book</label>
                <textarea
                  name="message"
                  rows="3"
                  value={form.message}
                  onChange={handleChange}
                  className="form-control line-input"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark w-100 py-3 rounded-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}