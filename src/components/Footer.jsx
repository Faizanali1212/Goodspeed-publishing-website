const links = ['Book Writing', 'Book Editing', 'Book Marketing', 'Book Publishing', 'Audio Books', 'About', 'Schedule a Call'];

const contacts = [
  { icon: 'bi-telephone', text: '+1(646)-389-2410' },
  { icon: 'bi-envelope', text: 'info@goodspeedpublishing.com' },
  { icon: 'bi-geo-alt', text: '276 5th Avenue New York, NY 10001' },
];

export default function Footer() {
  return (
    <footer className="site-footer bg-card-dark text-white mt-5 pt-5">
      <div className="container">
        <div className="d-flex align-items-center gap-2 mb-5">
          <i className="bi bi-record-circle fs-1 footer-logo-mark"></i>
          <span className="fs-2 fw-bolder footer-logo" style={{ letterSpacing: '-0.03em' }}>
            Goodspeed Publishing
          </span>
        </div>

        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <h6 className="footer-heading fw-bold mb-3">About Us</h6>
            <p className="fw-semibold small mb-2">
              Fueling Authors <span className="text-lime">One Book</span> at a Time
            </p>
            <p className="opacity-75 mb-0" style={{ fontSize: '0.75rem', lineHeight: 1.7 }}>
              We believe every story deserves a platform and every author, a
              champion. Whether you're a first-time writer or a seasoned
              storyteller, our mission is to guide you from concept to published
              success with passion, precision, and purpose.
            </p>
          </div>

          <div className="col-6 col-lg-3 border-start border-secondary ps-4">
            <h6 className="footer-heading fw-bold mb-3">Useful Links</h6>
            <ul className="list-unstyled mb-0">
              {links.map((l) => (
                <li key={l} className="mb-2">
                  <a href="#" className="text-white text-decoration-none opacity-75" style={{ fontSize: '0.75rem' }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-lg-5">
            <h6 className="footer-heading fw-bold mb-3">Contact Info</h6>
            {contacts.map((c) => (
              <div key={c.text} className="d-flex align-items-center gap-3 mb-3">
                <span
                  className="rounded-circle bg-white text-dark d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: 24, height: 24, fontSize: '0.7rem' }}
                >
                  <i className={`bi ${c.icon}`}></i>
                </span>
                <span style={{ fontSize: '0.75rem' }}>{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center opacity-50 my-5" style={{ fontSize: '0.7rem' }}>
          © 2026 Goodspeed Publishing. All Rights Reserved
        </p>
      </div>

      <div
        className="bg-lime mx-auto d-flex align-items-center justify-content-center gap-2 py-5"
        style={{ width: '88%', borderRadius: '160px 160px 0 0' }}
      >
        <i className="bi bi-record-circle display-4 footer-bottom-mark"></i>
        <span className="display-5 fw-bolder footer-bottom-logo" style={{ letterSpacing: '-0.03em' }}>
          Goodspeed Publishing
        </span>
      </div>
    </footer>
  );
}