# Parcha2 — archivos web para invitaciones externas

Copia la carpeta `public` dentro del repo de la página web `parcha2-web` y publícala en `https://parcha2.co`.

Debe quedar disponible:

- `https://parcha2.co/.well-known/apple-app-site-association`
- `https://parcha2.co/.well-known/assetlinks.json`
- `https://parcha2.co/parche/<ID_DEL_PARCHE>`

## Android

El archivo incluido es `assetlinks.template.json` porque falta el SHA-256 real de Google Play App Signing.

1. En Google Play Console entra a tu app.
2. Ve a `Configuración > Integridad de la app > Firma de apps`.
3. Copia el `SHA-256 certificate fingerprint` de la firma de apps de Google Play.
4. Reemplaza `REEMPLAZA_ESTO_CON_EL_SHA_256_DE_GOOGLE_PLAY_APP_SIGNING`.
5. Renombra el archivo a `assetlinks.json`.

## iOS

El archivo `apple-app-site-association` ya está preparado con:

- Team ID: `9S954C8VB6`
- Bundle ID: `com.agrisales.desparcha2`

No debe tener extensión `.json` y debe servirse con contenido JSON.
