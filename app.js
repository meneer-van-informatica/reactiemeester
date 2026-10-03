/* =====================================================================
   1. REACTIES DATABASE (Nederlands Scheikunde Curriculum)
   ===================================================================== */
const REACTIONS_DATA = [
  {
    id: 1,
    title: "Vorming van water",
    difficulty: "Niveau 1: Beginner",
    difficultyClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    description: "Waterstofgas en zuurstofgas reageren explosief (knalgasreactie) en vormen waterdamp.",
    hint: "Begin met de zuurstofatomen. Er zijn rechts 2 zuurstofatomen nodig, dus begin met 2 voor H₂O.",
    reactants: [
      { formula: "H₂", atoms: { H: 2 }, html: "H<sub>2</sub>" },
      { formula: "O₂", atoms: { O: 2 }, html: "O<sub>2</sub>" }
    ],
    products: [
      { formula: "H₂O", atoms: { H: 2, O: 1 }, html: "H<sub>2</sub>O" }
    ],
    solution: [2, 1, 2] // 2 H2 + 1 O2 -> 2 H2O
  },
  {
    id: 2,
    title: "Haber-Boschproces (Ammoniak)",
    difficulty: "Niveau 1: Beginner",
    difficultyClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    description: "Stikstofgas en waterstofgas reageren tot ammoniak, een essentiële grondstof voor kunstmest.",
    hint: "Stikstof heeft links 2 atomen (N₂). Maak rechts eerst 2 NH₃ en tel daarna de waterstofatomen.",
    reactants: [
      { formula: "N₂", atoms: { N: 2 }, html: "N<sub>2</sub>" },
      { formula: "H₂", atoms: { H: 2 }, html: "H<sub>2</sub>" }
    ],
    products: [
      { formula: "NH₃", atoms: { N: 1, H: 3 }, html: "NH<sub>3</sub>" }
    ],
    solution: [1, 3, 2] // 1 N2 + 3 H2 -> 2 NH3
  },
  {
    id: 3,
    title: "Volledige verbranding van aardgas (Methaan)",
    difficulty: "Niveau 2: Gemiddeld",
    difficultyClass: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    description: "Methaan (CH₄) reageert met zuurstofgas tot koolstofdioxide en water.",
    hint: "Koolstof (C) is al in evenwicht (1-1). Balanceer daarna de waterstof (links 4), en bewaar zuurstof voor het laatst!",
    reactants: [
      { formula: "CH₄", atoms: { C: 1, H: 4 }, html: "CH<sub>4</sub>" },
      { formula: "O₂", atoms: { O: 2 }, html: "O<sub>2</sub>" }
    ],
    products: [
      { formula: "CO₂", atoms: { C: 1, O: 2 }, html: "CO<sub>2</sub>" },
      { formula: "H₂O", atoms: { H: 2, O: 1 }, html: "H<sub>2</sub>O" }
    ],
    solution: [1, 2, 1, 2] // 1 CH4 + 2 O2 -> 1 CO2 + 2 H2O
  },
  {
    id: 4,
    title: "Roesten van ijzer",
    difficulty: "Niveau 2: Gemiddeld",
    difficultyClass: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    description: "IJzer reageert langzaam met zuurstof uit de lucht tot ijzer(III)oxide (roest).",
    hint: "Zuurstof staat links als O₂ en rechts als O₃. Het kleinste gemene veelvoud van 2 en 3 is 6!",
    reactants: [
      { formula: "Fe", atoms: { Fe: 1 }, html: "Fe" },
      { formula: "O₂", atoms: { O: 2 }, html: "O<sub>2</sub>" }
    ],
    products: [
      { formula: "Fe₂O₃", atoms: { Fe: 2, O: 3 }, html: "Fe<sub>2</sub>O<sub>3</sub>" }
    ],
    solution: [4, 3, 2] // 4 Fe + 3 O2 -> 2 Fe2O3
  },
  {
    id: 5,
    title: "Verbranding van Propaan",
    difficulty: "Niveau 3: Gevorderd",
    difficultyClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    description: "Propaangas uit gasflessen verbrandt met zuurstof. Een klassieke koolwaterstof-verbranding.",
    hint: "Vuistregel bij koolwaterstoffen: balanceer eerst C, dan H, en als allerlaatste O.",
    reactants: [
      { formula: "C₃H₈", atoms: { C: 3, H: 8 }, html: "C<sub>3</sub>H<sub>8</sub>" },
      { formula: "O₂", atoms: { O: 2 }, html: "O<sub>2</sub>" }
    ],
    products: [
      { formula: "CO₂", atoms: { C: 1, O: 2 }, html: "CO<sub>2</sub>" },
      { formula: "H₂O", atoms: { H: 2, O: 1 }, html: "H<sub>2</sub>O" }
    ],
    solution: [1, 5, 3, 4] // 1 C3H8 + 5 O2 -> 3 CO2 + 4 H2O
  },
  {
    id: 6,
    title: "Aluminium met zoutzuur",
    difficulty: "Niveau 3: Gevorderd",
    difficultyClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    description: "Aluminium lost op in zoutzuur (waterstofchloride) onder vorming van aluminiumchloride en waterstofgas.",
    hint: "Kijk goed naar chloor (links HCl, rechts AlCl₃) en waterstof (links HCl, rechts H₂). Zoek het evenwicht voor 6 HCl.",
    reactants: [
      { formula: "Al", atoms: { Al: 1 }, html: "Al" },
      { formula: "HCl", atoms: { H: 1, Cl: 1 }, html: "HCl" }
    ],
    products: [
      { formula: "AlCl₃", atoms: { Al: 1, Cl: 3 }, html: "AlCl<sub>3</sub>" },
      { formula: "H₂", atoms: { H: 2 }, html: "H<sub>2</sub>" }
    ],
    solution: [2, 6, 2, 3] // 2 Al + 6 HCl -> 2 AlCl3 + 3 H2
  },
  {
    id: 7,
    title: "Reactie van Natrium met Water",
    difficulty: "Niveau 3: Gevorderd",
    difficultyClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    description: "Een heftige exotherme reactie waarbij natriumloog en brandbaar waterstofgas ontstaan.",
    hint: "Let op de waterstofatomen: rechts heb je zowel in NaOH als in H₂ waterstof zitten!",
    reactants: [
      { formula: "Na", atoms: { Na: 1 }, html: "Na" },
      { formula: "H₂O", atoms: { H: 2, O: 1 }, html: "H<sub>2</sub>O" }
    ],
    products: [
      { formula: "NaOH", atoms: { Na: 1, O: 1, H: 1 }, html: "NaOH" },
      { formula: "H₂", atoms: { H: 2 }, html: "H<sub>2</sub>" }
    ],
    solution: [2, 2, 2, 1] // 2 Na + 2 H2O -> 2 NaOH + 1 H2
  },
  {
    id: 8,
    title: "Celademhaling (Verbranding van Glucose)",
    difficulty: "Niveau 4: Expert",
    difficultyClass: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    description: "Biochemische reactie waarbij cellen energie vrijmaken uit suiker met behulp van zuurstof.",
    hint: "Glucose bevat al 6 zuurstofatomen. Tel rechts het totaal aan zuurstof en trek de 6 van glucose eraf!",
    reactants: [
      { formula: "C₆H₁₂O₆", atoms: { C: 6, H: 12, O: 6 }, html: "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>" },
      { formula: "O₂", atoms: { O: 2 }, html: "O<sub>2</sub>" }
    ],
    products: [
      { formula: "CO₂", atoms: { C: 1, O: 2 }, html: "CO<sub>2</sub>" },
      { formula: "H₂O", atoms: { H: 2, O: 1 }, html: "H<sub>2</sub>O" }
    ],
    solution: [1, 6, 6, 6] // 1 C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O
  },
  {
    id: 9,
    title: "Ontleding van Kaliumchloraat",
    difficulty: "Niveau 4: Expert",
    difficultyClass: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    description: "Onder verhitting ontleedt kaliumchloraat in kaliumchloride en zuurstofgas. Vaak gebruikt voor zuurstofontwikkeling.",
    hint: "Focus direct op het aantal zuurstofatomen: KClO₃ heeft 3 O's, rechts heb je O₂ moleculen.",
    reactants: [
      { formula: "KClO₃", atoms: { K: 1, Cl: 1, O: 3 }, html: "KClO<sub>3</sub>" }
    ],
    products: [
      { formula: "KCl", atoms: { K: 1, Cl: 1 }, html: "KCl" },
      { formula: "O₂", atoms: { O: 2 }, html: "O<sub>2</sub>" }
    ],
    solution: [2, 2, 3] // 2 KClO3 -> 2 KCl + 3 O2
  },
  {
    id: 10,
    title: "Verbranding van Bio-ethanol",
    difficulty: "Niveau 5: Meesterproef",
    difficultyClass: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    description: "Alcoholverbranding. Let heel scherp op het losstaande zuurstof- en waterstofatoom in de hydroxylgroep!",
    hint: "In C₂H₅OH zitten 2 C's, 6 H's (5+1), en 1 O. Balanceer eerst koolstof en waterstof.",
    reactants: [
      { formula: "C₂H₅OH", atoms: { C: 2, H: 6, O: 1 }, html: "C<sub>2</sub>H<sub>5</sub>OH" },
      { formula: "O₂", atoms: { O: 2 }, html: "O<sub>2</sub>" }
    ],
    products: [
      { formula: "CO₂", atoms: { C: 1, O: 2 }, html: "CO<sub>2</sub>" },
      { formula: "H₂O", atoms: { H: 2, O: 1 }, html: "H<sub>2</sub>O" }
    ],
    solution: [1, 3, 2, 3] // 1 C2H5OH + 3 O2 -> 2 CO2 + 3 H2O
  }
];

