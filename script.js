const root = document.documentElement;

const svgIntact = `
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  <rect width="128" height="128" fill="#8c887d" />
  <rect x="8" y="8" width="112" height="112" fill="#9a968a" />
  <rect x="16" y="16" width="32" height="32" fill="#7a766c" />
  <rect x="64" y="20" width="28" height="28" fill="#a7a295" />
  <rect x="24" y="64" width="36" height="36" fill="#a39e92" />
  <rect x="70" y="68" width="30" height="30" fill="#7c776d" />
  <rect x="0" y="0" width="128" height="128" fill="none" stroke="#5f5b52" stroke-width="8" />
</svg>
`;

const svgStress = `
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  <rect width="128" height="128" fill="#8c887d" />
  <rect x="8" y="8" width="112" height="112" fill="#9a968a" />
  <rect x="16" y="16" width="32" height="32" fill="#7a766c" />
  <rect x="64" y="20" width="28" height="28" fill="#a7a295" />
  <rect x="24" y="64" width="36" height="36" fill="#a39e92" />
  <rect x="70" y="68" width="30" height="30" fill="#7c776d" />
  <path d="M18 36 L46 54 L40 78" stroke="#4b4740" stroke-width="2" fill="none" stroke-linecap="round" />
  <path d="M80 20 L62 40 L84 56" stroke="#4b4740" stroke-width="1.8" fill="none" stroke-linecap="round" />
  <rect x="0" y="0" width="128" height="128" fill="none" stroke="#5f5b52" stroke-width="8" />
</svg>
`;

const svgHairline = `
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  <rect width="128" height="128" fill="#8c887d" />
  <rect x="8" y="8" width="112" height="112" fill="#9a968a" />
  <rect x="18" y="18" width="30" height="30" fill="#7a766c" />
  <rect x="68" y="22" width="26" height="26" fill="#a7a295" />
  <rect x="26" y="68" width="34" height="34" fill="#a39e92" />
  <rect x="72" y="70" width="28" height="28" fill="#7c776d" />
  <path d="M16 38 L46 56 L34 84" stroke="#3e3a33" stroke-width="3" fill="none" stroke-linecap="round" />
  <path d="M82 18 L58 44 L84 62" stroke="#3e3a33" stroke-width="2.6" fill="none" stroke-linecap="round" />
  <path d="M36 24 L28 44 L44 60" stroke="#3e3a33" stroke-width="2" fill="none" stroke-linecap="round" />
  <rect x="0" y="0" width="128" height="128" fill="none" stroke="#5f5b52" stroke-width="8" />
</svg>
`;

const svgCracked = `
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  <rect width="128" height="128" fill="#8c887d" />
  <rect x="8" y="8" width="112" height="112" fill="#9a968a" />
  <rect x="18" y="18" width="30" height="30" fill="#7a766c" />
  <rect x="70" y="22" width="26" height="26" fill="#a7a295" />
  <rect x="28" y="70" width="34" height="34" fill="#a39e92" />
  <rect x="72" y="70" width="28" height="28" fill="#7c776d" />
  <path d="M16 40 L50 60 L36 84 L68 102 L92 86" stroke="#3e3a33" stroke-width="6" fill="none" stroke-linecap="round" />
  <path d="M84 18 L60 46 L86 64" stroke="#3e3a33" stroke-width="4" fill="none" stroke-linecap="round" />
  <rect x="0" y="0" width="128" height="128" fill="none" stroke="#5f5b52" stroke-width="8" />
</svg>
`;

const svgFractured = `
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  <rect width="128" height="128" fill="#7f7a70" />
  <rect x="8" y="8" width="112" height="112" fill="#979287" />
  <rect x="18" y="18" width="30" height="30" fill="#6f6b62" />
  <rect x="70" y="22" width="26" height="26" fill="#a7a295" />
  <rect x="28" y="70" width="34" height="34" fill="#a39e92" />
  <rect x="72" y="70" width="28" height="28" fill="#7c776d" />
  <path d="M14 34 L54 62 L38 94 L76 112" stroke="#2f2b25" stroke-width="7" fill="none" stroke-linecap="round" />
  <path d="M92 16 L62 46 L96 74" stroke="#2f2b25" stroke-width="5" fill="none" stroke-linecap="round" />
  <path d="M20 88 L50 78 L72 100" stroke="#2f2b25" stroke-width="4" fill="none" stroke-linecap="round" />
  <rect x="0" y="0" width="128" height="128" fill="none" stroke="#4a463f" stroke-width="8" />
</svg>
`;

