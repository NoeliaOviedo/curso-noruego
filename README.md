# curso-noruego · *Velkommen til Norge!*
 
> Microcurso autoformativo de noruego bokmål A0 → A1 a través de la cultura nórdica, para hispanohablantes adolescentes. Proyecto final de la asignatura **Producción de Materiales Educativos Digitales** del Máster en Letras Digitales (UCM), curso 2025-2026.
 
**Curso publicado:** [https://noeliaov.github.io/curso-noruego/](https://NoeliaOviedo.github.io/curso-noruego/)
**Autora:** Noelia Oviedo Marín
**Licencia:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es)
 
---
 
## ¿De qué va este proyecto?
 
Este repositorio contiene un curso online completo de introducción al noruego, diseñado como **proyecto académico individual** para la asignatura PMED. El curso está dirigido a **adolescentes hispanohablantes (14-18 años) con nivel de inglés A2-B1** que se acercan al noruego por interés cultural (series como *Skam*, videojuegos como *God of War Ragnarök*, música, mitología nórdica).
 
El curso utiliza la **cultura noruega como vehículo de la lengua** (no como adorno), y se apoya explícitamente en el inglés del alumno como **atajo germánico** para acelerar la adquisición.
 
## Objetivos didácticos
 
Al finalizar el curso, el estudiante será capaz de:
 
- Reconocer y pronunciar las letras especiales del alfabeto noruego (æ, ø, å).
- Saludar, presentarse, decir su edad y procedencia en bokmål.
- Manejar números, días, meses y fechas en contexto.
- Usar las preposiciones básicas de lugar (*i*, *på*, *til*).
- Pedir en una cafetería con *jeg vil ha…* / *jeg vil gjerne ha…*.
- Hablar de su familia y sus aficiones con *jeg liker (å)*.
- Leer microcuentos en noruego A1 con apoyo de glosario.
**Nivel de partida:** A0 absoluto (sin conocimientos previos de noruego).
**Nivel de llegada:** A1 del MCER.
**Duración total estimada:** 180-220 minutos en sesiones cortas.
 
## Estructura del curso
 
El curso se compone de una **portada + siete lecciones** (L0–L6):
 
| Lección | Tema | Materiales propios |
|---------|------|--------------------|
| L0 | Introducción al curso | Presentación reveal.js |
| L1 | *Hei!* — Saludos y presentación | Visual novel Ren'Py + SCORM (H5P) |
| L2 | *Tall og tid* — Números y tiempo | Cuestionario QTI + anexo EPUB |
| L3 | *Hvor er du?* — Lugares y orientación | Narrativa Twine |
| L4 | *Mat og drikke* — Comida y bebida | Cuadernillo PDF + cuestionario QTI |
| L5 | *Familie og fritid* — Familia y ocio | Cuadernillo PDF |
| L6 | *Mytologi* — Mitología y relatos | Anexo EPUB + SCORM |
 
## Tecnologías utilizadas
 
| Tecnología | Uso |
|------------|-----|
| **Markdown** | Texto fuente de todas las lecciones |
| **Docsify** | Generador estático que sirve los Markdown como sitio web |
| **GitHub Pages** | Alojamiento gratuito del sitio publicado |
| **reveal.js** | Presentación introductoria (L0) |
| **Pandoc** | Generación de EPUB (L2, L6) y PDF (L4, L5) |
| **Lumi.education / H5P** | Creación de paquetes SCORM (L1, L6) |
| **Twine** | Narrativa interactiva ramificada (L3) |
| **Ren'Py** | Visual novel (L1) |
| **IMS QTI** | Cuestionarios interoperables (L2, L4) |
 
## Estructura del repositorio
 
