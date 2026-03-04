const STORAGE_KEY = "gcse_revision_tracker_v5";
const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

/**
 * Daily test PDF setup:
 * - Put PDFs in the SAME folder as index.html (recommended), named:
 *     w1-monday-test.pdf
 *     w1-tuesday-test.pdf
 *     ...
 * - If you want them in a folder (e.g. /tests/), set TEST_PDF_BASE = "tests/"
 */
const TEST_PDF_BASE = ""; // e.g. "tests/" if you store them in /tests/

const $ = (sel) => document.querySelector(sel);
const el = (tag, attrs = {}, children = []) => {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v]) => {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else node.setAttribute(k, v);
  });
  children.forEach(c => node.appendChild(c));
  return node;
};

function loadState(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
  catch { return {}; }
}
function saveState(state){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function taskId(weekId, day, idx){ return `${weekId}|${day}|${idx}`; }

function flattenTasks(plan){
  const out = [];
  for (const w of plan.weeks){
    for (const day of DAYS){
      const list = w.days?.[day] || [];
      list.forEach((t, idx) => {
        out.push({
          id: taskId(w.id, day, idx),
          weekId: w.id,
          day,
          subject: t.subject,
          paper: t.paper || "",
          text: t.text
        });
      });
    }
  }
  return out;
}

function computeProgress(tasks, state){
  const total = tasks.length;
  const done = tasks.reduce((acc, t) => acc + (state[t.id] ? 1 : 0), 0);
  const pct = total ? Math.round((done / total) * 100) : 0;
  return {done,total,pct};
}

function setBar(barEl, textEl, prog){
  barEl.style.width = `${prog.pct}%`;
  textEl.textContent = `${prog.pct}% (${prog.done}/${prog.total})`;
}

function buildSubjectOptions(plan){
  const sel = $("#subjectFilter");
  sel.innerHTML = `<option value="all">All</option>`;
  plan.subjects.forEach(s => {
    sel.appendChild(el("option", { value: s, html: s }));
  });
}

function getSelectedWeekId(plan){
  const hash = (location.hash || "").replace("#", "");
  const exists = plan.weeks.some(w => w.id === hash);
  return exists ? hash : plan.weeks[0]?.id;
}

function renderWeekList(plan, selectedWeekId){
  const list = $("#weekList");
  list.innerHTML = "";
  plan.weeks.forEach(w => {
    list.appendChild(
      el("a", {
        href: `#${w.id}`,
        class: `week-link ${w.id === selectedWeekId ? "active" : ""}`
      }, [
        el("div", { html: w.title }),
        el("div", { class: "small", html: w.dateRange || "" })
      ])
    );
  });
}

function getTagLabel(task){
  if (task.subject === "Maths") return "Maths";
  if (task.subject === "REST") return "REST";
  if (!task.paper) return task.subject;
  return `${task.subject} (${task.paper})`;
}

function getTestPdfFilename(weekId, day){
  // Must match your naming style exactly: w1-monday-test.pdf
  return `${weekId}-${day.toLowerCase()}-test.pdf`;
}

function getTestPdfUrl(weekId, day){
  return `${TEST_PDF_BASE}${getTestPdfFilename(weekId, day)}`;
}

// Used to prevent async fetch from updating an old render
let __renderToken = 0;

function renderDailyTestBox({ containerEl, weekId, day }){
  const token = __renderToken;

  const pdfUrl = getTestPdfUrl(weekId, day);

  const title = el("div", { class: "test-title", html: "Daily summary test" });
  const desc = el("div", {
    class: "test-desc muted",
    html: `: <span class="mono">${getTestPdfFilename(weekId, day)}</span>`
  });

  const btn = el("a", {
    class: "btn test-btn disabled",
    href: "#",
    "aria-disabled": "true",
    tabindex: "-1",
    html: "Open Daily Test (PDF)"
  });

  const status = el("div", { class: "test-status muted", html: "Checking for today’s test PDF…" });

  const box = el("div", { class: "test-box" }, [title, desc, el("div", { class: "test-actions" }, [btn]), status]);
  containerEl.appendChild(box);

  // HEAD is lighter than GET; if it fails in some environments, we fallback to GET.
  const check = async () => {
    try {
      const res = await fetch(pdfUrl, { method: "HEAD", cache: "no-store" });
      return res.ok;
    } catch {
      try {
        const res2 = await fetch(pdfUrl, { method: "GET", cache: "no-store" });
        return res2.ok;
      } catch {
        return false;
      }
    }
  };

  check().then((exists) => {
    if (token !== __renderToken) return; // outdated render

    if (exists){
      btn.classList.remove("disabled");
      btn.setAttribute("aria-disabled", "false");
      btn.removeAttribute("tabindex");
      btn.href = pdfUrl;
      btn.target = "_blank";
      btn.rel = "noopener";

      status.innerHTML = `✅ Test PDF found. Open it after finishing the tasks above.`;
    } else {
      btn.classList.add("disabled");
      btn.href = "#";
      btn.setAttribute("aria-disabled", "true");
      btn.setAttribute("tabindex", "-1");

      status.innerHTML = `🕒 No test uploaded yet for this day. Upload <span class="mono">${getTestPdfFilename(weekId, day)}</span> to GitHub and refresh.`;
    }
  });
}

function rerender(plan, state, allTasks){
  __renderToken++;

  const selectedWeekId = getSelectedWeekId(plan);
  const subjectFilter = $("#subjectFilter").value;

  renderWeekList(plan, selectedWeekId);

  const week = plan.weeks.find(w => w.id === selectedWeekId);
  const weekView = $("#weekView");
  weekView.innerHTML = "";

  // Remember selected day per week in memory
  window.__daySel = window.__daySel || {};
  const selectedDay = window.__daySel[selectedWeekId] || "Monday";

  // Tasks for progress bars (filtered)
  const filteredAll = allTasks.filter(t => subjectFilter === "all" ? true : t.subject === subjectFilter);
  const weekTasks = filteredAll.filter(t => t.weekId === selectedWeekId);

  // Header
  weekView.appendChild(
    el("div", { class: "week-head" }, [
      el("div", {}, [
        el("h2", { html: week.title }),
        el("div", { class: "muted", html: week.dateRange || "" })
      ]),
      el("div", { class: "pill", html: `Tasks in view: <b>${weekTasks.length}</b>` })
    ])
  );

  // Day buttons
  const btnRow = el("div", { class: "day-tabs" });
  for (const day of DAYS){
    const isActive = day === selectedDay;
    const btn = el("button", {
      class: `day-tab ${isActive ? "active" : ""}`,
      type: "button",
      html: day
    });
    btn.addEventListener("click", () => {
      window.__daySel[selectedWeekId] = day;
      rerender(plan, state, allTasks);
    });
    btnRow.appendChild(btn);
  }
  weekView.appendChild(btnRow);

  // Single day panel
  const dayPanel = el("div", { class: `day-panel ${selectedDay === "Saturday" ? "rest" : ""}` });

  const rawList = week.days?.[selectedDay] || [];
  const list = rawList.filter(t => subjectFilter === "all" ? true : t.subject === subjectFilter);

  dayPanel.appendChild(
    el("div", { class: "day-panel-head" }, [
      el("h3", { html: selectedDay }),
      el("span", { class: "pill", html: `${list.length} tasks` })
    ])
  );

  list.forEach((t) => {
    // Important: task ids must use the original index from rawList
    const originalIndex = week.days[selectedDay].indexOf(t);
    const id = taskId(selectedWeekId, selectedDay, originalIndex);

    const cb = el("input", { type:"checkbox" });
    cb.checked = !!state[id];

    cb.addEventListener("change", () => {
      state[id] = cb.checked;
      saveState(state);
      rerender(plan, state, allTasks);
    });

    const meta = el("div", { class:"meta" }, [
      el("div", { class:"label", html: t.text }),
      el("div", { class:"tag", html: `<b>${getTagLabel(t)}</b>` })
    ]);

    dayPanel.appendChild(el("label", { class:"task" }, [cb, meta]));
  });

  // ✅ Add the Daily Test PDF box AFTER the tasks
  renderDailyTestBox({
    containerEl: dayPanel,
    weekId: selectedWeekId,
    day: selectedDay
  });

  weekView.appendChild(dayPanel);

  // Progress bars (filtered)
  setBar($("#overallBar"), $("#overallText"), computeProgress(filteredAll, state));
  setBar($("#weekBar"), $("#weekText"), computeProgress(weekTasks, state));
}

(function init(){
  const plan = window.REVISION_PLAN;
  if (!plan) {
    $("#weekView").textContent = "No plan found. Check data.js";
    return;
  }

  buildSubjectOptions(plan);

  const state = loadState();
  const allTasks = flattenTasks(plan);

  $("#subjectFilter").addEventListener("change", () => rerender(plan, state, allTasks));
  window.addEventListener("hashchange", () => rerender(plan, state, allTasks));

  $("#resetBtn").addEventListener("click", () => {
    const ok = confirm("Reset all ticks? (This only clears your browser's saved progress.)");
    if (!ok) return;
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  });

  rerender(plan, state, allTasks);
})();