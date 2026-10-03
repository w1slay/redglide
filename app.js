const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

function setupMenu(){
  const btn=$("#menuBtn"), menu=$("#megaMenu");
  if(!btn||!menu) return;
  btn.addEventListener("click",()=>{ const open=menu.classList.toggle("open"); btn.setAttribute("aria-expanded",open); });
}

// =====================
// PUBLICITÉ REDGLIDE — À PERSONNALISER
// =====================
// Modifie uniquement ces valeurs pour changer la publicité affichée
// en bas de chaque page de comparaison.
const AD_CONFIG = {
  enabled: true,
  label: "PUBLICITÉ",
  title: "Ton annonce ici",
  text: "Ajoute ici ton texte publicitaire, une offre, un code promo ou un partenaire.",
  image: "",
  link: "https://example.com",
  button: "Découvrir"
};

function adHtml(){
  if(!AD_CONFIG.enabled) return "";
  const image = AD_CONFIG.image ? `<a class="ad-media" href="${esc(AD_CONFIG.link)}" target="_blank" rel="noopener sponsored"><img src="${esc(AD_CONFIG.image)}" alt="Publicité RedGlide" loading="lazy"></a>` : "";
  return `<section class="redglide-ad">
    <div class="ad-label">${esc(AD_CONFIG.label)}</div>
    <div class="ad-content">${image}<div class="ad-copy"><h3>${esc(AD_CONFIG.title)}</h3><p>${esc(AD_CONFIG.text)}</p><a class="primary-btn ad-btn" href="${esc(AD_CONFIG.link)}" target="_blank" rel="noopener sponsored">${esc(AD_CONFIG.button)} →</a></div></div>
  </section>
  ${adHtml()}`;
}

