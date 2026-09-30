import {
  BookOpen,
  Video as VideoIcon,
  Award,
  MessageSquare,
  ShieldCheck,
  Download,
} from 'lucide-react';
import Button from '../../ui/Button';

const featureIcons = [BookOpen, VideoIcon, Award, MessageSquare, ShieldCheck, Download];

const CourseSidebar = ({ course }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 sticky lg:-mt-52 z-20">
      <h3 className="text-lg font-bold text-[#242528] font-poppins">
        {course.lessonsCount || course.lessons || 0} Lessons
        <span className="text-[#242528] font-poppins font-normal">
          {' '}
          ({course.totalLessonDuration || course.duration})
        </span>
      </h3>

      <div className="mt-4 space-y-3">
        {course.lessonsdata?.slice(0, 3).map((item, idx) => (
          <div key={item.id || idx} className="flex gap-5 justify-between items-center text-md">
            <span className="text-[#242528] font-medium font-satoshi">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className="text-[#242528] text-md font-satoshi flex-1 ml-3 truncate">
              {item.title}
            </span>
            <span className="text-[#003BE2] font-medium font-satoshi text-md">
              {item.duration} <span className="text-xl font-normal">mins</span>
            </span>
          </div>
        ))}
      </div>

      {course.lessonsdata?.length > 3 && (
        <p className="text-[#4B4C53] font-satoshi mt-3 text-lg">
          +{course.lessonsdata.length - 3} more videos
        </p>
      )}

      <div className="my-6" />

      <p className="text-lg text-[#4B4C53] font-normal font-satoshi">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-[#003BE2] font-poppins">${course.price}</span>
        <span className="text-md text-[#4B4C53] font-satoshi font-medium">
          /{course.pricingType || 'lifetime'}
        </span>
      </div>

      <Button className="w-full mt-6 py-3.5 px-6 rounded-full bg-[#D4FB20] text-[#242528] font-bold text-md">
        Enroll Now
      </Button>

      {course.lessonsIncluded?.length > 0 && (
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-[#242528] font-satoshi mb-3">
            This course includes
          </h4>
          <div className="space-y-2.5 text-[#4B4C53] font-satoshi text-lg">
            {course.lessonsIncluded.map((feature, i) => {
              const IconComponent = featureIcons[i % featureIcons.length];

              return (
                <div key={i} className="flex items-center gap-2.5">
                  <IconComponent size={20} className="text-blue-600 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="my-6 border-t border-slate-100" />

      <div className="flex items-center gap-3">
        <img
          src={
            course.image ||
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
          }
          alt={course.mentorName || course.author}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="font-satoshi">
          <h5 className="text-xl font-satoshi font-semibold text-[#242528]">
            {course.mentorName || course.author || 'PurePearl Studio'}
          </h5>
          <p className="text-[16px] text-[#4B4C53]">
            {course.mentorTitle || 'Professional Creator'}
          </p>
        </div>
      </div>
      <p className="text-lg text-[#4B4C53] font-normal mt-10 font-satoshi">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>
      <Button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 text-[#4B4C53] border-2 mt-8 border-[#CED0D3] font-medium rounded-full bg-white"
      >
        See Full Profile
      </Button>
    </div>
  );
};

export default CourseSidebar;
