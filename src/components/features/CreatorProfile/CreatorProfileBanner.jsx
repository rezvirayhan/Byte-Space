import Hero from '../../ui/Hero';
import Button from './../../ui/Button';
import SectionTitle from '../../ui/SectionTitle';
import Images from './../../../utils/index';
const CreatorProfileBanner = () => {
  return (
    <Hero>
      <div className="">
        <div>
          <div className="flex gap-10 items-center">
            <div>
              <img className="w-36" src={Images.team5} alt="PurePearl Studio" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-3">
                <SectionTitle
                  title="PurePearl Studio"
                  className="text-[#F5F5F6] text-left font-poppins"
                />
                <button className="px-3 py-1 bg-[#D4FB20] text-[#000000] rounded-full text-xs font-semibold font-satoshi hover:bg-opacity-90 transition-all cursor-pointer">
                  Creator
                </button>
              </div>

              <p className="text-left text-lg font-satoshi text-[#F5F5F6]">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>
          <div className="text-left">
            <p className="text-[#F5F5F6] font-satoshi md:w-[83%]">
              Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion,
              expertise, and inspiration that drive my creative journey. Let's explore and learn
              together!
            </p>
            <p className="text-[#F5F5F6] font-satoshi md:w-[85%] mt-1">
              ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From
              digital designs to multimedia projects, each piece tells a unique story. Explore the
              world of creativity with me.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center pb-20">
          <div>
            <div className="flex gap-5 mt-10">
              <div>
                <Button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 h-10 text-[#242528] bg-[#FFFFFF] font-medium rounded-full hover:opacity-90 transition-opacity shrink-0"
                >
                  <span className="text-[#003BE2] font-satoshi mr-1">3</span> Products
                </Button>
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 h-10 text-[#242528] bg-[#FFFFFF] font-medium rounded-full hover:opacity-90 transition-opacity shrink-0"
                >
                  <span className="text-[#003BE2] font-satoshi mr-1">3</span> Products
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div>
              <Button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 h-10 text-[#242528] bg-[#D4FB20] font-medium rounded-full hover:opacity-90 transition-opacity shrink-0 cursor-pointer"
              >
                Flow
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
};

export default CreatorProfileBanner;
