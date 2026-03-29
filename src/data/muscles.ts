import type { MuscleCategory } from '../App';

const muscles = [
  'Deltoid',
  'Biceps Brachii',
  'Triceps Brachii',
  'Brachialis',
  'Brachioradialis',
  'Pectoralis Major',
  'Pectoralis Minor',
  'Latissimus Dorsi',
  'Trapezius',
  'Rhomboid Major',
  'Rhomboid Minor',
  'Serratus Anterior',
  'Supraspinatus',
  'Infraspinatus',
  'Teres Major',
  'Teres Minor',
  'Subscapularis',
  'Coracobrachialis',
  'Gluteus Maximus',
  'Gluteus Medius',
  'Gluteus Minimus',
  'Tensor Fasciae Latae',
  'Iliopsoas',
  'Rectus Femoris',
  'Vastus Lateralis',
  'Vastus Medialis',
  'Vastus Intermedius',
  'Sartorius',
  'Gracilis',
  'Adductor Longus',
  'Adductor Brevis',
  'Adductor Magnus',
  'Biceps Femoris',
  'Semitendinosus',
  'Semimembranosus',
  'Tibialis Anterior',
  'Tibialis Posterior',
  'Gastrocnemius',
  'Soleus',
  'Peroneus Longus',
  'Peroneus Brevis'
];

const bones = [
  'Humerus',
  'Radius',
  'Ulna',
  'Scapula',
  'Clavicle',
  'Carpals',
  'Metacarpals',
  'Phalanges (Hand)',
  'Femur',
  'Tibia',
  'Fibula',
  'Patella',
  'Tarsals',
  'Metatarsals',
  'Phalanges (Foot)',
  'Pelvis',
  'Sacrum',
  'Coccyx',
  'Sternum',
  'Ribs',
  'Vertebrae (Cervical)',
  'Vertebrae (Thoracic)',
  'Vertebrae (Lumbar)',
  'Skull',
  'Mandible',
  'Maxilla',
  'Zygomatic',
  'Temporal',
  'Occipital',
  'Sphenoid'
];

const nerves = [
  'Median Nerve',
  'Ulnar Nerve',
  'Radial Nerve',
  'Musculocutaneous Nerve',
  'Axillary Nerve',
  'Sciatic Nerve',
  'Femoral Nerve',
  'Tibial Nerve',
  'Common Peroneal Nerve',
  'Obturator Nerve',
  'Brachial Plexus',
  'Lumbar Plexus',
  'Sacral Plexus',
  'Cervical Plexus',
  'Vagus Nerve',
  'Phrenic Nerve',
  'Accessory Nerve',
  'Hypoglossal Nerve',
  'Facial Nerve',
  'Trigeminal Nerve',
  'Glossopharyngeal Nerve',
  'Vestibulocochlear Nerve',
  'Optic Nerve',
  'Oculomotor Nerve',
  'Trochlear Nerve',
  'Abducens Nerve',
  'Olfactory Nerve',
  'Intercostal Nerves',
  'Pudendal Nerve',
  'Genitofemoral Nerve'
];

const joints = [
  'Shoulder Joint',
  'Elbow Joint',
  'Wrist Joint',
  'Hip Joint',
  'Knee Joint',
  'Ankle Joint',
  'Acromioclavicular Joint',
  'Sternoclavicular Joint',
  'Glenohumeral Joint',
  'Radioulnar Joint',
  'Metacarpophalangeal Joint',
  'Interphalangeal Joint',
  'Sacroiliac Joint',
  'Pubic Symphysis',
  'Tibiofibular Joint',
  'Subtalar Joint',
  'Talocrural Joint',
  'Metatarsophalangeal Joint',
  'Temporomandibular Joint',
  'Atlanto-occipital Joint',
  'Atlanto-axial Joint',
  'Intervertebral Joints',
  'Costovertebral Joint',
  'Costochondral Joint',
  'Manubriosternal Joint',
  'Xiphisternal Joint',
  'Carpometacarpal Joint',
  'Midcarpal Joint',
  'Radiocarpal Joint',
  'Tarsometatarsal Joint'
];

export const getMusclesByCategory = (category: MuscleCategory): string[] => {
  switch (category) {
    case 'muscles':
      return muscles;
    case 'bones':
      return bones;
    case 'nerves':
      return nerves;
    case 'joints':
      return joints;
    case 'all':
      return [...muscles, ...bones, ...nerves, ...joints];
    default:
      return [...muscles, ...bones, ...nerves, ...joints];
  }
};