```
curso-noruego/
├── README.md                         ← este archivo
├── LICENSE                           ← CC BY-NC-SA 4.0
├── .gitattributes
│
└── docs/                             ← carpeta servida por GitHub Pages
    ├── .nojekyll                     ← desactiva Jekyll (necesario para Docsify)
    ├── index.html                    ← configuración de Docsify
    ├── _sidebar.md                   ← navegación lateral
    ├── README.md                     ← portada del curso
    │
    ├── assets/                       ← recursos compartidos (imágenes, CSS, audio)
    │
    ├── L0-introduccion/
    │   ├── README.md
    │   └── presentacion-reveal/
    │
    ├── L1-saludos-y-presentacion/
    │   ├── README.md
    │   ├── renpy-instituto/          ← build web de la visual novel
    │   └── scorm-saludos.zip
    │
    ├── L2-numeros-y-tiempo/
    │   ├── README.md
    │   ├── det-norske-aret.epub
    │   └── quiz-numeros.qti.zip
    │
    ├── L3-lugares-y-orientacion/
    │   ├── README.md
    │   └── twine-viaje/
    │
    ├── L4-comida-y-bebida/
    │   ├── README.md
    │   ├── ejercicios.pdf
    │   └── quiz-comida.qti.zip
    │
    ├── L5-familia-y-ocio/
    │   ├── README.md
    │   └── ejercicios.pdf
    │
    └── L6-mitologia-y-relatos/
        ├── README.md
        ├── mitologia.epub
        └── scorm-lectura.zip
```
 
## Cómo desplegarlo en local
 
Para previsualizar el curso antes de subirlo o tras hacer cambios:
 
```bash
# Si no tienes docsify-cli instalado
npm install -g docsify-cli
 
# En la raíz del repositorio
docsify serve docs
```
 
Abre `http://localhost:3000` en el navegador.
 
Como alternativa sin Node.js, se puede usar Python:
 
```bash
cd docs
python -m http.server 8000
```
 
Abre `http://localhost:8000` en el navegador.
 
## Cómo publicarlo en GitHub Pages
 
1. **Settings → Pages** en el repositorio de GitHub.
2. En *Source*: branch `main`, carpeta `/docs`.
3. Guardar. La URL del curso será `https://<usuario>.github.io/curso-noruego/`.
## Atribución de fuentes
 
El contenido lingüístico ha sido elaborado a partir de fuentes académicas e institucionales verificadas:
 
- **NTNU** (Norges teknisk-naturvitenskapelige universitet) — *Learn NoW*
- **UiO** (Universitetet i Oslo) — *Henrik Ibsens Skrifter*, Departamento de Lingüística
- **Språkrådet** (Consejo de la Lengua Noruega)
- **NDLA** (Nasjonal digital læringsarena)
- **NAOB** (Det Norske Akademis ordbok)
- **Visit Norway**, **MatPrat**, **Norsk Folkemuseum**, **Norsk Polarinstitutt**
- Faarlund, J. T., Lie, S., & Vannebo, K. I. (1997). *Norsk referansegrammatikk*. Universitetsforlaget.
- Strandskogen, A.-B., & Strandskogen, R. (1995). *Norwegian: An Essential Grammar*. Routledge.
- Snorri Sturluson (siglo XIII). *Edda* — adaptaciones libres al bokmål A1.
Las fuentes específicas de cada lección se citan al final del `README.md` correspondiente.
 
## Licencia
 
Este curso está publicado bajo licencia **Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional ([CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es))**.
 
Puedes:
 
- **Compartir** — copiar y redistribuir el material en cualquier medio o formato.
- **Adaptar** — remezclar, transformar y construir a partir del material.
Bajo las siguientes condiciones:
 
- **Atribución (BY)** — debes dar crédito de manera adecuada, brindar un enlace a la licencia, e indicar si se han realizado cambios.
- **NoComercial (NC)** — no puedes hacer uso del material con fines comerciales.
- **CompartirIgual (SA)** — si remezclas, transformas o creas a partir del material, debes distribuir tu contribución bajo la misma licencia del original.
Las imágenes, audios y recursos externos (REA) reutilizados conservan sus licencias originales, que se indican en cada caso.
 
## Créditos
 
**Autora del curso, los materiales propios y la presente documentación:**
Noelia Oviedo Marín — Máster en Letras Digitales, Universidad Complutense de Madrid (2025-2026)
 
**Asignatura:** Producción de Materiales Educativos Digitales (PMED)
 
**Contacto:** [noeliaov@ucm.es](mailto:noeliaov@ucm.es)
 
---
 
*Tusen takk for at du leser dette.*
*Muchas gracias por leer hasta aquí.*
 