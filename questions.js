// Banque de questions — Mécanique & Thermodynamique
// Source : "Questions préliminaires — Réponses courtes" (format flashcard).
// Réponses volontairement minimales : ce qu'il faut écrire, rien de plus.

const QUESTIONS = [
  { c:"unites",   q:"Quelle est l'unité SI d'une énergie ?", a:"Joule (J)" },
  { c:"unites",   q:"Quelle est l'unité SI d'une puissance ?", a:"Watt (W)" },
  { c:"unites",   q:"Quelle est l'unité SI d'une pression ?", a:"Pascal (Pa)" },
  { c:"unites",   q:"Quelle est l'unité SI d'un volume ?", a:"m³" },
  { c:"unites",   q:"Quelle est l'unité SI d'une température ?", a:"Kelvin (K)" },
  { c:"unites",   q:"Quel est le lien entre 1 Joule et 1 Watt ?", a:"1 W = 1 J/s" },
  { c:"signes",   q:"Quel est le signe d'une énergie entrant dans le système ?", a:"Positif" },
  { c:"signes",   q:"Quel est le signe d'une énergie sortant du système ?", a:"Négatif" },
  { c:"formules", q:"Donnez la formule de la loi des gaz parfaits.", a:"pV = mRT (ou nRT)" },
  { c:"unites",   q:"Que vaut R, la constante des gaz parfaits (valeur et unité) ?", a:"R = 8,314 J/(mol·K)" },
  { c:"transfo",  q:"Quelle est la caractéristique d'une courbe isobare ?", a:"p = constante" },
  { c:"transfo",  q:"Quelle est la caractéristique d'une courbe isochore ?", a:"V = constante" },
  { c:"transfo",  q:"Quelle est la caractéristique d'une isotherme ?", a:"T = constante" },
  { c:"transfo",  q:"Quelle est la caractéristique d'une adiabatique réversible ?", a:"Q = 0" },
  { c:"formules", q:"Quelle est la formule générale du travail élémentaire réversible ?", a:"W = − ∫ p dV" },
  { c:"signes", dq:"pvDetente", o:["Positif","Négatif","Nul"], q:"Sur ce diagramme p‑V, le gaz va de i à f. Quel est le signe du travail W reçu par le gaz ?", a:"Négatif" },
  { c:"signes", dq:"pvCompression", o:["Positif","Négatif","Nul"], q:"Même diagramme, flèche inversée : quel est le signe du travail W reçu par le gaz ?", a:"Positif" },
  { c:"cycles", dq:"pvHoraire", o:["Moteur","Récepteur","Ni l'un ni l'autre"], q:"Sur ce diagramme p‑V, le cycle est parcouru dans le sens des flèches. Le cycle est‑il moteur ou récepteur ?", a:"Moteur" },
  { c:"cycles", dq:"pvAntiHoraire", o:["Moteur","Récepteur","Ni l'un ni l'autre"], q:"Même cycle, flèches inversées : le cycle est‑il moteur ou récepteur ?", a:"Récepteur" },
  { c:"formules", q:"Quelle est la formule générale du premier principe de la thermodynamique ?", a:"ΔU = W + Q" },
  { c:"formules", q:"Quelle est la formule du premier principe pour un cycle fermé ?", a:"W + Q = 0" },
  { c:"unites",   q:"Quelle est l'unité d'une chaleur spécifique molaire ?", a:"J/(mol·K)" },
  { c:"transfo",  q:"Pour quel type de transformation puis‑je utiliser T·V^(γ−1) = const, p·V^γ = const et T^γ·V^(1−γ) = const ?", a:"Adiabatique réversible" },
  { c:"transfo", d:"courbes", q:"Dans un diagramme p‑V, quelle est la forme d'une isochore, d'une isobare, d'une isotherme et d'une adiabatique passant par un même point ?", a:"Isochore = verticale, isobare = horizontale, isotherme et adiabatique = hyperboles (adiabatique plus pentue)" },
  { c:"signes",   q:"Machine MOTRICE : quels sont les signes de Q₁ (source chaude), Q₂ (source froide) et W (total) ?", a:"Q₁ > 0, Q₂ < 0, W < 0" },
  { c:"formules", q:"Quelle est la formule générale du rendement d'un cycle moteur ?", a:"η = |W| / Q₁" },
  { c:"cycles",   q:"Quelle information nous donne le rendement de Carnot d'un cycle ?", a:"Le rendement maximal théorique du cycle" },
  { c:"transfo",  q:"Quel type de transformation est utilisé pour un compresseur dans un cycle ?", a:"Adiabatique réversible" },
  { c:"transfo",  q:"Quel type de transformation est utilisé pour une turbine dans un cycle ?", a:"Adiabatique réversible" },
  { c:"transfo",  q:"Quel type de transformation est utilisé pour un échangeur dans un cycle ?", a:"Isobare" },
  { c:"cycles", d:"otto",   q:"Quelles sont les 5 étapes (et leurs transformations) d'un cycle moteur ESSENCE 4 temps ?", a:"Admission (isobare) → compression (adiabatique) → explosion (isochore) → détente (adiabatique) → échappement (isochore)" },
  { c:"cycles", d:"diesel", q:"Quelles sont les 5 étapes (et leurs transformations) d'un cycle moteur DIESEL 4 temps ?", a:"Admission (isobare) → compression (adiabatique) → combustion (isobare) → détente (adiabatique) → échappement (isochore)" },
  { c:"cycles",   q:"Comment appelle‑t‑on le volume MAXIMAL dans le cylindre d'un moteur à explosion ?", a:"Volume du point mort bas (PMB)" },
  { c:"cycles",   q:"Comment appelle‑t‑on le volume MINIMAL dans le cylindre d'un moteur à explosion ?", a:"Volume du point mort haut (PMH)" },
  { c:"formules", q:"Quelle est la formule générale de combustion d'un hydrocarbure ?", a:"CxHy + (x + y/4) O₂ → x CO₂ + (y/2) H₂O" },
  { c:"cycles", d:"frigo",  q:"Quels sont les éléments constituant une machine frigorifique / PAC, dans l'ordre ?", a:"Évaporateur → compresseur → condenseur → détendeur" }
];

