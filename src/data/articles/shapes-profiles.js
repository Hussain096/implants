// ============================================
// Article: Breast Implant Shapes and Profiles
// ============================================

export const shapesProfilesArticle = {
  title: 'Breast Implant Shapes & Profiles: Round vs. Anatomical Guide',
  metaTitle: "Breast Implant Shapes: Round, Teardrop, Profiles Guide",
  metaDescription: "Understand breast implant shapes, round versus anatomical options, profiles, projection, sizing, and how surgeons match implants to your frame.",
  hubId: 'shapes-sizes',
  hubLabel: 'Shapes & Sizes',
  hubHref: '/shapes-and-sizes/',
  lastReviewed: 'June 2026',
  readTime: '11 min read',
  author: 'Dr. Sarah Mitchell, MD',
  reviewer: 'Dr. Rachel Torres, Board-Certified Plastic Surgeon',

  keyTakeaways: [
    'Round implants are the most popular shape (~95% of augmentations) — they cannot rotate and provide upper pole fullness.',
    'Anatomical (teardrop) implants mimic the natural breast slope but require textured surfaces and carry rotation risk.',
    'Profile refers to how far the implant projects forward relative to its base width — from low to ultra-high.',
    'Higher profiles provide more projection from a narrower base — ideal for petite frames wanting visible augmentation.',
    'Your chest width (base diameter) is the most important measurement for determining the correct implant dimensions.',
    'Your surgeon will recommend the shape/profile combination that best matches your anatomy and aesthetic goals.',
  ],

  sections: [
    {
      heading: 'Understanding Implant Shape',
      content: `
        <p>Breast implant shape is one of the most important decisions you'll make — it directly affects how your results look. The two primary shapes are <strong>round</strong> and <strong>anatomical (teardrop)</strong>, and each produces a distinctly different aesthetic outcome.</p>
        <p>While your surgeon will guide this decision based on your anatomy, understanding the differences helps you communicate your goals more effectively during consultation.</p>
      `,
    },
    {
      heading: 'Round Implants',
      content: `
        <p>Round implants are the most widely used shape, chosen for approximately <strong>95% of breast augmentations</strong>. They are perfectly symmetrical — the same shape regardless of orientation — which eliminates any concern about rotation.</p>
      `,
      subsections: [
        {
          heading: 'Advantages of Round',
          list: [
            '<strong>Cannot malrotate:</strong> Because they are symmetrical, there is no "wrong" orientation.',
            '<strong>Upper pole fullness:</strong> Creates a fuller, more "augmented" look in the upper breast.',
            '<strong>Smooth surface option:</strong> Can be used with smooth shells (no BIA-ALCL texture concern).',
            '<strong>More cleavage:</strong> The symmetrical fill creates more medial fullness.',
            '<strong>Wider availability:</strong> More size, profile, and brand options than anatomical.',
            '<strong>Proven track record:</strong> Decades of clinical data support safety and satisfaction.',
          ],
        },
        {
          heading: 'Considerations',
          list: [
            'May look less natural in very thin patients with minimal tissue coverage.',
            'Upper pole fullness can appear obvious — the "augmented look" isn\'t for everyone.',
            'In some positions (lying down), can appear very round.',
          ],
        },
      ],
    },
    {
      heading: 'Anatomical (Teardrop) Implants',
      content: `
        <p>Anatomical implants are shaped like a natural breast — <strong>thinner at the top and fuller at the bottom</strong>. They are designed to create a more natural slope without the prominent upper pole fullness of round implants.</p>
      `,
      subsections: [
        {
          heading: 'Advantages of Anatomical',
          list: [
            '<strong>Natural slope:</strong> Mimics the tapered shape of a natural breast.',
            '<strong>Subtle result:</strong> Often preferred by patients who want augmentation that looks undetectable.',
            '<strong>Good for reconstruction:</strong> The shape closely mimics natural breast anatomy.',
            '<strong>Less upper pole prominence:</strong> Avoids the "shelf" look some patients dislike.',
          ],
        },
        {
          heading: 'Considerations',
          list: [
            '<strong>Rotation risk:</strong> If the implant rotates, the breast shape becomes distorted — requires revision surgery.',
            '<strong>Requires textured surface:</strong> To prevent rotation, anatomical implants must have textured shells — which carry a small BIA-ALCL risk.',
            '<strong>Fewer options:</strong> Fewer brand, size, and profile combinations available.',
            '<strong>Higher cost:</strong> Typically $500–$1,000 more than round implants.',
            '<strong>Firmer feel:</strong> Many anatomical implants use highly cohesive gel for shape retention.',
          ],
        },
      ],
      callout: {
        type: 'warning',
        icon: '⚠️',
        title: 'BIA-ALCL and Textured Surfaces',
        text: 'Anatomical implants require textured surfaces to prevent rotation. Textured surfaces have been linked to breast implant-associated anaplastic large cell lymphoma (BIA-ALCL), a rare but serious condition. Discuss this risk-benefit trade-off with your surgeon.',
      },
    },
    {
      heading: 'Round vs. Anatomical: Side-by-Side',
      table: {
        headers: ['Factor', 'Round', 'Anatomical (Teardrop)'],
        rows: [
          ['<strong>Shape</strong>', 'Symmetrical — same all around', 'Tapered top, fuller bottom'],
          ['<strong>Upper pole</strong>', 'More fullness (augmented look)', 'Less fullness (natural slope)'],
          ['<strong>Rotation risk</strong>', 'None — cannot malrotate', 'Yes — distorts breast shape'],
          ['<strong>Surface requirement</strong>', 'Smooth or textured', 'Textured only'],
          ['<strong>BIA-ALCL risk</strong>', 'Minimal with smooth surface', 'Slightly elevated (textured)'],
          ['<strong>Feel</strong>', 'Soft (standard gel)', 'Firmer (highly cohesive gel)'],
          ['<strong>Market share</strong>', '~95%', '~5%'],
          ['<strong>Cost premium</strong>', 'Baseline', '+$500–$1,000'],
        ],
        caption: 'Round vs. anatomical implant comparison.',
      },
    },
    {
      heading: 'Understanding Implant Profile',
      content: `
        <p><strong>Profile</strong> refers to how far the implant projects forward from your chest wall, relative to its base width (diameter). Think of it this way: for the same volume (cc), a higher profile implant will project more from a narrower base.</p>
        <p>Profile is critical because it determines how natural or projected your results look, and the correct choice depends primarily on your <strong>chest width</strong> (the distance across your breast footprint).</p>
      `,
      table: {
        headers: ['Profile', 'Projection', 'Base Width', 'Best For'],
        rows: [
          ['<strong>Low</strong>', 'Minimal projection', 'Wide base', 'Wide-chested patients wanting subtle enhancement'],
          ['<strong>Moderate</strong>', 'Balanced projection', 'Medium base', 'Most common — suits average body types'],
          ['<strong>Moderate Plus</strong>', 'Above-average projection', 'Medium-narrow base', 'Good balance of projection and natural appearance'],
          ['<strong>High</strong>', 'Maximum projection', 'Narrow base', 'Petite frames wanting noticeable augmentation'],
          ['<strong>Ultra-High</strong>', 'Extreme projection', 'Narrowest base', 'Very narrow chests wanting maximum projection'],
        ],
        caption: 'Implant profiles from lowest to highest projection.',
      },
    },
    {
      heading: 'How Your Surgeon Selects Shape & Profile',
      content: `
        <p>Your surgeon will evaluate several measurements and factors:</p>
      `,
      subsections: [
        {
          heading: 'Key Measurements',
          list: [
            '<strong>Breast base width (BWD):</strong> The horizontal distance across your breast footprint — the most important measurement.',
            '<strong>Nipple-to-fold distance:</strong> The vertical measurement from your nipple to the inframammary fold.',
            '<strong>Tissue pinch thickness:</strong> How much breast tissue you have for implant coverage.',
            '<strong>Chest wall shape:</strong> Concavity, convexity, or asymmetry of the ribcage.',
            '<strong>Skin elasticity:</strong> How well your skin will stretch and drape over the implant.',
          ],
        },
        {
          heading: 'Patient Factors',
          list: [
            '<strong>Desired look:</strong> Natural vs. augmented appearance.',
            '<strong>Clothing preferences:</strong> What you want to achieve in and out of clothing.',
            '<strong>Lifestyle:</strong> Athletic patients may prefer lower profiles.',
            '<strong>Starting anatomy:</strong> Your natural breast shape and size.',
          ],
        },
      ],
    },
    {
      heading: 'Understanding CC Volume',
      content: `
        <p>Implant volume is measured in <strong>cubic centimeters (cc)</strong>. It's important to understand that the same cc looks completely different depending on your body type:</p>
      `,
      subsections: [
        {
          heading: 'Key Points About Volume',
          list: [
            '<strong>CC ≠ cup size:</strong> There is no reliable conversion between cc and cup size because bra sizing varies across manufacturers.',
            '<strong>Body type matters:</strong> 350cc will look dramatically different on a 5\'0" 105 lb patient vs. a 5\'8" 160 lb patient.',
            '<strong>Profile affects appearance:</strong> 350cc in high profile projects more than 350cc in moderate profile.',
            '<strong>Use sizers:</strong> Many surgeons offer sizing systems (3D imaging, sizer inserts) to help visualize different volumes on your body.',
            '<strong>Don\'t compare:</strong> Avoid choosing your cc based on another patient\'s results — body proportions make every outcome unique.',
          ],
        },
      ],
      callout: {
        type: 'tip',
        icon: '📏',
        title: 'Sizing Tip',
        text: 'During your consultation, try on sizers in different volumes with a fitted sports bra and a representative outfit. This gives you a much more realistic preview than looking at before-and-after photos alone.',
      },
    },
  ],

  faqs: [
    {
      question: 'Which implant shape looks most natural?',
      answer: 'Both shapes can look natural with the right surgeon and patient selection. Round implants placed submuscularly often create a natural teardrop look because gravity and muscle pressure shape the implant. Anatomical implants start in a teardrop shape but carry rotation risk. Many surgeons achieve excellent natural results with round implants.',
    },
    {
      question: 'What profile should I choose?',
      answer: 'Your surgeon will recommend a profile based on your chest width and desired projection. As a general guide: wider chests work well with moderate profiles, while narrow chests may need higher profiles for adequate projection. The goal is matching the implant base width to your breast base width.',
    },
    {
      question: 'Can I choose my own cc size?',
      answer: 'While you should communicate your desired outcome, your surgeon will recommend a safe cc range based on your anatomy. Going too large for your tissue can lead to complications like bottoming out, stretching, or visible rippling. Trust your surgeon\'s sizing recommendations — they account for factors you can\'t see.',
    },
  ],

  references: [
    {
      authors: 'Tebbetts JB, Adams WP',
      title: 'Five Critical Decisions in Breast Augmentation Using Five Measurements in 5 Minutes',
      journal: 'Plastic and Reconstructive Surgery',
      year: '2005',
      url: 'https://pubmed.ncbi.nlm.nih.gov/?term=%22Five%20Critical%20Decisions%20in%20Breast%20Augmentation%20Using%20Five%20Measurements%20in%205%20Minutes%22',
    },
    {
      authors: 'Hidalgo DA, Spector JA',
      title: 'Breast augmentation',
      journal: 'Plastic and Reconstructive Surgery',
      year: '2014',
      url: 'https://pubmed.ncbi.nlm.nih.gov/?term=%22Breast%20augmentation%22',
    },
  ],

  relatedArticles: [
    { title: 'Round vs. Teardrop', desc: 'Dedicated shape comparison guide.', href: '/round-vs-teardrop-implants/', icon: 'R' },
    { title: 'Implant Profiles', desc: 'Low, moderate, high, and ultra-high projection.', href: '/breast-implant-profiles/', icon: 'P' },
    { title: 'CC Size Chart', desc: 'Volume and body-frame sizing guide.', href: '/breast-implants-cc-size-chart/', icon: 'C' },
    { title: 'Gummy Bear Implants', desc: 'Form-stable option with teardrop shape.', href: '/gummy-bear-implants/', icon: 'G' },
  ],
};
