
const covers = [
  { img: '/images/Book-HIG-4 1.png', author: 'Sylvia Johnson',  bg: '#a020f0', rot: 14, mt: 100, w: 130, h: 210, dx: 0,  dy: 0, bw: 92 },
  { img: '/images/Book-HIG-3 2 (1).png', author: 'Sandra Martines', bg: '#ffbe6b', rot: 14, mt: 75,  w: 130, h: 210, dx: -8, dy: 0, bw: 80 },
  { img: '/images/Book-HIG-2 2.png', author: 'Lisa Renee',      bg: '#ff7f5f', rot: 15, mt: 0,   w: 190, h: 300, dx: 0,  dy: 0, bw: 90, featured: true },
  { img: '/images/Book-HIG-1 2.png', author: 'W.B. Potocka',    bg: '#a020f0', rot: 14, mt: 100, w: 130, h: 210, dx: 0,  dy: 0, bw: 92 },
  { img: '/images/Book-HIG-5 1.png', author: 'Gary Linn',       bg: '#ffbe6b', rot: 14, mt: 75,  w: 130, h: 210, dx: -8, dy: 0, bw: 82 },
];

export default function BookCovers() {
  return (
    <section className="container text-center my-5 py-4">
      {/* Heading: icon text ke upar */}
      <div className="d-inline-block position-relative mb-2" style={{ paddingTop: 6 }}>
        <img
          src="/images/SVG.png"
          alt=""
          width="18"
          className="position-absolute start-50 translate-middle-x"
          style={{ top: -10 }}
        />
        <small
          className="text-uppercase fw-semibold position-relative"
          style={{ letterSpacing: '1px', fontSize: 12 }}
        >
          Our Portfolio
        </small>
      </div>

      <h2 className="display-5 fw-bold mb-5" style={{ letterSpacing: '-0.03em' }}>
        Entice Readers' Minds with <br className="d-none d-md-block" />
        Stunning Book Covers
      </h2>

      {/* Covers */}
      <div className="d-flex flex-wrap justify-content-center align-items-start gap-4">
        {covers.map((c) => (
          <div
            key={c.author}
            className="d-flex flex-column align-items-center"
            style={{ marginTop: c.mt }}
          >
            {/* Colored card */}
            <div
              className="rounded-4 position-relative"
              style={{ width: c.w, height: c.h, backgroundColor: c.bg }}
            >
              {/* Book: card ke center mein, clockwise tilted */}
              <img
                src={c.img}
                alt={c.author}
                className="position-absolute top-50 start-50 shadow rounded-2"
                style={{
                  width: `${c.bw}%`,
                  transform: `translate(calc(-50% + ${c.dx}px), calc(-50% + ${c.dy}px)) rotate(${c.rot}deg)`,
                }}
              />
            </div>

            {/* Author badge */}
            <span
              className={`badge rounded-pill bg-lime text-dark ${
                c.featured ? 'fs-6 px-4 py-3' : 'px-3 py-2'
              }`}
              style={{ marginTop: c.featured ? 44 : 36 }}
            >
              {c.author}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}