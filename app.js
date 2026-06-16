// ============================================================
// POCKET PLACEMENT v2.0 — app.js
// ============================================================

// ── CHECKLISTS ───────────────────────────────────────────────

const checklists = [
  { id:'what-to-bring', category:'Pre-placement', title:'What to bring', steps:[
    'Uniform — clean, ironed and compliant with local dress code.',
    'Student ID card and placement confirmation letter or email.',
    'Fob watch (essential for taking pulse and respiratory rate).',
    'Black pen for clinical documentation.',
    'Small notebook or pad for jotting observations.',
    'Water bottle and packed lunch (placement areas may have limited facilities).',
    'University placement documentation, learning objectives form or competency booklet.',
    'Stethoscope if required or recommended by your placement area.',
    'Flat, closed-toe, non-slip shoes that comply with local uniform policy.',
    'Hair tied back if required by local infection prevention policy.'
  ]},
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

// ── SCENARIOS ────────────────────────────────────────────────

const scenarios = [
  // General
  {id:'faint', tag:'Emergency', specialty:'General', title:'Patient feels faint during mobilisation', situation:'You are helping a patient stand. They become pale, sweaty and say they feel dizzy.', a:'Stop, support them to a safe position, call for help and follow local policy.', b:'Encourage them to keep walking because movement may help.', correct:'a', why:'Correct. Stop the activity, prevent a fall, call for help and follow the placement escalation process.', wrong:'Not safe. Dizziness can quickly become collapse or a fall. Stop and escalate.'},
  {id:'consent', tag:'Consent', specialty:'General', title:'Patient asks if you are qualified', situation:'A patient asks: "Are you a real physiotherapist?"', a:'Say you are a supervised physiotherapy student and ask if they are happy for you to be involved.', b:'Say yes because you are part of the physiotherapy team.', correct:'a', why:'Correct. Be honest about your role and gain consent for student involvement.', wrong:'Do not misrepresent your role. Valid consent depends on honest information.'},
  {id:'refusal', tag:'Shared decision-making', specialty:'General', title:'Patient refuses treatment', situation:'A patient says: "I do not want physiotherapy today."', a:'Respect the refusal, explore the reason if appropriate, and inform your supervisor.', b:'Tell them they must do it because it is in the plan.', correct:'a', why:'Correct. Consent must be voluntary. Explore barriers respectfully and escalate to your educator.', wrong:'Pressuring a patient is not valid consent and damages trust.'},
  {id:'dontknow', tag:'Professionalism', specialty:'General', title:'You do not know the answer', situation:'Your educator asks why you selected an exercise and your mind goes blank.', a:'Be honest, explain your thinking so far and ask to discuss the reasoning.', b:'Guess confidently so you look prepared.', correct:'a', why:'Correct. Safe students are honest, reflective and supervised.', wrong:'Guessing can be unsafe. Explain what you know and ask for guidance.'},
  {id:'safeguarding', tag:'Safeguarding', specialty:'General', title:'Unexplained bruising', situation:'During treatment you notice bruising and the patient appears frightened when a relative speaks for them.', a:'Do not confront. Record factual observations and report immediately to your educator according to policy.', b:'Ask the relative directly whether they caused the bruising.', correct:'a', why:'Correct. Keep the patient safe, record facts and escalate through safeguarding procedures.', wrong:'Confrontation may increase risk. Escalate through local safeguarding policy.'},
  {id:'notes', tag:'Documentation', specialty:'General', title:'You forgot an exact measurement', situation:'You cannot remember the exact distance the patient walked.', a:'Write what you know factually and ask your educator how to handle the missing detail.', b:'Estimate a number so the note looks complete.', correct:'a', why:'Correct. Documentation must be honest and factual.', wrong:'Do not invent or estimate clinical details as fact.'},
  {id:'professional', tag:'Professionalism', specialty:'General', title:'You witness unprofessional behaviour', situation:'You observe a qualified physiotherapist speaking dismissively and rudely to a patient who is moving slowly.', a:'Do not confront publicly. Record what you observed factually and raise it with your educator or a senior colleague after the interaction.', b:'Immediately challenge the clinician in front of the patient.', correct:'a', why:'Correct. You have a professional duty of candour. Raise concerns privately through appropriate channels.', wrong:'Public confrontation can escalate the situation and harm the patient. Use proper reporting channels.'},
  // MSK
  {id:'backpain', tag:'Red flags', specialty:'MSK', title:'Back pain with worrying symptoms', situation:'A patient with back pain mentions new bladder difficulty and numbness around the saddle area.', a:'Stop, do not continue routine treatment, and urgently escalate to your supervisor/medical team.', b:'Continue with gentle exercises and review later.', correct:'a', why:'Correct. These symptoms need urgent escalation. A student should not manage this independently.', wrong:'Not safe. Bladder/bowel or saddle sensory changes with back pain require urgent escalation.'},
  {id:'knee', tag:'Red flags', specialty:'MSK', title:'Acute knee injury on ward', situation:'A patient twisted their knee getting out of bed. They can weight-bear but are limping and report significant pain (7/10).', a:'Stop, seat the patient, and report to your educator — do not push further until the area is assessed.', b:'Continue the mobilisation slowly as they can still walk.', correct:'a', why:'Correct. A new acute injury needs assessment by a qualified clinician before continuing any mobilisation.', wrong:'Ability to weight-bear does not rule out significant injury. Stop and escalate for proper assessment.'},
  // Respiratory
  {id:'desaturation', tag:'Emergency', specialty:'Respiratory', title:'SpO₂ drops during exercise', situation:'A patient\'s oxygen saturation falls to 87% on your pulse oximeter during a walking assessment.', a:'Stop the activity immediately, seat the patient, alert the nursing team and your educator.', b:'Continue for 30 more seconds to see if it self-corrects.', correct:'a', why:'Correct. SpO₂ below 90% requires immediate action. Stop, sit, alert, and do not proceed without clinical review.', wrong:'Not safe. Desaturation can deteriorate rapidly. Stop immediately and escalate.'},
  // Neuro
  {id:'aphasia', tag:'Communication', specialty:'Neuro', title:'Patient with aphasia becomes distressed', situation:'A patient post-stroke has expressive aphasia. They are becoming increasingly agitated and trying to communicate something you cannot understand.', a:'Stop, use gesture and visual cues, alert your educator, and consider involving a family member or the speech and language team.', b:'Proceed with the session as planned — the patient agreed at the start.', correct:'a', why:'Correct. Distress in a non-verbal patient is a safety signal. Stop and involve your educator and appropriate team members.', wrong:'Consent is ongoing. Signs of distress mean you must stop and reassess, even if initial consent was given.'},
  // Elderly care
  {id:'fallrisk', tag:'Falls', specialty:'Elderly care', title:'Older patient afraid of falling', situation:'A patient says they avoid walking because they are scared of falling again.', a:'Acknowledge the fear, check safety factors, and discuss with your educator how to support confidence and activity.', b:'Tell them fear is normal and they should just walk more.', correct:'a', why:'Correct. Falls guidance emphasises individual risk factors, barriers and supporting participation.', wrong:'Dismissive reassurance is not person-centred and may reduce confidence further.'},
  {id:'capacity', tag:'Consent', specialty:'Elderly care', title:'Patient with dementia seems confused about consent', situation:'A patient with known dementia nods when you explain the exercise session, but seems confused and cannot repeat back what will happen.', a:'Pause, discuss with your educator, and consider whether a formal capacity assessment and best interests process is needed.', b:'Proceed — they nodded, which is implied consent.', correct:'a', why:'Correct. Valid consent requires understanding. A nod alone from a confused patient is not sufficient. Involve your educator.', wrong:'A nod without understanding does not constitute valid consent for a patient who may lack capacity.'},
  // Community
  {id:'homevisit', tag:'Safeguarding', specialty:'Community', title:'Concerning home conditions on a community visit', situation:'During a home visit you notice the house is very cold, there is no food visible, and the patient seems unkempt and isolated.', a:'Complete your session professionally, make factual observations, and report your concerns to your educator immediately after.', b:'Tell the patient directly that their living conditions are not acceptable.', correct:'a', why:'Correct. Document factual observations and raise concerns through the proper safeguarding and adult social care pathway with your educator.', wrong:'Direct confrontation can damage trust and is not the right pathway. Report through proper channels.'},
  // Paediatric
  {id:'paediatric', tag:'Consent', specialty:'Paediatric', title:'Child becomes very distressed mid-session', situation:'A child on a paediatric placement becomes very upset and is crying, asking for their parent who has stepped out.', a:'Stop the session, comfort the child, get the parent, and only restart when the child is settled and willing.', b:'Continue quickly to get the session done before the parent returns.', correct:'a', why:'Correct. A child\'s assent is essential and ongoing. Proceeding with a distressed child is ethically wrong and potentially harmful.', wrong:'Never proceed with treatment when a child is clearly distressed and not consenting. Stop immediately.'}
];

// ── TEMPLATES ────────────────────────────────────────────────

const templates = [
  {id:'consent-script', category:'Communication', title:'Student consent script', content:`Hello, my name is [name]. I am a physiotherapy student working with [educator/team] today.\n\nI would like to [observe/assist/practise under supervision]. Is that okay with you? You can say no, and it will not affect your care.\n\nBefore we start, do you have any questions or anything you are worried about?`},
  {id:'shared-decision', category:'Communication', title:'Shared decision-making prompt', content:`What matters most to you today?\nWhat are you hoping physiotherapy will help you do?\nAre there any worries, beliefs, cultural needs or practical barriers I should understand?\nWould you like me to explain the options again or involve someone else in the discussion?`},
  {id:'sbar', category:'Escalation', title:'SBAR escalation template', content:`S - Situation: I am concerned about [patient/issue].\nB - Background: They are here for [reason]. Relevant history: [brief].\nA - Assessment: I observed [facts: symptoms/vitals/mobility/response].\nR - Recommendation: Please review/advise. Should we stop treatment / escalate medically / document as incident?`},
  {id:'soap', category:'Documentation', title:'SOAP note skeleton', content:`S: Patient reports [symptoms/function/goals/concerns]. Consent gained: [yes/no].\n\nO: Observed [mobility/ROM/strength/balance/transfers]. Intervention: [details]. Patient response: [tolerance/symptoms/safety].\n\nA: Summary/clinical reasoning discussed with educator: [brief]. Risks/concerns: [if any].\n\nP: Plan agreed with educator: [next steps]. Notes require countersignature: [yes/no].`},
  {id:'msk-objective', category:'Documentation', title:'MSK objective assessment prompt', content:`Observation: Posture, gait, deformity, swelling, asymmetry, antalgic pattern.\n\nPalpation: Tenderness location, warmth, swelling, muscle tone. (Practise only under direct supervision.)\n\nRange of motion (ROM):\n  Active: [degrees/description]\n  Passive: [degrees/description]\n  Pain provocation: [yes/no — where]\n\nStrength (MRC 0–5): [muscle group] [grade] — compare bilaterally.\n\nSpecial tests: [test name] — [positive/negative] — significance discussed with educator: [brief].\n\nFunctional: Transfers [describe]. Gait [describe]. Limited by [reason].`},
  {id:'goal-setting', category:'Communication', title:'Goal-setting prompt (SMART)', content:`Short-term goal (this week):\n"By [date], [patient] will be able to [activity] [measurement] with [assistance level]."\n\nLonger-term goal (discharge/review):\n"By [date], [patient] will [meaningful activity] in order to [context / why it matters]."\n\nWhat the patient said matters most: [quote or paraphrase]\nBarriers identified: [list]\nAgreed plan: [steps toward goal]`},
  {id:'handover', category:'Communication', title:'Educator handover', content:`Patient: [initials/local identifier]\nMain issue: [brief summary]\nWhat I observed/did: [summary]\nResponse: [how patient managed]\nSafety concerns: [pain/dizziness/falls/refusal/red flags]\nMy clinical question: [what I need help with]\nNext action agreed: [plan]`},
  {id:'discharge', category:'Documentation', title:'Discharge / episode summary prompt', content:`Patient: [initials/local identifier]\nAdmission reason / referral: [brief]\nPhysiotherapy involvement: [dates, sessions, specialty]\nProgress: [functional gains, objective measures]\nGoals achieved: [yes/no/partial — detail]\nOutstanding concerns: [if any]\nHEP given: [yes/no — detail]\nEquipment provided: [list]\nFollow-up: [outpatient referral / self-discharge / GP / none]\nCountersigned by: [educator name and signature line]`},
  {id:'reflection', category:'Portfolio', title:'Mini reflective log', content:`What happened?\nWhat went well?\nWhat was challenging?\nWhat feedback did I receive?\nWhat evidence or guidance links to this?\nWhat will I do differently next time?`},
  {id:'educator', category:'Feedback', title:'Feedback request script', content:`Could I ask for feedback on one specific area today? I would like to improve my [communication / objective assessment / documentation / clinical reasoning].\n\nWhat did I do safely?\nWhat should I change next time?\nWhat should I revise before my next shift?`}
];

// ── SAFETY ITEMS ─────────────────────────────────────────────

const safetyItems = [
  {title:'Valid consent', body:'Before assessment or treatment, explain your student role, what you are asking to do, and that the person can decline without affecting their care. Consent is ongoing and can be withdrawn.'},
  {title:'Shared decision-making', body:'Bring together clinical options, evidence, risks and benefits with the person\'s preferences, goals, beliefs and circumstances. Ask "what matters to you?" rather than only "what is the matter?"'},
  {title:'Supervision', body:'Students should be clear about the nature and level of supervision, and patients should understand student involvement. If unsure, pause and ask your educator.'},
  {title:'Falls prevention', body:'Think beyond a score: consider individual risk factors, fear, environment, medicines, footwear, vision, strength, balance and confidence. Escalate falls, near falls and sudden deterioration.'},
  {title:'Red flags', body:'Urgently escalate concerning symptoms: collapse, chest pain, severe breathlessness, new neurological signs, bladder/bowel or saddle sensory changes with back pain, safeguarding concerns, or sudden deterioration.'},
  {title:'Documentation', body:'Be factual, respectful and timely. Document consent, relevant findings, intervention, response, safety concerns, escalation and agreed plan. Ask whether your notes need countersigning.'}
];

const references = [
  { text:'NICE — Shared decision-making guideline (NG197)', url:'https://www.nice.org.uk/guidance/ng197' },
  { text:'NHS England — Shared decision-making resources', url:'https://www.england.nhs.uk/shared-decision-making/' },
  { text:'NICE — Falls in older people: assessment and prevention (NG249)', url:'https://www.nice.org.uk/guidance/ng249' },
  { text:'NICE — Low back pain and sciatica (NG59)', url:'https://www.nice.org.uk/guidance/ng59' },
  { text:'CSP — Consent guidance for physiotherapists', url:'https://www.csp.org.uk/professional-clinical/professional-guidance/consent' },
  { text:'Your university handbook and local placement provider policies', url:null }
];

// ── QUICK REFERENCE ───────────────────────────────────────────

const quickRefSections = [
  {
    id:'vitals', title:'Normal adult vital signs', icon:'❤️',
    items:[
      {label:'Heart rate (HR)', value:'60–100 bpm', note:'Trained athletes may be lower'},
      {label:'Blood pressure (BP)', value:'< 120/80 mmHg optimal', note:'NHS treatment target < 140/90 mmHg'},
      {label:'Respiratory rate (RR)', value:'12–20 breaths/min', note:'Count for a full 60 s; > 20 = tachypnoea'},
      {label:'Oxygen saturation (SpO₂)', value:'≥ 95%', note:'≤ 94% alert clinician; < 90% urgent escalation'},
      {label:'Temperature', value:'36.1–37.2 °C', note:'> 38.0 °C = fever; < 36.0 °C = hypothermia'},
      {label:'NEWS2 score', value:'0–4 Low · 5–6 Medium · ≥7 High', note:'Follow local escalation policy for any score ≥ 5'}
    ]
  },
  {
    id:'avpu', title:'AVPU consciousness scale', icon:'🧠',
    items:[
      {label:'A — Alert', value:'Awake, aware and responsive', note:''},
      {label:'V — Voice', value:'Responds to verbal stimulation', note:''},
      {label:'P — Pain', value:'Responds only to painful stimulation', note:''},
      {label:'U — Unresponsive', value:'No response to any stimulus', note:'Emergency — call for help immediately'}
    ]
  },
  {
    id:'mrc', title:'MRC muscle strength grading', icon:'💪',
    items:[
      {label:'Grade 0', value:'No contraction', note:''},
      {label:'Grade 1', value:'Flicker or trace of contraction', note:''},
      {label:'Grade 2', value:'Active movement, gravity eliminated', note:''},
      {label:'Grade 3', value:'Active movement against gravity', note:''},
      {label:'Grade 4', value:'Active movement against resistance', note:'Sub-grades 4−, 4, 4+ used clinically'},
      {label:'Grade 5', value:'Normal power', note:'Always compare bilaterally'}
    ]
  },
  {
    id:'borg', title:'Borg RPE scale (6–20)', icon:'🏃',
    items:[
      {label:'6–8', value:'Very, very light', note:'Rest or very gentle activity'},
      {label:'9–10', value:'Very light', note:''},
      {label:'11–12', value:'Fairly light', note:''},
      {label:'13–14', value:'Somewhat hard', note:'Target range for many rehab patients'},
      {label:'15–16', value:'Hard', note:''},
      {label:'17–18', value:'Very hard', note:'Usually not appropriate for early rehab'},
      {label:'19–20', value:'Very, very hard', note:'Stop if patient cannot speak in sentences'}
    ]
  },
  {
    id:'tug', title:'Timed Up and Go (TUG)', icon:'🚶',
    items:[
      {label:'< 10 seconds', value:'Freely mobile, low fall risk', note:'Community-dwelling older adults'},
      {label:'10–19 seconds', value:'Mostly independent', note:'May need supervision outdoors'},
      {label:'20–29 seconds', value:'Variable mobility', note:'Discuss with educator; intervention likely needed'},
      {label:'≥ 30 seconds', value:'Poor mobility, high fall risk', note:'Escalate concerns; equipment/assistance likely needed'}
    ]
  },
  {
    id:'pain', title:'Numeric pain rating scale (NRS 0–10)', icon:'😣',
    items:[
      {label:'0', value:'No pain', note:''},
      {label:'1–3', value:'Mild pain', note:'Able to do most activities'},
      {label:'4–6', value:'Moderate pain', note:'Some limitation; discuss approach with educator'},
      {label:'7–9', value:'Severe pain', note:'Re-evaluate appropriateness of session'},
      {label:'10', value:'Worst imaginable pain', note:'Consider stopping and escalating'}
    ]
  },
  {
    id:'abbreviations', title:'Common physiotherapy abbreviations', icon:'📖',
    items:[
      {label:'ROM', value:'Range of motion', note:''},
      {label:'AROM / PROM', value:'Active / Passive range of motion', note:''},
      {label:'PWB / TTWB / NWB / FWB', value:'Partial / Toe-touch / Non / Full weight bearing', note:''},
      {label:'OA / RA', value:'Osteoarthritis / Rheumatoid arthritis', note:''},
      {label:'CVA / TIA', value:'Cerebrovascular accident / Transient ischaemic attack', note:''},
      {label:'COPD', value:'Chronic obstructive pulmonary disease', note:''},
      {label:'SOB / SOBOE', value:'Short of breath / … on exertion', note:''},
      {label:'HEP', value:'Home exercise programme', note:''},
      {label:'MSK', value:'Musculoskeletal', note:''},
      {label:'NOF / THR / TKR', value:'Neck of femur / Total hip / Total knee replacement', note:''},
      {label:'SBAR', value:'Situation–Background–Assessment–Recommendation', note:''},
      {label:'SOAP', value:'Subjective–Objective–Assessment–Plan', note:''},
      {label:'Hx / Sx / Rx', value:'History / Symptoms / Treatment', note:''}
    ]
  }
];

// ── DAILY TIPS ────────────────────────────────────────────────

const dailyTips = [
  'Introduce yourself by name and role every time — patients will not remember from yesterday.',
  'When in doubt, stop and ask your educator. It is always the right call.',
  'Your observation skills are one of your most powerful tools right now.',
  'Write your reflections today, not next week. Details fade fast.',
  'Ask your educator for one piece of positive feedback AND one thing to improve.',
  'Fear of falling is as disabling as the fall itself — always explore it with patients.',
  'A patient\'s goal and a clinician\'s goal are not always the same thing.',
  'Pace yourself. Placement fatigue is real. Eat, hydrate and rest properly.',
  'Watch how your educator talks to patients. It\'s some of the best communication training there is.',
  'Uncertainty is not a weakness. It is what safe students sound like.',
  'You do not need to fill every silence. Therapeutic listening is a skill.',
  'Read one guideline or journal abstract tonight — five minutes of active learning compounds quickly.',
  'Ask "what matters to you today?" before you start. The answer often changes your plan.',
  'Never guess at a measurement. Honest gaps in documentation are better than invented data.',
  'The patient\'s consent is ongoing — check in throughout the session.',
  'Your educator was a student once too. They expect you to not know things.',
  'Red flags only matter if you know them cold. Quiz yourself on them tonight.',
  'Document in real time or as soon after as possible. Memory degrades fast in a busy clinical environment.',
  'Infection prevention is not just hand gel — it\'s your language, positioning and equipment choices.',
  'You are allowed to say: "I\'ll check that and come back to you." It\'s better than a guess.',
  'Each shift, pick one clinical skill to observe with real focus. Depth beats breadth early on.',
  'SBAR is your friend in an emergency. Practise saying it out loud before you ever need it.',
  'Ask yourself after each patient: "Was I safe? Was I honest? Was I kind?"',
  'The best students ask the most questions, not the fewest.',
  'End every shift with what went well. It matters as much as what to improve.',
  'Your professionalism starts in the car park, not when you enter the ward.',
  'A short walk with good support is better than a long one that ends in a fall.',
  'Placement anxiety is extremely common. You are not alone in feeling it.',
  'Note what the patient says about their own function — their words are the best outcome measure.',
  'Every shift, aim to leave the notes tidier than you found them.'
];

// ── ACHIEVEMENTS ──────────────────────────────────────────────

const achievements = [
  {
    id:'first-step', icon:'🏁', title:'First Steps',
    desc:'Complete your first checklist item.',
    check: s => Object.values(s.checked).some(Boolean)
  },
  {
    id:'packed', icon:'🎒', title:'Packed and Ready',
    desc:'Complete the "What to bring" checklist.',
    check: s => {
      const list = checklists.find(c => c.id === 'what-to-bring');
      return list.steps.every((_, i) => s.checked[`what-to-bring-${i}`]);
    }
  },
  {
    id:'safety-champ', icon:'🛡️', title:'Safety Champion',
    desc:'Complete the red flags and scope checklists.',
    check: s => ['redflags','scope'].every(id => {
      const list = checklists.find(c => c.id === id);
      return list.steps.every((_, i) => s.checked[`${id}-${i}`]);
    })
  },
  {
    id:'scenario-star', icon:'🧠', title:'Scenario Star',
    desc:'Try all scenarios.',
    check: s => scenarios.every(sc => s.scenariosTried.includes(sc.id))
  },
  {
    id:'template-toolkit', icon:'📋', title:'Template Toolkit',
    desc:'Copy all templates.',
    check: s => templates.every(t => s.templatesCopied.includes(t.id))
  },
  {
    id:'placement-ready', icon:'🏆', title:'Placement Ready',
    desc:'Reach 100% checklist completion.',
    check: s => {
      const total = checklists.reduce((n, l) => n + l.steps.length, 0);
      return Object.values(s.checked).filter(Boolean).length >= total;
    }
  }
];

// ── STATE ─────────────────────────────────────────────────────

const state = JSON.parse(localStorage.getItem('pp-state') || '{}');
state.checked         ||= {};
state.scenariosTried  ||= [];
state.templatesCopied ||= [];
state.earnedBadges    ||= [];
state.streak          ||= 0;
state.lastVisit       ||= null;
state.darkMode        ||= false;
state.onboarded       ||= false;
state.specialtyFilter ||= 'All';

function save() {
  localStorage.setItem('pp-state', JSON.stringify(state));
  updateProgress();
  checkAchievements();
}

// ── TOAST ─────────────────────────────────────────────────────

function toast(message, type = '') {
  const t = document.getElementById('toast');
  t.textContent = message;
  t.className = ['show', type].filter(Boolean).join(' ');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.className = ''; }, 2400);
}

