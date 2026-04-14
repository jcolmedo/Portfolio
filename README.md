# Portfolio - Juan Carlos Olmedo

Portfolio profesional construido con Astro y React.

## Información

- **Nombre**: Juan Carlos Olmedo
- **Perfil**: Líder de Operaciones IT, Analista de Datos y Desarrollador de Soluciones
- **Contacto**: jolmedo@outlook.com.ar

## Instalación

```bash
cd portfolio
npm install
```

## Desarrollo

```bash
npm run dev
```

El servidor de desarrollo estará disponible en http://localhost:4321

## Build

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## Preview

```bash
npm run preview
```

## Tech Stack

- Astro 4.x
- React 18
- CSS Variables
- Diseño responsive

## Deployment

### GitHub Pages
1. Configurar `astro.config.mjs` con el dominio de GitHub Pages
2. Hacer push al repositorio
3. Configurar GitHub Actions o usar `npm run build`

### Vercel
```bash
npx vercel
```

## Estructura

```
portfolio/
├── src/
│   ├── components/   # Componentes Astro
│   ├── layouts/      # Layout base
│   ├── pages/        # Páginas
│   └── styles/       # Estilos globales
├── public/           # Archivos públicos
└── package.json      # Dependencias
```