import { useState } from 'react';
import { genres } from '../data/genres';

export default function GenreTabs() {
    const [active, setActive] = useState(0);
    const current = genres[active];

    return (
        <section className="container my-5">
            <div className="genres-card">
                <div className="text-center mb-4">
                    <p className="genres-small mb-1">
                        From fresh <img className="genre-kicker-icon" src="/images/SVG.png" alt="" aria-hidden="true" />voices to powerful stories!
                    </p>
                    <h2 className="genres-title">Range of Genres We Cater</h2>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
                    {genres.map((g, index) => (
                        <button
                            key={g.name}
                            type="button"
                            className={`genre-pill ${active === index ? 'active' : ''}`}
                            onClick={() => setActive(index)}
                        >
                            {g.name}
                        </button>
                    ))}
                </div>
                <div className="row align-items-center g-4">
                    <div className="col-12 col-md-6">
                        <h3 className="genre-heading">{current.name}</h3>
                        <p className="genre-text">{current.text}</p>

                        <div className="d-flex flex-wrap gap-2">
                            <a href="#contact" className="btn btn-lime btn-sm px-3 py-2">
                                Book Free Consultation <i className="bi bi-arrow-right ms-1"></i>
                            </a>
                            <a href="#contact" className="btn btn-purple btn-sm px-3 py-2">
                                Chat For 35% OFF
                            </a>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <img src={current.image} alt={`${current.name} books`} className="genre-image" />
                    </div>
                </div>
            </div>
    </section >
  );
}