// ── DARK MODE ─────────────────────────────────────────────────

function applyDarkMode(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  const btn = document.getElementById('darkToggle');
  if (btn) btn.textContent = dark ? '☀️' : '🌙';
}

document.getElementById('darkToggle').addEventListener('click', () => {
  state.darkMode = !state.darkMode;
  applyDarkMode(state.darkMode);
  save();
});

// ── STREAK ────────────────────────────────────────────────────

function updateStreak() {
  const today     = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (state.lastVisit === today) return;
  state.streak   = (state.lastVisit === yesterday) ? state.streak + 1 : 1;
  state.lastVisit = today;
  localStorage.setItem('pp-state', JSON.stringify(state));
}

// ── DAILY TIP ─────────────────────────────────────────────────

function getDailyTip() {
  const idx = Math.floor(Date.now() / 86400000) % dailyTips.length;
  return dailyTips[idx];
}

// ── NAVIGATION ────────────────────────────────────────────────

let currentView = 'home';

function setView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
  document.getElementById(id).classList.add('active-view');
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.view === id));
  currentView = id;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Trigger view-specific renders that need fresh state
  if (id === 'progress') renderProgress();
  if (id === 'home')     renderHome();
}

document.querySelectorAll('.tab').forEach(btn =>
  btn.addEventListener('click', () => setView(btn.dataset.view))
);
document.querySelectorAll('[data-jump]').forEach(el =>
  el.addEventListener('click', () => setView(el.dataset.jump))
);

