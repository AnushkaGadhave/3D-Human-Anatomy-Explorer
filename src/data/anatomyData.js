export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Explore Anatomy', href: '#explore' },
  { label: 'Body Systems', href: '#body-systems' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'About', href: '#about' },
]

export const FLOATING_CARDS = [
  {
    id: 'brain',
    title: 'Brain',
    subtitle: 'Control Center',
    iconSrc: '/images/icon_brain.png',
    position: 'top-right',
  },
  {
    id: 'lungs',
    title: 'Lungs',
    subtitle: 'Breathe Life',
    iconSrc: '/images/icon_lungs.png',
    position: 'mid-left',
  },
  {
    id: 'heart',
    title: 'Heart',
    subtitle: 'Pumps Blood',
    iconSrc: '/images/icon_heart.png',
    position: 'mid-right',
  },
]

export const FEATURE_CARDS = [
  {
    id: '3d-model',
    title: 'Interactive 3D Model',
    description: 'Rotate, zoom and explore the human body in stunning detail.',
    bgColor: '#f1edfe',
    badgeBg: '#7c3aed',
    iconType: '3d',
  },
  {
    id: 'organ-exploration',
    title: 'Organ Exploration',
    description: 'Click on any organ to learn about its structure, function and location.',
    bgColor: '#e6fffa',
    badgeBg: '#0d9488',
    iconType: 'lungs',
  },
  {
    id: 'body-systems',
    title: 'Body Systems',
    description: 'Explore different systems like circulatory, respiratory, nervous and more.',
    bgColor: '#fff7ed',
    badgeBg: '#ea580c',
    iconType: 'book',
  },
  {
    id: 'fun-quizzes',
    title: 'Fun Quizzes',
    description: 'Test your knowledge with interactive quizzes and instant feedback.',
    bgColor: '#fdf2f8',
    badgeBg: '#ec4899',
    iconType: 'brain',
  },
]

export const BODY_SYSTEMS = [
  {
    id: 'circulatory',
    title: 'Circulatory System',
    image: '/images/body-systems/circulatory.png',
    bgColor: '#ffeef0',
    btnColor: '#f43f5e',
    description: 'Heart and blood vessels supplying oxygenated nutrients across the body.',
  },
  {
    id: 'respiratory',
    title: 'Respiratory System',
    image: '/images/body-systems/respiratory.png',
    bgColor: '#e5f4fd',
    btnColor: '#0284c7',
    description: 'Trachea, bronchi, and lungs delivering vital oxygen exchange.',
  },
  {
    id: 'digestive',
    title: 'Digestive System',
    image: '/images/body-systems/digestive.png',
    bgColor: '#fff2e2',
    btnColor: '#ea580c',
    description: 'Gastrointestinal tract processing nourishment and energy.',
  },
  {
    id: 'nervous',
    title: 'Nervous System',
    image: '/images/body-systems/nervous.png',
    bgColor: '#f4edfc',
    btnColor: '#9333ea',
    description: 'Brain, spinal cord, and network of neural pathways.',
  },
  {
    id: 'skeletal',
    title: 'Skeletal System',
    image: '/images/body-systems/skeletal.png',
    bgColor: '#e1f8f3',
    btnColor: '#0d9488',
    description: '206 articulated bones providing anatomical support and shielding.',
  },
  {
    id: 'muscular',
    title: 'Muscular System',
    image: '/images/body-systems/muscular.png',
    bgColor: '#ffeef0',
    btnColor: '#f43f5e',
    description: 'Over 600 skeletal and smooth muscles powering biomechanical motion.',
  },
]

export const HOW_IT_WORKS_STEPS = [
  {
    step: '1',
    title: 'Select',
    description: 'Choose a body system or organ.',
    color: '#2563eb',
    bg: '#dbeafe',
    iconType: 'eye',
  },
  {
    step: '2',
    title: 'Explore',
    description: 'Interact with the 3D model and inspect details.',
    color: '#7c3aed',
    bg: '#ede9fe',
    iconType: 'box',
  },
  {
    step: '3',
    title: 'Learn',
    description: 'Read about functions, location and more.',
    color: '#059669',
    bg: '#d1fae5',
    iconType: 'book',
  },
  {
    step: '4',
    title: 'Test',
    description: 'Take quizzes and check your progress.',
    color: '#ea580c',
    bg: '#ffedd5',
    iconType: 'brain',
  },
]

export const ABOUT_HIGHLIGHTS = [
  {
    id: 'vis',
    title: 'Interactive Visualization',
    description: 'Real-time 3D graphics and multi-layer anatomical dissection.',
  },
  {
    id: 'edu',
    title: 'Anatomy Education',
    description: 'Comprehensive medical references, organ roles, and physiological data.',
  },
  {
    id: 'cg',
    title: 'Computer Graphics Concepts',
    description: 'Shaders, 3D meshes, WebGL rendering, and responsive spatial transformations.',
  },
]
