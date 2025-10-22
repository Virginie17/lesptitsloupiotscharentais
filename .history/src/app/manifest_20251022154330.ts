export default function manifest() {
  return {
    name: 'Les Ptits Loupiots Charentais',
    short_name: 'Ptits Loupiots',
    description: 'Service de garde d\'enfants à domicile à La Rochelle',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF8F3',
    theme_color: '#FADADD',
    icons: [
      {
        src: '/logo.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