// ── SEARCH ────────────────────────────────────────────────────

let searchQuery = '';

document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase().trim();
  if (currentView === 'checklists') renderChecklists();
  else if (currentView === 'scenarios') renderScenarios();
  else if (currentView === 'templates') renderTemplates();
  else if (currentView === 'safety')    renderSafety();
  else if (currentView === 'reference') renderReference();
});

document.getElementById('searchToggle').addEventListener('click', () => {
  const bar = document.getElementById('searchBar');
  const opening = bar.hidden;
  bar.hidden = !opening;
  if (opening) {
    document.getElementById('searchInput').focus();
  } else {
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    // Re-render current view without filter
    if (currentView === 'checklists') renderChecklists();
    else if (currentView === 'scenarios') renderScenarios();
    else if (currentView === 'templates') renderTemplates();
    else if (currentView === 'safety')    renderSafety();
    else if (currentView === 'reference') renderReference();
  }
});

function matches(text) {
  return !searchQuery || text.toLowerCase().includes(searchQuery);
}

// ── SPECIALTY FILTER ──────────────────────────────────────────

const filterSelect = document.getElementById('specialtyFilter');
filterSelect.value = state.specialtyFilter;
filterSelect.addEventListener('change', e => {
  state.specialtyFilter = e.target.value;
  renderScenarios();
});

