// Banque de questions — Mécanique & Thermodynamique
// Source : "Questions préliminaires — Réponses courtes" (format flashcard)

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
  { c:"transfo",  q:"Quelle est la caractéristique d'une isotherme ?", a:"T = constante (donc pV = constante pour un gaz parfait)" },
  { c:"transfo",  q:"Quelle est la caractéristique d'une adiabatique réversible ?", a:"Q = 0, isentropique : S = constante (on peut revenir à l'état initial)" },
  { c:"formules", q:"Quelle est la formule générale du travail élémentaire réversible ?", a:"W = − ∫ p dV, de Vi à Vf" },
  { c:"signes",   q:"Sur un diagramme p‑V, le volume augmente globalement de i à f : le travail est‑il positif, négatif ou nul ?", a:"Négatif : c'est une détente, le système fournit du travail à l'extérieur (W < 0)" },
  { c:"cycles",   q:"Sur un diagramme p‑V, un cycle parcouru dans le sens horaire est‑il récepteur ou moteur ?", a:"Moteur : détente en haute pression puis compression en basse pression → W_tot < 0 ; l'aire du cycle = |W_tot|" },
  { c:"formules", q:"Quelle est la formule générale du premier principe de la thermodynamique ?", a:"ΔU = W + Q" },
  { c:"formules", q:"Quelle est la formule du premier principe pour un cycle fermé ?", a:"W + Q = 0" },
  { c:"unites",   q:"Quelle est l'unité d'une chaleur spécifique molaire ?", a:"J/(mol·K)" },
  { c:"transfo",  q:"Pour quel type de transformation puis‑je utiliser TV^(γ−1) = cste, pV^γ = cste et TP^((1−γ)/γ) = cste ?", a:"Une transformation adiabatique réversible (gaz parfait)" },
  { c:"transfo",  q:"Dans un diagramme p‑V, quelle est la forme d'une isochore, d'une isobare, d'une isotherme et d'une adiabatique passant par un même point ?", a:"Isochore = verticale, isobare = horizontale, isotherme = hyperbole (pV = cste), adiabatique = hyperbole plus pentue que l'isotherme (pV^γ = cste, γ > 1)" },
  { c:"signes",   q:"Machine MOTRICE : quels sont les signes de Q₁ (source chaude), Q₂ (source froide) et W (total) ?", a:"Q₁ > 0, Q₂ < 0, W < 0" },
  { c:"formules", q:"Quelle est la formule générale du rendement d'un cycle moteur ?", a:"η = |W| / Q₁ = énergie utile / énergie fournie" },
  { c:"cycles",   q:"Quelle information nous donne le rendement de Carnot d'un cycle ?", a:"Le rendement maximal théorique (limite indépassable) entre deux sources de température données" },
  { c:"transfo",  q:"Quel type de transformation est utilisé pour un compresseur dans un cycle ?", a:"Adiabatique réversible (isentropique)" },
  { c:"transfo",  q:"Quel type de transformation est utilisé pour une turbine dans un cycle ?", a:"Adiabatique réversible (isentropique)" },
  { c:"transfo",  q:"Quel type de transformation est utilisé pour un échangeur dans un cycle ?", a:"Isobare" },
  { c:"cycles",   q:"Quelles sont les 5 étapes (et leurs transformations) d'un cycle moteur ESSENCE 4 temps ?", a:"Admission (isobare, B→A) → compression (adiabatique, B→C) → explosion (isochore, C→D) → détente (adiabatique, D→E) → échappement (isochore, E→B)" },
  { c:"cycles",   q:"Quelles sont les 5 étapes (et leurs transformations) d'un cycle moteur DIESEL 4 temps ?", a:"Admission d'air seul (isobare, B→A) → compression (adiabatique, B→C) → injection + combustion (isobare, C→D, pas isochore) → détente (adiabatique, D→E) → échappement (isochore, E→B)" },
  { c:"cycles",   q:"Comment appelle‑t‑on le volume dans le cylindre quand le piston est le plus haut ?", a:"Point mort haut (PMH) — volume minimal" },
  { c:"cycles",   q:"Comment appelle‑t‑on le volume dans le cylindre quand le piston est le plus bas ?", a:"Point mort bas (PMB) — volume maximal" },
  { c:"formules", q:"Quelle est la formule générale de combustion d'un hydrocarbure ?", a:"CxHy + (x + y/4) O₂ → x CO₂ + (y/2) H₂O + chaleur" },
  { c:"cycles",   q:"Quels sont les éléments constituant une machine frigorifique / PAC, dans l'ordre ?", a:"Évaporateur (BP, source froide) → compresseur → condenseur (HP, source chaude) → détendeur → retour évaporateur (boucle fermée par le fluide frigorigène)" }
];

