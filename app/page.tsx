import BackgroundSection from './Components/Background.js';
import GlassCTA from './Components/GlassCTA.js';
import Footer from './Components/Footer.js';

export default function Home() {
  return (
    <main className='relative m-0 p-0 pb-0'>
      <BackgroundSection />
      <GlassCTA />
      <Footer />
    </main>
  );
}