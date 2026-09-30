import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../../ui/Button';
import Lesson from './Lesson';
import Reviews from './Reviews';
import About from './About';
import CourseHeader from './CourseHeader';
import CourseSidebar from './CourseSidebar';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Reviews');
  const [selectedStarFilter, setSelectedStarFilter] = useState('All');

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const coursesList = Array.isArray(data) ? data : data.courses || [data];
        const foundCourse = coursesList.find((item) => String(item.id) === String(id));
        setCourse(foundCourse || data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching course details:', error);
        setLoading(false);
      });
  }, [id]);

  const filteredReviews = useMemo(() => {
    const reviews = course?.reviews || [];
    if (selectedStarFilter === 'All') return reviews;

    return reviews.filter(
      (review) => Math.round(Number(review.studentRating)) === Number(selectedStarFilter)
    );
  }, [course?.reviews, selectedStarFilter]);

  const ratingData = useMemo(() => {
    const reviewsList = course?.reviews || [];
    const totalReviews = reviewsList.length;

    if (totalReviews === 0) {
      return {
        averageRating: (course?.rating || 0).toFixed(1),
        totalCount: course?.commentsCount || 0,
        ratingsBreakdown: [5, 4, 3, 2, 1].map((stars) => ({
          stars,
          percentage: 0,
          count: 0,
        })),
      };
    }

    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let totalScore = 0;

    reviewsList.forEach((rev) => {
      const rating = Math.min(5, Math.max(1, Math.round(Number(rev.studentRating) || 0)));
      counts[rating] = (counts[rating] || 0) + 1;
      totalScore += Number(rev.studentRating) || 0;
    });

    const averageRating = (totalScore / totalReviews).toFixed(1);

    const ratingsBreakdown = [5, 4, 3, 2, 1].map((stars) => {
      const count = counts[stars] || 0;
      const percentage = Math.round((count / totalReviews) * 100);
      return { stars, percentage, count };
    });

    return {
      averageRating,
      totalCount: totalReviews,
      ratingsBreakdown,
    };
  }, [course]);

  if (loading) {
    return (
      <div className="max-w-[1460px] mx-auto p-4 sm:p-6 text-center text-gray-500 py-20 font-sans">
        Loading course details...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="max-w-[1460px] mx-auto p-4 sm:p-6 text-center py-20 font-sans">
        <h2 className="text-2xl font-bold text-[#040819] mb-4">Course Not Found</h2>
        <Link
          to="/"
          className="px-6 py-2 bg-[#D4FB20] text-[#000000] font-semibold rounded-full hover:opacity-90 transition-all"
        >
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <CourseHeader course={course} ratingData={ratingData} />

      <main className="md:max-w-7xl mx-auto px-6 pt-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex gap-3">
              {['About', 'Lesson', 'Reviews'].map((tab) => (
                <Button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-satoshi font-medium transition-colors cursor-pointer ${
                    activeTab === tab
                      ? 'bg-[#D4FB20] text-[#242528] shadow-sm'
                      : 'bg-[#F5F5F6] text-[#4B4C53]'
                  }`}
                >
                  {tab}
                </Button>
              ))}
            </div>

            <div className="mt-8">
              {activeTab === 'About' && <About course={course} />}
              {activeTab === 'Lesson' && <Lesson course={course} />}
              {activeTab === 'Reviews' && (
                <Reviews
                  ratingData={ratingData}
                  course={course}
                  setSelectedStarFilter={setSelectedStarFilter}
                  selectedStarFilter={selectedStarFilter}
                  filteredReviews={filteredReviews}
                />
              )}
            </div>
          </div>

          <div className="lg:col-span-4 lg:-mt-[280px]">
            <CourseSidebar course={course} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;
