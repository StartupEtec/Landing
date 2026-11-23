# DESIGN.md

## World

*Service Blue Ledger / Orden de servicio*: un rediseño de la landing, no una extensión de Material 3. Su mundo es la orden de trabajo bien impresa: papel claro, tinta azul de marca, reglas finas, estados verificables y una sola geometría funcional. No usa fotos ni ilustraciones; el SVG dibuja exclusivamente la estructura de la orden.

## Direction contract

- **THESIS:** una landing que se lee como una orden de servicio abierta y resuelta, no como una plantilla SaaS con tres tarjetas y una foto de stock. Rechaza el hero centrado, el mockup de app y el kicker decorativo sobre el titular.
- **OWN-WORLD:** fondo `#f7f8fc`, papel `#ffffff`, tinta `#111425`, azul `#004ccd`, verde `#15803d`, regla `#d7dcec`, Bricolage Grotesque para display e Inter para cuerpo, radios 12/18/28, una sola sombra suave desplazada.
- **STORY:** el visitante entiende que Laborin conecta a clientes y profesionales con información clara, ve el mecanismo público → comparación → pago protegido, reconoce que un rol puede alternar con el otro y entra a la app.
- **FIRST VIEWPORT:** nav de 72px con marca Laborin y un CTA; a la izquierda, titular en dos líneas, subtitulo breve y acción principal; a la derecha, una orden de ejemplo con estado, rol y tres filas de datos; debajo, un riel de tres pasos unidos por una regla azul.
- **FORM:** landing persuasiva de una columna narrativa con un objeto de trabajo a la vista; los roles son bloques apilados de jerarquía desigual, la confianza es una lista definida por reglas, el FAQ es un acordeón native y el cierre es una franja azul. `seed: 53cb7d35228be9d8` (dirección asignada del roll `direction/persuade`).
- **FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Tokens

| Token | Valor | Origen |
| --- | --- | --- |
| `paper` | `#f7f8fc` | superficie de la orden |
| `sheet` | `#ffffff` | papel de trabajo |
| `ink` | `#111425` | tinta principal |
| `muted` | `#49516a` | tinta secundaria |
| `rule` | `#d7dcec` | reglas y bordes |
| `primary` | `#004ccd` | azul de marca |
| `primary-hover` | `#0f62fe` | azul de acción |
| `primary-tint` | `#e8edff` | acento de estado |
| `client` | `#004ccd` | rol cliente |
| `worker` | `#0f6b32` | rol profesional, versión AA del verde `#15803d` |
| `success-tint` | `#e6f3e9` | estado verificado |
| `radius-sm/md/lg` | `12 / 18 / 28px` | geometría de la orden |
| `space` | `4 / 8 / 12 / 20 / 28 / 40 / 64px` | ritmo vertical |
| `shadow-sheet` | `0 18px 44px rgba(17, 20, 37, 0.08)` | profundidad única |
| `font-display` | Bricolage Grotesque | voz del titular |
| `font-body` | Inter | voz de lectura |

## Modo oscuro

La orden se lee de noche sobre mesa de trabajo: superficie `#0b1020`, hoja `#121a2d`, tinta `#f4f6ff`, regla `#2a3550`, azul `#6f9bff` y verde `#68c98e`. Jerarquía, foco y contraste AA se mantienen en ambos modos.

## Movimiento

Una sola entrada del objeto de trabajo en el hero (opacidad y desplazamiento, 220ms, `cubic-bezier(0.23, 1, 0.32, 1)`) y la apertura nativa del FAQ. Hover sólo en controles; sin scroll listeners. `prefers-reduced-motion` deja todo visible y sin transición.

## Accesibilidad

Skip link, foco visible, headings jerárquicos, `scroll-margin-top`, SVG decorativo con `aria-hidden`, resúmenes de FAQ con teclado, contraste AA, selección y caret tematizados y `color-scheme` acorde al tema.
