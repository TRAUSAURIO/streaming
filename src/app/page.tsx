import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { TrustSection } from '@/components/landing/trust-section';
import { PlatformsSection } from '@/components/landing/platforms-section';
import { PlansSection } from '@/components/landing/plans-section';
import { LiveTvSection } from '@/components/landing/live-tv-section';
import { GameRechargesSection } from '@/components/landing/game-recharges-section';
import { PaymentMethods } from '@/components/landing/payment-methods';
import { FinalCtaSection } from '@/components/landing/final-cta-section';
import { Footer } from '@/components/landing/footer';
import { WhatsAppButton } from '@/components/landing/whatsapp-button';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustSection />
        <PlatformsSection />
        <PlansSection />
        <LiveTvSection />
        <GameRechargesSection />
        <PaymentMethods />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