// Leurres plausibles, par catégorie. Le QCM pioche en priorité ceux de la même
// catégorie et de longueur comparable à la bonne réponse, pour ne pas la trahir.
const DECOYS = {
  unites: [
    "Newton (N)", "Coulomb (C)", "Celsius (°C)", "Bar (bar)", "Litre (L)", "kWh", "m²",
    "J/K", "J/(kg·K)", "W/m²", "kg·m⁻¹·s⁻²", "mol",
    "1 J = 1 W/s", "1 W = 1 J·s", "1 J = 1 W·K",
    "R = 0,082 L·atm/(mol·K)", "R = 1,987 cal/(mol·K)", "R = 8,314 J/(kg·K)"
  ],
  signes: [
    "Positif", "Négatif", "Nul",
    "Q₁ < 0, Q₂ > 0, W > 0", "Q₁ > 0, Q₂ > 0, W < 0", "Q₁ < 0, Q₂ < 0, W > 0",
    "Q₁ > 0, Q₂ < 0, W > 0", "Q₁ < 0, Q₂ > 0, W < 0",
    "Positif : c'est une compression, l'extérieur fournit du travail au système (W > 0)",
    "Négatif : c'est une compression, l'extérieur fournit du travail au système (W < 0)",
    "Positif : c'est une détente, le système reçoit du travail de l'extérieur (W > 0)",
    "Nul : le volume ne varie pas, donc aucun travail n'est échangé"
  ],
  formules: [
    "ΔU = W − Q", "ΔU = Q − W", "ΔU = m c ΔT", "pV = mRT", "pV^γ = nRT",
    "W = + ∫ p dV, de Vi à Vf", "W = p ΔV", "W − Q = 0", "H = U + pV", "ΔS = Q / T",
    "η = Q₁ / |W|", "η = 1 − T₁/T₂",
    "η = |W| / Q₂ = énergie fournie / énergie utile",
    "η = (Q₁ + Q₂) / |W| = énergie perdue / énergie utile",
    "CxHy + x O₂ → x CO₂ + y H₂O",
    "CxHy + (x + y/2) O₂ → x CO₂ + (y/4) H₂O + chaleur",
    "CxHy + (2x + y/2) O₂ → x CO₂ + y H₂O + chaleur"
  ],
  transfo: [
    "p = constante", "V = constante", "T = constante", "Q = 0", "S = constante",
    "Isobare", "Isochore", "Isotherme réversible", "Isenthalpique (détendeur)",
    "Polytropique (n quelconque)", "Adiabatique irréversible",
    "T = constante (donc pV^γ = constante pour un gaz parfait)",
    "p = constante (donc V/T = constante pour un gaz parfait)",
    "Q = 0, mais irréversible : S augmente (on ne peut pas revenir à l'état initial)",
    "Une transformation isotherme réversible (gaz parfait)",
    "Une transformation adiabatique irréversible (gaz réel)",
    "Une transformation isobare quelconque (gaz parfait ou réel)",
    "Isochore = horizontale, isobare = verticale, isotherme = droite oblique, adiabatique = hyperbole (pV = cste)",
    "Isochore = verticale, isobare = horizontale, isotherme = hyperbole (pV = cste), adiabatique = hyperbole moins pentue que l'isotherme (γ < 1)",
    "Isochore = hyperbole, isobare = hyperbole plus pentue, isotherme = verticale, adiabatique = horizontale"
  ],
  cycles: [
    "Récepteur : sens horaire, le système reçoit du travail de l'extérieur (W_tot > 0)",
    "Récepteur : compression en haute pression puis détente en basse pression → W_tot > 0 ; l'aire du cycle = |Q_tot|",
    "Moteur : compression en haute pression puis détente en basse pression → W_tot > 0 ; l'aire du cycle = |Q_tot|",
    "Le rendement réel mesuré de la machine, pertes comprises",
    "Le rendement minimal à atteindre pour que la machine soit rentable",
    "Le rendement moyen constaté sur un parc de machines réelles",
    "La quantité de chaleur perdue à la source froide, indépendamment des températures",
    "Point mort haut (PMH) — volume maximal", "Point mort bas (PMB) — volume minimal",
    "Point mort haut (PMH) — pression minimale", "Point mort bas (PMB) — pression maximale",
    "Admission (isochore, B→A) → compression (isotherme, B→C) → explosion (isobare, C→D) → détente (isotherme, D→E) → échappement (isobare, E→B)",
    "Admission d'air seul (isochore, B→A) → compression (isotherme, B→C) → injection + combustion (isochore, C→D) → détente (adiabatique, D→E) → échappement (isobare, E→B)",
    "Admission (adiabatique, B→A) → compression (isobare, B→C) → explosion (isochore, C→D) → détente (isobare, D→E) → échappement (adiabatique, E→B)",
    "Évaporateur (HP, source chaude) → détendeur → condenseur (BP, source froide) → compresseur → retour évaporateur (boucle fermée par le fluide frigorigène)",
    "Condenseur (BP, source froide) → compresseur → évaporateur (HP, source chaude) → détendeur → retour condenseur (boucle ouverte sur l'extérieur)",
    "Compresseur → évaporateur (HP, source chaude) → détendeur → condenseur (BP, source froide) → retour compresseur (boucle fermée)",
    "Cycle de Carnot : deux isothermes et deux adiabatiques réversibles"
  ]
};