// ── RENDER: HOME ──────────────────────────────────────────────

function renderHome() {
  document.getElementById('dailyTip').textContent = getDailyTip();
}

// ── RENDER: CHECKLISTS ────────────────────────────────────────

function renderChecklists() {
  const root = document.getElementById('checklistList');
  const filtered = checklists.filter(list =>
    matches(list.title) || matches(list.category) || list.steps.some(s => matches(s))
  );
  if (!filtered.length) {
    root.innerHTML = '<p class="empty-state">No checklists match your search.</p>';
    return;
  }
  root.innerHTML = filtered.map(list => {
    const done = list.steps.filter((_, i) => state.checked[`${list.id}-${i}`]).length;
    const pct  = Math.round((done / list.steps.length) * 100);
    const rows = list.steps.map((step, i) => {
      const key     = `${list.id}-${i}`;
      const checked = !!state.checked[key];
      const hl      = (searchQuery && matches(step)) ? 'highlight' : '';
      return `<label class="check-row ${checked ? 'done' : ''} ${hl}">
        <input type="checkbox" data-key="${key}" ${checked ? 'checked' : ''}><span>${step}</span>
      </label>`;
    }).join('');
    return `<article class="card">
      <div class="card-head">
        <span class="badge">${list.category}</span>
        <span class="mini-progress">${done}/${list.steps.length}</span>
      </div>
      <h3>${list.title}</h3>
      <div class="bar small"><div style="width:${pct}%"></div></div>
      ${rows}
    </article>`;
  }).join('');

  root.querySelectorAll('input[type="checkbox"]').forEach(box =>
    box.addEventListener('change', e => {
      state.checked[e.target.dataset.key] = e.target.checked;
      renderChecklists();
      save();
    })
  );
}

