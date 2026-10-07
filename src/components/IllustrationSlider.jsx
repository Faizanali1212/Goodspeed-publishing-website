import { useState, useEffect, useRef } from 'react';

const COUNT = 8;
const images = Array.from({ length: COUNT }, (_, i) => `/images/illustrations/ill${i + 1}.png.png`);

const partners = [
  { name: 'Amazon Kindle', img: '/images/f3cba0160745cdae8a6dfa9f629eba2ffa8c45fa.png' },
  { name: 'BookRix', img: '/images/5310347944892f704fdab0980ea3be6d4dff0b0f.png' },
  { name: 'Apple Books', img: '/images/a856fbdc31eb46db9c78feb465f0d920781b26c4.png' },
  { name: 'BAM', img: '/images/30247798e22484f3a74941af0997d09a6bb21149.png' },
  { name: 'Barnes & Noble', img: '/images/f5c2438b60ff638f92fd13712bd3af7e36dc44f0.png' },
  { name: 'Scribd', img: '/images/ae8d50575217db5c7e899af24ff9d885965a1360.png' },
  { name: 'Google', img: '/images/ce2167ce3dc5f813a8c794f0454409d29af0c31c.png' },
];

const LOGO_WIDTH = 110;
const LOGO_GAP = 16;
const STEP = LOGO_WIDTH + LOGO_GAP;

const offsets = [-3, -2, -1, 0, 1, 2, 3];

export default function IllustrationSlider() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const pausedRef = useRef(false);

  const next = () => setActive((active + 1) % COUNT);
  const prev = () => setActive((active - 1 + COUNT) % COUNT);

  useEffect(() => {
    let pos = 0;
    const setWidth = partners.length * STEP;

    const id = setInterval(() => {
      if (pausedRef.current) return;

      pos += 1;
      if (pos >= setWidth) pos = 0;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${pos}px)`;
      }
    }, 20);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="container my-5">
        <div className="bg-purple rounded-5 text-center text-white p-4 p-md-5">
          <small className="text-uppercase">Our Creations</small>
          <h2 className="display-6 fw-bolder mt-2 mb-5">
            Our <span className="text-lime">Custom Illustrations</span> That{' '}
            <br className="d-none d-md-block" />
            Captivate Readers
          </h2>

          <div className="position-relative">
            <button
              type="button"
              className="btn btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y d-flex align-items-center justify-content-center p-0"
              style={{ width: 40, height: 40, zIndex: 2 }}
              onClick={prev}
              aria-label="Previous"
            >
              <i className="bi bi-arrow-left"></i>
            </button>

            <div className="d-flex justify-content-center align-items-center gap-2 gap-md-3 px-5">
              {offsets.map((o) => {
                const index = (active + o + COUNT) % COUNT;
                const isCenter = o === 0;
                return (
                  <img
                    key={o}
                    src={images[index]}
                    alt={`Illustration ${index + 1}`}
                    className={`rounded-3 object-fit-cover bg-white ${
                      Math.abs(o) > 1 ? 'd-none d-md-block' : ''
                    }`}
                    style={{
                      width: isCenter ? 190 : 95,
                      height: isCenter ? 260 : 190,
                    }}
                  />
                );
              })}
            </div>

            <button
              type="button"
              className="btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y d-flex align-items-center justify-content-center p-0"
              style={{ width: 40, height: 40, zIndex: 2 }}
              onClick={next}
              aria-label="Next"
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          <div className="d-flex justify-content-center align-items-center gap-1 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`border-0 rounded-pill p-0 ${
                  i === active ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
                style={{ width: i === active ? 24 : 6, height: 6 }}
              ></button>
            ))}
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div
          className="overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
          }}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div ref={trackRef} className="d-flex" style={{ width: 'max-content' }}>
            {[...partners, ...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-4 d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: LOGO_WIDTH, height: 56, marginRight: LOGO_GAP }}
              >
                <img src={p.img} alt={p.name} className="img-fluid" style={{ maxHeight: 28 }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}