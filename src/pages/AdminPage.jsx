import UserAdminHeader from "../components/UserAdminHeader";
import { useState } from "react";
import CoursesOnSale from "../components/CoursesOnSale";
import CourseEditForm from "../components/CourseEditForm";
import CourseVideos from "../components/CourseVideos";
import VideoEdit from "../components/VideoEdit";

function AdminPage() {
  const [activeView, setActiveView] = useState("courses");
  const [editingCourse, setEditingCourse] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [editingVideo, setEditingVideo] = useState(null);

  // Sample courses data
  const [courses, setCourses] = useState([
    {
      id_course: 1,
      course_title: "Introducción a React",
      course_description: "Aprende los fundamentos de React desde cero",
      course_cover: "/placeholder.svg?height=200&width=300",
      course_price: 99.99,
      course_num_videos: 12,
      course_duration: "6 horas 30 minutos",
    },
    {
      id_course: 2,
      course_title: "JavaScript Avanzado",
      course_description: "Domina las características avanzadas de JavaScript",
      course_cover: "/placeholder.svg?height=200&width=300",
      course_price: 129.99,
      course_num_videos: 18,
      course_duration: "8 horas 45 minutos",
    },
    {
      id_course: 3,
      course_title: "Diseño Web Responsivo",
      course_description:
        "Crea sitios web que se adapten a cualquier dispositivo",
      course_cover: "/placeholder.svg?height=200&width=300",
      course_price: 79.99,
      course_num_videos: 10,
      course_duration: "5 horas 15 minutos",
    },
  ]);

  // Sample videos data
  const [videos, setVideos] = useState([
    {
      id_video: 1,
      video_url: "https://www.example.com/video1",
      video_course_id: 1,
      video_description: "Introducción a componentes en React",
      video_duration: "15:30",
    },
    {
      id_video: 2,
      video_url: "https://www.example.com/video2",
      video_course_id: 1,
      video_description: "Estado y propiedades en React",
      video_duration: "22:45",
    },
    {
      id_video: 3,
      video_url: "https://www.example.com/video3",
      video_course_id: 1,
      video_description: "Hooks en React",
      video_duration: "18:20",
    },
    {
      id_video: 4,
      video_url: "https://www.example.com/video4",
      video_course_id: 2,
      video_description: "Closures en JavaScript",
      video_duration: "20:15",
    },
    {
      id_video: 5,
      video_url: "https://www.example.com/video5",
      video_course_id: 2,
      video_description: "Promesas y async/await",
      video_duration: "25:10",
    },
  ]);

    const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id_course !== id));
    // Also delete associated videos
    setVideos(videos.filter((video) => video.video_course_id !== id));
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setActiveView("editCourse");
  };

  const handleViewCourseVideos = (course) => {
    setSelectedCourse(course);
    setActiveView("courseVideos");
  };

  const handleSaveCourse = (updatedCourse) => {
    if (updatedCourse.id_course) {
      setCourses(
        courses.map((course) =>
          course.id_course === updatedCourse.id_course ? updatedCourse : course
        )
      );
    } else {
      const newCourse = {
        ...updatedCourse,
        id_course: Math.max(0, ...courses.map((c) => c.id_course)) + 1,
        course_num_videos: 0,
      };
      setCourses([...courses, newCourse]);
    }
    setActiveView("courses");
    setEditingCourse(null);
  };

  const handleAddNewCourse = () => {
    setEditingCourse({
      course_title: "",
      course_description: "",
      course_cover: "/placeholder.svg?height=200&width=300",
      course_price: 0,
      course_duration: "",
      course_num_videos: 0,
    });
    setActiveView("editCourse");
  };

  const handleEditVideo = (video) => {
    setEditingVideo(video);
    setActiveView("editVideo");
  };

  const handleAddVideo = () => {
    setEditingVideo({
      video_url: "",
      video_course_id: selectedCourse.id_course,
      video_description: "",
      video_duration: "",
    });
    setActiveView("editVideo");
  };

  const handleSaveVideo = (updatedVideo) => {
    if (updatedVideo.id_video) {
      setVideos(
        videos.map((video) =>
          video.id_video === updatedVideo.id_video ? updatedVideo : video
        )
      );
    } else {
      const newVideo = {
        ...updatedVideo,
        id_video: Math.max(0, ...videos.map((v) => v.id_video)) + 1,
      };
      setVideos([...videos, newVideo]);

      // Update course video count
      setCourses(
        courses.map((course) =>
          course.id_course === updatedVideo.video_course_id
            ? { ...course, course_num_videos: course.course_num_videos + 1 }
            : course
        )
      );
    }
    setActiveView("courseVideos");
    setEditingVideo(null);
  };

  const handleDeleteVideo = (id) => {
    const videoToDelete = videos.find((v) => v.id_video === id);
    setVideos(videos.filter((video) => video.id_video !== id));

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
            <CourseEditForm
              course={editingCourse}
              onSave={handleSaveCourse}
              onCancel={() => {
                setActiveView("courses");
                setEditingCourse(null);
              }}
            />
          )}

          {activeView === "courseVideos" && selectedCourse && (
            <CourseVideos
              course={selectedCourse}
              videos={videos.filter(
                (video) => video.video_course_id === selectedCourse.id_course
              )}
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
