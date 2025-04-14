import { ArrowLeft, Plus, Pencil, Trash2, Play } from "lucide-react"

function CourseVideos({ course, videos, onBack, onAddVideo, onEditVideo, onDeleteVideo }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-1 rounded-full hover:bg-gray-100">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-800">Videos de {course.course_title}</h2>
        <button
          onClick={onAddVideo}
          className="ml-auto flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Agregar Video
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Video</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Descripción
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duración
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {videos.map((video) => (
              <tr key={video.id_video}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-16 bg-gray-200 rounded flex items-center justify-center">
                      <Play className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 truncate max-w-xs">{video.video_url}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{video.video_description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{video.video_duration}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => onEditVideo(video)} className="text-blue-600 hover:text-blue-900 mr-4">
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button onClick={() => onDeleteVideo(video.id_video)} className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {videos.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No hay videos disponibles para este curso. Haga clic en "Agregar Video" para añadir uno.
        </div>
      )}
    </div>
  )
}

export default CourseVideos