// Schémas à savoir refaire à l'examen, affichés avec la correction.
// Repères : V_PmH = point mort haut (volume mini, à gauche), V_PmB = point mort bas (à droite).
const DIAGRAMS = {

  pvDetente: `<svg viewBox="0 0 360 200" role="img" aria-label="Diagramme p-V, evolution de i vers f">
    <defs><marker id="aDet" markerWidth="8" markerHeight="8" refX="6" refY="3.5"
      orient="auto"><path d="M0,0 L7,3.5 L0,7 z" class="ar"/></marker></defs>
    <path class="ax" d="M45 20 L45 165 L330 165"/>
    <text class="lb" x="34" y="26">p</text><text class="lb" x="325" y="182">V</text>
    <path class="gd" d="M95 130 L95 165 M255 58 L255 165"/>
    <path class="cv" d="M95 130 C135 88 175 120 247 63" marker-end="url(#aDet)"/>
    <circle class="pt" cx="95" cy="130" r="4"/><text class="nm" x="85" y="126" text-anchor="end">i</text>
    <circle class="pt" cx="255" cy="58" r="4"/><text class="nm" x="266" y="54">f</text>
    <text class="lb" x="95" y="180" text-anchor="middle">V_i</text>
    <text class="lb" x="255" y="180" text-anchor="middle">V_f</text>
  </svg>`,

  pvCompression: `<svg viewBox="0 0 360 200" role="img" aria-label="Diagramme p-V, evolution de i vers f">
    <defs><marker id="aCom" markerWidth="8" markerHeight="8" refX="6" refY="3.5"
      orient="auto"><path d="M0,0 L7,3.5 L0,7 z" class="ar"/></marker></defs>
    <path class="ax" d="M45 20 L45 165 L330 165"/>
    <text class="lb" x="34" y="26">p</text><text class="lb" x="325" y="182">V</text>
    <path class="gd" d="M95 130 L95 165 M255 58 L255 165"/>
    <path class="cv" d="M255 58 C175 120 138 90 103 125" marker-end="url(#aCom)"/>
    <circle class="pt" cx="255" cy="58" r="4"/><text class="nm" x="266" y="54">i</text>
    <circle class="pt" cx="95" cy="130" r="4"/><text class="nm" x="85" y="126" text-anchor="end">f</text>
    <text class="lb" x="255" y="180" text-anchor="middle">V_i</text>
    <text class="lb" x="95" y="180" text-anchor="middle">V_f</text>
  </svg>`,

  pvHoraire: `<svg viewBox="0 0 360 200" role="img" aria-label="Cycle p-V parcouru dans le sens horaire">
    <defs><marker id="aHor" markerWidth="8" markerHeight="8" refX="6" refY="3.5"
      orient="auto"><path d="M0,0 L7,3.5 L0,7 z" class="ar"/></marker></defs>
    <path class="ax" d="M45 20 L45 165 L330 165"/>
    <text class="lb" x="34" y="26">p</text><text class="lb" x="325" y="182">V</text>
    <path class="cv" d="M107 102 C107 73.3 146.4 50 195 50" marker-end="url(#aHor)"/>
    <path class="cv" d="M195 50 C243.6 50 283 73.3 283 102" marker-end="url(#aHor)"/>
    <path class="cv" d="M283 102 C283 130.7 243.6 154 195 154" marker-end="url(#aHor)"/>
    <path class="cv" d="M195 154 C146.4 154 107 130.7 107 102" marker-end="url(#aHor)"/>
  </svg>`,

  pvAntiHoraire: `<svg viewBox="0 0 360 200" role="img" aria-label="Cycle p-V parcouru dans le sens antihoraire">
    <defs><marker id="aAnt" markerWidth="8" markerHeight="8" refX="6" refY="3.5"
      orient="auto"><path d="M0,0 L7,3.5 L0,7 z" class="ar"/></marker></defs>
    <path class="ax" d="M45 20 L45 165 L330 165"/>
    <text class="lb" x="34" y="26">p</text><text class="lb" x="325" y="182">V</text>
    <path class="cv" d="M107 102 C107 130.7 146.4 154 195 154" marker-end="url(#aAnt)"/>
    <path class="cv" d="M195 154 C243.6 154 283 130.7 283 102" marker-end="url(#aAnt)"/>
    <path class="cv" d="M283 102 C283 73.3 243.6 50 195 50" marker-end="url(#aAnt)"/>
    <path class="cv" d="M195 50 C146.4 50 107 73.3 107 102" marker-end="url(#aAnt)"/>
  </svg>`,

  courbes: `<svg viewBox="0 0 360 225" role="img" aria-label="Les quatre courbes par un même point">
    <path class="ax" d="M45 20 L45 196 L205 196"/>
    <text class="lb" x="34" y="26">p</text><text class="lb" x="211" y="200">V</text>
    <path class="c1" d="M110 30 L110 190"/>
    <path class="c2" d="M52 110 L198 110"/>
    <path class="c3" d="M60 40 C84 92 92 104 110 110 C140 120 168 138 196 150"/>
    <path class="c4" d="M76 30 C96 84 102 100 110 110 C128 132 152 158 180 178"/>
    <circle class="pt" cx="110" cy="110" r="3.5"/>
    <text class="lb" x="52" y="154">même point</text>
    <path class="c1" d="M218 56 L246 56"/><text class="nm" x="254" y="60">isochore</text>
    <path class="c2" d="M218 86 L246 86"/><text class="nm" x="254" y="90">isobare</text>
    <path class="c3" d="M218 116 L246 116"/><text class="nm" x="254" y="120">isotherme</text>
    <path class="c4" d="M218 146 L246 146"/><text class="nm" x="254" y="150">adiabatique</text>
    <text class="lb" x="45" y="219">l'adiabatique est plus pentue que l'isotherme (γ &gt; 1)</text>
  </svg>`,

  otto: `<svg viewBox="0 0 360 230" role="img" aria-label="Diagramme p-V du cycle essence">
    <defs><marker id="aOtto" markerWidth="7" markerHeight="7" refX="5" refY="3"
      orient="auto"><path d="M0,0 L6,3 L0,6 z" class="ar"/></marker></defs>
    <path class="ax" d="M45 25 L45 190 L335 190"/>
    <text class="lb" x="34" y="30">p</text><text class="lb" x="330" y="207">V</text>
    <path class="gd" d="M110 190 L110 30 M255 190 L255 30"/>
    <text class="lb" x="110" y="207" text-anchor="middle">V_PmH</text>
    <text class="lb" x="255" y="207" text-anchor="middle">V_PmB</text>
    <path class="cv" d="M110 170 L255 170"/>
    <path class="cv" d="M110 170 L186 170" marker-end="url(#aOtto)"/>
    <path class="cv" d="M255 170 L200 170" marker-end="url(#aOtto)"/>
    <path class="cv" d="M255 170 Q180 158 110 112" marker-end="url(#aOtto)"/>
    <path class="cv" d="M110 112 L110 45"  marker-end="url(#aOtto)"/>
    <path class="cv" d="M110 45 Q185 105 255 128" marker-end="url(#aOtto)"/>
    <path class="cv" d="M255 128 L255 170" marker-end="url(#aOtto)"/>
    <circle class="pt" cx="110" cy="170" r="3"/><text class="nm" x="99"  y="182">A</text>
    <circle class="pt" cx="255" cy="170" r="3"/><text class="nm" x="263" y="182">B</text>
    <circle class="pt" cx="110" cy="112" r="3"/><text class="nm" x="94"  y="112">C</text>
    <circle class="pt" cx="110" cy="45"  r="3"/><text class="nm" x="94"  y="45">D</text>
    <circle class="pt" cx="255" cy="128" r="3"/><text class="nm" x="263" y="128">E</text>
    <text class="st" x="182" y="183" text-anchor="middle">1</text>
    <text class="st" x="185" y="136" text-anchor="middle">2</text>
    <text class="st" x="101" y="82"  text-anchor="end">3</text>
    <text class="st" x="192" y="86"  text-anchor="middle">4</text>
    <text class="st" x="264" y="151">5</text>
    <text class="lb" x="45" y="224">1 → 5 = les 5 étapes, dans l'ordre de la réponse</text>
  </svg>`,

  diesel: `<svg viewBox="0 0 360 230" role="img" aria-label="Diagramme p-V du cycle diesel">
    <defs><marker id="aDies" markerWidth="7" markerHeight="7" refX="5" refY="3"
      orient="auto"><path d="M0,0 L6,3 L0,6 z" class="ar"/></marker></defs>
    <path class="ax" d="M45 25 L45 190 L335 190"/>
    <text class="lb" x="34" y="30">p</text><text class="lb" x="330" y="207">V</text>
    <path class="gd" d="M110 190 L110 30 M255 190 L255 30"/>
    <text class="lb" x="110" y="207" text-anchor="middle">V_PmH</text>
    <text class="lb" x="255" y="207" text-anchor="middle">V_PmB</text>
    <path class="cv" d="M110 170 L255 170"/>
    <path class="cv" d="M110 170 L186 170" marker-end="url(#aDies)"/>
    <path class="cv" d="M255 170 L200 170" marker-end="url(#aDies)"/>
    <path class="cv" d="M255 170 Q180 155 110 60" marker-end="url(#aDies)"/>
    <path class="cv" d="M110 60 L168 60" marker-end="url(#aDies)"/>
    <path class="cv" d="M168 60 Q215 108 255 130" marker-end="url(#aDies)"/>
    <path class="cv" d="M255 130 L255 170" marker-end="url(#aDies)"/>
    <circle class="pt" cx="110" cy="170" r="3"/><text class="nm" x="99"  y="182">A</text>
    <circle class="pt" cx="255" cy="170" r="3"/><text class="nm" x="263" y="182">B</text>
    <circle class="pt" cx="110" cy="60"  r="3"/><text class="nm" x="94"  y="58">C</text>
    <circle class="pt" cx="168" cy="60"  r="3"/><text class="nm" x="170" y="52">D</text>
    <circle class="pt" cx="255" cy="130" r="3"/><text class="nm" x="263" y="130">E</text>
    <text class="st" x="182" y="183" text-anchor="middle">1</text>
    <text class="st" x="172" y="122" text-anchor="middle">2</text>
    <text class="st" x="139" y="50"  text-anchor="middle">3</text>
    <text class="st" x="218" y="86"  text-anchor="middle">4</text>
    <text class="st" x="264" y="153">5</text>
    <text class="lb" x="45" y="224">3 = ISOBARE (c'est là que le diesel diffère de l'essence)</text>
  </svg>`,

  frigo: `<svg viewBox="0 0 430 252" role="img" aria-label="Schema d'une machine frigorifique">
    <defs><marker id="aFrigo" markerWidth="8" markerHeight="8" refX="6" refY="3.5"
      orient="auto"><path d="M0,0 L7,3.5 L0,7 z" class="ar"/></marker>
      <marker id="aChal" markerWidth="8" markerHeight="8" refX="6" refY="3.5"
      orient="auto"><path d="M0,0 L7,3.5 L0,7 z" class="arl"/></marker></defs>

    <path class="ln" d="M105 100 L105 60 L166 60" marker-end="url(#aFrigo)"/>
    <path class="ln" d="M254 60 L315 60 L315 100" marker-end="url(#aFrigo)"/>
    <path class="ln" d="M315 178 L315 205 L240 205" marker-end="url(#aFrigo)"/>
    <path class="ln" d="M180 205 L105 205 L105 178" marker-end="url(#aFrigo)"/>

    <path class="bx" d="M166 32 L254 46 L254 74 L166 88 z"/>
    <text class="nm" x="210" y="64" text-anchor="middle">Compresseur</text>
    <path class="ln" d="M210 8 L210 31" marker-end="url(#aChal)"/>
    <text class="nm" x="219" y="16">w &gt; 0</text>
    <text class="lb" x="219" y="29">travail reçu</text>

    <rect class="bx" x="55" y="100" width="100" height="78" rx="7"/>
    <text class="nm" x="105" y="118" text-anchor="middle">Évaporateur</text>
    <text class="lb" x="105" y="131" text-anchor="middle">BP · froid</text>
    <path class="coil" d="M62 158 L74 146 L88 170 L102 146 L116 170 L130 146 L138 152 L148 158"/>
    <path class="ln" d="M10 139 L48 139" marker-end="url(#aChal)"/>
    <text class="nm" x="29" y="131" text-anchor="middle">q₂ &gt; 0</text>
    <text class="lb" x="29" y="163" text-anchor="middle">source</text>
    <text class="lb" x="29" y="175" text-anchor="middle">froide</text>

    <rect class="bx" x="265" y="100" width="100" height="78" rx="7"/>
    <text class="nm" x="315" y="118" text-anchor="middle">Condenseur</text>
    <text class="lb" x="315" y="131" text-anchor="middle">HP · chaud</text>
    <path class="coil" d="M272 158 L284 146 L298 170 L312 146 L326 170 L340 146 L348 152 L358 158"/>
    <path class="ln" d="M372 139 L410 139" marker-end="url(#aChal)"/>
    <text class="nm" x="391" y="131" text-anchor="middle">q₁ &lt; 0</text>
    <text class="lb" x="391" y="163" text-anchor="middle">source</text>
    <text class="lb" x="391" y="175" text-anchor="middle">chaude</text>

    <path class="bx" d="M180 191 L180 219 L210 205 z"/>
    <path class="bx" d="M240 191 L240 219 L210 205 z"/>
    <text class="nm" x="210" y="235" text-anchor="middle">Détendeur</text>
    <text class="lb" x="210" y="247" text-anchor="middle">vanne · h₄ = h₃</text>

    <text class="st" x="97" y="88" text-anchor="end">1</text>
    <text class="st" x="324" y="88">2</text>
    <text class="st" x="324" y="199">3</text>
    <text class="st" x="97" y="199" text-anchor="end">4</text>
  </svg>`
};

