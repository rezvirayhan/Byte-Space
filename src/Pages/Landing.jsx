import CourseCategories from '../components/features/CourseCategories';
import Courses from '../components/features/Courses';
import CreatorCTA from '../components/features/CreatorCTA';
import HeroSection from '../components/features/HeroSection';
import OutClients from '../components/features/OutClients';
import Support from '../components/features/Support';
import Testimonials from '../components/features/Testimonials';

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <OutClients />
      <Courses />
      <CourseCategories />
      <Support />
      <CreatorCTA />
      <Testimonials />
    </div>
  );
};

export default Landing;
