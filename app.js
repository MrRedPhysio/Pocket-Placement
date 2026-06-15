const checklists = [
  { id:'scope', category:'Safety', title:'Student scope and supervision', steps:[
    'Know who your named educator or supervising clinician is for the day.',
    'Clarify what you may observe, assist with, practise and document.',
    'Explain your student role clearly before patient contact.',
    'Do not complete assessment or treatment outside your competence or authorisation.',
    'Escalate uncertainty early rather than guessing.',
    'Ask how incidents, near misses or concerns are reported locally.'
  ]},
  { id:'pre-placement', category:'Pre-placement', title:'Before you arrive', steps:[
    'Confirm date, start time, location, uniform and reporting instructions.',
    'Plan travel and aim to arrive early enough to settle before handover.',
    'Pack student ID, name badge, pen, notebook, water, lunch and any placement documents.',
    'Review confidentiality, consent, infection prevention and moving-and-handling basics.',
    'Read about the common patient group and common physiotherapy goals in the area.',
    'Prepare two learning objectives to discuss with your educator.'
  ]},
  { id:'patient-contact', category:'Patient contact', title:'Before seeing a patient', steps:[
    'Check patient identity using local policy and confirm the plan with your educator.',
    'Gain valid consent and remind the person they can decline student involvement.',
    'Ask about pain, dizziness, fatigue, breathlessness, falls, new weakness or other safety concerns.',
    'Check environment: brakes, footwear, walking aid, lines/tubes, space, call bell and privacy.',
    'Consider what matters to the person: goals, concerns, preferences and home context.',
    'Pause and ask your supervisor before proceeding if anything feels unsafe.'
  ]},
  { id:'infection', category:'NHS basics', title:'Infection prevention and professionalism', steps:[
    'Perform hand hygiene before and after patient contact.',
    'Use PPE according to local policy and current placement requirements.',
    'Clean shared equipment according to local guidance.',
    'Maintain dignity, privacy and confidentiality at all times.',
    'Avoid discussing patients in public areas or on social media.',
    'Use professional, inclusive and respectful language.'
  ]},
  { id:'falls', category:'NICE alignment', title:'Falls-aware practice', steps:[
    'Ask about recent falls, fear of falling, dizziness, medication changes and walking aid use when relevant.',
    'Do not rely on a single falls score as a substitute for clinical assessment and supervision.',
    'Discuss barriers to activity and confidence, especially if the person is fearful of movement.',
    'Check footwear, walking aid height, clutter, bed/chair height and appropriate supervision.',
    'Escalate any fall, near fall, head injury, sudden deterioration or unsafe mobility concern immediately.',
    'Document and hand over concerns according to local policy.'
  ]},
  { id:'redflags', category:'Escalation', title:'Red flags and urgent concerns', steps:[
    'Escalate chest pain, severe breathlessness, collapse, new confusion, neurological change or suspected sepsis immediately.',
    'For back/leg pain, escalate bladder/bowel changes, saddle sensory change, bilateral neurological symptoms or severe/progressive weakness.',
    'Escalate suspected safeguarding concerns, unexplained injury, coercion or neglect according to local policy.',
    'Stop treatment if the patient becomes unwell, unsafe, distressed or withdraws consent.',
    'Use SBAR to structure urgent communication.',
    'Record only factual information and inform your educator promptly.'
  ]},
  { id:'documentation', category:'Documentation', title:'Student documentation', steps:[
    'Ask what you are allowed to write and whether notes need countersigning.',
    'Use objective, factual and respectful language.',
    'Record consent, key findings, intervention, patient response, safety issues and plan.',
    'Avoid abbreviations you are not sure about.',
    'Never document something you did not observe or do.',
    'Ask for feedback on one note early in the placement.'
  ]},
  { id:'end-shift', category:'Reflection', title:'End of shift', steps:[
    'Complete notes and handover according to local policy.',
    'Tell your educator about concerns, learning needs or incidents.',
    'Log hours, skills observed and skills practised.',
    'Ask for one piece of specific feedback.',
    'Write a short reflection: what went well, what was challenging, what next?',
    'Choose one topic to revise before the next shift.'
  ]}
];

