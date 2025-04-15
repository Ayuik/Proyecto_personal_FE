import { useState } from "react";
import { ArrowLeft, Play } from "lucide-react";
import CourseCard from "../components/CourseCard";
import UserAdminHeader from "../components/UserAdminHeader";
import { Link } from "react-router-dom";
import CourseVideosPage from "./CourseVideosPage";

function UserPage() {
  const purchasedCourses = [
    {
      courseId: 1,
      courseTitle: "Fundamentos de producción musical",
      courseDuration: "60mins",
      courseDescription: "Descripción del curso 1",
      courseVideos: 32,
      courseCategory: {categoryName: "Produccion musical" },
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
                key={course.courseId}
                className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <CourseCard course={course} />
                <div className="flex justify-between items-center pl-4 pb-2">
                  <Link
                    to="/coursevideospage"
                    state={{ course }}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-gray-800 transition-colors text-sm flex items-center"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Ver videos
                  </Link>
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
