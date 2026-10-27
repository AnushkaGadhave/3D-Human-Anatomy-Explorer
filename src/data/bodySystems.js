// Comprehensive dataset of human body systems
export const BODY_SYSTEMS_EXTENDED = [
  {
    id: 'nervous',
    name: 'Nervous System',
    tagline: 'Master Communication & Signal Network',
    color: '#9333ea',
    bg: '#f4edfc',
    borderColor: '#e9d5ff',
    image: '/images/body-systems/nervous.png',
    iconType: 'brain',
    meshLayer: 'Head_Neck',
    overview: 'The body’s chief internal electrical coordination network. Receives sensory input, analyzes patterns, stores memory, and directs involuntary reflex loops and intentional movements.',
    majorOrgans: ['Brain', 'Spinal Cord', 'Peripheral Nerves', 'Sensory Neurons', 'Autonomic Ganglia'],
    functions: [
      'Rapid electrical signal transmission through myelinated axons',
      'Integration of conscious sensory inputs (vision, hearing, touch, taste, smell)',
      'Control of autonomic homeostasis (heart rate, respiration, body temperature)',
      'High-order cognitive reasoning, emotional synthesis, and motor coordination'
    ],
    clinicalRelevance: 'Conditions like neuropathy, stroke, Parkinson’s, and multiple sclerosis involve disruption of neural pathways.',
    funFact: 'Your brain has roughly 100 trillion synaptic connections—vastly outnumbering all stars in the Milky Way galaxy.'
  },
  {
    id: 'circulatory',
    name: 'Circulatory System',
    tagline: 'Cardiovascular Transportation Highway',
    color: '#f43f5e',
    bg: '#ffeef0',
    borderColor: '#fecdd3',
    image: '/images/body-systems/circulatory.png',
    iconType: 'heart',
    meshLayer: 'Internal_Organs',
    overview: 'A vast closed hydraulic circuit powered by the heart. Delivers oxygenated blood, hormones, glucose, and white blood cells while whisking away cellular metabolic wastes.',
    majorOrgans: ['Heart', 'Arteries', 'Capillaries', 'Veins', 'Blood Cells', 'Coronary Vessels'],
    functions: [
      'Pumps systemic oxygenated blood and returns deoxygenated venous blood',
      'Distributes hormones and endocrine messengers across distant tissues',
      'Stabilizes core body temperature through vasodilation and vasoconstriction',
      'Maintains optimal pH and fluid-volume equilibrium in extracellular fluid'
    ],
    clinicalRelevance: 'Atherosclerosis, hypertension, arrhythmias, and myocardial infarction represent major areas of cardiovascular study.',
    funFact: 'If all the blood vessels in an average human adult were untangled and laid end-to-end, they would stretch over 60,000 miles (nearly 2.5 times around the Earth).'
  },
  {
    id: 'respiratory',
    name: 'Respiratory System',
    tagline: 'Vital Gas Exchange & Pulmonary Ventilation',
    color: '#0284c7',
    bg: '#e5f4fd',
    borderColor: '#bae6fd',
    image: '/images/body-systems/respiratory.png',
    iconType: 'lungs',
    meshLayer: 'Internal_Organs',
    overview: 'A branching airway pipeline terminating in microscopic capillary beds. Replenishes bloodstream oxygen levels and continuously vents acidic carbon dioxide waste.',
    majorOrgans: ['Lungs', 'Trachea', 'Bronchi', 'Alveoli', 'Diaphragm', 'Pharynx & Larynx'],
    functions: [
      'Ventilation via thoracic expansion and diaphragm contraction',
      'Alveolar diffusion of O2 into erythrocytes and CO2 into expired air',
      'Vocal sound generation across vibrating laryngeal vocal folds',
      'Assistance in systemic acid-base balance via carbonic acid buffering'
    ],
    clinicalRelevance: 'Asthma, chronic bronchitis, pneumonia, and pulmonary fibrosis impair ventilation and capillary diffusion.',
    funFact: 'The surface area inside your lungs is roughly 75 square meters—ample enough to cover the floor of an entire apartment.'
  },
  {
    id: 'digestive',
    name: 'Digestive System',
    tagline: 'Nutrient Processing & Biochemical Assimilation',
    color: '#ea580c',
    bg: '#fff2e2',
    borderColor: '#fed7aa',
    image: '/images/body-systems/digestive.png',
    iconType: 'utensils',
    meshLayer: 'Internal_Organs',
    overview: 'A continuous gastrointestinal canal converting ingested macromolecules into absorbable monosaccharides, fatty acids, and amino acids to power cellular life.',
    majorOrgans: ['Stomach', 'Small Intestine', 'Large Intestine', 'Liver', 'Pancreas', 'Esophagus', 'Gallbladder'],
    functions: [
      'Mechanical mastication and chemical acid-enzyme digestion',
      'Absorption of essential nutrients across the intestinal brush border',
      'Bile secretion and fat emulsification via liver and gallbladder',
      'Reabsorption of water and compaction of insoluble fibrous residues'
    ],
    clinicalRelevance: 'Gastroenteritis, peptic ulcers, celiac disease, and Crohn’s disease affect digestive mucosal absorption.',
    funFact: 'Your digestive tract produces over 7 liters of secretions every day (saliva, gastric acid, bile, pancreatic juice, and intestinal mucus).'
  },
  {
    id: 'skeletal',
    name: 'Skeletal System',
    tagline: 'Structural Scaffolding & Mineral Vault',
    color: '#0d9488',
    bg: '#e1f8f3',
    borderColor: '#99f6e4',
    image: '/images/body-systems/skeletal.png',
    iconType: 'shield',
    meshLayer: 'Skeleton',
    overview: 'An articulated framework of 206 bones, cartilages, and ligaments providing rigid structural posture, vital organ shielding, and hematopoiesis.',
    majorOrgans: ['Femur', 'Spine & Vertebrae', 'Rib Cage', 'Skull / Cranium', 'Pelvic Girdle', 'Articular Cartilage'],
    functions: [
      'Supports soft tissues and anchors skeletal muscle origins/insertions',
      'Shields delicate organs: brain (skull), heart & lungs (ribs), spinal cord (vertebrae)',
      'Acts as a reservoir storing 99% of the body’s calcium and 85% of phosphorus',
      'Houses red bone marrow producing millions of new blood cells each second'
    ],
    clinicalRelevance: 'Osteoporosis, fractures, scoliosis, and osteoarthritis involve degradation of bone density and cartilage.',
    funFact: 'Babies are born with approximately 270 soft bones; as they grow, many fuse together to form the adult total of 206 bones.'
  },
  {
    id: 'muscular',
    name: 'Muscular System',
    tagline: 'Biomechanics, Motion & Thermal Generation',
    color: '#f43f5e',
    bg: '#ffeef0',
    borderColor: '#fecdd3',
    image: '/images/body-systems/muscular.png',
    iconType: 'activity',
    meshLayer: 'Muscles',
    overview: 'Composed of over 600 skeletal muscles alongside visceral smooth muscle and cardiac muscle, converting biochemical ATP energy into mechanical force.',
    majorOrgans: ['Quadriceps', 'Biceps & Triceps', 'Pectorals', 'Gluteals', 'Diaphragm', 'Cardiac Myocardium'],
    functions: [
      'Voluntary locomotion, fine motor manipulation, and joint stabilization',
      'Involuntary visceral movements: peristalsis, blood vessel tone, and cardiac beats',
      'Posture maintenance countering the downward pull of gravity',
      'Thermogenesis: generates up to 85% of basal body heat through shivering and contraction'
    ],
    clinicalRelevance: 'Muscular dystrophy, muscle atrophy, tendonitis, and strain injuries target muscle fascicles and connective fascia.',
    funFact: 'The eye muscles (extraocular muscles) make over 100,000 micro-adjustments every day, making them the most active muscles in the body.'
  },
  {
    id: 'urinary',
    name: 'Urinary System',
    tagline: 'Fluid Osmoregulation & Waste Elimination',
    color: '#0284c7',
    bg: '#e0f2fe',
    borderColor: '#7dd3fc',
    image: '/images/body-systems/circulatory.png',
    iconType: 'droplets',
    meshLayer: 'Internal_Organs',
    overview: 'The primary filtration system regulating water content, blood pressure, blood volume, and electrolyte balance while flushing out urea and metabolic acids.',
    majorOrgans: ['Kidneys (Left & Right)', 'Ureters', 'Urinary Bladder', 'Urethra', 'Renal Arteries & Veins'],
    functions: [
      'Continuous blood plasma filtration via glomeruli nephrons',
      'Excretion of toxic nitrogenous metabolic wastes such as urea and creatinine',
      'Maintenance of blood pH and systemic electrolyte concentrations (Na+, K+, Cl-)',
      'Hormone production: renin (blood pressure) and erythropoietin (red blood cell production)'
    ],
    clinicalRelevance: 'Chronic kidney disease, kidney stones, and urinary tract infections compromise plasma clearance.',
    funFact: 'Your kidneys filter through your entire blood supply around 40 times each day, scrutinizing every single drop for waste.'
  }
];
