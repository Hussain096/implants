// ============================================
// Article: Breast Implant Rupture
// ============================================

export const ruptureArticle = {
  title: 'Breast Implant Rupture: Detection, Symptoms & What to Do',
  metaTitle: "Breast Implant Rupture: Symptoms, MRI, Treatment Guide",
  metaDescription: "Learn breast implant rupture symptoms, saline versus silicone differences, silent rupture screening, MRI/ultrasound, and treatment options. Includes key tips.",
  hubId: 'risks-complications',
  hubLabel: 'Risks & Safety',
  hubHref: '/breast-implants-risks-and-complications/',
  lastReviewed: 'June 2026',
  readTime: '11 min read',
  author: 'Dr. Emily Chen, MD',
  reviewer: 'Dr. James Park, Board-Certified Plastic Surgeon',

  keyTakeaways: [
    'Saline rupture is immediately visible — the breast deflates as saline is absorbed by the body.',
    'Silicone rupture can be "silent" — no visible change, detectable only by MRI or ultrasound.',
    'The FDA recommends MRI/ultrasound screening for silicone implants starting 5–6 years post-surgery.',
    'Implant rupture rates are approximately 7–15% at 10 years, depending on implant type and generation.',
    'Rupture is not a medical emergency, but should be evaluated and addressed by your surgeon.',
    'Treatment typically involves removal and replacement of the ruptured implant.',
  ],

  safetyNote: 'If you notice sudden deflation (saline) or changes in breast shape, firmness, or size, contact your plastic surgeon for evaluation. While not a medical emergency, timely assessment is important.',

  sections: [
    {
      heading: 'Understanding Implant Rupture',
      content: `
        <p>Breast implant rupture occurs when the <strong>outer shell of the implant develops a tear or hole</strong>, allowing the fill material to escape. Because saline and silicone implants have fundamentally different fill materials, rupture presents very differently for each type.</p>
        <p>All breast implants are subject to potential shell failure over time. The FDA emphasizes that implants are <strong>not lifetime devices</strong> — the longer you have them, the higher the probability of eventual rupture.</p>
      `,
    },
    {
      heading: 'Saline vs. Silicone Rupture',
      table: {
        headers: ['Factor', 'Saline Rupture', 'Silicone Rupture'],
        rows: [
          ['<strong>Detection</strong>', 'Immediate — visible deflation', 'Often silent — may have no symptoms'],
          ['<strong>Timeframe to notice</strong>', '24–48 hours', 'Months to years (or never without imaging)'],
          ['<strong>What happens to fill</strong>', 'Saline absorbed harmlessly by body', 'Gel usually stays in or around capsule'],
          ['<strong>Health concern</strong>', 'Minimal — saline is biocompatible', 'Generally low — but gel migration possible over time'],
          ['<strong>Imaging required</strong>', 'Not typically — deflation is obvious', 'Yes — MRI or ultrasound needed'],
          ['<strong>Urgency</strong>', 'Non-emergency but schedule replacement', 'Non-emergency but evaluate and plan removal/replacement'],
          ['<strong>Cost of detection</strong>', 'None — self-evident', '$500–$2,000 per MRI screening'],
        ],
        caption: 'How saline and silicone rupture differ.',
      },
    },
    {
      heading: 'Saline Implant Rupture (Deflation)',
      content: `
        <p>When a saline implant ruptures, the <strong>sterile saltwater leaks out through the shell breach</strong> and is naturally absorbed by your body — the same way your body processes any IV saline. The affected breast will visibly decrease in size, usually within 24–48 hours.</p>
        <p>This is actually a significant safety advantage of saline implants: you know immediately when something is wrong.</p>
      `,
      subsections: [
        {
          heading: 'Signs of Saline Deflation',
          list: [
            'Obvious decrease in breast size on the affected side',
            'Breast asymmetry that wasn\'t previously present',
            'The implant may feel "empty" or wrinkled',
            'Deflation can be gradual (slow leak) or sudden (complete rupture)',
          ],
        },
      ],
    },
    {
      heading: 'Silicone Implant Rupture (Silent Rupture)',
      content: `
        <p><strong>"Silent rupture"</strong> is the hallmark concern of silicone gel implants. Because the cohesive gel tends to stay within or around the scar tissue capsule, there may be <strong>no visible or palpable change</strong> even after the shell has failed.</p>
      `,
      subsections: [
        {
          heading: 'Types of Silicone Rupture',
          list: [
            '<strong>Intracapsular rupture:</strong> The shell has a breach, but the gel remains contained within the scar tissue capsule. Most common type. Often has no symptoms.',
            '<strong>Extracapsular rupture:</strong> Gel has migrated outside the capsule into surrounding tissue. Less common but more concerning. May cause lumps, pain, or inflammation.',
            '<strong>Gel bleed:</strong> Microscopic amounts of silicone slowly permeate through an intact shell. Normal — occurs to some degree with all silicone implants and is not considered "rupture."',
          ],
        },
        {
          heading: 'Signs That May Indicate Rupture',
          list: [
            'Change in breast shape or contour',
            'Increasing firmness or hardening (capsular contracture)',
            'Pain, swelling, or tenderness',
            'Change in breast size',
            'Lumps in the breast or armpit (possible gel migration)',
            'Often: <strong>no symptoms at all</strong> (hence "silent")',
          ],
        },
      ],
      callout: {
        type: 'warning',
        icon: '🔍',
        title: 'FDA Screening Recommendations for Silicone',
        text: 'First MRI or ultrasound at 5–6 years post-surgery, then every 2–3 years thereafter. Ultrasound by an experienced technologist is now an accepted alternative to MRI. Any time you notice changes, imaging should be performed regardless of schedule.',
      },
    },
    {
      heading: 'What Causes Rupture?',
      content: `<p>Several factors contribute to implant shell failure:</p>`,
      subsections: [
        {
          heading: 'Common Causes',
          list: [
            '<strong>Age/wear:</strong> The most common cause. Silicone elastomer degrades over years of continuous flexing and body movement.',
            '<strong>Fold flaw failure:</strong> Repeated folding at the same point in the shell (common in underfilled implants) creates stress lines that eventually fail.',
            '<strong>Compression injury:</strong> Closed capsulotomy (manual squeezing — no longer recommended) can rupture implants.',
            '<strong>Surgical damage:</strong> Rare — accidental needle puncture or instrument damage during the original or subsequent surgery.',
            '<strong>Mammogram compression:</strong> Very rare with modern technique (Eklund displacement method), but was a concern with older implant shells.',
            '<strong>Trauma:</strong> Significant chest trauma (e.g., car accident) can damage implants, though this is uncommon.',
            '<strong>Manufacturing defect:</strong> Rare with modern quality control.',
          ],
        },
      ],
    },
    {
      heading: 'Rupture Rates by Type and Time',
      table: {
        headers: ['Implant Type', '5-Year Rate', '10-Year Rate', '15+ Year Rate'],
        rows: [
          ['<strong>Saline (modern)</strong>', '3–5%', '7–10%', '15–20%'],
          ['<strong>Silicone Gel (5th gen)</strong>', '2–5%', '8–17%', '15–25%'],
          ['<strong>Gummy Bear (form-stable)</strong>', '1–3%', '5–10%', 'Limited data'],
          ['<strong>Structured Saline</strong>', '1–3%', 'Limited data', 'Limited data'],
        ],
        caption: 'Approximate rupture rates by implant type (based on manufacturer data and post-approval studies). Rates increase with implant age.',
      },
    },
    {
      heading: 'Treatment Options',
      content: `<p>When rupture is confirmed or suspected:</p>`,
      subsections: [
        {
          heading: 'Standard Treatment',
          list: [
            '<strong>Implant removal:</strong> The ruptured implant is surgically removed.',
            '<strong>Capsulectomy:</strong> The surrounding scar tissue capsule is typically removed, especially for silicone rupture (to remove any escaped gel).',
            '<strong>Replacement:</strong> Most patients choose to have a new implant placed during the same surgery.',
            '<strong>No replacement:</strong> Some patients opt not to replace the implant (explantation). A breast lift may be recommended to address loose skin.',
          ],
        },
        {
          heading: 'Warranty Coverage',
          content: `<p>Most manufacturers provide warranty coverage for rupture:</p>`,
          list: [
            '<strong>Lifetime implant replacement:</strong> Most brands offer free replacement implants for confirmed rupture.',
            '<strong>Financial assistance:</strong> $1,200–$3,500 toward surgical costs (varies by manufacturer and warranty tier).',
            '<strong>Requirements:</strong> Must register the implant with the manufacturer (typically within 90 days of surgery).',
            '<strong>Limitations:</strong> Warranty covers the implant and some costs — not the full surgical fee.',
          ],
        },
      ],
    },
  ],

  faqs: [
    {
      question: 'Is a ruptured breast implant dangerous?',
      answer: 'A ruptured implant is generally not a medical emergency. Saline is harmlessly absorbed by the body. Silicone gel typically stays contained within the capsule. However, rupture should be addressed — undetected silicone rupture can lead to gel migration, capsular contracture, or inflammation over time. Contact your surgeon for evaluation.',
    },
    {
      question: 'How do I know if my silicone implant has ruptured?',
      answer: 'You may not know — that\'s why it\'s called "silent rupture." The FDA recommends MRI or ultrasound screening starting 5–6 years after surgery. Signs that may (or may not) indicate rupture include changes in shape, firmness, size, or pain. Many ruptures are only discovered during routine screening.',
    },
    {
      question: 'Does insurance cover rupture surgery?',
      answer: 'Coverage varies. Insurance may cover removal of a ruptured implant if it\'s causing medical symptoms, especially for reconstruction implants. Replacement is typically considered cosmetic and not covered. Manufacturer warranties provide partial financial assistance. Check with both your insurer and implant warranty.',
    },
  ],

  references: [
    {
      authors: 'Holmich LR, Friis S, Fryzek JP, et al.',
      title: 'Incidence of silicone breast implant rupture',
      journal: 'Archives of Surgery',
      year: '2003',
      url: 'https://pubmed.ncbi.nlm.nih.gov/?term=%22Incidence%20of%20silicone%20breast%20implant%20rupture%22',
    },
    {
      authors: 'U.S. Food and Drug Administration',
      title: 'Breast Implant Rupture Screening Recommendations',
      journal: 'FDA Guidance',
      year: '2022',
      url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/breast-implants-certain-labeling-recommendations-improve-patient-communication',
    },
  ],

  relatedArticles: [
    { title: 'Capsular Contracture', desc: 'Most common implant complication.', href: '/capsular-contracture/', icon: '🔴' },
    { title: 'Saline vs. Silicone', desc: 'How rupture differs by type.', href: '/saline-vs-silicone-implants/', icon: '⚖️' },
    { title: 'Brands & Warranties', desc: 'Compare manufacturer coverage.', href: '/breast-implant-brands-comparison/', icon: '🏭' },
    { title: 'Breast Implant Illness', desc: 'Systemic symptoms research.', href: '/breast-implant-illness/', icon: '🧠' },
  ],
};
