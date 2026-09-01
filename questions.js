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
  { c:"formules", q:"Donnez la formule de la loi des gaz parfaits.", a:"pV = nRT" },
  { c:"unites",   q:"Que vaut R, la constante des gaz parfaits (valeur et unité) ?", a:"R = 8,314 J/(mol·K)" },
  { c:"transfo",  q:"Quelle est la caractéristique d'une courbe isobare ?", a:"p = constante" },
  { c:"transfo",  q:"Quelle est la caractéristique d'une courbe isochore ?", a:"V = constante" },
  { c:"transfo",  q:"Quelle est la caractéristique d'une isotherme ?", a:"T = constante" },
  { c:"transfo",  q:"Quelle est la caractéristique d'une adiabatique réversible ?", a:"Q = 0 (S = constante)" },
  { c:"formules", q:"Quelle est la formule générale du travail élémentaire réversible ?", a:"W = − ∫ p dV" },
  { c:"signes",   q:"Sur un diagramme p‑V, le volume augmente globalement de i à f : le travail est‑il positif, négatif ou nul ?", a:"Négatif (détente)" },
  { c:"cycles",   q:"Sur un diagramme p‑V, un cycle parcouru dans le sens horaire est‑il récepteur ou moteur ?", a:"Moteur" },
  { c:"formules", q:"Quelle est la formule générale du premier principe de la thermodynamique ?", a:"ΔU = W + Q" },
  { c:"formules", q:"Quelle est la formule du premier principe pour un cycle fermé ?", a:"W + Q = 0" },
  { c:"unites",   q:"Quelle est l'unité d'une chaleur spécifique molaire ?", a:"J/(mol·K)" },
  { c:"transfo",  q:"Pour quel type de transformation puis‑je utiliser TV^(γ−1) = cste, pV^γ = cste et TP^((1−γ)/γ) = cste ?", a:"Adiabatique réversible" },
  { c:"transfo",  q:"Dans un diagramme p‑V, quelle est la forme d'une isochore, d'une isobare, d'une isotherme et d'une adiabatique passant par un même point ?", a:"Isochore = verticale, isobare = horizontale, isotherme et adiabatique = hyperboles (adiabatique plus pentue)" },
  { c:"signes",   q:"Machine MOTRICE : quels sont les signes de Q₁ (source chaude), Q₂ (source froide) et W (total) ?", a:"Q₁ > 0, Q₂ < 0, W < 0" },
  { c:"formules", q:"Quelle est la formule générale du rendement d'un cycle moteur ?", a:"η = |W| / Q₁" },
  { c:"cycles",   q:"Quelle information nous donne le rendement de Carnot d'un cycle ?", a:"Le rendement maximal théorique entre deux sources" },
  { c:"transfo",  q:"Quel type de transformation est utilisé pour un compresseur dans un cycle ?", a:"Adiabatique réversible" },
  { c:"transfo",  q:"Quel type de transformation est utilisé pour une turbine dans un cycle ?", a:"Adiabatique réversible" },
  { c:"transfo",  q:"Quel type de transformation est utilisé pour un échangeur dans un cycle ?", a:"Isobare" },
  { c:"cycles", d:"otto",   q:"Quelles sont les 5 étapes (et leurs transformations) d'un cycle moteur ESSENCE 4 temps ?", a:"Admission (isobare) → compression (adiabatique) → explosion (isochore) → détente (adiabatique) → échappement (isochore)" },
  { c:"cycles", d:"diesel", q:"Quelles sont les 5 étapes (et leurs transformations) d'un cycle moteur DIESEL 4 temps ?", a:"Admission (isobare) → compression (adiabatique) → combustion (isobare) → détente (adiabatique) → échappement (isochore)" },
  { c:"cycles",   q:"Comment appelle‑t‑on le volume dans le cylindre quand le piston est le plus haut ?", a:"Point mort haut (PMH)" },
  { c:"cycles",   q:"Comment appelle‑t‑on le volume dans le cylindre quand le piston est le plus bas ?", a:"Point mort bas (PMB)" },
  { c:"formules", q:"Quelle est la formule générale de combustion d'un hydrocarbure ?", a:"CxHy + (x + y/4) O₂ → x CO₂ + (y/2) H₂O" },
  { c:"cycles", d:"frigo",  q:"Quels sont les éléments constituant une machine frigorifique / PAC, dans l'ordre ?", a:"Évaporateur → compresseur → condenseur → détendeur" }
];

