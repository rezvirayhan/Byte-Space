import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../ui/SectionTitle';
import NoCourses from '../../ui/Nocourses';
import Pagination from '../../ui/Pagination';
import CourseCard from '../../ui/CoursesCard';

const ITEMS_PER_PAGE = 15;

const AllCourses = () => {
  const [coursesData, setCoursesData] = useState({
    categories: [],
    courses: [],
    avatars: [],
  });
  const [selectedCategory, setSelectedCategory] = useState('featured');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

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

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const { categories = [], courses = [], avatars = [] } = coursesData;

  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'featured') {
      return courses.filter((course) => course.featured);
    }
    return courses.filter((course) => course.category === selectedCategory);
  }, [selectedCategory, courses]);

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

  const visibleCategories = useMemo(() => {
    return showAllCategories ? categories : categories.slice(0, 9);
  }, [showAllCategories, categories]);

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

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 mb-10 p-4 bg-white rounded-2xl transition-all">
          {visibleCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
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
          {categories.length > 9 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="px-4 py-2 font-satoshi rounded-full text-xs font-semibold text-[#040819] bg-[#F5F5F6] hover:bg-gray-200 transition-all cursor-pointer"
            >
              {showAllCategories ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>

        {paginatedCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {paginatedCourses.map((course) => (
                <Link key={course.id} to={`/course-details/${course.id}`} className="block group">
                  <CourseCard course={course} avatars={avatars} />
                </Link>
              ))}
            </div>

            {filteredCourses.length > ITEMS_PER_PAGE && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                activeClass=" text-[#CED0D3] font-semibold "
                inactiveClass="bg-white text-[#242528] hover:bg-gray-100"
                buttonClass="bg-white text-[#040819] hover:bg-gray-100 shadow-xs"
              />
            )}
          </>
        ) : (
          <NoCourses onReset={() => handleCategoryChange('featured')} />
        )}
      </div>
    </div>
  );
};

export default AllCourses;
