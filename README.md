# curso-noruego · *Velkommen til Norge!*
 
> Microcurso autoformativo de noruego bokmål A0 → A1 a través de la cultura nórdica, para hispanohablantes adolescentes. Proyecto final de la asignatura **Producción de Materiales Educativos Digitales** del Máster en Letras Digitales (UCM), curso 2025-2026.
 
**Curso publicado:** [https://noeliaoviedo.github.io/curso-noruego/](https://noeliaoviedo.github.io/curso-noruego/)
**Autora:** Noelia Oviedo Marín
**Licencia:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es)
 
---
 
## ¿De qué va este proyecto?
 
Este repositorio contiene un curso online completo de introducción al noruego, diseñado como **proyecto académico individual** para la asignatura PMED. El curso está dirigido a **adolescentes hispanohablantes (14-18 años) con nivel de inglés A2-B1** que se acercan al noruego por interés cultural (series, videojuegos, música o mitología nórdica).
 
El curso utiliza la **cultura noruega como vehículo de la lengua**, y se apoya explícitamente en el inglés del alumno como **atajo germánico** para acelerar la adquisición.
 
## Objetivos didácticos
 
Al finalizar el curso, el estudiante será capaz de:
 
- Reconocer y pronunciar las letras especiales del alfabeto noruego (æ, ø, å).
- Saludar, presentarse, decir su edad y procedencia en bokmål.
- Manejar números, días, meses y fechas en contexto.
- Usar las preposiciones básicas de lugar (*i*, *på*, *til*).
- Pedir en una cafetería con *jeg vil ha…* / *jeg vil gjerne ha…*.
- Leer microcuentos en noruego A1 con apoyo de glosario.

**Nivel de partida:** A0 absoluto (sin conocimientos previos de noruego).
**Nivel de llegada:** A1 del MCER.
**Duración total estimada:** 170 minutos en sesiones cortas.
 
## Estructura del curso
 
El curso se compone de una **portada + cinco lecciones temáticas** (L0–L5):
 
| Lección | Tema | Materiales propios |
|---------|------|--------------------|
| L0 | Introducción al curso | Presentación reveal.js |
| L1 | *Hei!* — Saludos y presentación | Visual novel Ren'Py + SCORM (H5P) |
| L2 | *Tall og tid* — Números y tiempo | Quiz HTML + cuestionario QTI + anexo EPUB |
| L3 | *Hvor er du?* — Lugares y orientación | Narrativa Twine |
| L4 | *Mat og drikke* — Comida y bebida | Cuadernillo PDF + quiz HTML |
| L5 | *Mytologi* — Mitología y relatos | Lectura HTML + anexo EPUB |

## Tecnologías utilizadas
 
| Tecnología | Uso |
|------------|-----|
| **Markdown** | Texto fuente de todas las lecciones |
| **Docsify** | Generador estático que sirve los Markdown como sitio web |
| **GitHub Pages** | Alojamiento gratuito del sitio publicado |
| **reveal.js** | Presentación introductoria (L0) |
| **Pandoc** | Generación de EPUB (L2, L5) y PDF (L4) |
| **Lumi.education / H5P** | Creación del paquete SCORM (L1) |
| **Twine** | Narrativa interactiva ramificada (L3) |
| **Ren'Py** | Visual novel (L1) |
| **IMS QTI** | Cuestionario interoperable descargable (L2) |
| **Quiz HTML** | Cuestionarios interactivos embebidos (L2, L4) |

 
> **Nota técnica.** SCORM y QTI no se ejecutan de forma nativa en GitHub Pages. Se ofrecen como descargables con instrucciones de importación a un LMS (Moodle, Canvas, etc.). Los quiz HTML, en cambio, sí funcionan directamente en el navegador.
 
## Estructura del repositorio
 
