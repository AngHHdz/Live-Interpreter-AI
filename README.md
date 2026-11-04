# Live Interpreter AI

Aplicación PWA para interpretación de voz en tiempo real hacia español.

## Stack
- Cloudflare Worker: frontend PWA + API segura para emitir credenciales temporales.
- OpenAI Realtime Translation: modelo `gpt-realtime-translate` sobre WebRTC.
- GitHub: código fuente y control de versiones.
- Supabase: integración pendiente en un proyecto separado; no usar el proyecto de Portal Operaciones GS.

## Configuración Cloudflare
En el Worker `live-interpreter-ai`, crear estos secretos:
- `OPENAI_API_KEY`: API key de OpenAI (solo servidor).
- `APP_PIN`: código privado para autorizar la creación de sesiones.

No guardar la API key en el frontend, GitHub ni en variables `VITE_`/públicas.

## Desarrollo
El Worker sirve la interfaz desde `src/worker.js`. El navegador debe usar HTTPS y permitir acceso al micrófono. WebRTC requiere conexión de red activa; la PWA puede instalarse, pero la traducción no funciona sin conexión.

## Endpoints
- `GET /`: interfaz.
- `GET /api/health`: estado de configuración (sin revelar secretos).
- `POST /api/session`: crea un client secret de corta duración; requiere `{ "pin": "..." }`.

## Privacidad
Esta versión no guarda audio ni transcripciones en una base de datos. La conexión de audio se establece directamente entre el navegador y OpenAI mediante WebRTC, usando una credencial temporal emitida por el Worker.
