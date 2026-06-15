const checklists = [
  {
    id: 'before-arrive', category: 'Pre-placement', title: 'Before you arrive',
    steps: [
      'Confirm placement dates, start time, location and supervisor name.',
      'Check travel route and plan to arrive 15 minutes early.',
      'Pack name badge, student ID, pen, notebook, water and lunch.',
      'Review consent, confidentiality and infection prevention basics.',
      'Read about the common patient group for your placement area.',
      'Prepare one short introduction about who you are and your student role.'
    ]
  },
  {
    id: 'day-one', category: 'Day 1', title: 'First day survival',
    steps: [
      'Introduce yourself to the team and clarify your student role.',
      'Ask where to put your belongings and who to report to.',
      'Ask what you are allowed to observe, assist with, and document.',
      'Write down unfamiliar equipment, abbreviations and conditions to review later.',
      'Ask for a short end-of-day debrief with your educator.',
      'Reflect on one thing that went well and one thing to improve.'
    ]
  },
  {
    id: 'patient-contact', category: 'Communication', title: 'Before seeing a patient',
    steps: [
      'Check patient identity using local policy.',
      'Gain consent and explain you are a student.',
      'Check pain, fatigue, dizziness or anything that may make treatment unsafe.',
      'Make sure the environment is safe: brakes, space, footwear and equipment.',
      'Ask your supervisor before doing anything outside your confidence level.'
    ]
  },
  {
    id: 'end-shift', category: 'Daily', title: 'End of shift',
    steps: [
      'Complete any notes according to local policy.',
      'Tell your supervisor about any concerns or incidents.',
      'Ask for feedback on one specific skill.',
      'Log hours, skills observed and skills practised.',
      'Write a short reflection while it is fresh.'
    ]
  }
];

const scenarios = [
  {
    id: 'faint', tag: 'Emergency', title: 'Patient feels faint',
    situation: 'You are helping a patient mobilise. They become pale and say they feel dizzy.',
    a: 'Stop, keep them safe, call for help and follow local policy.',
    b: 'Encourage them to keep walking because it may pass.',
    correct: 'a',
    why: 'Correct. Safety comes first. Stop the activity, support the patient, alert staff and follow your placement policy.',
    wrong: 'Not safe. Dizziness can become a fall or medical emergency. Stop and escalate.'
  },
  {
    id: 'consent', tag: 'Communication', title: 'Patient asks if you are qualified',
    situation: 'A patient asks: “Are you a real physiotherapist?”',
    a: 'Say you are a supervised physiotherapy student and ask if they are happy for you to be involved.',
    b: 'Say yes, because you are part of the physiotherapy team.',
    correct: 'a',
    why: 'Correct. Be honest about your role and gain consent.',
    wrong: 'Never misrepresent your role. This can break trust and consent.'
  },
  {
    id: 'dont-know', tag: 'Professionalism', title: 'You do not know the answer',
    situation: 'Your educator asks why you chose a treatment and your mind goes blank.',
    a: 'Be honest, explain your thinking so far, and ask to discuss it.',
    b: 'Guess confidently so you do not look unprepared.',
    correct: 'a',
    why: 'Correct. Safe students are honest, reflective and willing to learn.',
    wrong: 'Guessing can be unsafe. Explain what you know and ask for guidance.'
  },
  {
    id: 'refusal', tag: 'Communication', title: 'Patient refuses treatment',
    situation: 'A patient says they do not want physiotherapy today.',
    a: 'Respect the refusal, explore the reason if appropriate, and inform your supervisor.',
    b: 'Tell them they must do it because it is part of the plan.',
    correct: 'a',
    why: 'Correct. Patients have the right to refuse. You can explore barriers and escalate to your supervisor.',
    wrong: 'Consent must be voluntary. Do not pressure the patient.'
  }
];

const templates = [
  {
    id: 'consent-script', category: 'Communication', title: 'Student consent script',
    content: `Hello, my name is [name]. I am a physiotherapy student working with the team today.\n\nIs it okay if I observe or assist with your treatment? You can say no, and it will not affect your care.\n\nDo you have any questions before we start?`
  },
  {
    id: 'soap', category: 'Documentation', title: 'SOAP note skeleton',
    content: `S: Patient reports [pain/symptoms/function/concerns].\n\nO: Observed [mobility/ROM/strength/balance/transfers]. Treatment completed: [details].\n\nA: Patient responded [well/with difficulty]. Key clinical reasoning: [brief rationale].\n\nP: Plan: [next steps]. Discussed with supervisor: [yes/no/name].`
  },
  {
    id: 'handover', category: 'Communication', title: 'Supervisor handover',
    content: `Patient: [initials or local identifier]\nMain issue: [brief summary]\nWhat I observed/did: [summary]\nResponse: [how the patient managed]\nConcerns: [safety, pain, dizziness, refusal, falls risk]\nMy question for you: [what you need help with]`
  },
  {
    id: 'reflection', category: 'Portfolio', title: 'Mini reflection',
    content: `What happened?\n[Brief description]\n\nWhat went well?\n[Strength]\n\nWhat was challenging?\n[Challenge]\n\nWhat did I learn?\n[Learning point]\n\nWhat will I do next time?\n[Action plan]`
  }
];

