import { Link } from "lucide-react";
import UserAdminHeader from "../components/UserAdminHeader";
import { useLocation } from "react-router-dom";
import { filterVideosByCourseId } from "../services/videosapi";
import VideoFrame from "../components/VideoFrame";
import { useState, useEffect } from "react";

function CourseVideosPage() {
  const location = useLocation();
  const course = location.state?.course;
  const [courseVideos, setCourseVideos] = useState([]);

  console.log(course)

  useEffect(() => {
    const fetchData = async () => {
      if (course) {
        try {
          const data = await filterVideosByCourseId(course);
          setCourseVideos(data);
        } catch (error) {
          console.error("Error al cargar los videos del curso:", error.message);
        }
      }
    };
    fetchData();
  }, [course]);

  if (!course) {
    return <p>Curso no encontrado</p>;
  }

  if (courseVideos.length === 0) {
    return <p>Cargando videos...</p>;
  }

  return (
    <main className="min-h-screen bg-gray-200">
      <UserAdminHeader />
      <div>
      <Link
          to="/userpage"
          className="inline-flex items-center text-gray-600 hover:text-black mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a mis cursos
        </Link>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">{course.courseTitle}</h3>
          <div className="flex items-center space-x-4"></div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Videos del curso</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courseVideos.map((video, index) => (
              <div
                key={video.videoId}
                className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-gray-200 relative">
                  <VideoFrame videoLink={video.videoUrl} />
                </div>
                <div className="p-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 mr-2 text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">
                        {video.videoTitle}
                      </h5>
                      <p className="text-xs text-gray-500">
                        {video.videoDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CourseVideosPage;
