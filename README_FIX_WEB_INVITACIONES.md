# Parcha2 Web — fix invitaciones externas

Este paquete corrige el 404 de:

https://parcha2.co/parche/ID_DEL_PARCHE

También evita el error de build de Next/Vercel porque ya no usa `useSearchParams` ni `useParams` en un Client Component. La página ahora se resuelve desde Server Components.

## Archivos incluidos

- app/parche/page.js
- app/parche/[id]/page.js
- app/parche/InviteLanding.js
- public/logo-2.png
- vercel.json
- limpiar-web-parche.ps1

## Aplicar

1. Extraer este zip encima de:

C:\Users\Andres\Documents\parcha2-web

2. Ejecutar:

powershell -ExecutionPolicy Bypass -File .\limpiar-web-parche.ps1

3. Probar build local:

npm run build

4. Si compila:

git add -A
git commit -m "Corregir landing de invitaciones externas"
git push

5. Cuando Vercel despliegue, probar:

https://parcha2.co/parche/test123
