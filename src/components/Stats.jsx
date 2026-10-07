const stats = [
  { value: '1K+', label: 'Bestsellers' },
  { value: '12y', label: 'Of Craft' },
  { value: '50+', label: 'Editors' },
  { value: '100%', label: 'Author Rights' },
  { value: '35%', label: 'Off Today' },
  { value: '★5.0', label: 'Trustpilot' },
];

export default function Stats() {
  return (
    <section className="container my-5">
      <div className="bg-card-dark text-white rounded-5 position-relative overflow-hidden p-4 p-md-5">
        <img
          src="/public/images/55666666 1.png"
          alt=""
          className="position-absolute top-0 start-0 d-none d-md-block"
          style={{ marginTop: 80, height: 130 }}
        />
        <img
          src="/public/images/Vector Smart Object222 2223.png"
          alt=""
          className="position-absolute bottom-0 end-0 d-none d-md-block"
          style={{ width: 460 }}
        />

        <div className="row align-items-center g-4 position-relative">
          <div className="col-12 col-lg-6">
            <small
              className="text-lime text-uppercase d-block mb-3"
              style={{ letterSpacing: '3px', fontSize: '0.6rem' }}
            >
              Ready when you are
            </small>

            <h2
              className="fw-bolder mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Our team helps <br />
              you reach the <br />
              <em className="text-lime">finish line</em>.
            </h2>

            <p className="small opacity-75 mb-4" style={{ maxWidth: 340 }}>
              Editors, designers, marketers. One studio, one shared goal: your
              book in the hands of readers who love it.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-lime btn-sm px-3 py-2">
                Book Free Consultation <i className="bi bi-arrow-right ms-1"></i>
              </a>
              <a href="#contact" className="btn btn-purple btn-sm px-3 py-2">
                Chat For 35% OFF
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="row g-3">
              {stats.map((s) => (
                <div className="col-4" key={s.label}>
                  <div className="bg-stat rounded-4 text-center py-3 px-1">
                    <div className="text-lime fw-bolder fs-4 lh-1 mb-2">{s.value}</div>
                    <div
                      className="text-uppercase opacity-50"
                      style={{ fontSize: '0.55rem', letterSpacing: '1px' }}
                    >
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}