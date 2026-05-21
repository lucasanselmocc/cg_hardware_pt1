const timeline = window.TIMELINE_DATA;
const track = document.getElementById("decadeTrack");
const readout = document.getElementById("decadeReadout");
const prevButton = document.getElementById("prevDecade");
const nextButton = document.getElementById("nextDecade");

const panel = {
  kicker: document.getElementById("panelKicker"),
  title: document.getElementById("panelTitle"),
  thesis: document.getElementById("panelThesis"),
  bottleneck: document.getElementById("panelBottleneck"),
  mainGrid: document.getElementById("mainGrid"),
  secondaryGrid: document.getElementById("secondaryGrid")
};

const detail = {
  meta: document.getElementById("detailMeta"),
  title: document.getElementById("detailTitle"),
  role: document.getElementById("detailRole"),
  problem: document.getElementById("detailProblem"),
  replaces: document.getElementById("detailReplaces"),
  impact: document.getElementById("detailImpact"),
  central: document.getElementById("detailCentral"),
  mediaMount: document.getElementById("mediaMount"),
  mediaLabel: document.getElementById("mediaLabel")
};

let activeDecade = 0;

function tone(index) {
  return ["rgba(125,211,252,.20)","rgba(167,139,250,.20)","rgba(34,197,94,.18)","rgba(96,165,250,.20)","rgba(251,113,133,.18)"][index % 5];
}


function buildDecadeCards() {
  track.innerHTML = "";
  timeline.forEach((decade, index) => {
    const card = document.createElement("button");
    card.className = "decade-card";
    card.type = "button";
    card.dataset.index = index;
    card.style.setProperty("--tone", tone(index));
    card.innerHTML = `
      <div class="decade-card__decade">${decade.decade}</div>
      <div class="decade-card__arc">${decade.arc}</div>
      <p class="decade-card__headline">${decade.headline}</p>
      <span class="decade-card__count">${decade.main.length + decade.secondary.length} marcos</span>
    `;
    card.addEventListener("click", () => setDecade(index, true));
    track.appendChild(card);
  });
}

function makeMilestoneCard(milestone, type) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = `milestone-card ${type}`;
  card.dataset.id = milestone.id;
  card.innerHTML = `
    <span class="card-type">${type === "primary" ? "Principal" : "Secundário"}</span>
    <div class="card-year">${milestone.year}</div>
    <h4>${milestone.title}</h4>
    <p>${milestone.role}</p>
  `;
  card.addEventListener("click", () => setMilestone(milestone.id, true));
  return card;
}

function setDecade(index, jump) {
  const decade = timeline[index];
  if (!decade) return;

  activeDecade = index;
  readout.textContent = decade.decade;
  panel.kicker.textContent = `${decade.decade} · ${decade.arc}`;
  panel.title.textContent = decade.headline;
  panel.thesis.textContent = decade.thesis;
  panel.bottleneck.textContent = decade.bottleneck;

  panel.mainGrid.innerHTML = "";
  panel.secondaryGrid.innerHTML = "";

  decade.main.forEach((item) => panel.mainGrid.appendChild(makeMilestoneCard(item, "primary")));
  decade.secondary.forEach((item) => panel.secondaryGrid.appendChild(makeMilestoneCard(item, "secondary")));

  document.querySelectorAll(".decade-card").forEach((card) => {
    card.classList.toggle("is-active", Number(card.dataset.index) === index);
  });

  if (decade.main[0]) setMilestone(decade.main[0].id, false);

  if (jump) {
    track.querySelector(`[data-index="${index}"]`)?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    document.getElementById("decadePanel").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function findMilestone(id) {
  for (const decade of timeline) {
    const item = [...decade.main, ...decade.secondary].find((milestone) => milestone.id === id);
    if (item) return { decade, item };
  }
  return null;
}

function renderMedia(item) {
  if (item.video?.kind === "local") {
    detail.mediaMount.innerHTML = `
      <video controls playsinline preload="metadata">
        <source src="${item.video.src}" type="video/mp4">
      </video>
    `;
    detail.mediaLabel.textContent = item.video.title;
    return;
  }

  if (item.link) {
    detail.mediaMount.innerHTML = `
      <div class="link-card">
        <h3>${item.link.title}</h3>
        <p>Material externo para aprofundamento deste marco secundário.</p>
        <a class="study-link" href="${item.link.url}" target="_blank" rel="noopener noreferrer">Abrir fonte</a>
      </div>
    `;
    detail.mediaLabel.textContent = "";
  }
}

function setMilestone(id, jump) {
  const found = findMilestone(id);
  if (!found) return;

  const { decade, item } = found;
  detail.meta.textContent = `${decade.decade} · ${item.year}`;
  detail.title.textContent = item.title;
  detail.role.textContent = item.role;
  detail.problem.textContent = item.problem;
  detail.replaces.textContent = item.replaces;
  detail.impact.textContent = item.impact;
  detail.central.textContent = item.central;
  renderMedia(item);

  document.querySelectorAll(".milestone-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.id === id);
  });

  if (jump) document.getElementById("detailPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function moveDecade(direction) {
  const nextIndex = Math.max(0, Math.min(timeline.length - 1, activeDecade + direction));
  setDecade(nextIndex, true);
}

prevButton.addEventListener("click", () => moveDecade(-1));
nextButton.addEventListener("click", () => moveDecade(1));
track.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") moveDecade(-1);
  if (event.key === "ArrowRight") moveDecade(1);
});

buildDecadeCards();
setDecade(0, false);