/* =====================================================================
   2. ELEMENT KLEUREN EN LABELS (Voor visuele helderheid)
   ===================================================================== */
const ELEMENT_META = {
  H: { name: "Waterstof", color: "from-sky-400 to-blue-500", textColor: "text-sky-300" },
  O: { name: "Zuurstof", color: "from-rose-500 to-red-600", textColor: "text-rose-300" },
  C: { name: "Koolstof", color: "from-zinc-400 to-slate-500", textColor: "text-zinc-300" },
  N: { name: "Stikstof", color: "from-indigo-400 to-violet-500", textColor: "text-indigo-300" },
  Fe: { name: "IJzer", color: "from-amber-600 to-orange-700", textColor: "text-amber-400" },
  Al: { name: "Aluminium", color: "from-slate-300 to-gray-400", textColor: "text-slate-300" },
  Cl: { name: "Chloor", color: "from-emerald-400 to-green-600", textColor: "text-emerald-300" },
  Na: { name: "Natrium", color: "from-purple-400 to-fuchsia-500", textColor: "text-purple-300" },
  K: { name: "Kalium", color: "from-pink-400 to-rose-500", textColor: "text-pink-300" }
};

/* =====================================================================
   3. GELUID EN SYNTHESIZER (Web Audio API - Geen externe bestanden)
   ===================================================================== */
