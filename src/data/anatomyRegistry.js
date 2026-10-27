// Comprehensive Anatomy Registry supporting 3D object picking, library search, and dedicated detail views
export const ANATOMY_REGISTRY = [
  {
    id: 'heart',
    name: 'Heart',
    alternativeNames: ['Cardia', 'Myocardium', 'Cor'],
    system: 'Circulatory',
    category: 'Organ',
    location: 'Middle mediastinum of the thoracic cavity, posterior to the sternum, between the lungs, tilted slightly to the left.',
    description: 'A muscular four-chambered double pump that propels oxygenated blood throughout systemic circulation and deoxygenated blood through the pulmonary circuit.',
    functions: [
      'Pumps systemic oxygenated blood via the left ventricle through the aorta to all tissues.',
      'Receives deoxygenated venous blood into the right atrium and pumps it to the lungs for gas exchange.',
      'Maintains systemic arterial blood pressure and continuous microvascular perfusion.',
      'Generates autonomous rhythmic electrical impulses via the sinoatrial (SA) node cardiac pacemaker.'
    ],
    structureDetails: 'Composed of four distinct chambers (two superior atria and two inferior muscular ventricles). The muscular wall consists of epicardium, myocardium (contractile muscle layer), and endocardium, guarded by four fibrous heart valves (tricuspid, mitral, aortic, pulmonary).',
    relatedParts: ['lungs', 'trachea', 'sternum', 'liver'],
    clinicalRelevance: 'Susceptible to coronary artery disease (CAD), myocardial infarction (heart attack), heart failure, arrhythmias (atrial fibrillation), and valvular stenosis.',
    meshPatterns: ['Heart', 'Cardiac', 'Myocardium', 'Internal_Organs_Thorax'],
    image: '/images/body-systems/circulatory.png',
    color: '#f43f5e',
    bg: '#ffeef0'
  },
  {
    id: 'brain',
    name: 'Brain',
    alternativeNames: ['Encephalon', 'Cerebrum', 'Cortex'],
    system: 'Nervous',
    category: 'Organ',
    location: 'Cranial cavity of the head, enclosed within the neurocranium and surrounded by the three protective meningeal layers and cerebrospinal fluid (CSF).',
    description: 'The master coordination center of the central nervous system, commanding cognition, voluntary motor commands, memory encoding, sensory processing, and autonomic homeostasis.',
    functions: [
      'Executes higher-order cognitive processing, reasoning, decision making, and language.',
      'Synthesizes and interprets sensory inputs from vision, auditory, tactile, gustatory, and olfactory pathways.',
      'Coordinates conscious voluntary muscle contractions via motor cortex and cerebellar loops.',
      'Controls involuntary vital vegetative functions including heart rate, blood pressure, and respiratory rhythm.'
    ],
    structureDetails: 'Weighs approximately 1.3 to 1.4 kg with around 86 billion neurons. Partitioned into the cerebral hemispheres (frontal, parietal, temporal, occipital lobes), cerebellum (motor refinement), and brainstem (midbrain, pons, medulla oblongata).',
    relatedParts: ['mandible', 'trachea', 'deltoid'],
    clinicalRelevance: 'Target of cerebrovascular accidents (stroke), traumatic brain injury (TBI), neurodegenerative conditions (Alzheimer’s, Parkinson’s), and epilepsy.',
    meshPatterns: ['Brain', 'Cerebrum', 'Head_Neck', 'Frontalis', 'Masseter', 'Temporalis'],
    image: '/images/body-systems/nervous.png',
    color: '#9333ea',
    bg: '#f4edfc'
  },
  {
    id: 'liver',
    name: 'Liver',
    alternativeNames: ['Hepar', 'Hepatic Organ'],
    system: 'Digestive',
    category: 'Organ',
    location: 'Right upper quadrant (RUQ) of the abdominal cavity, inferior to the diaphragm, overlying the stomach, gallbladder, and duodenum.',
    description: 'The largest internal organ and principal metabolic processing plant of the human body, conducting over 500 vital biochemical syntheses and filtration operations.',
    functions: [
      'Produces and secretes bile salts to emulsify dietary lipids in the duodenum.',
      'Detoxifies pharmaceutical agents, alcohol, metabolic byproducts, and exogenous xenobiotics.',
      'Stores and metabolizes glycogen, fats, fat-soluble vitamins (A, D, E, K), and iron.',
      'Synthesizes essential plasma proteins including albumin, prothrombin, and fibrinogen coagulation factors.'
    ],
    structureDetails: 'Grossly divided into large right and left lobes along with caudate and quadrate lobes. Micro-architecturally structured into hexagonal hepatic lobules surrounding central veins, lined with fenestrated sinusoids and Kupffer phagocytic cells.',
    relatedParts: ['gallbladder', 'stomach', 'pancreas', 'duodenum'],
    clinicalRelevance: 'Pathologies include non-alcoholic fatty liver disease (NAFLD), viral hepatitis (A, B, C), cirrhosis from chronic insult, and hepatocellular carcinoma.',
    meshPatterns: ['Liver'],
    image: '/images/body-systems/digestive.png',
    color: '#ea580c',
    bg: '#fff2e2'
  },
  {
    id: 'stomach',
    name: 'Stomach',
    alternativeNames: ['Gaster', 'Ventriculus'],
    system: 'Digestive',
    category: 'Organ',
    location: 'Left upper quadrant (LUQ) of the epigastrium and left hypochondrium, between the termination of the esophagus and the duodenal sphincter.',
    description: 'A J-shaped hollow muscular organ designed for temporary food reservoir storage, enzymatic acid breakdown, and mechanical churning of ingested nutrients into semi-fluid chyme.',
    functions: [
      'Secretes gastric juice consisting of hydrochloric acid (HCl) at pH 1.5–2.0 to denature proteins and neutralize pathogens.',
      'Releases pepsinogen, activated into pepsin to initiate polypeptide enzymatic cleavage.',
      'Performs rhythmic muscular peristalsis and retropulsion to mechanically liquefy bolus meals.',
      'Produces intrinsic factor required for ileal absorption of cobalamin (vitamin B12).'
    ],
    structureDetails: 'Divided anatomically into the cardia, fundus, body, antrum, and pylorus. The muscularis externa has three distinct smooth muscle layers (longitudinal, circular, and inner oblique). The mucosal surface exhibits heavy longitudinal rugae folds.',
    relatedParts: ['liver', 'pancreas', 'duodenum', 'ascending-colon'],
    clinicalRelevance: 'Prone to peptic ulcer disease (often linked to Helicobacter pylori), gastroesophageal reflux disease (GERD), gastritis, and gastric adenocarcinoma.',
    meshPatterns: ['Stomach'],
    image: '/images/body-systems/digestive.png',
    color: '#ea580c',
    bg: '#fff2e2'
  },
  {
    id: 'lungs',
    name: 'Lungs',
    alternativeNames: ['Pulmones', 'Pulmonary Lobes'],
    system: 'Respiratory',
    category: 'Organ',
    location: 'Thoracic cavity on either side of the mediastinum, bounded laterally by the ribcage and inferiorly resting upon the diaphragm.',
    description: 'The paired principal respiratory organs responsible for external gas exchange, bringing ambient atmospheric oxygen into contact with microvascular capillary blood.',
    functions: [
      'Facilitates rapid alveolar diffusion of oxygen into pulmonary capillaries to oxygenate hemoglobin.',
      'Eliminates acidic carbon dioxide metabolic waste gas from expired air.',
      'Aids systemic acid-base (pH) regulation via the bicarbonate-carbonic acid carbonic anhydrase buffer loop.',
      'Filters small micro-thrombi and provides local angiotensin-converting enzyme (ACE) signaling.'
    ],
    structureDetails: 'Right lung contains three lobes (Superior, Middle, Inferior) separated by horizontal and oblique fissures; left lung contains two lobes (Superior, Inferior) with a cardiac notch. Termination contains over 300 million microscopic alveoli providing ~70 m² of surface area.',
    relatedParts: ['trachea', 'heart', 'sternum', 'ribs'],
    clinicalRelevance: 'Common conditions include chronic obstructive pulmonary disease (COPD), bronchial asthma, pneumonia, pulmonary embolism, and lung bronchogenic carcinoma.',
    meshPatterns: [
      'Left_Inferior_Lobe_of_Lung',
      'Left_Superior_Lobe_of_Lung',
      'Right_Inferior_Lobe_of_Lung',
      'Right_Middle_Lobe_of_Lung',
      'Right_Superior_Lobe_of_Lung',
      'Lung'
    ],
    image: '/images/body-systems/respiratory.png',
    color: '#0284c7',
    bg: '#e5f4fd'
  },
  {
    id: 'kidneys',
    name: 'Kidneys',
    alternativeNames: ['Renes', 'Nephric Organs'],
    system: 'Urinary',
    category: 'Organ',
    location: 'Retroperitoneal space on the posterior abdominal wall, flanking T12–L3 vertebral levels; right kidney sits slightly lower due to liver displacement.',
    description: 'Paired bean-shaped filtration powerhouses that continuously purify the circulating blood plasma, maintaining fluid volume, electrolyte osmolarity, and systemic blood pressure.',
    functions: [
      'Filters approximately 180 liters of blood plasma daily through over 2 million nephron units.',
      'Selectively reabsorbs glucose, amino acids, bicarbonate, and water while excreting nitrogenous urea and creatinine.',
      'Synthesizes renin in juxtaglomerular cells to regulate systemic arterial blood pressure.',
      'Produces erythropoietin (EPO) to stimulate bone marrow hematopoiesis in response to hypoxia.'
    ],
    structureDetails: 'Enclosed within a fibrous renal capsule and perirenal fat pad. Comprises an outer renal cortex containing glomeruli, an inner renal medulla with 8–18 renal pyramids, and a renal pelvis converging into the muscular ureter.',
    relatedParts: ['urinary-bladder', 'liver', 'stomach'],
    clinicalRelevance: 'Clinical entities include chronic kidney disease (CKD), acute tubular necrosis, nephrolithiasis (kidney stones), and glomerulonephritis.',
    meshPatterns: ['Left_Kidney', 'Right_Kidney', 'Kidney'],
    image: '/images/body-systems/circulatory.png',
    color: '#0284c7',
    bg: '#e0f2fe'
  },
  {
    id: 'trachea',
    name: 'Trachea',
    alternativeNames: ['Windpipe', 'Tracheal Tube'],
    system: 'Respiratory',
    category: 'Organ',
    location: 'Anterior neck and superior mediastinum, extending from the cricoid cartilage of the larynx (C6) down to the thoracic carina (T4/T5).',
    description: 'A flexible, cartilaginous conduit that conducts ambient air between the upper respiratory tract and the primary bronchial divisions of the lungs.',
    functions: [
      'Conveys inspired atmospheric air safely into left and right pulmonary bronchi.',
      'Traps airborne particulate dust and debris via a pseudostratified ciliated columnar mucociliary escalator.',
      'Warms and humidifies inspired air before it reaches delicate alveolar microstructures.',
      'Prevents structural airway collapse during negative thoracic pressure inhalation via rigid hyaline C-rings.'
    ],
    structureDetails: 'Measures 10–12 cm in length and ~2 cm in diameter. Supported by 16 to 20 incomplete hyaline cartilage C-shaped rings, bridged posteriorly by the trachealis smooth muscle against the esophagus.',
    relatedParts: ['lungs', 'thyroid-gland', 'heart', 'sternum'],
    clinicalRelevance: 'Important in endotracheal intubation, tracheostomy, tracheitis, and foreign body tracheal aspiration emergencies.',
    meshPatterns: ['Trachea', 'Left_Main_Bronchus', 'Right_Main_Bronchus'],
    image: '/images/body-systems/respiratory.png',
    color: '#0284c7',
    bg: '#e5f4fd'
  },
  {
    id: 'thyroid-gland',
    name: 'Thyroid Gland',
    alternativeNames: ['Glandula Thyroidea'],
    system: 'Endocrine',
    category: 'Gland',
    location: 'Anterior lower neck, wrapped around the front and sides of the trachea just below the prominence of the thyroid cartilage.',
    description: 'A butterfly-shaped endocrine gland responsible for setting basal metabolic rate, protein synthesis, cellular sensitivity to catecholamines, and calcium homeostasis.',
    functions: [
      'Synthesizes and releases iodine-dependent thyroid hormones: triiodothyronine (T3) and thyroxine (T4).',
      'Accelerates basal cellular oxygen consumption, ATP utilization, and systemic thermogenesis.',
      'Releases calcitonin from parafollicular C-cells to lower elevated blood calcium levels.',
      'Supports neurodevelopment and linear skeletal growth in children.'
    ],
    structureDetails: 'Consists of two lateral lobes connected across the anterior tracheal midline by a narrow isthmus. Highly vascularized tissue composed of microscopic spherical follicles filled with iodinated thyroglobulin colloid.',
    relatedParts: ['trachea', 'mandible', 'deltoid'],
    clinicalRelevance: 'Disorders encompass hypothyroidism (Hashimoto’s thyroiditis), hyperthyroidism (Graves’ disease), multinodular goiter, and thyroid neoplasms.',
    meshPatterns: ['Thyroid_Gland'],
    image: '/images/body-systems/nervous.png',
    color: '#8b5cf6',
    bg: '#f5f3ff'
  },
  {
    id: 'pancreas',
    name: 'Pancreas',
    alternativeNames: ['Pancreatic Gland'],
    system: 'Digestive',
    category: 'Organ',
    location: 'Retroperitoneal space across the posterior abdominal wall, stretching horizontally behind the stomach from the curve of the duodenum to the spleen.',
    description: 'A dual-function exocrine and endocrine gland that manufactures potent digestive enzymes for nutrient breakdown as well as hormones regulating blood sugar levels.',
    functions: [
      'Exocrine acinar cells secrete amylase, lipase, and trypsinogen into the duodenum.',
      'Releases alkaline bicarbonate (HCO3-) juice to neutralize acidic stomach chyme in the gut.',
      'Endocrine beta cells synthesize insulin to promote cellular glucose uptake and glycogen storage.',
      'Endocrine alpha cells secrete glucagon to mobilize hepatic glucose stores during fasting.'
    ],
    structureDetails: 'Divided into head, uncinate process, neck, body, and tail. The main pancreatic duct joins the common bile duct at the hepatopancreatic ampulla (ampulla of Vater). The endocrine tissue consists of scattered islets of Langerhans.',
    relatedParts: ['liver', 'stomach', 'gallbladder', 'duodenum'],
    clinicalRelevance: 'Associated with Diabetes Mellitus (Types 1 and 2), acute and chronic pancreatitis, and pancreatic ductal adenocarcinoma.',
    meshPatterns: ['Pancreas'],
    image: '/images/body-systems/digestive.png',
    color: '#ea580c',
    bg: '#fff2e2'
  },
  {
    id: 'gallbladder',
    name: 'Gallbladder',
    alternativeNames: ['Vesica Biliaris', 'Cholecyst'],
    system: 'Digestive',
    category: 'Organ',
    location: 'Shallow fossa on the visceral inferior surface of the right hepatic lobe within the right hypochondriac abdominal region.',
    description: 'A small pear-shaped reservoir that concentrates, stores, and squirts bile produced by the liver into the small intestine during fatty meal ingestion.',
    functions: [
      'Stores up to 50 mL of dilute hepatic bile, concentrating bile salts up to 5- to 10-fold.',
      'Contracts in response to the duodenal peptide hormone cholecystokinin (CCK).',
      'Ejects concentrated bile through the cystic duct into the common bile duct to emulsify fats.'
    ],
    structureDetails: 'Features a fundus, body, and neck tapering into the spiral-valved cystic duct. Lined with tall absorptive simple columnar epithelium with apical microvilli.',
    relatedParts: ['liver', 'stomach', 'pancreas', 'duodenum'],
    clinicalRelevance: 'Prone to cholelithiasis (gallstones), cholecystitis (gallbladder inflammation), and biliary colic requiring laparoscopic cholecystectomy.',
    meshPatterns: ['Gallbladder'],
    image: '/images/body-systems/digestive.png',
    color: '#10b981',
    bg: '#ecfdf5'
  },
  {
    id: 'urinary-bladder',
    name: 'Urinary Bladder',
    alternativeNames: ['Vesica Urinaria'],
    system: 'Urinary',
    category: 'Organ',
    location: 'Lesser pelvic cavity, situated directly posterior to the pubic symphysis, anterior to the rectum in males and anterior to the uterus in females.',
    description: 'A distensible muscular reservoir that receives continuous urine flow from both ureters, safely expanding until voluntary micturition is initiated.',
    functions: [
      'Collects and temporarily holds urine volume (normal functional capacity 350–500 mL).',
      'Prevents vesicoureteral retrograde urine reflux through oblique ureteral tunnel valve orientation.',
      'Initiates detrusor smooth muscle coordinated contraction during autonomic parasympathetic urination.'
    ],
    structureDetails: 'Features an apex, body, fundus, and neck. The interior floor contains the smooth-walled trigone triangle between ureteric orifices and internal urethral orifice. Wall is lined by impermeable transitional urothelium.',
    relatedParts: ['kidneys', 'pelvis'],
    clinicalRelevance: 'Subject to urinary tract infections (cystitis), urinary incontinence, neurogenic bladder, urinary retention, and transitional cell urothelial carcinoma.',
    meshPatterns: ['Urinary_Bladder', 'Left_Ureter', 'Right_Ureter'],
    image: '/images/body-systems/circulatory.png',
    color: '#0284c7',
    bg: '#e0f2fe'
  },
  {
    id: 'colon',
    name: 'Colon (Large Intestine)',
    alternativeNames: ['Large Bowel', 'Intestinum Crassum'],
    system: 'Digestive',
    category: 'Organ',
    location: 'Frames the perimeter of the peritoneal cavity, extending from the ileocecal valve in the right iliac fossa around to the pelvis.',
    description: 'The final major segment of the alimentary canal, responsible for extracting remaining water and salts from indigestible food matter before fecal compaction.',
    functions: [
      'Reabsorbs water, electrolytes, and sodium ions from liquid chyme into blood circulation.',
      'Harbors trillions of symbiotic gut microbiome bacteria that ferment fiber and synthesize vitamin K and B.',
      'Propels, consolidates, and stores desiccated fecal residue through mass peristaltic movements.'
    ],
    structureDetails: 'Divided into Ascending Colon, Transverse Colon, Descending Colon, and Sigmoid Colon. Characterized by three bands of longitudinal smooth muscle called taeniae coli that gather the colon wall into distinct saccular pouches (haustra).',
    relatedParts: ['stomach', 'liver', 'pancreas', 'urinary-bladder'],
    clinicalRelevance: 'Clinical significance in colorectal polyps, colon cancer, diverticulitis, irritable bowel syndrome (IBS), and ulcerative colitis.',
    meshPatterns: [
      'Ascending_Colon',
      'Transverse_Colon',
      'Descending_Colon',
      'Sigmoid_Colon',
      'Vermiform_Appendix'
    ],
    image: '/images/body-systems/digestive.png',
    color: '#ea580c',
    bg: '#fff2e2'
  },
  {
    id: 'femur',
    name: 'Femur',
    alternativeNames: ['Thigh Bone', 'Os Femoris'],
    system: 'Skeletal',
    category: 'Bone',
    location: 'Lower extremity, spanning between the pelvic acetabulum hip socket and the proximal tibia and patella of the knee.',
    description: 'The longest, largest, and strongest tubular bone in the entire human skeletal framework, bearing massive axial and kinetic loads during walking and running.',
    functions: [
      'Transmits gravitational body weight from the pelvic girdle into the lower legs and feet.',
      'Acts as an anchor lever arm for heavy locomotory muscle groups including quadriceps and hamstrings.',
      'Stores minerals (calcium, phosphorus) and red marrow for hematopoiesis in proximal cancellous bone.'
    ],
    structureDetails: 'Features a smooth spherical head, an oblique neck subject to high bending moments, greater and lesser trochanters for muscle insertions, a cylindrical shaft with a posterior linea aspera, and medial and lateral condyles articulating at the knee.',
    relatedParts: ['patella', 'tibia', 'pelvis', 'quadriceps'],
    clinicalRelevance: 'Femoral neck fractures are common in geriatric osteoporosis; high-energy mid-shaft fractures carry risks of fat embolism and severe internal blood loss.',
    meshPatterns: ['Left_Femur', 'Right_Femur', 'Femur'],
    image: '/images/body-systems/skeletal.png',
    color: '#0d9488',
    bg: '#e1f8f3'
  },
  {
    id: 'patella',
    name: 'Patella',
    alternativeNames: ['Kneecap', 'Rotula'],
    system: 'Skeletal',
    category: 'Bone',
    location: 'Anterior aspect of the knee joint, suspended within the tendon of the quadriceps femoris muscle directly in front of the distal femoral condyles.',
    description: 'The largest sesamoid bone in the human skeleton, protecting the knee joint and increasing the mechanical leverage of the quadriceps extensor mechanism.',
    functions: [
      'Increases the mechanical moment arm of the quadriceps tendon by displacing it away from the knee joint axis.',
      'Protects anterior knee structures from direct blunt impact and friction wear.',
      'Stabilizes knee joint kinematics during deep knee flexion and high-impact decelerations.'
    ],
    structureDetails: 'Triangular flat bone with a rounded proximal base and pointed distal apex. The smooth posterior surface possesses thick hyaline articular cartilage articulating with the patellar groove of the femur.',
    relatedParts: ['femur', 'tibia', 'knee-joint', 'quadriceps'],
    clinicalRelevance: 'Common presentations include patellofemoral pain syndrome (runner’s knee), patellar dislocation/subluxation, chondromalacia patellae, and fractures.',
    meshPatterns: ['Left_Patella', 'Right_Patella', 'Patella'],
    image: '/images/body-systems/skeletal.png',
    color: '#0d9488',
    bg: '#e1f8f3'
  },
  {
    id: 'tibia',
    name: 'Tibia',
    alternativeNames: ['Shinbone', 'Medial Lower Leg Bone'],
    system: 'Skeletal',
    category: 'Bone',
    location: 'Medial side of the lower leg, situated between the knee joint superiorly and the talocrural ankle joint inferiorly.',
    description: 'The second largest bone in the human body and the primary weight-bearing pillar of the lower limb, anchoring extensive calf and foot musculature.',
    functions: [
      'Supports nearly the entire downward axial weight of the body transmitted from the femur.',
      'Articulates with the talus bone of the foot to allow ankle plantarflexion and dorsiflexion.',
      'Provides extensive anterior and posterior attachment surfaces for leg and toe flexors/extensors.'
    ],
    structureDetails: 'Possesses expanded medial and lateral condyles with a tibial plateau articulating with femoral condyles and menisci, a prominent tibial tuberosity for patellar tendon insertion, an anterior subcutaneous crest (shin), and an inferior medial malleolus.',
    relatedParts: ['femur', 'patella', 'gastrocnemius', 'soleus'],
    clinicalRelevance: 'Prone to tibial shaft fractures from vehicular or sports trauma, tibial stress fractures (shin splints), and Osgood-Schlatter apophysitis in adolescents.',
    meshPatterns: ['Left_Tibia', 'Right_Tibia', 'Tibia', 'Tibialis'],
    image: '/images/body-systems/skeletal.png',
    color: '#0d9488',
    bg: '#e1f8f3'
  },
  {
    id: 'humerus',
    name: 'Humerus',
    alternativeNames: ['Upper Arm Bone', 'Brachial Bone'],
    system: 'Skeletal',
    category: 'Bone',
    location: 'Brachium (upper arm), extending from the glenoid fossa of the scapula at the shoulder down to the radius and ulna at the elbow joint.',
    description: 'The largest and longest bone of the upper limb, serving as a powerful mechanical lever for arm elevation, rotation, and forearm positioning.',
    functions: [
      'Forms the highly mobile glenohumeral ball-and-socket shoulder joint with the scapula.',
      'Articulates at the trochlea and capitulum to form the hinge and pivot joints of the elbow.',
      'Provides proximal origins and distal insertions for major upper body muscles (pectoralis, deltoid, biceps, triceps).'
    ],
    structureDetails: 'Consists of a hemispherical head, anatomical and surgical necks, greater and lesser tubercles, an anterolateral deltoid tuberosity, and a distal humerus condyle with epicondyles and olecranon fossa.',
    relatedParts: ['deltoid', 'biceps-brachii', 'triceps-brachii', 'scapula', 'clavicle'],
    clinicalRelevance: 'Fractures of the surgical neck carry risk of axillary nerve injury; mid-shaft fractures can paralyze the radial nerve leading to wrist drop.',
    meshPatterns: ['Left_Humerus', 'Right_Humerus', 'Humerus'],
    image: '/images/body-systems/skeletal.png',
    color: '#0d9488',
    bg: '#e1f8f3'
  },
  {
    id: 'sternum',
    name: 'Sternum',
    alternativeNames: ['Breastbone'],
    system: 'Skeletal',
    category: 'Bone',
    location: 'Anterior midline of the thoracic cage, situated directly in front of the heart and pericardial sac.',
    description: 'A flat, elongated T-shaped bone that anchors the anterior ribcage, protecting the heart and mediastinal great vessels from frontal trauma.',
    functions: [
      'Forms the anterior central anchor point for true rib costal cartilages (ribs 1–7).',
      'Protects the cardiac myocardium, ascending aorta, and mediastinum from blunt impacts.',
      'Serves as an origin for the pectoralis major and sternocleidomastoid muscles.'
    ],
    structureDetails: 'Composed of three fused segments: the superior manubrium with clavicular notches, the central body (gladiolus), and the inferior cartilaginous xiphoid process. The junction between manubrium and body forms the palpable sternal angle of Louis.',
    relatedParts: ['heart', 'lungs', 'pectoralis-major', 'clavicle', 'ribs'],
    clinicalRelevance: 'Common site for median sternotomy during open-heart surgery, bone marrow aspiration biopsies, and sternal fractures from steering wheel impact.',
    meshPatterns: ['Body_of_Sternum', 'Manubrium_of_Sternum', 'Sternum'],
    image: '/images/body-systems/skeletal.png',
    color: '#0d9488',
    bg: '#e1f8f3'
  },
  {
    id: 'mandible',
    name: 'Mandible',
    alternativeNames: ['Lower Jawbone', 'Inferior Maxilla'],
    system: 'Skeletal',
    category: 'Bone',
    location: 'Anterior and inferior aspect of the facial skeleton, articulating symmetrically with the temporal bones at the skull base.',
    description: 'The largest, strongest, and only movable bone in the adult human skull, forming the lower jaw and dental arch for mastication and speech.',
    functions: [
      'Enables opening, closing, protrusion, retrusion, and side-to-side lateral grinding jaw movements.',
      'Houses the 16 lower adult teeth in individual alveolar sockets.',
      'Provides anchor sites for powerful masticatory muscles (masseter, temporalis, pterygoids) and tongue muscles.'
    ],
    structureDetails: 'Consists of a curved horizontal body meeting two vertical rami at the mandibular angles. Each ramus terminates superiorly in an anterior coronoid process and a posterior condylar process fitting into the mandibular fossa of the TMJ.',
    relatedParts: ['brain', 'deltoid', 'trachea'],
    clinicalRelevance: 'Temporomandibular joint (TMJ) dysfunction, mandibular fractures from facial impact, dental malocclusions, and third molar impactions.',
    meshPatterns: ['Mandible'],
    image: '/images/body-systems/skeletal.png',
    color: '#0d9488',
    bg: '#e1f8f3'
  },
  {
    id: 'biceps-brachii',
    name: 'Biceps Brachii',
    alternativeNames: ['Biceps Muscle', 'Arm Flexor'],
    system: 'Muscular',
    category: 'Muscle',
    location: 'Anterior compartment of the arm, overlying the brachialis and coracobrachialis muscles between the shoulder and elbow.',
    description: 'A prominent two-headed superficial fusiform muscle on the front of the upper arm, celebrated for arm flexing and powerful forearm supination.',
    functions: [
      'Acts as the most powerful supinator of the forearm (turning palm upward), especially when the elbow is flexed.',
      'Flexes the forearm at the elbow joint against resistance.',
      'Weakly assists in shoulder forward flexion and joint stabilization.'
    ],
    structureDetails: 'Originates with a long head tendon from the supraglenoid tubercle of the scapula and a short head from the coracoid process. Both bellies coalesce into a stout distal tendon inserting into the radial tuberosity and bicipital aponeurosis.',
    relatedParts: ['humerus', 'deltoid', 'triceps-brachii'],
    clinicalRelevance: 'Proximal long-head biceps tendon rupture (Popeye muscle sign), bicipital tendonitis from overhead athletic strain, and distal tendon avulsions.',
    meshPatterns: [
      'Left_Biceps_Brachii',
      'Right_Biceps_Brachii',
      'Left_Long_Head_of_Biceps_Brachii',
      'Left_Short_Head_of_Biceps_Brachii',
      'Right_Long_Head_of_Biceps_Brachii',
      'Right_Short_Head_of_Biceps_Brachii'
    ],
    image: '/images/body-systems/muscular.png',
    color: '#f43f5e',
    bg: '#ffeef0'
  },
  {
    id: 'deltoid',
    name: 'Deltoid Muscle',
    alternativeNames: ['Shoulder Cap Muscle', 'Musculus Deltoideus'],
    system: 'Muscular',
    category: 'Muscle',
    location: 'Superficial muscle forming the rounded contour of the human shoulder, covering the glenohumeral joint.',
    description: 'A powerful triangular multipennate muscle that wraps over the shoulder, acting as the prime mover of arm abduction from 15° to 90°.',
    functions: [
      'Central acromial fibers are the primary mover for arm abduction in the coronal plane.',
      'Anterior clavicular fibers assist in shoulder flexion and internal medial rotation.',
      'Posterior scapular spinal fibers assist in arm extension and external lateral rotation.'
    ],
    structureDetails: 'Originates extensively from the lateral third of the clavicle, the acromion process, and the spine of the scapula. Converges distally into a thick tendon inserting onto the deltoid tuberosity on the lateral humerus.',
    relatedParts: ['humerus', 'biceps-brachii', 'pectoralis-major', 'trapezius'],
    clinicalRelevance: 'Preferred site for intramuscular injections (vaccines), shoulder impingement syndromes, and axillary nerve paralysis after shoulder dislocation.',
    meshPatterns: [
      'Left_Deltoid',
      'Right_Deltoid',
      'Left_Acromial_Part_of_Deltoid',
      'Left_Clavicular_Part_of_Deltoid',
      'Left_Scapular_Spinal_Part_of_Deltoid',
      'Right_Acromial_Part_of_Deltoid',
      'Right_Clavicular_Part_of_Deltoid',
      'Right_Scapular_Spinal_Part_of_Deltoid'
    ],
    image: '/images/body-systems/muscular.png',
    color: '#f43f5e',
    bg: '#ffeef0'
  },
  {
    id: 'pectoralis-major',
    name: 'Pectoralis Major',
    alternativeNames: ['Chest Muscle', 'Pecs'],
    system: 'Muscular',
    category: 'Muscle',
    location: 'Superficial anterior chest wall, extending from the sternum, clavicle, and upper rib cartilages across to the proximal humerus.',
    description: 'A thick, fan-shaped muscle constituting the bulk of the anterior chest, critical for pushing movements, chest adduction, and internal arm rotation.',
    functions: [
      'Adducts the humerus toward the chest midline and rotates the arm internally/medially.',
      'Clavicular head assists in elevating and forward-flexing the extended arm.',
      'Sternocostal head depresses the shoulder girdle and pulls the torso upward in climbing.'
    ],
    structureDetails: 'Divided into clavicular, sternocostal, and abdominal parts. Fibers converge into a bilaminar flat tendon twisting 180 degrees before inserting onto the lateral lip of the bicipital groove of the humerus.',
    relatedParts: ['sternum', 'deltoid', 'humerus', 'rectus-abdominis'],
    clinicalRelevance: 'Bench-press related pectoralis tendon tears, Poland syndrome (congenital absence), and trigger-point myofascial chest pain.',
    meshPatterns: [
      'Left_Abdominal_Part_of_Pectoralis_Major',
      'Left_Clavicular_Head_of_Pectoralis_Major',
      'Left_Pectoralis_Minor',
      'Left_Sternocostal_Head_of_Pectoralis_Major',
      'Right_Abdominal_Part_of_Pectoralis_Major',
      'Right_Clavicular_Head_of_Pectoralis_Major',
      'Right_Pectoralis_Minor',
      'Right_Sternocostal_Head_of_Pectoralis_Major'
    ],
    image: '/images/body-systems/muscular.png',
    color: '#f43f5e',
    bg: '#ffeef0'
  },
  {
    id: 'rectus-abdominis',
    name: 'Rectus Abdominis',
    alternativeNames: ['Abdominal Muscle', 'Six-Pack Muscle', 'Abs'],
    system: 'Muscular',
    category: 'Muscle',
    location: 'Anterior wall of the abdomen, running vertically on either side of the midline linea alba from the lower ribcage down to the pubic crest.',
    description: 'A paired long strap-like muscle of the anterior trunk, fundamental for flexing the lumbar spine, compressing abdominal viscera, and stabilizing the pelvis.',
    functions: [
      'Flexes the vertebral column, bringing the thorax closer to the pelvis (as in crunches).',
      'Compresses the abdominal viscera, increasing intra-abdominal pressure for forced expiration, coughing, and defecation.',
      'Stabilizes the pelvis and counters lumbar hyperlordosis while upright.'
    ],
    structureDetails: 'Contained within the fibrous rectus sheath formed by aponeuroses of the abdominal obliques. Segmented horizontally by 3–4 fibrous tendinous intersections, giving the distinctive "washboard abs" appearance.',
    relatedParts: ['pectoralis-major', 'pelvis', 'stomach', 'colon'],
    clinicalRelevance: 'Diastasis recti (separation of rectus muscles during pregnancy), sports hernias (athletic pubalgia), and rectus sheath hematoma.',
    meshPatterns: ['Left_Rectus_Abdominis', 'Right_Rectus_Abdominis'],
    image: '/images/body-systems/muscular.png',
    color: '#f43f5e',
    bg: '#ffeef0'
  },
  {
    id: 'quadriceps',
    name: 'Quadriceps Femoris',
    alternativeNames: ['Quads', 'Thigh Extensors'],
    system: 'Muscular',
    category: 'Muscle',
    location: 'Anterior compartment of the thigh, wrapping the front and sides of the femur.',
    description: 'The great four-headed extensor muscle complex of the leg, generating the primary force required to extend the knee joint during upright locomotion.',
    functions: [
      'Extends the leg at the knee joint, carrying the entire body weight upward during walking, jumping, and climbing stairs.',
      'Rectus femoris belly crosses the hip joint to assist in hip forward flexion.',
      'Maintains patellar tracking stability inside the femoral trochlear groove.'
    ],
    structureDetails: 'Consists of four distinct muscles: Rectus Femoris (superficial bi-articular), Vastus Lateralis (outer thigh), Vastus Medialis (inner tear-drop thigh), and Vastus Intermedius (deep to rectus). All unite into the common quadriceps tendon inserting via the patella.',
    relatedParts: ['femur', 'patella', 'tibia', 'knee-joint'],
    clinicalRelevance: 'Quadriceps tendon rupture, quadriceps muscle strains from sprinting, and vastus medialis obliquus (VMO) atrophy predisposing to patellar tracking instability.',
    meshPatterns: [
      'Left_Quadriceps',
      'Right_Quadriceps',
      'Left_Rectus_Femoris',
      'Right_Rectus_Femoris',
      'Left_Vastus_Lateralis',
      'Right_Vastus_Lateralis',
      'Left_Vastus_Medialis',
      'Right_Vastus_Medialis'
    ],
    image: '/images/body-systems/muscular.png',
    color: '#f43f5e',
    bg: '#ffeef0'
  },
  {
    id: 'gastrocnemius',
    name: 'Gastrocnemius & Soleus (Calf)',
    alternativeNames: ['Triceps Surae', 'Calf Muscles'],
    system: 'Muscular',
    category: 'Muscle',
    location: 'Posterior superficial compartment of the lower leg, forming the muscular prominence of the calf.',
    description: 'The prime mover for ankle plantarflexion (pointing toes down), crucial for pushing the ground backward during sprinting, jumping, and running.',
    functions: [
      'Powerful plantarflexion of the foot at the talocrural ankle joint.',
      'Gastrocnemius heads assist in knee flexion since they originate above the knee joint.',
      'Soleus acts as a postural muscle preventing the tibia from falling forward over the foot while standing.'
    ],
    structureDetails: 'Gastrocnemius has medial and lateral heads originating from the femoral condyles; the underlying soleus originates from the posterior tibia and fibula. Both insert via the massive calcaneal (Achilles) tendon into the calcaneus heel bone.',
    relatedParts: ['tibia', 'femur', 'knee-joint', 'patella'],
    clinicalRelevance: 'Achilles tendon rupture, calf muscle tears (tennis leg), plantar fasciitis association, and peripheral venous blood pooling.',
    meshPatterns: [
      'Left_Lateral_Head_of_Gastrocnemius',
      'Left_Medial_Head_of_Gastrocnemius',
      'Right_Lateral_Head_of_Gastrocnemius',
      'Right_Medial_Head_of_Gastrocnemius',
      'Left_Soleus',
      'Right_Soleus',
      'Left_Calcaneal_Tendon',
      'Right_Calcaneal_Tendon'
    ],
    image: '/images/body-systems/muscular.png',
    color: '#f43f5e',
    bg: '#ffeef0'
  },
  {
    id: 'gluteus-maximus',
    name: 'Gluteus Maximus',
    alternativeNames: ['Glute', 'Buttock Muscle'],
    system: 'Muscular',
    category: 'Muscle',
    location: 'Posterior pelvis, forming the largest muscle mass in the human body and defining the prominence of the buttock contour.',
    description: 'A massive coarse-fibered quadrate muscle that acts as the principal extensor of the hip, essential for powerful hip propulsion and upright balance.',
    functions: [
      'Chief extensor of the thigh at the hip joint, driving the torso upright from sitting or stooping.',
      'Stabilizes the pelvis over the femur to prevent forward torso pitching while walking.',
      'Assists in hip external lateral rotation and thigh abduction via iliotibial tract fibers.'
    ],
    structureDetails: 'Originates from the posterior ilium behind the posterior gluteal line, the dorsal sacrum, and the sacrotuberous ligament. Distal fibers insert into the iliotibial tract and the gluteal tuberosity of the femur.',
    relatedParts: ['femur', 'pelvis', 'quadriceps', 'rectus-abdominis'],
    clinicalRelevance: 'Gluteal muscle strains, piriformis syndrome entrapment nearby, gluteal amnesia/weakness leading to lower back pain, and gluteus medius Trendelenburg gait.',
    meshPatterns: [
      'Left_Gluteus_Maximus',
      'Right_Gluteus_Maximus',
      'Left_Gluteus_Medius',
      'Right_Gluteus_Medius',
      'Left_Gluteus_Minimus',
      'Right_Gluteus_Minimus'
    ],
    image: '/images/body-systems/muscular.png',
    color: '#f43f5e',
    bg: '#ffeef0'
  }
];

