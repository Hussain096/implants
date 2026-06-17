export const siteConfig = {
  name: "Breasts-Implants.com",
  shortName: "Breast Implant Guide",
  url: "https://breasts-implants.com",
  description:
    "Independent, evidence-based education about breast implant types, surgery, recovery, costs, risks, brands, and alternatives.",
  updated: "June 12, 2026",
};

export type Category = {
  slug: string;
  label: string;
  title: string;
  description: string;
  intro: string;
  accent: string;
  articleSlugs: string[];
};

export type Source = {
  label: string;
  url: string;
};

export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  eyebrow: string;
  readTime: string;
  reviewed: string;
  directAnswer: string;
  takeaways: string[];
  sections: ArticleSection[];
  faqs: { question: string; answer: string }[];
  sources: Source[];
};

const fdaImplants: Source = {
  label: "FDA: Breast Implants",
  url: "https://www.fda.gov/medical-devices/implants-and-prosthetics/breast-implants",
};

const fdaRisks: Source = {
  label: "FDA: Risks and Complications of Breast Implants",
  url: "https://www.fda.gov/medical-devices/breast-implants/risks-and-complications-breast-implants",
};

const fdaTypes: Source = {
  label: "FDA: Types of Breast Implants",
  url: "https://www.fda.gov/medical-devices/breast-implants/types-breast-implants",
};

const fdaChecklist: Source = {
  label: "FDA: Patient Decision Checklist",
  url: "https://www.fda.gov/medical-devices/breast-implants/breast-implants-certain-labeling-recommendations-improve-patient-communication",
};

export const categories: Category[] = [
  {
    slug: "implant-types",
    label: "Implant Types",
    title: "Breast Implant Types",
    description:
      "Compare saline and silicone implants, cohesive gels, surfaces, and the tradeoffs that matter in consultation.",
    intro:
      "Implants differ by fill, shell, surface, shape, dimensions, and approved use. Start with the two main US fill types, then compare the features within each group.",
    accent: "blue",
    articleSlugs: ["saline", "silicone", "saline-vs-silicone", "gummy-bear"],
  },
  {
    slug: "shapes-sizes",
    label: "Shapes & Sizes",
    title: "Breast Implant Shapes and Sizes",
    description:
      "Understand shape, profile, projection, CC volume, dimensions, and why cup size cannot be guaranteed.",
    intro:
      "Good sizing is tissue-based, not number-based. Implant width, projection, volume, skin quality, chest dimensions, and your goals all need to be considered together.",
    accent: "teal",
    articleSlugs: ["round-vs-teardrop", "implant-profiles", "implant-size-guide", "cc-size-chart"],
  },
  {
    slug: "procedure",
    label: "Procedure",
    title: "Breast Augmentation Procedure",
    description:
      "Follow the process from consultation and preparation through surgery, recovery, follow-up, revision, or removal.",
    intro:
      "Breast augmentation is a planned surgical journey rather than a single procedure day. Learn what happens at each stage and what should be discussed with your surgeon.",
    accent: "violet",
    articleSlugs: [
      "breast-augmentation-surgery",
      "implant-placement",
      "recovery-timeline",
      "aftercare",
    ],
  },
  {
    slug: "costs-financing",
    label: "Costs",
    title: "Breast Implant Costs and Financing",
    description:
      "Learn what a quote includes, what changes the total, and how to evaluate financing and long-term expenses.",
    intro:
      "The total price is broader than the implant itself. Surgeon, facility, anesthesia, testing, garments, medication, imaging, and possible future surgery all affect lifetime cost.",
    accent: "gold",
    articleSlugs: ["breast-implant-cost", "cost-factors", "insurance", "hidden-costs"],
  },
  {
    slug: "risks-complications",
    label: "Risks",
    title: "Breast Implant Risks and Complications",
    description:
      "Evidence-based guides to common complications, rare implant-associated cancers, symptoms, imaging, and care.",
    intro:
      "Breast implants are not lifetime devices. Knowing expected healing, possible complications, and warning signs supports earlier evaluation and better conversations with your care team.",
    accent: "coral",
    articleSlugs: [
      "capsular-contracture",
      "rupture",
      "breast-implant-illness",
      "bia-alcl",
      "infection",
    ],
  },
  {
    slug: "brands",
    label: "Brands",
    title: "Breast Implant Brands",
    description:
      "Compare manufacturers and product families using current regulatory records and patient labeling.",
    intro:
      "A brand name alone does not identify the right device. Compare approved indications, fill, shell, surface, dimensions, labeling, safety information, and availability in your country.",
    accent: "navy",
    articleSlugs: ["mentor", "natrelle", "motiva", "brand-comparison"],
  },
  {
    slug: "alternatives",
    label: "Alternatives",
    title: "Alternatives to Breast Implants",
    description:
      "Compare fat transfer, lift-only surgery, and non-surgical claims with implant-based augmentation.",
    intro:
      "Alternatives solve different problems. Fat transfer can add modest volume, while a breast lift reshapes tissue without reliably adding upper-pole fullness.",
    accent: "green",
    articleSlugs: ["fat-transfer", "fat-transfer-vs-implants", "breast-lift-without-implants"],
  },
  {
    slug: "patient-guides",
    label: "Patient Guides",
    title: "Breast Implant Patient Guides",
    description:
      "Decision aids, consultation questions, surgeon-selection guidance, screening, and long-term record keeping.",
    intro:
      "Use these practical tools before consultation and throughout long-term follow-up. They support, but do not replace, personalized advice from a qualified clinician.",
    accent: "rose",
    articleSlugs: ["fda-checklist", "questions-for-surgeon", "choosing-surgeon"],
  },
];

