import React from 'react';
import CourseInfoPills from './CourseInfoPills';

const CourseCard = ({ course, avatars = [] }) => {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden border transition-all duration-200 hover:shadow-lg flex flex-col justify-between ${
        course.featured ? 'border-[#CED0D3] p-4' : 'border-[#CED0D3]'
      }`}
    >
      <div className="relative rounded-2xl h-48 w-full overflow-hidden">
        <img
          src={course.image || course.video}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div>
          <CourseInfoPills
            lessons={10}
            duration="1h 45m"
            comments={12}
            pillClassName="bg-[#F6F6F699] text-black shadow-md"
            containerClassName="text-xs"
          />
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-poppins text-xl font-semibold  text-[#000000] leading-snug">
              {course.title}
            </h3>
            <div className="flex items-center text-lg font-satoshi font-normal text-[#4F4F4F] shrink-0">
              <span>{course.rating}</span>
              <span className="text-[#CED0D3] ml-1">★</span>
            </div>
          </div>

          <p className="text-xs font-satoshi  mt-1">
            <span className="text-[#4F4F4F]">by</span>
            <span className="text-[#003BE2]"> {course.author}</span>
          </p>
        </div>

        <div className="flex gap-6 mt-4">
          <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600 font-medium">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 13h5v8H2v-8zm8-5h5v13h-5V8zm8-5h5v18h-5V3z" />
            </svg>
            <span className="font-satoshi">{course.level}</span>
          </div>

          <div className="flex items-center -space-x-2">
            {avatars.map((imgUrl, i) => (
              <img
                key={i}
                src={imgUrl}
                alt="Student"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-[#DFFF00] border-2 border-white flex items-center justify-center text-[13px] font-satoshi text-[#242528]">
              {course.studentsCount}
            </div>
          </div>
        </div>

        <div className="mt-4 pt-1  flex items-baseline ">
          <span className="text-xl font-bold text-[#003BE2] font-poppins ">${course.price}</span>
          <span className="text-xs text-[#4F4F4F] ml-1 font-satoshi">/{course.pricingType}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
