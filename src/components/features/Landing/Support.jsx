import Images from '../../../utils';
import SectionTitle from '../../ui/SectionTitle';

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#003BE2" />
    <path
      d="M6.5 12.5L10.5 16.5L17.5 8.5"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

const statsData = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
];

const featuresData = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

const Support = () => {
  return (
    <div className="relative bg-[#FAFAFA] text-slate-800 min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-[#d0fc01] selection:text-black">
      <div
        className="pointer-events-none absolute -bottom-20 -left-100 w-[600px] sm:w-[1000px] h-[600px] sm:h-[1000px] rounded-full z-0 opacity-90"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)',
        }}
      />

      <div
        className="pointer-events-none absolute -top-80 left-1/4 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[600px] sm:h-[1000px] rounded-full z-0 opacity-90"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)',
        }}
      />

      <div
        className="pointer-events-none absolute top-1/2 -right-50 w-[600px] sm:w-[950px] h-[600px] sm:h-[950px] rounded-full z-0 opacity-100"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1460px] mx-auto space-y-10 lg:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div>
            <SectionTitle
              title="Your Path to Professional"
              heading=" Growth Starts Here!"
              className="text-[#040819] text-center lg:text-left"
            />
            <p className="font-satoshi font-normal text-sm sm:text-base text-[#4F4F4F] lg:max-w-xl leading-relaxed mt-3 sm:mt-4 text-center lg:text-left">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-md mt-6 sm:mt-8 mx-auto lg:ml-0 text-center lg:text-left">
              {statsData.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-[#003BE2] font-poppins text-xl sm:text-2xl md:text-3xl font-semibold">
                    {stat.value}
                  </p>
                  <p className="text-[#4B4C53] font-satoshi text-xs sm:text-sm md:text-base mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={Images.support1}
              alt="Professional growth illustration"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <img
              src={Images.support2}
              alt="Course management preview"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-contain"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <SectionTitle
                title="Create & Manage"
                heading=" Courses Easily."
                className="text-[#040819]"
              />
              <p className="font-satoshi font-normal text-sm sm:text-base text-[#4F4F4F] lg:max-w-xl leading-relaxed mt-3 sm:mt-4">
                <span className="font-bold">ByteSpace</span> supports individuals or entities in the
                creation, publication, and administration of educational courses.
              </p>
            </div>

            <div className="mt-6 space-y-3 flex flex-col items-start max-w-xs sm:max-w-sm mx-auto lg:mx-0">
              {featuresData.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckIcon />
                  <p className="font-satoshi text-[#242528] text-sm sm:text-base font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
