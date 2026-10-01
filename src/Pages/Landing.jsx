import Courses from '../components/features/Landing/Courses';
import Support from '../components/features/Landing/Support';
import HeroSection from './../components/features/Landing/HeroSection';
import CreatorCTA from './../components/features/Landing/CreatorCTA';
import OurClients from '../components/features/Landing/OutClients';
import Testimonials from '../components/features/Landing/Testimonials';
import CourseCategories from '../components/features/Landing/CourseCategories';

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <OurClients />
      <Courses />
      <CourseCategories />
      <Support />
      <CreatorCTA />
      <Testimonials />
    </div>
  );
};

export default Landing;
