import { Video as VideoIcon } from 'lucide-react';
const Lesson = ({ course }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#242528] font-poppins">Explore the Modules</h2>

      <p className="mt-3 text-[#4B4C53] font-poppins text-base md:text-lg">
        {course.courseOverview?.lesson_description}
      </p>

      <h3 className="text-xl font-semibold text-[#242528] font-satoshi mb-5 mt-7">Lesson List</h3>

      <div className="space-y-0">
        {course.modules?.map((module) => {
          const lessons = module.lessonsdata || module.lessons || [];

          return (
            <div key={module.id} className="">
              <div className="space-y-0">
                {lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-white"
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2 font-satoshi">
                      <div className="w-16 h-16 rounded-3xl bg-[#dfff00] flex items-center justify-center text-slate-900 flex-shrink-0">
                        <VideoIcon size={40} />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <div className="font-semibold text-[#242528] text-md break-words">
                          {module.title}
                        </div>
                        <div className="text-slate-500 text-[16px] break-words">{lesson.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <div>
          <h2 className="text-xl font-semibold text-[#242528] font-poppins mt-5">Lesson Content</h2>

          <p className="mt-3 text-[#4B4C53] font-poppins text-base md:text-lg">
            {course.lesson_content?.overview}
          </p>
          <h2 className="text-xl font-semibold text-[#242528] font-poppins mt-7">
            Lesson Progress Tracking
          </h2>

          <p className="mt-3 text-[#4B4C53] font-poppins text-base md:text-lg">
            {course.lesson_content?.prerequisites}
          </p>

          {course.lesson_progress_tracking &&
            (() => {
              const currentProgress =
                course.complete_lesson_progress ??
                course.lesson_progress_tracking?.percentageCompleted ??
                0;

              return (
                <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 shadow-sm font-poppins">
                  <div>
                    <p className="font-semibold text-[#242528] text-sm">Learning Progresss</p>
                    <p className="text-4xl font-extrabold text-[#242528] font-poppins mt-2 pb-2">
                      {currentProgress}%
                    </p>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mt-3">
                    <div
                      className="h-full bg-[#D4FB20] rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: `${Math.min(Math.max(currentProgress, 0), 100)}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })()}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
