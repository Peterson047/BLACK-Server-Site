import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServerBrowser from '@/components/ServerBrowser';
import HowToPlay from '@/components/HowToPlay';
import ControlsCheatSheet from '@/components/ControlsCheatSheet';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import SystemSpecs from '@/components/SystemSpecs';
import FaqSection from '@/components/FaqSection';
import HostGuide from '@/components/HostGuide';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServerBrowser />
        <HowToPlay />
        <ControlsCheatSheet />
        <ScreenshotGallery />
        <SystemSpecs />
        <FaqSection />
        <HostGuide />
        <Community />
      </main>
      <Footer />
    </>
  );
}