let audioEnabled = true;
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1) {
  if (!audioEnabled) return;
  try {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn("Audio unavailable", e);
  }
}

function playSuccessSound() {
  if (!audioEnabled) return;
  // Arpeggio chime
  playTone(523.25, 'triangle', 0.15, 0.1); // C5
  setTimeout(() => playTone(659.25, 'triangle', 0.15, 0.1), 80); // E5
  setTimeout(() => playTone(783.99, 'triangle', 0.15, 0.1), 160); // G5
  setTimeout(() => playTone(1046.50, 'triangle', 0.3, 0.15), 240); // C6
}

function playErrorSound() {
  if (!audioEnabled) return;
  playTone(220, 'sawtooth', 0.25, 0.08);
  setTimeout(() => playTone(180, 'sawtooth', 0.35, 0.08), 120);
}

function playClickSound() {
  playTone(600, 'sine', 0.04, 0.03);
}

/* =====================================================================
   4. SPEL STATUS (State Management)
   ===================================================================== */
let currentReactionIndex = 0;
let coefficients = []; // Current numbers set by player
let score = 0;
let streak = 0;
let maxStreak = 0;
let hintUsed = false;

// DOM Elements
const equationContainer = document.getElementById("equation-container");
const atomBalanceGrid = document.getElementById("atom-balance-grid");
const levelIndicator = document.getElementById("level-indicator");
const reactionTitle = document.getElementById("reaction-title");
const reactionDesc = document.getElementById("reaction-desc");
const difficultyBadge = document.getElementById("difficulty-badge");
const totalScoreEl = document.getElementById("total-score");
const streakCountEl = document.getElementById("streak-count");
const statusChip = document.getElementById("status-chip");
const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");
const hintBtn = document.getElementById("hint-btn");
const hintBox = document.getElementById("hint-box");
const hintText = document.getElementById("hint-text");
const resetBtn = document.getElementById("reset-btn");
const levelDots = document.getElementById("level-dots");
const gameCard = document.getElementById("game-card");
const helpModal = document.getElementById("help-modal");
const victoryModal = document.getElementById("victory-modal");

