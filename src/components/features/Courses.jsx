import { useState, useEffect, useMemo } from 'react';
import CourseCard from './CoursesCard';
import NoCourses from '../ui/Nocourses';
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [coursesData, setCoursesData] = useState({
    categories: [],
    courses: [],
    avatars: [],
  });
  const [selectedCategory, setSelectedCategory] = useState('featured');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
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

  const { categories = [], courses = [], avatars = [] } = coursesData;

  const filteredCourses = useMemo(() => {
    let result = courses;

    if (selectedCategory === 'featured') {
      result = courses.filter((course) => course.featured);
    } else {
      result = courses.filter((course) => course.category === selectedCategory);
    }

    return result.slice(0, 6);
  }, [selectedCategory, courses]);

  const visibleCategories = useMemo(() => {
    return showAllCategories ? categories : categories.slice(0, 18);
  }, [showAllCategories, categories]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-4 sm:p-6 font-sans text-center text-gray-500 py-20">
        Loading courses...
      </div>
    );
  }

  return (
    <div className="max-w-[1460px] mx-auto p-4 sm:p-6 font-sans ">
      <div>
        <div>
          <SectionTitle
            title="Discover Your Passion,"
            heading="Build Your Skills"
            className="justify-center text-center text-[#040819]"
          />
          <p className="font-satoshi font-normal text-sm sm:text-base md:text-lg text-[#82868E] max-w-4xl mx-auto leading-relaxed mt-4 sm:mt-6 text-center">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and make a difference
            in your career and life.
          </p>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 mb-10 p-4 bg-white rounded-2xl  transition-all">
          {visibleCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 font-satoshi rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#D4FB20] text-[#000000] shadow-sm font-semibold scale-105'
                    : 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}

          <button
            onClick={() => setShowAllCategories((prev) => !prev)}
            className="text-xs font-semibold text-[#003BE2] hover:underline px-2 py-1 cursor-pointer font-satoshi"
          >
            {showAllCategories ? '- Less' : '+ More'}
          </button>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredCourses.map((course) => (
              <Link key={course.id} to={`/course-details/${course.id}`} className="block group">
                <CourseCard key={course.id} course={course} avatars={avatars} />
              </Link>
            ))}
          </div>
        ) : (
          <NoCourses onReset={() => setSelectedCategory('featured')} />
        )}
      </div>
    </div>
  );
};

export default Courses;