const svgBroken = `
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  <rect width="128" height="128" fill="#6f6a60" />
  <rect x="8" y="8" width="48" height="48" fill="#918b7e" />
  <rect x="70" y="10" width="40" height="40" fill="#7a766c" />
  <rect x="14" y="70" width="38" height="38" fill="#a39e92" />
  <rect x="70" y="66" width="44" height="44" fill="#8c887d" />
  <path d="M10 54 L38 62 L28 86" stroke="#2f2b25" stroke-width="6" fill="none" stroke-linecap="round" />
  <path d="M66 48 L96 70 L78 100" stroke="#2f2b25" stroke-width="6" fill="none" stroke-linecap="round" />
  <rect x="0" y="0" width="128" height="128" fill="none" stroke="#4a463f" stroke-width="8" />
</svg>
`;

const toDataUri = (svg) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const inlineTextures = {
  intact: svgIntact,
  stress: svgStress,
  hairline: svgHairline,
  cracked: svgCracked,
  fractured: svgFractured,
  broken: svgBroken,
};

Object.entries(inlineTextures).forEach(([stage, svg]) => {
  root.style.setProperty(`--tex-${stage}`, `url("${toDataUri(svg)}")`);
});

const textureCandidates = {
  intact: ["assets/textures/intact.png", "assets/textures/intact.webp", "assets/textures/intact.jpg"],
  stress: ["assets/textures/stress.png", "assets/textures/stress.webp", "assets/textures/stress.jpg"],
  hairline: ["assets/textures/hairline.png", "assets/textures/hairline.webp", "assets/textures/hairline.jpg"],
  cracked: ["assets/textures/cracked.png", "assets/textures/cracked.webp", "assets/textures/cracked.jpg"],
  fractured: ["assets/textures/fractured.png", "assets/textures/fractured.webp", "assets/textures/fractured.jpg"],
  broken: ["assets/textures/broken.png", "assets/textures/broken.webp", "assets/textures/broken.jpg"],
};

const tryLoadTexture = (stage, list, index = 0) => {
  if (index >= list.length) return;
  const img = new Image();
  img.onload = () => {
    root.style.setProperty(`--tex-${stage}`, `url("${list[index]}")`);
  };
  img.onerror = () => {
    tryLoadTexture(stage, list, index + 1);
  };
  img.src = list[index];
};

Object.entries(textureCandidates).forEach(([stage, list]) => {
  tryLoadTexture(stage, list);
});

const iconCandidates = {
  emerald: ["assets/ui/icons/emerald.png", "assets/ui/icons/emerald.webp", "assets/ui/icons/emerald.jpg"],
  water: ["assets/ui/icons/water.png", "assets/ui/icons/water.webp", "assets/ui/icons/water.jpg"],
  pressure: ["assets/ui/icons/pressure.png", "assets/ui/icons/pressure.webp", "assets/ui/icons/pressure.jpg"],
  truck: ["assets/ui/icons/truck.png", "assets/ui/icons/truck.webp", "assets/ui/icons/truck.jpg"],
  rail: ["assets/ui/icons/rail.png", "assets/ui/icons/rail.webp", "assets/ui/icons/rail.jpg"],
  car: ["assets/ui/icons/car.png", "assets/ui/icons/car.webp", "assets/ui/icons/car.jpg"],
  jack: ["assets/ui/icons/jack.png", "assets/ui/icons/jack.webp", "assets/ui/icons/jack.jpg"],
  elephant: ["assets/ui/icons/elephant.png", "assets/ui/icons/elephant.webp", "assets/ui/icons/elephant.jpg"],
  human: ["assets/ui/icons/human.png", "assets/ui/icons/human.webp", "assets/ui/icons/human.jpg"],
};

const tryLoadIcon = (name, list, index = 0) => {
  if (index >= list.length) return;
  const img = new Image();
  img.onload = () => {
    root.style.setProperty(`--icon-${name}`, `url("${list[index]}")`);
  };
  img.onerror = () => {
    tryLoadIcon(name, list, index + 1);
  };
  img.src = list[index];
};

Object.entries(iconCandidates).forEach(([name, list]) => {
  tryLoadIcon(name, list);
});