/* =====================================================================
   5. INITIALISATIE & LEVEL MANAGEMENT
   ===================================================================== */
function initGame() {
  renderLevelDots();
  loadReaction(0);
  setupEventListeners();
}

function renderLevelDots() {
  levelDots.innerHTML = "";
  REACTIONS_DATA.forEach((r, idx) => {
    const dot = document.createElement("button");
    dot.className = `w-7 h-7 rounded-lg text-xs font-bold transition flex items-center justify-center ${
      idx === currentReactionIndex 
        ? "bg-emerald-500 text-slate-950 font-black shadow-md shadow-emerald-500/30 ring-2 ring-emerald-400" 
        : idx < currentReactionIndex 
          ? "bg-emerald-950 text-emerald-400 border border-emerald-700/50" 
          : "bg-slate-800 text-slate-500 hover:bg-slate-700"
    }`;
    dot.textContent = idx + 1;
    dot.title = `Ga naar Level ${idx + 1}: ${r.title}`;
    dot.addEventListener("click", () => {
      if (idx <= currentReactionIndex || confirm("Wil je naar level " + (idx + 1) + " springen?")) {
        loadReaction(idx);
      }
    });
    levelDots.appendChild(dot);
  });
}

function loadReaction(index) {
  currentReactionIndex = index;
  const reaction = REACTIONS_DATA[index];

  // Reset state for new round
  const totalMolecules = reaction.reactants.length + reaction.products.length;
  coefficients = new Array(totalMolecules).fill(1); // Default to coefficient 1
  hintUsed = false;
  hintBox.classList.add("hidden");
  gameCard.classList.remove("balanced-glow", "border-emerald-500/60");
  gameCard.classList.add("border-slate-800");

  checkBtn.classList.remove("hidden");
  nextBtn.classList.add("hidden");

  // UI Info updates
  levelIndicator.textContent = `${index + 1} / ${REACTIONS_DATA.length}`;
  reactionTitle.textContent = reaction.title;
  reactionDesc.textContent = reaction.description;
  difficultyBadge.textContent = reaction.difficulty;
  difficultyBadge.className = `text-xs uppercase font-extrabold tracking-widest px-2.5 py-1 rounded-full border ${reaction.difficultyClass}`;

  renderEquation();
  updateAtomCounts();
  renderLevelDots();
}

/* =====================================================================
   6. RENDERING VAN DE FORMULE ARENA
   ===================================================================== */
