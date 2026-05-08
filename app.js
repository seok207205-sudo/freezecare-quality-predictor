const foodTips = {
  "육류": [
    "냉장고에서 천천히 해동해 드립 손실과 미생물 증식 위험을 함께 줄입니다.",
    "해동 중 나온 드립은 다시 흡수시키지 말고 조리 전 제거합니다.",
    "두꺼운 부위는 중심부까지 충분히 해동한 뒤 균일하게 가열합니다."
  ],
  "생선류": [
    "가능하면 냉장 해동을 사용하고 포장을 유지해 표면 건조를 줄입니다.",
    "실온 해동은 조직이 약한 생선의 품질과 안전성에 불리하므로 피합니다.",
    "해동 후에는 오래 방치하지 말고 바로 조리합니다."
  ],
  "채소류": [
    "데친 후 냉동된 채소는 해동 시간을 줄이고 바로 조리하는 방식이 적절합니다.",
    "장기 냉동 채소는 무침보다 볶음, 국, 찌개처럼 조직감 변화가 덜 드러나는 조리에 사용합니다.",
    "해동 중 생긴 물기는 조리 전에 가볍게 제거합니다."
  ],
  "과일류": [
    "완전 해동 후 생과처럼 먹기보다 스무디, 잼, 토핑처럼 수분 변화를 활용합니다.",
    "천천히 냉장 해동하면 급격한 물러짐을 어느 정도 줄일 수 있습니다.",
    "해동 후 재냉동은 수분 손실과 조직 손상을 키울 수 있어 피합니다."
  ],
  "빵·떡류": [
    "짧게 전자레인지 해동하거나 바로 가열해 전분 노화로 인한 딱딱함을 줄입니다.",
    "과열하면 표면이 건조해질 수 있으므로 짧은 시간씩 나누어 가열합니다.",
    "떡은 약간의 수분을 함께 공급하면 갈라짐과 건조를 줄일 수 있습니다."
  ],
  "조리식품": [
    "바로 가열 조리는 편리하지만 중심부까지 충분히 데워졌는지 확인합니다.",
    "국물이나 소스가 있는 음식은 중간에 저어 가열 불균일을 줄입니다.",
    "해동 후 오래 보관하지 말고 필요한 양만 나누어 사용합니다."
  ]
};

const foodRecommendations = {
  "육류": "냉장 해동",
  "생선류": "냉장 해동",
  "채소류": "바로 가열 조리",
  "과일류": "냉장 해동",
  "빵·떡류": "바로 가열 조리 또는 짧은 전자레인지 해동",
  "조리식품": "바로 가열 조리"
};

const riskLevels = ["낮음", "보통", "높음", "매우 높음"];

function getSelectedValue(form, name) {
  return new FormData(form).get(name);
}

function addProblem(problems, text) {
  if (!problems.includes(text)) {
    problems.push(text);
  }
}

