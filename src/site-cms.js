(function () {
  if (window.SahroCMS) return;
  const CATS = [
    ["Master Catalogue - All Categories", "Master_Catalogue_All_Categories.pdf", "public/catalogues/Master_Catalogue_All_Categories.pdf", 19097596, "public/catalogues/Master_Catalogue_All_Categories_thumb.jpg"],
  ];
  const DEFAULTS = {
    slides: [
      { img: "src/assets/hero-bathroom.webp", kicker: "Bathroom Accessories", title: "Premium bathroom hardware, crafted for modern living.", sub: "Chrome-finished towel rails, glass shelves, holders and connectors engineered to last." },
      { img: "src/assets/hero-glass-door.webp", kicker: "Glass Door Accessories", title: "Glass door hardware, engineered in-house.", sub: "Hinges, patch fittings, clamps and locks for frameless glass door systems." },
      { img: "src/assets/hero-auto-sliding.webp", kicker: "Automatic Sliding Doors", title: "Automatic sliding door systems for commercial entrances.", sub: "Smooth, reliable operation with sensors, tracks and premium mechanisms." },
      { img: "src/assets/hero-window.webp", kicker: "Window Accessories", title: "Window hardware built for the Gulf climate.", sub: "Durable handles, rollers, hinges, locks and multi-point systems for aluminium and uPVC windows." },
      { img: "src/assets/hero-hardware.webp", kicker: "Hardware Accessories", title: "The complete range of architectural hardware.", sub: "Brackets, clamps, screws, bolts, closers and specialist fittings for every installation." },
    ],
    why: ["src/assets/about.webp"],
    about: { image: "src/assets/about.webp" },
    catalogues: CATS.map(([title, filename, url, size, thumb], i) => ({ id: "c" + i, title, filename, url, size, thumb })),
    projects: [
      { id: "p1", title: "Al Nakheel Residential Tower — Riyadh", location: "Riyadh, Saudi Arabia", year: "2024", images: ["src/assets/hero-bathroom.webp"],
        summary: "Complete supply of frameless shower enclosures, bathroom accessories and glass hardware across 180 luxury apartments.",
        scope: ["Shower hinges, glass clamps and support rods", "Chrome-finished bathroom accessory sets", "Frameless glass door patch fittings"] },
      { id: "p2", title: "Grand Plaza Business Hotel — Riyadh", location: "Al Sina'iyah, Riyadh, KSA", year: "2023", images: ["src/assets/hero-glass-door.webp"],
        summary: "End-to-end glass door hardware for the lobby, meeting rooms and 240 guest bathrooms — including automatic sliding entrances.",
        scope: ["Automatic sliding door systems at main entrances", "Floor springs and glass door locks for meeting rooms", "Full bathroom hardware package across all guest floors"] },
    ],
    contact: { phone: "+966 56 450 8627", email: "kcdtc@gmail.com", address: "JQR4+798, Al Madina Al Munawwarah Rd,\nAl Sina'iyah, Riyadh, 12845, KSA", mapUrl: "https://share.google/O3m75lu0OQ2TgzQR5" },
  };
  let dbp;
  const open = () => dbp || (dbp = new Promise((res, rej) => {
    const r = indexedDB.open("sahro-cms", 1);
    r.onupgradeneeded = () => { r.result.createObjectStore("content"); r.result.createObjectStore("files"); };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  }));
  const req = (store, mode, fn) => open().then((db) => new Promise((res, rej) => {
    const t = db.transaction(store, mode);
    const q = fn(t.objectStore(store));
    t.oncomplete = () => res(q ? q.result : undefined);
    t.onerror = () => rej(t.error);
    t.onabort = () => rej(t.error);
  }));
  const clone = (v) => (v === undefined ? v : JSON.parse(JSON.stringify(v)));
  const urlCache = {};
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  const CMS = {
    DEFAULTS,
    clone,
    async getStored(key) { try { return await req("content", "readonly", (s) => s.get(key)); } catch (e) { return undefined; } },
    async get(key) { const v = await CMS.getStored(key); return v === undefined ? clone(DEFAULTS[key]) : v; },
    set: (key, val) => req("content", "readwrite", (s) => s.put(clone(val), key)),
    reset: (key) => req("content", "readwrite", (s) => s.delete(key)),
    async putFile(file) {
      const id = uid();
      await req("files", "readwrite", (s) => s.put({ blob: file, name: file.name, type: file.type }, id));
      const ref = "idb:" + id;
      urlCache[ref] = URL.createObjectURL(file);
      return ref;
    },
    async url(ref) {
      if (typeof ref !== "string" || !ref.startsWith("idb:")) return ref || "";
      if (urlCache[ref]) return urlCache[ref];
      try {
        const rec = await req("files", "readonly", (s) => s.get(ref.slice(4)));
        return rec ? (urlCache[ref] = URL.createObjectURL(rec.blob)) : "";
      } catch (e) { return ""; }
    },
    async resolve(v) {
      if (typeof v === "string") return v.startsWith("idb:") ? CMS.url(v) : v;
      if (Array.isArray(v)) return Promise.all(v.map(CMS.resolve));
      if (v && typeof v === "object") { const o = {}; for (const k of Object.keys(v)) o[k] = await CMS.resolve(v[k]); return o; }
      return v;
    },
    async load(key) { return CMS.resolve(await CMS.get(key)); },
    async gc() {
      try {
        const keys = await req("content", "readonly", (s) => s.getAllKeys());
        const used = new Set();
        for (const k of keys) JSON.stringify(await CMS.getStored(k)).replace(/"idb:([^"]+)"/g, (m, id) => used.add(id));
        const fk = await req("files", "readonly", (s) => s.getAllKeys());
        const dead = fk.filter((k) => !used.has(k));
        if (dead.length) await req("files", "readwrite", (s) => { dead.forEach((k) => s.delete(k)); });
      } catch (e) {}
    },
  };
  window.SahroCMS = CMS;
})();