function renderEquation() {
  equationContainer.innerHTML = "";
  const reaction = REACTIONS_DATA[currentReactionIndex];

  let coeffIndex = 0;

  // Render Reactants (Left side)
  reaction.reactants.forEach((molecule, idx) => {
    if (idx > 0) {
      equationContainer.appendChild(createOperatorElement("+"));
    }
    equationContainer.appendChild(createMoleculeControl(molecule, coeffIndex));
    coeffIndex++;
  });

  // Render Reaction Arrow (-->)
  const arrowDiv = document.createElement("div");
  arrowDiv.className = "flex flex-col items-center px-2 sm:px-4 text-emerald-400";
  arrowDiv.innerHTML = `
    <span class="text-xs uppercase font-bold text-slate-500 tracking-wider">reactie</span>
    <svg class="w-8 h-8 sm:w-10 sm:h-10 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  `;
  equationContainer.appendChild(arrowDiv);

  // Render Products (Right side)
  reaction.products.forEach((molecule, idx) => {
    if (idx > 0) {
      equationContainer.appendChild(createOperatorElement("+"));
    }
    equationContainer.appendChild(createMoleculeControl(molecule, coeffIndex));
    coeffIndex++;
  });
}

function createOperatorElement(symbol) {
  const span = document.createElement("span");
  span.className = "text-2xl sm:text-3xl font-extrabold text-slate-500 px-1 select-none";
  span.textContent = symbol;
  return span;
}

function createMoleculeControl(molecule, index) {
  const wrap = document.createElement("div");
  wrap.className = "flex items-center space-x-1.5 sm:space-x-2 bg-slate-800/80 hover:bg-slate-800 p-2 sm:p-2.5 rounded-2xl border border-slate-700/80 transition-all";

  // Stepper Controls
  const stepper = document.createElement("div");
  stepper.className = "flex flex-col space-y-1 items-center";

  // Plus Button
  const upBtn = document.createElement("button");
  upBtn.className = "w-7 h-6 sm:w-8 sm:h-7 rounded-md bg-slate-700 hover:bg-emerald-600 text-white flex items-center justify-center text-xs font-black transition active:scale-90";
  upBtn.innerHTML = "▲";
  upBtn.title = "Verhoog coëfficiënt";
  upBtn.onclick = () => {
    if (coefficients[index] < 12) {
      coefficients[index]++;
      playClickSound();
      updateMoleculeDisplay(index);
      updateAtomCounts();
    }
  };

  // Coefficient Display
  const valDisplay = document.createElement("div");
  valDisplay.id = `coeff-display-${index}`;
  valDisplay.className = "font-mono-chem text-lg sm:text-2xl font-black text-amber-400 w-7 sm:w-8 text-center select-none";
  valDisplay.textContent = coefficients[index];

  // Minus Button
  const downBtn = document.createElement("button");
  downBtn.className = "w-7 h-6 sm:w-8 sm:h-7 rounded-md bg-slate-700 hover:bg-rose-600 text-white flex items-center justify-center text-xs font-black transition active:scale-90";
  downBtn.innerHTML = "▼";
  downBtn.title = "Verlaag coëfficiënt";
  downBtn.onclick = () => {
    if (coefficients[index] > 1) {
      coefficients[index]--;
      playClickSound();
      updateMoleculeDisplay(index);
      updateAtomCounts();
    }
  };

  stepper.appendChild(upBtn);
  stepper.appendChild(valDisplay);
  stepper.appendChild(downBtn);

  // Chemical Formula
  const formulaSpan = document.createElement("span");
  formulaSpan.className = "font-mono-chem text-xl sm:text-3xl font-black tracking-tight text-white pl-1 pr-2 select-none";
  formulaSpan.innerHTML = molecule.html;

  wrap.appendChild(stepper);
  wrap.appendChild(formulaSpan);
  return wrap;
}

function updateMoleculeDisplay(index) {
  const display = document.getElementById(`coeff-display-${index}`);
  if (display) {
    display.textContent = coefficients[index];
    // Pop animation
    display.classList.add("scale-125", "text-emerald-300");
    setTimeout(() => {
      display.classList.remove("scale-125", "text-emerald-300");
    }, 150);
  }
}

/* =====================================================================
   7. ATOOMTELLER EN LIVE BALANS CALCULATOR
   ===================================================================== */
