import before1 from '/images/B1 1.jpg';
import after1 from '/images/A1 1.jpg';
import before2 from '/images/B1 1.jpg';
import after2 from '/images/A1 1.jpg';

const slides = [
  { before: before1, after: after1 },
  { before: before2, after: after2 },
];

export default function BeforeAfter() {
  return (
    <section className="container my-5">
      <div className="bg-lime rounded-5 position-relative overflow-hidden px-4 px-md-5 py-5">
        <span className="swirl swirl-1" aria-hidden="true"></span>
        <span className="swirl swirl-2" aria-hidden="true"></span>

        <div className="text-center position-relative mb-4">
          <h2 className="display-5 fw-bolder mb-3">Perfect Your Story</h2>
          <p className="small mb-0">
            We help you sharpen every chapter with expert book editing, formatting
            &amp; proofreading services.
          </p>
        </div>

        <div
          id="storyCarousel"
          className="carousel slide position-relative mx-md-5"
          data-bs-ride="false"
        >
          <div className="carousel-inner">
            {slides.map((s, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                <div className="d-flex justify-content-around align-items-start mb-2">
                  <span className="serif-label">Before</span>

                  <svg width="120" height="50" viewBox="0 0 120 50" fill="none" className="d-none d-md-block">
                    <path
                      d="M2 12 C 40 -5, 90 5, 110 38"
                      stroke="#222"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M104 32 L111 40 L117 31"
                      stroke="#222"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="serif-label">After</span>
                </div>

                <div className="row g-2 g-md-3">
                  <div className="col-6">
                    <img src={s.before} alt="Before editing" className="img-fluid w-100" />
                  </div>
                  <div className="col-6">
                    <img src={s.after} alt="After editing" className="img-fluid w-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="btn btn-outline-dark border-2 rounded-circle position-absolute top-50 start-0 ms-2 ms-md-3 d-flex align-items-center justify-content-center"
          style={{ width: 40, height: 40, marginTop: 40 }}
          data-bs-target="#storyCarousel"
          data-bs-slide="prev"
          aria-label="Previous"
        >
          <i className="bi bi-arrow-left"></i>
        </button>

        <button
          type="button"
          className="btn btn-outline-dark border-2 rounded-circle position-absolute top-50 end-0 me-2 me-md-3 d-flex align-items-center justify-content-center"
          style={{ width: 40, height: 40, marginTop: 40 }}
          data-bs-target="#storyCarousel"
          data-bs-slide="next"
          aria-label="Next"
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}