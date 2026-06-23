// ============================================
// Article: Insurance Coverage
// ============================================

export const insuranceCoverageArticle = {
  title: 'Insurance Coverage for Breast Implants: What\'s Covered & What\'s Not',
  metaTitle: "Insurance Coverage for Breast Implants: Rules & Tips",
  metaDescription: "Learn when insurance may cover breast implants, including reconstruction, complications, revision surgery, WHCRA rights, and documentation tips.",
  hubId: 'costs-financing',
  hubLabel: 'Costs & Financing',
  hubHref: '/costs-financing/',
  lastReviewed: 'June 2026',
  readTime: '9 min read',
  author: 'Dr. Sarah Mitchell, MD',
  reviewer: 'Dr. James Thornton, Board-Certified Plastic Surgeon',

  keyTakeaways: [
    'Cosmetic breast augmentation is NOT covered by health insurance — it is considered an elective procedure.',
    'Breast reconstruction after mastectomy IS covered by federal law (Women\'s Health and Cancer Rights Act of 1998).',
    'WHCRA coverage includes implant reconstruction, nipple reconstruction, surgery on the opposite breast for symmetry, and prostheses.',
    'Some insurance plans cover <a href="/breast-implant-removal/">implant removal</a> for documented medical complications (e.g., <a href="/bia-alcl/">BIA-ALCL</a>, severe <a href="/capsular-contracture/">capsular contracture</a>, rupture causing symptoms).',
    'Correction of significant congenital deformities (e.g., tuberous breasts, Poland syndrome) may qualify for insurance coverage.',
    'Always obtain pre-authorization in writing before surgery to confirm coverage — verbal assurances are not binding.',
  ],

  sections: [
    {
      heading: 'Cosmetic vs. Reconstructive: The Insurance Distinction',
      content: `
        <p>Insurance companies draw a clear line between <strong>cosmetic</strong> and <strong>reconstructive</strong> breast surgery:</p>
      `,
      table: {
        headers: ['Category', 'Definition', 'Insurance Coverage'],
        rows: [
          ['<strong>Cosmetic</strong>', 'Surgery to enhance appearance when no medical condition exists', 'Not covered'],
          ['<strong>Reconstructive</strong>', 'Surgery to restore normal appearance after disease, trauma, or congenital defect', 'Typically covered'],
        ],
        caption: 'The cosmetic vs. reconstructive distinction determines insurance coverage.',
      },
      callout: {
        type: 'info',
        icon: '💡',
        title: 'Key Insight',
        text: 'The same procedure (e.g., placing breast implants) can be either cosmetic or reconstructive depending on the medical context. A breast augmentation after mastectomy is reconstructive; the same surgery to increase breast size for aesthetic reasons is cosmetic.',
      },
    },
    {
      heading: 'The Women\'s Health and Cancer Rights Act (WHCRA)',
      content: `
        <p>The <strong>Women\'s Health and Cancer Rights Act of 1998 (WHCRA)</strong> is a federal law that requires health insurers covering mastectomy to also cover <a href="/breast-reconstruction/">breast reconstruction</a>. This is the most important insurance law relating to breast implants.</p>
      `,
      subsections: [
        {
          heading: 'What WHCRA Requires',
          list: [
            '<strong>Breast reconstruction:</strong> Surgery to rebuild the breast mound using implants and/or flap techniques.',
            '<strong>Surgery on the other breast:</strong> Procedures to achieve symmetry with the reconstructed breast (augmentation, reduction, or lift).',
            '<strong>Prostheses:</strong> External breast prostheses (forms) and mastectomy bras.',
            '<strong>Treatment of complications:</strong> Coverage for complications arising from mastectomy, including lymphedema.',
          ],
        },
        {
          heading: 'Who Is Covered',
          list: [
            'All group health plans that cover mastectomy (both employer-sponsored and individual market plans).',
            'Coverage applies regardless of when the mastectomy was performed — even if it occurred years before reconstruction.',
            'Self-insured church plans and certain government plans may be exempt.',
          ],
        },
        {
          heading: 'Important Limitations',
          list: [
            'Deductibles and copays still apply — WHCRA requires coverage, not free care.',
            'Network restrictions apply — using in-network providers saves significantly.',
            'Pre-authorization is typically required before reconstruction surgery.',
            'The specific reconstruction method (implant vs. flap) may influence out-of-pocket costs.',
          ],
        },
      ],
    },
    {
      heading: 'Implant Removal for Medical Complications',
      content: `
        <p>Insurance coverage for implant removal ("explant") depends on the medical necessity:</p>
      `,
      table: {
        headers: ['Situation', 'Coverage Likelihood', 'Requirements'],
        rows: [
          ['<strong>BIA-ALCL diagnosis</strong>', 'Highly likely', 'Pathology confirmation and surgeon documentation'],
          ['<strong>Silicone rupture with symptoms</strong>', 'Often covered', 'MRI-confirmed rupture with documented symptoms'],
          ['<strong>Severe capsular contracture (Baker III-IV)</strong>', 'Sometimes covered', 'Failed conservative treatment, documented functional impairment'],
          ['<strong>Infection requiring removal</strong>', 'Usually covered', 'Active infection documented by treating physician'],
          ['<strong>Breast Implant Illness (BII)</strong>', 'Rarely covered', 'No established diagnostic criteria — insurance companies typically deny'],
          ['<strong>Elective removal (cosmetic preference)</strong>', 'Not covered', 'Considered cosmetic regardless of reason'],
        ],
        caption: 'Coverage varies by insurance plan. Always verify with your specific insurer.',
      },
    },
    {
      heading: 'Congenital Conditions That May Be Covered',
      content: `
        <p>Certain congenital breast conditions may qualify breast surgery (including augmentation) as reconstructive rather than cosmetic:</p>
      `,
      list: [
        '<strong>Tuberous breast deformity:</strong> Constricted breast base with herniated tissue — severity determines coverage likelihood.',
        '<strong>Poland syndrome:</strong> Congenital absence of chest muscle and breast tissue on one side.',
        '<strong>Severe asymmetry:</strong> Greater than 1–2 cup size difference may qualify as reconstructive.',
        '<strong>Pectus excavatum:</strong> Severe chest wall deformity affecting breast appearance.',
        '<strong>Amastia/Athelia:</strong> Congenital absence of breast tissue or nipple.',
      ],
      callout: {
        type: 'info',
        icon: '📋',
        title: 'Documentation Is Key',
        text: 'For congenital conditions, thorough documentation from your surgeon — including photographs, measurements, functional impact assessment, and medical necessity letters — significantly improves the chances of insurance approval. Many initial denials are overturned on appeal with proper documentation.',
      },
    },
    {
      heading: 'How to Navigate Insurance for Breast Surgery',
      content: `
        <p>If you believe your breast procedure may qualify for insurance coverage, follow these steps:</p>
      `,
      list: [
        '<strong>1. Get your diagnosis documented:</strong> Have your surgeon clearly document the medical condition with CPT codes that indicate a reconstructive procedure.',
        '<strong>2. Request pre-authorization:</strong> Before scheduling surgery, submit a pre-authorization request to your insurance company with supporting documentation.',
        '<strong>3. Get it in writing:</strong> Verbal approvals are not binding. Obtain written confirmation of coverage, including which specific procedures are authorized.',
        '<strong>4. Understand your out-of-pocket costs:</strong> Even covered procedures involve deductibles, copays, and coinsurance. Know your financial responsibility before surgery.',
        '<strong>5. Use in-network providers:</strong> Your surgeon, anesthesiologist, and facility should all be in-network to minimize costs.',
        '<strong>6. Appeal denials:</strong> Insurance denials can be appealed — often successfully with additional documentation. Your surgeon\'s office can usually help with the appeals process.',
        '<strong>7. Contact a patient advocate:</strong> If navigating insurance is overwhelming, hospital patient advocates or billing specialists can assist.',
      ],
    },
    {
      heading: 'Tax Deductions',
      content: `
        <p>While cosmetic breast augmentation is <strong>not tax-deductible</strong>, medically necessary breast procedures may qualify:</p>
      `,
      list: [
        'Reconstructive surgery after mastectomy is tax-deductible as a medical expense.',
        'Correction of congenital deformities may qualify as a medical expense.',
        'Medical expenses exceeding 7.5% of your adjusted gross income (AGI) can be itemized on federal taxes.',
        'Travel costs related to covered medical procedures (mileage, lodging) may also be deductible.',
        'Consult a tax professional for guidance specific to your situation.',
      ],
    },
  ],

  faqs: [
    {
      question: 'Is breast augmentation ever covered by insurance?',
      answer: 'Cosmetic breast augmentation is not covered. However, breast implant placement for reconstruction after mastectomy is covered by federal law (WHCRA). Correction of congenital deformities and some implant removals for medical complications may also be covered depending on your plan and documentation.',
    },
    {
      question: 'Can I get insurance to cover implant removal for Breast Implant Illness (BII)?',
      answer: 'This is challenging because BII does not have established diagnostic criteria recognized by most insurance companies. Coverage for BII-related explant is typically denied. Some patients have succeeded on appeal by documenting specific symptoms, specialist evaluations, and failed conservative treatments. Having a surgeon who can articulate medical necessity is crucial.',
    },
    {
      question: 'Does insurance cover revision surgery for cosmetic implants?',
      answer: 'Generally no — if the original augmentation was cosmetic, most insurance companies consider revision surgery cosmetic as well. Exceptions may apply if a documented medical complication (rupture, infection, BIA-ALCL) necessitates the revision. Always verify with your specific insurance plan.',
    },
  ],

  references: [
    {
      authors: 'U.S. Department of Labor',
      title: 'Women\'s Health and Cancer Rights Act of 1998',
      journal: 'Federal Law',
      year: '1998',
      url: 'https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/whcra',
    },
    {
      authors: 'Centers for Medicare & Medicaid Services',
      title: 'What Marketplace Health Insurance Plans Cover',
      journal: 'CMS.gov',
      year: '2024',
      url: 'https://www.healthcare.gov/coverage/what-marketplace-plans-cover/',
    },
    {
      authors: 'American Society of Plastic Surgeons',
      title: 'Insurance Coverage for Plastic Surgery',
      journal: 'ASPS Practice Management',
      year: '2024',
      url: 'https://www.plasticsurgery.org/patient-safety',
    },
  ],

  relatedArticles: [
    { title: 'Breast Implant Cost', desc: 'Full cost breakdown and averages.', href: '/breast-implant-cost/', icon: '💰' },
    { title: 'Financing Options', desc: 'CareCredit, loans, and payment plans.', href: '/breast-implant-financing-options/', icon: '💳' },
    { title: 'Breast Implant Illness', desc: 'BII symptoms and the explant decision.', href: '/breast-implant-illness/', icon: '🧠' },
    { title: 'BIA-ALCL', desc: 'Implant-associated lymphoma and treatment.', href: '/bia-alcl/', icon: '⚠️' },
  ],
};