// ── RENDER: SCENARIOS ─────────────────────────────────────────

function renderScenarios() {
  const root = document.getElementById('scenarioList');
  let list = scenarios;
  if (state.specialtyFilter !== 'All') {
    list = list.filter(s => s.specialty === state.specialtyFilter);
  }
  if (searchQuery) {
    list = list.filter(s => matches(s.title) || matches(s.situation) || matches(s.tag) || matches(s.specialty));
  }
  if (!list.length) {
    root.innerHTML = '<p class="empty-state">No scenarios match your filter.</p>';
    return;
  }
  root.innerHTML = list.map(s => `
    <article class="card scenario" data-id="${s.id}">
      <div class="card-head">
        <div class="badge-row">
          <span class="badge">${s.tag}</span>
          <span class="badge badge-specialty">${s.specialty}</span>
        </div>
        <span class="mini-progress">${state.scenariosTried.includes(s.id) ? '✓ Tried' : 'New'}</span>
      </div>
      <h3>${s.title}</h3>
      <p class="situation">${s.situation}</p>
      <button class="choice" data-answer="a">A. ${s.a}</button>
      <button class="choice" data-answer="b">B. ${s.b}</button>
      <div class="result good">✅ ${s.why}</div>
      <div class="result bad">❌ ${s.wrong}</div>
    </article>
  `).join('');

  root.querySelectorAll('.choice').forEach(btn =>
    btn.addEventListener('click', e => {
      const card     = e.target.closest('.scenario');
      const scenario = scenarios.find(s => s.id === card.dataset.id);
      card.querySelectorAll('.result').forEach(r => r.style.display = 'none');
      card.querySelectorAll('.choice').forEach(b => b.disabled = true);
      const correct = e.target.dataset.answer === scenario.correct;
      card.querySelector(correct ? '.good' : '.bad').style.display = 'block';
      if (!state.scenariosTried.includes(scenario.id)) state.scenariosTried.push(scenario.id);
      save();
    })
  );
}

