import Link from 'next/link';
import { Film } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '@/app/data/content';

export function Footer() {
  return (
    <footer className="w-full border-t border-t-primary/20 py-8 bg-background">
      <div className="container flex flex-col items-center justify-center gap-4 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold font-headline text-primary transition-all hover:text-white hover:drop-shadow-[0_0_8px_hsl(var(--primary))]"
        >
          <Film className="h-6 w-6" />
          REDSTREAMING
        </Link>
        <p className="max-w-md text-muted-foreground">
          Streaming premium accesible. Confianza, velocidad y entretenimiento sin fronteras.
        </p>
        <p className="font-semibold text-foreground">
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary hover:underline"
          >
            WhatsApp: +{WHATSAPP_NUMBER} | Ecuador 🇪🇨
          </Link>
        </p>
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} REDSTREAMING. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
