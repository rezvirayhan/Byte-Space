import Images from '../../../images';

const About = ({ course }) => {
  return (
    <div>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-[#242528] font-poppins">Description</h2>

          {(() => {
            const description = course?.courseOverview?.description || '';
            const words = description.trim().split(/\s+/);

            if (!description || words.length === 0 || words[0] === '') return null;

            const firstChunk = words.slice(0, 60).join(' ');
            const secondChunk = words.slice(60, 100).join(' ');
            const remainingChunk = words.slice(100).join(' ');

            return (
              <div className="space-y-10 mt-3">
                {firstChunk && (
                  <p className="text-lg text-[#4B4C53] font-satoshi leading-relaxed">
                    {firstChunk}
                  </p>
                )}

                {secondChunk && (
                  <p className="text-lg text-[#4B4C53] font-satoshi leading-relaxed">
                    {secondChunk}
                  </p>
                )}

                {remainingChunk && (
                  <p className="text-lg text-[#4B4C53] font-satoshi leading-relaxed">
                    {remainingChunk}
                  </p>
                )}
              </div>
            );
          })()}
        </div>

        {course?.courseOverview?.images?.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-[#242528] font-satoshi mb-5">Sneak Peak</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {course.courseOverview.images.map((imgUrl, idx) => (
                <img
                  key={idx}
                  src={imgUrl}
                  alt={`Preview ${idx + 1}`}
                  className="w-full h-24 object-cover rounded-xl border border-slate-100"
                />
              ))}
            </div>
          </div>
        )}

        {course?.courseOverview?.keyPoints?.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-[#242528] mb-5 font-satoshi">Key Points</h3>
            <ul className="space-y-4 text-lg text-[#4B4C53]">
              {course.courseOverview.keyPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-2 font-satoshi">
                  <img className="w-6 h-6" src={Images.key_point} alt="" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
