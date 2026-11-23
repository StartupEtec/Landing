# PRODUCT.md

## Producto

Laborin es una plataforma on-demand que conecta clientes con profesionales independientes para servicios puntuales y locales. El acceso web vive en `app.laborin.app`; esta landing es la puerta de entrada marketing en `laborin.app`.

## Visitantes

- Clientes que necesitan contratar un profesional para un trabajo puntual.
- Profesionales independientes que buscan clientes verificados.

## Trabajo de la landing

Explicar qué es Laborin, demostrar el mecanismo en un viewport, responder dudas conceptuales en el FAQ y llevar al visitante a la app. No aloja login, registro ni dashboard.

## Verdades de producto

- La app existe en Expo (iOS, Android y web), en español.
- Una sola cuenta permite alternar entre Cliente y Proveedor.
- El registro incluye verificación de identidad con foto de DNI y selección de ubicación.
- El backend usa Stripe para cobranza; la app comunica pagos protegidos con Escrow.
- El onboarding y el registro viven dentro de la app.

## Restricciones

- La landing rediseña la superficie: no hereda literalmente Material 3; conserva el azul de marca `#004ccd` y el verde profesional `#15803d` de `Frontend/src/theme/tokens.ts`.
- Cero fotografías y cero requests a picsum; el lenguaje visual es tipografía, reglas, color y SVG geométrico.
- Sin claims numéricos ni testimonios inventados; los datos de la orden del hero están etiquetados como ejemplo.
- Sin datos sensibles ni credenciales en el repo.
- Estático, servido por el mismo nginx del servidor de correo.
