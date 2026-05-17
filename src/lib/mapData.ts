export interface MapPoint {
  id: string;
  nombre: string;
  personaje: 'Cargueros' | 'Sahumadoras' | 'Hacedores' | 'Matronas' | 'Mayordomos';
  descripcion: string;
  audio: string;
  color: string;
  lat: number;
  lng: number;
  svgX?: number;
  svgY?: number;
}

export const PUNTOS_MAPA: MapPoint[] = [
  {
    id: 'catedral',
    nombre: 'Catedral de Santa Fe',
    personaje: 'Matronas',
    descripcion: 'Las matronas cuidaron los altares de esta catedral durante generaciones. Aquí, la devoción no era un acto, era una forma de estar.',
    audio: '/audio/catedral.mp3',
    color: 'var(--color-crimson)',
    lat: 6.55455,
    lng: -75.82484,
    svgX: 40,
    svgY: 35,
  },
  {
    id: 'plaza-mayor',
    nombre: 'Plaza Mayor',
    personaje: 'Cargueros',
    descripcion: 'El peso de lo sagrado comenzaba aquí. Los cargueros partían desde esta plaza llevando sobre los hombros lo que otros solo podían mirar.',
    audio: '/audio/plaza.mp3',
    color: 'var(--color-gold)',
    lat: 6.55421,
    lng: -75.82396,
    svgX: 60,
    svgY: 50,
  },
  {
    id: 'convento',
    nombre: 'Convento de San Juan de Dios',
    personaje: 'Sahumadoras',
    descripcion: 'El humo del sahumerio llenaba estos corredores. Las sahumadoras marcaban el tiempo con su vaivén, entre rezos y pasos de piedra.',
    audio: '/audio/convento.mp3',
    color: 'var(--color-sky)',
    lat: 6.55502,
    lng: -75.82550,
    svgX: 30,
    svgY: 65,
  },
  {
    id: 'capilla',
    nombre: 'Capilla de la Chiquinquirá',
    personaje: 'Hacedores',
    descripcion: 'Los hacedores pintaron y tallaron los santos que esta capilla albergó. Estaban en medio del trabajo cuando la procesión llegó. Sonrieron. Siguieron.',
    audio: '/audio/capilla.mp3',
    color: 'var(--color-peach)',
    lat: 6.55380,
    lng: -75.82320,
    svgX: 75,
    svgY: 25,
  },
  {
    id: 'mercado',
    nombre: 'Mercado Municipal',
    personaje: 'Mayordomos',
    descripcion: 'Los mayordomos administraban el orden de este mercado. Su presencia era silenciosa pero definitiva. Siempre observando. Siempre ahí.',
    audio: '/audio/mercado.mp3',
    color: 'var(--color-crimson)',
    lat: 6.55310,
    lng: -75.82440,
    svgX: 50,
    svgY: 80,
  },
];