const classDefs = [
  { b: 10, use: "Подбетонка, подготовительные слои" },
  { b: 15, use: "Стяжки, дорожки, подушки" },
  { b: 20, use: "Фундаменты частных домов" },
  { b: 25, use: "Ленточные фундаменты, плиты" },
  { b: 30, use: "Монолитные перекрытия, колонны" },
  { b: 35, use: "Сборные элементы, балки" },
  { b: 40, use: "Мосты, парковки, промполы" },
  { b: 45, use: "Гидротехнические сооружения" },
  { b: 50, use: "Аэродромные покрытия" },
  { b: 55, use: "Высотные ядра и опоры" },
  { b: 60, use: "Небоскребы, высокие нагрузки" },
  { b: 65, use: "Промышленные платформы, эстакады" },
  { b: 70, use: "Спецсооружения, защитные оболочки" },
  { b: 75, use: "Опорные элементы мостов" },
  { b: 80, use: "Особопрочные конструкции" },
  { b: 85, use: "Усиленные спецобъекты" },
  { b: 90, use: "Экстремальные нагрузки" },
];

const strengthFactor = 1.315;
const classes = classDefs.map((item) => ({
  code: `B${item.b}`,
  strength: Number((item.b * strengthFactor).toFixed(1)),
  use: item.use,
}));

const grid = document.getElementById("classGrid");
const detailPanel = document.getElementById("detailPanel");
const detailCode = document.getElementById("detailCode");
const detailStrength = document.getElementById("detailStrength");
const detailUse = document.getElementById("detailUse");
const loadValue = document.getElementById("loadValue");
const progressBar = document.getElementById("progressBar");
const cube = document.getElementById("cube");
const testButton = document.getElementById("testButton");
const result = document.getElementById("result");
const comparisons = document.getElementById("comparisons");
const comparisonButtons = document.getElementById("comparisonButtons");
const comparisonOutput = document.getElementById("comparisonOutput");

const gravity = 9.81;
const calcPressure = (massKg, areaM2) => (massKg * gravity) / areaM2 / 1e6;
const formatQty = (value) => {
  if (!Number.isFinite(value)) return "0";
  const rounded = Math.max(1, Math.round(value));
  if (rounded >= 1000000) return `${Math.round(rounded / 100000) / 10}M`;
  if (rounded >= 10000) return `${Math.round(rounded / 100) / 10}k`;
  return `${rounded}`;
};

