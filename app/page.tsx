import BackgroundSection from './components/Background.js';
import GlassCTA from './components/GlassCTA.js';
import Footer from './components/Footer.js';

export default function Home() {
  return (
    <main className='relative m-0 p-0'>
      <BackgroundSection />
      <GlassCTA />
      <Footer />
    </main>
  );
}