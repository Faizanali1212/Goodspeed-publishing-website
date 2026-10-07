const cover1 = '/images/Book-HIG-4 1.png';
const cover2 = '/images/Book-HIG-3 2 (1).png';
const cover3 = '/images/Book-HIG-2 2.png';
const cover4 = '/images/Book-HIG-5 1.png';
const cover5 = '/images/Book-HIG-1 2.png';

const covers = [
    { img: cover1, author: 'Sylvia Johnson', bg: '#a020f0', rot: -12, mt: 105 },
    { img: cover2, author: 'Sandra Martines', bg: '#ffbe6b', rot: -6, mt: 65 },
    { img: cover3, author: 'Lisa Renee', bg: '#ff7f5f', rot: -10, mt: 0, featured: true },
    { img: cover4, author: 'W.B. Potocka', bg: '#a020f0', rot: -5, mt: 100 },
    { img: cover5, author: 'Gary Linn', bg: '#ffbe6b', rot: 8, mt: 65 },
];

export default function BookCovers() {
    return (
        <section className="container text-center my-5 py-4">
            <span className="portfolio-kicker-wrap">
                <img className="portfolio-kicker-icon" src="/images/SVG.png" alt="" aria-hidden="true" />
                <small className="portfolio-kicker">Our Portfolio</small>
            </span>
            <h2 className="portfolio-title">
                Entice Readers' Minds with <br className="d-none d-md-block" />
                Stunning Book Covers
            </h2>

            <div className="cover-showcase">
                {covers.map((c) => (
                    <div
                        key={c.author}
                        className="cover-item d-flex flex-column align-items-center"
                        style={{ '--mt': `${c.mt}px` }}
                    >
                        <div
                            className={`cover-card rounded-4 ${c.featured ? 'featured' : ''}`}
                            style={{ background: c.bg, '--rot': `${c.rot}deg` }}
                        >
                            <img src={c.img} alt={c.author} className="shadow" />
                        </div>

                        <span
                            className={`author-badge ${c.featured ? 'featured' : ''}
                                }`}
                        >
                            {c.author}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}