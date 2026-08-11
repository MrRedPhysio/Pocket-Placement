// ============================================================
// POCKET PLACEMENT PRO v2.1 — app.js
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
// `ref` links the teaching point back to a source in the references list (by index).

const scenarios = [
  // General
  {id:'faint', tag:'Emergency', specialty:'General', title:'Patient feels faint during mobilisation', situation:'You are helping a patient stand. They become pale, sweaty and say they feel dizzy.', a:'Stop, support them to a safe position, call for help and follow local policy.', b:'Encourage them to keep walking because movement may help.', correct:'a', why:'Correct. Stop the activity, prevent a fall, call for help and follow the placement escalation process.', wrong:'Not safe. Dizziness can quickly become collapse or a fall. Stop and escalate.', ref:2},
  {id:'consent', tag:'Consent', specialty:'General', title:'Patient asks if you are qualified', situation:'A patient asks: "Are you a real physiotherapist?"', a:'Say you are a supervised physiotherapy student and ask if they are happy for you to be involved.', b:'Say yes because you are part of the physiotherapy team.', correct:'a', why:'Correct. Be honest about your role and gain consent for student involvement.', wrong:'Do not misrepresent your role. Valid consent depends on honest information.', ref:4},
  {id:'refusal', tag:'Shared decision-making', specialty:'General', title:'Patient refuses treatment', situation:'A patient says: "I do not want physiotherapy today."', a:'Respect the refusal, explore the reason if appropriate, and inform your supervisor.', b:'Tell them they must do it because it is in the plan.', correct:'a', why:'Correct. Consent must be voluntary. Explore barriers respectfully and escalate to your educator.', wrong:'Pressuring a patient is not valid consent and damages trust.', ref:0},
  {id:'dontknow', tag:'Professionalism', specialty:'General', title:'You do not know the answer', situation:'Your educator asks why you selected an exercise and your mind goes blank.', a:'Be honest, explain your thinking so far and ask to discuss the reasoning.', b:'Guess confidently so you look prepared.', correct:'a', why:'Correct. Safe students are honest, reflective and supervised.', wrong:'Guessing can be unsafe. Explain what you know and ask for guidance.', ref:5},
  {id:'safeguarding', tag:'Safeguarding', specialty:'General', title:'Unexplained bruising', situation:'During treatment you notice bruising and the patient appears frightened when a relative speaks for them.', a:'Do not confront. Record factual observations and report immediately to your educator according to policy.', b:'Ask the relative directly whether they caused the bruising.', correct:'a', why:'Correct. Keep the patient safe, record facts and escalate through safeguarding procedures.', wrong:'Confrontation may increase risk. Escalate through local safeguarding policy.', ref:5},
  {id:'notes', tag:'Documentation', specialty:'General', title:'You forgot an exact measurement', situation:'You cannot remember the exact distance the patient walked.', a:'Write what you know factually and ask your educator how to handle the missing detail.', b:'Estimate a number so the note looks complete.', correct:'a', why:'Correct. Documentation must be honest and factual.', wrong:'Do not invent or estimate clinical details as fact.', ref:5},
  {id:'professional', tag:'Professionalism', specialty:'General', title:'You witness unprofessional behaviour', situation:'You observe a qualified physiotherapist speaking dismissively and rudely to a patient who is moving slowly.', a:'Do not confront publicly. Record what you observed factually and raise it with your educator or a senior colleague after the interaction.', b:'Immediately challenge the clinician in front of the patient.', correct:'a', why:'Correct. You have a professional duty of candour. Raise concerns privately through appropriate channels.', wrong:'Public confrontation can escalate the situation and harm the patient. Use proper reporting channels.', ref:5},
  // MSK
  {id:'backpain', tag:'Red flags', specialty:'MSK', title:'Back pain with worrying symptoms', situation:'A patient with back pain mentions new bladder difficulty and numbness around the saddle area.', a:'Stop, do not continue routine treatment, and urgently escalate to your supervisor/medical team.', b:'Continue with gentle exercises and review later.', correct:'a', why:'Correct. These symptoms need urgent escalation. A student should not manage this independently.', wrong:'Not safe. Bladder/bowel or saddle sensory changes with back pain require urgent escalation.', ref:3},
  {id:'knee', tag:'Red flags', specialty:'MSK', title:'Acute knee injury on ward', situation:'A patient twisted their knee getting out of bed. They can weight-bear but are limping and report significant pain (7/10).', a:'Stop, seat the patient, and report to your educator — do not push further until the area is assessed.', b:'Continue the mobilisation slowly as they can still walk.', correct:'a', why:'Correct. A new acute injury needs assessment by a qualified clinician before continuing any mobilisation.', wrong:'Ability to weight-bear does not rule out significant injury. Stop and escalate for proper assessment.', ref:5},
  // Respiratory
  {id:'desaturation', tag:'Emergency', specialty:'Respiratory', title:'SpO₂ drops during exercise', situation:'A patient\'s oxygen saturation falls to 87% on your pulse oximeter during a walking assessment.', a:'Stop the activity immediately, seat the patient, alert the nursing team and your educator.', b:'Continue for 30 more seconds to see if it self-corrects.', correct:'a', why:'Correct. SpO₂ below 90% requires immediate action. Stop, sit, alert, and do not proceed without clinical review.', wrong:'Not safe. Desaturation can deteriorate rapidly. Stop immediately and escalate.', ref:5},
  // Neuro
  {id:'aphasia', tag:'Communication', specialty:'Neuro', title:'Patient with aphasia becomes distressed', situation:'A patient post-stroke has expressive aphasia. They are becoming increasingly agitated and trying to communicate something you cannot understand.', a:'Stop, use gesture and visual cues, alert your educator, and consider involving a family member or the speech and language team.', b:'Proceed with the session as planned — the patient agreed at the start.', correct:'a', why:'Correct. Distress in a non-verbal patient is a safety signal. Stop and involve your educator and appropriate team members.', wrong:'Consent is ongoing. Signs of distress mean you must stop and reassess, even if initial consent was given.', ref:0},
  // Elderly care
  {id:'fallrisk', tag:'Falls', specialty:'Elderly care', title:'Older patient afraid of falling', situation:'A patient says they avoid walking because they are scared of falling again.', a:'Acknowledge the fear, check safety factors, and discuss with your educator how to support confidence and activity.', b:'Tell them fear is normal and they should just walk more.', correct:'a', why:'Correct. Falls guidance emphasises individual risk factors, barriers and supporting participation.', wrong:'Dismissive reassurance is not person-centred and may reduce confidence further.', ref:2},
  {id:'capacity', tag:'Consent', specialty:'Elderly care', title:'Patient with dementia seems confused about consent', situation:'A patient with known dementia nods when you explain the exercise session, but seems confused and cannot repeat back what will happen.', a:'Pause, discuss with your educator, and consider whether a formal capacity assessment and best interests process is needed.', b:'Proceed — they nodded, which is implied consent.', correct:'a', why:'Correct. Valid consent requires understanding. A nod alone from a confused patient is not sufficient. Involve your educator.', wrong:'A nod without understanding does not constitute valid consent for a patient who may lack capacity.', ref:4},
  // Community
  {id:'homevisit', tag:'Safeguarding', specialty:'Community', title:'Concerning home conditions on a community visit', situation:'During a home visit you notice the house is very cold, there is no food visible, and the patient seems unkempt and isolated.', a:'Complete your session professionally, make factual observations, and report your concerns to your educator immediately after.', b:'Tell the patient directly that their living conditions are not acceptable.', correct:'a', why:'Correct. Document factual observations and raise concerns through the proper safeguarding and adult social care pathway with your educator.', wrong:'Direct confrontation can damage trust and is not the right pathway. Report through proper channels.', ref:5},
  // Paediatric
  {id:'paediatric', tag:'Consent', specialty:'Paediatric', title:'Child becomes very distressed mid-session', situation:'A child on a paediatric placement becomes very upset and is crying, asking for their parent who has stepped out.', a:'Stop the session, comfort the child, get the parent, and only restart when the child is settled and willing.', b:'Continue quickly to get the session done before the parent returns.', correct:'a', why:'Correct. A child\'s assent is essential and ongoing. Proceeding with a distressed child is ethically wrong and potentially harmful.', wrong:'Never proceed with treatment when a child is clearly distressed and not consenting. Stop immediately.', ref:4}
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
  {id:'consent', title:'Valid consent', body:'Before assessment or treatment, explain your student role, what you are asking to do, and that the person can decline without affecting their care. Consent is ongoing and can be withdrawn.'},
  {id:'sdm', title:'Shared decision-making', body:'Bring together clinical options, evidence, risks and benefits with the person\'s preferences, goals, beliefs and circumstances. Ask "what matters to you?" rather than only "what is the matter?"'},
  {id:'supervision', title:'Supervision', body:'Students should be clear about the nature and level of supervision, and patients should understand student involvement. If unsure, pause and ask your educator.'},
  {id:'falls', title:'Falls prevention', body:'Think beyond a score: consider individual risk factors, fear, environment, medicines, footwear, vision, strength, balance and confidence. Escalate falls, near falls and sudden deterioration.'},
  {id:'redflags', title:'Red flags', body:'Urgently escalate concerning symptoms: collapse, chest pain, severe breathlessness, new neurological signs, bladder/bowel or saddle sensory changes with back pain, safeguarding concerns, or sudden deterioration.'},
  {id:'documentation', title:'Documentation', body:'Be factual, respectful and timely. Document consent, relevant findings, intervention, response, safety concerns, escalation and agreed plan. Ask whether your notes need countersigning.'}
];

