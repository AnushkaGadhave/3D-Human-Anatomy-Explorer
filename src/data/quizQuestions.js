// Interactive Anatomy Quiz Question Bank across 5 categories
export const QUIZ_CATEGORIES = [
  'All Categories',
  'General Anatomy',
  'Organs',
  'Body Systems',
  'Skeleton',
  'Respiratory System'
];

export const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    category: 'General Anatomy',
    question: 'Which is the largest internal organ in the human body?',
    options: ['Stomach', 'Liver', 'Heart', 'Brain'],
    correctAnswer: 1, // 'Liver'
    explanation: 'The liver is the heaviest and largest internal organ, weighing approximately 1.5 kg (3.3 lbs). Note that the skin is the largest overall organ.'
  },
  {
    id: 'q2',
    category: 'Organs',
    question: 'Which organ produces insulin to regulate blood glucose levels?',
    options: ['Gallbladder', 'Spleen', 'Pancreas', 'Kidney'],
    correctAnswer: 2, // 'Pancreas'
    explanation: 'The beta cells located in the islets of Langerhans within the pancreas secrete insulin to facilitate glucose uptake by cells.'
  },
  {
    id: 'q3',
    category: 'Body Systems',
    question: 'Which body system is responsible for producing red blood cells (hematopoiesis)?',
    options: ['Muscular System', 'Skeletal System', 'Integumentary System', 'Endocrine System'],
    correctAnswer: 1, // 'Skeletal System'
    explanation: 'Red bone marrow inside bones like the femur, ribs, pelvis, and vertebrae produces red and white blood cells through hematopoiesis.'
  },
  {
    id: 'q4',
    category: 'Skeleton',
    question: 'What is the longest, strongest bone in the human body?',
    options: ['Tibia', 'Humerus', 'Femur', 'Fibula'],
    correctAnswer: 2, // 'Femur'
    explanation: 'The femur (thigh bone) accounts for about a quarter of a person’s height and can withstand compressive loads up to 30 times body weight.'
  },
  {
    id: 'q5',
    category: 'Respiratory System',
    question: 'In which microscopic structures does external gas exchange occur in the lungs?',
    options: ['Bronchioles', 'Alveoli', 'Tracheal rings', 'Pleural cavity'],
    correctAnswer: 1, // 'Alveoli'
    explanation: 'Alveoli are tiny grape-like air sacs surrounded by capillaries where oxygen diffuses into the blood and carbon dioxide diffuses out.'
  },
  {
    id: 'q6',
    category: 'General Anatomy',
    question: 'How many bones are found in an average adult human skeleton?',
    options: ['186', '206', '270', '312'],
    correctAnswer: 1, // '206'
    explanation: 'While infants are born with around 270 soft bones, many fuse during childhood development, leaving 206 distinct bones in adulthood.'
  },
  {
    id: 'q7',
    category: 'Organs',
    question: 'Which chamber of the human heart pumps oxygenated blood into the aorta for systemic distribution?',
    options: ['Right Atrium', 'Right Ventricle', 'Left Atrium', 'Left Ventricle'],
    correctAnswer: 3, // 'Left Ventricle'
    explanation: 'The left ventricle has the thickest muscular myocardium walls because it must generate high pressure to propel blood throughout the entire body.'
  },
  {
    id: 'q8',
    category: 'Body Systems',
    question: 'What is the primary master gland of the endocrine system that controls hormone release?',
    options: ['Thyroid Gland', 'Pituitary Gland', 'Adrenal Gland', 'Thymus'],
    correctAnswer: 1, // 'Pituitary Gland'
    explanation: 'The pituitary gland, located at the base of the brain just below the hypothalamus, secretes hormones that govern other endocrine glands.'
  },
  {
    id: 'q9',
    category: 'Skeleton',
    question: 'Which bone is the only movable bone in the adult human skull?',
    options: ['Maxilla', 'Zygomatic', 'Mandible', 'Frontal bone'],
    correctAnswer: 2, // 'Mandible'
    explanation: 'The mandible (lower jawbone) articulates with the temporal bone at the temporomandibular joint (TMJ), allowing chewing and speech.'
  },
  {
    id: 'q10',
    category: 'Respiratory System',
    question: 'What dome-shaped muscle is primarily responsible for the mechanics of inhalation?',
    options: ['Diaphragm', 'Pectoralis Major', 'Latissimus Dorsi', 'Trapezius'],
    correctAnswer: 0, // 'Diaphragm'
    explanation: 'When the diaphragm contracts, it flattens downward, creating negative pressure inside the thoracic cavity that draws air into the lungs.'
  }
];