// ── RENDER: TEMPLATES ─────────────────────────────────────────

function renderTemplates() {
  const root = document.getElementById('templateList');
  const list = templates.filter(t => matches(t.title) || matches(t.category) || matches(t.content));
  if (!list.length) {
    root.innerHTML = '<p class="empty-state">No templates match your search.</p>';
    return;
  }
  root.innerHTML = list.map(t => `
    <article class="card">
      <div class="card-head">
        <span class="badge">${t.category}</span>
        <span class="mini-progress">${state.templatesCopied.includes(t.id) ? '✓ Copied' : 'Ready'}</span>
      </div>
      <h3>${t.title}</h3>
      <pre class="template-text">${t.content}</pre>
      <button class="copy" data-id="${t.id}">Copy template</button>
    </article>
  `).join('');

  root.querySelectorAll('.copy').forEach(btn =>
    btn.addEventListener('click', async e => {
      const tmpl = templates.find(t => t.id === e.target.dataset.id);
      await navigator.clipboard.writeText(tmpl.content);
      if (!state.templatesCopied.includes(tmpl.id)) state.templatesCopied.push(tmpl.id);
      save();
      renderTemplates();
      toast('Template copied ✓', 'success');
    })
  );
}

// ── RENDER: SAFETY ────────────────────────────────────────────