function calculateAtomTotals() {
  const reaction = REACTIONS_DATA[currentReactionIndex];
  const leftCounts = {};
  const rightCounts = {};
  const allElements = new Set();

  // Count Left (Reactants)
  let coeffIdx = 0;
  reaction.reactants.forEach(molecule => {
    const mult = coefficients[coeffIdx];
    for (const [elem, count] of Object.entries(molecule.atoms)) {
      leftCounts[elem] = (leftCounts[elem] || 0) + (count * mult);
      allElements.add(elem);
    }
    coeffIdx++;
  });

  // Count Right (Products)
  reaction.products.forEach(molecule => {
    const mult = coefficients[coeffIdx];
    for (const [elem, count] of Object.entries(molecule.atoms)) {
      rightCounts[elem] = (rightCounts[elem] || 0) + (count * mult);
      allElements.add(elem);
    }
    coeffIdx++;
  });

  return { leftCounts, rightCounts, elements: Array.from(allElements) };
}

function updateAtomCounts() {
  const { leftCounts, rightCounts, elements } = calculateAtomTotals();
  atomBalanceGrid.innerHTML = "";

  let allBalanced = true;

  elements.forEach(elem => {
    const left = leftCounts[elem] || 0;
    const right = rightCounts[elem] || 0;
    const isBalanced = left === right;
    if (!isBalanced) allBalanced = false;

    const meta = ELEMENT_META[elem] || { name: elem, color: "from-slate-500 to-gray-600", textColor: "text-slate-300" };

    const card = document.createElement("div");
    card.className = `p-3 rounded-xl border flex items-center justify-between transition-all ${
      isBalanced 
        ? "bg-emerald-950/40 border-emerald-500/40 shadow-sm shadow-emerald-500/10" 
        : "bg-slate-900/90 border-slate-800"
    }`;

    card.innerHTML = `
      <div class="flex items-center space-x-3">
        <div class="w-9 h-9 rounded-lg bg-gradient-to-br ${meta.color} flex items-center justify-center font-mono-chem font-extrabold text-white text-sm shadow">
          ${elem}
        </div>
        <div>
          <div class="text-xs font-bold text-slate-200">${meta.name}</div>
          <div class="text-[11px] text-slate-400 font-mono">
            Links: <strong class="${isBalanced ? 'text-emerald-400' : 'text-slate-300'}">${left}</strong> 
            | Rechts: <strong class="${isBalanced ? 'text-emerald-400' : 'text-slate-300'}">${right}</strong>
          </div>
        </div>
      </div>

      <div>
        ${isBalanced 
          ? `<span class="inline-flex items-center text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
               ✓ Klopt
             </span>`
          : `<span class="inline-flex items-center text-xs font-bold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
               ${left < right ? 'Links te weinig' : 'Rechts te weinig'}
             </span>`
        }
      </div>
    `;

    atomBalanceGrid.appendChild(card);
  });

  // Update Top Status Chip
  if (allBalanced) {
    statusChip.textContent = "✓ Alle atomen in evenwicht!";
    statusChip.className = "text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 animate-pulse";
  } else {
    statusChip.textContent = "Nog niet in evenwicht";
    statusChip.className = "text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20";
  }

  return allBalanced;
}

/* =====================================================================
   8. CONTROLE & SCORE LOGICA
   ===================================================================== */
function checkSolution() {
  const isBalanced = updateAtomCounts();
  const reaction = REACTIONS_DATA[currentReactionIndex];

  // Check if user's coefficients are lowest whole ratio matching solution
  const isCorrectCoeffs = coefficients.every((val, idx) => val === reaction.solution[idx]);

  if (isBalanced && isCorrectCoeffs) {
    // SUCCESS
    playSuccessSound();
    triggerConfetti();

    // Calculate points
    let earnedPoints = 100;
    if (hintUsed) earnedPoints -= 35;
    score += earnedPoints;
    streak++;
    if (streak > maxStreak) maxStreak = streak;

    updateHeaderStats();

    // Visual celebration on card
    gameCard.classList.remove("border-slate-800");
    gameCard.classList.add("balanced-glow", "border-emerald-500/60");

    // Swap check button with next button
    checkBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");

  } else if (isBalanced && !isCorrectCoeffs) {
    // Balanced, but not the simplest integer ratio!
    playErrorSound();
    alert("De vergelijking klopt wel qua atomen, maar is nog NIET vereenvoudigd tot de kleinst mogelijke gehele getallen! Deel alle coëfficiënten.");
  } else {
    // INCORRECT
    playErrorSound();
    streak = 0;
    updateHeaderStats();

    // Shake effect
    gameCard.classList.add("translate-x-2");
    setTimeout(() => gameCard.classList.remove("translate-x-2"), 70);
    setTimeout(() => gameCard.classList.add("-translate-x-2"), 140);
    setTimeout(() => gameCard.classList.remove("-translate-x-2"), 210);
  }
}

