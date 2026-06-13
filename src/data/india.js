export const indiaData = {
  meta: {
    name: 'India',
    flag: '🇮🇳',
    slug: 'india',
    tagline: 'Building an AI-Powered $5 Trillion Economy',
    overview:
      'India is one of the fastest-moving nations on AI governance, combining a massive digitisation push (Aadhaar, UPI, ONDC) with an emerging regulatory layer. The IndiaAI Mission (2024, ₹10,372 crore) and the Digital Personal Data Protection Act (2023) mark the current frontier. Governance remains fragmented across ministries, with no single binding AI law yet.',
    stats: { sectors: 5, guidelines: 6, gaps: 3, safetyConcerns: 3, interventions: 3, blogPosts: 5 },
  },

  sectors: [
    {
      id: 'government',
      name: 'Government & Policy',
      icon: '🏛️',
      description: 'Ministries, missions, and regulatory bodies driving India\'s AI strategy.',
      color: 'from-purple-800 to-purple-600',
      border: 'border-purple-700',
    },
    {
      id: 'technology',
      name: 'Technology & Industry',
      icon: '💻',
      description: 'Tech giants, IT services firms, and industry bodies shaping AI deployment.',
      color: 'from-violet-800 to-violet-600',
      border: 'border-violet-700',
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Life Sciences',
      icon: '🏥',
      description: 'Public health agencies, hospitals, and biomedical researchers using AI diagnostics.',
      color: 'from-indigo-800 to-indigo-600',
      border: 'border-indigo-700',
    },
    {
      id: 'education',
      name: 'Education & Research',
      icon: '🎓',
      description: 'Leading IITs, IISc, and UGC-backed programmes building AI research capacity.',
      color: 'from-fuchsia-800 to-fuchsia-600',
      border: 'border-fuchsia-700',
    },
    {
      id: 'finance',
      name: 'Finance & FinTech',
      icon: '💳',
      description: 'RBI, SEBI, NPCI, and the fintech ecosystem governing AI in financial services.',
      color: 'from-pink-800 to-pink-600',
      border: 'border-pink-700',
    },
  ],

  actors: {
    government: [
      {
        id: 'meity',
        name: 'MeitY',
        fullName: 'Ministry of Electronics and Information Technology',
        summary:
          'MeitY is the nodal ministry for India\'s digital and AI policy. It administers the IT Act, oversees the IndiaAI Mission, and has published advisory frameworks on generative AI. MeitY\'s mandate covers semiconductors, data governance, and the national AI compute stack.',
        url: 'https://www.meity.gov.in',
        recentActivity: [
          { title: 'IndiaAI Mission — ₹10,372 Crore Approved', date: '2024-03-07', type: 'Policy', url: 'https://indiaai.gov.in' },
          { title: 'Advisory on Generative AI Intermediaries', date: '2023-04-04', type: 'Advisory', url: 'https://www.meity.gov.in' },
          { title: 'Draft National Data Governance Framework Policy', date: '2022-05-27', type: 'Draft Policy', url: 'https://www.meity.gov.in' },
          { title: 'National Strategy for AI — #AIForAll (co-authored)', date: '2018-06-01', type: 'Strategy', url: 'https://niti.gov.in' },
        ],
      },
      {
        id: 'niti',
        name: 'NITI Aayog',
        fullName: 'National Institution for Transforming India',
        summary:
          'NITI Aayog authored India\'s foundational AI strategy documents and the Responsible AI principles. As the government\'s think tank, it coordinates cross-sectoral AI policy, identifies priority sectors, and publishes the "National Strategy for AI" that underpins the entire governance framework.',
        url: 'https://www.niti.gov.in',
        recentActivity: [
          { title: 'Responsible AI for All — Approach Document Part II', date: '2021-08-01', type: 'Report', url: 'https://niti.gov.in/sites/default/files/2021-02/Responsible-AI-22022021.pdf' },
          { title: 'Responsible AI for All — Approach Document Part I', date: '2021-02-01', type: 'Report', url: 'https://niti.gov.in' },
          { title: 'National Strategy for AI — #AIForAll', date: '2018-06-01', type: 'Strategy', url: 'https://niti.gov.in/sites/default/files/2023-03/NationalStrategy-for-AI-Discussion-Paper.pdf' },
          { title: 'AI Discussion Paper for India', date: '2018-01-01', type: 'Discussion Paper', url: 'https://niti.gov.in' },
        ],
      },
      {
        id: 'indiaai',
        name: 'IndiaAI Mission',
        fullName: 'IndiaAI Mission (Under MeitY)',
        summary:
          'The IndiaAI Mission is a ₹10,372 crore (≈$1.25B) national initiative launched in March 2024. It operates across seven pillars: AI Compute, Innovation Centre, Startup Ecosystem, Safe & Trusted AI, Datasets Platform, Application Development, and FutureSkills. The Safe & Trusted AI pillar is establishing India\'s AI Safety Institute.',
        url: 'https://indiaai.gov.in',
        recentActivity: [
          { title: 'IndiaAI Compute Capacity — 10,000 GPU Tender Issued', date: '2024-05-10', type: 'Procurement', url: 'https://indiaai.gov.in' },
          { title: 'Safe & Trusted AI Pillar Framework Released', date: '2024-04-15', type: 'Framework', url: 'https://indiaai.gov.in' },
          { title: 'IndiaAI FutureSkills Programme Launch', date: '2024-03-20', type: 'Programme', url: 'https://indiaai.gov.in' },
          { title: 'IndiaAI DataBanks Policy Draft', date: '2024-06-01', type: 'Draft Policy', url: 'https://indiaai.gov.in' },
        ],
      },
      {
        id: 'psa',
        name: 'Office of the PSA',
        fullName: 'Office of the Principal Scientific Adviser to the Government of India',
        summary:
          'The Office of the PSA provides scientific and technology policy advice to the PM and Cabinet. It has coordinated AI safety dialogues, advised on deep-tech missions, and represents India in international AI governance forums including the Global Partnership on AI (GPAI) and the AI Safety Summit processes.',
        url: 'https://psa.gov.in',
        recentActivity: [
          { title: 'India\'s Statement at Bletchley AI Safety Summit', date: '2023-11-02', type: 'Statement', url: 'https://psa.gov.in' },
          { title: 'GPAI AI Governance Summit — New Delhi Declaration', date: '2023-12-12', type: 'Declaration', url: 'https://gpai.ai' },
          { title: 'Deep Tech Startups Policy Paper', date: '2023-07-01', type: 'Policy Paper', url: 'https://psa.gov.in' },
        ],
      },
      {
        id: 'dpdboard',
        name: 'Data Protection Board',
        fullName: 'Data Protection Board of India (Under DPDP Act 2023)',
        summary:
          'Established under the Digital Personal Data Protection Act 2023, the Data Protection Board adjudicates complaints on data misuse and imposes penalties. Though not AI-specific, its rulings on consent, automated decisions, and data fiduciaries will shape how AI systems handle personal data in India. The Board is still being constituted as of 2024.',
        url: 'https://www.meity.gov.in/data-protection-framework',
        recentActivity: [
          { title: 'DPDP Rules Draft Released for Public Comment', date: '2025-01-03', type: 'Draft Rules', url: 'https://www.meity.gov.in' },
          { title: 'DPDP Act 2023 Receives Presidential Assent', date: '2023-08-11', type: 'Legislation', url: 'https://www.meity.gov.in' },
          { title: 'Significant Data Fiduciary Criteria Consultation', date: '2024-09-01', type: 'Consultation', url: 'https://www.meity.gov.in' },
        ],
      },
    ],

    technology: [
      {
        id: 'nasscom',
        name: 'NASSCOM',
        fullName: 'National Association of Software and Service Companies',
        summary:
          'NASSCOM is India\'s apex IT industry body representing 3,000+ member companies. It published its own Responsible AI Framework, runs the Data Security Council of India (DSCI), and has advocated for light-touch AI regulation. NASSCOM\'s AI Gamechangers programme profiles 50 high-impact AI use cases across public and private sectors.',
        url: 'https://nasscom.in',
        recentActivity: [
          { title: 'NASSCOM Responsible AI Framework v2.0', date: '2023-11-01', type: 'Framework', url: 'https://nasscom.in' },
          { title: 'AI Adoption Index — India 2024', date: '2024-02-15', type: 'Report', url: 'https://nasscom.in' },
          { title: 'Generative AI: Navigating India\'s Regulatory Landscape', date: '2023-08-01', type: 'White Paper', url: 'https://nasscom.in' },
        ],
      },
      {
        id: 'tcs',
        name: 'Tata Consultancy Services',
        fullName: 'Tata Consultancy Services (TCS)',
        summary:
          'TCS, India\'s largest IT company, has deployed AI across government programmes (including Aadhaar, income tax, and passport systems) and multinational clients. TCS published an AI Ethics framework and participates in IEEE and ISO AI standardisation committees. Its Pace Port innovation centres embed responsible AI into client deliverables.',
        url: 'https://tcs.com',
        recentActivity: [
          { title: 'TCS AI in Public Services — India Report 2024', date: '2024-03-01', type: 'Report', url: 'https://tcs.com' },
          { title: 'Generative AI Responsible Use Policy Published', date: '2023-10-01', type: 'Policy', url: 'https://tcs.com' },
          { title: 'Partnership with IndiaAI for Skilling Programme', date: '2024-04-01', type: 'Partnership', url: 'https://tcs.com' },
        ],
      },
      {
        id: 'infosys',
        name: 'Infosys',
        fullName: 'Infosys Limited',
        summary:
          'Infosys\'s Responsible AI framework governs client deployments and internal tools. The company\'s Infosys Springboard platform provides free AI training to 10 million learners in India. Infosys has been vocal in policy circles on the need for explainability standards and cross-border data flow agreements that enable Indian IT exports.',
        url: 'https://infosys.com',
        recentActivity: [
          { title: 'Infosys AI Radar Report 2024 — India Edition', date: '2024-01-15', type: 'Report', url: 'https://infosys.com' },
          { title: 'Responsible AI Principles and Governance Charter', date: '2023-06-01', type: 'Charter', url: 'https://infosys.com' },
          { title: 'Infosys Springboard — 10M Learner Milestone', date: '2023-12-01', type: 'Milestone', url: 'https://springboard.infosys.com' },
        ],
      },
    ],

    healthcare: [
      {
        id: 'icmr',
        name: 'ICMR',
        fullName: 'Indian Council of Medical Research',
        summary:
          'ICMR is India\'s apex biomedical research body. It published the first sector-specific AI ethics guidelines for healthcare in India (2023), covering bias in diagnostic algorithms, patient data consent, and explainability in clinical decision support. ICMR also funds AI-driven drug discovery and tuberculosis detection programmes.',
        url: 'https://icmr.gov.in',
        recentActivity: [
          { title: 'AI Ethics Guidelines for Biomedical Research and Healthcare', date: '2023-08-01', type: 'Guidelines', url: 'https://icmr.gov.in' },
          { title: 'AI for TB Detection — National Rollout', date: '2024-01-10', type: 'Programme', url: 'https://icmr.gov.in' },
          { title: 'Digital Health Framework — AI Chapter', date: '2022-11-01', type: 'Framework', url: 'https://icmr.gov.in' },
        ],
      },
      {
        id: 'nha',
        name: 'National Health Authority',
        fullName: 'National Health Authority (Ayushman Bharat Digital Mission)',
        summary:
          'NHA operates the Ayushman Bharat Digital Mission (ABDM), creating a national health ID and interoperable health records for 1.4 billion citizens. AI applications built on ABDM data — diagnostics, treatment recommendation, population health — require adherence to ABDM\'s data sharing and consent protocols.',
        url: 'https://nha.gov.in',
        recentActivity: [
          { title: 'ABDM Health Data Management Policy v2.0', date: '2023-09-01', type: 'Policy', url: 'https://nha.gov.in' },
          { title: 'AI in ABDM — Use Case Registry Published', date: '2024-02-01', type: 'Registry', url: 'https://nha.gov.in' },
          { title: '500 Million Health IDs Milestone', date: '2024-01-01', type: 'Milestone', url: 'https://nha.gov.in' },
        ],
      },
    ],

    education: [
      {
        id: 'iitdelhi',
        name: 'IIT Delhi — IAIS',
        fullName: 'IIT Delhi — iHub Anubhuti & AI Safety Research',
        summary:
          'IIT Delhi hosts one of India\'s premier AI research ecosystems, including iHub-Anubhuti (human-computer interaction) and the Yardi School of Artificial Intelligence. Faculty are active in GPAI working groups and advise MeitY on AI standards. The institute co-authored portions of India\'s AI safety assessment methodology.',
        url: 'https://iitd.ac.in',
        recentActivity: [
          { title: 'AI Safety Assessment Methodology — MeitY Co-authored Report', date: '2024-03-01', type: 'Report', url: 'https://iitd.ac.in' },
          { title: 'Indic Language AI Benchmark (IndicBench) v1.0', date: '2024-01-01', type: 'Research', url: 'https://iitd.ac.in' },
          { title: 'GPAI AI Governance Working Group Submission', date: '2023-11-01', type: 'Submission', url: 'https://gpai.ai' },
        ],
      },
      {
        id: 'iisc',
        name: 'IISc Bangalore',
        fullName: 'Indian Institute of Science — Centre for AI and Robotics',
        summary:
          'IISc is India\'s top-ranked research university, with deep expertise in machine learning, robotics, and AI for science. Its Centre for AI and Robotics collaborates with DRDO on defence applications and with ICMR on biomedical AI. IISc hosts the Kotak IISc AI-ML Centre, which includes a responsible AI track.',
        url: 'https://iisc.ac.in',
        recentActivity: [
          { title: 'Kotak IISc AI-ML Centre — Annual Research Report', date: '2024-02-01', type: 'Report', url: 'https://iisc.ac.in' },
          { title: 'AI Safety & Alignment Workshop — Bangalore', date: '2024-04-15', type: 'Event', url: 'https://iisc.ac.in' },
          { title: 'Indic NLP Library v2.0', date: '2023-06-01', type: 'Research', url: 'https://indicnlp.ai4bharat.org' },
        ],
      },
      {
        id: 'ai4bharat',
        name: 'AI4Bharat',
        fullName: 'AI4Bharat (IIT Madras)',
        summary:
          'AI4Bharat is a non-profit initiative at IIT Madras that builds open-source AI resources for Indian languages — datasets, models, and tools. Its IndicBERT, IndicTrans2 (translation), and Indic TTS models serve millions of users. AI4Bharat advocates for language-inclusive AI governance and multilingual AI safety standards.',
        url: 'https://ai4bharat.iitm.ac.in',
        recentActivity: [
          { title: 'IndicTrans2 — State-of-the-Art Translation for 22 Indic Languages', date: '2023-11-01', type: 'Research', url: 'https://ai4bharat.iitm.ac.in' },
          { title: 'Samanantar — Largest Parallel Corpus for Indian Languages', date: '2022-09-01', type: 'Dataset', url: 'https://ai4bharat.iitm.ac.in' },
          { title: 'Submission to IndiaAI Mission on Language AI Priority', date: '2024-04-01', type: 'Submission', url: 'https://ai4bharat.iitm.ac.in' },
        ],
      },
    ],

    finance: [
      {
        id: 'rbi',
        name: 'Reserve Bank of India',
        fullName: 'Reserve Bank of India (RBI)',
        summary:
          'The RBI regulates AI in banking and financial services through its supervisory frameworks. It has issued guidance on model risk management, algorithmic trading, and AI-based credit scoring — with particular concern about explainability of credit denials and potential for bias against rural or low-income borrowers. The RBI is exploring a regulatory sandbox for AI in fintech.',
        url: 'https://rbi.org.in',
        recentActivity: [
          { title: 'RBI Discussion Paper on AI/ML in Financial Services', date: '2024-04-01', type: 'Discussion Paper', url: 'https://rbi.org.in' },
          { title: 'Model Risk Management Guidelines for Banks', date: '2023-12-01', type: 'Guidelines', url: 'https://rbi.org.in' },
          { title: 'Responsible AI in Lending — Fintech Regulatory Sandbox Phase 5', date: '2023-09-01', type: 'Sandbox', url: 'https://rbi.org.in' },
        ],
      },
      {
        id: 'sebi',
        name: 'SEBI',
        fullName: 'Securities and Exchange Board of India',
        summary:
          'SEBI regulates AI in securities markets, including algorithmic trading, AI-driven investment advisory (robo-advisors), and AI-generated financial research. SEBI mandated all algo-trading systems be registered and audited (2022) and is developing a framework for AI-based SEBI-regulated investment advisers (SRIAs).',
        url: 'https://sebi.gov.in',
        recentActivity: [
          { title: 'Consultation Paper on AI/ML in Securities Markets', date: '2024-01-15', type: 'Consultation', url: 'https://sebi.gov.in' },
          { title: 'Algorithmic Trading Framework Update 2023', date: '2023-07-01', type: 'Framework', url: 'https://sebi.gov.in' },
          { title: 'AI-Driven Investment Adviser Guidelines Draft', date: '2024-03-01', type: 'Draft Guidelines', url: 'https://sebi.gov.in' },
        ],
      },
      {
        id: 'npci',
        name: 'NPCI',
        fullName: 'National Payments Corporation of India',
        summary:
          'NPCI operates UPI, RuPay, IMPS, and FastTag — payment infrastructure used by 400M+ Indians. AI models power fraud detection, transaction risk scoring, and UPI Lite. NPCI\'s AI governance covers real-time fraud models, ensuring that automated payment blocking doesn\'t unfairly target low-income users who may be flagged as anomalous.',
        url: 'https://npci.org.in',
        recentActivity: [
          { title: 'UPI AI Fraud Detection System — 99.9% Uptime Report', date: '2024-02-01', type: 'Report', url: 'https://npci.org.in' },
          { title: 'NPCI AI Governance Framework for Payment Systems', date: '2023-10-01', type: 'Framework', url: 'https://npci.org.in' },
          { title: 'UPI One World — AI-Based KYC for Foreign Visitors', date: '2023-12-01', type: 'Product', url: 'https://npci.org.in' },
        ],
      },
    ],
  },

  guidelines: [
    {
      id: 'dpdp-2023',
      title: 'Digital Personal Data Protection (DPDP) Act',
      shortTitle: 'DPDP Act',
      date: '2023-08-11',
      type: 'Legislation',
      status: 'Enacted',
      description:
        'India\'s first comprehensive data protection law. Establishes rights of Data Principals (consent, erasure, grievance redressal) and obligations of Data Fiduciaries. Creates the Data Protection Board with adjudicatory powers. AI systems processing personal data must comply with consent, purpose limitation, and data minimisation principles. The Act defers automated decision-making safeguards to future rules.',
      url: 'https://www.meity.gov.in/data-protection-framework',
    },
    {
      id: 'indiaai-mission-2024',
      title: 'IndiaAI Mission',
      shortTitle: 'IndiaAI Mission',
      date: '2024-03-07',
      type: 'National Mission',
      status: 'Active',
      description:
        'Cabinet-approved ₹10,372 crore (≈$1.25B) initiative across 7 pillars: AI Compute, IndiaAI Innovation Centre, Startup Ecosystem, Safe & Trusted AI, DataBanks, Application Development, and FutureSkills. The Safe & Trusted AI pillar is establishing an AI Safety Institute and developing evaluation frameworks for foundation models. The mission sets the policy direction for AI sovereignty.',
      url: 'https://indiaai.gov.in',
    },
    {
      id: 'genai-advisory-2023',
      title: 'MeitY Advisory on Generative AI',
      shortTitle: 'GenAI Advisory',
      date: '2023-04-04',
      type: 'Advisory',
      status: 'Active',
      description:
        'MeitY issued an advisory directing AI intermediaries to ensure their platforms did not host unlawful content, deepfakes, or content that could undermine electoral integrity. The advisory required platforms to label AI-generated content and mandated watermarking for synthetic media. A revised version strengthened watermarking and accountability requirements in November 2023.',
      url: 'https://www.meity.gov.in',
    },
    {
      id: 'nasscom-rai-2023',
      title: 'NASSCOM Responsible AI Framework v2.0',
      shortTitle: 'NASSCOM RAI',
      date: '2023-11-01',
      type: 'Industry Framework',
      status: 'Active',
      description:
        'NASSCOM\'s industry-led responsible AI framework covers six principles: Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, and Accountability. It provides a practical toolkit with assessment checklists for enterprise AI deployments. Widely adopted by NASSCOM member companies as a voluntary self-regulatory baseline.',
      url: 'https://nasscom.in/responsible-ai',
    },
    {
      id: 'niti-rai-2021',
      title: 'NITI Aayog — Responsible AI for All',
      shortTitle: 'Responsible AI',
      date: '2021-08-01',
      type: 'Government Report',
      status: 'Reference',
      description:
        'A two-part report establishing India\'s responsible AI principles: Safety & Reliability, Equality, Inclusivity & Non-discrimination, Privacy & Security, Transparency, Accountability, and Protection & Reinforcement of Positive Human Values. Part I focused on sector analysis; Part II defined the operational approach for implementing these principles in government AI systems.',
      url: 'https://niti.gov.in/sites/default/files/2021-02/Responsible-AI-22022021.pdf',
    },
    {
      id: 'niti-ai-strategy-2018',
      title: 'National Strategy for AI — #AIForAll',
      shortTitle: 'AI Strategy 2018',
      date: '2018-06-01',
      type: 'National Strategy',
      status: 'Reference',
      description:
        'India\'s foundational AI policy document authored by NITI Aayog. Identified five focus sectors: Healthcare, Agriculture, Education, Smart Cities & Infrastructure, and Smart Mobility. Coined the "AI for All" framework positioning India as an AI garage for emerging economies. Proposed a National AI Marketplace and research institutes. Many of these proposals evolved into the 2024 IndiaAI Mission.',
      url: 'https://niti.gov.in/sites/default/files/2023-03/NationalStrategy-for-AI-Discussion-Paper.pdf',
    },
  ],

  gaps: [
    {
      id: 'gap1',
      title: 'No Binding AI-Specific Legislation',
      description:
        'India has no AI Act equivalent. The DPDP Act governs data, not algorithms. There are no mandatory requirements for high-risk AI systems (such as bail prediction tools, welfare eligibility algorithms, or facial recognition in law enforcement) to be audited, explained, or contested. Governance depends on fragmented ministry advisories.',
      context:
        'India\'s federalist structure and massive scale of government AI deployment — Aadhaar-linked welfare systems reaching 900M citizens — make this gap especially acute. Communities with low digital literacy cannot contest algorithmic decisions affecting their livelihood. Unlike the EU AI Act, there is no tiered risk classification system requiring pre-market conformity checks.',
    },
    {
      id: 'gap2',
      title: 'AI Bias & Caste Discrimination',
      description:
        'AI systems trained on historical Indian data risk encoding caste-based discrimination in hiring, credit, policing, and healthcare triage. There is no mechanism for auditing deployed systems for caste or socioeconomic bias, and the DPDP Act excludes caste as a special category of sensitive data requiring extra protections.',
      context:
        'India\'s constitutional framework prohibits caste discrimination, but digital systems can encode it through proxy variables (surname, postal code, dialect). The 2019 facial recognition tender by Indian Railways and law enforcement use of face recognition at protests raised serious bias concerns. No independent auditor is mandated for public-sector AI, and disaggregated accuracy data by caste or language is rarely published.',
    },
    {
      id: 'gap3',
      title: 'Deepfakes & Electoral Integrity',
      description:
        'India runs the world\'s largest democratic election (600M+ voters). AI-generated deepfakes — of politicians, religious figures, and electoral candidates — were extensively deployed in the 2024 Lok Sabha elections. Existing IT Rules and MeitY advisories are insufficient: enforcement is reactive, platforms move faster than regulators, and rural voters have limited ability to detect synthetic media.',
      context:
        'India\'s linguistic diversity (22 scheduled languages, 780+ dialects) enables region-specific disinformation campaigns that evade English-language detection tools. The Election Commission issued guidance but lacks technical capacity to monitor AI-generated content at scale. A dedicated Electoral Integrity and AI Act — covering deepfake disclosure, takedown timelines, and platform liability — does not yet exist.',
    },
  ],

  safetyConcerns: [
    {
      id: 'safety1',
      title: 'Mass Surveillance Without Oversight',
      description:
        'India\'s Aadhaar-linked systems, CCTNS (Crime and Criminal Tracking Network), and state-level facial recognition deployments create a surveillance infrastructure at scale. There is no independent oversight body, no judicial warrant requirement for AI-assisted surveillance, and no public disclosure of error rates or demographic disparities in these systems.',
    },
    {
      id: 'safety2',
      title: 'AI-Driven Labor Displacement in IT',
      description:
        'India\'s 5.4 million IT professionals are among those most exposed to generative AI displacement. Coding assistants, automated testing, and AI-based IT outsourcing threaten entry-level roles. There is no AI transition fund, retraining mandate, or social safety net specifically designed for AI-affected workers, creating risks of large-scale unemployment in a politically sensitive sector.',
    },
    {
      id: 'safety3',
      title: 'Foundation Model Dependency & Sovereignty Risk',
      description:
        'India currently relies almost entirely on foreign foundation models (GPT-4, Gemini, Claude) for critical applications in healthcare, judiciary, and government advisory. A concentration of model access in 2-3 US corporations creates sovereignty risks: regulatory changes, pricing shifts, or model deprecations could disrupt public services with no domestic fallback.',
    },
  ],

  interventions: [
    {
      id: 'int1',
      title: 'Mandatory AI Impact Assessments for High-Stakes Systems',
      description:
        'Require any government or large enterprise AI system used for welfare eligibility, bail decisions, tax audits, healthcare triage, or policing to complete a public AI Impact Assessment (AIA) before deployment. The AIA must include: purpose, data sources, accuracy benchmarks by demographic group, bias mitigation steps, and an appeals mechanism for affected persons.',
      rationale:
        'India\'s constitutional right to equality (Article 14) and the Supreme Court\'s proportionality doctrine provide a legal anchor. The intervention is targeted because India has identified sectors (welfare, criminal justice) where AI errors compound existing structural inequalities. An AIA registry — modelled on Canada\'s Algorithmic Impact Assessment — could be maintained by the Data Protection Board once fully constituted.',
    },
    {
      id: 'int2',
      title: 'Establish an Independent AI Safety and Accountability Authority',
      description:
        'Create an AI Safety initiative as a statutory body separate from MeitY. The initiative would: conduct red-team evaluations of high-risk AI systems deployed in India; maintain an AI incident registry; issue technical safety standards for foundation models; and represent India in international AI safety forums with an independent mandate rather than a ministry brief.',
      rationale:
        'The IndiaAI Mission\'s Safe & Trusted AI pillar is housed within MeitY, creating a conflict of interest (the same ministry promotes and audits). An independent body modelled on SEBI (which is independent from the Finance Ministry) or TRAI would provide regulatory credibility. This is particularly important as India pushes Bhashini and domestic LLMs — an independent safety authority would add global credibility to Indian AI exports.',
    },
    {
      id: 'int3',
      title: 'Multilingual AI Safety Benchmarks for Indian Languages',
      description:
        'Commission and mandate the use of Indic-language AI safety benchmarks covering all 22 scheduled languages. Benchmarks must test for: hate speech in caste and religious contexts; toxicity in code-switched language; factuality in Hindi, Tamil, Bengali, and Telugu; and performance parity between English and Indic-language users. AI systems deployed for public use must pass minimum benchmark thresholds.',
      rationale:
        'AI safety evaluations are almost exclusively English-language. AI systems deployed in India — in healthcare, agriculture, and welfare — primarily serve non-English speakers. A system that passes English safety benchmarks may still produce harmful caste-based slurs or religious misinformation in Hindi or Tamil. AI4Bharat (IIT Madras) has the technical capacity to anchor this work; it needs policy mandate and funding to make benchmarks regulatory standards rather than research outputs.',
    },
  ],

  blogPosts: [
    {
      id: 'post1',
      title: 'India\'s $1.25 Billion AI Bet: What the IndiaAI Mission Means for Governance',
      date: '2024-03-15',
      author: 'Editorial Team',
      summary:
        'The Cabinet\'s approval of the ₹10,372 crore IndiaAI Mission in March 2024 marks India\'s most ambitious AI policy moment. But the Safe & Trusted AI pillar remains the least funded of the seven, raising questions about whether safety will keep pace with speed.',
      tags: ['IndiaAI Mission', 'Policy', 'AI Safety'],
      readMoreUrl: '#',
    },
    {
      id: 'post2',
      title: 'DPDP Act at One Year: Progress, Gaps, and the AI Dimension',
      date: '2024-08-11',
      author: 'Editorial Team',
      summary:
        'India\'s Digital Personal Data Protection Act turned one in August 2024. The Data Protection Board is yet to be constituted, rules are in draft, and AI-specific provisions are absent. We assess what\'s working, what\'s missing, and what comes next.',
      tags: ['DPDP Act', 'Data Governance', 'Regulation'],
      readMoreUrl: '#',
    },
    {
      id: 'post3',
      title: 'Deepfakes in the 2024 Lok Sabha Elections: A Stress Test India Didn\'t Pass',
      date: '2024-06-05',
      author: 'Editorial Team',
      summary:
        'The 2024 general elections saw AI-generated deepfakes of every major party leader. Platform takedowns were slow, verification was near-impossible in regional languages, and the Election Commission lacked enforcement tools. Here\'s what governance reforms are needed.',
      tags: ['Deepfakes', 'Elections', 'Disinformation'],
      readMoreUrl: '#',
    },
    {
      id: 'post4',
      title: 'Caste, Bias, and AI: The Governance Challenge India Cannot Afford to Ignore',
      date: '2024-04-14',
      author: 'Editorial Team',
      summary:
        'As AI systems scale across Indian welfare, hiring, and criminal justice, the risk of encoding centuries-old caste hierarchies into automated decisions grows. Yet India\'s DPDP Act doesn\'t classify caste as sensitive data, and no bias audit mandate exists for government AI.',
      tags: ['AI Bias', 'Caste', 'Fairness'],
      readMoreUrl: '#',
    },
    {
      id: 'post5',
      title: 'India\'s AI Safety Institute: Building Capacity for a Sovereign AI Future',
      date: '2024-05-22',
      author: 'Editorial Team',
      summary:
        'India is establishing an AI Safety Institute under the IndiaAI Mission. How does it compare to the UK and US models? What should its mandate cover? And how can it establish credibility as India pushes domestic foundation models onto the global stage?',
      tags: ['AI Safety', 'AI Safety Institute', 'IndiaAI Mission'],
      readMoreUrl: '#',
    },
  ],
}
