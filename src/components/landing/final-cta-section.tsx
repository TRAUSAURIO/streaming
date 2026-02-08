import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINK } from '@/app/data/content';
import { MessageCircle } from 'lucide-react';

export function FinalCtaSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-t from-[#1A0000] to-background">
      <div className="container flex flex-col items-center justify-center gap-6 px-6 text-center max-w-7xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold font-headline tracking-tighter text-primary sm:text-5xl md:text-6xl">
            ¿Listo para desbloquear todo?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            No esperes el próximo mes caro. Escribe ahora y empieza hoy.
          </p>
        </div>
        <div className="mt-6">
          <Button
            asChild
            size="lg"
            className="h-16 text-lg font-bold bg-secondary text-secondary-foreground shadow-glow-blue transition-transform hover:scale-105 animate-pulse md:text-xl md:h-20"
          >
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 h-8 w-8" />
               Hablar por WhatsApp +593 96 045 3564
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
