import CreatorCourse from '../components/features/CreatorProfile/CreatorCourse';
import CreatorProfileBanner from '../components/features/CreatorProfile/CreatorProfileBanner';
import Short from '../components/features/Search/Short';

const CreatorProfile = () => {
  return (
    <div>
      <CreatorProfileBanner />
      <Short />
      <CreatorCourse />
    </div>
  );
};

export default CreatorProfile;