const references = [
  { text:'NICE — Shared decision-making guideline (NG197)', url:'https://www.nice.org.uk/guidance/ng197' },
  { text:'NHS England — Shared decision-making resources', url:'https://www.england.nhs.uk/shared-decision-making/' },
  { text:'NICE — Falls in older people: assessment and prevention (NG249)', url:'https://www.nice.org.uk/guidance/ng249' },
  { text:'NICE — Low back pain and sciatica (NG59)', url:'https://www.nice.org.uk/guidance/ng59' },
  { text:'CSP — Consent guidance for physiotherapists', url:'https://www.csp.org.uk/professional-clinical/professional-guidance/consent' },
  { text:'Physiopedia — free evidence-based physiotherapy knowledge', url:'https://www.physio-pedia.com/home/' },
  { text:'HCPC — standards of proficiency and conduct', url:'https://www.hcpc-uk.org/' },
  { text:'Your university handbook and local placement provider policies', url:null }
];

// ── ROTATIONS (placement-aware mode) ─────────────────────────
// Maps a rotation to the specialties, checklists and reference sections that matter most.

const rotations = [
  { id:'General',      label:'General / not sure yet', specialties:['General'], refs:['vitals','avpu','abbreviations'] },
  { id:'MSK',          label:'MSK / outpatients',       specialties:['MSK','General'], refs:['mrc','pain','abbreviations'] },
  { id:'Respiratory',  label:'Respiratory',             specialties:['Respiratory','General'], refs:['vitals','borg','abbreviations'] },
  { id:'Neuro',        label:'Neuro / stroke',          specialties:['Neuro','General'], refs:['avpu','mrc','abbreviations'] },
  { id:'Elderly care', label:'Elderly care / care of the elderly', specialties:['Elderly care','General'], refs:['tug','vitals','abbreviations'] },
  { id:'Community',    label:'Community',               specialties:['Community','General'], refs:['tug','vitals','abbreviations'] },
  { id:'Paediatric',   label:'Paediatric',              specialties:['Paediatric','General'], refs:['vitals','pain','abbreviations'] }
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

// ── GUIDED "FIRST DAY" WALKTHROUGH ───────────────────────────

const firstDaySteps = [
  { icon:'🅿️', title:'Before you walk in', body:'Arrive early. Silence your phone. Take a breath. Your professionalism starts in the car park — how you carry yourself in the corridor matters before you ever reach the ward.' },
  { icon:'🤝', title:'Find your educator', body:'Introduce yourself by name and confirm who is supervising you today. Ask the single most important question: "What would you like me to do, observe, or stay back from this morning?"' },
  { icon:'📋', title:'Clarify your scope', body:'Be clear on what you may observe, assist with, practise and document — and what needs countersigning. When you are not sure whether something is within your scope, the answer is to ask, not to assume.' },
  { icon:'👂', title:'Listen at handover', body:'You are not expected to contribute much yet. Note the patients, the safety concerns and any red flags being flagged. Write down names of staff and any abbreviations you do not recognise to look up later.' },
  { icon:'🙋', title:'Your first patient contact', body:'Introduce yourself as a supervised physiotherapy student. Gain consent and remind the person they can decline. Check the environment — brakes, footwear, aids, lines, space, call bell — before anything moves.' },
  { icon:'🛑', title:'If anything feels unsafe', body:'Stop. Support the patient to a safe position. Call for help. You will never be criticised for stopping and escalating early. Use SBAR to hand over your concern clearly.' },
  { icon:'📝', title:'Before you leave', body:'Complete your notes factually. Tell your educator about anything that concerned you. Ask for one specific piece of feedback, and choose one topic to revise tonight.' },
  { icon:'🌙', title:'That evening', body:'Write a short reflection while it is fresh: what went well, what was hard, what you will do differently. Five minutes now is worth an hour next week. You got through day one.' }
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
    id:'sharp-shooter', icon:'🎯', title:'Sharp Shooter',
    desc:'Answer every scenario correctly at least once.',
    check: s => scenarios.every(sc => (s.scenarioResults && s.scenarioResults[sc.id] === 'correct'))
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
state.checked          ||= {};
state.scenariosTried   ||= [];
state.scenarioResults  ||= {};   // { scenarioId: 'correct' | 'incorrect' }
state.scenarioSeen     ||= {};   // { scenarioId: timestamp } for spaced repetition
state.templatesCopied  ||= [];
state.earnedBadges     ||= [];
state.streak           ||= 0;
state.lastVisit        ||= null;
state.darkMode         ||= false;
state.onboarded        ||= false;
state.specialtyFilter  ||= 'All';
state.rotation         ||= null;       // chosen rotation id
state.placementDate    ||= null;       // ISO date string
state.firstDayDone     ||= false;

function persist() { localStorage.setItem('pp-state', JSON.stringify(state)); }

function save() {
  persist();
  updateProgress();
  checkAchievements();
}

// ── SPACED REPETITION ─────────────────────────────────────────
// Intervals (days) after which a tried scenario becomes "due" for review.
const REVIEW_INTERVALS = { correct: [1, 3, 7, 14], incorrect: [1, 1, 3] };
const DAY = 86400000;

function scenarioReviewCount() {
  const now = Date.now();
  return scenarios.filter(sc => {
    const seen = state.scenarioSeen[sc.id];
    if (!seen) return false;
    const result = state.scenarioResults[sc.id];
    // Incorrect answers come due faster; correct ones spread out.
    const interval = (result === 'incorrect' ? 1 : 3) * DAY;
    return (now - seen) >= interval;
  }).length;
}

function scenariosDueForReview() {
  const now = Date.now();
  return scenarios.filter(sc => {
    const seen = state.scenarioSeen[sc.id];
    if (!seen) return false;
    const result = state.scenarioResults[sc.id];
    const interval = (result === 'incorrect' ? 1 : 3) * DAY;
    return (now - seen) >= interval;
  });
}

// ── TOAST ─────────────────────────────────────────────────────

function toast(message, type = '') {
  const t = document.getElementById('toast');
  t.textContent = message;
  t.className = ['show', type].filter(Boolean).join(' ');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.className = ''; }, 2400);
}

// ── CUSTOM CONFIRM DIALOG (replaces native confirm) ───────────

function confirmDialog({ title, message, confirmLabel = 'Confirm', cancelLabel = 'Cancel', danger = false }) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal-box confirm-box" role="dialog" aria-modal="true" aria-labelledby="confirmTitle">
        <h2 id="confirmTitle">${title}</h2>
        <p class="modal-sub">${message}</p>
        <div class="confirm-actions">
          <button class="secondary" data-act="cancel">${cancelLabel}</button>
          <button class="${danger ? 'danger-btn' : 'primary'}" data-act="ok">${confirmLabel}</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    const okBtn = overlay.querySelector('[data-act="ok"]');
    const cancelBtn = overlay.querySelector('[data-act="cancel"]');
    const close = (result) => {
      releaseFocusTrap(overlay);
      overlay.remove();
      resolve(result);
    };
    okBtn.addEventListener('click', () => close(true));
    cancelBtn.addEventListener('click', () => close(false));
    overlay.addEventListener('click', e => { if (e.target === overlay) close(false); });
    trapFocus(overlay, () => close(false));
    cancelBtn.focus();
  });
}

// ── FOCUS TRAP (for modals) ───────────────────────────────────

const _focusTraps = new WeakMap();

function trapFocus(container, onEscape) {
  const selector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea, [tabindex]:not([tabindex="-1"])';
  const previouslyFocused = document.activeElement;
  function handler(e) {
    if (e.key === 'Escape' && onEscape) { e.preventDefault(); onEscape(); return; }
    if (e.key !== 'Tab') return;
    const focusable = [...container.querySelectorAll(selector)].filter(el => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  document.addEventListener('keydown', handler);
  _focusTraps.set(container, { handler, previouslyFocused });
}

function releaseFocusTrap(container) {
  const data = _focusTraps.get(container);
  if (!data) return;
  document.removeEventListener('keydown', data.handler);
  if (data.previouslyFocused && data.previouslyFocused.focus) {
    try { data.previouslyFocused.focus(); } catch (e) {}
  }
  _focusTraps.delete(container);
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
  const yesterday = new Date(Date.now() - DAY).toDateString();
  if (state.lastVisit === today) return;
  state.streak   = (state.lastVisit === yesterday) ? state.streak + 1 : 1;
  state.lastVisit = today;
  persist();
}

// ── DAILY TIP ─────────────────────────────────────────────────

function getDailyTip() {
  const idx = Math.floor(Date.now() / DAY) % dailyTips.length;
  return dailyTips[idx];
}

// ── PLACEMENT COUNTDOWN ───────────────────────────────────────

function daysUntilPlacement() {
  if (!state.placementDate) return null;
  const target = new Date(state.placementDate + 'T00:00:00');
  const today  = new Date(); today.setHours(0,0,0,0);
  return Math.round((target - today) / DAY);
}

function rotationLabel(id) {
  const r = rotations.find(r => r.id === id);
  return r ? r.label : id;
}

// ── NAVIGATION ────────────────────────────────────────────────

let currentView = 'home';

function setView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
  const target = document.getElementById(id);
  if (!target) return;
  target.classList.add('active-view');
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.view === id));
  currentView = id;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'progress') renderProgress();
  if (id === 'home')     renderHome();
  if (id === 'scenarios') renderScenarios();
  if (id === 'quiz')     renderQuizHome();
  if (id === 'anatomy')  renderAnatomy();
  if (id === 'resources') renderResources();
}

document.querySelectorAll('.tab').forEach(btn =>
  btn.addEventListener('click', () => setView(btn.dataset.view))
);
document.addEventListener('click', e => {
  const jump = e.target.closest('[data-jump]');
  if (jump) setView(jump.dataset.jump);
});

