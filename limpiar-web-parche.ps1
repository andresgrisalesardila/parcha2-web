# Ejecutar desde C:\Users\Andres\Documents\parcha2-web despues de extraer el zip.
# Limpia archivos viejos que podían causar 404 o error de build.

Remove-Item "app\parche\InviteLandingClient.js" -ErrorAction SilentlyContinue
Remove-Item "public\parche" -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Listo: landing /parche/[id] corregida y archivos viejos limpiados." -ForegroundColor Green
