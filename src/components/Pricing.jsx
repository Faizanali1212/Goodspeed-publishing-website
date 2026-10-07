import PricingCard from './PricingCard';

const plans = [
  {
    title: 'Start Up',
    subtitle: 'For first-time authors stepping into print.',
    price: '299',
    oldPrice: '500',
    theme: 'white',
    features: [
      'Manuscript Prep',
      'Editorial Support',
      'Proofreading',
      'Typesetting',
      '2 Revisions',
      'Cover Prep',
    ],
  },
  {
    title: 'Standard',
    subtitle: 'Our most popular launch package.',
    price: '1,050',
    oldPrice: '2,100',
    theme: 'lime',
    features: [
      'Everything in Start Up',
      'Pro Formatting',
      '3 Revisions',
      'Custom Cover',
      'ISBN Assignment',
      'Distribution Setup',
    ],
  },
  {
    title: 'Authors Elite',
    subtitle: 'End-to-end concierge publishing.',
    price: '1,749',
    oldPrice: '3,500',
    theme: 'purple',
    badge: 'MOST SOLD',
    features: [
      'Everything in Standard',
      '5 Revisions',
      'Premium Cover Design',
      'Marketing Strategy',
      'Amazon Optimization',
      'Author Coaching',
    ],
  },
];

export default function Pricing() {
  return (
    <section className="container my-5 py-4">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bolder" style={{ letterSpacing: '-0.03em' }}>
          Choose Your Path To <em>Success</em>
        </h2>
        <p className="small mb-0">
          Join us today and be a part of our 1,000+ Bestsellers list.
        </p>
      </div>

      <div className="row g-4 pt-3">
        {plans.map((p) => (
          <div className="col-12 col-md-4" key={p.title}>
            <PricingCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}