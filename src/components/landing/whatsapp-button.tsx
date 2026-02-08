"use client";

import Link from 'next/link';
import { WhatsAppIcon } from '@/components/icons/whatsapp';
import { WHATSAPP_LINK } from '@/app/data/content';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function WhatsAppButton() {
  const message = 'Hola, quiero contratar un servicio de REDSTREAMING';
  const fullWhatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          asChild
          className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-primary shadow-[0_0_20px_rgba(229,9,20,0.7)] transition-all duration-300 hover:scale-110 hover:bg-primary/90 animate-pulse"
          aria-label="Contactar por WhatsApp"
        >
          <Link href={fullWhatsappUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="h-9 w-9 text-white" />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left" className='bg-primary text-primary-foreground border-none'>
        <p>¡Contáctanos Ahora!</p>
      </TooltipContent>
    </Tooltip>
  );
}
