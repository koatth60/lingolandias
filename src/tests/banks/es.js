// Banco del test de nivel de español. Niveles según el MCER / PCIC; español peninsular neutro.
export default {
  lang: "es",
  voice: "es-ES",

  // ── Enrutamiento: 2 ítems por nivel ─────────────────────────────────────
  routing: [
    { id: "r-a1-1", level: "A1", skill: "grammar", type: "mcq", stem: "Mi hermana ___ enfermera en un hospital.", options: ["está", "es", "son", "tiene"], answer: 1 },
    { id: "r-a1-2", level: "A1", skill: "vocabulary", type: "mcq", stem: "Tengo hambre. Quiero ___.", options: ["dormir", "beber agua", "comer algo", "ducharme"], answer: 2 },
    { id: "r-a2-1", level: "A2", skill: "grammar", type: "mcq", stem: "Ayer ___ al cine con unos amigos.", options: ["voy", "iremos", "vamos a ir", "fuimos"], answer: 3 },
    { id: "r-a2-2", level: "A2", skill: "vocabulary", type: "mcq", stem: "Para pagar en el supermercado, hay que pasar por la ___.", options: ["caja", "receta", "estantería", "báscula"], answer: 0 },
    { id: "r-b1-1", level: "B1", skill: "grammar", type: "mcq", stem: "Espero que mañana ___ buen tiempo para la excursión.", options: ["hace", "hará", "haga", "hacía"], answer: 2 },
    { id: "r-b1-2", level: "B1", skill: "vocabulary", type: "mcq", stem: "María está ___: el bebé nacerá en marzo.", options: ["avergonzada", "embarazada", "constipada", "enfadada"], answer: 1 },
    { id: "r-b2-1", level: "B2", skill: "grammar", type: "mcq", stem: "Te llamaré en cuanto ___ a casa.", options: ["llegaré", "llego", "llegaría", "llegue"], answer: 3 },
    { id: "r-b2-2", level: "B2", skill: "vocabulary", type: "mcq", stem: "Hay que ___ las medidas necesarias para evitar otro accidente.", options: ["adoptar", "hacer", "poner", "dar"], answer: 0 },
    { id: "r-c1-1", level: "C1", skill: "grammar", type: "mcq", stem: "No me convencerás. Aunque me lo ___ mil veces, no voy a cambiar de opinión.", options: ["repites", "repetirás", "repitas", "repetías"], answer: 2 },
    { id: "r-c1-2", level: "C1", skill: "vocabulary", type: "mcq", stem: "El proyecto era viable; ___, la falta de financiación obligó a abandonarlo.", options: ["no obstante", "por consiguiente", "es decir", "así pues"], answer: 0 },
    { id: "r-c2-1", level: "C2", skill: "vocabulary", type: "mcq", stem: "Cuando le preguntaron por el dinero desaparecido, se hizo ___ y cambió de tema.", options: ["de rogar", "el sueco", "cargo", "a la idea"], answer: 1 },
    { id: "r-c2-2", level: "C2", skill: "grammar", type: "mcq", stem: "De ___ sabido, no habría venido.", options: ["habiéndolo", "lo haber", "haber", "haberlo"], answer: 3 },
  ],

  // ── Núcleo: gramática, vocabulario y huecos ─────────────────────────────
  core: [
    // A1
    { id: "c-a1-01", level: "A1", skill: "grammar", type: "mcq", stem: "Nosotros ___ de Polonia, pero vivimos en Madrid.", options: ["somos", "estamos", "son", "tenemos"], answer: 0 },
    { id: "c-a1-02", level: "A1", skill: "grammar", type: "mcq", stem: "El banco ___ al lado de la farmacia.", options: ["es", "está", "hay", "tiene"], answer: 1 },
    { id: "c-a1-03", level: "A1", skill: "grammar", type: "mcq", stem: "En mi calle ___ un supermercado muy grande.", options: ["está", "es", "hay", "tiene"], answer: 2 },
    { id: "c-a1-04", level: "A1", skill: "grammar", type: "mcq", stem: "¿Cuántos años ___ tu hijo?", options: ["es", "está", "hace", "tiene"], answer: 3 },
    { id: "c-a1-05", level: "A1", skill: "grammar", type: "mcq", stem: "___ problema de matemáticas es muy fácil.", options: ["La", "El", "Los", "Una"], answer: 1 },
    { id: "c-a1-06", level: "A1", skill: "vocabulary", type: "mcq", stem: "La madre de mi madre es mi ___.", options: ["abuela", "tía", "prima", "suegra"], answer: 0 },
    { id: "c-a1-07", level: "A1", skill: "vocabulary", type: "mcq", stem: "Preparo la comida en un restaurante. Soy ___.", options: ["camarera", "cocinera", "dependienta", "enfermera"], answer: 1 },
    { id: "c-a1-08", level: "A1", skill: "vocabulary", type: "mcq", stem: "Hace mucho frío. Me pongo el ___.", options: ["bañador", "pantalón corto", "abrigo", "vestido de verano"], answer: 2 },
    { id: "c-a1-09", level: "A1", skill: "grammar", type: "gap", prompt: "Escribe el verbo entre paréntesis en presente.", stem: "Mis padres ___ (vivir) en un pueblo cerca de Sevilla.", answers: ["viven"] },
    { id: "c-a1-10", level: "A1", skill: "grammar", type: "gap", prompt: "Escribe el verbo entre paréntesis en presente.", stem: "Yo ___ (hablar) español y un poco de francés.", answers: ["hablo"] },
    { id: "c-a1-11", level: "A1", skill: "grammar", type: "gap", prompt: "Escribe el artículo correcto (el, la, los, las).", stem: "Me lavo ___ manos antes de comer.", answers: ["las"] },

    // A2
    { id: "c-a2-01", level: "A2", skill: "grammar", type: "mcq", stem: "Cuando era niño, ___ todos los veranos a la playa.", options: ["fui", "iba", "voy", "he ido"], answer: 1 },
    { id: "c-a2-02", level: "A2", skill: "grammar", type: "mcq", stem: "El año pasado ___ a Italia por primera vez.", options: ["viajaba", "viajo", "viajé", "viajaría"], answer: 2 },
    { id: "c-a2-03", level: "A2", skill: "grammar", type: "mcq", stem: "Mi hermano mide 1,80 m y yo, 1,70 m. Él es ___ alto que yo.", options: ["más", "menos", "tan", "muy"], answer: 0 },
    { id: "c-a2-04", level: "A2", skill: "grammar", type: "mcq", stem: "—¿Has comprado el pan? —Sí, ___ he comprado esta mañana.", options: ["la", "le", "lo", "los"], answer: 2 },
    { id: "c-a2-05", level: "A2", skill: "grammar", type: "mcq", stem: "Mañana ___ a visitar a mis abuelos.", options: ["fui", "iba", "he ido", "voy"], answer: 3 },
    { id: "c-a2-06", level: "A2", skill: "grammar", type: "mcq", stem: "Mientras yo ___ la cena, sonó el teléfono.", options: ["preparé", "preparo", "prepararé", "preparaba"], answer: 3 },
    { id: "c-a2-07", level: "A2", skill: "vocabulary", type: "mcq", stem: "Me duele mucho una muela. Tengo que ir al ___.", options: ["oculista", "fontanero", "dentista", "peluquero"], answer: 2 },
    { id: "c-a2-08", level: "A2", skill: "vocabulary", type: "mcq", stem: "Quiero alquilar un piso. ¿Cuánto es el ___ al mes?", options: ["alquiler", "sueldo", "billete", "descuento"], answer: 0 },
    { id: "c-a2-09", level: "A2", skill: "grammar", type: "gap", prompt: "Escribe el verbo en pretérito indefinido.", stem: "Ayer mis amigos y yo ___ (cenar) en un restaurante mexicano.", answers: ["cenamos"] },
    { id: "c-a2-10", level: "A2", skill: "grammar", type: "gap", prompt: "Escribe el verbo en pretérito imperfecto.", stem: "Cuando mi abuela era joven, ___ (trabajar) en una fábrica de zapatos.", answers: ["trabajaba"] },
    { id: "c-a2-11", level: "A2", skill: "grammar", type: "gap", prompt: "Escribe el pronombre de objeto directo (lo, la, los, las).", stem: "—¿Dónde están mis llaves? —No sé, no ___ veo.", answers: ["las"] },

    // B1
    { id: "c-b1-01", level: "B1", skill: "grammar", type: "mcq", stem: "En lo que va de año, ya ___ tres veces a Barcelona por trabajo.", options: ["fui", "iba", "he ido", "había ido"], answer: 2 },
    { id: "c-b1-02", level: "B1", skill: "grammar", type: "mcq", stem: "En 2015 ___ a Lisboa y allí conocí a mi pareja.", options: ["me he mudado", "me mudé", "me mudaba", "me mudaré"], answer: 1 },
    { id: "c-b1-03", level: "B1", skill: "grammar", type: "mcq", stem: "Es importante que ___ la medicación cada ocho horas.", options: ["tomas", "tomarás", "tomabas", "tomes"], answer: 3 },
    { id: "c-b1-04", level: "B1", skill: "grammar", type: "mcq", stem: "—¿Me dejas tu diccionario? —Sí, claro, ahora mismo ___ dejo.", options: ["te lo", "se lo", "le lo", "lo te"], answer: 0 },
    { id: "c-b1-05", level: "B1", skill: "grammar", type: "mcq", stem: "Si te duele la cabeza, ___ esta pastilla y descansa un poco.", options: ["tomarías", "toma", "tomaste", "tomando"], answer: 1 },
    { id: "c-b1-06", level: "B1", skill: "grammar", type: "mcq", stem: "Yo, en tu lugar, no ___ ese trabajo: el sueldo es muy bajo.", options: ["aceptes", "aceptaré", "acepté", "aceptaría"], answer: 3 },
    { id: "c-b1-07", level: "B1", skill: "vocabulary", type: "mcq", stem: "Después de pensarlo mucho, por fin ___ una decisión.", options: ["hice", "di", "tomé", "puse"], answer: 2 },
    { id: "c-b1-08", level: "B1", skill: "vocabulary", type: "mcq", stem: "Tengo tos, estornudo todo el rato y me duele la garganta; creo que estoy ___.", options: ["estreñido", "excitado", "molesto", "constipado"], answer: 3 },
    { id: "c-b1-09", level: "B1", skill: "vocabulary", type: "mcq", stem: "El médico me ha dado una ___ para comprar el antibiótico en la farmacia.", options: ["receta", "factura", "entrada", "cuenta"], answer: 0 },
    { id: "c-b1-10", level: "B1", skill: "grammar", type: "gap", prompt: "Escribe el verbo en presente de subjuntivo.", stem: "Ojalá ___ (tener, tú) suerte en la entrevista de mañana.", answers: ["tengas"] },
    { id: "c-b1-11", level: "B1", skill: "grammar", type: "gap", prompt: "Escribe el verbo en pretérito perfecto (con el pronombre).", stem: "Esta mañana ___ (romperse) la impresora de la oficina.", answers: ["se ha roto"] },
    { id: "c-b1-12", level: "B1", skill: "grammar", type: "gap", prompt: "Completa con los dos pronombres (objeto indirecto + directo).", stem: "—¿Le has dado las llaves a Marta? —Sí, ya ___ he dado.", answers: ["se las"] },

    // B2
    { id: "c-b2-01", level: "B2", skill: "grammar", type: "mcq", stem: "Cuando ___ jubilada, pienso viajar por toda Sudamérica.", options: ["estoy", "esté", "estaré", "estaría"], answer: 1 },
    { id: "c-b2-02", level: "B2", skill: "grammar", type: "mcq", stem: "Buscamos un piso que ___ terraza y que esté cerca del metro.", options: ["tiene", "tendrá", "tenga", "tuviera"], answer: 2 },
    { id: "c-b2-03", level: "B2", skill: "grammar", type: "mcq", stem: "Si hubiera salido antes de casa, no ___ el tren.", options: ["perdería", "había perdido", "habré perdido", "habría perdido"], answer: 3 },
    { id: "c-b2-04", level: "B2", skill: "grammar", type: "mcq", stem: "«¿Has terminado el informe?» → Ayer mi jefa me preguntó si ___ el informe.", options: ["había terminado", "terminaré", "termine", "terminara"], answer: 0 },
    { id: "c-b2-05", level: "B2", skill: "grammar", type: "mcq", stem: "Llevo tres años ___ en esta empresa.", options: ["trabajado", "trabajando", "trabajar", "a trabajar"], answer: 1 },
    { id: "c-b2-06", level: "B2", skill: "grammar", type: "mcq", stem: "En esta tienda ___ muebles de segunda mano.", options: ["se vende", "son vendido", "se venden", "está vendido"], answer: 2 },
    { id: "c-b2-07", level: "B2", skill: "vocabulary", type: "mcq", stem: "Por la crisis, la empresa ha decidido ___ a veinte trabajadores.", options: ["despedir", "dimitir", "desalojar", "despejar"], answer: 0 },
    { id: "c-b2-08", level: "B2", skill: "vocabulary", type: "mcq", stem: "Es una persona muy ___: llora con cualquier película.", options: ["sensata", "razonable", "consciente", "sensible"], answer: 3 },
    { id: "c-b2-09", level: "B2", skill: "vocabulary", type: "mcq", stem: "Antes de firmar, lee bien la ___ pequeña del contrato.", options: ["letra", "palabra", "escritura", "firma"], answer: 0 },
    { id: "c-b2-10", level: "B2", skill: "grammar", type: "gap", prompt: "Escribe el verbo entre paréntesis en la forma correcta.", stem: "Si me lo ___ (decir, tú) antes, habría venido.", answers: ["hubieras dicho", "hubieses dicho"] },
    { id: "c-b2-11", level: "B2", skill: "grammar", type: "gap", prompt: "Escribe el verbo entre paréntesis en la forma correcta.", stem: "No creo que Javier ___ (venir) a la reunión de mañana.", answers: ["venga"] },
    { id: "c-b2-12", level: "B2", skill: "grammar", type: "gap", prompt: "Escribe el verbo entre paréntesis en la forma correcta.", stem: "Te lo explico otra vez para que lo ___ (entender, tú) mejor.", answers: ["entiendas"] },

    // C1
    { id: "c-c1-01", level: "C1", skill: "grammar", type: "mcq", stem: "¿Qué frase dice alguien que ya sabe que está lloviendo y sale igualmente?", options: ["Aunque llueva, saldremos a correr.", "Aunque llueve, saldremos a correr.", "Si llueve, saldremos a correr.", "Cuando llueva, saldremos a correr."], answer: 1 },
    { id: "c-c1-02", level: "C1", skill: "grammar", type: "mcq", stem: "Hace años me prometió que, cuando ___ la carrera, se iría a vivir al extranjero.", options: ["termine", "terminó", "terminara", "terminaría"], answer: 2 },
    { id: "c-c1-03", level: "C1", skill: "grammar", type: "mcq", stem: "No es que no ___ ayudarte, es que de verdad no tengo tiempo.", options: ["quiero", "querré", "quería", "quiera"], answer: 3 },
    { id: "c-c1-04", level: "C1", skill: "vocabulary", type: "mcq", stem: "Los resultados fueron peores de lo esperado; ___, la dirección decidió mantener el proyecto.", options: ["por ende", "a saber", "de ahí que", "con todo"], answer: 3 },
    { id: "c-c1-05", level: "C1", skill: "grammar", type: "mcq", stem: "La demanda ha caído un 20 %; ___ que la empresa haya reducido la producción.", options: ["de ahí", "por eso", "así", "pues"], answer: 0 },
    { id: "c-c1-06", level: "C1", skill: "vocabulary", type: "mcq", stem: "La conferenciante ___ hincapié en la importancia de la prevención.", options: ["puso", "hizo", "dio", "tomó"], answer: 1 },
    { id: "c-c1-07", level: "C1", skill: "vocabulary", type: "mcq", stem: "¿Cuál de estas fórmulas es la más adecuada para cerrar un correo formal dirigido a una institución?", options: ["Un abrazo fuerte", "Besos", "Atentamente", "Nos vemos"], answer: 2 },
    { id: "c-c1-08", level: "C1", skill: "vocabulary", type: "mcq", stem: "Su propuesta fue muy bien ___ por el equipo directivo.", options: ["acogida", "recogida", "cogida", "acomodada"], answer: 0 },
    { id: "c-c1-09", level: "C1", skill: "vocabulary", type: "gap", prompt: "Escribe el sustantivo derivado de la palabra entre paréntesis.", stem: "La ___ (escaso) de agua es un problema grave en la región.", answers: ["escasez"] },
    { id: "c-c1-10", level: "C1", skill: "grammar", type: "gap", prompt: "Escribe el verbo entre paréntesis en la forma correcta.", stem: "Por mucho que ___ (insistir, tú) mañana, no te voy a dejar el coche.", answers: ["insistas"] },
    { id: "c-c1-11", level: "C1", skill: "grammar", type: "gap", prompt: "Escribe el verbo entre paréntesis en la forma correcta.", stem: "Si anoche no ___ (llover) tanto, ahora podríamos ir al campo.", answers: ["hubiera llovido", "hubiese llovido"] },

    // C2
    { id: "c-c2-01", level: "C2", skill: "vocabulary", type: "mcq", stem: "Me lo contó con pelos y ___: no se dejó ni un detalle.", options: ["detalles", "señales", "puntos", "razones"], answer: 1 },
    { id: "c-c2-02", level: "C2", skill: "vocabulary", type: "mcq", stem: "El refrán «A caballo regalado no le mires el diente» se dice cuando…", options: ["conviene revisar bien lo que se compra", "no hay que fiarse de los desconocidos", "hay que aceptar un regalo sin ponerle defectos", "los regalos caros suelen ser inútiles"], answer: 2 },
    { id: "c-c2-03", level: "C2", skill: "grammar", type: "mcq", stem: "—Ayer Marta no vino a la cena. —___ algún problema con el coche; ella nunca falta.", options: ["Tendrá", "Tuviera", "Tenga", "Tendría"], answer: 3 },
    { id: "c-c2-04", level: "C2", skill: "grammar", type: "mcq", stem: "¿En cuál de estas frases el «se» tiene valor impersonal?", options: ["Se vive bien en esta ciudad.", "Se lavó las manos.", "Se lo di ayer.", "Se quejaron del ruido."], answer: 0 },
    { id: "c-c2-05", level: "C2", skill: "vocabulary", type: "mcq", stem: "El acusado ___ haber estado en el lugar de los hechos; según él, aquella noche estaba en casa.", options: ["renegó", "rehusó", "negó", "refutó"], answer: 2 },
    { id: "c-c2-06", level: "C2", skill: "grammar", type: "mcq", stem: "___ las circunstancias, el juicio se aplazó hasta el mes siguiente.", options: ["Dado", "Dadas", "Dando", "Dada"], answer: 1 },
    { id: "c-c2-07", level: "C2", skill: "vocabulary", type: "mcq", stem: "No fue un insulto directo, pero sí una ___: todos entendimos que se refería a ti.", options: ["indirecta", "exabrupto", "perogrullada", "coartada"], answer: 0 },
    { id: "c-c2-08", level: "C2", skill: "vocabulary", type: "mcq", stem: "Es un argumento tan manido que ya nadie le presta atención. «Manido» significa…", options: ["muy polémico", "poco conocido", "muy técnico", "muy repetido y gastado"], answer: 3 },
    { id: "c-c2-09", level: "C2", skill: "grammar", type: "gap", prompt: "Escribe el verbo entre paréntesis en la forma correcta.", stem: "Quienquiera que ___ (ser) el responsable, tendrá que dar explicaciones.", answers: ["sea"] },
    { id: "c-c2-10", level: "C2", skill: "vocabulary", type: "gap", prompt: "Escribe el sustantivo derivado de la palabra entre paréntesis.", stem: "Su reacción ante la crisis fue de una ___ (ingenuo) sorprendente.", answers: ["ingenuidad"] },
    { id: "c-c2-11", level: "C2", skill: "grammar", type: "gap", prompt: "Escribe el verbo entre paréntesis en la forma correcta.", stem: "Mal que nos ___ (pesar), tendremos que aceptar la decisión.", answers: ["pese"] },
  ],

  // ── Comprensión lectora ─────────────────────────────────────────────────
  reading: [
    {
      id: "p-a1",
      level: "A1",
      title: "Anuncio: busco compañera de piso",
      text: "Hola, me llamo Lucía y tengo veintiocho años. Soy profesora en un colegio y busco una compañera para mi piso. El piso está en el centro, cerca de la estación de autobuses. Tiene tres habitaciones, un baño, una cocina grande y un balcón. La habitación libre es pequeña, pero tiene mucha luz. El alquiler es de trescientos euros al mes, con internet incluido. No hay animales en casa porque soy alérgica a los gatos. Si te interesa, escríbeme por la tarde.",
      items: [
        { id: "p-a1-1", skill: "reading", type: "mcq", stem: "¿Qué busca Lucía?", options: ["Un piso nuevo", "Una persona para compartir su piso", "Un trabajo de profesora", "Un gato"], answer: 1 },
        { id: "p-a1-2", skill: "reading", type: "mcq", stem: "¿Cómo es la habitación libre?", options: ["Grande y oscura", "Grande y con balcón", "Pequeña y sin ventana", "Pequeña y con mucha luz"], answer: 3 },
        { id: "p-a1-3", skill: "reading", type: "mcq", stem: "¿Qué está incluido en el precio del alquiler?", options: ["Internet", "La comida", "El agua y la luz", "Una plaza de garaje"], answer: 0 },
        { id: "p-a1-4", skill: "reading", type: "mcq", stem: "¿Por qué no hay animales en el piso?", options: ["Porque el piso es pequeño", "Porque Lucía no tiene tiempo", "Porque Lucía es alérgica", "Porque el propietario no quiere"], answer: 2 },
      ],
    },
    {
      id: "p-a2",
      level: "A2",
      title: "Correo: mis primeros días en Valencia",
      text: "Hola, Pablo:\n¿Qué tal estás? Te escribo desde Valencia. Llegué el lunes pasado y ya estoy más tranquila. Los primeros días fueron difíciles porque no conocía a nadie y el piso nuevo no tenía muebles. El miércoles fui a una tienda y compré una cama, una mesa y dos sillas. En el trabajo todos son muy amables; mi jefa me ayudó mucho a organizarme. El único problema es el horario: ahora empiezo a las ocho, y antes empezaba a las diez. El sábado voy a ir a la playa con unos compañeros. ¿Por qué no vienes a verme en julio? Hay sitio en casa para ti.\nUn abrazo,\nElena",
      items: [
        { id: "p-a2-1", skill: "reading", type: "mcq", stem: "¿Para qué escribe Elena a Pablo?", options: ["Para contarle cómo le va en su nueva ciudad", "Para pedirle dinero", "Para invitarlo a su boda", "Para quejarse de su jefa"], answer: 0 },
        { id: "p-a2-2", skill: "reading", type: "mcq", stem: "¿Qué compró Elena el miércoles?", options: ["Un sofá y una lámpara", "Muebles para su piso", "Ropa para el trabajo", "Un billete de tren"], answer: 1 },
        { id: "p-a2-3", skill: "reading", type: "mcq", stem: "¿Qué no le gusta de su nuevo trabajo?", options: ["Sus compañeros", "Su jefa", "Que tiene que empezar más temprano", "Que está lejos de casa"], answer: 2 },
        { id: "p-a2-4", skill: "reading", type: "mcq", stem: "¿Qué le propone a Pablo?", options: ["Ir a la playa el sábado", "Buscar trabajo en Valencia", "Llamarla por teléfono", "Visitarla en verano"], answer: 3 },
      ],
    },
    {
      id: "p-b1",
      level: "B1",
      title: "Teletrabajar desde un pueblo",
      text: "Hace dos años, Marta y su pareja dejaron su piso de Madrid y se mudaron a un pueblo de Asturias de apenas trescientos habitantes. Los dos trabajan para empresas de la capital, pero desde hace un tiempo pueden hacerlo a distancia casi toda la semana. «Al principio pensábamos que sería solo una aventura de unos meses», explica Marta, «pero nos hemos quedado y no queremos volver». Según ella, la principal ventaja es la calidad de vida: pagan la mitad de alquiler, respiran aire limpio y conocen a todos sus vecinos. Además, han empezado a cultivar un pequeño huerto detrás de la casa. Sin embargo, no todo es perfecto. La conexión a internet a veces falla, y para ir al médico especialista tienen que conducir casi una hora. Además, en invierno anochece pronto y hay pocas actividades culturales. Marta recomienda a quien quiera hacer lo mismo que pase primero una temporada de prueba en el lugar elegido y que no idealice la vida rural. «Hay que tener claro qué estás dispuesto a sacrificar», concluye.",
      items: [
        { id: "p-b1-1", skill: "reading", type: "mcq", stem: "¿Cuál es el tema principal del texto?", options: ["Los problemas de vivienda en Madrid", "La experiencia de una pareja que trabaja a distancia desde un pueblo", "Las ventajas del turismo rural en Asturias", "Cómo encontrar trabajo en una empresa de la capital"], answer: 1 },
        { id: "p-b1-2", skill: "reading", type: "mcq", stem: "¿Qué pensaban Marta y su pareja al mudarse?", options: ["Que se quedarían solo unos meses", "Que se quedarían para siempre", "Que abrirían un negocio en el pueblo", "Que volverían a Madrid en invierno"], answer: 0 },
        { id: "p-b1-3", skill: "reading", type: "mcq", stem: "¿Qué inconveniente menciona Marta?", options: ["El alquiler es caro", "Los vecinos son poco amables", "El médico especialista está lejos", "No pueden trabajar a distancia"], answer: 2 },
        { id: "p-b1-4", skill: "reading", type: "mcq", stem: "¿Qué consejo da Marta?", options: ["Mudarse sin pensarlo demasiado", "Comprar una casa cuanto antes", "Buscar trabajo en el pueblo", "Vivir un tiempo en el lugar antes de decidir"], answer: 3 },
      ],
    },
    {
      id: "p-b2",
      level: "B2",
      title: "Opinión: ¿semana laboral de cuatro días?",
      text: "Cada vez más empresas experimentan con la semana laboral de cuatro días, y los primeros resultados parecen alentadores: los empleados afirman dormir mejor y sentirse menos estresados y, sorprendentemente, la productividad no solo no ha bajado, sino que en algunos casos ha aumentado. No es de extrañar, por tanto, que la idea haya despertado entusiasmo entre trabajadores de todos los sectores.\nAhora bien, convendría no precipitarse. La mayoría de las experiencias se han llevado a cabo en oficinas, donde las tareas pueden reorganizarse con relativa facilidad. ¿Qué ocurre, en cambio, en un hospital, en un colegio o en un restaurante, donde alguien tiene que estar presente cada día? En esos casos, reducir la jornada implica contratar a más personal, y no todas las organizaciones pueden asumir ese coste.\nTampoco deberíamos olvidar que comprimir el trabajo en menos días puede generar jornadas más intensas. Si lo que antes se hacía en cinco días ahora debe hacerse en cuatro sin cambiar los métodos, el resultado podría ser justo el contrario del que se busca: más cansancio y más errores.\nPor todo ello, más que adoptar un modelo único, parece razonable que cada sector analice qué fórmula le conviene. Al fin y al cabo, lo que funciona en una agencia de publicidad no tiene por qué funcionar en una fábrica. La semana de cuatro días puede ser una gran oportunidad, siempre que no se convierta en una moda que se aplica sin reflexión.",
      items: [
        { id: "p-b2-1", skill: "reading", type: "mcq", stem: "¿Cuál es la postura del autor sobre la semana de cuatro días?", options: ["La rechaza por completo", "La apoya sin ninguna reserva", "La ve con interés, pero pide prudencia", "Cree que solo funciona en hospitales"], answer: 2 },
        { id: "p-b2-2", skill: "reading", type: "mcq", stem: "Según el texto, ¿por qué es más difícil aplicarla en un hospital?", options: ["Porque el personal sanitario no la quiere", "Porque obliga a contratar a más personal", "Porque allí la productividad siempre baja", "Porque los pacientes se quejan"], answer: 1 },
        { id: "p-b2-3", skill: "reading", type: "mcq", stem: "¿Qué se puede deducir del tercer párrafo?", options: ["Que reducir días sin cambiar la organización del trabajo puede ser contraproducente", "Que los trabajadores prefieren jornadas más largas", "Que las empresas no deberían cambiar sus métodos", "Que la semana de cinco días provoca más errores"], answer: 0 },
        { id: "p-b2-4", skill: "reading", type: "mcq", stem: "¿Qué quiere decir el autor con «convendría no precipitarse»?", options: ["Que sería mejor actuar rápidamente", "Que sería mejor no hablar del tema", "Que sería mejor esperar a que decida el Gobierno", "Que sería mejor no decidir sin pensarlo bien"], answer: 3 },
      ],
    },
    {
      id: "p-c1",
      level: "C1",
      title: "El derecho a desconectar",
      text: "Hubo un tiempo, no tan lejano, en que salir de la oficina significaba, literalmente, dejar el trabajo atrás. Hoy, el teléfono móvil ha difuminado esa frontera hasta hacerla casi irreconocible: contestamos correos en el sofá, revisamos documentos en la cola del supermercado y, lo que es más preocupante, nos sentimos culpables si no lo hacemos. Que la legislación de varios países europeos haya tenido que reconocer expresamente el llamado «derecho a la desconexión digital» dice mucho de hasta qué punto hemos normalizado lo que, en rigor, no es sino una prolongación encubierta de la jornada.\nSería ingenuo, no obstante, atribuir toda la responsabilidad a las empresas. Muchos profesionales, sobre todo en sectores muy competitivos, se imponen a sí mismos esa disponibilidad permanente, convencidos de que responder al instante es sinónimo de compromiso. Y no faltan quienes, aun pudiendo desconectar, temen que su ausencia les pase factura en la próxima evaluación. A ello se suma la presión de unos clientes que, acostumbrados a la inmediatez, esperan respuesta a cualquier hora y cualquier día de la semana.\nLa ley, por sí sola, difícilmente cambiará esta inercia. De poco sirve que un convenio prohíba enviar mensajes después de las siete si la cultura de la empresa premia, de manera más o menos explícita, a quien los contesta a las once. El cambio, si llega, tendrá que ser también cultural: directivos que den ejemplo, equipos que aprendan a distinguir lo urgente de lo meramente inmediato y trabajadores que se atrevan a defender su tiempo libre sin sentir que traicionan a nadie.\nMientras tanto, convendría recordar algo tan obvio como olvidado: un profesional descansado no es un lujo, sino una condición indispensable para trabajar bien.",
      items: [
        { id: "p-c1-1", skill: "reading", type: "mcq", stem: "¿Cuál es la tesis principal del autor?", options: ["La ley de desconexión digital ya ha resuelto el problema", "Las empresas son las únicas culpables de la hiperconexión", "Para que la desconexión sea real, hacen falta cambios culturales además de leyes", "Los trabajadores deberían responder siempre a los mensajes"], answer: 2 },
        { id: "p-c1-2", skill: "reading", type: "mcq", stem: "Según el texto, ¿por qué algunos profesionales siguen conectados aunque podrían no hacerlo?", options: ["Porque cobran horas extra", "Porque temen que les perjudique profesionalmente", "Porque la ley se lo exige", "Porque prefieren trabajar de noche"], answer: 1 },
        { id: "p-c1-3", skill: "reading", type: "mcq", stem: "¿Qué distinción propone el autor en el tercer párrafo?", options: ["Entre lo urgente y lo que solo parece exigir una respuesta inmediata", "Entre el trabajo presencial y el trabajo a distancia", "Entre directivos y empleados", "Entre empresas grandes y pequeñas"], answer: 0 },
        { id: "p-c1-4", skill: "reading", type: "mcq", stem: "¿Qué actitud muestra el autor al hablar de una «prolongación encubierta de la jornada»?", options: ["Entusiasta", "Indiferente", "Humorística", "Crítica"], answer: 3 },
      ],
    },
    {
      id: "p-c2",
      level: "C2",
      title: "Elogio de la lentitud (con reservas)",
      text: "Confieso que desconfío de los elogios de la lentitud. No porque me parezca mal que alguien reivindique el derecho a comer sin mirar el reloj o a leer una novela sin la tentación de consultar el móvil cada diez páginas, sino porque, con harta frecuencia, quienes predican la calma son precisamente quienes pueden permitírsela. Resulta fácil exaltar las virtudes del paseo sin rumbo cuando uno no tiene que encadenar dos empleos ni recoger a los niños del colegio a las cinco en punto.\nDicho esto, sería injusto despachar el asunto con una mera sospecha de clase. Algo de verdad hay en la intuición de que vivimos instalados en una urgencia que rara vez se justifica. Basta observar cómo hemos convertido el tiempo libre en otra lista de tareas: el gimnasio, el curso de idiomas, la serie que todo el mundo comenta, la escapada de fin de semana que habrá que documentar con fotografías. Ni siquiera el ocio se libra de la lógica del rendimiento. Hasta el descanso, rebautizado como autocuidado, tiene ya sus objetivos, sus aplicaciones y sus métricas.\nQuizá el problema no sea tanto la velocidad como la incapacidad de elegirla. Hay tareas que agradecen la prisa y otras que la sufren, y lo sensato sería saber distinguirlas. Escribir una carta de pésame, escuchar a un amigo que lo está pasando mal o cocinar para alguien a quien se quiere son actividades que, hechas a la carrera, pierden buena parte de su sentido. En cambio, nadie echará de menos que el trámite burocrático de turno se resuelva en cinco minutos en lugar de en tres semanas.\nDe modo que no, no me apunto al culto de la lentitud, que tiene algo de producto de temporada. Me conformaría con algo más modesto y, a la vez, más difícil: recuperar la potestad de decidir a qué ritmo queremos vivir cada cosa. No pido que el mundo se detenga; pido, simplemente, poder bajarme de vez en cuando sin tener que justificarlo.",
      items: [
        { id: "p-c2-1", skill: "reading", type: "mcq", stem: "¿Por qué desconfía el autor de los elogios de la lentitud?", options: ["Porque cree que la lentitud perjudica la economía", "Porque a menudo proceden de personas en una situación privilegiada", "Porque piensa que nadie quiere vivir despacio", "Porque considera que la prisa siempre es positiva"], answer: 1 },
        { id: "p-c2-2", skill: "reading", type: "mcq", stem: "¿Qué quiere decir el autor con «ni siquiera el ocio se libra de la lógica del rendimiento»?", options: ["Que el tiempo libre también se vive como una serie de obligaciones que cumplir", "Que el ocio es cada vez más caro", "Que la gente ya no tiene tiempo libre", "Que el deporte mejora el rendimiento laboral"], answer: 0 },
        { id: "p-c2-3", skill: "reading", type: "mcq", stem: "¿A qué conclusión llega el autor?", options: ["Hay que vivir siempre despacio", "La prisa es inevitable y hay que aceptarla", "Los trámites burocráticos deberían ser más lentos", "Lo importante es poder decidir el ritmo adecuado para cada actividad"], answer: 3 },
        { id: "p-c2-4", skill: "reading", type: "mcq", stem: "Al decir que el culto de la lentitud «tiene algo de producto de temporada», el autor sugiere que…", options: ["es una costumbre muy antigua", "solo se practica en verano", "tiene bastante de moda pasajera", "es algo caro pero valioso"], answer: 2 },
      ],
    },
  ],

  // ── Comprensión auditiva ────────────────────────────────────────────────
  listening: [
    // A1
    { id: "l-a1-01", level: "A1", skill: "listening", type: "mcq", audio: "Hola, me llamo Andrés. Soy de Colombia, pero vivo en Valencia. Tengo treinta y dos años y soy camarero.", stem: "¿Dónde vive Andrés?", options: ["En Colombia", "En Valencia", "En Madrid", "En Sevilla"], answer: 1 },
    { id: "l-a1-02", level: "A1", skill: "listening", type: "mcq", audio: "Mujer: Buenos días, ¿cuánto cuestan las manzanas? Hombre: Dos euros el kilo. Mujer: Pues póngame dos kilos, por favor.", stem: "¿Cuánto paga la mujer?", options: ["Cuatro euros", "Dos euros", "Un euro", "Seis euros"], answer: 0 },
    { id: "l-a1-03", level: "A1", skill: "listening", type: "mcq", audio: "Hombre: Perdone, ¿a qué hora abre la farmacia? Mujer: Abre a las nueve y media y cierra a las ocho de la tarde.", stem: "¿A qué hora abre la farmacia?", options: ["A las ocho", "A las nueve", "A las nueve y media", "A las diez y media"], answer: 2 },

    // A2
    { id: "l-a2-01", level: "A2", skill: "listening", type: "mcq", audio: "Hola, Carmen, soy Jorge. Te llamo porque no puedo ir a la cena del viernes: tengo que trabajar hasta tarde. ¿Podemos quedar el sábado a la hora de comer? Llámame cuando puedas.", stem: "¿Qué propone Jorge?", options: ["Cenar el viernes", "Trabajar juntos el sábado", "Ir al cine el domingo", "Comer juntos el sábado"], answer: 3 },
    { id: "l-a2-02", level: "A2", skill: "listening", type: "mcq", audio: "Mujer: ¿Qué tal el fin de semana? Hombre: Regular. El sábado quería ir a la montaña, pero llovió todo el día y me quedé en casa viendo películas. Mujer: ¡Qué pena!", stem: "¿Qué hizo el hombre el sábado?", options: ["Fue a la montaña", "Se quedó en casa", "Fue al cine", "Trabajó"], answer: 1 },
    { id: "l-a2-03", level: "A2", skill: "listening", type: "mcq", audio: "Señores pasajeros, el vuelo con destino a Lisboa tiene un cambio de puerta. El embarque se realizará por la puerta doce. Gracias.", stem: "¿Qué información da el anuncio?", options: ["El vuelo está cancelado", "El vuelo sale más tarde", "Los pasajeros deben ir a otra puerta", "El vuelo va a otra ciudad"], answer: 2 },

    // B1
    { id: "l-b1-01", level: "B1", skill: "listening", type: "mcq", audio: "Atención, el tren con destino a Valencia saldrá con veinte minutos de retraso desde la vía tres.", stem: "¿Qué pasa con el tren a Valencia?", options: ["Sale a la hora prevista", "Sale con retraso desde la vía tres", "Se ha cancelado", "Cambia de destino"], answer: 1 },
    { id: "l-b1-02", level: "B1", skill: "listening", type: "mcq", audio: "Hombre: Doctora, llevo una semana durmiendo fatal y me duele mucho la espalda. Mujer: ¿Ha cambiado algo en su rutina últimamente? Hombre: Bueno, desde hace un mes trabajo desde casa, sentado en una silla de la cocina. Mujer: Pues ahí está el problema. Le recomiendo una silla adecuada y que se levante cada hora.", stem: "Según la doctora, ¿cuál es la causa probable del problema?", options: ["La postura al trabajar en casa", "El estrés del trabajo", "Una enfermedad grave", "Hacer demasiado deporte"], answer: 0 },
    { id: "l-b1-03", level: "B1", skill: "listening", type: "mcq", audio: "Mujer: Oye, ¿al final has aceptado el puesto en Barcelona? Hombre: Todavía no. El sueldo es mejor, pero tendría que mudarme y mi pareja acaba de empezar un trabajo aquí. Le he pedido a la empresa una semana más para pensarlo.", stem: "¿Qué ha decidido el hombre?", options: ["Aceptar el puesto", "Rechazar el puesto", "Mudarse con su pareja a Barcelona", "Todavía no ha tomado una decisión"], answer: 3 },

    // B2
    { id: "l-b2-01", level: "B2", skill: "listening", type: "mcq", audio: "Hombre: ¿Qué te pareció el piso que fuimos a ver ayer? Mujer: Hombre, luminoso es, eso no te lo niego, y la zona está muy bien. Pero con lo que piden, yo esperaba al menos que la cocina estuviera reformada. Y lo del ruido de la calle… no sé, no lo veo.", stem: "¿Qué opina la mujer del piso?", options: ["Le encanta y quiere alquilarlo", "Tiene cosas buenas, pero no la convence", "Le parece barato para la zona", "Solo le molesta que sea oscuro"], answer: 1 },
    { id: "l-b2-02", level: "B2", skill: "listening", type: "mcq", audio: "Hola, Inés, soy Raúl, de recursos humanos. Te llamo en relación con tu solicitud de vacaciones para la primera quincena de agosto. Lamentablemente, en esas fechas ya hay dos personas de tu departamento fuera, así que no podemos aprobarla tal como está. Si te viene bien, podrías cogerte la segunda quincena, o bien repartir los días entre julio y septiembre. Dime algo antes del viernes.", stem: "¿Por qué llama Raúl a Inés?", options: ["Porque sus vacaciones coinciden con las de otros compañeros y tiene que cambiarlas", "Para confirmarle sus vacaciones", "Para ofrecerle un ascenso", "Porque ella no ha enviado la solicitud a tiempo"], answer: 0 },
    { id: "l-b2-03", level: "B2", skill: "listening", type: "mcq", audio: "Mujer: ¿Te has enterado de que Sergio deja la empresa? Hombre: Algo me habían comentado, pero no me lo creía. Con lo que le costó conseguir ese puesto… Mujer: Pues sí. Dice que necesita un cambio de aires y que le han ofrecido algo en una ONG, aunque vaya a ganar bastante menos.", stem: "¿Qué sabemos de la decisión de Sergio?", options: ["Lo han despedido", "Le han ofrecido un ascenso en la empresa", "Se va a otro trabajo aunque cobrará menos", "Ha decidido jubilarse"], answer: 2 },

    // C1
    { id: "l-c1-01", level: "C1", skill: "listening", type: "mcq", audio: "Mujer: ¿Y qué tal la presentación de ayer? Hombre: Bueno… digamos que el director no se durmió, que ya es algo. Hizo un par de preguntas, eso sí, pero sobre el formato de las diapositivas, no sobre el contenido. Mujer: Vaya. ¿Y ahora qué? Hombre: Pues a esperar, supongo. Aunque yo no me haría muchas ilusiones.", stem: "¿Cómo cree el hombre que fue la presentación?", options: ["Muy bien; el director quedó entusiasmado", "Mal, porque cometió errores en los datos", "No lo sabe porque no estuvo presente", "No muy bien; el director no mostró un interés real por el contenido"], answer: 3 },
    { id: "l-c1-02", level: "C1", skill: "listening", type: "mcq", audio: "Hombre: Me han dicho que vas a reformar la cocina. Mujer: Esa era la idea, sí. Pero entre el presupuesto que me dio el primer albañil y el plazo que me dio el segundo, me estoy planteando seriamente aprender a vivir con los azulejos de los setenta. Hombre: Tan mal no estarán. Mujer: No, si al final les estoy cogiendo cariño y todo.", stem: "¿Qué da a entender la mujer?", options: ["Que la reforma ya está terminada", "Que probablemente no hará la reforma por el precio y la tardanza", "Que ha encontrado un albañil barato y rápido", "Que siempre le han encantado sus azulejos"], answer: 1 },
    { id: "l-c1-03", level: "C1", skill: "listening", type: "mcq", audio: "Buenas tardes. Antes de empezar la reunión de vecinos, quería recordarles que, como se acordó en la junta anterior, las obras de la fachada comenzarán el próximo lunes. Entiendo que a algunos no les haga especial ilusión, sobre todo a quienes votaron en contra, pero la decisión se tomó por mayoría y, sinceramente, el estado del edificio no admitía más demoras.", stem: "¿Cuál es la actitud de la persona que habla?", options: ["Reconoce el malestar de algunos vecinos, pero defiende la decisión", "Propone repetir la votación", "Pide disculpas porque las obras se han retrasado", "Se muestra en contra de las obras"], answer: 0 },

    // C2
    { id: "l-c2-01", level: "C2", skill: "listening", type: "mcq", audio: "Mujer: ¿Has leído el informe que mandó Álvaro? Hombre: Sí, sí. Ochenta páginas. Mujer: ¿Y? Hombre: Pues que, si lo resumes, viene a decir lo mismo que la versión de dos páginas que nos mandó en marzo. Eso sí, con unos gráficos preciosos. Mujer: Bueno, por lo menos se ha esmerado. Hombre: Esmerarse, se ha esmerado, eso desde luego.", stem: "¿Qué piensa realmente el hombre del informe?", options: ["Que es excelente y muy completo", "Que los gráficos contienen errores", "Que es demasiado extenso para lo poco que aporta", "Que Álvaro no le ha dedicado tiempo"], answer: 2 },
    { id: "l-c2-02", level: "C2", skill: "listening", type: "mcq", audio: "Hombre: Al final, ¿fuiste a la boda de tu prima? Mujer: Fui, fui. Y no me arrepiento, ¿eh? Aunque, si te soy sincera, entre el viaje de seis horas, el traje que me costó un ojo de la cara y el sitio que me tocó en la mesa, al lado de mi exsuegro, hubo momentos en que me pregunté qué pintaba yo allí. Hombre: Vamos, que te lo pasaste en grande. Mujer: No te pases de listo.", stem: "¿Qué intención tiene el hombre con su último comentario?", options: ["Ironizar sobre la experiencia que ella acaba de contar", "Felicitarla sinceramente", "Mostrar envidia por no haber ido", "Preguntarle si quiere volver"], answer: 0 },
    { id: "l-c2-03", level: "C2", skill: "listening", type: "mcq", audio: "Se suele afirmar que el español es una lengua fácil para los hablantes de otras lenguas romances, y algo de cierto hay en ello: el vocabulario compartido permite comprender mucho desde el principio. Sin embargo, esa misma cercanía tiene un reverso menos amable. Precisamente porque todo parece transparente, el aprendiz tiende a confiar en exceso en su intuición, y los errores se fosilizan con una facilidad pasmosa. Dicho de otro modo, lo que se gana en rapidez inicial se paga, a menudo, en precisión.", stem: "¿Cuál es la idea principal del fragmento?", options: ["El español es la lengua más fácil del mundo", "Los hablantes de lenguas romances no cometen errores en español", "Es mejor no aprender varias lenguas romances a la vez", "La semejanza entre lenguas facilita el comienzo, pero puede perjudicar la precisión"], answer: 3 },
  ],
};
