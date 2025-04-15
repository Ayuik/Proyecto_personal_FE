function CourseCard({ course }) {
  return (
    <>
      <div className="h-48 bg-gray-200">
        <img
          src={course.courseCover}
          alt={course.courseTitle}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-bold text-lg">{course.course_title}</h3>
          <span className="bg-purple-600 text-white px-3 py-1 text-sm rounded-full">
            {course.courseCategory.categoryName}
          </span>
        </div>
        <div className="flex justify-between items-start mb-4">
          {course.courseDescription}
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span>{course.courseNumVideos} videos</span>
          </div>
          <div className="flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{course.courseDuration}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