// ── SEARCH ────────────────────────────────────────────────────

let searchQuery = '';

function rerenderCurrent() {
  if (currentView === 'checklists') renderChecklists();
  else if (currentView === 'scenarios') renderScenarios();
  else if (currentView === 'templates') renderTemplates();
  else if (currentView === 'safety')    renderSafety();
  else if (currentView === 'reference') renderReference();
  else if (currentView === 'anatomy') renderAnatomy();
  else if (currentView === 'resources') renderResources();
}

document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase().trim();
  rerenderCurrent();
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
    rerenderCurrent();
  }
});

function matches(text) {
  return !searchQuery || (text || '').toLowerCase().includes(searchQuery);
}

// ── SPECIALTY FILTER ──────────────────────────────────────────

const filterSelect = document.getElementById('specialtyFilter');
filterSelect.value = state.specialtyFilter;
filterSelect.addEventListener('change', e => {
  state.specialtyFilter = e.target.value;
  state.reviewMode = false;
  renderScenarios();
});

// ── RENDER: HOME ──────────────────────────────────────────────

function renderHome() {
  document.getElementById('dailyTip').textContent = getDailyTip();
  renderPlacementBanner();
  renderReviewPrompt();
  renderUnfinishedNudge();
}

function renderPlacementBanner() {
  const host = document.getElementById('placementBanner');
  if (!host) return;
  if (!state.rotation) {
    host.innerHTML = `
      <div class="placement-setup">
        <span class="tip-label">📍 Personalise your prep</span>
        <p>Tell us your placement and we'll put the most relevant scenarios, checklists and reference values first.</p>
        <button class="primary" id="setPlacementBtn">Set my placement</button>
      </div>`;
    document.getElementById('setPlacementBtn').addEventListener('click', openPlacementDialog);
    return;
  }
  const days = daysUntilPlacement();
  let countdown = '';
  if (days !== null) {
    if (days > 1)       countdown = `<strong>${days} days</strong> until your placement starts`;
    else if (days === 1) countdown = `<strong>Tomorrow</strong> — your placement starts`;
    else if (days === 0) countdown = `<strong>Today</strong> — good luck out there`;
    else                countdown = `You're <strong>${Math.abs(days)} day${Math.abs(days)!==1?'s':''}</strong> into your placement`;
  }
  host.innerHTML = `
    <div class="placement-active">
      <div class="placement-row">
        <span class="placement-pill">📍 ${rotationLabel(state.rotation)}</span>
        <button class="ghost" id="editPlacementBtn">Edit</button>
      </div>
      ${countdown ? `<p class="placement-countdown">${countdown}</p>` : ''}
      <p class="placement-hint">Your home is tuned to this rotation. Jump straight in:</p>
      <div class="placement-actions">
        <button class="secondary" data-jump="scenarios">Relevant scenarios</button>
        <button class="secondary" data-jump="reference">Key reference values</button>
      </div>
    </div>`;
  document.getElementById('editPlacementBtn').addEventListener('click', openPlacementDialog);
}

function renderReviewPrompt() {
  const host = document.getElementById('reviewPrompt');
  if (!host) return;
  const due = scenarioReviewCount();
  if (due === 0) { host.hidden = true; host.innerHTML = ''; return; }
  host.hidden = false;
  host.innerHTML = `
    <span class="tip-label">🔁 Spaced review</span>
    <p>You have <strong>${due} scenario${due!==1?'s':''}</strong> ready to review. Revisiting them now is how the safe responses actually stick.</p>
    <button class="primary" id="startReviewBtn">Start review</button>`;
  document.getElementById('startReviewBtn').addEventListener('click', () => {
    state.reviewMode = true;
    setView('scenarios');
  });
}

// Nudge for checklists started but not finished — catches students when they return.
function renderUnfinishedNudge() {
  const host = document.getElementById('unfinishedNudge');
  if (!host) return;

  // Find checklists with at least one ticked item but not all ticked.
  const inProgress = checklists.map(list => {
    const done = list.steps.filter((_, i) => state.checked[`${list.id}-${i}`]).length;
    return { list, done, total: list.steps.length };
  }).filter(c => c.done > 0 && c.done < c.total);

  if (!inProgress.length) { host.hidden = true; host.innerHTML = ''; return; }

  // Show the one they're furthest into (most done), so it feels closest to finishing.
  inProgress.sort((a, b) => (b.done / b.total) - (a.done / a.total));
  const top = inProgress[0];
  const remaining = top.total - top.done;
  const others = inProgress.length - 1;

  host.hidden = false;
  host.innerHTML = `
    <span class="tip-label">📌 Pick up where you left off</span>
    <p>You started <strong>${top.list.title}</strong> but haven't finished — <strong>${remaining} item${remaining !== 1 ? 's' : ''}</strong> left${others > 0 ? `, plus ${others} other checklist${others !== 1 ? 's' : ''} in progress` : ''}.</p>
    <button class="primary" id="resumeChecklistBtn">Finish it now</button>`;
  document.getElementById('resumeChecklistBtn').addEventListener('click', () => setView('checklists'));
}

// ── PLACEMENT DIALOG ──────────────────────────────────────────

function openPlacementDialog() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  const today = new Date().toISOString().split('T')[0];
  overlay.innerHTML = `
    <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="placeTitle">
      <h2 id="placeTitle">Your placement</h2>
      <p class="modal-sub">We'll prioritise the content that matters most for your rotation.</p>
      <label class="field-label" for="rotationSelect">Which rotation?</label>
      <select id="rotationSelect" class="field-select">
        ${rotations.map(r => `<option value="${r.id}" ${state.rotation===r.id?'selected':''}>${r.label}</option>`).join('')}
      </select>
      <label class="field-label" for="placementDateInput">Start date (optional)</label>
      <input type="date" id="placementDateInput" class="field-input" min="${today}" value="${state.placementDate || ''}" />
      <div class="confirm-actions">
        <button class="secondary" data-act="cancel">Cancel</button>
        <button class="primary" data-act="save">Save</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  const close = () => { releaseFocusTrap(overlay); overlay.remove(); };
  overlay.querySelector('[data-act="cancel"]').addEventListener('click', close);
  overlay.querySelector('[data-act="save"]').addEventListener('click', () => {
    state.rotation = overlay.querySelector('#rotationSelect').value;
    state.placementDate = overlay.querySelector('#placementDateInput').value || null;
    // Pre-set the scenario filter to the rotation's primary specialty for convenience.
    const rot = rotations.find(r => r.id === state.rotation);
    if (rot) { state.specialtyFilter = rot.specialties[0]; filterSelect.value = state.specialtyFilter; }
    persist();
    close();
    renderHome();
    renderScenarios();
    renderReference();
    toast('Placement saved ✓', 'success');
  });
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  trapFocus(overlay, close);
  overlay.querySelector('#rotationSelect').focus();
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
  const banner = document.getElementById('scenarioModeBanner');
  let list = scenarios;

  if (state.reviewMode) {
    list = scenariosDueForReview();
    if (banner) {
      banner.hidden = false;
      banner.innerHTML = `🔁 <strong>Review mode</strong> — ${list.length} scenario${list.length!==1?'s':''} due. <button class="link-btn" id="exitReview">Exit review</button>`;
      banner.querySelector('#exitReview').addEventListener('click', () => { state.reviewMode = false; renderScenarios(); });
    }
    if (!list.length) {
      root.innerHTML = '<p class="empty-state">Nothing due for review right now. Come back in a day or two.</p>';
      return;
    }
  } else {
    if (banner) { banner.hidden = true; banner.innerHTML = ''; }
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
  }

  root.innerHTML = list.map(s => {
    const result = state.scenarioResults[s.id];
    let statusLabel = 'New';
    if (result === 'correct')   statusLabel = '✓ Correct';
    else if (result === 'incorrect') statusLabel = '↻ Review';
    else if (state.scenariosTried.includes(s.id)) statusLabel = '✓ Tried';
    const refLink = (s.ref != null && references[s.ref] && references[s.ref].url)
      ? `<a class="scenario-source" href="${references[s.ref].url}" target="_blank" rel="noopener noreferrer">📖 Source: ${references[s.ref].text}</a>`
      : '';
    return `
    <article class="card scenario" data-id="${s.id}">
      <div class="card-head">
        <div class="badge-row">
          <span class="badge">${s.tag}</span>
          <span class="badge badge-specialty">${s.specialty}</span>
        </div>
        <span class="mini-progress">${statusLabel}</span>
      </div>
      <h3>${s.title}</h3>
      <p class="situation">${s.situation}</p>
      <button class="choice" data-answer="a">A. ${s.a}</button>
      <button class="choice" data-answer="b">B. ${s.b}</button>
      <div class="result good">✅ ${s.why}${refLink}</div>
      <div class="result bad">❌ ${s.wrong}</div>
    </article>`;
  }).join('');

  root.querySelectorAll('.choice').forEach(btn =>
    btn.addEventListener('click', e => {
      const card     = e.target.closest('.scenario');
      const scenario = scenarios.find(s => s.id === card.dataset.id);
      card.querySelectorAll('.result').forEach(r => r.style.display = 'none');
      card.querySelectorAll('.choice').forEach(b => b.disabled = true);
      const correct = e.target.dataset.answer === scenario.correct;
      card.querySelector(correct ? '.good' : '.bad').style.display = 'block';
      if (!state.scenariosTried.includes(scenario.id)) state.scenariosTried.push(scenario.id);
      // Record correctness (don't downgrade a previous 'correct' to 'incorrect' silently — keep latest attempt)
      state.scenarioResults[scenario.id] = correct ? 'correct' : 'incorrect';
      state.scenarioSeen[scenario.id] = Date.now();
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
      try {
        await navigator.clipboard.writeText(tmpl.content);
        toast('Template copied ✓', 'success');
      } catch {
        toast('Press and hold to copy on this device', '');
      }
      if (!state.templatesCopied.includes(tmpl.id)) state.templatesCopied.push(tmpl.id);
      save();
      renderTemplates();
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
  let sections = quickRefSections;
  // Placement-aware ordering: float the rotation's relevant sections to the top.
  if (state.rotation) {
    const rot = rotations.find(r => r.id === state.rotation);
    if (rot) {
      const priority = rot.refs;
      sections = [...quickRefSections].sort((a, b) => {
        const ai = priority.indexOf(a.id), bi = priority.indexOf(b.id);
        return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
      });
    }
  }
  const list = sections.filter(section =>
    matches(section.title) || section.items.some(item => matches(item.label) || matches(item.value) || matches(item.note))
  );
  if (!list.length) {
    root.innerHTML = '<p class="empty-state">No reference items match your search.</p>';
    return;
  }
  root.innerHTML = list.map(section => {
    const relevant = state.rotation && rotations.find(r => r.id === state.rotation)?.refs.includes(section.id);
    return `
    <article class="card ref-card ${relevant ? 'ref-relevant' : ''}">
      <h3><span class="ref-icon">${section.icon}</span>${section.title}${relevant ? '<span class="rel-tag">For your rotation</span>' : ''}</h3>
      <table class="ref-table">
        ${section.items.map(item => `
          <tr class="${(searchQuery && (matches(item.label) || matches(item.value))) ? 'highlight-row' : ''}">
            <td class="ref-label">${item.label}</td>
            <td class="ref-value">${item.value}</td>
            <td class="ref-note-cell">${item.note}</td>
          </tr>
        `).join('')}
      </table>
    </article>`;
  }).join('');
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
  let changed = false;
  achievements.forEach(ach => {
    if (!state.earnedBadges.includes(ach.id) && ach.check(state)) {
      state.earnedBadges.push(ach.id);
      changed = true;
      setTimeout(() => toast(`${ach.icon} Achievement unlocked: ${ach.title}!`, 'achievement'), 400);
    }
  });
  if (changed) persist();
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

// ── GUIDED "FIRST DAY" WALKTHROUGH ───────────────────────────

let firstDayIndex = 0;

function openFirstDay() {
  firstDayIndex = 0;
  const overlay = document.createElement('div');
  overlay.id = 'firstDayOverlay';
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box walkthrough" role="dialog" aria-modal="true" aria-labelledby="fdTitle">
      <div class="wt-progress"><div id="wtBar"></div></div>
      <div class="wt-icon" id="fdIcon"></div>
      <h2 id="fdTitle"></h2>
      <p class="wt-body" id="fdBody"></p>
      <div class="wt-step-count" id="fdCount"></div>
      <div class="confirm-actions wt-actions">
        <button class="secondary" id="fdBack">Back</button>
        <button class="primary" id="fdNext">Next</button>
      </div>
      <button class="link-btn wt-skip" id="fdSkip">Skip walkthrough</button>
    </div>`;
  document.body.appendChild(overlay);
  const close = () => { releaseFocusTrap(overlay); overlay.remove(); };
  overlay.querySelector('#fdSkip').addEventListener('click', close);
  overlay.querySelector('#fdBack').addEventListener('click', () => { if (firstDayIndex > 0) { firstDayIndex--; paintFirstDay(); } });
  overlay.querySelector('#fdNext').addEventListener('click', () => {
    if (firstDayIndex < firstDaySteps.length - 1) { firstDayIndex++; paintFirstDay(); }
    else { state.firstDayDone = true; persist(); close(); toast('You\'re ready for day one 💪', 'success'); }
  });
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  trapFocus(overlay, close);
  paintFirstDay();
  overlay.querySelector('#fdNext').focus();
}

