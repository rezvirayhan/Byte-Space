import { useState, useEffect } from 'react';
import NoCourses from '../../ui/Nocourses';
import CourseCard from '../../ui/CoursesCard';


const CreatorCourse = () => {
  const [coursesData, setCoursesData] = useState({
    categories: [],
    courses: [],
    avatars: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/creatorcourse.json')
      .then((response) => response.json())
      .then((data) => {
        setCoursesData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching courses data:', error);
        setLoading(false);
      });
  }, []);

  const { courses = [], avatars = [] } = coursesData;

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-4 sm:p-6 font-sans text-center text-gray-500 py-20">
        Loading courses...
      </div>
    );
  }

  return (
    <div className="max-w-[1460px] mx-auto p-4 sm:p-6 font-sans">
      <div>
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} avatars={avatars} />
            ))}
          </div>
        ) : (
          <NoCourses />
        )}
      </div>
    </div>
  );
};

export default CreatorCourse;
