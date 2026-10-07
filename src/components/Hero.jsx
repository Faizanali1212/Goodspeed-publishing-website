import "../style/global.css"
export default function Hero() {
  return (
    <section className="container hero-section my-5">
      <div className="row g-3 align-items-stretch">
        <div className="col-12 col-lg-6">
          <div className="hero-card p-4 p-md-5 h-100 d-flex flex-column justify-content-center">
            <img className="hero-books-illustration" src="/images/2a2992ffcc6cd7dc2311571f3d92581bcfb1f40e.png" alt="books-icon" aria-hidden="true" />
            <div className="hero-card-content">
              <h1 className="hero-title mb-4">
                Your Book Deserves to<br></br>
                Be Read
              </h1>

              <div className="hero-stats d-flex align-items-center gap-2 mb-4">
                <img src="/images/Container.png" alt="" aria-hidden="true" />
                <span className="fw-semibold fs-3">2k+</span>
                <small className="1h-sm fs-6 fw-bold">Published<br />Books</small>
              </div>

              <p className="fw-semibold mb-3">
                Get Your Free, Personalized <br />
                Publishing Plan.
              </p>

              <div>
                <a href="#contact" className="btn btn-dark-custom px-4 py-3">
                  CLAIM MY PLAN
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="hero-image-card h-100">
            <img className="hero-image-background" src="/images/Frame 70.png" alt="" aria-hidden="true" />
            <img className="hero-image-accent" src="/images/609e6b0cc31bf0ebea807809046c970a8f41f25b.png" alt="" aria-hidden="true" />
            <img src="/images/Gemini_Generated_Image_w6h7lew6h7lew6h7 (1) (1) 1.png" alt="Happy author holding her book" />
          </div>
        </div>
      </div>
    </section>
  );
}