const scenarios = [
  {id:'faint', tag:'Emergency', title:'Patient feels faint during mobilisation', situation:'You are helping a patient stand. They become pale, sweaty and say they feel dizzy.', a:'Stop, support them to a safe position, call for help and follow local policy.', b:'Encourage them to keep walking because movement may help.', correct:'a', why:'Correct. Stop the activity, prevent a fall, call for help and follow the placement escalation process.', wrong:'Not safe. Dizziness can quickly become collapse or a fall. Stop and escalate.'},
  {id:'consent', tag:'Consent', title:'Patient asks if you are qualified', situation:'A patient asks: “Are you a real physiotherapist?”', a:'Say you are a supervised physiotherapy student and ask if they are happy for you to be involved.', b:'Say yes because you are part of the physiotherapy team.', correct:'a', why:'Correct. Be honest about your role and gain consent for student involvement.', wrong:'Do not misrepresent your role. Valid consent depends on honest information.'},
  {id:'refusal', tag:'Shared decision-making', title:'Patient refuses treatment', situation:'A patient says: “I do not want physiotherapy today.”', a:'Respect the refusal, explore the reason if appropriate, and inform your supervisor.', b:'Tell them they must do it because it is in the plan.', correct:'a', why:'Correct. Consent must be voluntary. Explore barriers respectfully and escalate to your educator.', wrong:'Pressuring a patient is not valid consent and damages trust.'},
  {id:'dontknow', tag:'Professionalism', title:'You do not know the answer', situation:'Your educator asks why you selected an exercise and your mind goes blank.', a:'Be honest, explain your thinking so far and ask to discuss the reasoning.', b:'Guess confidently so you look prepared.', correct:'a', why:'Correct. Safe students are honest, reflective and supervised.', wrong:'Guessing can be unsafe. Explain what you know and ask for guidance.'},
  {id:'backpain', tag:'Red flags', title:'Back pain with worrying symptoms', situation:'A patient with back pain mentions new bladder difficulty and numbness around the saddle area.', a:'Stop, do not continue routine treatment, and urgently escalate to your supervisor/medical team.', b:'Continue with gentle exercises and review later.', correct:'a', why:'Correct. These symptoms need urgent escalation. A student should not manage this independently.', wrong:'Not safe. Bladder/bowel or saddle sensory changes with back pain require urgent escalation.'},
  {id:'fallrisk', tag:'Falls', title:'Older patient afraid of falling', situation:'A patient says they avoid walking because they are scared of falling again.', a:'Acknowledge the fear, check safety factors, and discuss with your educator how to support confidence and activity.', b:'Tell them fear is normal and they should just walk more.', correct:'a', why:'Correct. Falls guidance emphasises individual risk factors, barriers and supporting participation.', wrong:'Dismissive reassurance is not person-centred and may reduce confidence.'},
  {id:'safeguarding', tag:'Safeguarding', title:'Unexplained bruising', situation:'During treatment you notice bruising and the patient appears frightened when a relative speaks for them.', a:'Do not confront. Record factual observations and report immediately to your educator according to policy.', b:'Ask the relative directly whether they caused the bruising.', correct:'a', why:'Correct. Keep the patient safe, record facts and escalate through safeguarding procedures.', wrong:'Confrontation may increase risk. Escalate through local safeguarding policy.'},
  {id:'notes', tag:'Documentation', title:'You forgot an exact measurement', situation:'You cannot remember the exact distance the patient walked.', a:'Write what you know factually and ask your educator how to handle the missing detail.', b:'Estimate a number so the note looks complete.', correct:'a', why:'Correct. Documentation must be honest and factual.', wrong:'Do not invent or estimate clinical details as fact.'}
];

