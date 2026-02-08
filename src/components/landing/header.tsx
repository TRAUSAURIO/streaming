import Link from 'next/link';
import { Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINK } from '@/app/data/content';

export function Header() {
  const message = `Hola, quiero contratar un servicio de REDSTREAMING`;
  const whatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-primary/20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 max-w-7xl">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold font-headline text-primary transition-all hover:text-white hover:drop-shadow-[0_0_8px_hsl(var(--primary))] md:text-3xl"
        >
          <Film className="h-7 w-7" />
          REDSTREAMING
        </Link>
        <nav className="hidden items-center gap-6 text-lg font-medium md:flex">
          <Link href="#trust" className="text-foreground/80 transition-colors hover:text-primary relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-[#E50914] after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full">
            Confianza
          </Link>
          <Link href="#plans" className="text-foreground/80 transition-colors hover:text-primary relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-[#E50914] after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full">
            Servicios
          </Link>
          <Link href="#payments" className="text-foreground/80 transition-colors hover:text-primary relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-[#E50914] after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full">
            Pagos
          </Link>
          <Link href="#contact" className="text-foreground/80 transition-colors hover:text-primary relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-[#E50914] after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full">
            Contacto
          </Link>
        </nav>
        <Button asChild className="hidden md:flex bg-[#E50914] hover:bg-[#B2070F] hover:scale-105 text-white rounded-lg shadow-lg py-3 px-6 transition-all duration-300">
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Contratar Ahora
          </Link>
        </Button>
      </div>
    </header>
  );
}
