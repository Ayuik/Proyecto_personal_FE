import UserAdminHeader from "../components/UserAdminHeader";
import { getCourses, deleteCourse, updateCourse, postCourse } from "../services/coursesapi";
import { useState, useEffect } from "react";
import CoursesOnSale from "../components/CoursesOnSale";
import CourseForm from "../components/CourseForm";
import CourseVideos from "../components/CourseVideos";
import VideoEdit from "../components/VideoEdit";

function AdminPage() {
  const [activeView, setActiveView] = useState("courses");
  const [editingCourse, setEditingCourse] = useState(null);
  const [addingCourse, setAddingCourse] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [editingVideo, setEditingVideo] = useState(null);

  const [courses, setCourses] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourses();
      setCourses(data);
    };
    fetchData();
  }, [getCourses]);

  const handleDeleteCourse = async (courseId) => {
    try {
      const result = await deleteCourse(courseId);
      console.log("Respuesta del backend:", result);
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
      const result = await updateCourse(updatedCourse);
      console.log("Respuesta del backend:", result);
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
      courseCategory: { categoryId: "1"}
      });
    setActiveView("addCourse");
  };

  const handlePostCourse = async (newCourse) => {
    try {
      const result = await postCourse(newCourse);
      console.log("Respuesta del backend:", result);
      if (result) {
        const data = await getCourses();
        setCourses(data);
      }
    } catch (error) {
      console.error("Error al crear el curso:", error);
    }
    setActiveView("courses");
    setEditingCourse(null);
  };

  ////

  const handleEditVideo = (video) => {
    setEditingVideo(video);
    setActiveView("editVideo");
  };

  const handleAddVideo = () => {
    setEditingVideo({
      videoUrl: "",
      video_course_id: selectedCourse.id_course,
      videoDescription: "",
      videoDuration: "",
    });
    setActiveView("editVideo");
  };

  const handleSaveVideo = (updatedVideo) => {
    if (updatedVideo.videoId) {
      setVideos(
        videos.map((video) =>
          video.videoId === updatedVideo.videoId ? updatedVideo : video
        )
      );
    } else {
      const newVideo = {
        ...updatedVideo,
        videoId: Math.max(0, ...videos.map((v) => v.videoId)) + 1,
      };
      setVideos([...videos, newVideo]);

      // Update course video count
      setCourses(
        courses.map((course) =>
          course.courseId === updatedVideo.video_course_id
            ? { ...course, courseNumVideos: course.courseNumVideos + 1 }
            : course
        )
      );
    }
    setActiveView("courseVideos");
    setEditingVideo(null);
  };

  const handleDeleteVideo = (id) => {
    const videoToDelete = videos.find((v) => v.videoId === id);
    setVideos(videos.filter((video) => video.videoId !== id));

    // Update course video count
    if (videoToDelete) {
      setCourses(
        courses.map((course) =>
          course.id_course === videoToDelete.video_course_id
            ? { ...course, course_num_videos: course.course_num_videos - 1 }
            : course
        )
      );
    }
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

          {activeView === "editCourse" && (
            <CourseForm
              course={editingCourse}
              onSave={handleUpdateCourse}
              onCancel={() => {
                setActiveView("courses");
                setEditingCourse(null);
              }}
            />
          )}

{activeView === "addCourse" && (
            <CourseForm
              course={addingCourse}
              onSave={handlePostCourse}
              onCancel={() => {
                setActiveView("courses");
                setEditingCourse(null);
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
              onAddVideo={handleAddVideo}
              onEditVideo={handleEditVideo}
              onDeleteVideo={handleDeleteVideo}
            />
          )}

          {activeView === "editVideo" && (
            <VideoEdit
              video={editingVideo}
              onSave={handleSaveVideo}
              onCancel={() => {
                setActiveView("courseVideos");
                setEditingVideo(null);
              }}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default AdminPage;