const state = JSON.parse(localStorage.getItem('pp-state') || '{}');
state.checked ||= {};
state.scenariosTried ||= [];
state.templatesCopied ||= [];

function save() { localStorage.setItem('pp-state', JSON.stringify(state)); updateProgress(); }
function toast(message) { const t = document.getElementById('toast'); t.textContent = message; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 1800); }
function setView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
  document.getElementById(id).classList.add('active-view');
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.view === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.view)));
document.querySelectorAll('[data-jump]').forEach(card => card.addEventListener('click', () => setView(card.dataset.jump)));

function renderChecklists() {
  const root = document.getElementById('checklistList');
  root.innerHTML = checklists.map(list => {
    const rows = list.steps.map((step, index) => {
      const key = `${list.id}-${index}`;
      const done = !!state.checked[key];
      return `<label class="check-row ${done ? 'done' : ''}"><input type="checkbox" data-key="${key}" ${done ? 'checked' : ''}><span>${step}</span></label>`;
    }).join('');
    return `<article class="card"><span class="badge">${list.category}</span><h3>${list.title}</h3>${rows}</article>`;
  }).join('');
  root.querySelectorAll('input[type="checkbox"]').forEach(box => box.addEventListener('change', e => {
    state.checked[e.target.dataset.key] = e.target.checked;
    e.target.closest('.check-row').classList.toggle('done', e.target.checked);
    save();
  }));
}

function renderScenarios() {
  const root = document.getElementById('scenarioList');
  root.innerHTML = scenarios.map(s => `
    <article class="card scenario" data-id="${s.id}">
      <span class="badge">${s.tag}</span><h3>${s.title}</h3><p>${s.situation}</p>
      <button class="choice" data-answer="a">A. ${s.a}</button>
      <button class="choice" data-answer="b">B. ${s.b}</button>
      <div class="result good">✅ ${s.why}</div>
      <div class="result bad">❌ ${s.wrong}</div>
    </article>
  `).join('');
  root.querySelectorAll('.choice').forEach(btn => btn.addEventListener('click', e => {
    const card = e.target.closest('.scenario');
    const scenario = scenarios.find(s => s.id === card.dataset.id);
    card.querySelectorAll('.result').forEach(r => r.style.display = 'none');
    const correct = e.target.dataset.answer === scenario.correct;
    card.querySelector(correct ? '.good' : '.bad').style.display = 'block';
    if (!state.scenariosTried.includes(scenario.id)) state.scenariosTried.push(scenario.id);
    save();
  }));
}

function renderTemplates() {
  const root = document.getElementById('templateList');
  root.innerHTML = templates.map(t => `
    <article class="card">
      <span class="badge">${t.category}</span><h3>${t.title}</h3>
      <pre class="template-text">${t.content}</pre>
      <button class="copy" data-id="${t.id}">Copy template</button>
    </article>
  `).join('');
  root.querySelectorAll('.copy').forEach(btn => btn.addEventListener('click', async e => {
    const template = templates.find(t => t.id === e.target.dataset.id);
    await navigator.clipboard.writeText(template.content);
    if (!state.templatesCopied.includes(template.id)) state.templatesCopied.push(template.id);
    save();
    toast('Template copied');
  }));
}

function updateProgress() {
  const totalSteps = checklists.reduce((sum, list) => sum + list.steps.length, 0);
  const done = Object.values(state.checked).filter(Boolean).length;
  const pct = totalSteps ? Math.round((done / totalSteps) * 100) : 0;
  document.getElementById('overallPercent').textContent = `${pct}%`;
  document.getElementById('overallBar').style.width = `${pct}%`;
  document.getElementById('doneCount').textContent = done;
  document.getElementById('scenarioCount').textContent = state.scenariosTried.length;
  document.getElementById('templateCount').textContent = state.templatesCopied.length;
}

document.getElementById('resetProgress').addEventListener('click', () => {
  if (!confirm('Reset all Pocket Placement progress?')) return;
  localStorage.removeItem('pp-state');
  location.reload();
});

document.getElementById('exportProgress').addEventListener('click', () => {
  const done = Object.values(state.checked).filter(Boolean).length;
  const total = checklists.reduce((sum, list) => sum + list.steps.length, 0);
  const text = `Pocket Placement Progress Summary\n\nChecklist steps completed: ${done}/${total}\nScenarios practised: ${state.scenariosTried.length}\nTemplates copied: ${state.templatesCopied.length}\n\nReflection prompt:\nWhat do I feel more confident about?\nWhat do I still need to ask my educator?`;
  const box = document.getElementById('exportBox');
  box.textContent = text;
  box.hidden = false;
});

if ('serviceWorker' in navigator) navigator.serviceWorker.register('service-worker.js');
renderChecklists();
renderScenarios();
renderTemplates();
updateProgress();
