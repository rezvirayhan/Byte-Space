import SearchBanner from '../components/features/Search/SearchBanner';
import AllCourses from '../components/features/Search/AllCourses';
import Short from '../components/features/Search/Short';

const Search = () => {
  return (
    <div>
      <SearchBanner />
      <Short />
      <AllCourses />
    </div>
  );
};

export default Search;
