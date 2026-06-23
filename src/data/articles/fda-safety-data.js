// ============================================
// Article: FDA Safety Data
// ============================================

export const fdaSafetyDataArticle = {
  title: 'FDA Breast Implant Safety Data: Post-Approval Studies & MAUDE Reports',
  metaTitle: "FDA Breast Implant Safety Data: Studies & Reports Guide",
  metaDescription: "Review FDA breast implant safety data, post-approval studies, MAUDE reports, labeling updates, safety alerts, and what patients should know.",
  hubId: 'research',
  hubLabel: 'Research & Safety Data',
  hubHref: '/research-and-data/',
  lastReviewed: 'June 2026',
  readTime: '13 min read',
  author: 'Dr. Emily Chen, MD',
  reviewer: 'Dr. Michael Rivera, Board-Certified Plastic Surgeon',

  keyTakeaways: [
    'The FDA requires ongoing post-approval studies (PAS) from all breast implant manufacturers to track long-term safety.',
    'MAUDE (Manufacturer and User Facility Device Experience) is the FDA\'s adverse event reporting database — it tracks complications reported by patients, surgeons, and manufacturers.',
    'FDA post-approval data shows approximately 20–25% of primary augmentation patients require reoperation within 10 years.',
    'Capsular contracture (8–15%), reoperation, and <a href="/breast-implant-rupture/">implant rupture</a> are the most commonly reported complications in FDA data.',
    'In 2019, the FDA mandated a new Breast Implant Patient Decision Checklist and boxed warning for all breast implant labeling.',
    'FDA data should be interpreted carefully — reporting rates don\'t equal true incidence rates, and study designs vary by manufacturer.',
  ],

  safetyNote: 'The FDA provides extensive breast implant safety information at FDA.gov/breastimplants. We encourage all patients to review official FDA materials in addition to our educational content.',

  sections: [
    {
      heading: 'How the FDA Regulates Breast Implants',
      content: `
        <p>Breast implants are <strong>Class III medical devices</strong> — the highest regulatory classification by the FDA. This means they require Premarket Approval (PMA), the most rigorous type of FDA review, involving clinical trial data demonstrating safety and effectiveness.</p>
        <p>After approval, manufacturers must continue collecting safety data through:</p>
      `,
      list: [
        '<strong>Post-Approval Studies (PAS):</strong> FDA-required long-term studies tracking complication rates, patient satisfaction, and device performance.',
        '<strong>Adverse event reporting:</strong> Manufacturers must report serious complications through the MAUDE system.',
        '<strong>Annual reports:</strong> Manufacturers submit annual summaries of safety data.',
        '<strong>Inspections:</strong> FDA conducts facility inspections to ensure manufacturing quality.',
      ],
    },
    {
      heading: 'Post-Approval Study Data',
      content: `
        <p>Each manufacturer conducts FDA-required post-approval studies. Here are the key findings from the major brands:</p>
      `,
      table: {
        headers: ['Complication', 'Allergan (10yr)', 'Mentor (10yr)', 'Sientra (6yr)'],
        rows: [
          ['<strong>Capsular Contracture (Baker III/IV)</strong>', '8.8%', '12.1%', '5.0%'],
          ['<strong>Reoperation (any cause)</strong>', '24.2%', '26.3%', '16.5%'],
          ['<strong>Implant Removal</strong>', '15.0%', '14.7%', '8.0%'],
          ['<strong>Rupture (MRI)</strong>', '10.1%', '13.3%', '5.6%'],
          ['<strong>Infection</strong>', '1.3%', '1.1%', '0.4%'],
          ['<strong>Asymmetry</strong>', '6.5%', '7.2%', '4.5%'],
          ['<strong>Patient Satisfaction</strong>', '~95%', '~97%', '~95%'],
        ],
        caption: 'Major complication rates from FDA core studies. Note: Sientra data is 6-year; Allergan and Mentor are 10-year. Study methodologies and patient populations vary — direct comparisons require caution.',
      },
      callout: {
        type: 'info',
        icon: '📊',
        title: 'Interpreting the Data',
        text: 'Complication rates from different manufacturers cannot be directly compared because study populations, definitions, follow-up methods, and time periods differ. These rates represent general ranges rather than precise comparative rankings. A patient\'s individual risk depends on their anatomy, surgeon technique, implant type, and other factors.',
      },
    },
    {
      heading: 'MAUDE Database',
      content: `
        <p>The <strong>MAUDE (Manufacturer and User Facility Device Experience)</strong> database is the FDA's publicly accessible repository of adverse event reports for medical devices, including breast implants.</p>
      `,
      subsections: [
        {
          heading: 'What MAUDE Contains',
          list: [
            '<strong>Mandatory manufacturer reports:</strong> Manufacturers must report serious injuries, malfunctions, and deaths.',
            '<strong>Voluntary reports:</strong> Patients and healthcare providers can voluntarily submit reports.',
            '<strong>Facility reports:</strong> Hospitals and outpatient centers must report device-related deaths and serious injuries.',
          ],
        },
        {
          heading: 'Important Limitations',
          list: [
            '<strong>Underreporting:</strong> Voluntary reports almost certainly undercount actual complications — many patients don\'t file reports.',
            '<strong>No denominator:</strong> MAUDE reports the number of events but not the total number of implanted devices, making true incidence rates impossible to calculate from MAUDE alone.',
            '<strong>Duplicates:</strong> The same event may be reported multiple times by different parties.',
            '<strong>No causation:</strong> A report of an adverse event does not prove the implant caused the event.',
            '<strong>Report quality varies:</strong> Reports range from detailed clinical narratives to minimal patient descriptions.',
          ],
        },
      ],
    },
    {
      heading: 'Major FDA Safety Communications',
      content: `<p>The FDA has issued several important safety communications about breast implants:</p>`,
      table: {
        headers: ['Year', 'Communication', 'Key Action'],
        rows: [
          ['<strong>1992</strong>', 'Silicone gel moratorium', 'FDA restricted <a href="/silicone-breast-implants/">silicone gel implant</a>s to clinical studies due to safety concerns'],
          ['<strong>2006</strong>', 'Silicone gel re-approval', 'FDA approved silicone gel implants (Allergan, Mentor) after extensive review of clinical data'],
          ['<strong>2011</strong>', 'MRI screening recommendation', 'FDA recommended MRI screening for silicone implant rupture at 3 years, then every 2 years'],
          ['<strong>2019</strong>', 'BIOCELL textured recall', 'FDA requested Allergan recall all BIOCELL textured products due to <a href="/bia-alcl/">BIA-ALCL</a>'],
          ['<strong>2019</strong>', 'Boxed warning + Patient Checklist', 'FDA mandated boxed warning on all breast implant labeling and a new Patient Decision Checklist'],
          ['<strong>2020</strong>', 'Updated MRI recommendation', 'FDA updated screening to recommend initial imaging at 5–6 years, then every 2–3 years'],
          ['<strong>2021</strong>', 'BIA-ALCL letter to providers', 'FDA updated provider recommendations for monitoring and diagnosis of BIA-ALCL'],
        ],
        caption: 'Timeline of major FDA breast implant safety communications.',
      },
    },
    {
      heading: 'The Patient Decision Checklist',
      content: `
        <p>Since October 2020, the FDA requires that all patients receive and sign a <strong>Patient Decision Checklist</strong> before breast implant surgery. This checklist ensures patients are informed about:</p>
      `,
      list: [
        'Breast implants are not lifetime devices — reoperation is likely at some point.',
        'Possible complications including <a href="/capsular-contracture/">capsular contracture</a>, rupture, BIA-ALCL, BII, infection, and pain.',
        'The importance of long-term monitoring including imaging to detect silent rupture.',
        'BIA-ALCL risk and its association with textured implants.',
        'Reports of systemic symptoms (Breast Implant Illness) and the current state of research.',
        'The need for an MRI or ultrasound to monitor implant integrity.',
        'The patient\'s responsibility to report problems through MedWatch.',
      ],
    },
    {
      heading: 'Key Findings from FDA Data',
      content: `<p>What the aggregate FDA data tells us about breast implant safety:</p>`,
      subsections: [
        {
          heading: 'What the Data Shows',
          list: [
            '<strong>Breast implants are not lifetime devices:</strong> The majority of patients will require at least one additional surgery over their lifetime.',
            '<strong>Most patients are satisfied:</strong> Despite complication rates, 93–97% of patients report satisfaction with their breast implants.',
            '<strong>Complication rates increase over time:</strong> The longer implants are in place, the higher the cumulative risk of complications.',
            '<strong>Capsular contracture is the most common complication:</strong> Affecting 8–15% of augmentation patients within 10 years.',
            '<strong>Silent rupture is common:</strong> Many silicone gel implant ruptures are asymptomatic and only detected by MRI.',
            '<strong>BIA-ALCL is rare but real:</strong> Confirmed association with textured implants, with the highest risk linked to macro-textured surfaces.',
          ],
        },
        {
          heading: 'What Remains Uncertain',
          list: [
            '<strong>Breast Implant Illness:</strong> The FDA acknowledges patient reports but notes a lack of consistent diagnostic criteria or established causal mechanism.',
            '<strong>Very long-term outcomes:</strong> Data beyond 10–15 years is limited for current-generation implants.',
            '<strong>Autoimmune associations:</strong> Epidemiological studies show mixed results on whether implants increase autoimmune disease risk.',
            '<strong>Smooth implant BIA-ALCL risk:</strong> The risk with smooth implants remains very poorly defined due to rarity.',
          ],
        },
      ],
    },
  ],

  faqs: [
    {
      question: 'Where can I find FDA breast implant safety data?',
      answer: 'The FDA maintains a comprehensive breast implant information page at FDA.gov/breastimplants. This includes manufacturer-specific data summaries, safety communications, the Patient Decision Checklist, MAUDE database access, and educational materials for patients and providers.',
    },
    {
      question: 'Should I get regular MRIs to check my silicone implants?',
      answer: 'The FDA recommends initial imaging (MRI or ultrasound) at 5–6 years after silicone implant surgery, then every 2–3 years thereafter, to screen for silent rupture. MRI is more sensitive than ultrasound for detecting silicone rupture, but high-resolution ultrasound performed by an experienced technician is an acceptable alternative. Discuss the best screening schedule with your surgeon.',
    },
    {
      question: 'What is the reoperation rate for breast implants?',
      answer: 'FDA post-approval studies report reoperation rates of approximately 20–26% within 10 years for primary breast augmentation patients. Reoperation doesn\'t necessarily mean a complication — it includes elective size changes, concurrent procedures, and preventive exchanges. However, it underscores that breast implants are not "one and done" devices.',
    },
  ],

  references: [
    {
      authors: 'U.S. Food and Drug Administration',
      title: 'Breast Implants: Reports, Studies, and Other Information',
      journal: 'FDA.gov',
      year: '2025',
      url: 'https://www.fda.gov/medical-devices/breast-implants/breast-implants-reports-studies-and-other-information',
    },
    {
      authors: 'U.S. Food and Drug Administration',
      title: 'Breast Implant Patient Decision Checklist',
      journal: 'FDA Medical Devices',
      year: '2020',
      url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/breast-implants-certain-labeling-recommendations-improve-patient-communication',
    },
    {
      authors: 'U.S. Food and Drug Administration',
      title: 'FDA Update on the Safety of Silicone Gel-Filled Breast Implants',
      journal: 'FDA Safety Report',
      year: '2024',
      url: 'https://www.fda.gov/medical-devices/breast-implants/update-safety-silicone-gel-filled-breast-implants-2011-executive-summary',
    },
  ],

  relatedArticles: [
    { title: 'Long-Term Studies', desc: 'Manufacturer Core Study results.', href: '/breast-implant-long-term-studies/', icon: '📈' },
    { title: 'BIA-ALCL', desc: 'The data behind the lymphoma risk.', href: '/bia-alcl/', icon: '⚠️' },
    { title: 'Breast Implant Illness', desc: 'Current research on systemic symptoms.', href: '/breast-implant-illness/', icon: '🧠' },
    { title: 'Emerging Research', desc: 'What\'s next in implant science.', href: '/emerging-research-in-breast-implant/', icon: '🔬' },
  ],
};
