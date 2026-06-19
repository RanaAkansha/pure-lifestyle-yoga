export const services = [
  {
    id: 'service-1',
    title: 'Weight Loss Yoga',
    description: 'Dynamic yoga sequences designed to boost metabolism, burn calories, and build lean muscle. Our weight loss program combines power yoga, Vinyasa flows, and targeted asanas to help you achieve your fitness goals sustainably.',
    duration: '60 min / session',
    price: '₹2,500 / session',
    icon: 'flame',
    color: '#C69C54', // Muted Gold
  },
  {
    id: 'service-2',
    title: 'Stress Relief Yoga',
    description: 'A calming blend of restorative yoga, breathwork, and guided meditation designed to reduce stress, anxiety, and improve sleep quality. Perfect for professionals and anyone seeking inner peace in their busy lives.',
    duration: '45-60 min / session',
    price: '₹2,000 / session',
    icon: 'cloud',
    color: '#3F372F', // Espresso Light
  },
  {
    id: 'service-3',
    title: 'Therapeutic Yoga',
    description: 'Specialized yoga therapy targeting chronic pain, injuries, and specific health conditions. Each session is carefully designed based on your medical history and recovery goals, working in coordination with your healthcare providers.',
    duration: '60 min / session',
    price: '₹3,000 / session',
    icon: 'heart-pulse',
    color: '#26211C', // Espresso Brown
  },
  {
    id: 'service-4',
    title: 'Senior Citizen Yoga',
    description: 'Gentle, accessible yoga sessions designed specifically for seniors. Includes chair yoga, balance exercises, and modified asanas that improve mobility, joint health, and overall quality of life with full safety considerations.',
    duration: '45 min / session',
    price: '₹1,800 / session',
    icon: 'hand-heart',
    color: '#B48B47', // Gold Hover (Darker Gold)
  },
  {
    id: 'service-5',
    title: 'Prenatal Yoga',
    description: 'Safe, nurturing yoga sessions for expecting mothers at every trimester. Focus on relieving pregnancy discomfort, preparing the body for childbirth, and maintaining emotional wellbeing throughout the journey.',
    duration: '45 min / session',
    price: '₹2,200 / session',
    icon: 'baby',
    color: '#1E1C1A', // Deep Charcoal
  },
  {
    id: 'service-6',
    title: 'Corporate Wellness',
    description: 'Customized wellness programs for organizations including desk yoga, team sessions, stress management workshops, and wellness retreats. Boost employee productivity, reduce burnout, and build a healthier workplace culture.',
    duration: 'Custom packages',
    price: 'From ₹15,000 / month',
    icon: 'building-2',
    color: '#3A3532', // Charcoal Light
  },
];

export const getServiceById = (id) => services.find(s => s.id === id);