const templates = [
  {id:'consent-script', category:'Communication', title:'Student consent script', content:`Hello, my name is [name]. I am a physiotherapy student working with [educator/team] today.\n\nI would like to [observe/assist/practise under supervision]. Is that okay with you? You can say no, and it will not affect your care.\n\nBefore we start, do you have any questions or anything you are worried about?`},
  {id:'shared-decision', category:'Communication', title:'Shared decision-making prompt', content:`What matters most to you today?\nWhat are you hoping physiotherapy will help you do?\nAre there any worries, beliefs, cultural needs or practical barriers I should understand?\nWould you like me to explain the options again or involve someone else in the discussion?`},
  {id:'sbar', category:'Escalation', title:'SBAR escalation template', content:`S - Situation: I am concerned about [patient/issue].\nB - Background: They are here for [reason]. Relevant history: [brief].\nA - Assessment: I observed [facts: symptoms/vitals/mobility/response].\nR - Recommendation: Please review/advise. Should we stop treatment/escalate medically/document as incident?`},
  {id:'soap', category:'Documentation', title:'SOAP note skeleton', content:`S: Patient reports [symptoms/function/goals/concerns]. Consent gained: [yes/no].\n\nO: Observed [mobility/ROM/strength/balance/transfers]. Intervention: [details]. Patient response: [tolerance/symptoms/safety].\n\nA: Summary/clinical reasoning discussed with educator: [brief]. Risks/concerns: [if any].\n\nP: Plan agreed with educator: [next steps]. Notes require countersignature: [yes/no].`},
  {id:'handover', category:'Communication', title:'Educator handover', content:`Patient: [initials/local identifier]\nMain issue: [brief summary]\nWhat I observed/did: [summary]\nResponse: [how patient managed]\nSafety concerns: [pain/dizziness/falls/refusal/red flags]\nMy clinical question: [what I need help with]\nNext action agreed: [plan]`},
  {id:'reflection', category:'Portfolio', title:'Mini reflective log', content:`What happened?\nWhat went well?\nWhat was challenging?\nWhat feedback did I receive?\nWhat evidence/guidance links to this?\nWhat will I do differently next time?`},
  {id:'educator', category:'Feedback', title:'Feedback request script', content:`Could I ask for feedback on one specific area today? I would like to improve my [communication/objective assessment/documentation/clinical reasoning].\n\nWhat did I do safely?\nWhat should I change next time?\nWhat should I revise before my next shift?`}
];

const safetyItems = [
  {title:'Valid consent', body:'Before assessment or treatment, explain your student role, what you are asking to do, and that the person can decline without affecting their care. Consent is ongoing and can be withdrawn.'},
  {title:'Shared decision-making', body:'Bring together clinical options, evidence, risks and benefits with the person’s preferences, goals, beliefs and circumstances. Ask “what matters to you?” rather than only “what is the matter?”'},
  {title:'Supervision', body:'Students should be clear about the nature and level of supervision, and patients should understand student involvement. If unsure, pause and ask your educator.'},
  {title:'Falls prevention', body:'Think beyond a score: consider individual risk factors, fear, environment, medicines, footwear, vision, strength, balance and confidence. Escalate falls, near falls and sudden deterioration.'},
  {title:'Red flags', body:'Urgently escalate concerning symptoms such as collapse, chest pain, severe breathlessness, new neurological signs, bladder/bowel or saddle sensory changes with back pain, safeguarding concerns or sudden deterioration.'},
  {title:'Documentation', body:'Be factual, respectful and timely. Document consent, relevant findings, intervention, response, safety concerns, escalation and agreed plan. Ask whether your notes need countersigning.'}
];

const state = JSON.parse(localStorage.getItem('pp-state') || '{}');
state.checked ||= {}; state.scenariosTried ||= []; state.templatesCopied ||= [];
const save = () => { localStorage.setItem('pp-state', JSON.stringify(state)); updateProgress(); };
const toast = (message) => { const t=document.getElementById('toast'); t.textContent=message; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),1800); };
function setView(id){ document.querySelectorAll('.view').forEach(v=>v.classList.remove('active-view')); document.getElementById(id).classList.add('active-view'); document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.view===id)); window.scrollTo({top:0,behavior:'smooth'}); }
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>setView(btn.dataset.view)));
document.querySelectorAll('[data-jump]').forEach(el=>el.addEventListener('click',()=>setView(el.dataset.jump)));

