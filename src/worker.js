const APP_HTML = String.raw\`<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#080d18">
<meta name="description" content="Interpretación de voz en tiempo real al español.">
<link rel="manifest" href="/manifest.webmanifest">
<title>Live Interpreter AI</title>
<style>
:root{color-scheme:dark;--bg:#080d18;--panel:#101a2b;--panel2:#142238;--line:#253650;--text:#eef5ff;--muted:#8ea3bd;--cyan:#57d7e8;--green:#53d69a;--red:#ff6b7d}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:radial-gradient(ellipse at 15% 0%,#123047 0,transparent 38%),radial-gradient(ellipse at 100% 80%,#142044 0,transparent 38%),var(--bg);font:15px/1.5 Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif;color:var(--text)}
.wrap{max-width:1080px;margin:auto;padding:28px 22px 48px}.top{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:44px}.brand{display:flex;align-items:center;gap:12px}.logo{width:42px;height:42px;border-radius:13px;background:linear-gradient(135deg,#4ad4e8,#557aff);display:grid;place-items:center;color:#06111c;font-size:22px;font-weight:900;box-shadow:0 8px 30px #46c9e744}.brand strong{display:block;letter-spacing:.02em;font-size:16px}.brand small{color:var(--muted);font-size:12px}.pill{display:flex;align-items:center;gap:8px;border:1px solid var(--line);border-radius:99px;padding:8px 12px;color:var(--muted);font-size:12px}.dot{width:7px;height:7px;border-radius:50%;background:#71849c}.dot.on{background:var(--green);box-shadow:0 0 12px #53d69a88}
.hero{text-align:center;margin:0 auto 30px;max-width:700px}.eyebrow{color:var(--cyan);text-transform:uppercase;letter-spacing:.2em;font-size:11px;font-weight:800}.hero h1{font-size:clamp(34px,6vw,58px);line-height:1.04;letter-spacing:-.045em;margin:12px 0}.hero p{color:var(--muted);margin:0 auto;max-width:570px}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.panel{background:linear-gradient(145deg,#132139eF,#0d1728f5);border:1px solid var(--line);border-radius:20px;padding:20px;box-shadow:0 18px 55px #0003}.panel h2{font-size:13px;text-transform:uppercase;letter-spacing:.12em;color:#a9bdd5;margin:0 0 16px}.route{display:flex;align-items:center;gap:12px}.lang{flex:1;background:#0a1423;border:1px solid #263b55;border-radius:14px;padding:15px}.lang small{display:block;color:var(--muted);font-size:11px;margin-bottom:5px}.lang strong{font-size:18px}.arrow{color:var(--cyan);font-size:22px}
.controls{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}.field{display:flex;flex-direction:column;gap:7px;flex:1;min-width:190px}.field label{font-size:12px;color:var(--muted)}input,select{width:100%;background:#091423;color:var(--text);border:1px solid #2a405d;border-radius:11px;padding:12px 13px;font:inherit;outline:none}input:focus,select:focus{border-color:var(--cyan);box-shadow:0 0 0 3px #57d7e81c}
.actions{display:flex;gap:10px;margin-top:18px}.btn{border:0;border-radius:12px;padding:13px 18px;font:inherit;font-weight:750;cursor:pointer;transition:.18s}.btn:disabled{opacity:.45;cursor:not-allowed}.primary{background:linear-gradient(120deg,#54d8e7,#6a9bff);color:#071321;flex:1;box-shadow:0 10px 28px #4ac9e533}.secondary{background:#1a2a42;color:#d9e7f8;border:1px solid #304660}.danger{background:#3a1c2a;color:#ffb7c1;border:1px solid #673247}
.note{font-size:12px;color:var(--muted);margin-top:13px}.status{margin-top:16px;padding:11px 13px;border-radius:11px;background:#0a1423;border:1px solid #263b55;color:var(--muted);font-size:13px}.status.good{color:#a4f1cb;border-color:#285b4b}.status.bad{color:#ffb6c0;border-color:#633344}
.transcript{grid-column:1/-1;min-height:260px}.transcript-head{display:flex;align-items:center;justify-content:space-between;gap:12px}.live-label{display:flex;align-items:center;gap:8px;color:var(--green);font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.wave{display:flex;align-items:center;gap:3px;height:20px}.wave i{display:block;width:3px;height:6px;border-radius:5px;background:var(--cyan);opacity:.45}.wave.active i{opacity:1;animation:pulse .75s ease-in-out infinite alternate}.wave i:nth-child(2){animation-delay:.12s}.wave i:nth-child(3){animation-delay:.24s}.wave i:nth-child(4){animation-delay:.36s}.wave i:nth-child(5){animation-delay:.48s}@keyframes pulse{to{height:18px}}
#transcript{width:100%;min-height:190px;resize:vertical;background:transparent;border:0;color:#f1f7ff;font:18px/1.65 Inter,system-ui,sans-serif;padding:12px 0;outline:none}#transcript::placeholder{color:#637b98}.footer{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;color:#647b97;font-size:11px;margin-top:18px}.footer a{color:#8da8c6}
@media(max-width:720px){.wrap{padding:18px 14px 34px}.top{margin-bottom:32px}.grid{grid-template-columns:1fr}.transcript{grid-column:auto}.hero{margin-bottom:22px}.hero h1{font-size:39px}.actions{flex-direction:column}.btn{width:100%}.route{gap:7px}.lang{padding:12px}.lang strong{font-size:16px}}
</style>
</head>
<body>
<main class="wrap">
<header class="top"><div class="brand"><div class="logo">↗</div><div><strong>LIVE INTERPRETER AI</strong><small>Realtime voice translation</small></div></div><div class="pill"><span class="dot" id="stateDot"></span><span id="stateText">LISTO PARA CONECTAR</span></div></header>
<section class="hero"><div class="eyebrow">Interpretación en tiempo real</div><h1>Escucha. Comprende.<br><span style="color:var(--cyan)">Conecta.</span></h1><p>Traducción de voz continua al español con audio de baja latencia. Usa audífonos para escuchar la interpretación sin interferir con el micrófono.</p></section>
<section class="grid">
<div class="panel"><h2>Dirección de interpretación</h2><div class="route"><div class="lang"><small>IDIOMA DE ENTRADA</small><strong>Automático</strong></div><div class="arrow">→</div><div class="lang"><small>IDIOMA DE SALIDA</small><strong>Español</strong></div></div><div class="note">El motor detecta el idioma hablado y genera la interpretación en español.</div></div>
<div class="panel"><h2>Dispositivos de audio</h2><div class="controls"><div class="field"><label for="mic">Micrófono de entrada</label><select id="mic"><option value="">Predeterminado</option></select></div><div class="field"><label for="speaker">Salida de audio</label><select id="speaker"><option value="">Predeterminada</option></select></div></div><div class="note">Selecciona tus audífonos Bluetooth o la salida por cable cuando estén conectados.</div></div>
<div class="panel"><h2>Acceso seguro</h2><div class="field"><label for="pin">Código de acceso de la aplicación</label><input id="pin" type="password" autocomplete="current-password" placeholder="Código configurado en Cloudflare"></div><div class="note">El código protege la creación de sesiones y el consumo de API.</div><div class="actions"><button class="btn primary" id="start">▶ Iniciar interpretación</button><button class="btn danger" id="stop" disabled>■ Detener</button></div><div class="status" id="status">Esperando configuración de Cloudflare.</div></div>
<div class="panel"><h2>Sesión</h2><div class="route"><div class="lang"><small>MOTOR</small><strong>GPT Realtime Translate</strong></div><div class="lang"><small>DESTINO</small><strong>Español (ES)</strong></div></div><div class="note">La conexión de audio utiliza WebRTC. El audio original se procesa en tiempo real y la voz traducida se reproduce en la salida seleccionada.</div></div>
<div class="panel transcript"><div class="transcript-head"><h2 style="margin:0">Interpretación en español</h2><div class="live-label"><span class="wave" id="wave"><i></i><i></i><i></i><i></i><i></i></span><span>EN VIVO</span></div></div><textarea id="transcript" readonly placeholder="Aquí aparecerá el texto traducido conforme avance la conversación..."></textarea><div class="footer"><span id="elapsed">Sesión no iniciada</span><button class="btn secondary" id="clear" style="padding:6px 10px;font-size:11px">Limpiar texto</button></div></div>
</section>
<footer class="footer"><span>Live Interpreter AI · Primera versión funcional</span><span>El audio no se almacena en esta versión.</span></footer>
</main>
<script>
(function(){
const $=id=>document.getElementById(id);
let pc=null,stream=null,remoteAudio=null,startedAt=0,elapsedTimer=null;
function setStatus(message,type){$('status').textContent=message;$('status').className='status '+(type||'');}
function setState(text,on){$('stateText').textContent=text;$('stateDot').className='dot'+(on?' on':'');}
function elapsed(){if(!startedAt)return;$('elapsed').textContent='Sesión activa · '+Math.floor((Date.now()-startedAt)/1000)+' s';}
async function devices(){
 if(!navigator.mediaDevices||!navigator.mediaDevices.enumerateDevices)return;
 try{const list=await navigator.mediaDevices.enumerateDevices();const mic=$('mic'),speaker=$('speaker');const mv=mic.value,sv=speaker.value;
 mic.innerHTML='<option value="">Predeterminado</option>';speaker.innerHTML='<option value="">Predeterminada</option>';
 list.forEach(d=>{if(d.kind==='audioinput'){const o=document.createElement('option');o.value=d.deviceId;o.textContent=d.label||'Micrófono';mic.appendChild(o)}if(d.kind==='audiooutput'){const o=document.createElement('option');o.value=d.deviceId;o.textContent=d.label||'Salida de audio';speaker.appendChild(o)}});
 mic.value=mv;speaker.value=sv;
 }catch(e){}
}
async function start(){
 $('start').disabled=true;setStatus('Solicitando acceso al micrófono...');setState('CONECTANDO',false);
 try{
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error('El navegador no permite acceder al micrófono. Usa HTTPS y concede el permiso.');
  const pin=$('pin').value.trim();if(!pin)throw new Error('Introduce el código de acceso.');
  const sessionResponse=await fetch('/api/session',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({pin:pin,targetLanguage:'es'})});
  const sessionData=await sessionResponse.json().catch(()=>({}));
  if(!sessionResponse.ok)throw new Error(sessionData.error||'No fue posible crear la sesión.');
  const token=sessionData.value;if(!token)throw new Error('Cloudflare no devolvió el token temporal.');
  const selectedMic=$('mic').value;
  stream=await navigator.mediaDevices.getUserMedia({audio:selectedMic?{deviceId:{exact:selectedMic},echoCancellation:true,noiseSuppression:true,autoGainControl:true}:{echoCancellation:true,noiseSuppression:true,autoGainControl:true}});
  pc=new RTCPeerConnection();
  stream.getAudioTracks().forEach(track=>pc.addTrack(track,stream));
  remoteAudio=new Audio();remoteAudio.autoplay=true;remoteAudio.playsInline=true;
  pc.ontrack=async event=>{remoteAudio.srcObject=event.streams[0];const output=$('speaker').value;if(output&&remoteAudio.setSinkId){try{await remoteAudio.setSinkId(output)}catch(e){setStatus('Audio conectado; el navegador no permitió cambiar la salida.','bad')}}await remoteAudio.play().catch(()=>{});};
  pc.onconnectionstatechange=()=>{if(pc&&pc.connectionState==='connected'){setStatus('Interpretación activa. Habla normalmente.','good');setState('INTERPRETANDO',true);$('wave').classList.add('active')}else if(pc&&['failed','disconnected'].includes(pc.connectionState)){setStatus('La conexión de audio se interrumpió.','bad');}};
  const events=pc.createDataChannel('translation-events');
  events.onmessage=({data})=>{try{const event=JSON.parse(data);if(event.type==='session.output_transcript.delta'){$('transcript').value+=event.delta;$('transcript').scrollTop=$('transcript').scrollHeight;}if(event.type==='error'){setStatus((event.error&&event.error.message)||'Error del motor de traducción.','bad');}}catch(e){}};
  const offer=await pc.createOffer();await pc.setLocalDescription(offer);
  const answer=await fetch('https://api.openai.com/v1/realtime/translations/calls',{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/sdp'},body:offer.sdp});
  if(!answer.ok)throw new Error('OpenAI Realtime: '+(await answer.text()));
  await pc.setRemoteDescription({type:'answer',sdp:await answer.text()});
  startedAt=Date.now();elapsedTimer=setInterval(elapsed,1000);elapsed();
  $('stop').disabled=false;setStatus('Conectando el flujo de audio...');await devices();
 }catch(e){await stop(false);setStatus(e.message||'No se pudo iniciar la interpretación.','bad');setState('ERROR',false);$('start').disabled=false;}
}
async function stop(reset){
 if(pc){pc.ontrack=null;pc.close();pc=null;}
 if(stream){stream.getTracks().forEach(t=>t.stop());stream=null;}
 if(remoteAudio){remoteAudio.pause();remoteAudio.srcObject=null;remoteAudio=null;}
 if(elapsedTimer){clearInterval(elapsedTimer);elapsedTimer=null;}
 startedAt=0;$('elapsed').textContent='Sesión detenida';$('stop').disabled=true;$('start').disabled=false;$('wave').classList.remove('active');setState('LISTO PARA CONECTAR',false);
 if(reset!==false)setStatus('Sesión detenida.');
}
$('start').addEventListener('click',start);$('stop').addEventListener('click',()=>stop(true));$('clear').addEventListener('click',()=>$('transcript').value='');
$('speaker').addEventListener('change',async()=>{if(remoteAudio&&remoteAudio.setSinkId){try{await remoteAudio.setSinkId($('speaker').value)}catch(e){setStatus('No se pudo cambiar la salida de audio.','bad')}}});
navigator.mediaDevices&&navigator.mediaDevices.addEventListener&&navigator.mediaDevices.addEventListener('devicechange',devices);
devices();
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));
fetch('/api/health').then(r=>r.json()).then(d=>{if(d.configured)setStatus('Configuración de Cloudflare detectada. Introduce tu código para comenzar.','good');else setStatus('Falta configurar OPENAI_API_KEY y APP_PIN en los secretos del Worker.','bad')}).catch(()=>setStatus('No se pudo consultar el estado del servidor.','bad'));
window.addEventListener('beforeunload',()=>stop(false));
})();
</script>
</body></html>\`;

const MANIFEST = {
  name: "Live Interpreter AI",
  short_name: "Interpreter",
  start_url: "/",
  display: "standalone",
  background_color: "#080d18",
  theme_color: "#080d18",
  description: "Interpretación de voz en tiempo real al español."
};

const SW = \`const CACHE='live-interpreter-shell-v1';self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['/','/manifest.webmanifest']))));self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==location.origin||u.pathname.startsWith('/api/'))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match('/'))));});\`;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: { "Access-Control-Allow-Origin": url.origin, "Access-Control-Allow-Methods": "GET,POST,OPTIONS", "Access-Control-Allow-Headers": "Content-Type" } });
    }
    if (request.method === "GET" && url.pathname === "/") {
      return new Response(APP_HTML, { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", "Referrer-Policy": "strict-origin-when-cross-origin" } });
    }
    if (request.method === "GET" && url.pathname === "/manifest.webmanifest") {
      return new Response(JSON.stringify(MANIFEST), { headers: { "Content-Type": "application/manifest+json", "Cache-Control": "public, max-age=3600" } });
    }
    if (request.method === "GET" && url.pathname === "/sw.js") {
      return new Response(SW, { headers: { "Content-Type": "application/javascript; charset=utf-8", "Service-Worker-Allowed": "/", "Cache-Control": "no-cache" } });
    }
    if (request.method === "GET" && url.pathname === "/api/health") {
      return json({ ok: true, configured: Boolean(env.OPENAI_API_KEY && env.APP_PIN), service: "live-interpreter-ai" });
    }
    if (request.method === "POST" && url.pathname === "/api/session") {
      if (!env.OPENAI_API_KEY || !env.APP_PIN) return json({ error: "El administrador debe configurar OPENAI_API_KEY y APP_PIN en Cloudflare Workers > Settings > Variables and Secrets." }, 503);
      let body;
      try { body = await request.json(); } catch { return json({ error: "Solicitud JSON inválida." }, 400); }
      if (typeof body.pin !== "string" || body.pin !== env.APP_PIN) return json({ error: "Código de acceso incorrecto." }, 401);
      const upstream = await fetch("https://api.openai.com/v1/realtime/translations/client_secrets", {
        method: "POST",
        headers: { "Authorization": "Bearer " + env.OPENAI_API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({ session: { model: "gpt-realtime-translate", audio: { output: { language: "es" } } } })
      });
      const result = await upstream.json().catch(() => ({}));
      if (!upstream.ok) return json({ error: result.error?.message || "OpenAI no pudo crear la sesión temporal." }, upstream.status);
      return json(result);
    }
    return new Response("Not found", { status: 404 });
  }
};