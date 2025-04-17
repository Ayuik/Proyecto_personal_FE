import { Pencil, Trash2, Plus, Video } from "lucide-react";
import CourseCard from "./CourseCard";

function CoursesOnSale({ courses, onDelete, onEdit, onViewVideos, onAddNew }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Cursos a la venta</h2>
        <button
          onClick={onAddNew}
          className="flex items-center bg-purple-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Nuevo Curso
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.courseId}
            className="bg-white border rounded-lg overflow-hidden shadow-sm"
          >
            <CourseCard course={course} />

            <div className="pl-6 pr-6 pb-6">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">
                  {course.coursePrice.toFixed(2)}€
                </span>
                <button
                  onClick={() => onViewVideos(course)}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                >
                  <Video className="h-4 w-4 mr-1" />
                  Ver Videos
                </button>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(course)}
                    className="p-1 text-blue-600 hover:text-blue-800"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onDelete(course.courseId)}
                    className="p-1 text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {courses.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No hay cursos disponibles. Haga clic en "Nuevo Curso" para agregar
          uno.
        </div>
      )}
    </div>
  );
}

export default CoursesOnSale;