function renderSafety() {
  const list = safetyItems.filter(item => matches(item.title) || matches(item.body));
  const refLinks = references.map(r =>
    r.url
      ? `<li><a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.text}</a></li>`
      : `<li>${r.text}</li>`
  ).join('');

  document.getElementById('safetyList').innerHTML =
    (list.length ? list : safetyItems).map(item =>
      `<article class="card safety-card ${(searchQuery && matches(item.title + item.body)) ? 'highlight-card' : ''}">
        <h3>${item.title}</h3><p>${item.body}</p>
      </article>`
    ).join('') +
    `<article class="card references">
      <h3>Reference base</h3>
      <ul>${refLinks}</ul>
      <p class="ref-note">Based on guidance current at time of writing. Always check for the latest version.</p>
    </article>`;
}

// ── RENDER: QUICK REFERENCE ───────────────────────────────────

function renderReference() {
  const root = document.getElementById('referenceList');
  const list = quickRefSections.filter(section =>
    matches(section.title) || section.items.some(item => matches(item.label) || matches(item.value) || matches(item.note))
  );
  if (!list.length) {
    root.innerHTML = '<p class="empty-state">No reference items match your search.</p>';
    return;
  }
  root.innerHTML = list.map(section => `
    <article class="card ref-card">
      <h3><span class="ref-icon">${section.icon}</span>${section.title}</h3>
      <table class="ref-table">
        ${section.items.map(item => `
          <tr class="${(searchQuery && (matches(item.label) || matches(item.value))) ? 'highlight-row' : ''}">
            <td class="ref-label">${item.label}</td>
            <td class="ref-value">${item.value}</td>
            <td class="ref-note-cell">${item.note}</td>
          </tr>
        `).join('')}
      </table>
    </article>
  `).join('');
}