const comparisonData = [
  {
    id: "atmospheres",
    label: "Атмосферное давление",
    trade: (strength) => {
      const atm = 0.1013;
      const count = strength / atm;
      return {
        leftIcon: "pressure",
        leftQty: formatQty(count),
        rightIcon: "emerald",
        rightQty: formatQty(strength),
      };
    },
    calc: (strength) => {
      const atm = 0.1013;
      const count = strength / atm;
      return `Это примерно ${Math.round(count)} атмосфер (1 атм ≈ ${atm.toFixed(3)} МПа).`;
    },
  },
  {
    id: "water",
    label: "Эквивалент глубины воды",
    trade: (strength) => {
      const depth = (strength * 1e6) / (1000 * gravity);
      return {
        leftIcon: "water",
        leftQty: formatQty(depth),
        rightIcon: "emerald",
        rightQty: formatQty(strength),
      };
    },
    calc: (strength) => {
      const depth = (strength * 1e6) / (1000 * gravity);
      return `Это давление как на глубине около ${Math.round(depth)} м воды (ρ=1000 кг/м³).`;
    },
  },
  {
    id: "trucks",
    label: "20-тонные грузовики на 1 м²",
    trade: (strength) => {
      const truckMass = 20000;
      const pressure = calcPressure(truckMass, 1);
      const count = Math.max(1, Math.round(strength / pressure));
      return {
        leftIcon: "truck",
        leftQty: formatQty(count),
        rightIcon: "emerald",
        rightQty: formatQty(strength),
      };
    },
    calc: (strength) => {
      const truckMass = 20000;
      const pressure = calcPressure(truckMass, 1);
      const count = Math.max(1, Math.round(strength / pressure));
      return `Один грузовик массой 20 т на 1 м² дает около ${pressure.toFixed(2)} МПа. Это примерно ${count} таких грузовиков.`;
    },
  },
  {
    id: "railcar",
    label: "Ж/д вагон на 1 м²",
    trade: (strength) => {
      const railcarMass = 70000;
      const pressure = calcPressure(railcarMass, 1);
      const count = Math.max(1, Math.round(strength / pressure));
      return {
        leftIcon: "rail",
        leftQty: formatQty(count),
        rightIcon: "emerald",
        rightQty: formatQty(strength),
      };
    },
    calc: (strength) => {
      const railcarMass = 70000;
      const pressure = calcPressure(railcarMass, 1);
      const count = Math.max(1, Math.round(strength / pressure));
      return `Один вагон массой ~70 т на 1 м² дает около ${pressure.toFixed(2)} МПа. Это примерно ${count} таких вагонов.`;
    },
  },
  {
    id: "cars",
    label: "Легковые авто на ладони",
    trade: (strength) => {
      const carMass = 1400;
      const palmArea = 0.015;
      const pressure = calcPressure(carMass, palmArea);
      const count = Math.max(1, Math.round(strength / pressure));
      return {
        leftIcon: "car",
        leftQty: formatQty(count),
        rightIcon: "emerald",
        rightQty: formatQty(strength),
      };
    },
    calc: (strength) => {
      const carMass = 1400;
      const palmArea = 0.015;
      const pressure = calcPressure(carMass, palmArea);
      const count = Math.max(1, Math.round(strength / pressure));
      return `Одна машина массой ~${carMass} кг на ладони 150 см² дает около ${pressure.toFixed(2)} МПа. Для ${strength.toFixed(1)} МПа нужно примерно ${count} машин.`;
    },
  },
  {
    id: "jack",
    label: "Гидродомкрат 10 т",
    trade: (strength) => {
      const jackMass = 10000;
      const area = 0.01;
      const pressure = calcPressure(jackMass, area);
      const count = Math.max(1, Math.round(strength / pressure));
      return {
        leftIcon: "jack",
        leftQty: formatQty(count),
        rightIcon: "emerald",
        rightQty: formatQty(strength),
      };
    },
    calc: (strength) => {
      const jackMass = 10000;
      const area = 0.01;
      const pressure = calcPressure(jackMass, area);
      const count = Math.max(1, Math.round(strength / pressure));
      return `Домкрат 10 т на пятне 10x10 см дает около ${pressure.toFixed(2)} МПа. Это примерно ${count} таких домкратов.`;
    },
  },
  {
    id: "elephants",
    label: "Слоны на 1 м²",
    trade: (strength) => {
      const elephantMass = 5000;
      const pressure = calcPressure(elephantMass, 1);
      const count = Math.max(1, Math.round(strength / pressure));
      return {
        leftIcon: "elephant",
        leftQty: formatQty(count),
        rightIcon: "emerald",
        rightQty: formatQty(strength),
      };
    },
    calc: (strength) => {
      const elephantMass = 5000;
      const pressure = calcPressure(elephantMass, 1);
      const count = Math.max(1, Math.round(strength / pressure));
      return `Слон массой ~5 т на 1 м² дает около ${pressure.toFixed(2)} МПа. Для ${strength.toFixed(1)} МПа нужно примерно ${count} слонов.`;
    },
  },
  {
    id: "humans",
    label: "Человек на подошвах",
    trade: (strength) => {
      const humanMass = 80;
      const soleArea = 0.02;
      const pressure = calcPressure(humanMass, soleArea);
      const count = Math.max(1, Math.round(strength / pressure));
      return {
        leftIcon: "human",
        leftQty: formatQty(count),
        rightIcon: "emerald",
        rightQty: formatQty(strength),
      };
    },
    calc: (strength) => {
      const humanMass = 80;
      const soleArea = 0.02;
      const pressure = calcPressure(humanMass, soleArea);
      const count = Math.max(1, Math.round(strength / pressure));
      return `Человек 80 кг на площади 200 см² дает около ${pressure.toFixed(2)} МПа. Это примерно ${count} таких людей.`;
    },
  },
];

const stageOrder = ["intact", "stress", "hairline", "cracked", "fractured", "broken"];
const stageSteps = [
  { id: "intact", at: 0 },
  { id: "stress", at: 18 },
  { id: "hairline", at: 38 },
  { id: "cracked", at: 58 },
  { id: "fractured", at: 78 },
  { id: "broken", at: 94 },
];

let selectedIndex = -1;
let rafId = null;
let testRunning = false;

