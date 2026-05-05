/* ═══════════════════════════════
   AccioPet — data.js
   Data embebida como variable global.
   Funciona abriendo index.html directamente sin servidor.
   Para producción: reemplazar por fetch a una API/CMS.
═══════════════════════════════ */
var ACCIOPET_DATA = 
{
  "site": {
    "name": "AccioPet",
    "tagline": "El mundo mágico de las mascotas",
    "email": "hola@acciopet.com.ar",
    "cafecito": "https://cafecito.app/acciopet"
  },

  "stories": [
    { "id": "s1", "emoji": "🐕", "tag": "🐶 Perros",    "title": "Las razas más adoptadas en Argentina en 2025",         "slug": "razas-adoptadas-argentina-2025" },
    { "id": "s2", "emoji": "🐱", "tag": "🐱 Gatos",     "title": "El ronroneo como terapia: qué dice la ciencia",        "slug": "ronroneo-terapia-ciencia" },
    { "id": "s3", "emoji": "🍗", "tag": "🍖 Receta",    "title": "Caldo de huesos antiinflamatorio para perros",         "slug": "caldo-huesos-antiinflamatorio" },
    { "id": "s4", "emoji": "💉", "tag": "💊 Salud",     "title": "Calendario de vacunas 2025: lo que tenés que saber",   "slug": "calendario-vacunas-2025" },
    { "id": "s5", "emoji": "🚌", "tag": "💡 Tip",       "title": "Cómo viajar en transporte público con tu mascota",     "slug": "viajar-transporte-publico-mascota" },
    { "id": "s6", "emoji": "🐇", "tag": "🐾 Otros",     "title": "Conejos como mascotas: guía completa para principiantes", "slug": "conejos-mascotas-guia" },
    { "id": "s7", "emoji": "🌿", "tag": "🌿 Natural",   "title": "Plantas tóxicas para gatos que tenés en tu casa",      "slug": "plantas-toxicas-gatos" }
  ],

  "noticias": [
    {
      "id": "n1", "tipo": "noticia", "cat": "perro", "catLabel": "Perros",
      "emoji": "🐕", "tiempo": "hace 2 horas", "lectura": "3 min",
      "titulo": "Nueva ley protege a los perros callejeros en Buenos Aires",
      "desc": "El Concejo Deliberante aprobó el proyecto que prohíbe la eutanasia en perreras municipales y obliga a la castración.",
      "slug": "ley-perros-callejeros-bsas"
    },
    {
      "id": "ad1", "tipo": "ad",
      "emoji": "🏥",
      "titulo": "VetSaludable — Turnos online al instante",
      "desc": "Más de 50 veterinarios disponibles. Primera consulta 30% OFF para nuevos pacientes.",
      "cta": "Sacar turno →", "ctaUrl": "#"
    },
    {
      "id": "n2", "tipo": "noticia", "cat": "gato", "catLabel": "Gatos",
      "emoji": "🐱", "tiempo": "ayer", "lectura": "2 min",
      "titulo": "Estudio revela que los gatos entienden su nombre pero lo ignoran a propósito",
      "desc": "Investigadores japoneses confirman lo que todos sospechábamos: tu gato sabe que lo llamás.",
      "slug": "gatos-nombre-ignoran"
    },
    {
      "id": "n3", "tipo": "noticia", "cat": "otro", "catLabel": "Aves",
      "emoji": "🦜", "tiempo": "hace 3 días", "lectura": "4 min",
      "titulo": "Loros y cotorras: cómo estimularlos mentalmente en departamento",
      "desc": "Guía práctica para enriquecer el ambiente de aves en espacios pequeños sin inversión.",
      "slug": "loros-estimulacion-mental"
    },
    {
      "id": "ad2", "tipo": "ad",
      "emoji": "🛒",
      "titulo": "PetShop Los Amigos — 20% off en alimento natural",
      "desc": "Marcas premium sin conservantes. Envío gratis a todo el país en compras +$8.000.",
      "cta": "Ver ofertas →", "ctaUrl": "#"
    },
    {
      "id": "n4", "tipo": "noticia", "cat": "salud", "catLabel": "Salud",
      "emoji": "💊", "tiempo": "hace 4 días", "lectura": "6 min",
      "titulo": "Leishmaniasis: todo lo que tenés que saber antes del verano",
      "desc": "La enfermedad avanza hacia el sur del país. Prevención, síntomas y tratamientos actualizados.",
      "slug": "leishmaniasis-verano-prevencion"
    },
    {
      "id": "n5", "tipo": "noticia", "cat": "nutri", "catLabel": "Nutrición",
      "emoji": "🥩", "tiempo": "hace 5 días", "lectura": "5 min",
      "titulo": "BARF vs. cocido: cuál es mejor para tu perro según los veterinarios",
      "desc": "Comparamos los dos enfoques más populares de alimentación natural con evidencia científica.",
      "slug": "barf-vs-cocido-comparativa"
    }
  ],

  "lanzamientos": [
    { "id": "l1", "emoji": "🦮", "badge": "NUEVO",  "titulo": "Arnés ergonómico sin tirones NoPull Pro", "tienda": "PetShop Los Amigos", "precio": 10990, "precioOld": 14990, "slug": "arnes-nopull-pro" },
    { "id": "l2", "emoji": "🐱", "badge": "HOT",    "titulo": "Fuente de agua para gatos con filtro activo", "tienda": "MiMascotaFeliz",     "precio": 6200,  "precioOld": 8500,  "slug": "fuente-agua-gatos" },
    { "id": "l3", "emoji": "🍖", "badge": "NUEVA",  "titulo": "Snacks naturales freeze-dried de carne vacuna", "tienda": "NaturalPet",       "precio": 4990,  "precioOld": null,  "slug": "snacks-freeze-dried" },
    { "id": "l4", "emoji": "🧴", "badge": "PROMO",  "titulo": "Shampoo hipoalergénico para pieles sensibles", "tienda": "VetNatural",       "precio": 4990,  "precioOld": 6800,  "slug": "shampoo-hipoalergenico" },
    { "id": "l5", "emoji": "🏠", "badge": "NUEVO",  "titulo": "Casita térmica para exteriores con aislación", "tienda": "PetCozy",          "precio": 18500, "precioOld": null,  "slug": "casita-termica-exterior" },
    { "id": "l6", "emoji": "🐠", "badge": "OFERTA", "titulo": "Filtro silencioso para acuarios hasta 80L",   "tienda": "AquaPet",           "precio": 6800,  "precioOld": 9200,  "slug": "filtro-acuario-80l" }
  ],

  "tips_senior": [
    { "id": "ts1", "emoji": "🦴", "cat": "Tip Senior", "titulo": "Articulaciones: cómo aliviar el dolor con masajes simples", "desc": "Técnicas que podés aplicar en casa para mejorar la movilidad de tu perro mayor.", "target": "🐕 Perros +8 años", "slug": "masajes-articulaciones-perros" },
    { "id": "ts2", "emoji": "💊", "cat": "Tip Senior", "titulo": "Suplementos naturales para gatos viejos: cuáles funcionan", "desc": "Omega 3, colágeno y CBD: qué dice la evidencia y cuándo empezar.", "target": "🐱 Gatos +10 años", "slug": "suplementos-gatos-viejos" },
    { "id": "ts3", "emoji": "🍚", "cat": "Nutrición",  "titulo": "Alimentos que no le podés dar a un perro mayor",          "desc": "El metabolismo cambia con la edad. Ajustá la dieta para evitar problemas renales.", "target": "🐕 Perros senior", "slug": "alimentos-prohibidos-perros-mayores" },
    { "id": "ts4", "emoji": "😴", "cat": "Bienestar",  "titulo": "Cómo saber si tu mascota tiene demencia senil",            "desc": "Señales de alerta y cómo acompañar el proceso con amor y paciencia.", "target": "🐕🐱 Todos", "slug": "demencia-senil-mascotas" },
    { "id": "ts5", "emoji": "🏃", "cat": "Actividad",  "titulo": "Ejercicio suave para mascotas con artritis",               "desc": "Caminatas cortas, hidroterapia y juegos de olfato para mantenerlos activos sin dolor.", "target": "🐕 Perros +7 años", "slug": "ejercicio-artritis-mascotas" }
  ],

  "tips_transporte": [
    { "id": "tt1", "emoji": "🚇", "cat": "Subte",    "catColor": "#2471A3", "titulo": "Todo lo que necesitás saber para subir al subte de CABA con tu mascota",   "desc": "Requisitos, horarios, líneas permitidas y cómo preparar a tu perro.", "target": "🐕 Perros pequeños", "slug": "subte-caba-mascotas" },
    { "id": "tt2", "emoji": "🚌", "cat": "Colectivo","catColor": "#E67E22", "titulo": "¿Se puede subir al colectivo con mascotas? Qué dice la ley",               "desc": "La normativa varía por jurisdicción. Municipios que lo permiten y condiciones.", "target": "🐕🐱 Todos", "slug": "colectivo-mascotas-ley" },
    { "id": "tt3", "emoji": "🚆", "cat": "Tren",     "catColor": "#1A5276", "titulo": "Viajar en tren con tu mascota: Mitre, Sarmiento y Roca actualizados",       "desc": "Ramal por ramal, lo que permiten y cómo documentar a tu mascota.", "target": "🐕 Perros con transporte", "slug": "tren-mascotas-argentina" },
    { "id": "tt4", "emoji": "✈️", "cat": "Avión",    "catColor": "#8E44AD", "titulo": "Cómo viajar en avión con tu mascota dentro de Argentina",                   "desc": "Aerolíneas y JetSmart: cabina vs bodega, documentación y tips.", "target": "🐕🐱 Todos", "slug": "avion-mascotas-argentina" },
    { "id": "tt5", "emoji": "🎒", "cat": "Equipamiento", "catColor": "#3A7D44", "titulo": "Bolsos y mochilas transportadoras: cuál elegir según tu mascota",        "desc": "Comparativa de los mejores transportines del mercado argentino.", "target": "🐕🐱 Hasta 8kg", "slug": "transportines-mascotas-guia" }
  ],

  "articulos_perros": [
    { "id": "dp1", "cat": "nutri",  "catLabel": "Nutrición",   "emoji": "🦴", "lectura": "8 min", "titulo": "La guía definitiva de alimentación natural para perros",   "desc": "BARF, cocido, mixto: ventajas, riesgos y cómo hacer la transición.", "slug": "guia-alimentacion-natural-perros" },
    { "id": "dp2", "cat": "perro", "catLabel": "Razas",        "emoji": "🐶", "lectura": "5 min", "titulo": "Las 10 razas más adaptadas a vivir en departamento",          "desc": "Tamaño, energía y temperamento: la guía para elegir con cabeza.", "slug": "razas-departamento" },
    { "id": "dp3", "cat": "perro", "catLabel": "Actividad",    "emoji": "🎾", "lectura": "3 min", "titulo": "Juegos de olfato para días de lluvia: 8 ideas fáciles",        "desc": "El olfato cansa tanto como una caminata.", "slug": "juegos-olfato-lluvia" },
    { "id": "dp4", "cat": "salud", "catLabel": "Salud",        "emoji": "😰", "lectura": "6 min", "titulo": "Ansiedad por separación: causas, señales y tratamiento",        "desc": "Por qué ocurre, cómo detectarla a tiempo y qué funciona de verdad.", "slug": "ansiedad-separacion-perros" },
    { "id": "dp5", "cat": "tip",   "catLabel": "Cuidado",      "emoji": "🛁", "lectura": "4 min", "titulo": "¿Cada cuánto bañar a tu perro? Depende de la raza",             "desc": "Guía por tipo de pelaje: corto, largo, rizado, con capa doble y sin pelo.", "slug": "frecuencia-bano-perros" }
  ],

  "articulos_gatos": [
    { "id": "dg1", "cat": "gato",  "catLabel": "Comportamiento","emoji": "😸", "lectura": "3 min", "titulo": "¿Por qué tu gato te trae presas? Lo que realmente significa",  "desc": "No es agresividad: es un regalo. Entendé la psicología del instinto cazador.", "slug": "gato-trae-presas-significado" },
    { "id": "dg2", "cat": "nutri", "catLabel": "Nutrición",      "emoji": "🐟", "lectura": "4 min", "titulo": "¿Cuánto pescado es demasiado para un gato?",                    "desc": "El atún tiene beneficios pero también riesgos si se da en exceso.", "slug": "pescado-gatos-cuanto" },
    { "id": "dg3", "cat": "gato",  "catLabel": "Enriquecimiento","emoji": "🧶", "lectura": "5 min", "titulo": "Cómo crear un circuito de enriquecimiento sin gastar nada",     "desc": "Cajas, rollos de papel y telas: desafíos para tu gato sin costo.", "slug": "enriquecimiento-gatos-gratis" },
    { "id": "dg4", "cat": "salud", "catLabel": "Salud",          "emoji": "💉", "lectura": "7 min", "titulo": "Síntomas de enfermedad renal en gatos: detectarlos a tiempo",   "desc": "La ERC es la principal causa de muerte en gatos adultos.", "slug": "enfermedad-renal-gatos" },
    { "id": "dg5", "cat": "gato",  "catLabel": "Razas",          "emoji": "😻", "lectura": "5 min", "titulo": "Maine Coon vs Ragdoll: ¿cuál es para vos?",                     "desc": "Comparativa de carácter, cuidado, salud y precio.", "slug": "maine-coon-vs-ragdoll" }
  ],

  "articulos_otros": [
    { "id": "do1", "cat": "otro", "catLabel": "Conejos",  "emoji": "🐇", "lectura": "5 min", "titulo": "Lo que nunca te contaron sobre tener un conejo de mascota",   "desc": "Duración de vida, necesidades de espacio y dieta.", "slug": "conejos-mascota-verdad" },
    { "id": "do2", "cat": "otro", "catLabel": "Peces",    "emoji": "🐠", "lectura": "4 min", "titulo": "Acuario para principiantes: los 5 errores más comunes",         "desc": "Cómo evitar el fracaso en la primera semana.", "slug": "acuario-principiantes-errores" },
    { "id": "do3", "cat": "otro", "catLabel": "Aves",     "emoji": "🦜", "lectura": "3 min", "titulo": "Cómo enseñarle a hablar a tu loro: método paso a paso",          "desc": "Edad ideal, técnicas y la importancia de la paciencia.", "slug": "loro-hablar-metodo" },
    { "id": "do4", "cat": "otro", "catLabel": "Reptiles", "emoji": "🐢", "lectura": "6 min", "titulo": "Tortuga de tierra: guía completa de cuidados básicos",           "desc": "Alimentación, temperatura, hibernación. Con suerte viven 80 años.", "slug": "tortuga-tierra-cuidados" }
  ],

  "otros_tipos": [
    { "id": "ot1",  "emoji": "🐇", "label": "Conejos",   "slug": "conejos" },
    { "id": "ot2",  "emoji": "🐹", "label": "Hamsters",  "slug": "hamsters" },
    { "id": "ot3",  "emoji": "🐭", "label": "Ratones",   "slug": "ratones" },
    { "id": "ot4",  "emoji": "🐾", "label": "Cobayos",   "slug": "cobayos" },
    { "id": "ot5",  "emoji": "🦜", "label": "Loros",     "slug": "loros" },
    { "id": "ot6",  "emoji": "🐦", "label": "Canarios",  "slug": "canarios" },
    { "id": "ot7",  "emoji": "🦅", "label": "Cotorras",  "slug": "cotorras" },
    { "id": "ot8",  "emoji": "🐠", "label": "Peces",     "slug": "peces" },
    { "id": "ot9",  "emoji": "🦎", "label": "Lagartos",  "slug": "lagartos" },
    { "id": "ot10", "emoji": "🐍", "label": "Serpientes","slug": "serpientes" },
    { "id": "ot11", "emoji": "🐢", "label": "Tortugas",  "slug": "tortugas" },
    { "id": "ot12", "emoji": "🦔", "label": "Erizos",    "slug": "erizos" },
    { "id": "ot13", "emoji": "🐿️", "label": "Ardillas",  "slug": "ardillas" },
    { "id": "ot14", "emoji": "🐸", "label": "Ranas",     "slug": "ranas" },
    { "id": "ot15", "emoji": "🦋", "label": "Insectos",  "slug": "insectos" }
  ],

  "sponsors": [
    { "id": "sp1", "emoji": "🏥", "nombre": "VetSaludable",       "url": "#" },
    { "id": "sp2", "emoji": "🛒", "nombre": "PetShop Los Amigos", "url": "#" },
    { "id": "sp3", "emoji": "🌿", "nombre": "NaturalPet",         "url": "#" },
    { "id": "sp4", "emoji": "🐾", "nombre": "MiMascotaFeliz",     "url": "#" },
    { "id": "sp5", "emoji": "💊", "nombre": "VetNatural",         "url": "#" },
    { "id": "sp6", "emoji": "🛋️", "nombre": "PetCozy",            "url": "#" },
    { "id": "sp7", "emoji": "🐠", "nombre": "AquaPet",            "url": "#" }
  ],

  "vacunas": {
    "perro": [
      { "nombre": "Séxtuple/Óctuple — 1ª dosis", "edadMeses": 6,  "desc": "Distemper, Parvovirus, Hepatitis, Parainfluenza, Leptospirosis" },
      { "nombre": "Séxtuple/Óctuple — 2ª dosis", "edadMeses": 9,  "desc": "Refuerzo de la primera dosis" },
      { "nombre": "Séxtuple/Óctuple — 3ª dosis", "edadMeses": 12, "desc": "Refuerzo final del ciclo inicial" },
      { "nombre": "Antirrábica",                  "edadMeses": 12, "desc": "Obligatoria por ley en todo el país" },
      { "nombre": "Refuerzo anual",               "edadMeses": 24, "desc": "Mantiene la inmunidad activa" },
      { "nombre": "Rabia (refuerzo)",             "edadMeses": 24, "desc": "Refuerzo anual obligatorio" }
    ],
    "gato": [
      { "nombre": "Triple felina — 1ª dosis", "edadMeses": 6,  "desc": "Rinotraqueitis, Calicivirus, Panleucopenia" },
      { "nombre": "Triple felina — 2ª dosis", "edadMeses": 9,  "desc": "Refuerzo de la primera dosis" },
      { "nombre": "Triple felina — 3ª dosis", "edadMeses": 12, "desc": "Ciclo inicial completo" },
      { "nombre": "Leucemia felina",          "edadMeses": 10, "desc": "Recomendada para gatos con acceso al exterior" },
      { "nombre": "Antirrábica felina",       "edadMeses": 12, "desc": "Recomendada especialmente en zonas de riesgo" },
      { "nombre": "Refuerzo anual",           "edadMeses": 24, "desc": "Mantenimiento del sistema inmune" }
    ]
  }
}
;
