export default function PricingCard({
  title,
  subtitle,
  price,
  oldPrice,
  features,
  theme,
  badge,
}) {
  const themes = {
    white: { card: 'bg-white text-dark', btn: 'btn btn-dark' },
    lime: { card: 'bg-lime text-dark', btn: 'btn btn-dark' },
    purple: { card: 'bg-purple text-white', btn: 'btn btn-lime' },
  };
  const t = themes[theme];

  return (
    <div
      className={`${t.card} rounded-5 px-4 pt-4 pb-3 h-100 position-relative d-flex flex-column`}
    >
      {badge && (
        <span
          className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-lime text-dark px-3 py-2"
          style={{ fontSize: '0.6rem', letterSpacing: '1px', border: '2px solid #7aa800' }}
        >
          <i className="bi bi-gem me-1"></i>
          {badge}
        </span>
      )}

      <h5 className="fw-bold mt-2 mb-1">{title}</h5>
      <p className="small mb-3 opacity-75">{subtitle}</p>

      <div className="d-flex align-items-baseline gap-1">
        <span className="fs-1 fw-bolder lh-1" style={{ letterSpacing: '-0.03em' }}>
          ${price}
        </span>
        <small className="text-decoration-line-through opacity-50">${oldPrice}</small>
      </div>
      <div
        className="text-uppercase opacity-75 mt-1"
        style={{ fontSize: '0.6rem', letterSpacing: '2px' }}
      >
        One-time
      </div>

      <hr className="my-3" />

      <ul className="list-unstyled small mb-0 flex-grow-1">
        {features.map((f) => (
          <li key={f} className="d-flex align-items-center gap-2 mb-2">
            <i className="bi bi-check2"></i>
            {f}
          </li>
        ))}
      </ul>

      <hr className="my-3" />

      <a href="#contact" className={`${t.btn} rounded-pill fw-medium py-2 w-100`}>
        Order Now
      </a>

      <div className="text-center mt-3" style={{ fontSize: '0.7rem' }}>
        <div className="fw-bold text-uppercase mb-2" style={{ letterSpacing: '1px' }}>
          Need more info?
        </div>
        <div className="d-flex justify-content-center gap-4">
          <div>
            <div className="opacity-75">Talk to us</div>
            <div className="fw-semibold">+1 (332) 216-3705</div>
          </div>
          <div>
            <div className="opacity-75">For More Detail</div>
            <div className="fw-semibold">Chat With us</div>
          </div>
        </div>
      </div>
    </div>
  );
}