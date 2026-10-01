import SearchInput from '../../ui/SearchInput';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';
import Images from '../../../utils';

const HeroSection = () => {
  return (
    <div className="relative bg-[#0550FE] text-white font-sans overflow-hidden select-none min-h-screen flex flex-col justify-between">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className=" hidden lg:block absolute top-10 left-20 w-28 h-28 sm:top-20 sm:-left-12 md:w-60 md:h-60 text-[#D8FF00] opacity-90 transform rotate-10 pointer-events-none z-0">
        <img src={Images.heroTop} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="hidden lg:block absolute top-1/3 left-10 md:left-24 w-24 h-24 md:w-40 md:h-40 text-white pointer-events-none z-0">
        <img src={Images.heroleft_center} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="hidden lg:block absolute bottom-12 left-6 md:left-12 w-28 h-28 lg:w-44 lg:h-44 rounded-full pointer-events-none z-0">
        <img src={Images.heroleft_bottom} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="hidden lg:block absolute top-40 -right-16 md:-right-10 w-28 h-48 md:w-44 md:h-72 bg-[#D8FF00] rounded-[40px] md:rounded-[55px] transform -rotate-[22deg] shadow-2xl pointer-events-none z-0" />

      <div className="hidden lg:block absolute top-1/2 right-16 lg:right-28 w-0 h-0 border-l-[20px] md:border-l-[35px] border-l-transparent border-r-[20px] md:border-r-[35px] border-r-transparent border-b-[40px] md:border-b-[60px] border-b-white transform rotate-[18deg] pointer-events-none z-0" />

      <div className="hidden lg:block absolute bottom-16 right-10 w-36 h-36 lg:w-52 lg:h-52 text-white transform rotate-12 pointer-events-none z-0">
        <img src={Images.heroleft_center} alt="" className="w-full h-full object-contain" />
      </div>
      <nav className="relative z-20 flex items-center justify-between px-4 sm:px-8 md:px-16 py-6 max-w-7xl w-full mx-auto">
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <img
            src={Images.navlogo}
            alt="ByteSpace Logo"
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <Link to="/" className="hover:text-white transition-colors font-satoshi">
            Home
          </Link>
          <Link to="/courses" className="hover:text-white transition-colors font-satoshi">
            Courses
          </Link>
          <Link to="creator-profile" className="hover:text-white transition-colors font-satoshi">
            Creators
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 text-sm font-medium font-satoshi">
          <Link to="/login">
            <button className="hover:text-white/80 transition-colors cursor-pointer">
              Sign In
            </button>
          </Link>
          <Link to="register">
            <button className="hover:text-white/80 transition-colors cursor-pointer">
              Join Us
            </button>
          </Link>
          <button
            className="p-2 text-white hover:text-[#D8FF00] transition-colors"
            aria-label="Cart"
          ></button>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto text-center pt-4 sm:pt-8 px-4 flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl tracking-tight leading-tight max-w-4xl text-white font-poppins font-bold mx-auto">
            Get Access to Hundreds <br className="hidden sm:inline" />
            <span className="block mt-1">Courses Available</span>
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-[#E5E6E8] font-poppins font-normal max-w-2xl lg:max-w-5xl mx-auto px-2">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide
            range of courses.
          </p>

          <div className="mt-6 sm:mt-8 max-w-lg sm:max-w-xl mx-auto px-2">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white/10 sm:bg-transparent p-2 sm:p-0 rounded-2xl sm:rounded-full">
              <SearchInput height="h-10" noButton={true} className="w-full shadow-sm" />
              <Link to="/courses">
                <Button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 h-10 text-[#242528] bg-[#D8FF00]  font-medium rounded-full hover:opacity-90 transition-opacity shrink-0 cursor-pointer"
                >
                  Search
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 max-w-3xl mx-auto w-full flex justify-center items-end px-2">
          <div className="absolute bottom-0 w-[280px] h-[140px] sm:w-[500px] sm:h-[250px] md:w-[700px] md:h-[350px] lg:w-[850px] lg:h-[400px] bg-[#D8FF00] rounded-t-full z-0" />

          <img
            src={Images.heroImage}
            alt="Student with laptop"
            className="relative z-10 w-64 sm:w-96 md:w-[550px] lg:w-[650px] object-cover pointer-events-none drop-shadow-2xl"
          />

          <div className="absolute top-2 left-0 sm:top-10 sm:left-4 md:left-6 z-20 bg-white text-gray-800 p-2 sm:p-3 px-3 sm:px-4 rounded-lg sm:rounded-xl shadow-xl text-left border border-gray-100 max-w-[130px] sm:max-w-none">
            <h4 className="text-[10px] sm:text-xs font-bold text-[#242528] font-satoshi">
              UI/UX Design
            </h4>
            <p className="text-[8px] sm:text-[10px] text-[#82868E] font-satoshi font-medium mt-0.5 whitespace-nowrap">
              200 Courses &bull; 1000+ Students
            </p>
          </div>

          <div className="absolute top-0 right-0 sm:top-8 sm:right-4 md:right-8 z-20 bg-white text-gray-800 p-2.5 sm:p-4 rounded-lg sm:rounded-xl text-left w-32 sm:w-44 lg:w-48 shadow-xl border border-gray-100">
            <p className="text-[8px] sm:text-[10px] text-gray-400 font-medium font-satoshi">
              Learning Progress
            </p>
            <p className="text-base sm:text-2xl font-black text-gray-900 mt-0.5 sm:mt-1 font-satoshi">
              55%
            </p>
            <div className="w-full bg-gray-100 h-1 sm:h-1.5 rounded-full mt-1 sm:mt-2 overflow-hidden">
              <div className="bg-[#D8FF00] h-full w-[55%] rounded-full" />
            </div>
          </div>

          <div className="absolute bottom-2 left-0 sm:bottom-6 sm:-left-6 md:-left-10 z-20 bg-white text-gray-800 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-xl text-left border border-gray-100 max-w-[150px] sm:max-w-none">
            <p className="text-[10px] sm:text-xs font-bold text-[#242528] font-satoshi">
              Happy Students
            </p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[8px] sm:text-[10px] font-satoshi font-semibold text-[#82868E]">
                <span className="text-[#242528]"> 4.5</span> (240)
              </span>
              <span className="text-yellow-400 text-[10px] sm:text-xs">★</span>
            </div>
            <div className="flex items-center -space-x-1.5 sm:-space-x-2 mt-1 sm:mt-2">
              <img
                className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white object-cover"
                src="https://i.pravatar.cc/100?img=1"
                alt="Avatar"
              />
              <img
                className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white object-cover"
                src="https://i.pravatar.cc/100?img=2"
                alt="Avatar"
              />
              <img
                className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white object-cover"
                src="https://i.pravatar.cc/100?img=3"
                alt="Avatar"
              />
              <img
                className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white object-cover"
                src="https://i.pravatar.cc/100?img=4"
                alt="Avatar"
              />
              <div className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-[#D8FF00] border-2 border-white flex items-center justify-center text-[7px] sm:text-[8px] font-bold text-black">
                2K+
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
