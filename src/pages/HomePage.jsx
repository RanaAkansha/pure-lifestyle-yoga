import React from 'react';
import HeroSection from '../components/home/HeroSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowItWorks from '../components/home/HowItWorks';
import FeaturedTrainers from '../components/home/FeaturedTrainers';
import TransformationStories from '../components/home/TransformationStories';
import LeadMagnet from '../components/home/LeadMagnet';
import FinalCTA from '../components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturedTrainers />
      <TransformationStories />
      <LeadMagnet />
      <FinalCTA />
    </>
  );
}
