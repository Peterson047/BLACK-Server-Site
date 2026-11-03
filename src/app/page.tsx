import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServerBrowser from '@/components/ServerBrowser';
import HowToPlay from '@/components/HowToPlay';
import SystemSpecs from '@/components/SystemSpecs';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import ControlsCheatSheet from '@/components/ControlsCheatSheet';
import Community from '@/components/Community';
import FaqSection from '@/components/FaqSection';
import HostGuide from '@/components/HostGuide';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServerBrowser />
        <HowToPlay />
        <SystemSpecs />
        <ScreenshotGallery />
        <ControlsCheatSheet />
        <Community />
        <FaqSection />
        <HostGuide />
      </main>
      <Footer />
    </>
  );
}
