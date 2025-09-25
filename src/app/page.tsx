import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import ProductsSection from '@/components/sections/ProductsSection';
import AboutSection from '@/components/sections/AboutSection';
import FounderSection from '@/components/sections/FounderSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ProductsSection />
        <AboutSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
