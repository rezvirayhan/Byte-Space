import { Star, Users, BarChart, Share2, Play } from 'lucide-react';
import Hero from '../../ui/Hero';
import Button from '../../ui/Button';

const CourseHeader = ({ course, ratingData }) => {
  return (
    <Hero showGrid={true} className="pb-[10px]">
      <div className="flex justify-between items-start flex-wrap gap-4 text-left">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-poppins tracking-tight text-[#F5F5F6]">
            {course.mainTitle || course.title}
          </h1>
          <p className="mt-3 text-[#F5F5F6] font-poppins text-base md:text-lg">
            {course.subtitleTitle || course.courseOverview?.description}
          </p>
          <p className="mt-2 text-sm text-[#F1F4FE] font-satoshi">
            by <span className="text-[#D4FB20]">{course.byStudio}</span>
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-[#242528] font-satoshi">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-800 shadow-sm">
              <BarChart size={14} className="mr-1.5 text-[#003BE2] font-semibold" />
              {course.level || 'Beginner'}
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-800 shadow-sm">
              <Star size={14} className="mr-1.5 text-[#003BE2] fill-[#003BE2] font-semibold" />
              {ratingData.averageRating} ({ratingData.totalCount} reviews)
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-800 shadow-sm">
              <Users size={14} className="mr-1.5 text-[#003BE2] fill-[#003BE2] font-semibold" />
              {course.studentsCount || '0'} Students
            </span>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 text-[#242528] font-medium rounded-full"
        >
          <Share2 size={16} className="mr-2 text-[#242528] fill-[#242528] font-semibold" />
          Share
        </Button>
      </div>

      <div className="pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="relative bg-slate-200 rounded-3xl overflow-hidden aspect-video shadow-xl border-4 border-white">
              <img
                src={
                  course.image ||
                  course.video ||
                  'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80'
                }
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button
                  className="w-16 h-16 bg-white/90 hover:bg-white text-slate-900 rounded-2xl flex items-center justify-center shadow-2xl transition-transform transform hover:scale-105"
                  aria-label="Play Preview"
                >
                  <Play size={28} className="fill-slate-900 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
};

export default CourseHeader;