function updateHeaderStats() {
  totalScoreEl.textContent = score;
  streakCountEl.textContent = streak;
  const streakIcon = document.getElementById("streak-icon");
  if (streak >= 3) {
    streakIcon.textContent = "⚡🔥";
  } else {
    streakIcon.textContent = "🔥";
  }
}

function nextReaction() {
  if (currentReactionIndex + 1 < REACTIONS_DATA.length) {
    loadReaction(currentReactionIndex + 1);
  } else {
    // All levels completed!
    showVictoryScreen();
  }
}

function resetCurrentReaction() {
  coefficients = coefficients.map(() => 1);
  coefficients.forEach((_, idx) => updateMoleculeDisplay(idx));
  updateAtomCounts();
  playClickSound();
}

function showHint() {
  const reaction = REACTIONS_DATA[currentReactionIndex];
  hintText.textContent = reaction.hint;
  hintBox.classList.remove("hidden");
  hintUsed = true;
  playTone(440, 'sine', 0.1, 0.05);
}

function showVictoryScreen() {
  document.getElementById("final-score").textContent = score;
  document.getElementById("final-streak").textContent = maxStreak;
  victoryModal.classList.remove("hidden");
  playSuccessSound();
  triggerConfetti();
}

/* =====================================================================
   9. CONFETTI ANIMATIE ENGINE (Geen externe dependencies)
   ===================================================================== */
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let confettiParticles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function triggerConfetti() {
  const colors = ['#10b981', '#14b8a6', '#06b6d4', '#f59e0b', '#ec4899', '#6366f1'];
  for (let i = 0; i < 90; i++) {
    confettiParticles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      w: Math.random() * 9 + 4,
      h: Math.random() * 5 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 16,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 12,
      life: 140
    });
  }
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.25; // Gravity
    p.rotation += p.rotationSpeed;
    p.life--;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();

    if (p.life <= 0 || p.y > canvas.height) {
      confettiParticles.splice(i, 1);
    }
  }
  requestAnimationFrame(updateConfetti);
}
updateConfetti();

/* =====================================================================
   10. EVENT LISTENERS
   ===================================================================== */
function setupEventListeners() {
  checkBtn.addEventListener("click", checkSolution);
  nextBtn.addEventListener("click", nextReaction);
  hintBtn.addEventListener("click", showHint);
  resetBtn.addEventListener("click", resetCurrentReaction);

  // Sound Toggle
  const soundBtn = document.getElementById("sound-btn");
  const soundIcon = document.getElementById("sound-icon");
  soundBtn.addEventListener("click", () => {
    audioEnabled = !audioEnabled;
    soundIcon.textContent = audioEnabled ? "🔊" : "🔇";
  });

  // Modals
  const helpBtn = document.getElementById("help-btn");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const modalStartBtn = document.getElementById("modal-start-btn");

  helpBtn.addEventListener("click", () => helpModal.classList.remove("hidden"));
  closeModalBtn.addEventListener("click", () => helpModal.classList.add("hidden"));
  modalStartBtn.addEventListener("click", () => helpModal.classList.add("hidden"));

  document.getElementById("restart-game-btn").addEventListener("click", () => {
    victoryModal.classList.add("hidden");
    score = 0;
    streak = 0;
    updateHeaderStats();
    loadReaction(0);
  });

  // Keyboard navigation (Enter to check/next)
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (!nextBtn.classList.contains("hidden")) {
        nextReaction();
      } else {
        checkSolution();
      }
    }
  });
}

// Start de game
window.addEventListener("DOMContentLoaded", initGame);