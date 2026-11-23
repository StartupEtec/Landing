import CallToAction from '@/components/CallToAction';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Navbar from '@/components/Navbar';
import Roles from '@/components/Roles';
import Trust from '@/components/Trust';

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <HowItWorks />
        <Roles />
        <Trust />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
