import UserAdminHeader from "../components/UserAdminHeader";
import { getCourses, deleteCourse, updateCourse, postCourse } from "../services/coursesapi";
import { useState, useEffect } from "react";
import CoursesOnSale from "../components/CoursesOnSale";
import CourseForm from "../components/CourseForm";
import CourseVideos from "../components/CourseVideos";
import { useAuth } from "../components/AuthContext";

function AdminPage() {
  const [activeView, setActiveView] = useState("courses");
  const [editingCourse, setEditingCourse] = useState(null);
  const [addingCourse, setAddingCourse] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourses();
      setCourses(data);
    };
    fetchData();
  }, []);

  const handleDeleteCourse = async (courseId) => {
    try {
      const result = await deleteCourse(courseId, token);
      if (result) {
        const data = await getCourses();
        setCourses(data);
      }
    } catch (error) {
      console.error("Error al eliminar el curso:", error);
    }
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setActiveView("editCourse");
  };

  const handleViewCourseVideos = (course) => {
    setSelectedCourse(course);
    setActiveView("courseVideos");
  };

  const handleUpdateCourse = async (updatedCourse) => {
    try {
      const result = await updateCourse(updatedCourse, token);
      if (result) {
        const data = await getCourses();
        setCourses(data);
      }
    } catch (error) {
      console.error("Error al actualizar el curso:", error);
    }
    setActiveView("courses");
    setEditingCourse(null);
  };

  const handleAddNewCourse = () => {
    setAddingCourse({
      courseTitle: "",
      courseDescription: "",
      courseCover: "/placeholder.svg?height=200&width=300",
      coursePrice: 0,
      videos: [],
      courseCategory: { categoryId: "1" },
    });
    setActiveView("addCourse");
  };

  const handlePostCourse = async (newCourse) => {
    try {
      const result = await postCourse(newCourse, token);
      if (result) {
        const data = await getCourses();
        setCourses(data);
      }
    } catch (error) {
      console.error("Error al crear el curso:", error);
    }
    setActiveView("courses");
    setAddingCourse(null);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <UserAdminHeader />
        <main className="flex-1 overflow-y-auto p-4">
          {activeView === "courses" && (
            <CoursesOnSale
              courses={courses}
              onDelete={handleDeleteCourse}
              onEdit={handleEditCourse}
              onViewVideos={handleViewCourseVideos}
              onAddNew={handleAddNewCourse}
            />
          )}

          {activeView === "editCourse" && editingCourse && (
            <CourseForm
              course={editingCourse}
              onSave={handleUpdateCourse}
              onCancel={() => {
                setActiveView("courses");
                setEditingCourse(null);
              }}
            />
          )}

          {activeView === "addCourse" && addingCourse && (
            <CourseForm
              course={addingCourse}
              onSave={handlePostCourse}
              onCancel={() => {
                setActiveView("courses");
                setAddingCourse(null);
              }}
            />
          )}

          {activeView === "courseVideos" && selectedCourse && (
            <CourseVideos
              course={selectedCourse}
              onBack={() => {
                setActiveView("courses");
                setSelectedCourse(null);
              }}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default AdminPage;
