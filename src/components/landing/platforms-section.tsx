import Image from 'next/image';
import { platforms } from '@/app/data/content';

export function PlatformsSection() {
  return (
    <section id="platforms" className="w-full py-12 md:py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter text-white sm:text-4xl">
            Elige tu plataforma favorita
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            O arma tu combo ideal con los mejores servicios de streaming.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-4 md:grid-cols-5 lg:gap-x-12">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="relative h-20 w-full grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110 sm:h-24"
              title={platform.name}
            >
              <Image
                src={platform.image.imageUrl}
                alt={`${platform.name} logo`}
                fill
                className="object-contain"
                data-ai-hint={platform.image.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
