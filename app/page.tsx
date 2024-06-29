import BackgroundSection from './components/Background';
import GlassCTA from './components/GlassCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className='relative m-0 p-0'>
      <BackgroundSection />
      <GlassCTA />
      <Footer />
    </main>
  );
}