import Image from 'next/image';
import { paymentMethods } from '@/app/data/content';
import { ShieldCheck } from 'lucide-react';

export function PaymentMethods() {
  return (
    <section
      id="payments"
      className="w-full bg-gradient-to-t from-background to-[#001A1F] py-20 md:py-24"
    >
      <div className="container px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-headline tracking-tighter text-primary sm:text-5xl">
            Pagos Seguros y Rápidos Ecuador 🇪🇨
        </h2>
        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Transfiere desde tu app bancaria y recibe activación en minutos. Sin intermediarios, sin riesgos.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="relative h-16 w-48 grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110"
              title={method.name}
            >
              <Image
                src={method.image.imageUrl}
                alt={`${method.name} logo`}
                fill
                className="object-contain"
                data-ai-hint={method.image.imageHint}
              />
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center gap-3 text-accent">
          <ShieldCheck className="h-6 w-6" />
          <p className="text-lg font-semibold">🔒 Transacciones 100% seguras</p>
        </div>
      </div>
    </section>
  );
}
