# Parcha2 Web — fix invitaciones externas v4

Corrige el problema donde Safari/WhatsApp muestra:

> Este sitio está intentando abrir otra aplicación repetidamente.

También evita el error cuando la app instalada aún no reconoce `parcha2://`.

## Qué cambia

- `/parche/ID` carga como ruta real de Next.
- No hay intento automático de abrir la app al cargar la página.
- El botón "Abrir en Parcha2" usa `desparcha2://` por compatibilidad con la build instalada actual.
- La marca visible sigue siendo Parcha2.
- Cuando la nueva build con `scheme: parcha2` esté instalada en tiendas, se puede cambiar el esquema interno a `parcha2://`.

## Aplicar

```powershell
cd C:\Users\Andres\Documents\parcha2-web
Copy-Item . ..\parcha2-web-backup-before-invite-v4 -Recurse -Force
Expand-Archive -Path C:\Users\Andres\Downloads\parcha2_web_fix_invitaciones_v4.zip -DestinationPath . -Force
powershell -ExecutionPolicy Bypass -File .\limpiar-web-parche.ps1
npm run build
```

Si compila:

```powershell
git status
git add -A
git commit -m "Corregir apertura externa de invitaciones"
git push
```