function paintFirstDay() {
  const step = firstDaySteps[firstDayIndex];
  document.getElementById('fdIcon').textContent = step.icon;
  document.getElementById('fdTitle').textContent = step.title;
  document.getElementById('fdBody').textContent = step.body;
  document.getElementById('fdCount').textContent = `Step ${firstDayIndex + 1} of ${firstDaySteps.length}`;
  document.getElementById('wtBar').style.width = `${((firstDayIndex + 1) / firstDaySteps.length) * 100}%`;
  document.getElementById('fdBack').disabled = firstDayIndex === 0;
  document.getElementById('fdNext').textContent = firstDayIndex === firstDaySteps.length - 1 ? 'Finish' : 'Next';
}

const firstDayBtn = document.getElementById('firstDayBtn');
if (firstDayBtn) firstDayBtn.addEventListener('click', openFirstDay);

// ── EXPORT (upgraded) ─────────────────────────────────────────

function buildExportText() {
  const total   = checklists.reduce((n, l) => n + l.steps.length, 0);
  const done    = Object.values(state.checked).filter(Boolean).length;
  const badges  = achievements.filter(a => state.earnedBadges.includes(a.id))
                              .map(a => `${a.icon} ${a.title}`).join(', ') || 'None yet';

  // Which scenarios were answered incorrectly (most recent attempt)
  const wrong = scenarios.filter(s => state.scenarioResults[s.id] === 'incorrect')
                         .map(s => `   • ${s.title} (${s.specialty})`);
  const untried = scenarios.filter(s => !state.scenariosTried.includes(s.id))
                           .map(s => `   • ${s.title} (${s.specialty})`);

  // Safety topics not yet opened (proxy: checklist categories not started)
  const safetyGaps = checklists.filter(l => !l.steps.some((_, i) => state.checked[`${l.id}-${i}`]))
                               .map(l => `   • ${l.title}`);

  const lines = [
    '=== POCKET PLACEMENT PRO — PROGRESS SUMMARY ===',
    `Date: ${new Date().toLocaleDateString('en-GB', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}`,
  ];
  if (state.rotation) {
    lines.push(`Placement: ${rotationLabel(state.rotation)}`);
    const d = daysUntilPlacement();
    if (d !== null) lines.push(`Countdown: ${d > 0 ? d + ' day(s) to go' : d === 0 ? 'starts today' : Math.abs(d) + ' day(s) in'}`);
  }
  lines.push(
    '',
    `Checklist steps completed : ${done}/${total} (${total ? Math.round((done / total) * 100) : 0}%)`,
    `Scenarios practised       : ${state.scenariosTried.length}/${scenarios.length}`,
    `Scenarios correct         : ${scenarios.filter(s => state.scenarioResults[s.id] === 'correct').length}/${scenarios.length}`,
    `Templates copied          : ${state.templatesCopied.length}/${templates.length}`,
    `Daily streak              : ${state.streak} day${state.streak !== 1 ? 's' : ''}`,
    `Badges earned             : ${badges}`,
    ''
  );

  if (wrong.length) {
    lines.push('--- Scenarios to revisit (answered incorrectly) ---', ...wrong, '');
  }
  if (untried.length) {
    lines.push('--- Scenarios not yet attempted ---', ...untried, '');
  }
  if (safetyGaps.length) {
    lines.push('--- Checklists not yet started ---', ...safetyGaps, '');
  }

  lines.push(
    '--- Reflection (HCPC / CSP aligned) ---',
    'Identify (HCPC 11): What did I do that was safe, effective and within my scope?',
    'Analyse: Which decision or moment challenged me, and why?',
    'Apply (HCPC 13): What knowledge or guidance underpinned my actions?',
    'Plan: Which safety topic or scenario will I revise before my next shift?',
    'Act on feedback: What feedback did I receive and how will I respond to it?',
    'Wellbeing: How am I managing placement demands, and what support do I need?'
  );

  return lines.join('\n');
}

document.getElementById('exportProgress').addEventListener('click', async () => {
  const text = buildExportText();
  try {
    await navigator.clipboard.writeText(text);
    toast('Progress summary copied ✓', 'success');
  } catch {
    const box = document.getElementById('exportBox');
    box.textContent = text;
    box.hidden = false;
  }
});

