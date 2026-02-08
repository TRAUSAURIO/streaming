import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const getImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    return {
      id: 'not-found',
      description: 'Image not found',
      imageUrl: 'https://picsum.photos/seed/notfound/200/100',
      imageHint: 'placeholder',
    };
  }
  return image;
};

export const WHATSAPP_NUMBER = '593960453564';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const trustFeatures = [
  {
    title: 'Activación en Minutos',
    description: 'Empieza a disfrutar de tu contenido favorito casi al instante.',
    icon: 'Zap',
  },
  {
    title: 'Cuentas 100% Confiables',
    description: 'Ofrecemos cuentas seguras, estables y sin caídas.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Multi-dispositivo',
    description: 'Disfruta en tu celular, TV, tablet o computadora.',
    icon: 'Smartphone',
  },
  {
    title: 'Soporte Directo 24/7',
    description: 'Estamos para ayudarte por WhatsApp cuando lo necesites.',
    icon: 'MessageCircle',
  },
  {
    title: 'Precios imbatibles Ecuador',
    description: 'La mejor calidad al mejor precio, garantizado.',
    icon: 'DollarSign'
  }
];

export const platforms = [
  { name: 'Netflix', image: getImage('logo-netflix') },
  { name: 'Disney+', image: getImage('logo-disney-plus') },
  { name: 'HBO Max', image: getImage('logo-hbo-max') },
  { name: 'Prime Video', image: getImage('logo-prime-video') },
  { name: 'Apple TV+', image: getImage('logo-apple-tv') },
  { name: 'Crunchyroll', image: getImage('logo-crunchyroll') },
  { name: 'Vix', image: getImage('logo-vix') },
  { name: 'YouTube Premium', image: getImage('logo-youtube-premium') },
  { name: 'Spotify', image: getImage('logo-spotify') },
  { name: 'Paramount+', image: getImage('logo-paramount-plus') },
];