// Map of ID to Anatomy Part
export const ANATOMY_BY_ID = Object.fromEntries(
  ANATOMY_REGISTRY.map((item) => [item.id, item])
);

// Map mesh name in GLB to registered anatomy part
export function getAnatomyPartByMeshName(meshName) {
  if (!meshName) return null;
  const cleanName = meshName.toLowerCase();

  // 1. Direct match on meshPatterns
  for (const part of ANATOMY_REGISTRY) {
    if (
      part.meshPatterns.some((pattern) =>
        cleanName.includes(pattern.toLowerCase())
      )
    ) {
      return part;
    }
  }

  // 2. Keyword fallback matching
  for (const part of ANATOMY_REGISTRY) {
    if (
      cleanName.includes(part.name.toLowerCase()) ||
      cleanName.includes(part.id.toLowerCase())
    ) {
      return part;
    }
  }

  return null;
}

// Get related parts for an anatomy record
export function getRelatedAnatomyParts(partId) {
  const part = ANATOMY_BY_ID[partId];
  if (!part || !part.relatedParts) return [];
  return part.relatedParts
    .map((relId) => ANATOMY_BY_ID[relId])
    .filter(Boolean);
}

// Full text search helper for the Anatomy Library
export function searchAnatomyRegistry(query, systemFilter = 'All', categoryFilter = 'All') {
  const q = (query || '').toLowerCase().trim();

  return ANATOMY_REGISTRY.filter((part) => {
    // System Filter
    const matchesSystem =
      systemFilter === 'All' ||
      part.system.toLowerCase() === systemFilter.toLowerCase();

    // Category Filter
    const matchesCategory =
      categoryFilter === 'All' ||
      part.category.toLowerCase() === categoryFilter.toLowerCase();

    if (!matchesSystem || !matchesCategory) return false;
    if (!q) return true;

    // Search query matches: name, alternative names, system, category, location, description, functions
    const inName = part.name.toLowerCase().includes(q);
    const inAliases = part.alternativeNames.some((alias) =>
      alias.toLowerCase().includes(q)
    );
    const inSystem = part.system.toLowerCase().includes(q);
    const inCategory = part.category.toLowerCase().includes(q);
    const inLocation = part.location.toLowerCase().includes(q);
    const inDesc = part.description.toLowerCase().includes(q);
    const inFuncs = part.functions.some((f) => f.toLowerCase().includes(q));

    return (
      inName ||
      inAliases ||
      inSystem ||
      inCategory ||
      inLocation ||
      inDesc ||
      inFuncs
    );
  });
}
