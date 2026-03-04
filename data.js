window.REVISION_PLAN = {
  meta: {
    title: "GCSE Revision Tracker",
    startDate: "2026-03-02",
    saturdayRest: true
  },

  subjects: [
    "Maths",
    "Chemistry",
    "Biology",
    "Physics",
    "English Lit",
    "English Lang",
    "Geography",
    "French",
    "Spaced Review",
    "REST"
  ],

  weeks: [
    // -------------------- W1 --------------------
    {
      id: "w1",
      title: "Week 1: Core foundations",
      dateRange: "2 Mar – 8 Mar 2026",
      days: {
        Monday: [
          { subject:"Maths", text:"Algebra manipulation + expanding (include 5 hard problems)" },
          { subject:"Biology", paper:"Paper 1", text:"Cells: structure + microscopy + cell specialisation" },
          { subject:"French", paper:"Speaking", text:"Speaking Theme 1: answers + upgrades (opinions + reasons)" }
        ],
        Tuesday: [
          { subject:"Maths", text:"Factorising + solving quadratics (basic → harder)" },
          { subject:"Chemistry", paper:"Paper 1", text:"Atomic structure + isotopes + ions" },
          { subject:"English Lit", paper:"Paper 1", text:"Shakespeare: 10 key quotes + what they show" }
        ],
        Wednesday: [
          { subject:"Maths", text:"Completing the square + link to graph features" },
          { subject:"Physics", paper:"Paper 1", text:"Energy stores/transfers + efficiency exam Qs" },
          { subject:"Geography", paper:"Paper 1", text:"Natural hazards: tectonics overview + case study skeleton" }
        ],
        Thursday: [
          { subject:"Maths", text:"Simultaneous equations (linear + linear/quadratic)" },
          { subject:"Biology", paper:"Paper 1", text:"Organisation: enzymes + digestion + required practical notes" },
          { subject:"French", paper:"Listening", text:"Listening set + fix unknown vocab" }
        ],
        Friday: [
          { subject:"Maths", text:"Straight lines: gradient/intercept + parallel/perpendicular" },
          { subject:"Chemistry", paper:"Paper 1", text:"Bonding: ionic vs covalent (structure → properties)" },
          { subject:"English Lang", paper:"Paper 1", text:"Paper 1 Q5: 1 creative response + checklist" }
        ],
        Saturday: [{ subject:"Catch up and review", text:"..." }],
        Sunday: [
          { subject:"Maths", text:"Timed mixed algebra set + mark + log mistakes" },
          { subject:"Physics", paper:"Paper 1", text:"Energy calculations (work/energy/power) + units" },
          { subject:"Biology", paper:"Paper 1", text:"Required practical recall + 1 six-marker" },
          { subject:"Spaced Review", text:"Redo 5 mistakes from week + write fixes" }
        ]
      }
    },

    // -------------------- W2 --------------------
    {
      id: "w2",
      title: "Week 2: Build + Chemistry boost",
      dateRange: "9 Mar – 15 Mar 2026",
      days: {
        Monday: [
          { subject:"Maths", text:"Inequalities + regions + harder exam Qs" },
          { subject:"Biology", paper:"Paper 1", text:"Circulatory system + blood + required practical links" },
          { subject:"French", paper:"Grammar", text:"Grammar: present + perfect (high-frequency verbs)" }
        ],
        Tuesday: [
          { subject:"Maths", text:"Functions + composite/inverse basics" },
          { subject:"Chemistry", paper:"Paper 1", text:"Bonding: metallic + nanoparticles (compare properties)" },
          { subject:"English Lit", paper:"Paper 1", text:"19th century novel: themes + 5 flexible quotes" }
        ],
        Wednesday: [
          { subject:"Maths", text:"Iteration basics + exam-style iteration problems" },
          { subject:"Physics", paper:"Paper 1", text:"Electricity: current/pd/resistance + circuit reasoning" },
          { subject:"Geography", paper:"Paper 1", text:"Climate change: causes/impacts/management + one 6-mark" }
        ],
        Thursday: [
          { subject:"Maths", text:"Pythagoras + 3D + problem solving" },
          { subject:"Biology", paper:"Paper 1", text:"Infection & response: pathogens + immunity basics" },
          { subject:"French", paper:"Reading", text:"Reading set + trap vocab list" }
        ],
        Friday: [
          { subject:"Maths", text:"Trigonometry: SOHCAHTOA + bearings/elevation" },
          { subject:"Chemistry", paper:"Paper 1", text:"Quantitative: moles (mass↔moles) + reacting masses starter" },
          { subject:"English Lang", paper:"Paper 2", text:"Paper 2 Q5: persuasive (structure + tone)" }
        ],
        Saturday: [{ subject:"Catch up and review", text:"..." }],
        Sunday: [
          { subject:"Maths", text:"Timed geometry mix (Pythagoras + trig) + log errors" },
          { subject:"Chemistry", paper:"Paper 1", text:"Moles drill: mole ratio + unit conversions" },
          { subject:"Biology", paper:"Paper 1", text:"Bioenergetics: photosynthesis factors + practical recall" },
          { subject:"Spaced Review", text:"Redo 1 hard Maths Q + 1 science 6-marker from memory" }
        ]
      }
    },

    // -------------------- W3 --------------------
    {
      id: "w3",
      title: "Week 3: Finish Paper 1 coverage",
      dateRange: "16 Mar – 22 Mar 2026",
      days: {
        Monday: [
          { subject:"Maths", text:"Circle theorems (reasoning + proof-style)" },
          { subject:"Chemistry", paper:"Paper 1", text:"Quantitative: concentration (g/dm³ + mol/dm³) exam Qs" },
          { subject:"French", paper:"Writing", text:"Writing: 90-word task (tenses + opinions)" }
        ],
        Tuesday: [
          { subject:"Maths", text:"Vectors basics + vector geometry problems" },
          { subject:"Physics", paper:"Paper 1", text:"Particle model: density + state changes (calc + explain)" },
          { subject:"English Lit", paper:"Paper 2", text:"Modern text: character/theme paragraph practice" }
        ],
        Wednesday: [
          { subject:"Maths", text:"Vector proofs (grade 8/9 style)" },
          { subject:"Biology", paper:"Paper 1", text:"Respiration (aerobic/anaerobic) + required practical links" },
          { subject:"Geography", paper:"Paper 1", text:"Ecosystems: food webs + nutrient cycles + one 6-mark" }
        ],
        Thursday: [
          { subject:"Maths", text:"Direct & inverse proportion + harder problems" },
          { subject:"Chemistry", paper:"Paper 1", text:"Chemical changes + electrolysis basics (predict products)" },
          { subject:"French", paper:"Translation", text:"Translation both ways (accuracy focus)" }
        ],
        Friday: [
          { subject:"Maths", text:"Growth/decay + repeated percentage change" },
          { subject:"Physics", paper:"Paper 1", text:"Atomic structure + radiation basics + half-life intuition" },
          { subject:"English Lang", paper:"Paper 1", text:"Paper 1: Q2–Q4 practice (short timed)" }
        ],
        Saturday: [{ subject:"Catch up and review", text:"..." }],
        Sunday: [
          { subject:"Maths", text:"Full Paper (any) timed + mark + mistake log" },
          { subject:"Chemistry", paper:"Paper 1", text:"Paper 1 mixed Qs (bonding + moles focus)" },
          { subject:"Biology", paper:"Paper 1", text:"6-mark set (photosynthesis/respiration/infection)" },
          { subject:"Spaced Review", text:"Redo 5 worst questions from the paper (no notes)" }
        ]
      }
    },

    // -------------------- W4 --------------------
    {
      id: "w4",
      title: "Week 4: Paper 2 topics begin + exam technique",
      dateRange: "23 Mar – 29 Mar 2026",
      days: {
        Monday: [
          { subject:"Maths", text:"Sequences (nth term + quadratic sequences)" },
          { subject:"Chemistry", paper:"Paper 1", text:"Energy changes basics + reaction profiles" },
          { subject:"French", paper:"Speaking", text:"Speaking Theme 2: answers + upgrades" }
        ],
        Tuesday: [
          { subject:"Maths", text:"Algebraic fractions + simplifying + harder Qs" },
          { subject:"Biology", paper:"Paper 2", text:"Homeostasis intro (Paper 2): nervous + hormonal overview" },
          { subject:"English Lit", paper:"Paper 1", text:"Shakespeare: 1 timed essay plan + quote integration" }
        ],
        Wednesday: [
          { subject:"Maths", text:"Probability basics + combined probability problems" },
          { subject:"Physics", paper:"Paper 2", text:"Forces intro (Paper 2): resultant + Newton basics" },
          { subject:"Geography", paper:"Paper 1", text:"Paper 1 practice: section A questions (timed)" }
        ],
        Thursday: [
          { subject:"Maths", text:"Cumulative frequency + box plots (interpretation)" },
          { subject:"Chemistry", paper:"Paper 2", text:"Rates of reaction intro + required practical recall" },
          { subject:"English Lang", paper:"Paper 2", text:"Paper 2 Q3/Q4 analysis practice (timed)" }
        ],
        Friday: [
          { subject:"Maths", text:"Trigonometry graphs + exact values (sin/cos/tan)" },
          { subject:"Chemistry", paper:"Paper 1", text:"Bonding recap: big compare table + 6-mark attempt" },
          { subject:"French", paper:"Listening", text:"Listening set + note patterns you miss" }
        ],
        Saturday: [{ subject:"Catch up and review", text:"..." }],
        Sunday: [
          { subject:"Maths", text:"Half-paper timed (pick weak sections) + log mistakes" },
          { subject:"Chemistry", paper:"Paper 1", text:"Calculations drill: moles + conc (25–30 mins)" },
          { subject:"Spaced Review", text:"Flash recall: 10 definitions (science) + 5 algebra skills" }
        ]
      }
    },

    // -------------------- W5 --------------------
    {
      id: "w5",
      title: "Week 5: French speaking window prep + stronger Paper 1 papers",
      dateRange: "30 Mar – 5 Apr 2026",
      days: {
        Monday: [
          { subject:"Maths", text:"Surds (simplify + rationalise) + hard exam Qs" },
          { subject:"Chemistry", paper:"Paper 2", text:"Equilibria basics + reversible reactions (Paper 2 intro)" },
          { subject:"French", paper:"Speaking", text:"Speaking Theme 3: school answers + role play style" }
        ],
        Tuesday: [
          { subject:"Maths", text:"Histograms + frequency density + comparison Qs" },
          { subject:"Biology", paper:"Paper 2", text:"Homeostasis: thermoregulation + blood glucose overview" },
          { subject:"English Lit", paper:"Paper 1", text:"19th century novel: 1 essay plan + 5 quotes revision" }
        ],
        Wednesday: [
          { subject:"Maths", text:"Ratio/proportion hard set (best buys + compound measures)" },
          { subject:"Physics", paper:"Paper 2", text:"Forces: motion graphs + acceleration problems" },
          { subject:"Geography", paper:"Paper 2", text:"Paper 2 content intro: urban issues overview" }
        ],
        Thursday: [
          { subject:"Maths", text:"Transformations (including algebraic) + harder Qs" },
          { subject:"Chemistry", paper:"Paper 2", text:"Rates required practical: variables + method + graphs" },
          { subject:"English Lang", paper:"Paper 1", text:"Paper 1 Q5 upgrade: vocab + structure improvements" }
        ],
        Friday: [
          { subject:"Maths", text:"Full Paper timed (alternate to last) + mark" },
          { subject:"Chemistry", paper:"Paper 1", text:"Paper 1 weak areas: targeted exam questions" },
          { subject:"French", paper:"Speaking", text:"Speaking: photo card practice + spontaneous follow-ups" }
        ],
        Saturday: [{ subject:"Catch up and review", text:"..." }],
        Sunday: [
          { subject:"Chemistry", paper:"Paper 1", text:"6-mark set: bonding/rates/energy changes" },
          { subject:"Spaced Review", text:"Mistake log: redo 5 maths + 5 chemistry errors" }
        ]
      }
    },

    // -------------------- W6 --------------------
    {
      id: "w6",
      title: "Week 6: Exam skills ramp (April begins)",
      dateRange: "6 Apr – 12 Apr 2026",
      days: {
        Monday: [
          { subject:"Maths", text:"Algebra + graphs mixed (hard) + function graphs" },
          { subject:"Chemistry", paper:"Paper 1", text:"Electrolysis deeper: half-equations + predicting products" },
          { subject:"French", paper:"Speaking", text:"Speaking mock: Theme 1 + Theme 2 (record yourself)" }
        ],
        Tuesday: [
          { subject:"Maths", text:"Proof (algebraic + geometric) basics + exam questions" },
          { subject:"Biology", paper:"Paper 2", text:"Homeostasis: kidneys/urine basics (Paper 2)" },
          { subject:"English Lit", paper:"Paper 1", text:"Shakespeare: 1 timed paragraph set (analysis focus)" }
        ],
        Wednesday: [
          { subject:"Maths", text:"Probability (tree diagrams + conditional style)" },
          { subject:"Physics", paper:"Paper 2", text:"Magnetism/EM intro OR forces consolidation (Paper 2)" },
          { subject:"Geography", paper:"Paper 1", text:"Paper 1: rivers/coasts quick notes + exam questions" }
        ],
        Thursday: [
          { subject:"Maths", text:"Cumulative frequency practice + compare distributions" },
          { subject:"Chemistry", paper:"Paper 2", text:"Organic chemistry intro (Paper 2): alkanes/alkenes basics" },
          { subject:"English Lang", paper:"Paper 2", text:"Paper 2 Q5: 1 full response + strict checklist" }
        ],
        Friday: [
          { subject:"Maths", text:"Full Paper timed + mark + make ‘fix list’" },
          { subject:"Chemistry", paper:"Paper 1", text:"Calculation drill: moles/concentration/energy" },
          { subject:"French", paper:"Listening", text:"Listening + dictation style (accuracy)" }
        ],
        Saturday: [{ subject:"Catch up and review", text:"..." }],
        Sunday: [
          { subject:"Biology", paper:"Paper 1", text:"Paper 1 mixed questions (topics 1–4)" },
          { subject:"Spaced Review", text:"Redo this week’s worst 3 maths + worst 3 chem questions" }
        ]
      }
    },

    // -------------------- W7 --------------------
    {
      id: "w7",
      title: "Week 7: Two-week lock-in begins soon (Lit/Bio lead)",
      dateRange: "13 Apr – 19 Apr 2026",
      days: {
        Monday: [
          { subject:"English Lit", paper:"Paper 1", text:"Shakespeare: full essay plan + 2 key quotes per theme" },
          { subject:"Maths", text:"Weak-topic drill from last paper + 10 exam Qs" },
          { subject:"Chemistry", paper:"Paper 1", text:"Paper 1 recap: bonding + quantitative mixed Qs" }
        ],
        Tuesday: [
          { subject:"Biology", paper:"Paper 1", text:"Paper 1: infection/response + 6-mark practice" },
          { subject:"Maths", text:"Higher problem solving set (mixed topics)" },
          { subject:"French", paper:"Speaking", text:"Speaking: role play + general conversation prompts" }
        ],
        Wednesday: [
          { subject:"English Lit", paper:"Paper 1", text:"19th century novel: 1 essay plan + flexible quotes" },
          { subject:"Chemistry", paper:"Paper 1", text:"Moles/concentration timed set + mark" },
          { subject:"Geography", paper:"Paper 1", text:"Paper 1 case studies: quick recall + 6-mark" }
        ],
        Thursday: [
          { subject:"Biology", paper:"Paper 1", text:"Paper 1: bioenergetics + required practical recall" },
          { subject:"Maths", text:"Full Paper timed (or half if time) + mark" },
          { subject:"English Lang", paper:"Paper 1", text:"Paper 1 Q2–Q4 timed mini-set" }
        ],
        Friday: [
          { subject:"English Lit", paper:"Paper 1", text:"Timed essay (Shakespeare OR novel) + self-mark checklist" },
          { subject:"Chemistry", paper:"Paper 1", text:"Energy changes + rates exam questions" },
          { subject:"French", paper:"Reading", text:"Reading + translation (accuracy)" }
        ],
        Saturday: [{ subject:"Catch up and review", text:"..." }],
        Sunday: [
          { subject:"Maths", text:"Targeted re-do: 8 hardest questions this week" },
          { subject:"Spaced Review", text:"Memory test: 10 science defs + 10 lit quotes" }
        ]
      }
    },

    // -------------------- W8 --------------------
    {
      id: "w8",
      title: "Week 8: English Lit final push (ready by 27 Apr)",
      dateRange: "20 Apr – 26 Apr 2026",
      days: {
        Monday: [
          { subject:"English Lit", paper:"Paper 1", text:"Shakespeare: theme pack (ambition/love/power etc.) + quotes" },
          { subject:"Maths", text:"Algebra fluency drill (speed + accuracy)" },
          { subject:"Biology", paper:"Paper 1", text:"Paper 1: cells/organisation mixed exam Qs" }
        ],
        Tuesday: [
          { subject:"English Lit", paper:"Paper 1", text:"19th century novel: theme pack + quote bank test" },
          { subject:"Chemistry", paper:"Paper 1", text:"Paper 1 full section timed + mark" },
          { subject:"French", paper:"Speaking", text:"Speaking mock: photo card + follow-ups" }
        ],
        Wednesday: [
          { subject:"English Lit", paper:"Paper 2", text:"Modern text: character/theme paragraphs (timed)" },
          { subject:"Maths", text:"Full Paper timed + mark (focus: method marks)" },
          { subject:"Geography", paper:"Paper 1", text:"Paper 1 practice questions (timed)" }
        ],
        Thursday: [
          { subject:"English Lit", paper:"Paper 2", text:"Poetry: compare 2 poems (structure + evidence)" },
          { subject:"Biology", paper:"Paper 1", text:"Paper 1: infection/bioenergetics 6-mark set" },
          { subject:"Chemistry", paper:"Paper 1", text:"Quantitative recap: moles + conc + required practical notes" }
        ],
        Friday: [
          { subject:"English Lit", paper:"Paper 2", text:"Full timed response (choose weakest paper section) + mark" },
          { subject:"Maths", text:"Hard questions only set (grade 8/9)" },
          { subject:"English Lang", paper:"Paper 2", text:"Paper 2 Q5 plan + intro paragraph practice" }
        ],
        Saturday: [{ subject:"Catch up and review", text:"..." }],
        Sunday: [
          { subject:"Spaced Review", text:"Lit quote test (no notes) + fix missing ones" },
          { subject:"Spaced Review", text:"Redo 5 maths + 5 chem mistakes" }
        ]
      }
    },

    // -------------------- W9 --------------------
    {
      id: "w9",
      title: "Week 9: Biology ready date week (ready by 28 Apr)",
      dateRange: "27 Apr – 3 May 2026",
      days: {
        Monday: [
          { subject:"Biology", paper:"Paper 1", text:"Paper 1 full paper timed + mark + ‘fix list’" },
          { subject:"Maths", text:"Non-calculator skills set (fractions/surds/indices)" },
          { subject:"Geography", paper:"Paper 1", text:"Paper 1: case studies recall + 6-mark practice" }
        ],
        Tuesday: [
          { subject:"Biology", paper:"Paper 1", text:"Cells/organisation: targeted weak areas + exam Qs" },
          { subject:"Chemistry", paper:"Paper 1", text:"Paper 1: bonding/energy/rates mixed Qs" },
          { subject:"French", paper:"Speaking", text:"Speaking: shortest answers → upgraded answers" }
        ],
        Wednesday: [
          { subject:"Biology", paper:"Paper 1", text:"Infection & response: 6-mark + graph/data questions" },
          { subject:"Maths", text:"Full Paper timed + mark" },
          { subject:"English Lang", paper:"Paper 1", text:"Paper 1 Q5 (final polish): structure + accuracy" }
        ],
        Thursday: [
          { subject:"Biology", paper:"Paper 1", text:"Bioenergetics: photosynthesis/respiration + practical focus" },
          { subject:"Chemistry", paper:"Paper 1", text:"Moles/concentration speed drill" },
          { subject:"English Lit", paper:"Paper 2", text:"Light maintenance: poetry quotes + comparisons" }
        ],
        Friday: [
          { subject:"Maths", text:"Targeted redo of paper mistakes (10 questions)" },
          { subject:"Geography", paper:"Paper 1", text:"Paper 1: rivers/coasts/fieldwork questions (timed)" },
          { subject:"French", paper:"Listening", text:"Listening practice (exam-style)" }
        ],
        Saturday: [{ subject:"Catch up and review", text:"..." }],
        Sunday: [
          { subject:"Spaced Review", text:"Bio Paper 1 mini-mock: 30 mins + mark" },
          { subject:"Spaced Review", text:"Maths: 15-question mixed quick-fire" }
        ]
      }
    },

    // -------------------- W10 --------------------
    {
      id: "w10",
      title: "Week 10: Final run-up to May exams (Maths + Chem + Eng Lang)",
      dateRange: "4 May – 10 May 2026",
      days: {
        Monday: [
          { subject:"Chemistry", paper:"Paper 1", text:"Paper 1 full paper timed + mark + fix list" },
          { subject:"Maths", text:"Calculator paper skills: accuracy + setup" },
          { subject:"English Lang", paper:"Paper 1", text:"Paper 1 Q2–Q4 timed + review mark scheme wording" }
        ],
        Tuesday: [
          { subject:"Maths", text:"Full Paper timed + mark (focus: dropping silly errors)" },
          { subject:"Geography", paper:"Paper 1", text:"Paper 1 final recall + 2 six-markers" },
          { subject:"French", paper:"Listening", text:"Listening: high-frequency question types" }
        ],
        Wednesday: [
          { subject:"English Lang", paper:"Paper 2", text:"Paper 2 Q5 full response (timed) + checklist" },
          { subject:"Chemistry", paper:"Paper 1", text:"Quantitative + electrolysis targeted questions" },
          { subject:"Biology", paper:"Paper 1", text:"Paper 1: 6-mark set + required practical blurts" }
        ],
        Thursday: [
          { subject:"Maths", text:"Non-calculator mastery set + formula recall" },
          { subject:"Chemistry", paper:"Paper 1", text:"Bonding/structure-properties final recap (quick test)" },
          { subject:"English Lit", paper:"Paper 2", text:"Light: 20-quote recall test (all components)" }
        ],
        Friday: [
          { subject:"French", paper:"Speaking", text:"Speaking: final polish (best answers, confidence)" },
          { subject:"Maths", text:"Hard questions only (grade 8/9)" },
          { subject:"Spaced Review", text:"Mistake log clean-up: rewrite the 10 biggest fixes" }
        ],
        Saturday: [{ subject:"Catch up and review", text:"..." }],
        Sunday: [
          { subject:"Spaced Review", text:"Mini-maths mock (45 mins) + redo worst 5" },
          { subject:"Spaced Review", text:"Chemistry: 30 mins mixed + mark" }
        ]
      }
    },

    // -------------------- W11 --------------------
    {
      id: "w11",
      title: "Week 11: Exam week (keep it light + sharp)",
      dateRange: "11 May – 17 May 2026",
      days: {
        Monday: [
          { subject:"English Lit", paper:"Paper 1", text:"Final warm-up: 1 essay plan + quote flash test" }
        ],
        Tuesday: [
          { subject:"Biology", paper:"Paper 1", text:"Final warm-up: key practicals + 6-mark structures" }
        ],
        Wednesday: [
          { subject:"Geography", paper:"Paper 1", text:"Final warm-up: case studies + command words" }
        ],
        Thursday: [
          { subject:"Maths", text:"Final warm-up: non-calculator quick-fire (accuracy)" }
        ],
        Friday: [
          { subject:"Chemistry", paper:"Paper 1", text:"Paper 1 warm-up: moles + bonding recap (short)" }
        ],
        Saturday: [{ subject:"Catch up and review", text:"..." }],
        Sunday: [
          { subject:"Spaced Review", text:"Light only: fix any weak spot you noticed in exams" }
        ]
      }
    },

    // -------------------- W12 --------------------
    {
      id: "w12",
      title: "Week 12: Shift toward June cluster (Maths P2 + Physics P1 + Eng Lang + French)",
      dateRange: "18 May – 24 May 2026",
      days: {
        Monday: [
          { subject:"Maths", text:"Paper 2 style: full timed + mark" },
          { subject:"Physics", paper:"Paper 1", text:"Paper 1: electricity/energy mixed exam Qs" },
          { subject:"French", paper:"Listening", text:"Listening paper practice (timed sections)" }
        ],
        Tuesday: [
          { subject:"English Lang", paper:"Paper 1", text:"Paper 1 full timed + mark checklist" },
          { subject:"Chemistry", paper:"Paper 2", text:"Paper 2: organic + equilibria basics exam Qs" },
          { subject:"Maths", text:"Targeted redo of Paper 2 mistakes" }
        ],
        Wednesday: [
          { subject:"Physics", paper:"Paper 1", text:"Paper 1 full timed + mark + fix list" },
          { subject:"Maths", text:"Calculator skills: setup + rounding + units" },
          { subject:"Geography", paper:"Paper 2", text:"Paper 2: urban issues + economic world recap" }
        ],
        Thursday: [
          { subject:"French", paper:"Reading", text:"Reading paper practice + translation" },
          { subject:"Maths", text:"Hard questions only set (grade 8/9)" },
          { subject:"English Lang", paper:"Paper 2", text:"Paper 2 Q5 timed + improvements" }
        ],
        Friday: [
          { subject:"Chemistry", paper:"Paper 2", text:"Paper 2 calculations: energy/rates/conc style practice" },
          { subject:"Biology", paper:"Paper 2", text:"Paper 2 intro: homeostasis basics + questions" },
          { subject:"Maths", text:"Mini-mock (45 mins) + mark" }
        ],
        Saturday: [{ subject:"Catch up and review", text:"..." }],
        Sunday: [
          { subject:"Spaced Review", text:"Redo 10 maths mistakes + 1 physics 6-mark + 1 chem 6-mark" }
        ]
      }
    },

    // -------------------- W13 --------------------
    {
      id: "w13",
      title: "Week 13: Two-week early deadline approaching (Maths P3 focus begins soon)",
      dateRange: "25 May – 31 May 2026",
      days: {
        Monday: [
          { subject:"Maths", text:"Paper 3 style: full timed + mark + fix list" },
          { subject:"Chemistry", paper:"Paper 2", text:"Paper 2: chemical analysis/atmosphere/resources (overview + Qs)" },
          { subject:"Physics", paper:"Paper 2", text:"Paper 2: forces basics + exam questions" }
        ],
        Tuesday: [
          { subject:"Maths", text:"Targeted redo of Paper 3 mistakes (10–15 Qs)" },
          { subject:"French", paper:"Listening/Reading", text:"Listening + reading mixed timed set" },
          { subject:"English Lang", paper:"Paper 2", text:"Paper 2 Q2–Q4 analysis drills" }
        ],
        Wednesday: [
          { subject:"Maths", text:"Hard set: algebra + vectors + trig (grade 8/9)" },
          { subject:"Physics", paper:"Paper 2", text:"Paper 2: magnetism/EM basics OR forces consolidation" },
          { subject:"Geography", paper:"Paper 3", text:"Paper 3: fieldwork skills overview (methods + graphs)" }
        ],
        Thursday: [
          { subject:"Maths", text:"Mini-mock (60 mins) + mark + accuracy focus" },
          { subject:"Chemistry", paper:"Paper 2", text:"Paper 2 calculations drill (moles/conc/energy style)" },
          { subject:"Biology", paper:"Paper 2", text:"Paper 2: hormones/nervous system quick recap" }
        ],
        Friday: [
          { subject:"Maths", text:"Final ‘fix list’ rehearsal: weakest 3 topics" },
          { subject:"Physics", paper:"Paper 2", text:"Paper 2: required practical recall + 6-mark practice" },
          { subject:"French", paper:"Writing", text:"Writing: 150-word task structure + tenses" }
        ],
        Saturday: [{ subject:"Catch up and review", text:"..." }],
        Sunday: [
          { subject:"Spaced Review", text:"Mistake log clean: redo 10 maths + 5 chem + 5 physics" }
        ]
      }
    },

    // -------------------- W14 --------------------
    {
      id: "w14",
      title: "Week 14: Final 2-week-early deadline week (ends Mon 1 Jun)",
      dateRange: "1 Jun – 1 Jun 2026 (deadline day)",
      days: {
        Monday: [
          { subject:"Maths", text:"Final Paper 3 polish: 10 mixed grade 8/9 questions (no notes)" },
          { subject:"Physics", paper:"Paper 2", text:"Final Paper 2 polish: 2 six-markers + required practical blurts" },
          { subject:"Chemistry", paper:"Paper 2", text:"Final Paper 2 polish: 10 mixed questions + mark scheme wording" },
          { subject:"Spaced Review", text:"Confidence check: list top 5 weak points + 1 fix each" }
        ],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
      }
    }
  ]
};