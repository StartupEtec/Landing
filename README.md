# Landing — Laborin

Landing de marketing en `laborin.app`. El frontend de la app se sirve por separado en `app.laborin.app`.

## Rama

Trabajo local en `MVP`, creada desde `develop`. No se pushea a `main` sin aprobación.

## Desarrollo

```bash
npm install
npm run dev
```

## Build estático

```bash
npm run lint
npm run build
```

El output queda en `out/` y es lo que monta nginx como `/var/www/landing`.

## Estructura

- `app/`: layout, página y estilos globales.
- `components/`: secciones de la página.
- `public/`: favicon y assets locales.
- `DESIGN.md`: mundo visual rediseñado y decisiones de superficie.
- `PRODUCT.md`: verdad de producto y restricciones.

## Imágenes

La landing no usa fotografías, ilustraciones ni servicios externos de imágenes. El lenguaje visual se construye con tipografía, reglas, color y SVG geométrico para la orden de servicio y los iconos.
