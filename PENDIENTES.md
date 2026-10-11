# Pendientes del rediseño Nevera

Lista de huecos rellenados con un valor provisional mientras llega la información real.
En el código cada uno lleva un comentario `PENDIENTE` (búscalo con `grep -rn PENDIENTE src/nevera`).
Los textos están en `src/nevera/locales/es.js`, `en.js` y `pl.js`: hay que cambiar los tres.

## Falta información de la dueña

| # | Qué falta | Qué puse por ahora | Dónde |
|---|-----------|--------------------|-------|
| 2 | Canal de inscripción a los talleres | Se muestra Messenger, como en producción, con el botón principal por WhatsApp | `locales/*.js:255`, `classes.workshops.notes[2]` |
| 3 | ¿El test de inglés es solo para hablantes de polaco? | Se mantiene el punto "Para hablantes de polaco" | `locales/*.js:326`, `test.en.items[3]` |
| 4 | Público de las clases de polaco: ¿Polonia o Reino Unido? | Texto original: "Para quienes viven en Polonia o planean quedarse" | `locales/*.js:201`, `classes.sections.pl.paras[0]` |
| 5 | Final de la historia de Agata (el texto original estaba cortado) | Carta 4 "Hoy" con el texto que había | `locales/*.js:276`, `about.story.items[3]` |
| 6 | Portadas (poster) y subtítulos de los 3 videos | Sin portada (en iPhone se ve negro hasta darle a reproducir) y sin subtítulos | `src/nevera/pages/Home.jsx:143` |

## Confirmado

- Son **5 idiomas**: inglés, español, italiano, polaco e indonesio.
- Las clases se dan en la plataforma **lingolandias.com** (añadido al texto del pie de página).

## Textos de producción: qué se dejó fuera y por qué

Todas las frases que mostraba lingolandias.net están en la web nueva, con su texto original en PL/EN/ES.
Se comprobó con un script de cobertura frase a frase. Solo quedan fuera:

- **Profesores con nombre, foto o biografía**: decisión de la dueña (no hay sección de profesores).
- **"6 idiomas"**: son 5.
- **"Más de 1000 estudiantes"** (subtítulo de los vídeos): contradice el "300+" del resto de la web. Hay que confirmar la cifra.
- **"Resultado inmediato" y "¡TEST OFICIAL!"**: el resultado llega por email y el test no es oficial.
- **Etiquetas decorativas**: "TESTIMONIO VERIFICADO", "Historias de éxito", "Todas las reseñas", filtros "Más recientes/Más gustadas", la franja "🇬🇧 TEST DE INGLÉS · 🇪🇸 EXAMEN…" y similares.
- **Polaco: historia de Agata**: el `src/i18n.js` local ya tenía un texto nuevo (equipo en vez de Agata), que sustituye al de producción. Revisar que es la versión buena.

## Textos de producción que conviene revisar

- **Clases de español e italiano**: dicen "no en polaco", "cero polaco" y "mejor que tercer idioma a través del español". Tienen sentido para alumnos polacos, pero en la versión española suenan raros.
- **Polaco**: `genInfoPara4` y la cita del equipo son la misma frase, así que se ve dos veces en Nosotros.
- **Enlaces legales**: producción enlazaba a /privacy, /terms y /cookies, pero esas páginas no existían. Como el formulario de contacto y el newsletter recogen datos, hace falta una política de privacidad.
- **Horario**: un texto antiguo sin usar decía "Lun - Vie, 9:00 - 18:00", pero la web dice "7 días a la semana".

## Decisiones de producto para la dueña

- **Resultado de los tests:** al terminar, el test no muestra la nota en pantalla, solo la envía por email (igual que antes). ¿Queremos enseñarla también en pantalla?

## A revisar por alguien que hable el idioma

- La historia de Agata en polaco y en inglés es una traducción nueva, porque no existía en esos idiomas. La dueña debería leerla.
- En polaco, "CEFR" se explica como "europejski system opisu kształcenia językowego". La web antigua usaba "ESOKJ".

## Cosas que quedan fuera de este cambio

- Los tests de inglés y español siguen con su contenido original: el de inglés está pensado para hablantes de polaco y el de español está escrito en español, sea cual sea el idioma de la web.

- `/team`, `/enteachers` y `/esteachers` redirigen a `/about`, y `/workshops` a `/courses#workshops`. `/collaboration` sigue con el diseño antiguo (no está enlazada en ningún menú).
