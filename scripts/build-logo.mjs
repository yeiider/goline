// Genera los archivos SVG del logo de Goline a partir de Sora (texto convertido a trazos).
// Uso: npm run logo (opcional: node scripts/build-logo.mjs <ruta a un .woff>)
import opentype from 'opentype.js';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const fontPath = process.argv[2] ?? new URL('../node_modules/@fontsource/sora/files/sora-latin-700-normal.woff', import.meta.url).pathname;
const font = opentype.parse(readFileSync(fontPath).buffer);
const root = process.env.LOGO_OUT ? new URL(`file://${process.env.LOGO_OUT}/`) : new URL('../public/', import.meta.url);
const out = new URL('brand/', root);
mkdirSync(out, { recursive: true });

const C = { ink: '#0B0B1A', paper: '#F6F5FB', volt: '#3B5BFF', iris: '#8A5CFF', ember: '#FF6A3D' };

// Isotipo: una "G" trazada como una sola línea que termina en un nodo (la idea de "línea" + neurona).
const markPaths = (stroke, node) => `
  <path d="M46.14 15.15A22 22 0 1 0 54 32H42" fill="none" stroke="${stroke}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="32" cy="32" r="5" fill="${node}"/>`;
const gradDefs = (id) => `
  <defs>
    <linearGradient id="${id}" x1="8" y1="8" x2="58" y2="56" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${C.volt}"/>
      <stop offset=".5" stop-color="${C.iris}"/>
      <stop offset="1" stop-color="${C.ember}"/>
    </linearGradient>
  </defs>`;

// Logotipo: "goline" con la "i" sin punto; el punto es el nodo lima del isotipo.
const size = 48, tracking = -0.035 * size;
let x = 0; const parts = []; let dotX = 0, stemTop = 0;
for (const ch of 'golıne') {
  const g = font.charToGlyph(ch);
  const p = g.getPath(x, 0, size);
  parts.push(p.toPathData(2));
  if (ch === 'ı') { const b = p.getBoundingBox(); dotX = (b.x1 + b.x2) / 2; stemTop = b.y1; }
  x += g.advanceWidth * (size / font.unitsPerEm) + tracking;
}
const wordW = x - tracking;
const word = parts.join('');
const dot = (fill) => `<circle cx="${dotX.toFixed(2)}" cy="${(stemTop - 8.6).toFixed(2)}" r="4.6" fill="${fill}"/>`;

const svg = (w, h, body, vb = `0 0 ${w} ${h}`) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${w}" height="${h}" role="img" aria-label="Goline">${body}\n</svg>\n`;

const mark = svg(64, 64, gradDefs('g') + markPaths('url(#g)', C.ember));
const markMono = (c) => svg(64, 64, markPaths(c, c));
const favicon = svg(64, 64, gradDefs('g') + `<rect width="64" height="64" rx="16" fill="${C.ink}"/>` + `<g transform="translate(6 6) scale(.8125)">${markPaths('url(#g)', C.ember)}</g>`);

// Lockup horizontal: isotipo 64px + espacio + palabra (alineada a la línea base).
const gap = 16, baseY = 45, totalW = Math.ceil(64 + gap + wordW + 2), totalH = 64;
const lockup = (wordFill, dotFill, markStroke = 'url(#g)', markNode = dotFill, defs = true) => svg(totalW, totalH,
  (defs ? gradDefs('g') : '') + markPaths(markStroke, markNode) +
  `\n  <g transform="translate(${64 + gap} ${baseY})"><path d="${word}" fill="${wordFill}"/>${dot(dotFill)}</g>`);

// Lockup vertical
const vW = Math.ceil(Math.max(wordW, 96) + 8), vH = 96 + 16 + 48;
const vertical = (wordFill) => svg(vW, vH,
  gradDefs('g') + `<g transform="translate(${(vW - 96) / 2} 0) scale(1.5)">${markPaths('url(#g)', C.ember)}</g>` +
  `\n  <g transform="translate(${(vW - wordW) / 2} ${96 + 16 + 34})"><path d="${word}" fill="${wordFill}"/>${dot(C.ember)}</g>`);

const files = {
  'goline-mark.svg': mark,
  'goline-mark-white.svg': markMono('#FFFFFF'),
  'goline-mark-ink.svg': markMono(C.ink),
  'goline-logo.svg': lockup('#FFFFFF', C.ember),
  'goline-logo-dark.svg': lockup(C.ink, C.ink),
  'goline-logo-white.svg': lockup('#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', false),
  'goline-mark-dark.svg': svg(64, 64, gradDefs('g') + markPaths('url(#g)', C.ink)),
  'goline-logo-vertical.svg': vertical('#FFFFFF'),
  'goline-wordmark.svg': svg(Math.ceil(wordW + 2), 56, `<g transform="translate(0 46)"><path d="${word}" fill="#FFFFFF"/>${dot(C.ember)}</g>`),
};
for (const [n, s] of Object.entries(files)) writeFileSync(new URL(n, out), s);
writeFileSync(new URL('favicon.svg', root), favicon);
console.log('ok', Object.keys(files).length + 1, 'archivos; ancho palabra', wordW.toFixed(1));
