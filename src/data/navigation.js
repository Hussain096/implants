// ============================================
// Navigation & Site Structure Data
// ============================================

export const siloHubs = [
  {
    id: 'implant-types',
    label: 'Implant Types',
    href: '/breast-implant-types/',
    icon: '🔬',
    description: 'Compare saline, silicone, gummy bear, and structured implant options.',
    children: [
      { label: 'Saline Implants', href: '/saline-breast-implants/', tag: 'Guide' },
      { label: 'Silicone Implants', href: '/silicone-breast-implants/', tag: 'Guide' },
      { label: 'Gummy Bear Implants', href: '/gummy-bear-implants/', tag: 'Guide' },
      { label: 'Structured Saline', href: '/structured-saline-implants/', tag: 'Guide' },
      { label: 'Saline vs. Silicone', href: '/saline-vs-silicone-implants/', tag: 'Comparison' },
    ]
  },
  {
    id: 'shapes-sizes',
    label: 'Shapes & Sizes',
    href: '/shapes-and-sizes/',
    icon: '📐',
    description: 'Understand profiles, projections, and choosing the right size.',
    children: [
      { label: 'Shapes & Profiles Guide', href: '/breast-implants-shapes/', tag: 'Guide' },
      { label: 'CC Size Chart', href: '/breast-implants-cc-size-chart/', tag: 'Tool' },
      { label: 'Round vs. Teardrop', href: '/round-vs-teardrop-implants/', tag: 'Comparison' },
      { label: 'Implant Profiles', href: '/breast-implant-profiles/', tag: 'Guide' },
    ]
  },
  {
    id: 'procedure',
    label: 'Procedure',
    href: '/breast-implant-procedures/',
    icon: '🏥',
    description: 'Everything about the surgery from consultation to recovery.',
    children: [
      { label: 'Breast Augmentation Surgery', href: '/breast-augmentation-surgery/', tag: 'Guide' },
      { label: 'Breast Lift (Mastopexy)', href: '/breast-lift/', tag: 'Guide' },
      { label: 'Breast Lift with Augmentation', href: '/breast-lift-with-augmentation/', tag: 'Guide' },
      { label: 'Breast Implant Placement', href: '/breast-implant-placement/', tag: 'Guide' },
      { label: 'Incision Types', href: '/breast-implant-incision-types/', tag: 'Guide' },
      { label: 'Recovery Timeline', href: '/breast-augmentation-recovery-timeline/', tag: 'Guide' },
      { label: 'Implant Removal (Explant)', href: '/breast-implant-removal/', tag: 'Guide' },
      { label: 'Breast Reconstruction', href: '/breast-reconstruction/', tag: 'Guide' },
      { label: 'Questions for Your Surgeon', href: '/questions-for-surgeon/', tag: 'Tool' },
    ]
  },
  {
    id: 'costs-financing',
    label: 'Costs & Financing',
    href: '/costs-financing/',
    icon: '💰',
    description: 'Prices, insurance, financing, and hidden costs explained.',
    children: [
      { label: 'Breast Implant Cost', href: '/breast-implant-cost/', tag: 'Guide' },
      { label: 'Financing Options', href: '/breast-implant-financing-options/', tag: 'Guide' },
      { label: 'Insurance Coverage', href: '/insurance-coverage-for-breast-implants/', tag: 'Guide' },
    ]
  },
  {
    id: 'risks-complications',
    label: 'Risks',
    href: '/breast-implants-risks-and-complications/',
    icon: '⚠️',
    description: 'Evidence-based information on complications and safety data.',
    children: [
      { label: 'Capsular Contracture', href: '/capsular-contracture/', tag: 'Guide' },
      { label: 'Implant Rupture', href: '/breast-implant-rupture/', tag: 'Guide' },
      { label: 'Breast Implant Illness (BII)', href: '/breast-implant-illness/', tag: 'Guide' },
      { label: 'BIA-ALCL', href: '/bia-alcl/', tag: 'Guide' },
      { label: 'Infection', href: '/breast-implant-infection/', tag: 'Guide' },
    ]
  },
  {
    id: 'brands',
    label: 'Brands',
    href: '/breast-implant-brands/',
    icon: '🏷️',
    description: 'FDA-approved manufacturers, product lines, and warranty comparison.',
    children: [
      { label: 'Brand Comparison Guide', href: '/breast-implant-brands-comparison/', tag: 'Comparison' },
      { label: 'Allergan / Natrelle', href: '/allergan/', tag: 'Brand' },
      { label: 'Mentor', href: '/mentor/', tag: 'Brand' },
      { label: 'Sientra', href: '/sientra/', tag: 'Brand' },
      { label: 'Motiva', href: '/motiva/', tag: 'Brand' },
    ]
  },
  {
    id: 'alternatives',
    label: 'Alternatives',
    href: '/breast-implants-alternatives/',
    icon: '🌿',
    description: 'Fat transfer, composite augmentation, and non-surgical options.',
    children: [
      { label: 'Fat Transfer Augmentation', href: '/fat-transfer-breast-augmentation/', tag: 'Guide' },
      { label: 'Composite Augmentation', href: '/composite-breast-augmentation/', tag: 'Guide' },
      { label: 'Non-Surgical Options', href: '/non-surgical-options/', tag: 'Guide' },
    ]
  },
  {
    id: 'research',
    label: 'Research',
    href: '/research-and-data/',
    icon: '📚',
    description: 'Clinical studies, FDA data, and long-term outcomes.',
    children: [
      { label: 'FDA Safety Data', href: '/fda-breast-implant-safety-data/', tag: 'Data' },
      { label: 'Long-Term Studies', href: '/breast-implant-long-term-studies/', tag: 'Data' },
      { label: 'Emerging Research', href: '/emerging-research-in-breast-implant/', tag: 'Data' },
    ]
  }
];

export const governanceLinks = [
  { label: 'About Us', href: '/about/' },
  { label: 'Medical Review Policy', href: '/medical-review-policy/' },
  { label: 'Editorial Policy', href: '/editorial-policy/' },
  { label: 'Our Reviewers', href: '/medical-reviewers/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Use', href: '/terms/' },
  { label: 'Medical Disclaimer', href: '/medical-disclaimer/' },
];

export const patientTools = [
  { label: 'Patient Guides', href: '/patient-guides/', icon: '📖' },
  { label: 'Questions for Your Surgeon', href: '/questions-for-surgeon/', icon: '❓' },
  { label: 'FDA Pre-Surgery Checklist', href: '/fda-checklist/', icon: '✅' },
  { label: 'CC Size Chart', href: '/breast-implants-cc-size-chart/', icon: '📏' },
  { label: 'How to Choose a Surgeon', href: '/choosing-surgeon/', icon: '👨‍⚕️' },
  { label: 'Recovery Timeline', href: '/breast-augmentation-recovery-timeline/', icon: '📅' },
];

export function getCurrentPath() {
  return window.location.pathname;
}

export function isActivePath(href) {
  const current = getCurrentPath();
  if (href === '/') return current === '/';
  return current.startsWith(href);
}
