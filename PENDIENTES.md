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

## A revisar por alguien que hable el idioma

- La historia de Agata en polaco y en inglés es una traducción nueva, porque no existía en esos idiomas. La dueña debería leerla.
- En polaco, "CEFR" se explica como "europejski system opisu kształcenia językowego". La web antigua usaba "ESOKJ".

## Cosas que quedan fuera de este cambio

- Las páginas antiguas (`/team`, `/enteachers`, `/esteachers`, `/contact`, `/workshops`, `/collaboration` y los quizzes `/english-quiz`, `/spanish-quiz`) siguen con el diseño espacial antiguo y su menú viejo. Los quizzes son los únicos enlazados desde el diseño nuevo, así que son los siguientes que habría que pasar a Nevera.
- `src/App.jsx`, `src/pages/Courses.jsx` y `src/pages/Test.jsx` ya no se usan en las rutas. No los he borrado.
- Los metadatos SEO de `index.html` (título, descripción, JSON-LD) solo hablan de inglés y español.
- La página de Clases repite mucho ("Lecciones 1:1", "Materiales personalizados"…). Se puede acortar con una nota común de "todas las clases incluyen".
