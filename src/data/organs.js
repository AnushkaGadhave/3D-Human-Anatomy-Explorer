// Dataset of major human organs with educational attributes and 3D mesh targeting
export const ORGANS = [
  {
    id: 'brain',
    name: 'Brain',
    system: 'Nervous',
    category: 'Central Nervous System',
    location: 'Cranial cavity, protected by the skull',
    image: '/images/body-systems/nervous.png',
    color: '#9333ea',
    bg: '#f4edfc',
    meshTarget: 'Head_Neck',
    description: 'The control center of the nervous system, processing sensory data and regulating thoughts, memories, emotions, and involuntary bodily functions.',
    primaryFunction: 'Cognition, sensory integration, motor command regulation, and homeostatic equilibrium.',
    dimensions: 'Approx. 1,300–1,400 grams; contains ~86 billion neurons.',
    facts: [
      'Uses approximately 20% of the body’s total oxygen and caloric energy despite accounting for only 2% of body weight.',
      'Information passes between synapses at speeds exceeding 250 miles per hour (400 km/h).',
      'The brain itself lacks pain receptors; headaches arise from surrounding tissues, nerves, and meninges.'
    ]
  },
  {
    id: 'heart',
    name: 'Heart',
    system: 'Circulatory',
    category: 'Cardiovascular',
    location: 'Thoracic cavity, mediastinum between the lungs, tilted slightly left',
    image: '/images/body-systems/circulatory.png',
    color: '#f43f5e',
    bg: '#ffeef0',
    meshTarget: 'Internal_Organs',
    description: 'A muscular four-chambered pump delivering continuous blood flow, transporting oxygen, nutrients, and immune cells throughout the vascular tree.',
    primaryFunction: 'Pumps deoxygenated blood to the lungs and oxygen-rich blood through systemic arteries to tissues.',
    dimensions: 'Fist-sized muscular organ, mass approx. 250–350 grams.',
    facts: [
      'Beats roughly 100,000 times each day, circulating over 2,000 gallons (7,500 liters) of blood.',
      'Generates its own electrical impulses via the sinoatrial (SA) node, allowing it to beat independently outside the body if supplied with oxygen.',
      'A woman’s heart typically beats slightly faster than a man’s.'
    ]
  },
  {
    id: 'lungs',
    name: 'Lungs',
    system: 'Respiratory',
    category: 'Pulmonary',
    location: 'Thorax, protected on either side of the mediastinum by the rib cage',
    image: '/images/body-systems/respiratory.png',
    color: '#0284c7',
    bg: '#e5f4fd',
    meshTarget: 'Internal_Organs',
    description: 'Paired spongy respiratory organs responsible for external gas exchange: oxygen absorption and carbon dioxide exhalation via alveolar capillaries.',
    primaryFunction: 'Ventilation and alveolar gas diffusion across the blood-air barrier.',
    dimensions: 'Right lung has 3 lobes; left lung has 2 lobes (to accommodate cardiac notch).',
    facts: [
      'Contains over 300 million tiny air sacs called alveoli, creating a total surface area of roughly 75 square meters (the size of a tennis court).',
      'The lungs are the only human organs capable of floating on water due to trapped residual air.',
      'You breathe in approximately 11,000 liters of air each day.'
    ]
  },
  {
    id: 'liver',
    name: 'Liver',
    system: 'Digestive',
    category: 'Metabolic & Glandular',
    location: 'Right upper quadrant of the abdominal cavity, directly beneath the diaphragm',
    image: '/images/body-systems/digestive.png',
    color: '#ea580c',
    bg: '#fff2e2',
    meshTarget: 'Internal_Organs',
    description: 'The largest internal organ and primary biochemical metabolic factory, performing over 500 vital physiological and detoxification functions.',
    primaryFunction: 'Bile synthesis, glycogen storage, lipid breakdown, plasma protein production, and filtration of toxins.',
    dimensions: 'Weighs approx. 1.4–1.6 kg, wedge-shaped reddish-brown organ.',
    facts: [
      'Possesses extraordinary regenerative power: it can regrow back to full size even if up to 70% is resected.',
      'Holds about 10% of the entire body’s blood supply at any given moment.',
      'Produces between 800 and 1,000 milliliters of bile every day to emulsify fats.'
    ]
  },
  {
    id: 'stomach',
    name: 'Stomach',
    system: 'Digestive',
    category: 'Gastrointestinal',
    location: 'Upper left abdomen between the esophagus and duodenum',
    image: '/images/body-systems/digestive.png',
    color: '#ea580c',
    bg: '#fff2e2',
    meshTarget: 'Internal_Organs',
    description: 'A muscular J-shaped reservoir that breaks down ingested food into acidic chyme through rhythmic churning and gastric acid secretions.',
    primaryFunction: 'Mechanical digestion and chemical protein hydrolysis via hydrochloric acid and pepsin.',
    dimensions: 'Can expand from an empty volume of 50 mL to hold up to 2–4 liters of food.',
    facts: [
      'Gastric acid has a pH between 1.5 and 2.0, concentrated enough to dissolve small metal objects.',
      'The stomach replaces its protective mucus-lined mucosal wall every 3 to 4 days to prevent self-digestion.',
      'Churns food for 2 to 6 hours before releasing chyme into the small intestine.'
    ]
  },
  {
    id: 'kidneys',
    name: 'Kidneys',
    system: 'Urinary',
    category: 'Renal',
    location: 'Retroperitoneal space in the posterior abdomen, on either side of the vertebral column',
    image: '/images/body-systems/circulatory.png',
    color: '#0d9488',
    bg: '#e1f8f3',
    meshTarget: 'Internal_Organs',
    description: 'Bean-shaped filtration units that cleanse blood, extract metabolic waste into urine, and maintain strict electrolyte and water equilibrium.',
    primaryFunction: 'Blood plasma filtration, osmoregulation, acid-base balance, and erythropoietin secretion.',
    dimensions: 'Each kidney is roughly 11–12 cm long, containing ~1 million nephrons.',
    facts: [
      'Filters approximately 180 liters of fluid each day, reabsorbing 99% and excreting about 1.5 liters as urine.',
      'Receives approximately 20–25% of the total cardiac output from the renal arteries.',
      'Plays a critical role in controlling blood pressure by secreting the enzyme renin.'
    ]
  },
  {
    id: 'small-intestine',
    name: 'Small Intestine',
    system: 'Digestive',
    category: 'Gastrointestinal',
    location: 'Central and lower abdominal cavity, framed by the colon',
    image: '/images/body-systems/digestive.png',
    color: '#ea580c',
    bg: '#fff2e2',
    meshTarget: 'Internal_Organs',
    description: 'A highly folded tubular organ consisting of the duodenum, jejunum, and ileum, where ~90% of all nutrient absorption into bloodstream occurs.',
    primaryFunction: 'Final chemical nutrient breakdown and micronutrient absorption across villi.',
    dimensions: 'Approx. 6 meters (20 feet) in length; internal diameter approx. 2.5 cm.',
    facts: [
      'Microscopic finger-like folds (villi and microvilli) expand the internal absorptive surface area to roughly 250 square meters.',
      'Muscular waves called peristalsis gently move digesting food through the tract.',
      'Most essential vitamins, minerals, and carbohydrates are absorbed in the jejunum.'
    ]
  },
  {
    id: 'large-intestine',
    name: 'Large Intestine (Colon)',
    system: 'Digestive',
    category: 'Gastrointestinal',
    location: 'Perimeter of the abdominal cavity, arching around the small intestine',
    image: '/images/body-systems/digestive.png',
    color: '#ea580c',
    bg: '#fff2e2',
    meshTarget: 'Internal_Organs',
    description: 'The concluding segment of the digestive tract, consisting of the cecum, ascending, transverse, descending, and sigmoid colon, and rectum.',
    primaryFunction: 'Reabsorption of water and electrolytes, fermentation of fiber by the microbiome, and solid waste compaction.',
    dimensions: 'Approx. 1.5 meters (5 feet) long with a wider lumen than the small intestine.',
    facts: [
      'Houses trillions of symbiotic bacteria (the gut microbiome) that produce vital vitamin K and B complexes.',
      'Absorbs about 1.5 to 2 liters of water daily from incoming digestive remnants.',
      'Waste takes between 12 and 48 hours to transit through the large intestine.'
    ]
  },
  {
    id: 'urinary-bladder',
    name: 'Urinary Bladder',
    system: 'Urinary',
    category: 'Pelvic Organ',
    location: 'Pelvic cavity floor, directly behind the pubic symphysis',
    image: '/images/body-systems/skeletal.png',
    color: '#0d9488',
    bg: '#e1f8f3',
    meshTarget: 'Internal_Organs',
    description: 'A distensible muscular sac composed of transitional epithelium and the detrusor muscle, storing urine before micturition.',
    primaryFunction: 'Urine containment and coordinated controlled evacuation.',
    dimensions: 'Comfortably holds 300–500 mL of urine; can stretch to store up to 800 mL.',
    facts: [
      'Transitional epithelium cells shift from round to flat as the organ fills, allowing dramatic volume expansion without wall tearing.',
      'Sensory stretch receptors trigger the urge to urinate when the bladder reaches roughly 200–250 mL full.',
      'Urine enters from the kidneys via bilateral peristaltic ureters.'
    ]
  },
  {
    id: 'femur',
    name: 'Femur (Thigh Bone)',
    system: 'Skeletal',
    category: 'Long Bones',
    location: 'Upper leg, articulating with the pelvis at the hip and tibia at the knee',
    image: '/images/body-systems/skeletal.png',
    color: '#0d9488',
    bg: '#e1f8f3',
    meshTarget: 'Skeleton',
    description: 'The longest, heaviest, and strongest tubular bone in the human body, engineered to bear immense axial loading during walking and running.',
    primaryFunction: 'Weight distribution, bipedal locomotion, and hematopoiesis inside deep marrow cavities.',
    dimensions: 'Accounts for approximately 26% of a human’s overall stature (avg. 45–48 cm).',
    facts: [
      'Capable of supporting up to 30 times an adult’s body weight without fracturing.',
      'The spherical femoral head fits snugly into the pelvic acetabulum to form a high-mobility ball-and-socket joint.',
      'Ancient forensic anthropologists use the femur’s length to calculate accurate living height estimates.'
    ]
  },
  {
    id: 'rib-cage',
    name: 'Thoracic Rib Cage & Spine',
    system: 'Skeletal',
    category: 'Axial Skeleton',
    location: 'Thorax and dorsal spine, encompassing thoracic vertebrae 1–12 and sternum',
    image: '/images/body-systems/skeletal.png',
    color: '#0d9488',
    bg: '#e1f8f3',
    meshTarget: 'Skeleton',
    description: 'A flexible bony framework of 12 pairs of ribs, costal cartilages, and sternum providing armor for the heart and lungs while expanding during respiration.',
    primaryFunction: 'Cardiopulmonary organ protection and dynamic respiratory chest expansion.',
    dimensions: 'Comprises 24 ribs: 7 true ribs, 3 false ribs, and 2 floating ribs.',
    facts: [
      'Moves up and outward like bucket handles with every inhalation, expanding the thoracic cavity volume.',
      'Costal cartilage gives the chest enough elasticity to absorb impacts without shattering brittle bone.',
      'The spinal column houses and shields the central spinal cord throughout 33 interlocking vertebrae.'
    ]
  },
  {
    id: 'skull',
    name: 'Cranium & Facial Skeleton',
    system: 'Skeletal',
    category: 'Axial Skeleton',
    location: 'Superior aspect of the axial skeleton, balancing on cervical vertebra C1 (Atlas)',
    image: '/images/body-systems/skeletal.png',
    color: '#0d9488',
    bg: '#e1f8f3',
    meshTarget: 'Skeleton',
    description: 'A rigid protective shell composed of 22 fused and articulating bones enclosing the brain, vision orbits, nasal cavities, and mastication jaw.',
    primaryFunction: 'Brain encapsulation, facial architecture, and acoustic resonance.',
    dimensions: '22 total bones connected by specialized fibrous joints called sutures.',
    facts: [
      'The mandible (lower jawbone) is the only movable bone in the human skull.',
      'Infant skulls contain soft spaces called fontanelles that permit brain growth and ease childbirth before ossifying.',
      'Contains 8 cranial bones that lock tightly together like intricate puzzle pieces.'
    ]
  },
  {
    id: 'quadriceps',
    name: 'Quadriceps Femoris',
    system: 'Muscular',
    category: 'Skeletal Muscle Group',
    location: 'Anterior thigh compartment, terminating across the patellar tendon',
    image: '/images/body-systems/muscular.png',
    color: '#f43f5e',
    bg: '#ffeef0',
    meshTarget: 'Muscles',
    description: 'A massive four-headed extensor muscle group (rectus femoris, vastus lateralis, vastus medialis, vastus intermedius) powering leg straightening.',
    primaryFunction: 'Knee joint extension, hip flexion, and postural stability during walking, jumping, and squats.',
    dimensions: 'One of the largest muscle groups in the human anatomy by volume and force.',
    facts: [
      'Crucial for shock absorption when walking downstairs or landing from a jump.',
      'Its tendon encloses the patella (kneecap), the largest sesamoid bone in the body, which acts as a biomechanical fulcrum.',
      'The vastus lateralis is a frequent site for intramuscular pediatric injections due to its substantial size and lack of major nerves.'
    ]
  },
  {
    id: 'biceps-brachii',
    name: 'Biceps & Arm Musculature',
    system: 'Muscular',
    category: 'Skeletal Muscle',
    location: 'Anterior compartment of the upper arm',
    image: '/images/body-systems/muscular.png',
    color: '#f43f5e',
    bg: '#ffeef0',
    meshTarget: 'Muscles',
    description: 'A prominent two-headed flexor muscle of the arm spanning the shoulder and elbow joints, enabling forearm flexion and outward supination.',
    primaryFunction: 'Elbow flexion, forearm supination (turning palm upward), and shoulder stabilization.',
    dimensions: 'Originates with a long head and short head on the scapula, inserting into the radial tuberosity.',
    facts: [
      'While famous for lifting weights, the biceps’ strongest mechanical action is actually forearm supination, like turning a doorknob.',
      'Works in direct antagonist balance against the three-headed triceps brachii on the posterior arm.',
      'Muscle fibers contract via sliding actin and myosin filaments powered by ATP energy.'
    ]
  }
];

export const SYSTEM_CATEGORIES = [
  'All',
  'Nervous',
  'Circulatory',
  'Respiratory',
  'Digestive',
  'Urinary',
  'Skeletal',
  'Muscular'
];

export const ORGANS_DATA = ORGANS;
export const ORGAN_SYSTEMS = SYSTEM_CATEGORIES;

