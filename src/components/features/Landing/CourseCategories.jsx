import Images from '../../../utils';
import SectionTitle from './../../ui/SectionTitle';

const CourseCategories = () => {
  const categories = [
    { id: 1, name: 'Design', src: Images.design, alt: 'Design' },
    { id: 2, name: 'Development', src: Images.Development, alt: 'Development' },
    { id: 3, name: 'IT & Software', src: Images.IT, alt: 'IT & Software' },
    { id: 4, name: 'Business', src: Images.Business, alt: 'Business' },
    { id: 5, name: 'Marketing', src: Images.Marketing, alt: 'Marketing' },
    { id: 6, name: 'Photography', src: Images.Photography, alt: 'Photography' },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1460px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <SectionTitle
            title="Explore Diverse Learning Paths at Bytespace"
            className="text-center items-center justify-center"
          />
          <p className="font-satoshi font-normal text-sm sm:text-base md:text-lg text-[#82868E] max-w-4xl mx-auto leading-relaxed mt-4 sm:mt-6">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various fields, ensuring there's something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-stretch justify-center">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group border-2 border-[#CED0D3] hover:border-[#242528] rounded-2xl p-6 sm:p-5 md:p-7 flex flex-col items-center justify-center text-center "
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full background-primary flex items-center justify-center p-3 mb-4 ">
                <img
                  src={typeof category.src === 'string' ? category.src : category.src?.src}
                  alt={category.alt}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                />
              </div>

              <h3 className="font-satoshi font-medium text-sm sm:text-base md:text-lg text-[#242528] group-hover:text-black transition-colors leading-snug">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
