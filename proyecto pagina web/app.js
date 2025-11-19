// app.js — catálogo, carrito, login y notificaciones
const products = [
  {id:1,name:'Corsair K100 RGB',brand:'corsair',price:229.99,category:'teclados',image:'https://www.corsair.com/medias/sys_master/images/images/h8d/h6b/9584242925598/CH-912A01N-NA/Gallery/K100_RGB_01/-CH-912A01N-NA-Gallery-K100-RGB-01.png',desc:'Teclado mecánico premium',featured:true,usage:'Teclado mecánico con switches altos rendimiento, RGB por tecla, reposamuñecas magnético. Ideal para gaming competitivo y tipeo prolongado.',specs:['Switches: Corsair OPX','RGB: Per-key','Reposamuñecas: Magnético','Conexión: USB-C','Dimensiones: 440x150x40mm']},
  {id:2,name:'Razer DeathAdder V3 Pro',brand:'razer',price:149.99,category:'mouses',image:'https://assets2.razerzone.com/images/pnx.assets/381e915d58d2e9dc9d5708b6ed93e90d/razer-deathadder-v3-pro-white-500x500.png',desc:'Mouse gaming inalámbrico',featured:true, gallery:['https://assets2.razerzone.com/images/pnx.assets/381e915d58d2e9dc9d5708b6ed93e90d/razer-deathadder-v3-pro-white-500x500.png','https://assets2.razerzone.com/images/pnx.assets/314d3a6d2a3c3ec9f7f3c8a8d9e7b4f4/razer-deathadder-v3-pro-gallery-1.png'],usage:'Mouse inalámbrico de 55g con sensor óptico Focus Pro de 30k DPI. Ideal para FPS rápidos con latencia mínima.',specs:['Peso: 55g','Sensor: Focus Pro 30k DPI','Conexión: 2.4GHz inalámbrica','Botones: 8','Duración batería: 90h']},
  {id:3,name:'Logitech G Pro X Superlight',brand:'logitech',price:159.99,category:'mouses',image:'https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-black-gallery-1.png',desc:'Mouse ultraligero',featured:true, gallery:['https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-black-gallery-1.png','https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-gallery-2.png'],usage:'Mouse ultraligero de 63g con sensor HERO 25k. Perfecto para esports y juego competitivo de alta velocidad.',specs:['Peso: 63g','Sensor: HERO 25k DPI','Conexión: 2.4GHz','Botones: 5','Respuesta: <1ms']},
  {id:4,name:'HyperX Cloud Alpha',brand:'hyperx',price:99.99,category:'audifonos',image:'https://media.kingston.com/hyperx/features/hx-features-headset-cloud-alpha-wireless.jpg',desc:'Audífonos gaming',featured:false, gallery:['https://media.kingston.com/hyperx/features/hx-features-headset-cloud-alpha-wireless.jpg','https://media.kingston.com/hyperx/features/hx-features-headset-cloud-alpha-2.jpg'],usage:'Audífonos inalámbricos con sonido envolvente 7.1 virtual y micrófono con cancelación de ruido.',specs:['Sonido: 7.1 surround','Micrófono: Removible','Conexión: 2.4GHz + 3.5mm','Impedancia: 64Ω','Duración: 30h batería']},
  {id:5,name:'ASUS ROG Strix',brand:'asus',price:189.99,category:'teclados',image:'https://dlcdnwebimgs.asus.com/gain/8e3f7e63-64bf-4cd1-ab5e-3b3b9a0e3c8d/w800/fwebp',desc:'Teclado gaming', gallery:['https://dlcdnwebimgs.asus.com/gain/8e3f7e63-64bf-4cd1-ab5e-3b3b9a0e3c8d/w800/fwebp','https://dlcdnwebimgs.asus.com/gain/c1f0a8d9-5c2a-4a9b-8f1e-2b3c4d5e6f7g/w800/fwebp'],usage:'Teclado mecánico RGB con switches ROG Strix, iluminación por zona y perfil bajo gaming.',specs:['Switches: ROG Strix','RGB: 16.8M colores','Layout: TKL','Conexión: USB','Perfil: Gaming bajo']},
  {id:6,name:'Corsair MM1000',brand:'corsair',price:99.99,category:'accesorios',image:'https://images.corsairgaming.com/is/image/corsairgaming/MM1000_01_Gallery_3',desc:'Mousepad con carga Qi', gallery:['https://images.corsairgaming.com/is/image/corsairgaming/MM1000_01_Gallery_3','https://images.corsairgaming.com/is/image/corsairgaming/MM1000_02_Gallery_3'],usage:'Mousepad con base de carga inalámbrica Qi. Mantén tu mouse cargado mientras juegas.',specs:['Carga: Qi 10W','Dimensiones: 350x250mm','Material: Tela','Antideslizante: TPR','Compatibilidad: Mouses Corsair']},
  {id:7,name:'NZXT H7 Flow',brand:'nzxt',price:129.99,category:'cajas',image:'https://images.contentstack.io/v3/assets/bltc72ae882e0a45e30/blt6a7c15f36d5d6d27/640a1f4e0c0bea06df36f6f4/rl-h7-flow-white-gallery-1.png',desc:'Caja con flujo optimizado',usage:'Gabinete ATX con diseño aerodinámico y 3 ventiladores de flujo frontal preinstalados.',specs:['Factor: Mid-Tower ATX','Ventiladores: 3x 120mm frontal','Compatibilidad: GPU hasta 330mm','Radiador: Hasta 360mm','Puertas: Cristal templado']},
  {id:8,name:'Intel Core i9',brand:'intel',price:599.99,category:'procesadores',image:'https://images.anandtech.com/show/18513/intel-core-i9-14900ks.jpg',desc:'Procesador high-end',usage:'CPU de alto rendimiento para gaming y tareas intensivas de renderizado y multitarea.',specs:['Núcleos: 24','Frecuencia: 5.8GHz max','TDP: 253W','Socket: LGA1700','Caché: 36MB']},
  {id:9,name:'AMD Ryzen 9 7950X',brand:'amd',price:549.99,category:'procesadores',image:'https://www.amd.com/en/products/specifications/processors/ryzen/series/amd-ryzen-9-7950x.html',desc:'Procesador de alto rendimiento',usage:'CPU con 16 núcleos de última generación; potencia bruta para gaming y streaming simultáneo.',specs:['Núcleos: 16','Frecuencia: 5.7GHz max','TDP: 162W','Socket: AM5','Caché: 64MB']},
  {id:10,name:'Logitech G915 TKL',brand:'logitech',price:229.99,category:'teclados',image:'https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto/d_transparent.gif/content/dam/gaming/en/products/g915-tkl/g915-tkl-gallery/deu-g915-tkl-gallery-topdown.png',desc:'Teclado inalámbrico ultradelgado',usage:'Teclado TKL (Tenkeyless) inalámbrico ultraperfil; diseño compacto con switches GL Tactile.',specs:['Perfil: Bajo 22mm','Switches: GL Tactile','Conexión: 2.4GHz','RGB: Por tecla','Duración: 40h batería']},
  {id:11,name:'Razer Huntsman V2',brand:'razer',price:249.99,category:'teclados',image:'https://assets2.razerzone.com/images/pnx.assets/8a4cf22c24d8f668f6d1c60ee4c7f250/razer-huntsman-v2-analog-hero-desktop.jpg',desc:'Teclado óptico avanzado',usage:'Teclado con switches ópticos Razer mejora de doble disparo. Ideal para gaming competitivo.',specs:['Switches: Óptico avanzado','Latencia: Ultrabaja','RGB: Por tecla','Construcción: De aluminio','Duración: Millones de pulsaciones']},
  {id:12,name:'Corsair HS80 RGB',brand:'corsair',price:179.99,category:'audifonos',image:'https://www.corsair.com/medias/sys_master/images/images/h8d/hc6/9584243297278/HS80_Gallery/HS80_Gallery_01/-HS80_Gallery_01.png',desc:'Audífonos premium',usage:'Audífonos wireless con sonido Dolby 7.1; micrófono omnidireccional con cancelación activa.',specs:['Sonido: 7.1 Dolby','Micrófono: Omnidireccional','Conexión: 2.4GHz','Duración: 20h','Impedancia: 32Ω']},
  {id:13,name:'Elgato Stream Deck MK.2',brand:'elgato',price:149.99,category:'streaming',image:'https://static.elgato.com/product-images/stream-deck-mk2/stream-deck-mk2-hero-product.png',desc:'Controlador para streamers',usage:'Panel de control tactil LCD para automatizar streams; 15 botones personalizables por software.',specs:['Botones: 15 LCD','Resolución: 72x72px','Conexión: USB','Compatibilidad: Windows/Mac','Software: Extensible']},
  {id:14,name:'Nanoleaf Lines',brand:'nanoleaf',price:199.99,category:'lighting',image:'https://nanoleaf.me/cdn/shop/products/Lines_Starter_9pk.png',desc:'Iluminación modular RGB',usage:'Paneles LED modulares y conectables; sincronización con música y apps de gaming.',specs:['Paneles: 9 del starter','RGB: 16.8M colores','Conexión: WiFi','Control: App + Voz','Ángulo: 180°']},
  {id:15,name:'SteelSeries QcK Prism',brand:'steelseries',price:49.99,category:'accesorios',image:'https://images.steelseries.com/cdn/shop/products/qckmassive.png',desc:'Mousepad con RGB',usage:'Mousepad de tela con RGB integrado; superficie de control optimizada para sensores ópticos.',specs:['Material: Tela premium','Dimensiones: 320x220mm','RGB: 16.8M colores','Antideslizante: Base TPR','USB: 1 puerto hub']},
  {id:16,name:'Corsair RM850e Gold',brand:'corsair',price:119.99,category:'fuentes',image:'https://images.corsairgaming.com/is/image/corsairgaming/RM850e_Gallery_01_1',desc:'Fuente 850W 80+ Gold',usage:'Fuente modular 850W con certificación 80+ Gold; ventilador híbrido eco-mode para eficiencia.',specs:['Potencia: 850W','Certificación: 80+ Gold','Modular: Completamente','Ventilador: 135mm eco','Ruidaje: <20dB eco']},
  {id:17,name:'EVGA SuperNOVA 850',brand:'evga',price:99.99,category:'fuentes',image:'https://images.evga.com/is/image/EVGA-US/220-G5-0850-X1_XL_image_1',desc:'Fuente robusta 850W',usage:'Fuente 850W con certificación 80+ Platinum; protección contra sobrevoltajes y cortocircuitos.',specs:['Potencia: 850W','Certificación: 80+ Platinum','Módulos: Completamente','Proteción: Múltiple','Garantía: 10 años']},
  {id:18,name:'Corsair Crystal 570X',brand:'corsair',price:149.99,category:'cajas',image:'https://images.corsairgaming.com/is/image/corsairgaming/crystal_570x_gallery_1',desc:'Caja con vidrio templado',usage:'Mid-tower ATX con frente de vidrio templado panorámico; 3 ventiladores RGB incluidos.',specs:['Factor: Mid-Tower','Vidrio: Templado 4mm','Ventiladores: 3x RGB','Compartimentos: 2','Soporta: GPU 370mm']},
  {id:19,name:'ASUS ROG Swift PG279QM',brand:'asus',price:599.99,category:'monitores',image:'https://dlcdnwebimgs.asus.com/gain/6a89c8d5-a789-41c0-9e8f-7c6b5a4d3e2f/w1024/fwebp',desc:'Monitor 1440p 240Hz',usage:'Monitor gaming IPS 1440p 240Hz; respuesta ultra rápida <1ms con HDMI 2.1 y DisplayPort.',specs:['Resolución: 2560x1440','Panel: IPS','Tasa: 240Hz','Respuesta: <1ms','HDR: DisplayHDR 400']},
  {id:20,name:'Corsair K70 RGB',brand:'corsair',price:159.99,category:'teclados',image:'https://images.corsairgaming.com/is/image/corsairgaming/K70_RGB_Pro_01_Gallery_1',desc:'Teclado mecánico clásico',usage:'Teclado mecánico con switches Cherry MX; construcción de aluminio cepillado y RGB dinámico.',specs:['Switches: Cherry MX','Material: Aluminio','RGB: Dinámica','Reposamuñecas: Incluido','Durabilidad: 50M pulsaciones']},
  {id:21,name:'Razer BlackShark V2 Pro',brand:'razer',price:229.99,category:'audifonos',image:'https://assets2.razerzone.com/images/pnx.assets/381e915d58d2e9dc9d5708b6ed93e90d/razer-deathadder-v3-pro-white-500x500.png',desc:'Audífonos inalámbricos premium',featured:true,usage:'Audífonos gaming inalámbricos con sonido Dolby 7.1 y cancelación activa de ruido, micrófono Hyperclear.',specs:['Sonido: 7.1 Dolby','Micrófono: Hyperclear','Conexión: 2.4GHz','ANC: Sí','Duración: 50h']},
  {id:22,name:'Razer Orbweaver Chroma',brand:'razer',price:179.99,category:'accesorios',image:'https://assets2.razerzone.com/images/pnx.assets/314d3a6d2a3c3ec9f7f3c8a8d9e7b4f4/razer-deathadder-v3-pro-gallery-1.png',desc:'Keypad gaming mecánico',usage:'Teclado numérico gaming con switches mecánicos y layout ergonómico para MMO y MOBA.',specs:['Teclas: 20 mecánicas','Switches: Razer Green','Layout: Ergonómico','RGB: Per-key','Conexión: USB']},
  {id:23,name:'ASUS TUF Gaming Headset',brand:'asus',price:149.99,category:'audifonos',image:'https://dlcdnwebimgs.asus.com/gain/8e3f7e63-64bf-4cd1-ab5e-3b3b9a0e3c8d/w800/fwebp',desc:'Audífonos gaming resistentes',usage:'Audífonos con sonido 7.1 virtual; diseño resistente para gaming competitivo con micrófono desmontable.',specs:['Sonido: 7.1 virtual','Micrófono: Desmontable','Conexión: USB','Impedancia: 32Ω','Duración: 20h']},
  {id:24,name:'Corsair Virtuoso XT',brand:'corsair',price:189.99,category:'audifonos',image:'https://images.corsairgaming.com/is/image/corsairgaming/MM1000_01_Gallery_3',desc:'Audífonos inalámbricos multi-conexión',usage:'Audífonos inalámbricos con multi-conexión simultánea (PC, console, móvil). Sonido Dolby 7.1.',specs:['Sonido: 7.1 Dolby','Conexión: 2.4GHz + BT','Multi-conexión: Sí','Duración: 40h','Micrófono: Hyperclear']},
  {id:25,name:'Razer Basilisk V3 Pro',brand:'razer',price:169.99,category:'mouses',image:'https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-black-gallery-1.png',desc:'Mouse gaming ergonómico',featured:true,usage:'Mouse ergonómico con 11 botones programables y sensor Focus Pro 30k DPI. Perfecta para MOBAs.',specs:['Peso: 99g','Sensor: Focus Pro 30k','Botones: 11','Conexión: 2.4GHz','Duración: 70h']},
  {id:26,name:'SteelSeries Rival 5',brand:'steelseries',price:79.99,category:'mouses',image:'https://images.steelseries.com/cdn/shop/products/qckmassive.png',desc:'Mouse gaming óptico',usage:'Mouse con 9 botones programables; sensor óptico True-Move Air 18k DPI con respuesta ultrarápida.',specs:['Peso: 88g','Sensor: True-Move Air 18k','Botones: 9','Conexión: USB','Respuesta: <1ms']},
  {id:27,name:'MSI MPG A1000G',brand:'msi',price:249.99,category:'fuentes',image:'https://images.corsairgaming.com/is/image/corsairgaming/RM850e_Gallery_01_1',desc:'Fuente 1000W modular',usage:'Fuente de alimentación 1000W con certificación 80+ Gold; ventilador de 140mm silencioso.',specs:['Potencia: 1000W','Certificación: 80+ Gold','Modular: Completamente','Ventilador: 140mm','Ruidaje: <20dB']},
  {id:28,name:'Lian Li LANCOOL 205 Mesh',brand:'lianli',price:79.99,category:'cajas',image:'https://images.contentstack.io/v3/assets/bltc72ae882e0a45e30/blt6a7c15f36d5d6d27/640a1f4e0c0bea06df36f6f4/rl-h7-flow-white-gallery-1.png',desc:'Caja ATX asequible',usage:'Caja mid-tower con malla frontal para excelente ventilación; soporta radiadores 280mm.',specs:['Factor: Mid-Tower ATX','Ventiladores: 2 preinstalados','Malla: Frontal','Soporta: GPU 300mm','Radiador: 280mm max']},
  {id:29,name:'Razer Huntsman Mini',brand:'razer',price:149.99,category:'teclados',image:'https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto/d_transparent.gif/content/dam/gaming/en/products/g915-tkl/g915-tkl-gallery/deu-g915-tkl-gallery-topdown.png',desc:'Teclado compacto óptico',featured:true,usage:'Teclado 60% ultra-compacto con switches ópticos Razer; RGB per-key y construcción aluminio.',specs:['Layout: 60%','Switches: Óptico Razer','RGB: Per-key','Material: Aluminio','Conexión: USB-C']},
  {id:30,name:'Corsair ST100 RGB',brand:'corsair',price:129.99,category:'accesorios',image:'https://www.corsair.com/medias/sys_master/images/images/h8d/hc6/9584243297278/HS80_Gallery/HS80_Gallery_01/-HS80_Gallery_01.png',desc:'Stand para audífonos RGB',usage:'Base para audífonos con almacenamiento USB 3.0 de 7 puertos y RGB sincronizable.',specs:['USB: 7 puertos 3.0','RGB: Sincronizable','Almacenamiento: SSD compatible','Material: Aluminio+plástico','Compatibilidad: Todos']},
];