const downloadBtn = document.getElementById('downloadProgress');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    const text = buildExportText();
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const stamp = new Date().toISOString().split('T')[0];
    a.href = url;
    a.download = `pocket-placement-pro-summary-${stamp}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    toast('Summary downloaded ✓', 'success');
  });
}

// ── RESET (custom dialog) ─────────────────────────────────────

document.getElementById('resetProgress').addEventListener('click', async () => {
  const ok = await confirmDialog({
    title: 'Reset progress?',
    message: 'This clears all your Pocket Placement Pro progress on this device — checklists, scenarios, badges and streak. This cannot be undone.',
    confirmLabel: 'Reset everything',
    cancelLabel: 'Keep my progress',
    danger: true
  });
  if (!ok) return;
  localStorage.removeItem('pp-state');
  location.reload();
});

// ── ONBOARDING MODAL ──────────────────────────────────────────

const onboardingModal = document.getElementById('onboardingModal');
document.getElementById('onboardingClose').addEventListener('click', () => {
  releaseFocusTrap(onboardingModal);
  onboardingModal.hidden = true;
  state.onboarded = true;
  persist();
});

// ── KNOWLEDGE QUIZ ────────────────────────────────────────────
// True/false revision bank. Foundational level — REVIEW before publishing.
// Each: { q: statement, answer: true/false, explain: teaching note }

const quizBank = {
  MSK: {
    label: 'MSK', icon: '🦴',
    questions: [
      { q: 'The rotator cuff is made up of four muscles: supraspinatus, infraspinatus, teres minor and subscapularis.', answer: true, explain: 'Correct — the SITS muscles. They stabilise the glenohumeral joint and are commonly involved in shoulder pathology.' },
      { q: 'The anterior cruciate ligament (ACL) primarily resists posterior translation of the tibia on the femur.', answer: false, explain: 'False. The ACL chiefly resists ANTERIOR tibial translation. The PCL resists posterior translation.' },
      { q: 'A grade 3 MRC muscle strength means active movement against gravity but not against added resistance.', answer: true, explain: 'Correct. Grade 3 = full range against gravity only; grade 4 adds resistance; grade 5 is normal power.' },
      { q: 'Osteoarthritis is primarily an inflammatory autoimmune condition.', answer: false, explain: 'False. OA is a degenerative ("wear and repair") joint condition. Rheumatoid arthritis is the autoimmune inflammatory one.' },
      { q: 'The medial meniscus is more commonly injured than the lateral meniscus.', answer: true, explain: 'Correct. The medial meniscus is less mobile (attached to the MCL), so it is more prone to injury.' },
      { q: 'Tendons connect muscle to bone, while ligaments connect bone to bone.', answer: true, explain: 'Correct — a foundational distinction. Tendons: muscle→bone. Ligaments: bone→bone.' },
      { q: 'A positive empty can (Jobe) test suggests supraspinatus pathology.', answer: true, explain: 'Correct. The empty can test loads the supraspinatus; pain or weakness suggests involvement.' },
      { q: 'Adhesive capsulitis (frozen shoulder) typically presents with full passive range of motion.', answer: false, explain: 'False. Frozen shoulder is characterised by a global LOSS of both active and passive range, especially external rotation.' },
      { q: 'The most common direction of shoulder (glenohumeral) dislocation is anterior.', answer: true, explain: 'Correct. Around 95% of glenohumeral dislocations are anterior.' },
      { q: 'In a typical lumbar disc herniation, the nucleus pulposus most often herniates posterolaterally.', answer: true, explain: 'Correct. The posterolateral annulus is thinner and the posterior longitudinal ligament is weaker laterally, so herniation tends to be posterolateral.' },
      { q: 'Saddle anaesthesia and new bladder dysfunction with back pain are reassuring signs that do not need urgent escalation.', answer: false, explain: 'False — and important. These are red flags for cauda equina syndrome and require URGENT escalation.' },
      { q: 'DOMS (delayed onset muscle soreness) typically peaks 24–72 hours after unaccustomed exercise.', answer: true, explain: 'Correct. DOMS usually peaks around 24–72 hours and is linked to eccentric/unaccustomed loading.' },
      { q: 'The carpal tunnel transmits the ulnar nerve.', answer: false, explain: 'False. The carpal tunnel transmits the MEDIAN nerve. Carpal tunnel syndrome is median nerve compression.' },
      { q: 'Eccentric loading programmes are commonly used in the management of Achilles tendinopathy.', answer: true, explain: 'Correct. Eccentric (and heavy slow resistance) loading is well-supported for mid-portion Achilles tendinopathy.' },
      { q: 'A Colles fracture is a fracture of the distal radius with dorsal displacement.', answer: true, explain: 'Correct. Classic "dinner fork" deformity, often from a fall onto an outstretched hand.' },
      { q: 'The tibialis anterior is the main dorsiflexor of the ankle and its weakness causes foot drop.', answer: true, explain: 'Correct. Tibialis anterior (deep fibular nerve, L4–L5) is the principal dorsiflexor — weakness gives the classic foot drop and high-stepping gait.' },
      { q: 'The gluteus medius is primarily a hip extensor.', answer: false, explain: 'False. Gluteus medius is a hip ABDUCTOR and key pelvic stabiliser in single-leg stance. Gluteus maximus is the main extensor.' },
      { q: 'A positive Trendelenburg sign suggests weakness of the hip abductors on the stance (supporting) side.', answer: true, explain: 'Correct. The pelvis drops on the swing side because the stance-side abductors (mainly gluteus medius) cannot hold it level.' },
      { q: 'The rectus femoris crosses both the hip and the knee.', answer: true, explain: 'Correct. It is the only quadriceps muscle crossing two joints — it flexes the hip and extends the knee.' },
      { q: 'The supraspinatus initiates shoulder abduction.', answer: true, explain: 'Correct. Supraspinatus initiates roughly the first 15° of abduction before deltoid takes over.' }
    ]
  },
  Neuro: {
    label: 'Neuro', icon: '🧠',
    questions: [
      { q: 'An upper motor neurone lesion typically causes increased tone (spasticity) and hyperreflexia.', answer: true, explain: 'Correct. UMN lesions → increased tone, hyperreflexia, positive Babinski. LMN lesions → flaccidity, reduced reflexes, wasting.' },
      { q: 'In a stroke affecting the left cerebral hemisphere, motor signs usually appear on the left side of the body.', answer: false, explain: 'False. Motor pathways cross (decussate), so a LEFT hemisphere stroke usually causes RIGHT-sided signs.' },
      { q: 'Expressive (Broca\'s) aphasia mainly affects the production of speech rather than comprehension.', answer: true, explain: 'Correct. Broca\'s (expressive) aphasia affects output; comprehension is relatively preserved. Wernicke\'s affects comprehension.' },
      { q: 'The cerebellum is primarily responsible for coordination, balance and motor control.', answer: true, explain: 'Correct. Cerebellar dysfunction can cause ataxia, dysmetria, intention tremor and balance problems.' },
      { q: 'On the AVPU scale, "P" means the patient is fully alert and oriented.', answer: false, explain: 'False. "A" = Alert. "P" = responds only to Pain. The scale is Alert, Voice, Pain, Unresponsive.' },
      { q: 'Parkinson\'s disease is associated with a resting tremor, bradykinesia and rigidity.', answer: true, explain: 'Correct. The classic triad: resting tremor, bradykinesia and rigidity (often with postural instability later).' },
      { q: 'A FAST assessment for stroke stands for Face, Arms, Speech, Time.', answer: true, explain: 'Correct. Face droop, Arm weakness, Speech difficulty, Time to call emergency services.' },
      { q: 'Multiple sclerosis is a degenerative condition of the muscles, not the nervous system.', answer: false, explain: 'False. MS is a demyelinating condition of the CENTRAL nervous system.' },
      { q: 'A positive Romberg test suggests a problem with proprioception or vestibular input rather than purely cerebellar function.', answer: true, explain: 'Correct. Romberg is positive when balance worsens markedly with eyes closed, pointing to sensory/proprioceptive or vestibular loss rather than cerebellar ataxia.' },
      { q: 'Foot drop is commonly associated with weakness of the ankle dorsiflexors and can result from common peroneal (fibular) nerve injury.', answer: true, explain: 'Correct. Dorsiflexor weakness causes foot drop; the common fibular nerve is a frequent culprit.' },
      { q: 'During the early "shock" phase after a spinal cord injury, reflexes below the level are typically exaggerated.', answer: false, explain: 'False. Spinal shock initially causes flaccidity and ABSENT reflexes below the level; spasticity develops later.' },
      { q: 'The Glasgow Coma Scale assesses eye, verbal and motor responses.', answer: true, explain: 'Correct. GCS scores eye opening, verbal response and motor response (range 3–15).' },
      { q: 'Patients with hemispatial neglect after stroke are simply choosing to ignore one side and can easily attend to it if reminded.', answer: false, explain: 'False. Neglect is a genuine perceptual/attentional deficit, not a choice. It needs specific rehabilitation strategies.' },
      { q: 'Guillain-Barré syndrome typically presents with an ascending, symmetrical weakness.', answer: true, explain: 'Correct. Classically an ascending, relatively symmetrical weakness; it can affect respiratory muscles, so monitoring is important.' },
      { q: 'Spasticity is best described as a velocity-dependent increase in muscle tone.', answer: true, explain: 'Correct. Spasticity increases with faster passive movement — a velocity-dependent resistance.' },
      { q: 'The phrenic nerve arises from spinal levels C3 to C5.', answer: true, explain: 'Correct — the classic reminder is "C3, 4, 5 keep the diaphragm alive." A high cervical injury can therefore threaten breathing.' },
      { q: 'The common fibular (peroneal) nerve is commonly injured at the neck of the fibula.', answer: true, explain: 'Correct. Its superficial course at the fibular neck makes it vulnerable — a frequent cause of foot drop.' },
      { q: 'A C6 nerve root lesion would typically affect the biceps reflex.', answer: true, explain: 'Correct. The biceps reflex is mainly C5–C6; triceps is C7. Useful for localising a root level.' },
      { q: 'Cauda equina syndrome is an upper motor neurone lesion.', answer: false, explain: 'False. The cauda equina is made of lumbosacral nerve ROOTS, so it produces a lower motor neurone picture — and it is a surgical emergency.' },
      { q: 'The sciatic nerve divides into the tibial and common fibular nerves.', answer: true, explain: 'Correct. It usually divides in the distal posterior thigh into the tibial and common fibular (peroneal) branches.' }
    ]
  },
  Cardioresp: {
    label: 'Cardioresp', icon: '🫁',
    questions: [
      { q: 'A normal resting oxygen saturation (SpO₂) for a healthy adult is generally 95% or above.', answer: true, explain: 'Correct. ≥95% is generally normal; ≤94% should prompt clinical attention, and <90% is urgent.' },
      { q: 'A normal adult resting respiratory rate is around 12–20 breaths per minute.', answer: true, explain: 'Correct. 12–20 breaths/min at rest; >20 is tachypnoea and can be an early sign of deterioration.' },
      { q: 'In COPD, the primary problem is a restrictive lung pattern with reduced lung volumes.', answer: false, explain: 'False. COPD is primarily an OBSTRUCTIVE pattern (airflow limitation), not restrictive.' },
      { q: 'Active cycle of breathing technique (ACBT) is used to help clear airway secretions.', answer: true, explain: 'Correct. ACBT combines breathing control, thoracic expansion and the forced expiration technique (huff) to aid secretion clearance.' },
      { q: 'On the Borg RPE scale, a patient who cannot speak in full sentences during exercise should usually be encouraged to push harder.', answer: false, explain: 'False. Inability to speak in sentences is a sign to ease off, not push on, especially in early rehab.' },
      { q: 'Postural drainage uses gravity-assisted positioning to help move secretions toward larger airways.', answer: true, explain: 'Correct. Positioning aims to drain specific lung segments, though it must be used with care and clinical judgement.' },
      { q: 'Pursed-lip breathing can help patients with COPD by reducing air trapping and easing breathlessness.', answer: true, explain: 'Correct. Pursed-lip breathing creates slight back-pressure, helping keep airways open and reducing air trapping.' },
      { q: 'A NEWS2 score of 5 or more should generally prompt urgent clinical review.', answer: true, explain: 'Correct. A NEWS2 of ≥5 is a key trigger for escalation — follow local policy.' },
      { q: 'Finger clubbing can be associated with chronic cardiorespiratory disease.', answer: true, explain: 'Correct. Clubbing is associated with several chronic conditions, including some respiratory and cardiac diseases.' },
      { q: 'During an acute asthma attack, a silent chest is a reassuring sign.', answer: false, explain: 'False — and critical. A silent chest in acute asthma is an ominous sign of severe airflow limitation requiring emergency response.' },
      { q: 'The main muscle of inspiration at rest is the diaphragm.', answer: true, explain: 'Correct. The diaphragm does most of the work of quiet breathing; accessory muscles assist when demand rises.' },
      { q: 'Orthopnoea means breathlessness that worsens when lying flat.', answer: true, explain: 'Correct. Orthopnoea is breathlessness on lying flat, often relieved by sitting up — common in heart failure.' },
      { q: 'Capillary refill time of under 2 seconds is generally considered normal.', answer: true, explain: 'Correct. A CRT under ~2 seconds is typically normal; prolonged CRT may indicate poor perfusion.' },
      { q: 'Early mobilisation of appropriate post-operative patients has no role in preventing respiratory complications.', answer: false, explain: 'False. Early, appropriate mobilisation helps reduce post-operative respiratory complications and deconditioning.' },
      { q: 'Cyanosis (a bluish tinge to lips or extremities) can indicate inadequate oxygenation.', answer: true, explain: 'Correct. Central cyanosis in particular suggests significant hypoxaemia and warrants prompt assessment.' },
      { q: 'The diaphragm is innervated by the phrenic nerve.', answer: true, explain: 'Correct — phrenic nerve, C3–C5. This is why high cervical injuries compromise breathing.' },
      { q: 'Accessory muscles of respiration include sternocleidomastoid and scalenes.', answer: true, explain: 'Correct. Visible accessory muscle use is an important clinical sign of increased work of breathing.' },
      { q: 'A NEWS2 score is calculated from a single observation such as oxygen saturation alone.', answer: false, explain: 'False. NEWS2 aggregates several parameters — respiratory rate, SpO2, oxygen use, blood pressure, pulse, consciousness and temperature.' },
      { q: 'Huffing (forced expiration technique) is generally less tiring and less likely to cause airway collapse than repeated coughing.', answer: true, explain: 'Correct. A huff moves secretions with an open glottis, so it is usually more efficient and better tolerated than repeated coughing.' },
      { q: 'In a patient at risk of hypercapnic respiratory failure, the target oxygen saturation range may be lower than for most patients.', answer: true, explain: 'Correct. Some patients (e.g. certain COPD patients) have a lower target range. Always check the prescribed target on the chart and follow local policy.' }
    ]
  }
};

// Quiz state lives inside the main state object.
state.quizBest ||= {};   // { category: bestScorePercent }

let quizActive = null;    // { category, order:[indices], idx, correct, answered }

function renderQuizHome() {
  const home = document.getElementById('quizHome');
  const play = document.getElementById('quizPlay');
  const result = document.getElementById('quizResult');
  if (!home) return;
  play.hidden = true; result.hidden = true; home.hidden = false;

  home.innerHTML = `
    <p class="quiz-intro">Pick a category to begin. Each round draws 10 questions at random — answer true or false, and you'll get an explanation after every one.</p>
    <div class="quiz-cats">
      ${Object.entries(quizBank).map(([key, cat]) => {
        const best = state.quizBest[key];
        return `<button class="quiz-cat-card" data-cat="${key}">
          <span class="quiz-cat-icon">${cat.icon}</span>
          <span class="quiz-cat-name">${cat.label}</span>
          <span class="quiz-cat-meta">${cat.questions.length} questions${best != null ? ` · best ${best}%` : ''}</span>
        </button>`;
      }).join('')}
    </div>`;

  home.querySelectorAll('.quiz-cat-card').forEach(btn =>
    btn.addEventListener('click', () => startQuiz(btn.dataset.cat))
  );
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_ROUND = 10;

function startQuiz(category) {
  const all = quizBank[category].questions.map((_, i) => i);
  const order = shuffle(all).slice(0, Math.min(QUIZ_ROUND, all.length));
  quizActive = { category, order, idx: 0, correct: 0, answered: false };
  paintQuizQuestion();
}

function paintQuizQuestion() {
  const home = document.getElementById('quizHome');
  const play = document.getElementById('quizPlay');
  const result = document.getElementById('quizResult');
  home.hidden = true; result.hidden = true; play.hidden = false;

  const cat = quizBank[quizActive.category];
  const qIndex = quizActive.order[quizActive.idx];
  const item = cat.questions[qIndex];
  quizActive.answered = false;

  play.innerHTML = `
    <div class="quiz-bar"><div style="width:${(quizActive.idx / quizActive.order.length) * 100}%"></div></div>
    <div class="quiz-meta-row">
      <span class="badge">${cat.icon} ${cat.label}</span>
      <span class="mini-progress">Question ${quizActive.idx + 1} of ${quizActive.order.length}</span>
    </div>
    <p class="quiz-statement">${item.q}</p>
    <div class="quiz-tf">
      <button class="quiz-tf-btn" data-val="true">True</button>
      <button class="quiz-tf-btn" data-val="false">False</button>
    </div>
    <div class="quiz-feedback" hidden></div>
    <button class="primary quiz-next" hidden>Next question</button>`;

  play.querySelectorAll('.quiz-tf-btn').forEach(btn =>
    btn.addEventListener('click', () => answerQuiz(btn.dataset.val === 'true', item))
  );
}

function answerQuiz(choice, item) {
  if (quizActive.answered) return;
  quizActive.answered = true;
  const play = document.getElementById('quizPlay');
  const correct = choice === item.answer;
  if (correct) quizActive.correct++;

  play.querySelectorAll('.quiz-tf-btn').forEach(btn => {
    btn.disabled = true;
    const isThis = (btn.dataset.val === 'true') === choice;
    const isAnswer = (btn.dataset.val === 'true') === item.answer;
    if (isAnswer) btn.classList.add('tf-correct');
    if (isThis && !correct) btn.classList.add('tf-wrong');
  });

  const fb = play.querySelector('.quiz-feedback');
  fb.hidden = false;
  fb.className = `quiz-feedback ${correct ? 'fb-good' : 'fb-bad'}`;
  fb.innerHTML = `<strong>${correct ? '✅ Correct' : '❌ Not quite'}</strong><p>${item.explain}</p>`;

  const next = play.querySelector('.quiz-next');
  next.hidden = false;
  next.textContent = quizActive.idx === quizActive.order.length - 1 ? 'See your score' : 'Next question';
  next.addEventListener('click', () => {
    if (quizActive.idx < quizActive.order.length - 1) {
      quizActive.idx++;
      paintQuizQuestion();
    } else {
      finishQuiz();
    }
  });
}

function finishQuiz() {
  const play = document.getElementById('quizPlay');
  const result = document.getElementById('quizResult');
  play.hidden = true; result.hidden = false;

  const total = quizActive.order.length;
  const score = quizActive.correct;
  const pct = Math.round((score / total) * 100);
  const cat = quizBank[quizActive.category];

  const prevBest = state.quizBest[quizActive.category];
  const isBest = prevBest == null || pct > prevBest;
  if (isBest) { state.quizBest[quizActive.category] = pct; persist(); }

  let msg;
  if (pct === 100)      msg = 'Flawless — that knowledge is sharp.';
  else if (pct >= 80)   msg = 'Strong work. Just a couple to revisit.';
  else if (pct >= 60)   msg = 'A solid base — review the ones you missed and go again.';
  else                  msg = 'Worth another look. Read the explanations and retry — that\'s how it sticks.';

  result.innerHTML = `
    <div class="quiz-score-card">
      <span class="quiz-cat-icon">${cat.icon}</span>
      <div class="quiz-score-num">${score}/${total}</div>
      <div class="quiz-score-pct">${pct}%</div>
      ${isBest ? '<div class="quiz-best-tag">🏅 New best for this category</div>' : ''}
      <p class="quiz-score-msg">${msg}</p>
      <div class="quiz-result-actions">
        <button class="primary" id="quizRetry">Try ${cat.label} again</button>
        <button class="secondary" id="quizBack">Pick another category</button>
      </div>
    </div>`;

  result.querySelector('#quizRetry').addEventListener('click', () => startQuiz(quizActive.category));
  result.querySelector('#quizBack').addEventListener('click', renderQuizHome);
}

// ── ANATOMY REFERENCE ─────────────────────────────────────────
// Origin / insertion / action / nerve for muscles commonly examined
// in UK physiotherapy programmes. REVIEW against your own anatomy text.

const anatomyRegions = [
  {
    id: 'shoulder', label: 'Shoulder & scapula', icon: '💪',
    muscles: [
      { name:'Supraspinatus', origin:'Supraspinous fossa of scapula', insertion:'Greater tubercle of humerus (superior facet)', action:'Initiates shoulder abduction (first ~15°); stabilises humeral head', nerve:'Suprascapular (C5–C6)' },
      { name:'Infraspinatus', origin:'Infraspinous fossa of scapula', insertion:'Greater tubercle of humerus (middle facet)', action:'Lateral (external) rotation of shoulder', nerve:'Suprascapular (C5–C6)' },
      { name:'Teres minor', origin:'Lateral border of scapula', insertion:'Greater tubercle of humerus (inferior facet)', action:'Lateral rotation and adduction of shoulder', nerve:'Axillary (C5–C6)' },
      { name:'Subscapularis', origin:'Subscapular fossa', insertion:'Lesser tubercle of humerus', action:'Medial (internal) rotation of shoulder', nerve:'Upper & lower subscapular (C5–C6)' },
      { name:'Deltoid', origin:'Lateral clavicle, acromion, spine of scapula', insertion:'Deltoid tuberosity of humerus', action:'Anterior: flexion/medial rotation. Middle: abduction. Posterior: extension/lateral rotation', nerve:'Axillary (C5–C6)' },
      { name:'Trapezius', origin:'Occipital bone, nuchal ligament, spinous processes C7–T12', insertion:'Lateral clavicle, acromion, spine of scapula', action:'Upper: scapular elevation. Middle: retraction. Lower: depression', nerve:'Accessory nerve (CN XI)' },
      { name:'Serratus anterior', origin:'Ribs 1–8/9 (lateral surface)', insertion:'Medial border of scapula (costal surface)', action:'Scapular protraction and upward rotation; holds scapula to thorax', nerve:'Long thoracic (C5–C7)' },
      { name:'Rhomboid major & minor', origin:'Spinous processes C7–T5', insertion:'Medial border of scapula', action:'Scapular retraction and downward rotation', nerve:'Dorsal scapular (C4–C5)' },
      { name:'Latissimus dorsi', origin:'Spinous processes T7–L5, thoracolumbar fascia, iliac crest', insertion:'Intertubercular groove of humerus', action:'Shoulder extension, adduction, medial rotation', nerve:'Thoracodorsal (C6–C8)' },
      { name:'Pectoralis major', origin:'Clavicle, sternum, upper costal cartilages', insertion:'Lateral lip of intertubercular groove', action:'Shoulder adduction, medial rotation, flexion (clavicular head)', nerve:'Medial & lateral pectoral (C5–T1)' }
    ]
  },
  {
    id: 'elbow', label: 'Elbow, forearm & wrist', icon: '🦾',
    muscles: [
      { name:'Biceps brachii', origin:'Long head: supraglenoid tubercle. Short head: coracoid process', insertion:'Radial tuberosity; bicipital aponeurosis', action:'Elbow flexion; forearm supination; weak shoulder flexion', nerve:'Musculocutaneous (C5–C6)' },
      { name:'Brachialis', origin:'Distal anterior humerus', insertion:'Ulnar tuberosity and coronoid process', action:'Primary elbow flexor (any forearm position)', nerve:'Musculocutaneous (C5–C6)' },
      { name:'Brachioradialis', origin:'Lateral supracondylar ridge of humerus', insertion:'Distal radius (styloid process)', action:'Elbow flexion, strongest in mid-pronation', nerve:'Radial (C5–C6)' },
      { name:'Triceps brachii', origin:'Long head: infraglenoid tubercle. Lateral/medial heads: posterior humerus', insertion:'Olecranon of ulna', action:'Elbow extension; long head assists shoulder extension', nerve:'Radial (C6–C8)' },
      { name:'Pronator teres', origin:'Medial epicondyle of humerus; coronoid process', insertion:'Lateral radius (mid-shaft)', action:'Forearm pronation; assists elbow flexion', nerve:'Median (C6–C7)' },
      { name:'Supinator', origin:'Lateral epicondyle, supinator crest of ulna', insertion:'Proximal radius', action:'Forearm supination', nerve:'Posterior interosseous (radial, C5–C6)' },
      { name:'Flexor carpi radialis', origin:'Medial epicondyle (common flexor origin)', insertion:'Base of 2nd/3rd metacarpal', action:'Wrist flexion and radial deviation', nerve:'Median (C6–C7)' },
      { name:'Flexor carpi ulnaris', origin:'Medial epicondyle; olecranon', insertion:'Pisiform, hamate, 5th metacarpal', action:'Wrist flexion and ulnar deviation', nerve:'Ulnar (C7–C8)' },
      { name:'Extensor carpi radialis longus/brevis', origin:'Lateral supracondylar ridge / lateral epicondyle', insertion:'Base of 2nd / 3rd metacarpal', action:'Wrist extension and radial deviation', nerve:'Radial (C6–C7)' },
      { name:'Extensor carpi ulnaris', origin:'Lateral epicondyle; posterior ulna', insertion:'Base of 5th metacarpal', action:'Wrist extension and ulnar deviation', nerve:'Posterior interosseous (C7–C8)' }
    ]
  },
  {
    id: 'hip', label: 'Hip & pelvis', icon: '🦿',
    muscles: [
      { name:'Gluteus maximus', origin:'Posterior ilium, sacrum, coccyx, sacrotuberous ligament', insertion:'Iliotibial tract; gluteal tuberosity of femur', action:'Hip extension and lateral rotation; assists in rising from sitting', nerve:'Inferior gluteal (L5–S2)' },
      { name:'Gluteus medius', origin:'External ilium (between anterior and posterior gluteal lines)', insertion:'Greater trochanter (lateral surface)', action:'Hip abduction; stabilises pelvis in single-leg stance', nerve:'Superior gluteal (L4–S1)' },
      { name:'Gluteus minimus', origin:'External ilium (between anterior and inferior gluteal lines)', insertion:'Greater trochanter (anterior surface)', action:'Hip abduction and medial rotation; pelvic stability', nerve:'Superior gluteal (L4–S1)' },
      { name:'Iliopsoas (iliacus + psoas major)', origin:'Iliac fossa / T12–L5 vertebral bodies and transverse processes', insertion:'Lesser trochanter of femur', action:'Primary hip flexor; assists lumbar flexion', nerve:'Femoral (L2–L3) / anterior rami L1–L3' },
      { name:'Tensor fasciae latae', origin:'Anterior iliac crest, ASIS', insertion:'Iliotibial tract', action:'Hip flexion, abduction, medial rotation; tensions ITB', nerve:'Superior gluteal (L4–S1)' },
      { name:'Piriformis', origin:'Anterior sacrum', insertion:'Greater trochanter (superior border)', action:'Hip lateral rotation; abduction when hip flexed', nerve:'Nerve to piriformis (S1–S2)' },
      { name:'Adductor longus / magnus / brevis', origin:'Pubis (body, inferior ramus); magnus also ischial tuberosity', insertion:'Linea aspera of femur; magnus also adductor tubercle', action:'Hip adduction; magnus posterior fibres assist extension', nerve:'Obturator (L2–L4); magnus also sciatic (tibial) L4' }
    ]
  },
  {
    id: 'knee', label: 'Knee & thigh', icon: '🦵',
    muscles: [
      { name:'Rectus femoris', origin:'AIIS and superior acetabular rim', insertion:'Patella → tibial tuberosity via patellar ligament', action:'Knee extension and hip flexion (two-joint muscle)', nerve:'Femoral (L2–L4)' },
      { name:'Vastus lateralis', origin:'Greater trochanter, lateral linea aspera', insertion:'Patella → tibial tuberosity', action:'Knee extension', nerve:'Femoral (L2–L4)' },
      { name:'Vastus medialis', origin:'Intertrochanteric line, medial linea aspera', insertion:'Patella → tibial tuberosity', action:'Knee extension; VMO assists patellar tracking', nerve:'Femoral (L2–L4)' },
      { name:'Vastus intermedius', origin:'Anterior/lateral femoral shaft', insertion:'Patella → tibial tuberosity', action:'Knee extension', nerve:'Femoral (L2–L4)' },
      { name:'Biceps femoris', origin:'Long head: ischial tuberosity. Short head: linea aspera', insertion:'Head of fibula', action:'Knee flexion and lateral rotation; long head extends hip', nerve:'Sciatic — tibial (long head), common fibular (short head)' },
      { name:'Semitendinosus', origin:'Ischial tuberosity', insertion:'Pes anserinus (medial tibia)', action:'Knee flexion and medial rotation; hip extension', nerve:'Sciatic (tibial division, L5–S2)' },
      { name:'Semimembranosus', origin:'Ischial tuberosity', insertion:'Medial tibial condyle (posterior)', action:'Knee flexion and medial rotation; hip extension', nerve:'Sciatic (tibial division, L5–S2)' },
      { name:'Popliteus', origin:'Lateral femoral condyle', insertion:'Posterior proximal tibia', action:'"Unlocks" the extended knee by lateral femoral rotation', nerve:'Tibial (L4–S1)' },
      { name:'Sartorius', origin:'ASIS', insertion:'Pes anserinus (medial tibia)', action:'Hip flexion, abduction, lateral rotation; knee flexion', nerve:'Femoral (L2–L3)' }
    ]
  },
  {
    id: 'ankle', label: 'Ankle & foot', icon: '🦶',
    muscles: [
      { name:'Gastrocnemius', origin:'Medial and lateral femoral condyles', insertion:'Calcaneus via Achilles tendon', action:'Ankle plantarflexion; assists knee flexion', nerve:'Tibial (S1–S2)' },
      { name:'Soleus', origin:'Posterior fibula and soleal line of tibia', insertion:'Calcaneus via Achilles tendon', action:'Ankle plantarflexion (dominant with knee flexed); postural stability', nerve:'Tibial (S1–S2)' },
      { name:'Tibialis anterior', origin:'Lateral tibial condyle, proximal lateral tibia', insertion:'Medial cuneiform, base of 1st metatarsal', action:'Ankle dorsiflexion and inversion — key in foot drop', nerve:'Deep fibular (L4–L5)' },
      { name:'Tibialis posterior', origin:'Posterior tibia, fibula, interosseous membrane', insertion:'Navicular, cuneiforms, metatarsals 2–4', action:'Plantarflexion and inversion; supports medial arch', nerve:'Tibial (L4–L5)' },
      { name:'Fibularis (peroneus) longus & brevis', origin:'Lateral fibula', insertion:'Longus: medial cuneiform/1st MT. Brevis: base of 5th MT', action:'Eversion and assists plantarflexion; supports lateral arch', nerve:'Superficial fibular (L5–S1)' },
      { name:'Extensor digitorum longus', origin:'Lateral tibial condyle, anterior fibula', insertion:'Middle/distal phalanges of toes 2–5', action:'Toe extension; assists dorsiflexion', nerve:'Deep fibular (L5–S1)' },
      { name:'Flexor digitorum longus', origin:'Posterior tibia', insertion:'Distal phalanges of toes 2–5', action:'Toe flexion; assists plantarflexion and inversion', nerve:'Tibial (S2–S3)' }
    ]
  },
  {
    id: 'trunk', label: 'Trunk & spine', icon: '🧍',
    muscles: [
      { name:'Rectus abdominis', origin:'Pubic crest and symphysis', insertion:'Xiphoid process, costal cartilages 5–7', action:'Trunk flexion; increases intra-abdominal pressure', nerve:'Intercostal nerves T7–T12' },
      { name:'External oblique', origin:'Ribs 5–12 (external surfaces)', insertion:'Iliac crest, linea alba', action:'Trunk flexion, contralateral rotation, lateral flexion', nerve:'Intercostal T7–T12, subcostal' },
      { name:'Internal oblique', origin:'Thoracolumbar fascia, iliac crest, inguinal ligament', insertion:'Ribs 10–12, linea alba', action:'Trunk flexion, ipsilateral rotation, lateral flexion', nerve:'Intercostal T7–T12, L1' },
      { name:'Transversus abdominis', origin:'Thoracolumbar fascia, iliac crest, costal cartilages 7–12', insertion:'Linea alba, pubic crest', action:'Compresses abdomen; key deep local stabiliser of the lumbar spine', nerve:'Intercostal T7–T12, L1' },
      { name:'Erector spinae (iliocostalis, longissimus, spinalis)', origin:'Sacrum, iliac crest, spinous/transverse processes', insertion:'Ribs, transverse processes, spinous processes above', action:'Spinal extension, lateral flexion; postural control', nerve:'Posterior rami of spinal nerves' },
      { name:'Multifidus', origin:'Sacrum, transverse processes', insertion:'Spinous processes 2–4 segments above', action:'Segmental spinal stabilisation and extension', nerve:'Posterior rami of spinal nerves' },
      { name:'Quadratus lumborum', origin:'Iliac crest, iliolumbar ligament', insertion:'12th rib, transverse processes L1–L4', action:'Lateral trunk flexion; stabilises 12th rib in respiration', nerve:'Subcostal, L1–L4' },
      { name:'Diaphragm', origin:'Xiphoid, costal margin (ribs 7–12), lumbar vertebrae via crura', insertion:'Central tendon', action:'Primary muscle of inspiration', nerve:'Phrenic (C3–C5)' }
    ]
  }
];

// ── FREE UK RESOURCE HUB ──────────────────────────────────────
const resourceHub = [
  {
    group: 'Core free knowledge',
    items: [
      { name:'Physiopedia', note:'Free, evidence-based physiotherapy knowledge base — a UK-registered charity with thousands of peer-reviewed pages.', url:'https://www.physio-pedia.com/home/' },
      { name:'Physiopedia — Students Guide', note:'Guidance written specifically for physiotherapy students getting started.', url:'https://www.physio-pedia.com/Students_Guide' }
    ]
  },
  {
    group: 'Professional standards (UK)',
    items: [
      { name:'CSP — Chartered Society of Physiotherapy', note:'Your professional body. Student resources, guidance and career support.', url:'https://www.csp.org.uk/' },
      { name:'CSP — Consent guidance', note:'Profession-specific guidance on gaining and recording valid consent.', url:'https://www.csp.org.uk/professional-clinical/professional-guidance/consent' },
      { name:'HCPC — Health and Care Professions Council', note:'The regulator. Standards of proficiency and conduct you will be held to.', url:'https://www.hcpc-uk.org/' }
    ]
  },
  {
    group: 'Clinical guidelines',
    items: [
      { name:'NICE — Low back pain and sciatica (NG59)', note:'Assessment and management of low back pain and sciatica in over 16s.', url:'https://www.nice.org.uk/guidance/ng59' },
      { name:'NICE — Falls in older people (NG249)', note:'Assessment and prevention of falls in older people.', url:'https://www.nice.org.uk/guidance/ng249' },
      { name:'NICE — Shared decision-making (NG197)', note:'How to make decisions together with the people you treat.', url:'https://www.nice.org.uk/guidance/ng197' },
      { name:'NICE — all guidance', note:'Search the full library of NICE clinical guidelines.', url:'https://www.nice.org.uk/guidance' },
      { name:'NHS England — Shared decision-making', note:'Practical NHS resources on involving patients in their care.', url:'https://www.england.nhs.uk/shared-decision-making/' }
    ]
  }
];

// ── RENDER: ANATOMY ───────────────────────────────────────────
state.anatomyRegion ||= 'shoulder';

function renderAnatomy() {
  const root = document.getElementById('anatomyList');
  if (!root) return;

  const tabs = anatomyRegions.map(r =>
    `<button class="anat-chip ${state.anatomyRegion === r.id ? 'active' : ''}" data-region="${r.id}">${r.icon} ${r.label}</button>`
  ).join('');

  let region = anatomyRegions.find(r => r.id === state.anatomyRegion) || anatomyRegions[0];
  let muscles = region.muscles;

  // Search spans ALL regions so students can find a muscle without knowing its region.
  let searchingAll = false;
  if (searchQuery) {
    const hits = [];
    anatomyRegions.forEach(r => r.muscles.forEach(m => {
      if (matches(m.name) || matches(m.action) || matches(m.nerve) || matches(m.origin) || matches(m.insertion)) {
        hits.push({ ...m, _region: r.label });
      }
    }));
    muscles = hits; searchingAll = true;
  }

  if (!muscles.length) {
    root.innerHTML = `<div class="anat-chips">${tabs}</div><p class="empty-state">No muscles match your search.</p>`;
  } else {
    root.innerHTML = `
      <div class="anat-chips">${tabs}</div>
      ${searchingAll ? `<p class="anat-search-note">${muscles.length} match${muscles.length !== 1 ? 'es' : ''} across all regions</p>` : ''}
      <div class="stack">
        ${muscles.map(m => `
          <article class="card anat-card">
            <h3>${m.name}</h3>
            ${m._region ? `<span class="badge">${m._region}</span>` : ''}
            <dl class="anat-dl">
              <dt>Origin</dt><dd>${m.origin}</dd>
              <dt>Insertion</dt><dd>${m.insertion}</dd>
              <dt>Action</dt><dd>${m.action}</dd>
              <dt>Nerve</dt><dd>${m.nerve}</dd>
            </dl>
          </article>`).join('')}
      </div>`;
  }

  root.querySelectorAll('.anat-chip').forEach(btn =>
    btn.addEventListener('click', () => {
      state.anatomyRegion = btn.dataset.region;
      persist();
      renderAnatomy();
    })
  );
}

// ── RENDER: RESOURCE HUB ──────────────────────────────────────
function renderResources() {
  const root = document.getElementById('resourceList');
  if (!root) return;
  root.innerHTML = resourceHub.map(g => {
    const items = g.items.filter(i => matches(i.name) || matches(i.note));
    if (!items.length) return '';
    return `<article class="card">
      <h3>${g.group}</h3>
      <ul class="res-list">
        ${items.map(i => `<li>
          <a href="${i.url}" target="_blank" rel="noopener noreferrer">${i.name} ↗</a>
          <p>${i.note}</p>
        </li>`).join('')}
      </ul>
    </article>`;
  }).join('') || '<p class="empty-state">No resources match your search.</p>';
}

// ── INIT ──────────────────────────────────────────────────────

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').catch(() => {});
}

applyDarkMode(state.darkMode);
updateStreak();
renderHome();
renderChecklists();
renderScenarios();
renderTemplates();
renderSafety();
renderReference();
renderQuizHome();
renderAnatomy();
renderResources();
updateProgress();
checkAchievements();
renderProgress();

if (!state.onboarded) {
  onboardingModal.hidden = false;
  trapFocus(onboardingModal, () => document.getElementById('onboardingClose').click());
  setTimeout(() => document.getElementById('onboardingClose').focus(), 50);
}
