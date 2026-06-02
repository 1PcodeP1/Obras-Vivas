# 🎨 Obras Vivas — Luz, Memoria y Eternidad

> *"Lo que ves no es todo lo que existe."*

**Obras Vivas** es el sitio web de una instalación artística interactiva inspirada en Santa Fe de Antioquia (Colombia). La experiencia combina arte, tecnología e historia patrimonial para dar vida a personajes extraídos de pinturas tradicionales — cargueros, sahumadoras, hacedores, matronas y mayordomos — a través de animación, sonido y presencia.

El sitio funciona como vitrina digital del proyecto: explica el concepto, muestra las obras, presenta al equipo y ofrece un mapa interactivo sonoro de los lugares históricos del pueblo.

---

## ✨ Secciones del sitio

| Sección           | Descripción                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hero**     | Introducción animada con partículas flotantes y texto revelado letra por letra (Splitting.js + GSAP).                                                                               |
| **Concepto** | Explica la experiencia*Luz, Memoria y Eternidad*: una cabina donde el usuario atraviesa tres etapas de vida (Niñez, Adolescencia, Adultez).                                        |
| **Proceso**  | Cuatro pasos que describen cómo funciona la instalación interactiva, con animaciones de scroll (GSAP ScrollTrigger). Incluye un modal con video de YouTube del detrás de cámaras. |
| **Obras**    | Galería de los cinco personajes que habitan la obra, cada uno con su imagen, descripción y paisaje sonoro. Cards expandibles con modal animado.                                     |
| **Mapa**     | Mapa interactivo de Santa Fe de Antioquia con puntos de audio. Al hacer clic en un punto, se reproduce el audio del personaje asociado y se muestra un tooltip con su historia.       |
| **Equipo**   | Carrusel marquee infinito con fotos y roles de los seis integrantes del equipo multidisciplinario.                                                                                    |
| **Cierre**   | Call-to-action final con animaciones de parallax y partículas decorativas rotatorias.                                                                                                |
| **Footer**   | Pie de página con créditos del proyecto.                                                                                                                                            |

---

## 🛠️ Tecnologías utilizadas

### Framework & lenguaje

- **[Next.js 14](https://nextjs.org/)** — App Router, React Server Components
- **[React 18](https://react.dev/)** — Librería de UI
- **[TypeScript](https://www.typescriptlang.org/)** — Tipado estático

### Estilos

- **[Tailwind CSS 3.4](https://tailwindcss.com/)** — Utilidades CSS con configuración personalizada
- **CSS custom properties** — Sistema de diseño con variables para colores, tipografía, espaciado y transiciones
- **Tipografía fluida** — `clamp()` para tamaños responsivos sin media queries

### Animaciones & interactividad

- **[GSAP](https://gsap.com/)** — Animaciones de alto rendimiento (timelines, ScrollTrigger, parallax)
- **[Framer Motion](https://www.framer.com/motion/)** — Animaciones declarativas para modales, tooltips y transiciones de componentes React
- **[Splitting.js](https://splitting.js.org/)** — Separación de texto en caracteres individuales para animaciones letra por letra
- **[tsParticles](https://particles.js.org/)** — Sistema de partículas flotantes en el hero

### Scroll & UX

- **[Lenis](https://lenis.darkroom.engineering/)** — Smooth scroll con integración GSAP
- **[react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)** — Detección de visibilidad para animaciones de revelado

### Tipografía (Google Fonts)

- **[Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)** — Tipografía serif para títulos y elementos editoriales
- **[DM Sans](https://fonts.google.com/specimen/DM+Sans)** — Tipografía sans-serif para cuerpo de texto y UI

### Herramientas de desarrollo

- **ESLint** — Linting con configuración de Next.js
- **PostCSS** — Procesamiento de CSS para Tailwind

---

## 📁 Estructura del proyecto

```
obras-vivas-web/
├── public/
│   ├── audio/              # Archivos de audio para el mapa interactivo
│   └── images/             # Imágenes de obras, equipo y mapa
├── src/
│   ├── app/
│   │   ├── fonts/          # Fuentes locales
│   │   ├── globals.css     # Variables CSS, utilidades y estilos base
│   │   ├── layout.tsx      # Layout raíz (fuentes, metadata, LenisProvider)
│   │   └── page.tsx        # Página principal — compone todas las secciones
│   ├── components/
│   │   ├── layout/         # Nav, Footer
│   │   ├── providers/      # LenisProvider (smooth scroll)
│   │   ├── sections/       # Hero, Concepto, Proceso, Obras, Mapa, Equipo, Cierre
│   │   └── ui/             # Button, ObrasCard, MapaDots, RevealBlock, SectionLabel
│   ├── hooks/
│   │   └── useMapAudio.ts  # Hook para reproducción de audio del mapa
│   ├── lib/
│   │   ├── gsap.ts         # Registro de plugins GSAP (ScrollTrigger)
│   │   └── mapData.ts      # Datos de los puntos del mapa (coordenadas, personajes, audio)
│   └── types/              # Tipos TypeScript compartidos
├── tailwind.config.ts      # Configuración de Tailwind (colores, fuentes, breakpoints)
├── next.config.mjs         # Configuración de Next.js
├── tsconfig.json           # Configuración de TypeScript
└── package.json
```

---

## 🎨 Sistema de diseño

### Paleta de colores

| Token       | Hex         | Uso                          |
| ----------- | ----------- | ---------------------------- |
| `cream`   | `#FFFCF8` | Fondo dominante              |
| `ink`     | `#171717` | Texto base                   |
| `gold`    | `#F0BA60` | CTAs primarios, acentos      |
| `crimson` | `#801822` | Sección de cierre, énfasis |
| `sky`     | `#9ABDC8` | Acentos de datos             |
| `ember`   | `#EB9D6F` | Numeración, labels          |
| `peach`   | `#FEA176` | Links secundarios            |

### Breakpoints responsivos

| Token   | Tamaño | Contexto                  |
| ------- | ------- | ------------------------- |
| `sm`  | 480px   | Mobile landscape          |
| `md`  | 768px   | Tablet portrait           |
| `lg`  | 1024px  | Tablet landscape / laptop |
| `xl`  | 1280px  | Desktop                   |
| `2xl` | 1440px  | Wide desktop              |

---

## 🚀 Cómo ejecutar el proyecto

### Requisitos previos

- [Node.js](https://nodejs.org/) ≥ 18
- npm (incluido con Node.js)

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd obras-vivas

# Instalar dependencias
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de producción

```bash
npm run build
npm start
```

---

## 👥 Equipo

| Nombre                         | Rol                             |
| ------------------------------ | ------------------------------- |
| Jakeline Maria Avila Verbel    | Interactive Developer           |
| Jose Ignacio Trujillo Cano     | Head of Design                  |
| Sergio Nicolas Fonseca Niño   | Head of Development             |
| Juan Felipe Gamboa Restrepo    | Researcher & Narrative Designer |
| Luisa Fernanda García Gallego | Project Manager                 |
| Royman Stiveen Hoyos Vasquez   | Physical Systems Developer      |

---

## 📄 Licencia

Proyecto académico / artístico. Todos los derechos reservados.