// Leurres plausibles, par catégorie. Le QCM pioche en priorité ceux de la même
// catégorie et de longueur comparable à la bonne réponse, pour ne pas la trahir.
const DECOYS = {
  unites: [
    "Newton (N)", "Coulomb (C)", "Celsius (°C)", "Bar (bar)", "Litre (L)", "kWh",
    "m²", "mol", "J/K", "J/(kg·K)", "W/m²", "kg·m⁻¹·s⁻²",
    "1 J = 1 W/s", "1 W = 1 J·s",
    "R = 0,082 L·atm/(mol·K)", "R = 1,987 cal/(mol·K)", "R = 8,314 J/(kg·K)"
  ],
  signes: [
    "Positif", "Négatif", "Nul",
    "Positif (détente)", "Négatif (compression)", "Positif (compression)", "Nul (V constant)",
    "Q₁ < 0, Q₂ > 0, W > 0", "Q₁ > 0, Q₂ > 0, W < 0", "Q₁ < 0, Q₂ < 0, W > 0",
    "Q₁ > 0, Q₂ < 0, W > 0", "Q₁ < 0, Q₂ > 0, W < 0"
  ],
  formules: [
    "ΔU = W − Q", "ΔU = Q − W", "pV = nRT/m", "pV = R T", "ΔU = m c ΔT", "pV = mRT", "pV^γ = nRT",
    "W = + ∫ p dV", "W = p ΔV", "W − Q = 0", "H = U + pV", "ΔS = Q / T",
    "η = Q₁ / |W|", "η = |W| / Q₂", "η = 1 − T₁/T₂", "η = (Q₁ + Q₂) / |W|",
    "CxHy + x O₂ → x CO₂ + y H₂O",
    "CxHy + (x + y/2) O₂ → x CO₂ + (y/4) H₂O",
    "CxHy + (2x + y/2) O₂ → x CO₂ + y H₂O"
  ],
  transfo: [
    "p = constante", "V = constante", "T = constante", "Q = 0", "S = constante",
    "Isobare", "Isochore", "Isotherme", "Isotherme réversible", "Isenthalpique",
    "Polytropique", "Adiabatique irréversible", "Isobare réversible",
    "Q = 0 et S augmente", "Q = 0 et W = 0", "T = constante (pV^γ = cste)", "p = constante (V/T = cste)",
    "Isochore = horizontale, isobare = verticale, isotherme et adiabatique = droites obliques",
    "Isochore = verticale, isobare = horizontale, isotherme et adiabatique = hyperboles (isotherme plus pentue)",
    "Isochore et isobare = hyperboles, isotherme = verticale, adiabatique = horizontale"
  ],
  cycles: [
    "Moteur", "Récepteur", "Ni l'un ni l'autre : W_tot = 0",
    "Volume du point mort haut (PMH)", "Volume du point mort bas (PMB)",
    "Volume du point mort milieu (PMM)", "Volume de la cylindrée", "Volume mort",
    "Le rendement réel mesuré de la machine",
    "Le rendement minimal à atteindre pour être rentable",
    "Le rendement moyen des machines réelles",
    "La chaleur perdue à la source froide",
    "Admission (isochore) → compression (isotherme) → explosion (isobare) → détente (isotherme) → échappement (isobare)",
    "Admission (isobare) → compression (adiabatique) → combustion (isochore) → détente (adiabatique) → échappement (isobare)",
    "Admission (adiabatique) → compression (isobare) → explosion (isochore) → détente (isobare) → échappement (adiabatique)",
    "Admission (isobare) → compression (isotherme) → combustion (isobare) → détente (isotherme) → échappement (isochore)",
    "Évaporateur → détendeur → condenseur → compresseur",
    "Compresseur → évaporateur → détendeur → condenseur",
    "Condenseur → compresseur → évaporateur → détendeur",
    "Évaporateur → condenseur → compresseur → détendeur",
    "Cycle de Carnot : 2 isothermes + 2 adiabatiques"
  ]
};
