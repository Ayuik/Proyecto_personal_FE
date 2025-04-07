import { useState } from "react";
import { ArrowLeft, Play } from "lucide-react";
import CourseCard from "../components/CourseCard";
import UserAdminHeader from "../components/UserAdminHeader";
import { Link } from "react-router-dom";

function UserPage() {
  const purchasedCourses = [
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
  ];

  return (
    <main className="min-h-screen bg-gray-200">
      <UserAdminHeader />

      <div className="container mx-auto px-4 py-8">
        <Link
          to="/#home"
          className="inline-flex items-center text-gray-600 hover:text-black mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a la página principal
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-8">Mis cursos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {purchasedCourses.map((course) => (
              <div
                key={course.id}
                className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <CourseCard course={course} />
                <div className="flex justify-between items-center pl-4 pb-2">
                  <button
                    onClick={() => setSelectedCourse(course.id)}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-gray-800 transition-colors text-sm flex items-center"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Ver videos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default UserPage;
