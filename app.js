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

const foodDetails = {
  "육류": [
    {
      name: "돼지고기",
      note: "지방과 단백질 조직 사이에서 드립이 생기기 쉬워 저온 해동이 유리합니다.",
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "닭고기",
      note: "두께가 불균일한 부위는 해동과 가열이 고르지 않을 수 있습니다.",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "소고기",
      note: "육즙 손실이 식감과 풍미에 크게 연결되므로 냉장 해동이 적절합니다.",
      image: "https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "양고기",
      note: "향과 지방 산패 느낌이 드러날 수 있어 장기 냉동과 실온 해동을 피하는 것이 좋습니다.",
      image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=900&q=80"
    }
  ],
  "생선류": [
    {
      name: "고등어",
      note: "지방이 많은 생선은 산패와 비린내가 품질 평가에 크게 작용합니다.",
      image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "연어",
      note: "조직이 부드러워 급격한 해동 시 드립 손실과 표면 손상이 두드러질 수 있습니다.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "대구",
      note: "살이 쉽게 부서질 수 있어 천천히 해동하고 물리적 압박을 줄이는 것이 좋습니다.",
      image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "오징어",
      note: "과도한 가열이나 장시간 해동은 질김과 수분 손실로 이어질 수 있습니다.",
      image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80"
    }
  ],
  "채소류": [
    {
      name: "브로콜리",
      note: "세포벽 손상으로 아삭함이 줄 수 있어 바로 조리하는 방식이 잘 맞습니다.",
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "시금치",
      note: "잎채소는 해동 후 물러짐이 쉽게 나타나므로 국이나 볶음 조리에 적합합니다.",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "당근",
      note: "단단한 조직이지만 장기 냉동 후에는 표면 수분과 식감 변화가 나타날 수 있습니다.",
      image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "혼합채소",
      note: "재료마다 크기와 조직이 달라 해동과 조리 균일성에 차이가 생길 수 있습니다.",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80"
    }
  ],
  "과일류": [
    {
      name: "딸기",
      note: "수분이 많고 조직이 약해 해동 후 물러짐과 과즙 손실이 쉽게 보입니다.",
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "블루베리",
      note: "껍질이 터지면 색소와 수분이 빠져나와 외관 변화가 커질 수 있습니다.",
      image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "망고",
      note: "해동 후 부드러운 질감이 더 강해져 생과보다 가공용으로 쓰기 좋습니다.",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "바나나",
      note: "세포 손상과 갈변이 쉽게 나타나므로 스무디나 베이킹 재료에 적합합니다.",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80"
    }
  ],
  "빵·떡류": [
    {
      name: "식빵",
      note: "수분이 빠지면 푸석함이 커져 짧은 가열이나 토스트 조리가 적절합니다.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "바게트",
      note: "겉면 건조가 빠르게 나타나므로 과도한 전자레인지 가열은 피하는 것이 좋습니다.",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "떡",
      note: "전분 노화로 딱딱해질 수 있어 수분을 보충하며 짧게 가열하면 좋습니다.",
      image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "베이글",
      note: "두께가 있어 겉은 마르고 속은 차가운 상태가 될 수 있으므로 나누어 가열합니다.",
      image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=900&q=80"
    }
  ],
  "조리식품": [
    {
      name: "볶음밥",
      note: "알갱이 사이 온도 차이가 생길 수 있어 중간에 섞어 가열하는 것이 좋습니다.",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "만두",
      note: "피와 속의 수분 이동이 달라 터짐이나 속 가열 부족이 생길 수 있습니다.",
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "카레",
      note: "소스가 있는 음식은 저어 주면 중심부 가열 불균일을 줄일 수 있습니다.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "국·찌개",
      note: "액체가 있어 가열은 비교적 쉽지만 큰 재료는 중심 온도 확인이 필요합니다.",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80"
    }
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

function addEvidence(evidence, condition, score, reason) {
  evidence.push({ condition, score, reason });
}

function getFoodDetail(food, detailName) {
  return foodDetails[food].find((detail) => detail.name === detailName) || foodDetails[food][0];
}

function updateFoodDetailOptions() {
  const selectedFood = document.querySelector('input[name="food"]:checked').value;
  const detailSelect = document.querySelector("#food-detail");
  detailSelect.innerHTML = foodDetails[selectedFood]
    .map((detail) => `<option value="${detail.name}">${detail.name}</option>`)
    .join("");
}

function analyzeQuality({ food, detail, period, thaw, priority }) {
  let score = 1;
  const problems = [];
  const evidence = [
    {
      condition: "기본 위험",
      score: "+1",
      reason: "냉동·해동 과정 자체가 수분 이동과 조직 변화 가능성을 포함합니다."
    }
  ];
  const selectedDetail = getFoodDetail(food, detail);

  if (period === "3개월 이내") {
    score += 1;
    addEvidence(evidence, "냉동 기간 3개월 이내", "+1", "보관 기간이 길어질수록 얼음 결정 성장과 품질 저하 가능성이 커집니다.");
    addProblem(problems, "냉동 기간 증가로 인한 얼음 결정 성장과 조직감 저하 가능성");
  }

  if (period === "6개월 이상") {
    score += 2;
    addEvidence(evidence, "냉동 기간 6개월 이상", "+2", "장기 냉동은 수분 재배치, 산화, 풍미 저하 가능성을 높입니다.");
    addProblem(problems, "장기 냉동으로 인한 수분 재배치와 풍미 저하 가능성");
  }

  if (thaw === "실온 해동") {
    score += 2;
    addEvidence(evidence, "실온 해동", "+2", "식품 표면 온도가 빠르게 올라 품질 불균일과 안전성 위험이 커집니다.");
    addProblem(problems, "해동 중 온도 상승으로 인한 품질 불균일 및 안전성 저하 가능성");
  }

  if (thaw === "전자레인지 해동") {
    score += 1;
    addEvidence(evidence, "전자레인지 해동", "+1", "일부 부위가 먼저 가열되어 표면 건조와 부분 조리가 생길 수 있습니다.");
    addProblem(problems, "해동 중 일부 부위가 먼저 가열되어 표면 건조가 생길 가능성");
  }

  if (thaw === "흐르는 물 해동") {
    score += 1;
    addEvidence(evidence, "흐르는 물 해동", "+1", "표면과 내부의 해동 속도 차이로 품질 불균일이 생길 수 있습니다.");
    addProblem(problems, "표면과 내부의 해동 속도 차이로 품질 불균일이 생길 가능성");
  }

  if (thaw === "냉장 해동") {
    score -= 1;
    addEvidence(evidence, "냉장 해동", "-1", "저온에서 천천히 해동되어 드립 손실과 미생물 증식 위험을 줄이는 데 유리합니다.");
  }

  if (thaw === "바로 가열 조리") {
    addEvidence(evidence, "바로 가열 조리", "0", "해동 시간을 줄일 수 있지만 중심부 가열 불균일을 확인해야 합니다.");
    addProblem(problems, "중심부 가열이 늦어 내부 가열 불균일이 발생할 가능성");
  }

  if ((food === "육류" || food === "생선류") && thaw !== "냉장 해동") {
    score += 1;
    addEvidence(evidence, `${food} + 비냉장 해동`, "+1", "동물성 식품은 드립 손실이 육즙, 풍미, 안전성 판단에 크게 연결됩니다.");
    addProblem(problems, "드립 손실 증가로 육즙과 풍미가 감소할 가능성");
  }

  if (food === "육류" && thaw === "실온 해동" && (period === "3개월 이내" || period === "6개월 이상")) {
    score += 1;
    addEvidence(evidence, "육류 + 실온 해동 + 장기 냉동", "+1", "보수성 저하가 누적되어 조리 후 질김과 육즙 손실이 커질 수 있습니다.");
    addProblem(problems, "육류 조직의 보수성 저하로 조리 후 질김이 증가할 가능성");
  }

  if (food === "생선류" && thaw === "실온 해동") {
    score += 2;
    addEvidence(evidence, "생선류 + 실온 해동", "+2", "수산물은 조직이 약하고 수분이 많아 실온 해동 시 드립과 냄새 변화가 두드러질 수 있습니다.");
    addProblem(problems, "생선 조직이 약해 드립 손실과 비린내 증가 위험이 큽니다");
  }

  if (food === "채소류" && (period === "3개월 이내" || period === "6개월 이상")) {
    score += 1;
    addEvidence(evidence, "채소류 + 장기 냉동", "+1", "식물 세포벽 손상으로 해동 후 아삭한 조직감이 줄어들 수 있습니다.");
    addProblem(problems, "세포벽 손상으로 아삭한 조직감이 감소할 가능성");
  }

  if (food === "과일류") {
    score += 1;
    addEvidence(evidence, "과일류", "+1", "수분 함량이 높고 조직이 약해 해동 후 물러짐과 과즙 손실이 나타나기 쉽습니다.");
    addProblem(problems, "해동 후 수분 손실과 물러짐이 나타날 가능성");
  }

  if (food === "빵·떡류" && thaw === "전자레인지 해동") {
    addEvidence(evidence, "빵·떡류 + 전자레인지", "0", "짧은 해동은 유리하지만 과열 시 표면 건조와 전분 노화감이 커질 수 있습니다.");
    addProblem(problems, "전자레인지 과열 시 표면 건조와 딱딱해짐이 생길 가능성");
  }

  if (food === "조리식품" && thaw === "바로 가열 조리") {
    score -= 1;
    addEvidence(evidence, "조리식품 + 바로 가열", "-1", "완성 조리식품은 바로 가열이 편리하고 해동 방치 시간을 줄일 수 있습니다.");
    addProblem(problems, "바로 가열은 비교적 적절하지만 중심부 가열 불균일에 주의해야 합니다");
  }

  if (priority === "안전성" && thaw === "실온 해동") {
    score += 1;
    addEvidence(evidence, "안전성 중시 + 실온 해동", "+1", "안전성을 우선할 때 실온 방치는 가장 불리한 조건으로 판단했습니다.");
    addProblem(problems, "안전성을 중시할 경우 실온 방치는 특히 불리한 조건입니다");
  }

  if (priority === "식감" && (food === "채소류" || food === "과일류")) {
    addEvidence(evidence, "식감 중시 + 식물성 식품", "0", "세포 조직 손상에 따른 물러짐을 주요 관찰 포인트로 반영했습니다.");
    addProblem(problems, "식감을 중시할 경우 세포 조직 손상으로 인한 물러짐을 고려해야 합니다");
  }

  if (priority === "수분 유지") {
    addEvidence(evidence, "수분 유지 중시", "0", "드립 손실과 보수성 저하를 주요 해석 기준으로 반영했습니다.");
    addProblem(problems, "수분 유지가 중요할수록 드립 손실을 줄이는 저온 해동이 유리합니다");
  }

  if (["딸기", "바나나", "시금치"].includes(detail)) {
    score += 1;
    addEvidence(evidence, `${detail} 세부 특성`, "+1", "대표 식품의 조직이 약해 해동 후 물러짐이나 수분 빠짐이 비교적 잘 나타납니다.");
    addProblem(problems, `${detail}은 조직이 약해 해동 후 물러짐이나 수분 빠짐이 비교적 잘 나타납니다`);
  }

  if (["볶음밥", "만두", "국·찌개"].includes(detail) && thaw === "바로 가열 조리") {
    addEvidence(evidence, `${detail} + 바로 가열`, "0", "편리성은 높지만 중간 확인을 통해 중심부 가열 불균일을 줄여야 합니다.");
    addProblem(problems, `${detail}은 바로 가열할 수 있지만 중간 확인을 통해 내부 가열 불균일을 줄여야 합니다`);
  }

  const boundedScore = Math.max(0, Math.min(score, 3));
  return {
    risk: riskLevels[boundedScore],
    rawScore: score,
    evidence,
    problems: problems.length ? problems : ["현재 조건에서는 큰 품질 저하 요인이 비교적 적습니다."],
    recommendation: foodRecommendations[food],
    detailNote: selectedDetail.note,
    image: selectedDetail.image,
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

function renderEvidence(items) {
  return items
    .map(
      (item) => `
        <li>
          <strong>${item.condition}</strong>
          <span class="score-chip">${item.score}</span>
          <p>${item.reason}</p>
        </li>
      `
    )
    .join("");
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
      <span>${data.food} / ${data.detail} · ${data.period} · ${data.thaw}</span>
    </div>
    <figure class="food-visual">
      <img src="${result.image}" alt="${data.detail} 참고 이미지" loading="lazy" />
      <figcaption>${data.detail} 참고 이미지 · ${result.detailNote}</figcaption>
    </figure>
    <div class="science-note">${result.explanation}</div>
    <div class="visual-flow" aria-label="냉동 해동 품질 변화 흐름">
      <div>
        <span>1</span>
        <strong>수분 이동</strong>
        <p>식품 내부 수분이 얼음 결정 주변으로 이동합니다.</p>
      </div>
      <div>
        <span>2</span>
        <strong>얼음 결정</strong>
        <p>결정이 커지면 세포와 조직 사이를 압박합니다.</p>
      </div>
      <div>
        <span>3</span>
        <strong>조직 손상</strong>
        <p>해동 뒤 보수성이 낮아져 탄력이 줄어듭니다.</p>
      </div>
      <div>
        <span>4</span>
        <strong>드립 손실</strong>
        <p>밖으로 빠진 수분이 맛과 식감 저하로 이어집니다.</p>
      </div>
    </div>
    <div class="result-block">
      <h3>위험도 산출 근거</h3>
      <p class="score-note">조건별 점수를 합산한 뒤 0~3 범위로 보정하여 낮음, 보통, 높음, 매우 높음으로 변환했습니다. 현재 원점수는 <strong>${result.rawScore}</strong>입니다.</p>
      <ul class="evidence-list">${renderEvidence(result.evidence)}</ul>
    </div>
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
    detail: getSelectedValue(form, "detail"),
    period: getSelectedValue(form, "period"),
    thaw: getSelectedValue(form, "thaw"),
    priority: getSelectedValue(form, "priority")
  };
  renderResult(data, analyzeQuality(data));
});

document.querySelectorAll('input[name="food"]').forEach((input) => {
  input.addEventListener("change", updateFoodDetailOptions);
});

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-button").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.page}-page`).classList.add("active");
  });
});

updateFoodDetailOptions();