function analyzeQuality({ food, period, thaw, priority }) {
  let score = 1;
  const problems = [];

  if (period === "3개월 이내") {
    score += 1;
    addProblem(problems, "냉동 기간 증가로 인한 얼음 결정 성장과 조직감 저하 가능성");
  }

  if (period === "6개월 이상") {
    score += 2;
    addProblem(problems, "장기 냉동으로 인한 수분 재배치와 풍미 저하 가능성");
  }

  if (thaw === "실온 해동") {
    score += 2;
    addProblem(problems, "해동 중 온도 상승으로 인한 품질 불균일 및 안전성 저하 가능성");
  }

  if (thaw === "전자레인지 해동") {
    score += 1;
    addProblem(problems, "해동 중 일부 부위가 먼저 가열되어 표면 건조가 생길 가능성");
  }

  if (thaw === "흐르는 물 해동") {
    score += 1;
    addProblem(problems, "표면과 내부의 해동 속도 차이로 품질 불균일이 생길 가능성");
  }

  if (thaw === "냉장 해동") {
    score -= 1;
  }

  if (thaw === "바로 가열 조리") {
    addProblem(problems, "중심부 가열이 늦어 내부 가열 불균일이 발생할 가능성");
  }

  if ((food === "육류" || food === "생선류") && thaw !== "냉장 해동") {
    score += 1;
    addProblem(problems, "드립 손실 증가로 육즙과 풍미가 감소할 가능성");
  }

  if (food === "육류" && thaw === "실온 해동" && (period === "3개월 이내" || period === "6개월 이상")) {
    score += 1;
    addProblem(problems, "육류 조직의 보수성 저하로 조리 후 질김이 증가할 가능성");
  }

  if (food === "생선류" && thaw === "실온 해동") {
    score += 2;
    addProblem(problems, "생선 조직이 약해 드립 손실과 비린내 증가 위험이 큽니다");
  }

  if (food === "채소류" && (period === "3개월 이내" || period === "6개월 이상")) {
    score += 1;
    addProblem(problems, "세포벽 손상으로 아삭한 조직감이 감소할 가능성");
  }

  if (food === "과일류") {
    score += 1;
    addProblem(problems, "해동 후 수분 손실과 물러짐이 나타날 가능성");
  }

  if (food === "빵·떡류" && thaw === "전자레인지 해동") {
    addProblem(problems, "전자레인지 과열 시 표면 건조와 딱딱해짐이 생길 가능성");
  }

  if (food === "조리식품" && thaw === "바로 가열 조리") {
    score -= 1;
    addProblem(problems, "바로 가열은 비교적 적절하지만 중심부 가열 불균일에 주의해야 합니다");
  }

  if (priority === "안전성" && thaw === "실온 해동") {
    score += 1;
    addProblem(problems, "안전성을 중시할 경우 실온 방치는 특히 불리한 조건입니다");
  }

  if (priority === "식감" && (food === "채소류" || food === "과일류")) {
    addProblem(problems, "식감을 중시할 경우 세포 조직 손상으로 인한 물러짐을 고려해야 합니다");
  }

  if (priority === "수분 유지") {
    addProblem(problems, "수분 유지가 중요할수록 드립 손실을 줄이는 저온 해동이 유리합니다");
  }

  const boundedScore = Math.max(0, Math.min(score, 3));
  return {
    risk: riskLevels[boundedScore],
    problems: problems.length ? problems : ["현재 조건에서는 큰 품질 저하 요인이 비교적 적습니다."],
    recommendation: foodRecommendations[food],
    explanation:
      "냉동 과정에서는 식품 내부의 수분이 얼음 결정으로 변하면서 조직 구조에 영향을 줄 수 있습니다. 해동 과정에서 이 수분이 밖으로 빠져나오면 드립 손실이 발생하고, 식감과 풍미가 저하될 수 있습니다."
  };
}

function getRiskClass(risk) {
  return {
    "낮음": "risk-low",
    "보통": "risk-medium",
    "높음": "risk-high",
    "매우 높음": "risk-critical"
  }[risk];
}

function renderList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderResult(data, result) {
  const resultEl = document.querySelector("#result");
  resultEl.innerHTML = `
    <div class="section-heading">
      <span class="step">02</span>
      <h2>분석 결과</h2>
    </div>
    <div class="risk-banner ${getRiskClass(result.risk)}">
      <span>품질 저하 위험도</span>
      <strong>${result.risk}</strong>
      <span>${data.food} · ${data.period} · ${data.thaw}</span>
    </div>
    <div class="science-note">${result.explanation}</div>
    <div class="result-block">
      <h3>예상되는 주요 문제</h3>
      <ul>${renderList(result.problems)}</ul>
    </div>
    <div class="result-block">
      <h3>추천 해동 방식</h3>
      <p>${data.food}에는 <strong>${result.recommendation}</strong>을 우선 추천합니다. 선택한 품질 요소가 <strong>${data.priority}</strong>인 경우, 급격한 온도 변화와 과도한 가열을 줄이는 방식이 품질 유지에 더 유리합니다.</p>
    </div>
    <div class="result-block">
      <h3>품질 유지 팁</h3>
      <ul>${renderList(foodTips[data.food])}</ul>
    </div>
    <p class="disclaimer">본 결과는 문헌탐구를 바탕으로 한 예측 자료이며, 실제 품질 변화는 식품의 상태, 포장 방식, 보관 환경에 따라 달라질 수 있습니다.</p>
  `;
}

document.querySelector("#predict-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = {
    food: getSelectedValue(form, "food"),
    period: getSelectedValue(form, "period"),
    thaw: getSelectedValue(form, "thaw"),
    priority: getSelectedValue(form, "priority")
  };
  renderResult(data, analyzeQuality(data));
});

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-button").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.page}-page`).classList.add("active");
  });
});
