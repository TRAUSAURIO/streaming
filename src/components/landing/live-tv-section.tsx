import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { liveTvPlans, WHATSAPP_LINK } from '@/app/data/content';
import { getImage } from '@/app/data/content';
import { Badge } from '@/components/ui/badge';

export function LiveTvSection() {
  return (
    <section id="live-tv" className="w-full py-20 md:py-24 bg-gradient-to-b from-background via-[#001A1F] to-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold font-headline tracking-tighter text-primary sm:text-5xl">
            ⚽ Vive el Fútbol y la TV en Tiempo Real
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            No te pierdas partidos, ligas ni canales en vivo. Activación inmediata.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {liveTvPlans.map((plan) => {
            const message = `Hola, estoy interesado en el servicio de ${plan.name}.`;
            const whatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(
              message
            )}`;
            const logo = getImage(plan.logoId);

            return (
              <Card
                key={plan.name}
                className="group flex flex-col overflow-hidden rounded-xl border-secondary/30 bg-[#111111] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,207,255,0.4)]"
              >
                <CardHeader className="p-0 items-center mb-6">
                  <div className="relative h-20 w-full">
                    <Image
                      src={logo.imageUrl}
                      alt={`${plan.name} logo`}
                      fill
                      className="object-contain"
                      data-ai-hint={logo.imageHint}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-0">
                  <CardTitle className="text-2xl font-bold font-headline">{plan.name}</CardTitle>
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
                    variant="secondary"
                    className="w-full font-bold bg-secondary text-secondary-foreground shadow-glow-blue"
                  >
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contratar
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
