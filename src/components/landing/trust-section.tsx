import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { trustFeatures } from '@/app/data/content';
import {
  Zap,
  ShieldCheck,
  Smartphone,
  MessageCircle,
  DollarSign,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const iconMap: { [key: string]: React.FC<LucideProps> } = {
  Zap,
  ShieldCheck,
  Smartphone,
  MessageCircle,
  DollarSign,
};

export function TrustSection() {
  return (
    <section
      id="trust"
      className="w-full bg-background py-20 md:py-24"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold font-headline tracking-tighter text-white sm:text-5xl">
          Confianza Total
        </h2>
        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
          No vendemos humo. Vendemos entretenimiento real, rápido y seguro.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {trustFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card
                key={feature.title}
                className="flex flex-col items-center p-6 text-center bg-[#111111] border border-[#E5091433] rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] hover:-translate-y-2"
              >
                <CardHeader className="p-0">
                  <Icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardDescription className="mt-2 text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