// Notificador simple
const Notificador = {
  subscribers: [],
  suscribir(fn){ this.subscribers.push(fn) },
  notificar(msg){ this.subscribers.forEach(fn=>fn(msg)) }
};

// DOM refs
const grid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const cartCountEl = document.getElementById('cartCount');
const closeCart = document.getElementById('closeCart');
const checkoutBtn = document.getElementById('checkoutBtn');
const brandFilter = document.getElementById('brandFilter');
const searchInput = document.getElementById('search');
const categoryList = document.getElementById('categoryList');
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');
const notifications = document.getElementById('notifications');
const detailModal = document.getElementById('detailModal');
const detailContent = document.getElementById('detailContent');
const closeDetail = document.getElementById('closeDetail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

// Cart state
let cart = JSON.parse(localStorage.getItem('arise_cart')||'[]');
let user = localStorage.getItem('arise_user') || null;

function saveCart(){ localStorage.setItem('arise_cart', JSON.stringify(cart)); updateCartUI(); }
function updateCartUI(){
  const total = cart.reduce((s,i)=>s + i.price*i.qty,0);
  cartTotalEl.textContent = total.toFixed(2);
  cartCountEl.textContent = cart.reduce((s,i)=>s+i.qty,0);
}

// Helper: build a card element for a product
function createCardElement(p){
  const card = document.createElement('article');
  card.className='card';
  card.style.position='relative';
  const badgeHtml = p.featured ? `<span class="badge">Destacado</span>` : '';
  card.innerHTML = `
    ${badgeHtml}
    <div class="img-wrap"><img class="product-img" data-pid="${p.id}" src="${p.image}" alt="${p.name}" loading="lazy"/></div>
    <h4>${p.name}</h4>
    <p>${p.desc}</p>
    <div class="meta">
      <span class="price">$${p.price.toFixed(2)}</span>
      <div class="actions">
        <button class="btn" data-id="${p.id}" data-action="view">Ver</button>
        <button class="btn add" data-id="${p.id}">Agregar</button>
      </div>
    </div>`;
  // handlers
  const addBtn = card.querySelector('.add');
  addBtn.addEventListener('click', e=>{ const id = +e.currentTarget.dataset.id; const img = card.querySelector('img.product-img'); addToCart(id, img); });
  const viewBtn = card.querySelector('[data-action="view"]');
  viewBtn.addEventListener('click', ()=> openDetail(p.id));
  const imgEl = card.querySelector('img.product-img');
  imgEl.addEventListener('click', ()=> openDetail(p.id));
  return card;
}

// Render products grouped by category with "Ver más" per section
function renderGrouped(list){
  grid.innerHTML = '';
  const groups = {};
  list.forEach(p=>{ groups[p.category] = groups[p.category] || []; groups[p.category].push(p); });
  const maxVisible = 6;
  Object.keys(groups).sort().forEach(cat=>{
    const items = groups[cat];
    const section = document.createElement('section');
    section.className = 'category-section';
    const header = document.createElement('div'); header.className='cat-header';
    const title = document.createElement('h3'); title.textContent = cat.charAt(0).toUpperCase()+cat.slice(1);
    const ver = document.createElement('button'); ver.className='btn ver-more'; ver.textContent = items.length>maxVisible ? 'Ver más' : 'Ver todos';
    header.appendChild(title); header.appendChild(ver);
    const catGrid = document.createElement('div'); catGrid.className = 'cat-grid';
    // render initial slice
    const initial = items.slice(0, maxVisible);
    initial.forEach(p=> catGrid.appendChild(createCardElement(p)));
    // store full list on dataset for toggle
    section.dataset.cat = cat;
    section.appendChild(header);
    section.appendChild(catGrid);
    grid.appendChild(section);

    if(items.length > maxVisible){
      let expanded = false;
      ver.addEventListener('click', ()=>{
        if(!expanded){
          // show remaining
          items.slice(maxVisible).forEach(p=> catGrid.appendChild(createCardElement(p)));
          ver.textContent = 'Mostrar menos'; expanded = true;
        } else {
          // collapse back to initial
          while(catGrid.children.length > maxVisible) catGrid.removeChild(catGrid.lastChild);
          ver.textContent = 'Ver más'; expanded = false;
        }
      });
    } else {
      ver.style.opacity = 0.6; ver.disabled = false;
    }
  });
}

function addToCart(id, srcEl){
  const product = products.find(p=>p.id===id);
  if(!product) return;
  const existing = cart.find(c=>c.id===id);
  if(existing) existing.qty++; else cart.push({...product,qty:1});
  saveCart();
  // trigger fly animation if we have a source image element
  const imgEl = srcEl && (srcEl.tagName==='IMG' ? srcEl : srcEl.querySelector && srcEl.querySelector('img.product-img'));
  if(imgEl) flyToCart(imgEl);
  Notificador.notificar(`Agregado: ${product.name}`);
}

function renderCart(){
  cartItemsEl.innerHTML='';
  if(cart.length===0){ cartItemsEl.innerHTML='<p>Tu carrito está vacío.</p>'; return; }
  cart.forEach(item=>{
    const row = document.createElement('div');
    row.className='card';
    row.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.qty} × $${item.price.toFixed(2)}</p>
      <div style="display:flex;gap:8px;margin-top:8px;">
        <button class="btn dec" data-id="${item.id}">-</button>
        <button class="btn inc" data-id="${item.id}">+</button>
        <button class="btn" style="background:transparent;border:1px solid rgba(255,0,0,0.2);" data-id="${item.id}" data-action="remove">Quitar</button>
      </div>`;
    cartItemsEl.appendChild(row);
  });
  cartItemsEl.querySelectorAll('.inc').forEach(b=>b.addEventListener('click',e=>{ const id=+e.currentTarget.dataset.id; changeQty(id,1)}));
  cartItemsEl.querySelectorAll('.dec').forEach(b=>b.addEventListener('click',e=>{ const id=+e.currentTarget.dataset.id; changeQty(id,-1)}));
  cartItemsEl.querySelectorAll('[data-action="remove"]').forEach(b=>b.addEventListener('click',e=>{ const id=+e.currentTarget.dataset.id; removeItem(id)}));
}

// Product detail modal
function openDetail(id){
  const p = products.find(x=>x.id===id);
  if(!p) return;
  // build a simple gallery (use p.gallery if exists)
  const gallery = Array.isArray(p.gallery) && p.gallery.length ? p.gallery : [p.image];
  const thumbs = gallery.map(src=>`<img class="thumb" src="${src}" alt="${p.name}" />`).join('');
  const usageText = p.usage || getUsageText(p);
  const specsHtml = Array.isArray(p.specs) && p.specs.length ? 
    `<ul style="list-style:none;padding:0;margin:0;font-size:13px;">${p.specs.map(s=>`<li style="padding:6px 0;border-bottom:1px solid rgba(0,255,60,0.04)">${s}</li>`).join('')}</ul>` :
    '<p style="color:var(--muted)">Sin especificaciones adicionales.</p>';
  
  detailContent.innerHTML = `
    <div class="detail-tabs">
      <button class="tab-btn active" data-tab="desc">Descripción</button>
      <button class="tab-btn" data-tab="specs">Especificaciones</button>
      <button class="tab-btn" data-tab="usage">¿Para qué sirve?</button>
    </div>
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
      <div style="min-width:320px">
        <img id="detailMainImg" src="${gallery[0]}" alt="${p.name}" style="width:320px;height:auto;border-radius:8px;cursor:zoom-in;"/>
        <div class="detail-gallery" style="display:flex;gap:8px;margin-top:8px;">${thumbs}</div>
      </div>
      <div style="flex:1;min-width:240px;">
        <h3>${p.name}</h3>
        <p style="color:var(--muted)">${p.desc}</p>
        <div data-tab-content="desc" class="tab-content" style="display:block">
          <p style="margin-top:8px;color:var(--muted);font-size:14px">${p.desc}</p>
        </div>
        <div data-tab-content="specs" class="tab-content" style="display:none">
          ${specsHtml}
        </div>
        <div data-tab-content="usage" class="tab-content" style="display:none">
          <p style="margin-top:8px;color:var(--muted);font-size:14px"><strong>¿Para qué sirve?</strong><br/>${usageText}</p>
        </div>
        <p class="price">$${p.price.toFixed(2)}</p>
        <div style="margin-top:12px;"><button class="btn add" data-id="${p.id}">Agregar al carrito</button></div>
      </div>
    </div>
  `;
  // attach gallery interactions
  const mainImg = detailContent.querySelector('#detailMainImg');
  detailContent.querySelectorAll('.thumb').forEach(t=>t.addEventListener('click',e=>{ mainImg.src = e.currentTarget.src; }));
  // open lightbox when clicking main image
  mainImg.addEventListener('click', ()=> openLightbox(mainImg.src));
  // Tab switching
  detailContent.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const tab = e.currentTarget.dataset.tab;
      detailContent.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      detailContent.querySelectorAll('.tab-content').forEach(c=>c.style.display='none');
      e.currentTarget.classList.add('active');
      const content = detailContent.querySelector(`[data-tab-content="${tab}"]`);
      if(content) content.style.display='block';
    });
  });
  // attach add handler inside modal
  detailContent.querySelectorAll('.add').forEach(b=>b.addEventListener('click',e=>{ const id = +e.currentTarget.dataset.id; addToCart(id, detailContent.querySelector('#detailMainImg')); }));
  detailModal.setAttribute('aria-hidden','false');
}
closeDetail.addEventListener('click',()=> detailModal.setAttribute('aria-hidden','true'));

// Lightbox handlers
function openLightbox(src){ if(!src) return; lightboxImg.src = src; lightbox.setAttribute('aria-hidden','false'); }
function closeLightbox(){ lightbox.setAttribute('aria-hidden','true'); lightboxImg.src = ''; }
lightboxClose && lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) closeLightbox(); });

// Generate a short usage/help text when product lacks explicit `usage`
function getUsageText(p){
  switch(p.category){
    case 'teclados': return 'Un teclado para escribir o jugar; elige switches según preferencia por tacto o rapidez.';
    case 'mouses': return 'Mouse para apuntar y clicar; la elección depende de ergonomía y sensibilidad (DPI).';
    case 'audifonos': return 'Auriculares para escuchar y comunicar; útiles para inmersión y trabajo en equipo.';
    case 'procesadores': return 'CPU, el "cerebro" del PC; impacta en rendimiento de juegos y tareas de CPU.';
    case 'cajas': return 'Gabinete que aloja tus componentes; considera flujo de aire y compatibilidad.';
    case 'fuentes': return 'Fuente de alimentación que entrega energía estable; elige según consumo y certificación.';
    case 'monitores': return 'Pantalla: influye en resolución, tasa de refresco y latencia.';
    default: return p.desc || 'Componente para tu PC.';
  }
}

// Fly-to-cart animation: clona la imagen y la anima hacia el botón del carrito
function flyToCart(imgEl){
  try{
    const rect = imgEl.getBoundingClientRect();
    const cartRect = cartBtn.getBoundingClientRect();
    const clone = imgEl.cloneNode(true);
    clone.style.position = 'fixed';
    clone.style.left = rect.left + 'px';
    clone.style.top = rect.top + 'px';
    clone.style.width = rect.width + 'px';
    clone.style.height = rect.height + 'px';
    clone.style.transition = 'transform 650ms cubic-bezier(.2,.8,.2,1), opacity 650ms';
    clone.style.zIndex = 9999;
    clone.classList.add('fly-img');
    document.body.appendChild(clone);
    const dx = cartRect.left + cartRect.width/2 - (rect.left + rect.width/2);
    const dy = cartRect.top + cartRect.height/2 - (rect.top + rect.height/2);
    const scale = 0.2;
    requestAnimationFrame(()=>{
      clone.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
      clone.style.opacity = '0.6';
    });
    clone.addEventListener('transitionend', ()=>{ clone.remove(); updateCartUI(); });
  }catch(err){ console.error('flyToCart error', err); }
}

function changeQty(id,delta){
  const it = cart.find(i=>i.id===id); if(!it) return; it.qty += delta; if(it.qty<1) removeItem(id); saveCart(); renderCart(); }
function removeItem(id){ cart = cart.filter(i=>i.id!==id); saveCart(); renderCart(); }

// Checkout simulation
checkoutBtn.addEventListener('click',()=>{
  if(cart.length===0){ Notificador.notificar('El carrito está vacío'); return; }
  if(!user){ Notificador.notificar('Inicia sesión para completar la compra'); loginModal.setAttribute('aria-hidden','false'); return; }
  // Simular compra
  Notificador.notificar(`Compra realizada por ${user}. Total: $${cart.reduce((s,i)=>s+i.price*i.qty,0).toFixed(2)}`);
  cart = []; saveCart(); renderCart(); cartModal.setAttribute('aria-hidden','true');
});

// Login flows
loginBtn.addEventListener('click',()=> loginModal.setAttribute('aria-hidden','false'));
closeLogin.addEventListener('click',()=> loginModal.setAttribute('aria-hidden','true'));
logoutBtn.addEventListener('click',()=>{ localStorage.removeItem('arise_user'); user=null; Notificador.notificar('Sesión cerrada'); updateUserUI(); });
loginForm.addEventListener('submit',e=>{
  e.preventDefault(); const name = document.getElementById('username').value.trim(); if(!name) return; user = name; localStorage.setItem('arise_user', user); Notificador.notificar(`Bienvenido, ${user}`); loginModal.setAttribute('aria-hidden','true'); updateUserUI();
});

function updateUserUI(){
  if(user){ loginBtn.textContent = `Hola, ${user}`; } else { loginBtn.textContent = 'Iniciar sesión'; }
}

// Cart modal
cartBtn.addEventListener('click',()=>{ renderCart(); cartModal.setAttribute('aria-hidden','false'); });
closeCart.addEventListener('click',()=> cartModal.setAttribute('aria-hidden','true'));

// Search and filter
searchInput.addEventListener('input',()=> applyFilters());
brandFilter.addEventListener('change',()=> applyFilters());

function populateBrandFilter(){
  const brands = Array.from(new Set(products.map(p=>p.brand))).sort();
  brands.forEach(b=>{ const opt = document.createElement('option'); opt.value = b; opt.textContent = b.charAt(0).toUpperCase()+b.slice(1); brandFilter.appendChild(opt)});
}

function populateCategoryList(){
  if(!categoryList) return;
  const cats = Array.from(new Set(products.map(p=>p.category))).sort();
  categoryList.innerHTML = '';
  // boton 'Todas'
  const liAll = document.createElement('li'); liAll.innerHTML = `<button class="category-btn active" data-cat="">Todas</button>`; categoryList.appendChild(liAll);
  cats.forEach(c=>{ const li = document.createElement('li'); li.innerHTML = `<button class="category-btn" data-cat="${c}">${c.charAt(0).toUpperCase()+c.slice(1)}</button>`; categoryList.appendChild(li); });
  categoryList.querySelectorAll('.category-btn').forEach(b=>b.addEventListener('click', e=>{
    const cat = e.currentTarget.dataset.cat;
    categoryList.querySelectorAll('.category-btn').forEach(x=>x.classList.remove('active'));
    e.currentTarget.classList.add('active');
    if(cat==='') renderGrouped(products); else renderGrouped(products.filter(p=>p.category===cat));
  }));
}

function applyFilters(){
  const q = searchInput.value.trim().toLowerCase();
  const brand = brandFilter.value;
  const filtered = products.filter(p=>{
    const matchQ = p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    const matchBrand = brand? p.brand===brand : true;
    return matchQ && matchBrand;
  });
  renderGrouped(filtered);
}

// Notifications UI
Notificador.suscribir(msg=>{
  const el = document.createElement('div'); el.className='notification'; el.textContent = msg; notifications.prepend(el);
  setTimeout(()=> el.remove(),5000);
});

// Initialize
populateBrandFilter(); populateCategoryList(); renderGrouped(products); updateCartUI(); updateUserUI();

// ========== HERO CAROUSEL LOGIC ==========
function initHeroCarousel(){
  const carousel = document.getElementById('heroCarousel');
  const allSlides = carousel ? carousel.querySelectorAll('.carousel-slide') : [];
  const dotsContainer = document.getElementById('carouselDots');
  const periphKey = 'hidePeripheralsSlide';
  // Build a slides array, excluding the peripherals slide if previously dismissed
  let slides = Array.from(allSlides);
  if(localStorage.getItem(periphKey) === '1'){
    slides = slides.filter(s => !s.classList.contains('peripherals-slide'));
  }
  
  if(slides.length === 0) return; // no carousel found
  
  // Generate dots
  if(dotsContainer){
    dotsContainer.innerHTML = '';
    slides.forEach((_, i)=>{
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      if(i===0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Slide ${i+1}`);
      dotsContainer.appendChild(dot);
    });
  }
  
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.carousel-dot') : [];
  let current = 0;
  
  function goToSlide(n){
    slides.forEach(s=>s.classList.remove('active'));
    dots.forEach(d=>d.classList.remove('active'));
    slides[n].classList.add('active');
    if(dots[n]) dots[n].classList.add('active');
  }
  
  function next(){ current = (current+1) % slides.length; goToSlide(current); }
  
  // Auto-rotate every 5 seconds
  setInterval(next, 5000);
  
  // Dot navigation
  dots.forEach((dot, i)=>{ dot.addEventListener('click', ()=>{ current = i; goToSlide(current); }); });
  
  // Initial state
  goToSlide(0);

  // Attach dismiss handler for peripherals slide (if present)
  const periphSlide = carousel ? carousel.querySelector('.peripherals-slide') : null;
  if(periphSlide){
    const btn = periphSlide.querySelector('.periph-close');
    if(btn){
      btn.addEventListener('click', ()=>{
        try{
          localStorage.setItem(periphKey,'1');
        }catch(e){}
        periphSlide.classList.add('peripherals-hidden');
        // small delay then reload so carousel recalculates slides/dots
        setTimeout(()=> location.reload(),350);
      });
    }
  }
}

// ========== DETAIL MODAL TABS LOGIC ==========
function initDetailModalTabs(){
  // Attach tab handlers (for future use if we add multiple tab content in detail modal)
  const detailTabs = document.querySelectorAll('.detail-tabs');
  detailTabs.forEach(tabs=>{
    const buttons = tabs.querySelectorAll('.tab-btn');
    buttons.forEach((btn, idx)=>{
      btn.addEventListener('click', ()=>{
        buttons.forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        // In a more complex app, show/hide tab content here
        // For now, all content is inline in openDetail()
      });
    });
    // Set first tab active by default
    if(buttons.length > 0) buttons[0].classList.add('active');
  });
}

// Call carousel and tab initializers
initHeroCarousel();
initDetailModalTabs();

// Expose for debugging
window.__ARISE = {products, cart, Notificador};