```
curso-noruego/
├── README.md                         ← este archivo
├── LICENSE                           
├── .gitattributes
│
└── docs/                             ← carpeta servida por GitHub Pages
    ├── .nojekyll                     ← desactiva Jekyll (necesario para Docsify)
    ├── index.html                    ← configuración de Docsify
    ├── README.md                     ← portada del curso
    ├── _coverpage.md                 ← splash de bienvenida
    ├── _sidebar.md                   ← navegación lateral
    │
    ├── assets/                       ← recursos compartidos
    │   ├── img/                      ← portada, favicon, coverpage, referentes
    │   └── css/                      ← styles.css (hoja de estilos externa)
    │
    ├── L0-introduccion/
    │   ├── README.md
    │   └── presentacion-reveal/      ← reveal.js (index.html)
    │
    ├── L1-saludos-y-presentacion/
    │   ├── README.md
    │   ├── img/                      ← bokmal.png
    │   ├── renpy/                    ← build web de la visual novel
    │   └── scorm-saludos.zip         ← paquete SCORM (H5P) descargable
    │
    ├── L2-numeros-y-tiempo/
    │   ├── README.md
    │   ├── img/                      ← 17mai.jpg, duende.jpeg, morketid.jpeg
    │   ├── quiz-numeros/             ← quiz HTML embebido
    │   ├── quiz-numeros.qti.zip      ← cuestionario QTI descargable
    │   ├── quiz-numeros-clave.pdf    ← clave de corrección
    │   └── det-norske-aret.epub      ← anexo EPUB
    │
    ├── L3-lugares-y-orientacion/
    │   ├── README.md
    │   ├── img/                      ← imágenes de las cinco regiones
    │   └── twine/                    ← narrativa Twine compilada
    │
    ├── L4-comida-y-bebida/
    │   ├── README.md
    │   ├── img/                      ← brunost, kanelbolle, matpakke, lefse, ribbe
    │   ├── quiz-comida/              ← quiz HTML embebido
    │   └── ejercicios-mat-og-drikke.pdf
    │
    └── L5-mitologia-y-relatos/
        ├── README.md
        ├── tre-fortellinger/         ← lectura online (HTML)
        └── tre-fortellinger-fra-norden.epub
```
 
### Convenciones del repositorio
 
- **README.md por lección.** Es el archivo principal de cada carpeta y el que Docsify renderiza como HTML automáticamente cuando el estudiante entra a la lección.
- **assets/ compartida.** Evita duplicar imágenes y estilos entre lecciones. La portada del curso, el favicon, la imagen de fondo de la coverpage y los referentes culturales del README principal viven aquí.
- **img/ por lección.** Las imágenes que solo aparecen en una lección concreta (las cinco regiones de L3, los cinco platos de L4, las festividades de L2) se guardan dentro de la propia carpeta de la lección.
- **`.nojekyll`** es obligatorio: desactiva expresamente Jekyll en GitHub Pages para que Docsify funcione correctamente.
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
 
> **Importante.** Docsify renderiza el Markdown en el navegador sin necesidad de build. No hay paso de compilación: lo que ves en local es lo que se publicará en GitHub Pages.
 
## Cómo publicarlo en GitHub Pages
 
1. **Settings → Pages** en el repositorio de GitHub.
2. En *Source*: branch `main`, carpeta `/docs`.
3. Guardar. La URL del curso será `https://<usuario>.github.io/curso-noruego/`.
## Regenerar los materiales descargables
 
Si necesitas reconstruir los EPUB, PDF u otros entregables a partir del Markdown fuente:
 
```bash
# EPUB de L2 (calendario noruego)
pandoc docs/L2-numeros-y-tiempo/fuente.md \
  -o docs/L2-numeros-y-tiempo/det-norske-aret.epub \
  --metadata title="Det norske året"
 
# EPUB de L5 (mitología)
pandoc docs/L5-mitologia-y-relatos/fuente.md \
  -o docs/L5-mitologia-y-relatos/tre-fortellinger-fra-norden.epub \
  --metadata title="Tre fortellinger fra Norden"
 
# Cuadernillo PDF de L4
pandoc docs/L4-comida-y-bebida/fuente.md \
  -o docs/L4-comida-y-bebida/ejercicios-mat-og-drikke.pdf \
  --pdf-engine=xelatex
```
 
Los paquetes SCORM (L1) y QTI (L2) se han generado con **Lumi.education / H5P** y se incluyen directamente en el repositorio como `.zip`. Para regenerarlos hay que reabrir el proyecto correspondiente en H5P y volver a exportar.
 
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