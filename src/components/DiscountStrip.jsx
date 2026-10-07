import "../App.css"
export default function DiscountStrip() {
  return (
    <section className="container text-center my-5">
      <p className="discount-strip mb-3">
        Unlock Your <span className="tag-purple">35% Discount</span> Claim Your Plan Now
      </p>
      <p className="discount-strip mb-0">
        and share your story <span className="tag-lime">beautifully and boldly</span>
      </p>
      <hr className="mt-5" />
    </section>
  );
}