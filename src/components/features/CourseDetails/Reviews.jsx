import SectionTitle from '../../ui/SectionTitle';
import Button from '../../ui/Button';

const Reviews = ({
  ratingData,
  filteredReviews,
  course,
  selectedStarFilter,
  setSelectedStarFilter,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-[#242528] font-poppins">
          What Learners Are Saying
        </h2>
        <p className="mt-7 text-[#4B4C53] font-poppins text-base md:text-lg">
          Discover what our learners have to say about their experience with '
          {course.mainTitle || course.title}'. Read reviews and ratings from individuals who have
          embarked on the transformative journey of mastering digital asset creation.
        </p>
        <div>
          <div className="w-full lg:max-w-[650px] mt-10 md:p-6 rounded-2xl border border-slate-200 bg-white lg:flex items-center justify-between gap-6 shadow-sm">
            <div className=" md:w-36 md:h-36 rounded-2xl bg-[#DFFF00] flex flex-col items-center justify-center flex-shrink-0">
              <span className="text-[#242528] text-lg font-medium font-satoshi">Ratings</span>
              <span className="text-[#1A1A1A] text-4xl md:text-5xl font-black mt-1 font-poppins">
                {ratingData.averageRating}
              </span>
            </div>

            <div className="md:flex-1 md:flex md:flex-col gap-3">
              {ratingData.ratingsBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-3 w-full">
                  <div className="flex-1 h-2.5 bg-[#EAEAEA] rounded-full overflow-hidden md:block hidden">
                    <div
                      className="h-full bg-[#DFFF00]  rounded-full transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>

                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    {[...Array(item.stars)].map((_, i) => (
                      <img
                        key={i}
                        src={Images.review}
                        alt="star"
                        className="w-4 h-4 object-contain md:block hidden"
                      />
                    ))}
                  </div>

                  <span className="w-10 md:block hidden text-right text-sm text-[#4B4C53] font-satoshi font-light flex-shrink-0">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 pt-7">
        <div className=" sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-[#242528] font-poppins">Individual Reviews:</h2>
          <div className="flex flex-wrap items-center gap-2 mt-10">
            {['All', 5, 4, 3, 2, 1].map((star) => {
              const isActive = selectedStarFilter === String(star);
              return (
                <Button
                  key={star}
                  type="button"
                  onClick={() => setSelectedStarFilter(String(star))}
                  className={`px-5 py-3 rounded-full text-md font-semibold font-satoshi transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#D4FB20] text-[#242528] shadow-sm'
                      : 'bg-[#F5F5F6] text-[#4B4C53]'
                  }`}
                >
                  {star === 'All' ? (
                    'All rating'
                  ) : (
                    <>
                      <img
                        className="w-6 h-6"
                        src={Images.review}
                        alt={`${star} star filter icon`}
                      />
                      <span className="text-[16px]">{star}</span>
                    </>
                  )}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <div
                key={review.id}
                className="p-10 font-satoshi rounded-2xl border border-[#CED0D3] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.studentImage}
                      alt={review.studentName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{review.studentName}</h4>
                      <p className="text-[16px] text-[#4B4C53]">{review.studentSkill}</p>
                    </div>
                  </div>
                  <span className="text-[16px] text-[#4B4C53]">{review.studentYear}</span>
                </div>

                <div className="flex text-yellow-500">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={Images.review}
                        alt="rating star"
                        className={`w-4 h-4 mt-3 mb-3 object-contain ${
                          i < Math.floor(review.studentRating)
                            ? 'opacity-100'
                            : 'opacity-30 grayscale'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-[16px] text-[#4B4C53] leading-relaxed">{review.studentReview}</p>
              </div>
            ))
          ) : (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-500 text-sm">
              No reviews found for {selectedStarFilter} star rating.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
