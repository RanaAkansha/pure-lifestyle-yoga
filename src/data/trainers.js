export const trainers = [
  {
    id: 'trainer-1',
    name: 'Akta Shukla',
    specialization: 'Founder & Lead Educator',
    experience: 15,
    rating: 5.0,
    image: '/trainers/ananya.jpg', // Placeholder
    bio: 'Akta Shukla is the visionary co-founder of Pure Lifestyle Yoga. She specializes in creating unparalleled, luxury in-home wellness experiences designed strictly for the discerning few. Her highly personalized approach blends deep traditional knowledge with modern therapeutic precision.',
    certifications: ['RYT-500', 'Yoga Therapy Certification (IAYT)', 'Advanced Restorative Specialist'],
  },
  {
    id: 'trainer-2',
    name: 'Samresh Keshyap',
    specialization: 'Founder & Master Practitioner',
    experience: 18,
    rating: 5.0,
    image: '/trainers/rohan.jpg', // Placeholder
    bio: 'Samresh Keshyap, co-founder of Pure Lifestyle Yoga, brings over 18 years of profound expertise in clinical yoga and holistic well-being. He leads the team of educators to deliver the most exclusive, tailored yoga practices in Gurugram, ensuring every client achieves transformative health results.',
    certifications: ['E-RYT 500', 'Clinical Yoga Expert', 'Master Wellness Consultant'],
  },
  {
    id: 'trainer-3',
    name: 'Priya Desai',
    specialization: 'Prenatal & Postnatal Yoga',
    experience: 10,
    rating: 4.9,
    image: '/trainers/priya.jpg',
    bio: 'Priya is passionate about supporting women through their pregnancy journey and beyond. With specialized training in prenatal and postnatal yoga, she creates safe, nurturing sessions that help expecting and new mothers maintain their physical and emotional wellbeing.',
    certifications: ['RYT-500', 'Prenatal Yoga Certification', 'Women\'s Health Specialist'],
  },
  {
    id: 'trainer-4',
    name: 'Arjun Kapoor',
    specialization: 'Stress Relief & Mindfulness',
    experience: 15,
    rating: 5.0,
    image: '/trainers/arjun.jpg',
    bio: 'Arjun is a master practitioner of restorative yoga and meditation with 15 years of teaching experience. His sessions blend gentle movement with breathwork and guided meditation to help clients manage stress, anxiety, and improve sleep quality. He has worked with executives and corporate teams across the country.',
    certifications: ['E-RYT 500', 'Mindfulness-Based Stress Reduction (MBSR)', 'Pranayama Specialist'],
  },
  {
    id: 'trainer-5',
    name: 'Kavita Reddy',
    specialization: 'Senior Citizen & Gentle Yoga',
    experience: 9,
    rating: 4.7,
    image: '/trainers/kavita.jpg',
    bio: 'Kavita specializes in creating gentle, accessible yoga sessions for seniors and individuals with limited mobility. Her patient, encouraging approach and expertise in chair yoga and modified asanas make yoga accessible to everyone, regardless of age or fitness level.',
    certifications: ['RYT-200', 'Chair Yoga Certification', 'Geriatric Fitness Specialist'],
  },
  {
    id: 'trainer-6',
    name: 'Vikram Singh',
    specialization: 'Corporate Wellness & Power Yoga',
    experience: 11,
    rating: 4.8,
    image: '/trainers/vikram.jpg',
    bio: 'Vikram has designed and delivered corporate wellness programs for over 50 organizations. He specializes in desk-friendly yoga routines, team-building yoga sessions, and stress management workshops that fit seamlessly into the corporate environment.',
    certifications: ['RYT-500', 'Corporate Wellness Consultant', 'Ashtanga Yoga Certification'],
  },
];

export const getTrainerById = (id) => trainers.find(t => t.id === id);

export const getTrainersBySpecialization = (spec) =>
  trainers.filter(t => t.specialization.toLowerCase().includes(spec.toLowerCase()));