// Schémas à savoir refaire à l'examen, affichés avec la correction.
// Repères : V_PmH = point mort haut (volume mini, à gauche), V_PmB = point mort bas (à droite).
const DIAGRAMS = {

  otto: `<svg viewBox="0 0 360 230" role="img" aria-label="Diagramme p-V du cycle essence">
    <defs><marker id="aOtto" markerWidth="7" markerHeight="7" refX="5" refY="3"
      orient="auto"><path d="M0,0 L6,3 L0,6 z" class="ar"/></marker></defs>
    <path class="ax" d="M45 25 L45 190 L335 190"/>
    <text class="lb" x="34" y="30">p</text><text class="lb" x="330" y="207">V</text>
    <path class="gd" d="M110 190 L110 30 M255 190 L255 30"/>
    <text class="lb" x="110" y="207" text-anchor="middle">V_PmH</text>
    <text class="lb" x="255" y="207" text-anchor="middle">V_PmB</text>
    <path class="cv" d="M110 170 L255 170" marker-end="url(#aOtto)"/>
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
    <path class="cv" d="M110 170 L255 170" marker-end="url(#aDies)"/>
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

  frigo: `<svg viewBox="0 0 420 232" role="img" aria-label="Schéma d'une machine frigorifique">
    <defs><marker id="aFrigo" markerWidth="7" markerHeight="7" refX="5" refY="3"
      orient="auto"><path d="M0,0 L6,3 L0,6 z" class="arl"/></marker></defs>
    <path class="ln" d="M105 92 L105 40 L166 40" marker-end="url(#aFrigo)"/>
    <path class="ln" d="M254 40 L315 40 L315 92" marker-end="url(#aFrigo)"/>
    <path class="ln" d="M315 134 L315 186 L254 186" marker-end="url(#aFrigo)"/>
    <path class="ln" d="M166 186 L105 186 L105 134" marker-end="url(#aFrigo)"/>
    <rect class="bx" x="166" y="22"  width="88" height="36" rx="6"/>
    <text class="nm" x="210" y="45" text-anchor="middle">Compresseur</text>
    <rect class="bx" x="272" y="92"  width="86" height="42" rx="6"/>
    <text class="nm" x="315" y="110" text-anchor="middle">Conden-</text>
    <text class="nm" x="315" y="124" text-anchor="middle">seur (HP)</text>
    <rect class="bx" x="166" y="168" width="88" height="36" rx="6"/>
    <text class="nm" x="210" y="191" text-anchor="middle">Détendeur</text>
    <rect class="bx" x="62"  y="92"  width="86" height="42" rx="6"/>
    <text class="nm" x="105" y="110" text-anchor="middle">Évapora-</text>
    <text class="nm" x="105" y="124" text-anchor="middle">teur (BP)</text>
    <text class="lb" x="54" y="107" text-anchor="end">Source</text>
    <text class="lb" x="54" y="121" text-anchor="end">froide</text>
    <text class="lb" x="366" y="107">Source</text>
    <text class="lb" x="366" y="121">chaude</text>
    <text class="lb" x="96"  y="70"  text-anchor="end">1</text>
    <text class="lb" x="324" y="70">2</text>
    <text class="lb" x="324" y="162">3</text>
    <text class="lb" x="96"  y="162" text-anchor="end">4</text>
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
    "ΔU = W − Q", "ΔU = Q − W", "ΔU = m c ΔT", "pV = mRT", "pV^γ = nRT",
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
    "Q = 0 (S augmente)", "T = constante (pV^γ = cste)", "p = constante (V/T = cste)",
    "Isochore = horizontale, isobare = verticale, isotherme et adiabatique = droites obliques",
    "Isochore = verticale, isobare = horizontale, isotherme et adiabatique = hyperboles (isotherme plus pentue)",
    "Isochore et isobare = hyperboles, isotherme = verticale, adiabatique = horizontale"
  ],
  cycles: [
    "Moteur", "Récepteur", "Ni l'un ni l'autre : W_tot = 0",
    "Point mort haut (PMH)", "Point mort bas (PMB)", "Point mort milieu (PMM)",
    "Cylindrée maximale", "Volume mort",
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
