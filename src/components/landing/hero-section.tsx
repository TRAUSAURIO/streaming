import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINK } from '@/app/data/content';
import { MessageCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0B0B0B] via-[#1A0000] to-[#001A1F] py-20 text-center px-6">
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-5"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      
      <div className="container relative z-20 flex flex-col items-center max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold font-headline tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl fade-in-up" style={{textShadow: '0 0 30px hsl(var(--primary))'}}>
          <span className="text-primary">🎬</span> REDSTREAMING
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-bold text-slate-200 md:text-2xl fade-in-up" style={{ animationDelay: '0.2s' }}>
          Todo el streaming que amas. Más barato. Más rápido. Más fácil.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg fade-in-up" style={{ animationDelay: '0.4s' }}>
          Series, películas, fútbol, música y TV en vivo sin complicaciones y con activación inmediata.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto text-lg font-bold bg-primary text-primary-foreground shadow-[0_0_20px_rgba(229,9,20,0.5)] transition-transform hover:scale-105 animate-pulse-subtle"
          >
            <Link href="#plans">
              Ver Planes
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto text-lg font-bold bg-secondary text-secondary-foreground shadow-[0_0_20px_rgba(0,207,255,0.4)] transition-transform hover:scale-105"
          >
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              WhatsApp Directo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
