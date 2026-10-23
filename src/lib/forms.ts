// Envío de formularios desde el navegador, con reCAPTCHA v3 cuando hay clave configurada.
declare global {
  interface Window {
    grecaptcha?: { ready(cb: () => void): void; execute(key: string, opts: { action: string }): Promise<string> };
  }
}

let loader: Promise<void> | null = null;

function siteKey() {
  return document.querySelector<HTMLMetaElement>('meta[name="recaptcha-key"]')?.content ?? '';
}

function loadRecaptcha(key: string) {
  loader ??= new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = `https://www.google.com/recaptcha/api.js?render=${key}`;
    s.async = true;
    s.onload = () => window.grecaptcha!.ready(resolve);
    s.onerror = () => reject(new Error('reCAPTCHA no cargó'));
    document.head.append(s);
  });
  return loader;
}

export async function submitJSON(url: string, data: Record<string, unknown>, action: string) {
  try {
    const key = siteKey();
    let token = '';
    if (key) {
      await loadRecaptcha(key);
      token = await window.grecaptcha!.execute(key, { action });
    }
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, token, action }),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
    return {
      success: Boolean(json.success),
      message: json.message ?? (res.ok ? 'Listo.' : 'No pudimos enviar el formulario. Inténtalo de nuevo en unos minutos.'),
    };
  } catch {
    return { success: false, message: 'No pudimos conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.' };
  }
}
