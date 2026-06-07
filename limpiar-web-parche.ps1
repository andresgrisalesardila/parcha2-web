# Ejecutar desde C:\Users\Andres\Documents\parcha2-web despues de extraer el zip.
# Limpia versiones viejas de la landing que podían causar 404 o conflicto con App Router.

Remove-Item "app\parche\InviteLandingClient.js" -ErrorAction SilentlyContinue
Remove-Item "public\parche" -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Listo: landing /parche/[id] corregida. El boton usa compatibilidad desparcha2:// para abrir la build actual." -ForegroundColor Green