const setCubeStage = (stage) => {
  stageOrder.forEach((name) => cube.classList.remove(`stage-${name}`));
  if (stageOrder.includes(stage)) {
    cube.classList.add(`stage-${stage}`);
  }
};

const getStageByPercent = (percent) => {
  let current = stageSteps[0].id;
  stageSteps.forEach((step) => {
    if (percent >= step.at) current = step.id;
  });
  return current;
};

const updateLoad = (value, strength) => {
  loadValue.textContent = value.toFixed(1);
  const percent = Math.min(100, (value / strength) * 100);
  progressBar.style.width = `${percent}%`;
};

const resetTestState = () => {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  testRunning = false;
  loadValue.textContent = "0.0";
  progressBar.style.width = "0%";
  cube.classList.remove("is-testing", "is-broken");
  setCubeStage("intact");
  result.classList.remove("show");
  result.textContent = "";
  comparisons.classList.remove("show");
  comparisonOutput.textContent = "Выберите сравнение после испытания.";
  comparisonButtons.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));
  testButton.textContent = "Протестировать прочность";
};

const renderTrades = (strength) => {
  comparisonButtons.innerHTML = "";
  comparisonData.forEach((entry) => {
    const trade = entry.trade(strength);
    const row = document.createElement("button");
    row.type = "button";
    row.className = "trade-row";
    row.title = entry.label;
    row.innerHTML = `
      <div class="trade-label">${entry.label}</div>
      <div class="trade-slot">
        <div class="trade-icon icon-${trade.leftIcon}"></div>
        <div class="trade-qty">${trade.leftQty}</div>
      </div>
    `;
    row.addEventListener("click", () => {
      if (selectedIndex === -1) return;
      comparisonButtons.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));
      row.classList.add("active");
      const detailTrade = entry.trade(classes[selectedIndex].strength);
      comparisonOutput.innerHTML = `
        <div class="comparison-detail">
          <div class="comparison-thumb icon-${detailTrade.leftIcon}"></div>
          <div>
            <div class="comparison-title">${entry.label}</div>
            <div class="comparison-desc">${entry.calc(classes[selectedIndex].strength)}</div>
          </div>
        </div>
      `;
    });
    comparisonButtons.appendChild(row);
  });
};

const selectClass = (index) => {
  selectedIndex = index;
  const item = classes[index];
  document.querySelectorAll(".class-card").forEach((card, idx) => {
    card.classList.toggle("is-selected", idx === index);
  });

  detailCode.textContent = item.code;
  detailStrength.textContent = item.strength.toFixed(1);
  detailUse.textContent = item.use;
  detailPanel.classList.add("is-open");
  testButton.disabled = false;
  resetTestState();
  renderTrades(item.strength);
};

const finishTest = (item) => {
  testRunning = false;
  cube.classList.remove("is-testing");
  cube.classList.add("is-broken");
  result.textContent = `Прочность ${item.code} составляет ${item.strength.toFixed(1)} МПа.`;
  result.classList.add("show");
  comparisons.classList.add("show");
  testButton.disabled = false;
  testButton.textContent = "Повторить испытание";
};

const startTest = () => {
  if (selectedIndex === -1 || testRunning) return;
  const item = classes[selectedIndex];
  resetTestState();
  testRunning = true;
  testButton.disabled = true;
  cube.classList.add("is-testing");

  const duration = 2200;
  const strength = item.strength;
  const start = performance.now();

  const step = (now) => {
    const elapsed = now - start;
    const t = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const value = strength * eased;
    updateLoad(value, strength);

    const percent = (value / strength) * 100;
    setCubeStage(getStageByPercent(percent));

    if (t < 1) {
      rafId = requestAnimationFrame(step);
    } else {
      updateLoad(strength, strength);
      setCubeStage("broken");
      finishTest(item);
    }
  };

  rafId = requestAnimationFrame(step);
};

classes.forEach((item, index) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "class-card";
  card.innerHTML = `
    <div class="class-code">${item.code}</div>
    <div class="class-strength">${item.strength.toFixed(1)} МПа</div>
    <div class="class-use">${item.use}</div>
  `;
  card.addEventListener("click", () => selectClass(index));
  grid.appendChild(card);
});

if (classes.length > 0) {
  renderTrades(classes[0].strength);
}

testButton.addEventListener("click", startTest);
