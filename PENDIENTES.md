# Pendientes del rediseño Nevera

Lista de huecos rellenados con un valor provisional mientras llega la información real.
En el código cada uno lleva un comentario `PENDIENTE` (búscalo con `grep -rn PENDIENTE src/nevera`).
Los textos están en `src/nevera/locales/es.js`, `en.js` y `pl.js`: hay que cambiar los tres.

## Falta información de la dueña

| # | Qué falta | Qué puse por ahora | Dónde |
|---|-----------|--------------------|-------|
| 1 | URL de la página de Facebook | `#` (el enlace no lleva a ningún sitio) | `src/nevera/ui.jsx:5` (`FACEBOOK`). Se usa en "Ver todas en Facebook" y en el pie de página |
| 2 | Canal de inscripción a los talleres | "Inscripción por WhatsApp" (antes decía Messenger) | `locales/*.js:255`, `classes.workshops.notes[2]` |
| 3 | ¿El test de inglés es solo para hablantes de polaco? | Se mantiene el punto "Para hablantes de polaco" | `locales/*.js:326`, `test.en.items[3]` |
| 4 | Público de las clases de polaco: ¿Polonia o Reino Unido? | Texto original: "Para quienes viven en Polonia o planean quedarse" | `locales/*.js:201`, `classes.sections.pl.paras[0]` |
| 5 | Final de la historia de Agata (el texto original estaba cortado) | Carta 4 "Hoy" con el texto que había | `locales/*.js:276`, `about.story.items[3]` |
| 6 | Portadas (poster) y subtítulos de los 3 videos | Sin portada (en iPhone se ve negro hasta darle a reproducir) y sin subtítulos | `src/nevera/pages/Home.jsx:143` |

## Confirmado

- Son **5 idiomas**: inglés, español, italiano, polaco e indonesio.
- Las clases se dan en la plataforma **lingolandias.com** (añadido al texto del pie de página).

## Decisiones de producto para la dueña

- **Resultado de los tests:** al terminar, el test no muestra la nota en pantalla, solo la envía por email (igual que antes). ¿Queremos enseñarla también en pantalla?
- **Contacto:** la tarjeta de Messenger se quitó de la página de contacto (quedan WhatsApp, Instagram y la plataforma). Sus textos siguen en `src/i18n.js` sin usarse.
- **Formulario de contacto:** el ejemplo del campo teléfono muestra el número de la escuela (`+44 7578 146264`). Mejor un número de ejemplo genérico.

## A revisar por alguien que hable el idioma

- La historia de Agata en polaco y en inglés es una traducción nueva, porque no existía en esos idiomas. La dueña debería leerla.
- En polaco, "CEFR" se explica como "europejski system opisu kształcenia językowego". La web antigua usaba "ESOKJ".

## Cosas que quedan fuera de este cambio

- Los tests de inglés y español siguen con su contenido original: el de inglés está pensado para hablantes de polaco y el de español está escrito en español, sea cual sea el idioma de la web.

- `/team`, `/enteachers` y `/esteachers` redirigen a `/about`, y `/workshops` a `/courses#workshops`. `/collaboration` sigue con el diseño antiguo (no está enlazada en ningún menú).
