import { getCourses } from "../services/coursesapi";
import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
function Courses() {
  /* const [courses, setCourses] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        
          const data = await getCourses();
          setCourses(data);
        
      };
      fetchData();
    }, [getCourses]); */

  const courses = [
    {
      id_course: 1,
      course_title: "Fundamentos de producción musical",
      course_duration: "60mins",
      course_description: "Descripción del curso 1",
      course_videos: 32,
      course_category_id: "Producción",
      course_price: 99.99,
      course_cover:
        "https://cdn.pixabay.com/photo/2014/01/31/21/39/recording-255869_1280.jpg",
    },
    {
      id_course: 2,
      course_title: "Técnicas avanzadas de mezcla",
      course_duration: "1200mins",
      course_description: "Descripción del curso 2",
      course_videos: 24,
      course_category_id: "Mezcla",
      course_price: 129.99,
      course_cover:
        "https://cdn.pixabay.com/photo/2014/07/14/11/37/sound-studo-393042_1280.jpg",
    },
    {
      id_course: 3,
      course_title: "Masterización profesional",
      course_duration: "30mins",
      course_description: "Masterización",
      course_videos: 18,
      course_category_id: "Mixing",
      course_price: 149.99,
      course_cover:
        "https://cdn.pixabay.com/photo/2025/01/10/20/57/pro-audio-9324828_1280.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Cursos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id_course}
            className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white"
          >
            <CourseCard course={course} />
            <div className="pl-6 pr-6 pb-6">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">
                  ${course.course_price.toFixed(2)}
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
