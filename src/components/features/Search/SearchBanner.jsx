import Hero from '../../ui/Hero';
import SearchInput from './../../ui/SearchInput';
import Button from './../../ui/Button';

const SearchBanner = () => {
  return (
    <Hero>
      <div className="max-w-lg sm:max-w-xl mx-auto px-2">
        <div className="font-poppins text-4xl text-white text-center font-semibold mb-10 ">
          <p>Find Your Next Course</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white/10 sm:bg-transparent p-2 sm:p-0 rounded-2xl sm:rounded-full lg:pb-20 pb-10">
          <SearchInput height="h-10" noButton={true} className="w-full shadow-sm" />
          <Button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 h-10 text-[#242528] bg-[#D8FF00] font-medium rounded-full hover:opacity-90 transition-opacity shrink-0 cursor-pointer"
          >
            Search
          </Button>
        </div>
      </div>
    </Hero>
  );
};

export default SearchBanner;