export const streamingPlans = [
  {
    name: 'Netflix Premium',
    logoId: 'logo-netflix',
    emoji: '❤️',
    description: 'El rey del binge-watching: series adictivas, películas blockbuster y originales que todos hablan.',
    prices: [
      { plan: 'Premium (4K + 4 pantallas)', price: '$3.99' },
      { plan: 'Cuenta completa 5 días (full acceso)', price: '$12.99' },
    ],
    glowColor: 'red'
  },
  {
    name: 'Disney+ Premium',
    logoId: 'logo-disney-plus',
    emoji: '💙',
    description: 'El universo mágico completo: Disney, Pixar, Marvel, Star Wars, Star y ESPN con deportes en vivo.',
    prices: [
      { plan: 'Premium (incluye todo)', price: '$4.75' },
    ],
    glowColor: 'blue'
  },
    {
    name: 'Disney+ Estándar',
    logoId: 'logo-disney-plus',
    emoji: '💙',
    description: 'Disney y Star puro: clásicos animados, series adultas y contenido exclusivo sin ESPN.',
    prices: [
      { plan: 'Estándar', price: '$3.00' },
    ],
    glowColor: 'blue'
  },
  {
    name: 'HBO Max',
    logoId: 'logo-hbo-max',
    emoji: '💜',
    description: 'Estrenos épicos y series que marcan tendencia: The Last of Us, House of the Dragon, DC y más.',
    prices: [
        { plan: 'Básico', price: '$2.50' },
        { plan: 'Cuenta completa', price: '$5.50' },
    ],
    glowColor: 'blue'
  },
  {
    name: 'Apple TV+',
    logoId: 'logo-apple-tv',
    emoji: '🖤',
    description: 'Calidad cinematográfica: originales Apple como Ted Lasso, Severance y películas premiadas.',
    prices: [{ plan: '3 meses acceso total', price: '$7.99' }],
    glowColor: 'blue'
  },
  {
    name: 'Prime Video',
    logoId: 'logo-prime-video',
    emoji: '💙',
    description: 'Amazon ilimitado: series top, películas recientes y fútbol.',
    prices: [
      { plan: 'Básico', price: '$2.50' },
      { plan: 'Cuenta completa', price: '$5.99' },
    ],
    glowColor: 'blue'
  },
  {
    name: 'Crunchyroll',
    logoId: 'logo-crunchyroll',
    emoji: '🧡',
    description: 'Anime sin cortes ni anuncios: simulcasts, dubs y catálogo masivo para otakus exigentes.',
    prices: [
      { plan: 'Mega Fan', price: '$2.99' },
      { plan: 'Cuenta completa', price: '$5.50' },
    ],
    glowColor: 'blue'
  },
  {
    name: 'VIX Premium',
    logoId: 'logo-vix',
    emoji: '🧡',
    description: 'TelevisaUnivision full: novelas latinas, deportes y contenido regional premium.',
    prices: [
      { plan: 'Premium', price: '$2.99' },
      { plan: 'Cuenta completa', price: '$5.50' },
    ],
    glowColor: 'blue'
  },
  {
    name: 'YouTube Premium',
    logoId: 'logo-youtube-premium',
    emoji: '❤️',
    description: 'YouTube sin interrupciones: música, videos 4K, descargas offline y background play.',
    prices: [{ plan: 'Premium', price: '$3.50' }],
    glowColor: 'red'
  },
  {
    name: 'Spotify Premium',
    logoId: 'logo-spotify',
    emoji: '💚',
    description: 'Tu playlist personal sin límites: offline, sin ads, alta calidad y playlists exclusivas.',
    prices: [{ plan: 'Premium', price: '$3.50' }],
    glowColor: 'blue'
  },
  {
    name: 'Paramount+',
    logoId: 'logo-paramount-plus',
    emoji: '💙',
    description: 'CBS, Nickelodeon, Showtime y películas Paramount: Yellowstone, Star Trek y más.',
    prices: [
      { plan: 'Básico', price: '$2.99' },
      { plan: 'Cuenta completa', price: '$5.50' },
    ],
    glowColor: 'blue'
  },
];

export const liveTvPlans = [
    { name: 'ECDF', description: 'Siente el pulso de La Tri y la LigaPro como si estuvieras en el estadio. Goles en directo, análisis expertos.', prices: [{plan: '1 dispositivo', price: '$5.00'}, {plan: 'Cuenta completa', price: '$8.99'}], logoId: 'logo-ecdf' },
    { name: 'IPTV Smarters Pro', description: 'TV en vivo global + VOD: canales premium, deportes y series en HD.', prices: [{plan: 'Cuenta completa 3 días', price: '$7.99'}], logoId: 'logo-iptv' },
    { name: 'Flujo TV', description: 'Canales ecuatorianos y latinos en vivo: deportes, noticias y entretenimiento local.', prices: [{plan: 'Básico', price: '$3.50'}, {plan: 'Cuenta completa 3 días', price: '$7.99'}], logoId: 'logo-flujo-tv' },
    { name: 'Tele Latino', description: 'Canales latinos completos: novelas, deportes y TV abierta en tu móvil/TV.', prices: [{plan: 'Cuenta completa', price: '$6.99'}], logoId: 'logo-tele-latino' },
]

export const gameRecharges = [
  {
    name: 'Recargas Free Fire',
    emoji: '💚',
    logoId: 'logo-free-fire',
    description: 'Sube de rango sin esperar: diamantes cargados en segundos para skins legendarias y pases elite.',
    prices: [
      { plan: 'Recargas rápidas desde cualquier monto', price: '$1.00+' },
      { plan: 'Activación inmediata 24/7', price: '' },
    ],
    glowColor: 'green'
  }
];

export const paymentMethods = [
  { name: 'Banco Guayaquil', image: getImage('logo-banco-guayaquil') },
  { name: 'Banco Pichincha', image: getImage('logo-banco-pichincha') },
];
