import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DiscountStrip from '../components/DiscountStrip';
import Testimonial from '../components/Testimonial';
import GenreTabs from '../components/GenreTabs';
import BeforeAfter from '../components/BeforeAfter';
import BookCovers from '../components/BookCovers';
import IllustrationSlider from '../components/IllustrationSlider';
import Pricing from '../components/Pricing';
import Stats from '../components/Stats';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DiscountStrip />
      <Testimonial />
      <GenreTabs />
      <BeforeAfter />
      <BookCovers />
      <IllustrationSlider />
      <Pricing />
      <Stats />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}