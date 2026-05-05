# AccioPet 🪄🐾
**El mundo mágico de las mascotas**

## Estructura del proyecto

```
acciopet/
├── index.html              ← Página principal (home)
├── css/
│   ├── main.css            ← Variables, nav, hero, botones, utilidades
│   ├── cards.css           ← Carruseles, cards, secciones especie, sponsors
│   └── forms.css           ← Vacunas, registro, modal, footer
├── js/
│   └── main.js             ← Todo el JS: render, carruseles, modal, vacunas
├── data/
│   └── content.json        ← TODA la data del sitio (noticias, tips, sponsors, etc.)
└── pages/
    └── articulo.html       ← Página de detalle de nota con ads intercalados
```

## Cómo agregar contenido

Todo el contenido está en `data/content.json`. Para agregar una noticia:

```json
{
  "id": "n99",
  "tipo": "noticia",
  "cat": "perro",
  "catLabel": "Perros",
  "emoji": "🐕",
  "tiempo": "hace 1 hora",
  "lectura": "4 min",
  "titulo": "Tu título acá",
  "desc": "Descripción corta para la card.",
  "slug": "tu-slug-unico"
}
```

Para agregar un **ad** intercalado en noticias:

```json
{
  "id": "ad99",
  "tipo": "ad",
  "emoji": "🏥",
  "titulo": "Nombre del sponsor",
  "desc": "Descripción del sponsor.",
  "cta": "Ver más →",
  "ctaUrl": "https://tusponsor.com"
}
```

## Secciones actuales

- **Home**: hero, stories (IG), noticias + ads, lanzamientos, tips senior, tips transporte, perros, gatos, otros
- **Calculadora de vacunas**: interactiva, perro/gato, por zona
- **Registro**: plan ads (gratis) vs cafecito ($500/mes)
- **articulo.html**: detalle de nota con 2-3 ads intercalados, compartir por WA/IG, artículos relacionados

## Páginas por hacer

- `pages/noticias.html`  — listado completo de noticias
- `pages/productos.html` — catálogo de lanzamientos
- `pages/tips.html`      — listado de tips por categoría
- `pages/categoria.html` — artículos por especie/tipo

## Stack

- HTML5 + CSS3 puro (sin frameworks)
- JS vanilla (sin dependencias)
- Google Fonts: Playfair Display + Nunito
- Data: JSON local (fácil de conectar a un CMS o API)

## Monetización

1. **Ads inline** en carruseles (cada 2-3 cards hay una card de sponsor)
2. **Ads inline** en artículos (2-3 banners dentro del cuerpo)
3. **Sponsors strip** en home
4. **Registro con publicidad** (gratis con ads)
5. **Cafecito** como alternativa sin ads (~$500/mes)

## Para conectar a backend

- Reemplazar `fetch('data/content.json')` por `fetch('https://tuapi.com/api/content')`
- El resto del código no cambia
- Ideal para conectar a Supabase, Directus, o cualquier headless CMS
