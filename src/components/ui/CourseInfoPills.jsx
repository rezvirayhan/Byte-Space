const Pill = ({ children, className = '' }) => (
  <span
    className={`backdrop-blur-xs shadow-sm px-4 py-2 text-sm rounded-4xl bg-[#F6F6F699] ${className}`}
  >
    {children}
  </span>
);

export const CourseInfoPills = ({
  lessons,
  duration,
  comments,
  containerClassName = '',
  pillClassName = '',
}) => {
  return (
    <div
      className={`absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] px-3 py-1.5 rounded-full text-[#4F4F4F] font-satoshi ${containerClassName}`}
    >
      <Pill className={pillClassName}>{lessons} Lessons</Pill>
      <Pill className={pillClassName}>{duration}</Pill>
      <Pill className={pillClassName}>{comments} Comments</Pill>
    </div>
  );
};

export default CourseInfoPills;
