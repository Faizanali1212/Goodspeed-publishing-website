import authorImg from '../../public/images/Group 1000001803.png';
export default function Testimonial() {
    return (
        <section className="container my-5">
            <h2 className="fw-bold mb-3">
                Real Authors, <span className="tag-lime">Real Results</span>
            </h2>

            <div className="spotlight-card">
                <h3 className="spotlight-title">SUCCESS SPOTLIGHT</h3>

                <div className="row align-items-center g-4 pt-md-4">
                    <div className="col-12 col-md-4">
                        <img src={authorImg} alt="Author A. Singh with book Love Does" className="author-combo" />
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="quote-box">
                            <span className="quote-mark quote-open"><img className='h-100' src="/public/images/Objects.png" alt="quote" /></span>
                            <p className="spotlight-quote mb-0">
                                With Goodspeed, I kept <span className="text-lime">100% rights</span> and
                                reached <span className="text-lime">Top 10 in Amazon</span> Business.
                            </p>
                            <div className="author-line">AUTHOR A. SINGH</div>
                            <span className="quote-mark quote-close"><img src="/public/images/Objects (1).png" alt="quote" /></span>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end">
                        <div className="review-box p-3 text-center">
                            <small className="d-block text-secondary">REVIEWED ON</small>
                            <small className="d-block fw-semibold mb-1">
                                <i className="bi bi-star-fill me-1" style={{ color: '#00b67a' }}></i>
                                Trustpilot
                            </small>
                            <div className="rating">4.9</div>
                            <small className="d-block text-secondary mb-2">2342 reviews</small>

                            <div className="tp-stars mb-2">
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <span key={n}>
                                        <i className="bi bi-star-fill"></i>
                                    </span>
                                ))}
                            </div>
                            <a href="#" className="review-link">
                                Live ebook out, bestseller
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}