const conciseArticles: Article[] = [
  {
    slug: "saline",
    category: "implant-types",
    title: "Saline Breast Implants: Benefits, Risks, Cost and Recovery",
    description:
      "A medically cautious guide to saline implant fill, candidacy, benefits, limitations, rupture, sizing, cost, and recovery.",
    eyebrow: "Implant types",
    readTime: "8 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "Saline breast implants have a silicone elastomer shell filled with sterile saltwater. If the shell fails, the implant usually deflates visibly and the saline is absorbed, but surgery is still generally needed to remove or replace the implant.",
    takeaways: [
      "Saline describes the fill; the outer shell is silicone elastomer.",
      "Visible deflation can make rupture easier to recognize than silent silicone rupture.",
      "Rippling, feel, implant position, and tissue coverage vary by patient and device.",
      "Implants are not lifetime devices and future surgery may be needed.",
    ],
    sections: [
      {
        title: "How saline implants work",
        paragraphs: [
          "A saline implant is inserted through an incision and filled to the device's labeled range. Some models are prefilled, while others are filled during surgery. The approved approach depends on the exact device.",
          "Because fill can be adjusted within the labeled range, a surgeon may use small differences in volume to help address asymmetry. This does not guarantee identical breasts.",
        ],
      },
      {
        title: "Potential benefits and limitations",
        paragraphs: [
          "Potential advantages include a smaller unfilled insertion profile for some devices and obvious volume loss after many ruptures. Limitations can include visible rippling, a firmer or less tissue-like feel in some patients, and the same general surgical risks that apply to other implants.",
        ],
        bullets: [
          "Ask which saline model and fill range are being proposed.",
          "Discuss tissue thickness and the chance of visible edges or rippling.",
          "Review the manufacturer's patient labeling before consent.",
        ],
      },
      {
        title: "Recovery and long-term follow-up",
        paragraphs: [
          "Recovery depends more on the operation, implant position, incision, and individual healing than on fill material alone. Follow your surgeon's restrictions and seek prompt evaluation for sudden deflation, increasing pain, redness, drainage, fever, or a new change in shape.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are saline implants silicone-free?",
        answer:
          "No. The fill is sterile saline, but the implant shell is made from silicone elastomer.",
      },
      {
        question: "What happens when a saline implant ruptures?",
        answer:
          "The breast commonly loses volume as saline leaves the shell. The body absorbs the saline, but the failed shell remains and usually requires surgical evaluation.",
      },
    ],
    sources: [fdaTypes, fdaRisks, fdaImplants],
  },
  {
    slug: "silicone",
    category: "implant-types",
    title: "Silicone Breast Implants: Benefits, Risks, Cost and Recovery",
    description:
      "Understand silicone gel implants, feel, rupture screening, potential benefits, risks, cost factors, and recovery.",
    eyebrow: "Implant types",
    readTime: "9 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "Silicone breast implants use a silicone elastomer shell filled with silicone gel. Many patients and surgeons value their tissue-like feel, but a rupture may not be obvious without imaging, so long-term screening guidance matters.",
    takeaways: [
      "Silicone implants vary in gel cohesiveness, dimensions, profile, shape, and surface.",
      "A silicone rupture can be silent and may require ultrasound or MRI to evaluate.",
      "A more natural feel is possible, but outcomes depend on anatomy and surgical planning.",
      "Current patient labeling and follow-up guidance should be reviewed before surgery.",
    ],
    sections: [
      {
        title: "What silicone gel means",
        paragraphs: [
          "Silicone gel implants are not one uniform product. Gel cohesiveness ranges from softer gels to more form-stable gels often marketed as gummy bear implants. The shell, fill, dimensions, and approved labeling are specific to each device.",
          "The best-fitting option cannot be selected from gel type alone. Base width, projection, tissue coverage, skin quality, goals, and surgical technique all affect the result.",
        ],
      },
      {
        title: "Benefits and tradeoffs",
        paragraphs: [
          "Silicone gel often feels more like breast tissue than saline, especially when natural tissue coverage is limited. Tradeoffs include the possibility of silent rupture, recommended imaging follow-up, device-specific age indications, and future operations.",
        ],
      },
      {
        title: "Rupture screening",
        paragraphs: [
          "A normal-looking breast does not rule out silicone implant rupture. Follow the screening recommendations in the labeling for your exact device and discuss new pain, firmness, swelling, lumps, or shape changes with a clinician.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do silicone implants need routine replacement every 10 years?",
        answer:
          "No automatic replacement date applies to every patient, but implants are not lifetime devices. Replacement or removal depends on symptoms, findings, preferences, and clinical advice.",
      },
      {
        question: "Can you feel a silicone implant rupture?",
        answer:
          "Sometimes there are changes, but many ruptures are silent. Imaging may be needed to evaluate implant integrity.",
      },
    ],
    sources: [fdaTypes, fdaRisks, fdaImplants],
  },
  {
    slug: "saline-vs-silicone",
    category: "implant-types",
    title: "Saline vs Silicone Implants: A Patient Comparison",
    description:
      "Compare saline and silicone breast implants by fill, feel, rupture detection, imaging, candidacy, cost, and tradeoffs.",
    eyebrow: "Comparison guide",
    readTime: "10 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "Neither saline nor silicone is best for everyone. Saline rupture is often visibly apparent, while silicone gel may feel more tissue-like but can rupture silently. Anatomy, goals, device labeling, follow-up preferences, and surgeon experience should guide the choice.",
    takeaways: [
      "Both implant types use a silicone elastomer outer shell.",
      "Saline deflation is often visible; silicone rupture may require imaging.",
      "Feel and rippling depend on tissue coverage, placement, device dimensions, and fill.",
      "Compare exact devices rather than relying only on broad material labels.",
    ],
    sections: [
      {
        title: "The practical differences",
        paragraphs: [
          "The largest differences involve fill behavior, feel, rupture detection, incision and fill options for certain models, and long-term imaging. Both types carry risks including reoperation, capsular contracture, pain, infection, malposition, and changes in sensation.",
        ],
      },
      {
        title: "Questions that help narrow the choice",
        paragraphs: [
          "Ask how much natural tissue will cover the implant, which dimensions fit your chest, how each option behaves if it ruptures, what follow-up is recommended, and why the surgeon favors a specific model for your anatomy.",
        ],
        bullets: [
          "Which exact model and profile are you recommending?",
          "How likely is visible rippling with my tissue coverage?",
          "What imaging or follow-up will this device require?",
          "What are the revision options if my goals change?",
        ],
      },
    ],
    faqs: [
      {
        question: "Which feels more natural?",
        answer:
          "Silicone gel often feels more tissue-like, but placement, tissue thickness, implant size, and profile can matter as much as fill.",
      },
      {
        question: "Which is safer?",
        answer:
          "Safety depends on the outcome being compared. Each has different tradeoffs, and neither eliminates the general risks of implant surgery.",
      },
    ],
    sources: [fdaTypes, fdaRisks, fdaChecklist],
  },
  {
    slug: "gummy-bear",
    category: "implant-types",
    title: "Gummy Bear Implants: Cohesive Gel Benefits and Risks",
    description:
      "Learn what gummy bear breast implants are, how cohesive gel behaves, and the benefits, risks, shapes, and cost factors.",
    eyebrow: "Implant types",
    readTime: "8 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "Gummy bear is a consumer term for silicone implants filled with highly cohesive gel. It is not a separate FDA fill category. Cohesive gels can retain shape more firmly, but they remain silicone implants and carry implant-related and surgical risks.",
    takeaways: [
      "Gummy bear describes gel cohesiveness, not a universally defined product.",
      "Highly cohesive gel is available in different shapes, dimensions, profiles, and surfaces.",
      "Form stability can be useful, but a firmer device is not automatically better.",
      "Product labeling and surface type are especially important when comparing devices.",
    ],
    sections: [
      {
        title: "Why the name can be confusing",
        paragraphs: [
          "Manufacturers use different gel names and cohesiveness levels. Marketing terms do not replace the exact model name, patient labeling, and regulatory record.",
          "Some highly cohesive implants are round and others are anatomically shaped. Shape, fill, and surface should be evaluated separately.",
        ],
      },
      {
        title: "Potential advantages and limitations",
        paragraphs: [
          "More cohesive gel may hold its form and limit gel movement within the shell. It may also feel firmer. Rotation matters more for an anatomically shaped implant because orientation affects the breast shape.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are gummy bear implants solid?",
        answer:
          "They contain highly cohesive silicone gel. They are form-stable compared with softer gels, but calling them solid can be misleading.",
      },
      {
        question: "Can gummy bear implants rupture?",
        answer:
          "Yes. A cohesive gel implant can still develop shell failure, and rupture may be silent.",
      },
    ],
    sources: [fdaTypes, fdaRisks],
  },
  {
    slug: "implant-size-guide",
    category: "shapes-sizes",
    title: "Breast Implant Size Guide: CCs, Dimensions and Fit",
    description:
      "Learn how breast implant volume, base width, projection, profile, anatomy, and goals work together during sizing.",
    eyebrow: "Shapes and sizes",
    readTime: "9 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "Breast implant size is measured in cubic centimeters, but volume alone does not determine appearance. Two implants with the same CC volume can have different widths and projections, producing different results on different bodies.",
    takeaways: [
      "CC volume does not convert reliably to a bra cup size.",
      "Base width and tissue coverage are central to safe, proportionate planning.",
      "Profile describes how volume is distributed, not the quality of the result.",
      "Sizers and 3D imaging can support discussion but cannot guarantee an outcome.",
    ],
    sections: [
      {
        title: "Measurements that matter",
        paragraphs: [
          "A surgeon evaluates chest and breast width, tissue thickness, skin stretch, asymmetry, nipple position, and the relationship between breast tissue and the chest wall. Implant diameter and projection are then matched to those findings and your goals.",
        ],
      },
      {
        title: "Why cup-size requests are imprecise",
        paragraphs: [
          "Bra sizing varies by brand, band size, breast shape, and measuring method. It is more useful to discuss desired proportions, upper-pole fullness, side profile, reference images, and outcomes you want to avoid.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many CCs equal one cup size?",
        answer:
          "There is no dependable universal conversion. Existing tissue, chest width, implant profile, bra sizing, and body proportions change the result.",
      },
      {
        question: "Is a larger implant always wider?",
        answer:
          "No. A higher-profile implant may add volume through projection while keeping a narrower base than another implant with similar volume.",
      },
    ],
    sources: [fdaImplants, fdaChecklist],
  },
  {
    slug: "cc-size-chart",
    category: "shapes-sizes",
    title: "Breast Implant CC Size Chart: 200cc to 1000cc+",
    description:
      "Use this CC guide to understand implant volume ranges while avoiding inaccurate cup-size promises.",
    eyebrow: "Reference guide",
    readTime: "7 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "CC measures implant fill volume, not final breast or bra size. A chart can organize volume ranges, but implant width, projection, shape, tissue coverage, and body proportions determine how that volume looks.",
    takeaways: [
      "One CC equals one milliliter of volume.",
      "The same volume can have multiple widths and profiles.",
      "Large-volume implants can increase tissue stretch and revision complexity.",
      "Use charts to prepare questions, not to select a device without examination.",
    ],
    sections: [
      {
        title: "How to read a CC chart",
        paragraphs: [
          "Think of volume bands as broad reference points: lower volumes may create a subtle change on one frame and a substantial change on another. Manufacturer catalogs should be used to compare actual width and projection for each model.",
        ],
        bullets: [
          "200-300cc: lower-volume range in many product lines",
          "325-450cc: common midrange search interest, with wide dimensional variation",
          "475-650cc: larger-volume range requiring careful tissue assessment",
          "700cc and above: higher-volume planning with greater attention to tissue support",
        ],
      },
      {
        title: "What a chart cannot predict",
        paragraphs: [
          "A chart cannot predict cleavage, cup size, implant visibility, symmetry, or whether a lift is needed. Those questions require an in-person assessment.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is 400cc considered large?",
        answer:
          "It depends on chest width, height, existing tissue, implant profile, and desired proportions. The number alone is not enough.",
      },
      {
        question: "Can 300cc and 400cc have the same width?",
        answer:
          "They can have similar widths if their profiles differ, but dimensions are model-specific and must be checked in the manufacturer catalog.",
      },
    ],
    sources: [fdaImplants, fdaChecklist],
  },
  {
    slug: "breast-augmentation-surgery",
    category: "procedure",
    title: "Breast Augmentation Surgery: Step-by-Step Overview",
    description:
      "A patient-centered overview of consultation, anesthesia, incision, implant placement, closure, recovery, and follow-up.",
    eyebrow: "Procedure",
    readTime: "10 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "Breast augmentation usually involves anesthesia, a planned incision, creation of an implant pocket, placement of the selected device, closure, and monitored recovery. Technique varies with anatomy, device, goals, and surgeon judgment.",
    takeaways: [
      "The operation should follow a documented consultation and informed-consent process.",
      "Incision and pocket choices have different tradeoffs.",
      "The exact implant model should be recorded on a device card.",
      "Recovery instructions and urgent warning signs should be provided in writing.",
    ],
    sections: [
      {
        title: "Before the operation",
        paragraphs: [
          "Planning includes medical history, examination, measurements, discussion of alternatives, review of device labeling, and realistic expectations. Testing and medication instructions depend on your health and surgical plan.",
        ],
      },
      {
        title: "During and after surgery",
        paragraphs: [
          "After anesthesia, the surgeon makes the selected incision and creates a pocket above or below the chest muscle or fascia. The implant is placed, position is assessed, and the incision is closed. You are monitored before discharge or transfer.",
          "Your surgical team should explain pain control, wound care, activity limits, support garments, follow-up, and when to seek urgent care.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does breast augmentation surgery take?",
        answer:
          "Time varies with technique, whether a lift or revision is included, and individual complexity. Your surgeon can estimate the planned operating time.",
      },
      {
        question: "Is breast augmentation outpatient surgery?",
        answer:
          "It is often performed as outpatient surgery, but the appropriate setting and monitoring depend on the procedure and patient.",
      },
    ],
    sources: [fdaChecklist, fdaImplants],
  },
  {
    slug: "implant-placement",
    category: "procedure",
    title: "Breast Implant Placement: Over vs Under the Muscle",
    description:
      "Compare subglandular, subfascial, submuscular, and dual-plane implant placement with their key tradeoffs.",
    eyebrow: "Procedure comparison",
    readTime: "9 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "Implants may be placed above the chest muscle, below it, beneath fascia, or in a dual-plane pocket. No position is universally best; tissue coverage, activity, anatomy, implant dimensions, and revision risk shape the decision.",
    takeaways: [
      "Under-muscle placement can add coverage but may create animation deformity.",
      "Above-muscle placement avoids muscle animation but needs adequate tissue coverage.",
      "Dual-plane and subfascial approaches have specific indications and limitations.",
      "Pocket choice should be explained in relation to your anatomy and goals.",
    ],
    sections: [
      {
        title: "Above the muscle",
        paragraphs: [
          "Subglandular placement positions the implant behind breast tissue and in front of the pectoralis muscle. It avoids muscle-related implant movement, but visible edges and rippling may be more likely when tissue is thin.",
        ],
      },
      {
        title: "Below the muscle and dual plane",
        paragraphs: [
          "Submuscular placement adds muscle coverage over part of the implant. Dual-plane techniques vary the relationship between muscle and breast tissue. Tradeoffs can include discomfort, animation, and specific malposition patterns.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does under the muscle always look more natural?",
        answer:
          "No. It can improve upper implant coverage in some patients, but a natural result depends on the whole plan and individual anatomy.",
      },
      {
        question: "What is animation deformity?",
        answer:
          "It is visible breast or implant movement when the chest muscle contracts, most often associated with muscle-involving pockets.",
      },
    ],
    sources: [fdaChecklist, fdaRisks],
  },
  {
    slug: "recovery-timeline",
    category: "procedure",
    title: "Breast Augmentation Recovery Timeline: Week by Week",
    description:
      "Learn what recovery may involve during the first days, weeks, and months after breast implant surgery.",
    eyebrow: "Recovery",
    readTime: "9 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "Early breast augmentation recovery commonly includes tightness, swelling, bruising, fatigue, and activity limits. Improvement is gradual, and the timeline varies with technique, implant placement, other procedures, health, and individual healing.",
    takeaways: [
      "Your surgeon's instructions take priority over general timelines.",
      "Swelling and implant position change over weeks to months.",
      "Return to driving, work, and exercise requires individualized clearance.",
      "Increasing redness, fever, drainage, severe pain, shortness of breath, or sudden swelling needs prompt care.",
    ],
    sections: [
      {
        title: "First week",
        paragraphs: [
          "Plan for rest, prescribed or recommended pain control, incision care, and short walks as directed. Arrange help with lifting, childcare, transportation, and household tasks.",
        ],
      },
      {
        title: "Weeks two through six",
        paragraphs: [
          "Many people gradually resume routine work and light activity, but lifting and exercise restrictions vary. Swelling, asymmetry, firmness, and high implant position can still be present during early healing.",
        ],
      },
      {
        title: "Following months",
        paragraphs: [
          "Scars and breast shape continue to mature. Keep follow-up appointments and report new changes rather than assuming they are part of normal settling.",
        ],
      },
    ],
    faqs: [
      {
        question: "When can I sleep on my side?",
        answer:
          "Timing varies by operation and surgeon preference. Ask your surgeon rather than using a universal date.",
      },
      {
        question: "When can I return to the gym?",
        answer:
          "Return is gradual and procedure-specific. Chest exercise and heavy lifting often require later clearance than walking or light activity.",
      },
    ],
    sources: [fdaRisks, fdaChecklist],
  },
  {
    slug: "breast-implant-cost",
    category: "costs-financing",
    title: "Breast Implant Cost Breakdown: What the Total Includes",
    description:
      "Understand surgeon, facility, anesthesia, implant, testing, medication, recovery, financing, and future costs.",
    eyebrow: "Costs and financing",
    readTime: "8 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "A breast augmentation quote may include the surgeon, anesthesia, facility, implants, supplies, and routine follow-up, but inclusions vary. Ask for a written total and clarify revision, imaging, medication, garment, travel, and financing costs.",
    takeaways: [
      "A quoted surgeon fee is not always the total procedure price.",
      "Location, credentials, facility, complexity, and combined procedures affect cost.",
      "Insurance usually does not cover cosmetic augmentation.",
      "Plan for long-term imaging and possible revision or replacement surgery.",
    ],
    sections: [
      {
        title: "What to request in writing",
        paragraphs: [
          "Ask whether the quote includes the exact implant, operating facility, anesthesia professional, preoperative testing, garments, medication, follow-up, and management of an early complication.",
        ],
        bullets: [
          "Surgeon and assistant fees",
          "Accredited facility or hospital fee",
          "Anesthesia fee",
          "Implants and surgical supplies",
          "Tests, prescriptions, garments, and follow-up",
        ],
      },
      {
        title: "Financing and future expenses",
        paragraphs: [
          "Compare annual percentage rate, fees, deferred-interest terms, and total repayment rather than the monthly payment alone. Manufacturer warranties have limits and should not be treated as comprehensive insurance.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does a more expensive implant guarantee a better result?",
        answer:
          "No. Device cost is only one part of the plan, and price does not guarantee fit, technique, healing, or outcome.",
      },
      {
        question: "Will insurance pay for breast implants?",
        answer:
          "Cosmetic augmentation is generally not covered. Reconstruction and some medically necessary procedures follow different coverage rules and require plan-specific confirmation.",
      },
    ],
    sources: [fdaChecklist, fdaImplants],
  },
  {
    slug: "capsular-contracture",
    category: "risks-complications",
    title: "Capsular Contracture: Grades, Symptoms and Treatment",
    description:
      "Understand the capsule around an implant, capsular contracture symptoms, Baker grades, evaluation, and treatment options.",
    eyebrow: "Risks and complications",
    readTime: "10 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "Capsular contracture is abnormal tightening of the scar capsule that naturally forms around a breast implant. It can cause firmness, shape change, discomfort, or pain and may affect one or both breasts.",
    takeaways: [
      "A capsule is normal; contracture means it has tightened abnormally.",
      "Symptoms and severity vary, and other problems can look similar.",
      "Evaluation may include examination and imaging.",
      "Treatment depends on severity, symptoms, implant findings, and patient goals.",
    ],
    sections: [
      {
        title: "Symptoms and grading",
        paragraphs: [
          "Clinicians commonly describe severity using Baker grades, from a soft, natural-appearing breast to a hard, painful, visibly distorted breast. The system is useful but does not replace full evaluation.",
        ],
      },
      {
        title: "Evaluation and treatment",
        paragraphs: [
          "New firmness or shape change should be assessed rather than self-diagnosed. Treatment can range from observation of mild findings to surgery involving the capsule, implant, pocket, or a combination.",
          "No online guide can determine whether a total capsulectomy, partial capsulectomy, capsulotomy, implant exchange, or removal is appropriate for an individual.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can capsular contracture happen years later?",
        answer:
          "Yes. It can occur early or later, so a new change in firmness, pain, or shape deserves evaluation.",
      },
      {
        question: "Does every capsule need to be removed?",
        answer:
          "No. The appropriate capsule management depends on the indication, findings, risks, and surgical plan.",
      },
    ],
    sources: [fdaRisks, fdaImplants],
  },
  {
    slug: "rupture",
    category: "risks-complications",
    title: "Breast Implant Rupture: Signs, Imaging and Treatment",
    description:
      "Compare saline deflation and silicone rupture, including symptoms, silent rupture, imaging, and treatment.",
    eyebrow: "Risks and complications",
    readTime: "9 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "A breast implant rupture is a break in the implant shell. Saline rupture often causes visible deflation, while silicone rupture may be silent and detected through imaging or evaluation of new symptoms.",
    takeaways: [
      "Rupture behavior differs between saline and silicone fill.",
      "A normal appearance does not rule out silicone rupture.",
      "Ultrasound or MRI may be used to assess silicone implant integrity.",
      "A suspected rupture should be evaluated by a qualified clinician.",
    ],
    sections: [
      {
        title: "Possible signs",
        paragraphs: [
          "Possible changes include volume loss, altered shape, new asymmetry, firmness, lumps, pain, swelling, or changes in sensation. These findings are not specific to rupture and need clinical assessment.",
        ],
      },
      {
        title: "What happens next",
        paragraphs: [
          "Evaluation may combine history, examination, device records, and imaging. Management depends on fill type, symptoms, implant age and location, imaging findings, capsule findings, and patient preferences.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a ruptured saline implant an emergency?",
        answer:
          "It usually needs timely surgical evaluation, though it is not typically a medical emergency solely because saline was absorbed. Severe pain, fever, redness, or rapid swelling warrants urgent care.",
      },
      {
        question: "Can mammography detect implant rupture?",
        answer:
          "Mammography is designed primarily for breast-cancer screening. Dedicated ultrasound or MRI may be used when implant integrity is the question.",
      },
    ],
    sources: [fdaRisks, fdaImplants],
  },
  {
    slug: "breast-implant-illness",
    category: "risks-complications",
    title: "Breast Implant Illness: Symptoms, Evidence and Care",
    description:
      "A balanced guide to systemic symptoms reported by some people with breast implants, current uncertainty, evaluation, and care.",
    eyebrow: "Risks and complications",
    readTime: "11 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "Breast implant illness is a patient-used term for systemic symptoms attributed to implants. It is not a single established medical diagnosis, but the symptoms are real and deserve careful evaluation for implant-related and non-implant-related causes.",
    takeaways: [
      "Reported symptoms can include fatigue, cognitive complaints, joint or muscle pain, and other systemic concerns.",
      "There is no single diagnostic test for breast implant illness.",
      "Other treatable causes should be evaluated rather than dismissed.",
      "Some patients report improvement after removal, but individual outcomes cannot be predicted.",
    ],
    sections: [
      {
        title: "How clinicians approach symptoms",
        paragraphs: [
          "A careful approach documents timing, severity, medical history, medications, sleep, mental health, autoimmune or endocrine concerns, implant details, breast symptoms, and prior testing. The goal is not to prove or disprove a patient's experience but to avoid missing another condition.",
        ],
      },
      {
        title: "Removal decisions",
        paragraphs: [
          "Implant removal is a personal surgical decision with benefits, limitations, appearance changes, and operative risks. Claims that one capsule technique guarantees systemic recovery are not supported for every patient.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is breast implant illness an official diagnosis?",
        answer:
          "It is not currently a single formal diagnosis with agreed diagnostic criteria, but regulators recognize reports of systemic symptoms in some patients.",
      },
      {
        question: "Will removing implants cure every symptom?",
        answer:
          "No outcome can be guaranteed. Some people report improvement, while others have partial, temporary, or no improvement.",
      },
    ],
    sources: [fdaRisks, fdaImplants],
  },
  {
    slug: "bia-alcl",
    category: "risks-complications",
    title: "BIA-ALCL: Symptoms, Implant Links and Evaluation",
    description:
      "Learn about breast implant-associated anaplastic large cell lymphoma, symptoms, textured implant association, evaluation, and treatment.",
    eyebrow: "Rare but serious risk",
    readTime: "10 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "BIA-ALCL is a rare lymphoma that usually develops in the fluid or capsule around a breast implant rather than in breast tissue. The risk is higher with textured-surface implants than with smooth-surface implants.",
    takeaways: [
      "Persistent late swelling, a mass, pain, or a fluid collection needs evaluation.",
      "BIA-ALCL is associated primarily with textured implant exposure.",
      "Diagnosis requires appropriate fluid or tissue testing, not symptoms alone.",
      "Regulators do not broadly recommend removing recalled textured implants in patients without symptoms solely because of the recall.",
    ],
    sections: [
      {
        title: "Symptoms and evaluation",
        paragraphs: [
          "A common presentation is new, persistent swelling caused by fluid around an implant, often years after surgery. Other findings can include a mass, pain, firmness, or enlarged lymph nodes.",
          "Evaluation may include examination, ultrasound, fluid aspiration, imaging, and pathology testing directed by a specialist.",
        ],
      },
      {
        title: "Treatment and follow-up",
        paragraphs: [
          "Treatment is stage-specific and should involve clinicians experienced in the disease. When confined to the capsule, complete surgical removal of the implant and surrounding capsule is often central to care.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is BIA-ALCL breast cancer?",
        answer:
          "No. It is a lymphoma of the immune system that generally arises in the capsule or fluid around an implant.",
      },
      {
        question: "Should everyone with textured implants have them removed?",
        answer:
          "Not solely because they are textured or recalled when there are no symptoms. Individual decisions should follow current regulator guidance and clinical consultation.",
      },
    ],
    sources: [fdaRisks, fdaImplants],
  },
  {
    slug: "infection",
    category: "risks-complications",
    title: "Breast Implant Infection: Signs, Timing and Treatment",
    description:
      "Recognize possible signs of breast implant infection and understand why prompt assessment matters.",
    eyebrow: "Risks and complications",
    readTime: "7 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "Breast implant infection can occur after surgery or, less commonly, later. Increasing redness, warmth, pain, drainage, fever, feeling unwell, or rapid swelling should be reported promptly to the surgical team.",
    takeaways: [
      "Worsening rather than improving symptoms are especially important.",
      "Infection cannot be confirmed from a photo or symptom list alone.",
      "Treatment may involve antibiotics, drainage, surgery, or implant removal.",
      "Rapidly worsening symptoms or systemic illness require urgent care.",
    ],
    sections: [
      {
        title: "Possible warning signs",
        paragraphs: [
          "Normal early healing can include soreness, swelling, and bruising. Concern increases when redness spreads, pain intensifies, drainage appears, one breast enlarges quickly, fever develops, or the patient feels systemically unwell.",
        ],
      },
      {
        title: "Why early assessment matters",
        paragraphs: [
          "The treatment plan depends on timing, severity, organism, wound and implant findings, and overall health. Delayed care can make implant salvage less likely and increase complications.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can an implant infection be treated with antibiotics alone?",
        answer:
          "Sometimes, but not always. Deep or persistent infection may require drainage, washout, implant exchange, or removal.",
      },
      {
        question: "Is redness always an infection?",
        answer:
          "No. Redness has several possible causes, but increasing or spreading redness after surgery should be assessed.",
      },
    ],
    sources: [fdaRisks, fdaChecklist],
  },
  {
    slug: "fat-transfer-vs-implants",
    category: "alternatives",
    title: "Fat Transfer vs Breast Implants: A Patient Comparison",
    description:
      "Compare breast implants with fat transfer by volume, predictability, scars, recovery, risks, imaging, and revision.",
    eyebrow: "Alternatives",
    readTime: "10 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "Implants generally provide more predictable and larger volume changes, while fat transfer uses liposuctioned body fat for a usually more modest increase. Fat survival varies, and each approach has different risks and revision needs.",
    takeaways: [
      "Fat transfer is an augmentation procedure, not a type of implant.",
      "Implants offer a wider range of volume and shape options.",
      "Fat transfer requires adequate donor fat and some transferred volume will not survive.",
      "A hybrid approach may be considered in selected patients.",
    ],
    sections: [
      {
        title: "Volume and predictability",
        paragraphs: [
          "Implant dimensions and fill are known before surgery, though final appearance still depends on healing. Fat transfer volume retention is less predictable and additional sessions may be needed.",
        ],
      },
      {
        title: "Different risk profiles",
        paragraphs: [
          "Implants carry device-related risks such as rupture and capsular contracture. Fat transfer avoids an implant but adds liposuction risks and can cause fat necrosis, oil cysts, calcifications, contour irregularity, or donor-site issues.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can fat transfer increase breasts by several cup sizes?",
        answer:
          "A large predictable increase is generally not the strength of fat transfer. Safe transfer volume and retained volume are limited and patient-specific.",
      },
      {
        question: "Does transferred fat last forever?",
        answer:
          "Fat that establishes a blood supply can persist, but retained volume varies and remains affected by aging and weight changes.",
      },
    ],
    sources: [fdaImplants, fdaChecklist],
  },
  {
    slug: "fda-checklist",
    category: "patient-guides",
    title: "FDA Breast Implant Decision Checklist Explained",
    description:
      "Use the FDA patient decision checklist to prepare for informed consent and a more useful surgeon consultation.",
    eyebrow: "Patient guide",
    readTime: "8 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "The FDA patient decision checklist is designed to support informed consent by reviewing candidacy, alternatives, device risks, systemic symptoms, rare cancers, screening, and the likelihood of future surgery.",
    takeaways: [
      "Read the checklist before the final consent visit, not on surgery day.",
      "Ask about the exact device and obtain its patient labeling.",
      "Do not sign sections you do not understand.",
      "Keep your device card and operative records.",
    ],
    sections: [
      {
        title: "How to use the checklist",
        paragraphs: [
          "Read each section and write down questions. Ask the surgeon to explain how each risk applies to the proposed implant, surgical plan, and your medical history.",
        ],
        bullets: [
          "Reasons you may not be a candidate",
          "Alternatives to implant surgery",
          "Expected benefits and limitations",
          "Known complications and reoperation",
          "Systemic symptoms and implant-associated cancers",
          "Long-term monitoring and device records",
        ],
      },
      {
        title: "What the checklist cannot do",
        paragraphs: [
          "A checklist cannot select a device, predict your result, or replace an examination. It is a starting point for shared decision-making.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the FDA checklist optional?",
        answer:
          "FDA labeling recommendations require manufacturers to include a patient decision checklist in labeling. Your surgeon should use the current materials for the proposed device.",
      },
      {
        question: "Should I receive a copy?",
        answer:
          "Ask for copies of the completed checklist, patient labeling, device card, and relevant operative records.",
      },
    ],
    sources: [fdaChecklist, fdaImplants],
  },
  {
    slug: "questions-for-surgeon",
    category: "patient-guides",
    title: "Questions to Ask at a Breast Augmentation Consultation",
    description:
      "A practical consultation checklist covering credentials, facility, implant choice, risks, recovery, costs, and follow-up.",
    eyebrow: "Patient guide",
    readTime: "7 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "A useful consultation should cover surgeon credentials, facility accreditation, your goals and anatomy, the exact device, alternatives, risks, recovery, total cost, complication management, and long-term follow-up.",
    takeaways: [
      "Ask why a specific implant and pocket fit your anatomy.",
      "Confirm who provides anesthesia and where surgery occurs.",
      "Discuss the surgeon's approach to complications and revision.",
      "Take written information home before deciding.",
    ],
    sections: [
      {
        title: "Questions about qualifications and safety",
        paragraphs: [
          "Verify board certification in plastic surgery through the relevant certifying body, active licensure, hospital privileges where applicable, facility accreditation, and the experience of the full surgical team.",
        ],
        bullets: [
          "How often do you perform this operation?",
          "Where will surgery take place and how is the facility accredited?",
          "Who will provide anesthesia?",
          "How are emergencies and after-hours concerns handled?",
        ],
      },
      {
        title: "Questions about the plan",
        paragraphs: [
          "Ask for the manufacturer, model, fill, surface, shape, profile, size range, incision, pocket, and reasons for each recommendation. Discuss what result is realistic and what may require a lift or another approach.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I get more than one consultation?",
        answer:
          "A second opinion can be useful when recommendations differ, the plan is complex, or you do not feel fully informed.",
      },
      {
        question: "What is a warning sign during consultation?",
        answer:
          "Pressure to book quickly, guarantees, dismissal of risks, unclear credentials, or unwillingness to provide device labeling are reasons to pause.",
      },
    ],
    sources: [fdaChecklist, fdaImplants],
  },
  {
    slug: "choosing-surgeon",
    category: "patient-guides",
    title: "How to Choose a Qualified Breast Implant Surgeon",
    description:
      "Evaluate plastic-surgery board certification, licensure, facility safety, experience, communication, and follow-up.",
    eyebrow: "Patient guide",
    readTime: "8 min read",
    reviewed: "Editorially reviewed June 12, 2026",
    directAnswer:
      "Choose a surgeon by verifying recognized plastic-surgery board certification, active licensure, relevant experience, an appropriately accredited facility, clear informed consent, and a dependable follow-up plan.",
    takeaways: [
      "The word cosmetic surgeon does not identify a standardized training pathway.",
      "Verify credentials independently rather than relying on a profile badge.",
      "Review standardized examples relevant to your anatomy, with consent.",
      "Good communication includes discussing limitations and complications.",
    ],
    sections: [
      {
        title: "Verify, do not assume",
        paragraphs: [
          "Check the surgeon's license with the jurisdiction and certification with the named board. Confirm the board's scope and training requirements. Ask about hospital privileges and the accreditation of the operating facility.",
        ],
      },
      {
        title: "Assess judgment and follow-up",
        paragraphs: [
          "The surgeon should explain alternatives, recommend against surgery when appropriate, use current patient labeling, set realistic expectations, and provide a clear plan for routine and urgent follow-up.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a cosmetic surgeon the same as a plastic surgeon?",
        answer:
          "Not necessarily. Training and certification pathways differ, so verify the exact board, residency background, license, and procedure experience.",
      },
      {
        question: "Are online reviews enough to choose a surgeon?",
        answer:
          "No. Reviews can describe service experiences but do not verify clinical competence, complication rates, or suitability for your case.",
      },
    ],
    sources: [fdaChecklist, fdaImplants],
  },
];

const previewArticleData: Array<
  Pick<Article, "slug" | "category" | "title" | "description" | "eyebrow">
> = [
  {
    slug: "round-vs-teardrop",
    category: "shapes-sizes",
    title: "Round vs Teardrop Breast Implants",
    description:
      "Compare shape, rotation, surface considerations, upper-pole fullness, and candidacy.",
    eyebrow: "Shapes and sizes",
  },
  {
    slug: "implant-profiles",
    category: "shapes-sizes",
    title: "Breast Implant Profiles Explained",
    description:
      "Understand low, moderate, high, and extra-high profiles without confusing profile with cup size.",
    eyebrow: "Shapes and sizes",
  },
  {
    slug: "aftercare",
    category: "procedure",
    title: "Breast Implant Aftercare",
    description:
      "Incision care, activity, support garments, follow-up, and warning signs.",
    eyebrow: "Procedure",
  },
  {
    slug: "cost-factors",
    category: "costs-financing",
    title: "Factors That Affect Breast Augmentation Cost",
    description:
      "How geography, credentials, facility, anesthesia, implants, and complexity affect price.",
    eyebrow: "Costs and financing",
  },
  {
    slug: "insurance",
    category: "costs-financing",
    title: "Does Insurance Cover Breast Implant Surgery?",
    description:
      "Understand common differences between cosmetic, reconstructive, revision, and removal coverage.",
    eyebrow: "Costs and financing",
  },
  {
    slug: "hidden-costs",
    category: "costs-financing",
    title: "Hidden and Long-Term Costs of Breast Implants",
    description:
      "Plan for imaging, travel, time off work, revision, replacement, and removal.",
    eyebrow: "Costs and financing",
  },
  {
    slug: "mentor",
    category: "brands",
    title: "Mentor Breast Implants",
    description:
      "A neutral guide to Mentor product families, FDA records, labeling, and safety information.",
    eyebrow: "Brands",
  },
  {
    slug: "natrelle",
    category: "brands",
    title: "Natrelle Breast Implants",
    description:
      "A neutral guide to Natrelle products, current labeling, and the BIOCELL recall context.",
    eyebrow: "Brands",
  },
  {
    slug: "motiva",
    category: "brands",
    title: "Motiva Breast Implants",
    description:
      "A neutral guide to Motiva products, US approval, patient labeling, and safety data.",
    eyebrow: "Brands",
  },
  {
    slug: "brand-comparison",
    category: "brands",
    title: "Breast Implant Brands Compared",
    description:
      "Compare product families using regulatory status, fill, surface, dimensions, and labeling.",
    eyebrow: "Brands",
  },
  {
    slug: "fat-transfer",
    category: "alternatives",
    title: "Fat Transfer Breast Augmentation",
    description:
      "Benefits, limitations, donor-site recovery, fat retention, imaging, and risks.",
    eyebrow: "Alternatives",
  },
  {
    slug: "breast-lift-without-implants",
    category: "alternatives",
    title: "Breast Lift Without Implants",
    description:
      "Understand what lift-only surgery can and cannot change.",
    eyebrow: "Alternatives",
  },
];

export const articles: Article[] = [
  ...conciseArticles,
  ...previewArticleData.map((article) => ({
    ...article,
    readTime: "Coming in the launch series",
    reviewed: "Editorial brief prepared June 12, 2026",
    directAnswer: article.description,
    takeaways: [
      "This article is part of the medically reviewed launch series.",
      "The final page will cite current regulator and professional guidance.",
      "No treatment recommendation will be made without individual clinical assessment.",
    ],
    sections: [
      {
        title: "What this guide will cover",
        paragraphs: [
          article.description,
          "The full guide is in medical review. Until publication, use the linked FDA resources and discuss personal decisions with a qualified clinician.",
        ],
      },
    ],
    faqs: [],
    sources: [fdaImplants, fdaChecklist],
  })),
];

export const categoryBySlug = new Map(
  categories.map((category) => [category.slug, category]),
);

export const articleBySlug = new Map(
  articles.map((article) => [article.slug, article]),
);

export function getArticlesForCategory(categorySlug: string) {
  const category = categoryBySlug.get(categorySlug);
  if (!category) return [];
  return category.articleSlugs
    .map((slug) => articleBySlug.get(slug))
    .filter((article): article is Article => Boolean(article));
}

export const featuredArticles = [
  "saline-vs-silicone",
  "implant-size-guide",
  "breast-augmentation-surgery",
  "recovery-timeline",
  "breast-implant-cost",
  "capsular-contracture",
  "bia-alcl",
  "fat-transfer-vs-implants",
]
  .map((slug) => articleBySlug.get(slug))
  .filter((article): article is Article => Boolean(article));
