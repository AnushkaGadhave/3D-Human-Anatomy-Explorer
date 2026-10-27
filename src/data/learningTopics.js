// Educational topics, bite-sized summaries, and Did You Know facts for the Learning Hub
export const LEARNING_CATEGORIES = [
  'All Topics',
  'Organs',
  'Body Systems',
  'Human Skeleton',
  'Muscles',
  'Circulation'
];

export const LEARNING_TOPICS = [
  {
    id: 'topic-neural-synapse',
    title: 'How Neurons Communicate',
    category: 'Organs',
    level: 'Beginner',
    readTime: '3 min read',
    icon: 'zap',
    color: '#9333ea',
    bg: '#f4edfc',
    summary: 'The human nervous system operates via electrical action potentials and chemical neurotransmitters bridging microscopic gaps called synapses.',
    keyPoints: [
      'Dendrites receive incoming chemical signals from preceding neurons.',
      'Axons conduct electrical voltage impulses insulated by myelin sheaths.',
      'Neurotransmitters like dopamine and serotonin diffuse across 20-nanometer synaptic clefts.'
    ],
    relatedOrganId: 'brain',
    didYouKnow: 'A single neuron can connect to up to 10,000 other neurons, forming networks more intricate than the global internet.'
  },
  {
    id: 'topic-cardiac-cycle',
    title: 'The Dual-Pump Cardiac Cycle',
    category: 'Circulation',
    level: 'Intermediate',
    readTime: '4 min read',
    icon: 'heart',
    color: '#f43f5e',
    bg: '#ffeef0',
    summary: 'The human heart operates as two synchronized pumps: the right side circulates blood through pulmonary loop, while the left side powers the high-pressure systemic loop.',
    keyPoints: [
      'Systole is the contraction phase that ejects blood into the aorta and pulmonary artery.',
      'Diastole is the relaxation phase during which ventricular chambers refill with blood.',
      'Heart valves (tricuspid, bicuspid, aortic, pulmonary) act as one-way gates preventing backflow.'
    ],
    relatedOrganId: 'heart',
    didYouKnow: 'The "lub-dub" sound of a heartbeat is produced by the rhythmic snapping shut of heart valves, not the contraction of muscle.'
  },
  {
    id: 'topic-bone-remodeling',
    title: 'Bones Are Living, Dynamic Organs',
    category: 'Human Skeleton',
    level: 'Beginner',
    readTime: '3 min read',
    icon: 'shield',
    color: '#0d9488',
    bg: '#e1f8f3',
    summary: 'Far from dry, inert structures, bones are continuously remodeled throughout life by specialized cellular teams: osteoclasts and osteoblasts.',
    keyPoints: [
      'Osteoclasts dissolve old or micro-fractured bone mineral matrix.',
      'Osteoblasts lay down fresh collagen scaffolds and deposit calcium phosphate crystals.',
      'Every 7 to 10 years, your skeleton essentially renews itself in entirety.'
    ],
    relatedOrganId: 'femur',
    didYouKnow: 'Weight-bearing exercise signals osteocytes to thicken bone density according to Wolff’s Law of mechanical adaptation.'
  },
  {
    id: 'topic-muscle-contraction',
    title: 'Sliding Filament Theory of Muscles',
    category: 'Muscles',
    level: 'Intermediate',
    readTime: '4 min read',
    icon: 'activity',
    color: '#f43f5e',
    bg: '#ffeef0',
    summary: 'Muscles do not expand; they pull. Muscle contraction happens when microscopic actin and myosin filaments slide past each other inside sarcomere units.',
    keyPoints: [
      'Motor neurons release acetylcholine, triggering calcium ions to flood muscle fibers.',
      'Myosin heads bind to actin filaments and pivot, pulling the sarcomere tighter.',
      'ATP (adenosine triphosphate) releases the myosin head so it can re-cock for another cycle.'
    ],
    relatedOrganId: 'quadriceps',
    didYouKnow: 'Rigor mortis occurs after death because ATP runs out, leaving muscle heads locked in a permanent contracted grip.'
  },
  {
    id: 'topic-respiratory-diffusion',
    title: 'Gas Diffusion in Alveoli',
    category: 'Body Systems',
    level: 'Beginner',
    readTime: '3 min read',
    icon: 'wind',
    color: '#0284c7',
    bg: '#e5f4fd',
    summary: 'Gas exchange in the lungs relies on passive concentration gradients across an ultra-thin barrier between alveolar air and capillary blood.',
    keyPoints: [
      'The blood-air barrier is less than 0.5 micrometers thick—thinner than a sheet of tissue paper.',
      'Oxygen diffuses down its partial pressure gradient into red blood cells, binding with hemoglobin.',
      'Carbon dioxide dissolved in blood plasma diffuses into the alveolar space for immediate exhalation.'
    ],
    relatedOrganId: 'lungs',
    didYouKnow: 'Each red blood cell carries approximately 270 million hemoglobin molecules, each transporting up to 4 oxygen atoms.'
  },
  {
    id: 'topic-digestive-microbiome',
    title: 'The Hidden World of Gut Flora',
    category: 'Body Systems',
    level: 'Beginner',
    readTime: '3 min read',
    icon: 'database',
    color: '#ea580c',
    bg: '#fff2e2',
    summary: 'The human intestine hosts an ecosystem of 30+ trillion microorganisms that break down complex carbohydrates, synthesize vitamins, and train the immune system.',
    keyPoints: [
      'Gut bacteria produce over 90% of the body’s serotonin neurotransmitter supply.',
      'They ferment dietary fibers into beneficial short-chain fatty acids like butyrate.',
      'Microbiome balance directly communicates with the brain via the gut-brain vagus nerve axis.'
    ],
    relatedOrganId: 'large-intestine',
    didYouKnow: 'Your body actually contains roughly as many bacterial cells as human cells.'
  }
];

export const DID_YOU_KNOW_FACTS = [
  {
    id: 'fact-1',
    category: 'Nervous System',
    fact: 'The human brain can generate enough electrical power to light a low-wattage LED bulb (approx. 20 Watts).',
    color: '#9333ea'
  },
  {
    id: 'fact-2',
    category: 'Circulatory',
    fact: 'A single red blood cell can make a complete round-trip circuit throughout the entire human body in just 20 to 60 seconds.',
    color: '#f43f5e'
  },
  {
    id: 'fact-3',
    category: 'Skeletal',
    fact: 'More than half of the 206 bones in the adult human body are located in your hands, wrists, feet, and ankles (106 bones combined!).',
    color: '#0d9488'
  },
  {
    id: 'fact-4',
    category: 'Digestive',
    fact: 'The acid in your stomach is strong enough to etch stainless steel, protected only by a rapidly renewing blanket of alkaline mucus.',
    color: '#ea580c'
  },
  {
    id: 'fact-5',
    category: 'Muscles',
    fact: 'The masseter (jaw muscle) is the strongest muscle in the human body based on its weight, capable of generating over 200 pounds of closing force.',
    color: '#f43f5e'
  },
  {
    id: 'fact-6',
    category: 'Respiratory',
    fact: 'You lose about half a liter (17 oz) of water each day just through the moisture in your breath.',
    color: '#0284c7'
  }
];