// ── RENDER: PROGRESS ──────────────────────────────────────────

function renderProgress() {
  document.getElementById('streakCount').textContent = state.streak;
  const achRoot = document.getElementById('achievementList');
  achRoot.innerHTML = achievements.map(ach => {
    const earned = state.earnedBadges.includes(ach.id);
    return `<div class="achievement ${earned ? 'earned' : 'locked'}">
      <span class="ach-icon">${earned ? ach.icon : '🔒'}</span>
      <div>
        <strong>${ach.title}</strong>
        <p>${ach.desc}</p>
      </div>
    </div>`;
  }).join('');
}

// ── ACHIEVEMENTS ──────────────────────────────────────────────

function checkAchievements() {
  achievements.forEach(ach => {
    if (!state.earnedBadges.includes(ach.id) && ach.check(state)) {
      state.earnedBadges.push(ach.id);
      localStorage.setItem('pp-state', JSON.stringify(state));
      setTimeout(() => toast(`${ach.icon} Achievement unlocked: ${ach.title}!`, 'achievement'), 400);
    }
  });
  if (currentView === 'progress') renderProgress();
}

// ── PROGRESS BAR & CAPTION ────────────────────────────────────

function updateProgress() {
  const total = checklists.reduce((n, l) => n + l.steps.length, 0);
  const done  = Object.values(state.checked).filter(Boolean).length;
  const pct   = total ? Math.round((done / total) * 100) : 0;

  document.getElementById('overallPercent').textContent = `${pct}%`;
  document.getElementById('overallBar').style.width = `${pct}%`;
  document.getElementById('doneCount').textContent = done;
  document.getElementById('scenarioCount').textContent = state.scenariosTried.length;
  document.getElementById('templateCount').textContent = state.templatesCopied.length;

  const caption = document.getElementById('progressCaption');
  const startBtn = document.querySelector('.hero-actions .primary');

  if (pct === 0) {
    caption.innerHTML = '<strong>Start here →</strong> Tick off the "What to bring" checklist first.';
    startBtn && startBtn.classList.add('pulse');
  } else if (pct < 50) {
    caption.textContent = 'Keep going — complete the safety basics next.';
    startBtn && startBtn.classList.remove('pulse');
  } else if (pct < 100) {
    caption.textContent = 'Good progress — practise the scenarios next.';
    startBtn && startBtn.classList.remove('pulse');
  } else {
    caption.textContent = '🏆 Placement readiness complete!';
    startBtn && startBtn.classList.remove('pulse');
  }
}

// ── EVENT LISTENERS ───────────────────────────────────────────

document.getElementById('resetProgress').addEventListener('click', () => {
  if (!confirm('Reset all Pocket Placement progress?')) return;
  localStorage.removeItem('pp-state');
  location.reload();
});

document.getElementById('exportProgress').addEventListener('click', async () => {
  const total   = checklists.reduce((n, l) => n + l.steps.length, 0);
  const done    = Object.values(state.checked).filter(Boolean).length;
  const badges  = achievements.filter(a => state.earnedBadges.includes(a.id))
                              .map(a => `${a.icon} ${a.title}`).join(', ') || 'None yet';
  const text = [
    '=== POCKET PLACEMENT PROGRESS SUMMARY ===',
    `Date: ${new Date().toLocaleDateString('en-GB', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}`,
    '',
    `Checklist steps completed : ${done}/${total} (${Math.round((done / total) * 100)}%)`,
    `Scenarios practised       : ${state.scenariosTried.length}/${scenarios.length}`,
    `Templates copied          : ${state.templatesCopied.length}/${templates.length}`,
    `Daily streak              : ${state.streak} day${state.streak !== 1 ? 's' : ''}`,
    `Badges earned             : ${badges}`,
    '',
    '--- Reflection prompts ---',
    '1. What do I feel more confident about?',
    '2. What do I still need to ask my educator?',
    '3. Which safety topic should I revise before my next shift?',
    '4. What feedback have I received and how will I act on it?',
    '5. What is one thing I observed today that I want to read more about?'
  ].join('\n');

  try {
    await navigator.clipboard.writeText(text);
    toast('Progress summary copied ✓', 'success');
  } catch {
    const box = document.getElementById('exportBox');
    box.textContent = text;
    box.hidden = false;
  }
});

// Onboarding modal
document.getElementById('onboardingClose').addEventListener('click', () => {
  document.getElementById('onboardingModal').hidden = true;
  state.onboarded = true;
  localStorage.setItem('pp-state', JSON.stringify(state));
});

// ── INIT ──────────────────────────────────────────────────────

if ('serviceWorker' in navigator) navigator.serviceWorker.register('service-worker.js');

applyDarkMode(state.darkMode);
updateStreak();
renderHome();
renderChecklists();
renderScenarios();
renderTemplates();
renderSafety();
renderReference();
updateProgress();
checkAchievements();
renderProgress();

if (!state.onboarded) {
  document.getElementById('onboardingModal').hidden = false;
}
