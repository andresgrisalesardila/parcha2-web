# Fix invitaciones externas v5

Este paquete corrige la landing `/parche/[id]` para que:

- No haga intentos automáticos de abrir la app.
- No use `useParams` ni `useSearchParams` en el cliente.
- Use `desparcha2://` por compatibilidad con la build actual instalada.
- Desactive temporalmente el botón después del primer toque para evitar el aviso de iOS de intentos repetidos.
- Use `intent://` en Android y custom scheme en iOS.

Cuando la nueva build ya reconozca `parcha2://`, se puede cambiar el scheme dentro de `app/parche/InviteLandingClient.js`.
