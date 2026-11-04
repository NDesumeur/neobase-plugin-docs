// NeoDocs : ton appli d'origine (HTML et code inchangés), livrée en plugin.
// Ses données sont dans le dossier du plugin, que NeoDex sauvegarde (synchro cloud et sauvegardes) ; à la première ouverture elle reprend ce que tu avais dans NeoDex.
// Elle tourne dans le bac à sable de NeoDex, avec ses outils d'interface (ctx.host) et seulement les autorisations de son plugin.json.
const HTML = "";
/*CSS-MOVED*/ const CSS = `.ofMenu .tbtn{justify-content:flex-start;font:14px var(--text);letter-spacing:0}
.ofDropM .tbtn{justify-content:flex-start;font:14px var(--text);letter-spacing:0}
.ofApp{display:flex;background:var(--bg0)}
.ofSide{width:260px;flex:none;display:flex;flex-direction:column;gap:10px;padding:18px 14px;border-right:3px solid var(--line);background:rgba(var(--d8),.6);overflow:hidden}
.ofSide .row{gap:8px}
.ofSide .btn{flex:1;padding:8px 6px;font-size:9px}
.ofSearch{padding:7px 10px;font-size:14px}
.ofList{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:2px;margin:0 -6px;padding:0 6px}
.ofItem{all:unset;cursor:var(--cp,pointer);display:flex;flex-direction:column;gap:2px;padding:8px 10px;color:var(--lilac)}
.ofItem .n{color:#fff;font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ofItem .hint{font-size:12px}
.ofItem:hover{background:rgba(255,255,255,.04)}
.ofItem.on{background:rgba(var(--mgr),.18);box-shadow:inset 3px 0 0 var(--magenta)}
.ofBody{flex:1;min-width:0;display:flex;flex-direction:column}
.ofEmpty{flex:1;display:grid;place-items:center;padding:30px}
.ofEmptyIn{max-width:520px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:14px}
.ofEmptyIn img{width:96px;height:96px;image-rendering:pixelated}
.ofEmptyIn h2{font:16px var(--title);color:#fff;margin:0}
.ofEmptyIn p{font-size:16px;line-height:1.5;margin:0}
.ofMain{flex:1;min-height:0;display:flex;flex-direction:column}
.f.ofTitle{margin:12px 16px 0;width:auto;align-self:stretch;font-size:18px;padding:8px 12px;background:transparent;box-shadow:none}
.ofTitle:focus{background:var(--field)}
.ofBar{display:flex;flex-wrap:wrap;gap:3px;align-items:center;padding:8px 14px;border-bottom:3px solid var(--line)}
.ofTb{all:unset;cursor:var(--cp,pointer);min-width:30px;height:30px;padding:0 7px;display:grid;place-items:center;color:var(--lilac);font-size:15px;background:var(--btn)}
.ofTb:hover{background:var(--btnh);color:#fff}
.ofTb.on{background:rgba(var(--mgr),.4);color:#fff}
.ofTb.b{font-weight:bold}
.ofTb.i{font-style:italic}
.ofTb.u{text-decoration:underline}
.ofTb.s{text-decoration:line-through}
.ofSep{width:2px;height:22px;background:var(--line);margin:0 4px}
.ofSel{height:30px;padding:0 6px;font-size:14px}
.ofColor{width:30px;height:30px;padding:0;border:0;background:none;cursor:var(--cp,pointer)}
.ofDrop{position:relative}
.ofDrop .ofTb{font-size:14px}
.ofDropM{position:absolute;top:34px;left:0;z-index:20;--fill:var(--win);--c:var(--line2);display:none;flex-direction:column;min-width:210px;padding:6px;filter:drop-shadow(0 4px 0 var(--out))}
.ofDrop.on .ofDropM{display:flex}
.ofDropM .tbtn{padding:8px 10px}
.ofDropM .tbtn:hover{background:rgba(var(--mgr),.16);color:#fff}
.ofStatus{padding:6px 16px;font-size:13px;color:var(--muted);border-top:3px solid var(--line)}
.dcRow{flex:1;min-height:0;display:flex}
.dcWrap{flex:1;overflow:auto;background:#2a2238;padding:28px 0 60px}
.dcPage{width:794px;min-height:1123px;margin:0 auto;padding:90px 96px;background:#fff;color:#1d1d1f;font:12pt/1.5 Calibri,'Segoe UI',Arial,sans-serif;box-shadow:0 6px 0 rgba(0,0,0,.35);outline:none;user-select:text;cursor:text;
  background-image:repeating-linear-gradient(#fff 0 1123px,#2a2238 1123px 1141px);background-size:100% 1141px}
.dcPage :is(h1,h2,h3,h4,p,li,blockquote,td,th){font-family:inherit;letter-spacing:normal;text-shadow:none;text-transform:none}
.dcPage :is(h1,h2,h3){color:#1d1d1f;line-height:1.25}
.dcPage h1{font-size:24pt;margin:.6em 0 .3em}
.dcPage h2{font-size:18pt;margin:.6em 0 .3em}
.dcPage h3{font-size:14pt;margin:.6em 0 .3em}
.dcPage p{margin:0 0 .6em}
.dcPage blockquote{margin:.6em 0;padding:.2em 1em;border-left:4px solid #b44cff;color:#444}
.dcPage pre{background:#f3eefc;padding:.6em .8em;font:10.5pt Consolas,monospace;white-space:pre-wrap}
.dcPage table{border-collapse:collapse;width:100%;margin:.6em 0}
.dcPage td,.dcPage th{border:1px solid #9a90b0;padding:4px 8px;vertical-align:top;min-width:40px}
.dcPage img{max-width:100%;cursor:pointer}
.dcPage img.dcSel{outline:3px solid #b44cff}
.dcPage ul.dcCheck{list-style:none;padding-left:1.4em}
.dcPage ul.dcCheck li{position:relative}
.dcPage ul.dcCheck li::before{content:'';position:absolute;left:-1.4em;top:.3em;width:.8em;height:.8em;border:2px solid #6b5a90;border-radius:2px;cursor:pointer}
.dcPage ul.dcCheck li.done{color:#888;text-decoration:line-through}
.dcPage ul.dcCheck li.done::before{background:#b44cff;border-color:#b44cff}
.dcPage .dcBreak{border:0;border-top:2px dashed #c8b8e8;margin:1.2em 0}
.dcPage a{color:#6a2bd8}
.dcPage hr{border:0;border-top:1px solid #bbb}
.dcOutline{width:230px;flex:none;--fill:var(--win);display:none;flex-direction:column;gap:4px;padding:14px;overflow-y:auto}
.dcOutline.on{display:flex}
.dcOl{all:unset;cursor:var(--cp,pointer);color:var(--lilac);font-size:14px;padding:4px 6px}
.dcOl:hover{color:#fff;background:rgba(var(--mgr),.15)}
.dcOl.l2{padding-left:18px}
.dcOl.l3{padding-left:30px;font-size:13px}
.dcFind{display:none;gap:6px;align-items:center;padding:8px 14px;--fill:var(--win)}
.dcFind.on{display:flex}
.dcFind input{width:200px;padding:6px 10px;font-size:14px}
.dcFind .btn{padding:6px 10px;font-size:9px}
.shGrid td.num{text-align:right}
`;  // le style de ce plugin (il utilise les variables du thème de NeoDex)
export default async function (ctx) {
  const view = ctx.view;
  if (!ctx.host) { view.textContent = "Ce plugin doit être approuvé par NeoDex pour s'ouvrir."; return; }
  const host = ctx.host, { el, toast, sfx, ask, newTab, pixIcon, PIX, WX } = host;
  const nbConfirm = host.confirm;  // la boîte de confirmation de NeoDex, à la place de celle de Windows
  const folder = ctx.folder, legacy = ctx.legacy || {};
  ctx.host.addStyle(CSS);
  view.innerHTML = HTML;
  const $ = id => id === "docsApp" ? view : (view.querySelector('#' + id) || document.getElementById(id));  // les identifiants de ta vue d'abord, puis ceux de la page (fenêtres, menus)
  const doc = async n => { try { return await folder.read(n); } catch { return null; } };
  const __icon = () => ctx.icon;  // l'icône de ce plugin
  const __picks = { "office": d => ({...d, files: (d.files || []).filter(f => f.kind === 'doc')}), "tools": d => ({ text: d.text }) };
  const __storeGet = async n => {
    let d = await doc(n);
    if (d == null) { try { d = await neo.storeGet(n); } catch { d = null; } if (d && __picks[n]) d = __picks[n](d); if (d != null) await folder.write(n, d); }  // première ouverture : tu retrouves ce que tu avais
    return d;
  };
  const __storeSet = async (n, d) => { await folder.write(n, d); return true; };
  // ---- ton code d'origine ----
let tools = null, toolsTimer = null;
const toolsReady = () => tools ? Promise.resolve(tools) : __storeGet('tools').then(d => tools = {text: {a: '', b: '', count: '', spell: '', ignore: []}, colors: {palettes: [], history: [], cur: '#e01ec8'}, gifs: {items: []}, ...(d || {})});
function toolsSave() { clearTimeout(toolsTimer); toolsTimer = setTimeout(() => { toolsTimer = null; __storeSet('tools', tools).catch(e => toast('Sauvegarde impossible : ' + e.message, true)); }, 600); }
addEventListener('pagehide', () => { if (toolsTimer) __storeSet('tools', tools); });
const toolCount = k => host.statCount(k);
const toolTabs = (box, tabs, cur, f) => { box.replaceChildren(...tabs.map(([k, l]) => { const b = el('button', 'tab px' + (k === cur ? ' on' : ''), l); b.onclick = () => f(k); return b; })); };

async function spellList(text) { await toolsReady(); const ign = new Set(tools.text.ignore.map(w => w.toLowerCase())); return text.trim() ? (await window.neo.spellText(text)).filter(x => !ign.has(x.w.toLowerCase())) : []; }

function neoFindRun(root, q, o, step) {
  const H = window.__neoFind ||= {ranges: [], i: -1, key: '', mirrors: []};
  if (!H.css) {  // a stylesheet object: a website's security rules may refuse a <style> added to its page
    const s = new CSSStyleSheet(); s.replaceSync('::highlight(neo-find){background:#ffd07a;color:#1a0630}::highlight(neo-find-cur){background:#ff5ad9;color:#fff}');
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, s]; H.css = true;
  }
  const unmirror = () => { for (const m of H.mirrors) m.remove(); H.mirrors = []; if (H.place) { removeEventListener('scroll', H.place, true); removeEventListener('resize', H.place); H.place = null; } };
  const clear = () => { CSS.highlights?.delete('neo-find'); CSS.highlights?.delete('neo-find-cur'); unmirror(); H.ranges = []; H.i = -1; H.key = ''; };
  if (!q) { clear(); return {n: 0, i: -1}; }
  const key = q + '\u0000' + JSON.stringify(o);
  if (key !== H.key || step === 0) {
    let re;
    try {
      const src = o.regex ? q : q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      re = new RegExp(o.word ? '(?<![\\p{L}\\p{N}_])(?:' + src + ')(?![\\p{L}\\p{N}_])' : src, 'gu' + (o.caseSens ? '' : 'i'));
    } catch (e) { clear(); return {n: 0, i: -1, error: 'expression invalide'}; }
    unmirror();
    const ranges = [], seen = new Map(), visible = el => {  // hidden parts of the page are not searched
      if (!seen.has(el)) { const cs = getComputedStyle(el); seen.set(el, cs.display !== 'none' && cs.visibility !== 'hidden' && el.getClientRects().length > 0); }
      return seen.get(el);
    };
    const scan = (n, field) => {
      re.lastIndex = 0;
      for (let m; (m = re.exec(n.data)) && ranges.length < 5000;) {
        if (!m[0].length) { re.lastIndex++; continue; }  // a regex matching the empty string would loop forever
        const r = new Range(); r.setStart(n, m.index); r.setEnd(n, m.index + m[0].length); if (field) { r.field = field; r.s = m.index; r.e = r.s + m[0].length; } ranges.push(r);
      }
    };
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {acceptNode: n => !n.data.trim() || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(n.parentNode.nodeName) || !visible(n.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT});
    for (let n; (n = w.nextNode()) && ranges.length < 5000;) scan(n);
    // a text field holds its text outside the page: a copy of it lies over the field, transparent but for its highlights
    const fields = [...root.querySelectorAll('textarea')].filter(f => f.value && visible(f) && (re.lastIndex = 0, re.test(f.value)));
    for (const f of fields) {
      const m = document.createElement('div'), cs = getComputedStyle(f); m.textContent = f.value + '\n'; f.neoMirror = m;
      for (const k of ['font', 'lineHeight', 'letterSpacing', 'wordSpacing', 'tabSize', 'textIndent', 'textAlign', 'textTransform', 'wordBreak', 'overflowWrap', 'whiteSpace', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']) m.style[k] = cs[k];
      Object.assign(m.style, {position: 'fixed', zIndex: 5, boxSizing: 'border-box', margin: 0, overflow: 'hidden', color: 'transparent', background: 'none', pointerEvents: 'none'});
      f.after(m); H.mirrors.push(m); f.addEventListener('input', () => m.remove(), {once: true});  // a field being edited no longer matches its copy
      scan(m.firstChild, f);
    }
    if (fields.length) {
      H.place = () => { for (const f of fields) { const b = f.getBoundingClientRect(), m = f.neoMirror; Object.assign(m.style, {left: b.left + f.clientLeft + 'px', top: b.top + f.clientTop + 'px', width: f.clientWidth + 'px', height: f.clientHeight + 'px'}); m.scrollTop = f.scrollTop; } };
      H.place(); addEventListener('scroll', H.place, true); addEventListener('resize', H.place);
    }
    H.ranges = ranges; H.key = key; H.i = -1;
    CSS.highlights?.set('neo-find', new Highlight(...ranges));
    if (step === 0) step = 1;
  }
  const n = H.ranges.length;
  if (!n) { CSS.highlights?.delete('neo-find-cur'); return {n: 0, i: -1}; }
  H.i = ((H.i + step) % n + n) % n;
  const r = H.ranges[H.i];
  CSS.highlights?.set('neo-find-cur', new Highlight(r));
  if (r.field) {  // the selection waits for the field to get the focus; the keyboard stays in the find bar
    const f = r.field, m = f.neoMirror; r.field.setSelectionRange(r.s, r.e);
    f.scrollTop += r.getBoundingClientRect().top - m.getBoundingClientRect().top - f.clientHeight / 3; m.scrollTop = f.scrollTop;
    return {n, i: H.i};
  }
  const b = r.getBoundingClientRect();
  if (b.top < 60 || b.bottom > innerHeight - 40 || b.left < 0 || b.right > innerWidth) r.startContainer.parentElement?.scrollIntoView({block: 'center', inline: 'nearest'});
  return {n, i: H.i};
}

/* Office suite (NeoDocs, NeoSheets, NeoSlides): every file lives in office.json = {files: [{id, kind: 'doc' | 'sheet' | 'slides', name, created, t, data}]},
   synced between PCs and in the backups like the other data (more-main.js). This file holds what the three apps share:
   the store, and the page of each app (list of its files on the left: new, open a Word / Excel file, rename, duplicate, delete). */
let office = null, officeTimer = null;
const ofId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const officeReady = () => office ? Promise.resolve(office) : __storeGet('office').then(d => office = Array.isArray(d?.files) ? d : {files: []});
function officeSave() {
  clearTimeout(officeTimer);
  officeTimer = setTimeout(() => { officeTimer = null; __storeSet('office', office).catch(e => toast('Sauvegarde impossible : ' + e.message, true)); }, 600);
}
const officeFlush = () => { if (officeTimer) { clearTimeout(officeTimer); officeTimer = null; return __storeSet('office', office); } };
addEventListener('pagehide', () => { if (officeTimer) __storeSet('office', office); });
const OF_KIND = {};  // kind -> app ({key, name, newData(), open(file), close(), ui})
// another PC changed office.json: take it (unless a save of this PC is waiting), the file on screen is reopened
window.neo?.onDataChanged(async name => {
  if (name !== 'office' || officeTimer) return;
  const d = await __storeGet('office');
  if (!Array.isArray(d?.files) || JSON.stringify(d) === JSON.stringify(office)) return;
  office = d;
  for (const k of Object.values(OF_KIND)) if (k.ui) { ofList(k); const f = office.files.find(f => f.id === k.cur?.id); if (f && f.t !== k.cur.t) k.open(f); else if (!f && k.cur) ofPick(k, null); }
  toast('Mis à jour depuis un autre PC');
});
const ofWhen = t => { const d = new Date(t), now = new Date(); return d.toDateString() === now.toDateString() ? d.toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'}) : d.toLocaleDateString('fr-FR', {day: 'numeric', month: 'short', year: d.getFullYear() === now.getFullYear() ? undefined : 'numeric'}); };
const ofFiles = k => office.files.filter(f => f.kind === k.kind).sort((a, b) => b.t - a.t);
function ofTouch(k, file) { file.t = Date.now(); officeSave(); ofList(k); }
function ofList(k) {
  const q = k.ui.search.value.trim().toLowerCase(), list = ofFiles(k).filter(f => !q || f.name.toLowerCase().includes(q));
  k.ui.list.replaceChildren(...(list.length ? list.map(f => {
    const b = el('button', 'ofItem' + (f.id === k.cur?.id ? ' on' : ''));
    b.append(el('span', 'n', f.name), el('span', 'hint', ofWhen(f.t)));
    b.onclick = () => ofPick(k, f);
    b.oncontextmenu = e => { e.preventDefault(); ofPick(k, f); ofMenu(k, f, e); };
    return b;
  }) : [el('div', 'hint', q ? 'Aucun fichier ne correspond.' : 'Aucun fichier pour l\'instant. Crée-en un ou ouvre un fichier de ton PC.')]));
}
function ofPick(k, f) {
  k.cur = f; ofList(k);
  k.ui.empty.style.display = f ? 'none' : ''; k.ui.main.style.display = f ? '' : 'none';
  if (f) k.open(f); else k.close?.();
}
async function ofNew(k, name, data) {
  await officeReady();
  const f = {id: ofId(), kind: k.kind, name: name || k.newName + ' ' + (ofFiles(k).length + 1), created: Date.now(), t: Date.now(), data: data ?? k.newData()};
  office.files.push(f); officeSave(); ofPick(k, f); sfx('open');
  return f;
}
async function ofImport(k, test) {
  try {
    const r = await window.neo.officeImport(k.kind, test); if (!r) return null;
    const f = await ofNew(k, r.name, k.fromImport(r)); toast('« ' + r.name + ' » ouvert dans ' + k.name); return f;
  } catch (e) { toast('Ouverture impossible : ' + e.message.replace(/^.*Error: /, ''), true); return null; }
}
async function ofExport(k, format, test) {
  const f = k.cur; if (!f) return '';
  try {
    const p = await window.neo.officeExport({kind: k.kind, name: f.name, format, ...k.toExport(f, format)}, test);
    if (p) toast('Exporté : ' + p.split(/[\\/]/).pop());
    return p;
  } catch (e) { toast('Export impossible : ' + e.message.replace(/^.*Error: /, ''), true); return ''; }
}
function ofMenu(k, f, e) {
  document.querySelector('.ofMenu')?.remove();
  const m = el('div', 'tbPop ofMenu px on'), item = (label, fn) => { const b = el('button', 'tbtn tbFull', label); b.onclick = () => { m.remove(); fn(); }; m.append(b); };
  item('Renommer', async () => { const n = await ask('Nouveau nom', f.name); if (n?.trim()) { f.name = n.trim(); ofTouch(k, f); k.ui.title && (k.ui.title.value = f.name); } });
  item('Dupliquer', () => ofNew(k, f.name + ' (copie)', structuredClone(f.data)));
  item('Supprimer', async () => { if (!await nbConfirm('Supprimer « ' + f.name + ' » ? Ce sera aussi le cas sur tes autres PC synchronisés.')) return; office.files = office.files.filter(x => x !== f); officeSave(); ofPick(k, null); });
  m.style.left = Math.min(e.clientX, innerWidth - 240) + 'px'; m.style.top = Math.min(e.clientY, document.body.clientHeight - 160) + 'px'; m.style.right = 'auto';
  document.body.append(m);
  setTimeout(() => document.addEventListener('pointerdown', function off(ev) { if (!m.contains(ev.target)) { m.remove(); document.removeEventListener('pointerdown', off, true); } }, true));
}
// the page of an app: k = {key, kind, name, newName, newData, open, mount(main), fromImport, toExport, exports: [[format, label]]}
function ofRegister(k) {
  OF_KIND[k.kind] = k;
  const v = $(k.view), side = el('div', 'ofSide'), head = el('div', 'agHead'), newB = el('button', 'btn main px', '+ NOUVEAU'), openB = el('button', 'btn px', 'OUVRIR…');
  const search = el('input', 'f ofSearch'), list = el('div', 'ofList'), body = el('div', 'ofBody'), empty = el('div', 'ofEmpty'), main = el('div', 'ofMain');
  search.placeholder = 'Rechercher'; openB.title = k.openHint; newB.title = 'Nouveau fichier (enregistré tout seul et synchronisé)';
  head.append(el('span', 'label', k.name));
  const btns = el('div', 'row'); btns.append(newB, openB);
  side.append(head, btns, search, list);
  const big = el('div', 'ofEmptyIn');
  big.append(Object.assign(el('img'), {src: k.icon}), el('h2', '', k.name), el('p', 'hint', k.intro));
  const b2 = el('div', 'row'); const n2 = el('button', 'btn main px', '+ NOUVEAU'), o2 = el('button', 'btn px', 'OUVRIR UN FICHIER…'); b2.append(n2, o2); big.append(b2); empty.append(big);
  main.style.display = 'none';
  body.append(empty, main); v.replaceChildren(side, body); v.classList.add('ofApp');
  k.ui = {search, list, empty, main};
  newB.onclick = n2.onclick = () => ofNew(k);
  openB.onclick = o2.onclick = () => ofImport(k);
  search.oninput = () => ofList(k);
  k.mount(main);
}
async function ofOpen(kind) {
  const k = OF_KIND[kind]; await officeReady();
  ofList(k);
  if (!k.cur) { const f = ofFiles(k)[0]; if (f) ofPick(k, f); else ofPick(k, null); }
}
// a drop-down of buttons (used by the toolbars): [label, f] items
function ofDrop(label, items, title) {
  const w = el('div', 'ofDrop'), b = el('button', 'ofTb', label + ' ▾'), m = el('div', 'ofDropM px');
  b.title = title || '';
  for (const [l, f] of items) { const i = el('button', 'tbtn tbFull', l); i.onmousedown = e => e.preventDefault(); i.onclick = () => { w.classList.remove('on'); f(); }; m.append(i); }
  b.onmousedown = e => e.preventDefault();
  b.onclick = () => { const on = !w.classList.contains('on'); document.querySelectorAll('.ofDrop.on').forEach(d => d.classList.remove('on')); w.classList.toggle('on', on); };
  w.append(b, m); return w;
}
document.addEventListener('pointerdown', e => { if (!e.target.closest('.ofDrop')) document.querySelectorAll('.ofDrop.on').forEach(d => d.classList.remove('on')); }, true);
const ofBtn = (label, title, f, cls = '') => { const b = el('button', 'ofTb ' + cls, label); b.title = title; b.onmousedown = e => e.preventDefault(); b.onclick = f; return b; };  // mousedown: the text selection stays
const ofEsc = s => String(s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'})[c]);

/* NeoDocs, the word processor of the office suite: a white A4 page edited in place (styles, fonts, sizes, colours, lists, check lists, tables, images,
   links, page breaks), find and replace, outline, word count and the French / English spell checker (right click on an underlined word).
   Opens .docx / .html / .md / .txt, exports PDF, Word (.doc), HTML, text and Markdown. A document is {html} in office.json (office.js). */
const DC_FONTS = ['Calibri', 'Segoe UI', 'Arial', 'Verdana', 'Georgia', 'Times New Roman', 'Garamond', 'Trebuchet MS', 'Consolas', 'Comic Sans MS', 'Pixelify Sans'];
const DC_SIZES = [8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 64];
const DC_CSS = `body{font:12pt/1.5 Calibri,'Segoe UI',Arial,sans-serif;color:#1d1d1f}
h1{font-size:24pt;margin:.6em 0 .3em}h2{font-size:18pt;margin:.6em 0 .3em}h3{font-size:14pt;margin:.6em 0 .3em}p{margin:0 0 .6em}
blockquote{margin:.6em 0;padding:.2em 1em;border-left:4px solid #b44cff;color:#444}pre{background:#f3eefc;padding:.6em .8em;font:10.5pt Consolas,monospace;white-space:pre-wrap}
table{border-collapse:collapse;width:100%;margin:.6em 0}td,th{border:1px solid #9a90b0;padding:4px 8px;vertical-align:top;min-width:40px}img{max-width:100%}
ul.dcCheck{list-style:none;padding-left:1.4em}ul.dcCheck li{position:relative}ul.dcCheck li::before{content:'';position:absolute;left:-1.4em;top:.3em;width:.8em;height:.8em;border:2px solid #6b5a90;border-radius:2px}
ul.dcCheck li.done{color:#888;text-decoration:line-through}ul.dcCheck li.done::before{background:#b44cff;border-color:#b44cff}
.dcBreak{page-break-after:always;break-after:page;height:0;border:0}a{color:#6a2bd8}hr{border:0;border-top:1px solid #bbb}`;
const dc = {kind: 'doc', key: 'neodex:docs', view: 'docsApp', name: 'NeoDocs', newName: 'Document', openHint: 'Ouvrir un document Word (.docx), HTML, Markdown ou texte',
  intro: 'Traitement de texte : titres, polices, couleurs, listes, tableaux, images, recherche et remplacement, correcteur d\'orthographe. Tes documents sont enregistrés tout seuls et synchronisés entre tes PC ; tu peux les exporter en PDF ou en Word.',
  newData: () => ({html: '<h1>Sans titre</h1><p><br></p>'}),
  fromImport: r => ({html: dcClean(r.html) || '<p><br></p>'}),
  toExport(f, format) {
    const html = f.data.html, page = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>${ofEsc(f.name)}</title><style>${DC_CSS}${format === 'pdf' ? '' : 'body{max-width:760px;margin:40px auto;padding:0 24px}'}</style></head><body>${html}</body></html>`;
    if (format === 'txt') return {text: dcText(html)};
    if (format === 'md') return {text: dcMd(html)};
    if (format === 'doc') return {html: `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="utf-8"><style>${DC_CSS}</style></head><body>${html}</body></html>`};
    return {html: page};
  },
};
// pasted or imported HTML: only the content is kept (no scripts, styles of other pages or event handlers)
function dcClean(html) {
  const d = new DOMParser().parseFromString(html, 'text/html');
  d.querySelectorAll('script,style,meta,link,iframe,object,embed,form,input,button,title').forEach(n => n.remove());
  for (const n of d.body.querySelectorAll('*')) for (const a of [...n.attributes]) {
    if (/^on/i.test(a.name) || (a.name === 'href' && /^\s*javascript:/i.test(a.value)) || ['class', 'id', 'contenteditable'].includes(a.name) && !/^dc/.test(a.value)) n.removeAttribute(a.name);
  }
  return d.body.innerHTML.trim();
}
const dcText = html => { const d = el('div'); d.innerHTML = html.replace(/<(br|\/p|\/h\d|\/li|\/tr|\/blockquote|\/pre)[^>]*>/gi, '$&\n'); return d.textContent.replace(/\n{3,}/g, '\n\n').trim() + '\n'; };
function dcMd(html) {
  const d = el('div'); d.innerHTML = html;
  const inl = n => [...n.childNodes].map(c => c.nodeType === 3 ? c.data : c.nodeName === 'B' || c.nodeName === 'STRONG' ? '**' + inl(c) + '**' : c.nodeName === 'I' || c.nodeName === 'EM' ? '*' + inl(c) + '*'
    : c.nodeName === 'A' ? '[' + inl(c) + '](' + c.getAttribute('href') + ')' : c.nodeName === 'IMG' ? '![](' + (c.src.startsWith('data:') ? 'image' : c.src) + ')' : c.nodeName === 'BR' ? '  \n' : c.nodeName === 'CODE' ? '`' + c.textContent + '`' : inl(c)).join('');
  const out = [];
  for (const n of d.children) {
    const t = n.nodeName;
    if (/^H[1-6]$/.test(t)) out.push('#'.repeat(+t[1]) + ' ' + inl(n));
    else if (t === 'UL' || t === 'OL') out.push([...n.children].map((li, i) => (t === 'OL' ? (i + 1) + '. ' : n.classList.contains('dcCheck') ? (li.classList.contains('done') ? '- [x] ' : '- [ ] ') : '- ') + inl(li)).join('\n'));
    else if (t === 'BLOCKQUOTE') out.push('> ' + inl(n));
    else if (t === 'PRE') out.push('```\n' + n.textContent + '\n```');
    else if (t === 'HR') out.push('---');
    else if (t === 'TABLE') { const rows = [...n.rows].map(r => '| ' + [...r.cells].map(c => inl(c).replace(/\|/g, '\\|')).join(' | ') + ' |'); if (rows.length) rows.splice(1, 0, '|' + ' --- |'.repeat(n.rows[0].cells.length)); out.push(rows.join('\n')); }
    else out.push(inl(n));
  }
  return out.filter(s => s.trim()).join('\n\n') + '\n';
}
console.assert(dcMd('<h2>A</h2><p><b>x</b> y</p><ul class="dcCheck"><li class="done">z</li></ul>') === '## A\n\n**x** y\n\n- [x] z\n', 'dcMd');
console.assert(!dcClean('<p onclick="x()">a<script>b</script></p>').includes('onclick') && dcClean('<p>a<script>b</script></p>') === '<p>a</p>', 'dcClean');

dc.mount = main => {
  const bar = el('div', 'ofBar'), title = el('input', 'f ofTitle'), wrap = el('div', 'dcWrap'), page = el('div', 'dcPage'), status = el('div', 'ofStatus'), outline = el('div', 'dcOutline px');
  const fr = el('div', 'dcFind px');
  title.spellcheck = false; title.placeholder = 'Nom du document';
  page.contentEditable = 'true'; page.spellcheck = false; page.lang = 'fr';  // underlining: dcSpell
  const cmd = (c, v = null) => { page.focus(); document.execCommand(c, false, v); dcChanged(); };
  const sel = (cls, opts, f, title) => { const s = el('select', 'ofSel ' + cls); s.title = title; s.append(...opts.map(([v, l]) => Object.assign(el('option', '', l), {value: v}))); s.onchange = () => { f(s.value); }; return s; };
  const style = sel('dcStyle', [['p', 'Paragraphe'], ['h1', 'Titre 1'], ['h2', 'Titre 2'], ['h3', 'Titre 3'], ['blockquote', 'Citation'], ['pre', 'Code']], v => cmd('formatBlock', v), 'Style du paragraphe');
  const font = sel('dcFont', DC_FONTS.map(f => [f, f]), v => cmd('fontName', v), 'Police');
  const size = sel('dcSize', DC_SIZES.map(s => [s, s]), v => dcSize(+v), 'Taille du texte (points)');
  size.value = 12;
  const color = Object.assign(el('input', 'ofColor'), {type: 'color', value: '#1d1d1f', title: 'Couleur du texte'}), mark = Object.assign(el('input', 'ofColor'), {type: 'color', value: '#ffe066', title: 'Surligner'});
  color.oninput = () => cmd('foreColor', color.value); mark.oninput = () => cmd('hiliteColor', mark.value);
  const imgIn = Object.assign(el('input'), {type: 'file', accept: 'image/*', hidden: true});
  imgIn.onchange = () => { const f = imgIn.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => cmd('insertImage', r.result); r.readAsDataURL(f); imgIn.value = ''; };
  bar.append(
    ofBtn('↶', 'Annuler (Ctrl+Z)', () => cmd('undo')), ofBtn('↷', 'Rétablir (Ctrl+Y)', () => cmd('redo')), el('i', 'ofSep'),
    style, font, size, el('i', 'ofSep'),
    ofBtn('G', 'Gras (Ctrl+B)', () => cmd('bold'), 'b'), ofBtn('I', 'Italique (Ctrl+I)', () => cmd('italic'), 'i'), ofBtn('S', 'Souligné (Ctrl+U)', () => cmd('underline'), 'u'), ofBtn('B', 'Barré', () => cmd('strikeThrough'), 's'),
    ofBtn('x²', 'Exposant', () => cmd('superscript')), ofBtn('x₂', 'Indice', () => cmd('subscript')), color, mark, el('i', 'ofSep'),
    ofDrop('Aligner', [['À gauche', () => cmd('justifyLeft')], ['Centré', () => cmd('justifyCenter')], ['À droite', () => cmd('justifyRight')], ['Justifié', () => cmd('justifyFull')]], 'Alignement'),
    ofDrop('Listes', [['• Liste à puces', () => cmd('insertUnorderedList')], ['1. Liste numérotée', () => cmd('insertOrderedList')], ['☐ Liste de tâches', () => dcChecklist()], ['→ Augmenter le retrait', () => cmd('indent')], ['← Diminuer le retrait', () => cmd('outdent')]], 'Listes et retraits'),
    ofDrop('Insérer', [['Image (fichier)…', () => imgIn.click()], ['Image (lien)…', async () => { const u = await ask('Lien de l\'image'); if (u) cmd('insertImage', u); }],
      ['Tableau…', () => dcTable()], ['Lien…', async () => { const u = await ask('Adresse du lien', 'https://'); if (u) cmd('createLink', u); }], ['Ligne horizontale', () => cmd('insertHorizontalRule')],
      ['Saut de page', () => cmd('insertHTML', '<hr class="dcBreak"><p><br></p>')], ['Date du jour', () => cmd('insertText', new Date().toLocaleDateString('fr-FR', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}))]], 'Insérer'),
    ofDrop('Image', [['25 % de la largeur', () => dcImg('25%')], ['50 %', () => dcImg('50%')], ['75 %', () => dcImg('75%')], ['Pleine largeur', () => dcImg('100%')], ['Supprimer l\'image', () => { dc.img?.remove(); dc.img = null; dcChanged(); }]], 'Taille de l\'image cliquée'),
    ofBtn('⌫', 'Effacer la mise en forme', () => { cmd('removeFormat'); cmd('formatBlock', 'p'); }), el('i', 'ofSep'),
    ofBtn('🔍', 'Rechercher et remplacer (Ctrl+H dans le document)', () => dcFindOpen()), ofBtn('☰', 'Plan du document', () => { outline.classList.toggle('on'); dcOutline(); }),
    ofDrop('Zoom', [['75 %', () => dcZoom(.75)], ['100 %', () => dcZoom(1)], ['125 %', () => dcZoom(1.25)], ['150 %', () => dcZoom(1.5)]], 'Zoom'),
    ofDrop('Exporter', [['PDF…', () => ofExport(dc, 'pdf')], ['Word (.doc)…', () => ofExport(dc, 'doc')], ['Page web (.html)…', () => ofExport(dc, 'html')], ['Texte (.txt)…', () => ofExport(dc, 'txt')], ['Markdown (.md)…', () => ofExport(dc, 'md')]], 'Exporter le document'),
    imgIn);
  // find and replace inside the document
  const fq = el('input', 'f'), rq = el('input', 'f'), fcount = el('span', 'hint');
  fq.placeholder = 'Rechercher'; rq.placeholder = 'Remplacer par';
  const fbtn = (l, f) => { const b = el('button', 'btn px', l); b.onclick = f; return b; };
  fr.append(fq, rq, fbtn('SUIVANT', () => dcFind(1)), fbtn('REMPLACER', () => dcReplace(false)), fbtn('TOUT', () => dcReplace(true)), fcount, fbtn('X', () => { fr.classList.remove('on'); neoFindRun(page, '', {}, 0); }));
  fq.oninput = () => dcFind(0); fq.onkeydown = e => { if (e.key === 'Enter') dcFind(e.shiftKey ? -1 : 1); if (e.key === 'Escape') fr.classList.remove('on'); };
  wrap.append(page);
  main.append(title, bar, fr, el('div', 'dcRow'), status);
  main.querySelector('.dcRow').append(wrap, outline);
  Object.assign(dc, {page, title, status, outline, size, style, font, fr, fq, rq, fcount, wrap});
  title.oninput = () => { if (dc.cur) { dc.cur.name = title.value.trim() || 'Sans titre'; ofTouch(dc, dc.cur); } };
  page.oninput = dcChanged;
  page.onpaste = e => {
    const html = e.clipboardData.getData('text/html');
    if (html) { e.preventDefault(); document.execCommand('insertHTML', false, dcClean(html)); dcChanged(); }
  };
  page.onclick = e => {
    dc.img = e.target.nodeName === 'IMG' ? e.target : null;
    page.querySelectorAll('img.dcSel').forEach(i => i.classList.remove('dcSel')); dc.img?.classList.add('dcSel');
    const li = e.target.closest('ul.dcCheck > li');
    if (li && e.offsetX < 0) { li.classList.toggle('done'); dcChanged(); }  // the box is drawn left of the item
    const a = e.target.closest('a');
    if (a && (e.ctrlKey || e.metaKey)) newTab(a.href);
  };
  page.onkeydown = e => { if (e.ctrlKey && e.key === 'h') { e.preventDefault(); dcFindOpen(); } if (e.key === 'Tab') { e.preventDefault(); cmd(e.shiftKey ? 'outdent' : 'indent'); } };
  document.addEventListener('selectionchange', () => { if (dc.cur && page.contains(getSelection().anchorNode)) dcToolbarState(); });
};
let dcTimer = null;
function dcChanged() {
  if (!dc.cur) return;
  dc.cur.data.html = dc.page.innerHTML; dc.cur.t = Date.now(); officeSave();
  clearTimeout(dcTimer); dcTimer = setTimeout(() => { ofList(dc); dcStatus(); if (dc.outline.classList.contains('on')) dcOutline(); }, 500);
  clearTimeout(dc.spellT); dc.spellT = setTimeout(dcSpell, 1500);
}
function dcStatus() {
  const text = dc.page.innerText, words = (text.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) || []).length, pages = Math.max(1, Math.ceil(dc.page.scrollHeight / 1123));
  dc.status.textContent = words + ' mot' + (words > 1 ? 's' : '') + ' · ' + text.replace(/\s/g, '').length + ' caractères · ' + pages + ' page' + (pages > 1 ? 's' : '') + ' (environ) · lecture ' + Math.max(1, Math.round(words / 230)) + ' min' + (dc.spellN ? ' · ' + dc.spellN + ' mot' + (dc.spellN > 1 ? 's' : '') + ' à vérifier (clic droit)' : '') + ' · enregistré';
}
function dcToolbarState() {
  const b = document.queryCommandValue('formatBlock').toLowerCase();
  dc.style.value = ['h1', 'h2', 'h3', 'blockquote', 'pre'].includes(b) ? b : 'p';
  const n = getSelection().anchorNode, e = n?.nodeType === 3 ? n.parentElement : n;
  if (e && dc.page.contains(e)) { const pt = Math.round(parseFloat(getComputedStyle(e).fontSize) * .75); dc.size.value = DC_SIZES.reduce((a, s) => Math.abs(s - pt) < Math.abs(a - pt) ? s : a, 12);
    const f = getComputedStyle(e).fontFamily.split(',')[0].replace(/["']/g, '').trim(); if (DC_FONTS.includes(f)) dc.font.value = f; }
  for (const [c, cls] of [['bold', 'b'], ['italic', 'i'], ['underline', 'u'], ['strikeThrough', 's']]) dc.ui.main.querySelector('.ofTb.' + cls)?.classList.toggle('on', document.queryCommandState(c));
}
function dcSize(pt) {  // execCommand only knows 7 sizes: size 7 is set, then replaced by the size in points
  dc.page.focus(); document.execCommand('fontSize', false, '7');
  for (const f of dc.page.querySelectorAll('font[size="7"]')) { const s = el('span'); s.style.fontSize = pt + 'pt'; s.append(...f.childNodes); f.replaceWith(s); }
  dcChanged();
}
function dcChecklist() {
  dc.page.focus(); document.execCommand('insertUnorderedList');
  const n = getSelection().anchorNode, ul = (n?.nodeType === 3 ? n.parentElement : n)?.closest('ul');
  if (ul) ul.classList.toggle('dcCheck');
  dcChanged();
}
async function dcTable() {
  const v = await ask('Taille du tableau', '3 x 3', 'colonnes x lignes'); if (!v) return;
  const [c, r] = (v.match(/\d+/g) || []).map(Number), cols = Math.min(20, c || 3), rows = Math.min(100, r || 3);
  const tr = i => '<tr>' + ('<' + (i ? 'td' : 'th') + '><br></' + (i ? 'td' : 'th') + '>').repeat(cols) + '</tr>';
  dc.page.focus(); document.execCommand('insertHTML', false, '<table>' + [...Array(rows)].map((_, i) => tr(i)).join('') + '</table><p><br></p>'); dcChanged();
}
function dcImg(w) { if (!dc.img) return toast('Clique d\'abord sur une image du document', true); dc.img.style.width = w; dc.img.style.height = 'auto'; dcChanged(); }
function dcZoom(z) { dc.page.style.zoom = z; dc.zoom = z; }
function dcOutline() {
  const hs = [...dc.page.querySelectorAll('h1,h2,h3')];
  dc.outline.replaceChildren(el('span', 'label', 'Plan'), ...(hs.length ? hs.map(h => { const b = el('button', 'dcOl l' + h.nodeName[1], h.textContent || '(titre vide)'); b.onclick = () => h.scrollIntoView({block: 'start', behavior: 'smooth'}); return b; }) : [el('div', 'hint', 'Les titres du document apparaissent ici.')]));
}
function dcFindOpen() { dc.fr.classList.add('on'); const s = String(getSelection()); if (s && s.length < 80) dc.fq.value = s; dc.fq.focus(); dc.fq.select(); dcFind(0); }
function dcFind(step) { const r = neoFindRun(dc.page, dc.fq.value, {}, step); dc.fcount.textContent = dc.fq.value ? (r.n ? (r.i + 1) + ' / ' + r.n : 'aucun') : ''; return r; }
function dcReplace(all) {
  const q = dc.fq.value; if (!q) return;
  if (all) {  // every text node of the page, case ignored like the search
    let n = 0; const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), w = document.createTreeWalker(dc.page, NodeFilter.SHOW_TEXT);
    for (let t; (t = w.nextNode());) t.data = t.data.replace(re, () => (n++, dc.rq.value));
    dcChanged(); dcFind(0); toast(n + ' remplacement' + (n > 1 ? 's' : ''));
    return;
  }
  const H = window.__neoFind, r = H?.ranges[H.i];
  if (r) { r.deleteContents(); r.insertNode(document.createTextNode(dc.rq.value)); dcChanged(); }
  dcFind(0);
}
// the spell checker underlines the words it does not know (CSS highlight: the document itself is not changed)
async function dcSpell() {
  if (!dc.cur || typeof spellList !== 'function') return;
  const nodes = [], w = document.createTreeWalker(dc.page, NodeFilter.SHOW_TEXT); let text = '';
  for (let n; (n = w.nextNode());) { nodes.push([n, text.length]); text += n.data + '\n'; }
  const id = dc.cur.id, errs = await spellList(text).catch(() => null);
  if (!errs || dc.cur?.id !== id) return;
  const ranges = [];
  for (const x of errs) {
    const k = nodes.findLast(([, at]) => at <= x.i); if (!k) continue;
    const [n, at] = k, o = x.i - at;
    if (!n.isConnected || n.data.substr(o, x.w.length) !== x.w) continue;  // typed over meanwhile
    const r = new Range(); r.setStart(n, o); r.setEnd(n, o + x.w.length); ranges.push(r);
  }
  CSS.highlights?.set('neo-spell', new Highlight(...ranges));
  dc.spellN = ranges.length; dcStatus();
}
document.addEventListener('neo-spell-dict', () => dcSpell());
dc.open = f => {
  dc.cur = f; dc.title.value = f.name; dc.page.innerHTML = f.data.html; dc.img = null;
  neoFindRun(dc.page, '', {}, 0); dc.fr.classList.remove('on'); CSS.highlights?.delete('neo-spell'); dc.spellN = 0; dcStatus(); dcOutline(); setTimeout(dcSpell, 300);
};
dc.close = () => { dc.cur = null; };
dc.icon = __icon('docs'); ofRegister(dc);  // (non indenté : les textes sur plusieurs lignes restent exactement les tiens)
  // ---- fin ----
  ctx.onOpen(() => { ofOpen('doc'); });
}