function renderChecklists(){ const root=document.getElementById('checklistList'); root.innerHTML=checklists.map(list=>{ const done=list.steps.filter((_,i)=>state.checked[`${list.id}-${i}`]).length; const pct=Math.round((done/list.steps.length)*100); const rows=list.steps.map((step,index)=>{ const key=`${list.id}-${index}`; const checked=!!state.checked[key]; return `<label class="check-row ${checked?'done':''}"><input type="checkbox" data-key="${key}" ${checked?'checked':''}><span>${step}</span></label>`}).join(''); return `<article class="card"><div class="card-head"><span class="badge">${list.category}</span><span class="mini-progress">${done}/${list.steps.length}</span></div><h3>${list.title}</h3><div class="bar small"><div style="width:${pct}%"></div></div>${rows}</article>`}).join(''); root.querySelectorAll('input[type="checkbox"]').forEach(box=>box.addEventListener('change',e=>{ state.checked[e.target.dataset.key]=e.target.checked; renderChecklists(); save(); })); }
function renderScenarios(){ const root=document.getElementById('scenarioList'); root.innerHTML=scenarios.map(s=>`<article class="card scenario" data-id="${s.id}"><div class="card-head"><span class="badge">${s.tag}</span><span class="mini-progress">${state.scenariosTried.includes(s.id)?'Tried':'New'}</span></div><h3>${s.title}</h3><p>${s.situation}</p><button class="choice" data-answer="a">A. ${s.a}</button><button class="choice" data-answer="b">B. ${s.b}</button><div class="result good">✅ ${s.why}</div><div class="result bad">❌ ${s.wrong}</div></article>`).join(''); root.querySelectorAll('.choice').forEach(btn=>btn.addEventListener('click',e=>{ const card=e.target.closest('.scenario'); const scenario=scenarios.find(s=>s.id===card.dataset.id); card.querySelectorAll('.result').forEach(r=>r.style.display='none'); const correct=e.target.dataset.answer===scenario.correct; card.querySelector(correct?'.good':'.bad').style.display='block'; if(!state.scenariosTried.includes(scenario.id)) state.scenariosTried.push(scenario.id); save(); })); }
function renderTemplates(){ const root=document.getElementById('templateList'); root.innerHTML=templates.map(t=>`<article class="card"><div class="card-head"><span class="badge">${t.category}</span><span class="mini-progress">${state.templatesCopied.includes(t.id)?'Copied':'Ready'}</span></div><h3>${t.title}</h3><pre class="template-text">${t.content}</pre><button class="copy" data-id="${t.id}">Copy template</button></article>`).join(''); root.querySelectorAll('.copy').forEach(btn=>btn.addEventListener('click',async e=>{ const template=templates.find(t=>t.id===e.target.dataset.id); await navigator.clipboard.writeText(template.content); if(!state.templatesCopied.includes(template.id)) state.templatesCopied.push(template.id); save(); renderTemplates(); toast('Template copied'); })); }
function renderSafety(){ document.getElementById('safetyList').innerHTML=safetyItems.map(item=>`<article class="card safety-card"><h3>${item.title}</h3><p>${item.body}</p></article>`).join('') + `<article class="card references"><h3>Reference base to check regularly</h3><ul><li>NICE shared decision-making guidance</li><li>NHS England shared decision-making resources</li><li>NICE falls assessment and prevention guideline NG249</li><li>NICE low back pain and sciatica guideline NG59 / cauda equina pathway resources</li><li>Chartered Society of Physiotherapy consent and supervision guidance</li><li>Your university handbook and local placement provider policies</li></ul></article>`; }
function updateProgress(){ const total=checklists.reduce((s,l)=>s+l.steps.length,0); const done=Object.values(state.checked).filter(Boolean).length; const pct=total?Math.round((done/total)*100):0; document.getElementById('overallPercent').textContent=`${pct}%`; document.getElementById('overallBar').style.width=`${pct}%`; document.getElementById('doneCount').textContent=done; document.getElementById('scenarioCount').textContent=state.scenariosTried.length; document.getElementById('templateCount').textContent=state.templatesCopied.length; document.getElementById('progressCaption').textContent = pct < 50 ? 'Keep going — complete the safety basics first.' : pct < 100 ? 'Good progress — practise scenarios next.' : 'Placement readiness checklist complete.'; }
document.getElementById('resetProgress').addEventListener('click',()=>{ if(!confirm('Reset all Pocket Placement progress?')) return; localStorage.removeItem('pp-state'); location.reload(); });
document.getElementById('exportProgress').addEventListener('click',()=>{ const done=Object.values(state.checked).filter(Boolean).length; const total=checklists.reduce((sum,list)=>sum+list.steps.length,0); const text=`Pocket Placement Progress Summary\n\nChecklist steps completed: ${done}/${total}\nScenarios practised: ${state.scenariosTried.length}/${scenarios.length}\nTemplates copied: ${state.templatesCopied.length}/${templates.length}\n\nReflection prompts:\n1. What do I feel more confident about?\n2. What do I still need to ask my educator?\n3. Which safety topic should I revise before my next shift?\n4. What feedback have I received and how will I act on it?`; const box=document.getElementById('exportBox'); box.textContent=text; box.hidden=false; });
if('serviceWorker' in navigator) navigator.serviceWorker.register('service-worker.js');
renderChecklists(); renderScenarios(); renderTemplates(); renderSafety(); updateProgress();
