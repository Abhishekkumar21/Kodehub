import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeatureSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
