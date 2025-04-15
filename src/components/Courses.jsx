import { getCourses } from "../services/coursesapi";
import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
function Courses() {
  const [courses, setCourses] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        
          const data = await getCourses();
          setCourses(data);
        
      };
      fetchData();
    }, [getCourses]);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Cursos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.courseId}
            className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white"
          >
            <CourseCard course={course} />
            <div className="pl-6 pr-6 pb-6">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">
                  {course.coursePrice.toFixed(2)}€ 
                </span>
                <button
                  onClick={() => addToCart(course)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
