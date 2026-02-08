import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { streamingPlans, WHATSAPP_LINK } from '@/app/data/content';
import { getImage } from '@/app/data/content';
import { cn } from '@/lib/utils';

export function PlansSection() {
  return (
    <section id="plans" className="w-full py-20 md:py-24 bg-gradient-to-b from-[#0B0B0B] via-[#110002] to-[#0B0B0B]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter text-primary sm:text-5xl">
            Servicios Premium
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Elige tu plan y empieza a disfrutar del mejor contenido al instante.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {streamingPlans.map((plan) => {
            const message = `Hola, quiero contratar ${plan.name} de REDSTREAMING.`;
            const whatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(
              message
            )}`;
            const logo = getImage(plan.logoId);

            return (
              <Card
                key={plan.name}
                className={cn(
                  'group flex flex-col overflow-hidden rounded-xl border border-[#E5091433] bg-[#111111] p-6 text-center transition-all duration-300 hover:-translate-y-2',
                   plan.glowColor === 'red' ? 'hover:shadow-[0_0_25px_rgba(229,9,20,0.5)]' : 'hover:shadow-[0_0_25px_rgba(0,207,255,0.4)]'
                )}
              >
                <CardHeader className="p-0 items-center mb-6">
                  <div className="relative h-20 w-full">
                    <Image
                      src={logo.imageUrl}
                      alt={`${plan.name} logo`}
                      fill
                      className="object-contain"
                      data-ai-hint={logo.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-0">
                  <CardTitle className="text-2xl font-bold font-headline">
                    {plan.emoji} {plan.name}
                  </CardTitle>
                   <CardDescription className="mt-2 min-h-[60px] text-muted-foreground">{plan.description}</CardDescription>
                  <div className="mt-4 flex flex-col items-center justify-center gap-3">
                    {plan.prices.map((p) => (
                      <div key={p.plan} className="text-center">
                        <p className="text-sm text-muted-foreground">{p.plan}</p>
                        <p className="text-2xl font-bold font-headline text-accent">{p.price}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-0 mt-6">
                  <Button
                    asChild
                    className="w-full bg-[#E50914] text-white rounded-lg shadow-lg py-3 px-6 hover:bg-[#B2070F] transition-all duration-300 hover:scale-105"
                  >
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contratar por WhatsApp
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