const BRAND_INFO = {
  "Ausom": {name:"Ausom", domain:"ausom.com"}, "Cube": {name:"CUBE Bikes", domain:"cube.eu"},
  "Decathlon": {name:"Decathlon", domain:"decathlon.fr"}, "Dualtron": {name:"Dualtron", domain:"dualtron.fr"},
  "Ducati": {name:"Ducati", domain:"ducati.com"}, "Ecoxtreme": {name:"Ecoxtreme", domain:"ecoxtreme.com"},
  "Fynzo": {name:"Fynzo", domain:"fynzo.com"}, "Geleipu": {name:"Geleipu", domain:"geleipu.com"},
  "Joyor": {name:"Joyor", domain:"joyorscooter.com"}, "KuKirin": {name:"KuKirin", domain:"kukirin.com"},
  "Moustache": {name:"Moustache Bikes", domain:"moustachebikes.com"}, "NAVEE": {name:"NAVEE", domain:"navee.tech"},
  "OOTD": {name:"OOTD", domain:"ootd-scooter.com"}, "Peugeot": {name:"Peugeot", domain:"peugeot.com"},
  "RCB": {name:"RCB", domain:"rcb-scooter.com"}, "Renault": {name:"Renault", domain:"renault.fr"},
  "Rovoron": {name:"Rovoron", domain:"rovoron.com"}, "SUNNIGOO": {name:"SUNNIGOO", domain:"sunnigoo.com"},
  "Segway": {name:"Segway-Ninebot", domain:"segway.com"}, "Tesla": {name:"Tesla", domain:"tesla.com"},
  "UrbanGlide": {name:"UrbanGlide", domain:"urbanglide.com"}, "Xiaomi": {name:"Xiaomi", domain:"mi.com"},
  "iScooter": {name:"iScooter", domain:"iscooterglobal.com"}
};
function brandInfo(brand){ return BRAND_INFO[brand] || {name:brand, domain:""}; }
function brandName(brand){ return brandInfo(brand).name; }
function brandHtml(brand){
  const b=brandInfo(brand), logo=b.domain ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(b.domain)}&sz=128` : "";
  const initials=b.name.split(/\s+/).map(x=>x[0]).join("").slice(0,3).toUpperCase();
  return `<span class="brand-lockup"><span class="brand-logo">${logo?`<img src="${logo}" alt="Logo ${esc(b.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">`:``}<span class="brand-fallback">${esc(initials)}</span></span><span>${esc(b.name)}</span></span>`;
}

function scooterCard(s, selectable=false){
  return `<article class="product-card ${selectable?'selectable':''}" data-id="${esc(s.id||'')}">
    <div class="card-top"><span class="tag">${esc(s.badge||"MODÈLE")}</span>${brandHtml(s.brand)}</div>
    <div class="scooter-visual ${s.image?'has-photo':''}">${s.image?`<img src="${esc(s.image)}" alt="${esc(brandName(s.brand)+" "+s.model)}" loading="lazy">`:`<div class="photo-placeholder"><b>${esc(s.brand)}</b><span>${esc(s.model)}</span><small>PHOTO À AJOUTER</small></div>`}</div>
    <h3>${esc(brandName(s.brand)+" "+s.model)}</h3><p>${esc(s.summary||"Fiche modèle RedGlide.")}</p>
    <div class="mini-stats"><span><b>${esc(s.range)}</b><small>autonomie</small></span><span><b>${esc(s.speed)}</b><small>max.</small></span><span><b>${esc(s.weight)}</b><small>poids</small></span></div>
    ${selectable?`<button class="select-btn">Sélectionner</button>`:`<div class="price">${esc(s.price)}</div>`}
  </article>`;
}
function initHome(){
  const grid=$("#buzzGrid"); if(!grid) return;
  const ids=["g2","g4","thunder3","l2","l1"];
  grid.innerHTML=ids.map(id=>scooterCard(SCOOTERS.find(x=>x.id===id))).join("");
}
let selected=[];
function initSearch(){
  const list=$("#modelList"), input=$("#modelSearch"), names=$("#selectedNames"), compare=$("#compareBtn");
  if(!list) return;
  function render(){
    const q=(input.value||"").toLowerCase();
    const rows=SCOOTERS.filter(s=>(brandName(s.brand)+" "+s.model).toLowerCase().includes(q));
    list.innerHTML=rows.map(s=>scooterCard(s,true)).join("");
    list.querySelectorAll(".product-card").forEach(card=>{
      const id=card.dataset.id;
      if(selected.includes(id)) card.classList.add("chosen");
      card.addEventListener("click",()=>toggle(id));
    });
  }
  function toggle(id){
    if(selected.includes(id)) selected=selected.filter(x=>x!==id);
    else if(selected.length<2) selected.push(id);
    else { selected=[selected[1],id]; }
    names.textContent=selected.length?selected.map(id=>{const s=SCOOTERS.find(x=>x.id===id);return brandName(s.brand)+" "+s.model}).join("  ×  "):"Sélectionne 2 modèles";
    compare.disabled=selected.length!==2;
    render();
  }
  input.addEventListener("input",render); render();
  compare.addEventListener("click",()=>{ if(selected.length===2) location.href=`compare.html?a=${encodeURIComponent(selected[0])}&b=${encodeURIComponent(selected[1])}`; });
}
function statRow(label,a,b){
  return `<div class="compare-row"><div>${esc(label)}</div><strong>${esc(a)}</strong><strong>${esc(b)}</strong></div>`;
}
function initCompare(){
  const root=$("#compareContent"); if(!root) return;
  const p=new URLSearchParams(location.search);
  const a=SCOOTERS.find(s=>s.id===p.get("a"))||SCOOTERS[0];
  const b=SCOOTERS.find(s=>s.id===p.get("b"))||SCOOTERS[1];
  root.innerHTML=`
  <div class="compare-head">
    <div class="compare-model">${brandHtml(a.brand)}<h2>${esc(brandName(a.brand)+" "+a.model)}</h2><p>${esc(a.summary)}</p></div>
    <div class="vs">VS</div>
    <div class="compare-model">${brandHtml(b.brand)}<h2>${esc(brandName(b.brand)+" "+b.model)}</h2><p>${esc(b.summary)}</p></div>
  </div>
  <div class="compare-table">
    ${statRow("Prix",a.price,b.price)}
    ${statRow("Moteur",a.motor,b.motor)}
    ${statRow("Batterie",a.battery,b.battery)}
    ${statRow("Autonomie annoncée",a.range,b.range)}
    ${statRow("Vitesse bridée / route",a.legalSpeed,b.legalSpeed)}
    ${statRow("Vitesse max. annoncée",a.derestricted,b.derestricted)}
    ${statRow("Poids",a.weight,b.weight)}
    ${statRow("Charge maximale",a.load,b.load)}
    ${statRow("Pneus",a.tire,b.tire)}
    ${statRow("Freins",a.brakes,b.brakes)}
    ${statRow("Suspension",a.suspension,b.suspension)}
    ${statRow("Étanchéité",a.waterproof,b.waterproof)}
    ${statRow("Temps de charge",a.charge,b.charge)}
  </div>
  <div class="verdict-grid">
    <article><div class="eyebrow">POINTS FORTS</div><h3>${brandName(a.brand)} ${esc(a.model)}</h3><ul>${(a.pros||[]).map(x=>`<li>+ ${esc(x)}</li>`).join("")}</ul><p>${esc(a.honest)}</p></article>
    <article><div class="eyebrow">POINTS FORTS</div><h3>${brandName(b.brand)} ${esc(b.model)}</h3><ul>${(b.pros||[]).map(x=>`<li>+ ${esc(x)}</li>`).join("")}</ul><p>${esc(b.honest)}</p></article>
  </div>
  <section class="honest"><div class="eyebrow">AVIS REDGLIDE</div><h2>Laquelle choisir honnêtement ?</h2><p>Il n’y a pas un vainqueur universel : le meilleur choix dépend de ton usage, de ton budget, du poids que tu peux transporter et des règles applicables. Utilise les différences ci-dessus pour choisir selon ton besoin réel.</p>
  </section>
  ${adHtml()}`;
}
function initCategory(){
  const path=location.pathname;
  if(path.endsWith("velo.html")){
    const root=$("#velo-list"); if(!root)return;
    root.innerHTML=VELOS.map(v=>`<article class="category-card"><span>🚲</span><div>${brandHtml(v.brand)}<h3>${esc(v.model)}</h3></div><dl><dt>Prix</dt><dd>${esc(v.price)}</dd><dt>Moteur</dt><dd>${esc(v.motor)}</dd><dt>Batterie</dt><dd>${esc(v.battery)}</dd><dt>Autonomie</dt><dd>${esc(v.range)}</dd><dt>Poids</dt><dd>${esc(v.weight)}</dd></dl><small>${esc(v.extra)}</small></article>`).join("");
  }
  if(path.endsWith("voiture.html")){
    const root=$("#car-list"); if(!root)return;
    root.innerHTML=CARS.map(v=>`<article class="category-card"><span>🚗</span><div>${brandHtml(v.brand)}<h3>${esc(v.model)}</h3></div><dl><dt>Prix</dt><dd>${esc(v.price)}</dd><dt>Puissance</dt><dd>${esc(v.power)}</dd><dt>Autonomie</dt><dd>${esc(v.range)}</dd><dt>0–100</dt><dd>${esc(v.zero100)}</dd><dt>Poids</dt><dd>${esc(v.weight)}</dd></dl><small>${esc(v.extra)}</small></article>`).join("");
  }
}
setupMenu();
initHome(); initSearch(); initCompare(); initCategory();
