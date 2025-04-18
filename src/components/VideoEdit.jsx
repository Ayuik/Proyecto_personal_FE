import { useState } from "react";
import { Save, X } from "lucide-react";

function VideoEdit({ video, onCancel, onSave }) {
  const [videoData, setVideoData] = useState({
    videoId: video && video.videoId ? video.videoId : null,
    videoTitle: video && video.videoTitle ? video.videoTitle : "",
    videoUrl: video && video.videoUrl ? video.videoUrl : "",
    videoDescription: video && video.videoDescription ? video.videoDescription : "",
    videoDuration: video && video.videoDuration ? video.videoDuration : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData({ ...videoData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Si videoId es null, eliminamos la propiedad para la creación
    const payload = { ...videoData };
    if (payload.videoId === null) {
      delete payload.videoId;
    }
    console.log("Se envía payload:", payload);
    onSave(payload);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {videoData.videoId ? "Editar Video" : "Nuevo Video"}
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div>
            <label htmlFor="videoTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Título del Video
            </label>
            <input
              type="text"
              id="videoTitle"
              name="videoTitle"
              value={videoData.videoTitle}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700 mb-1">
              URL del Video
            </label>
            <input
              type="text"
              id="videoUrl"
              name="videoUrl"
              value={videoData.videoUrl}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="videoDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Descripción
            </label>
            <textarea
              id="videoDescription"
              name="videoDescription"
              value={videoData.videoDescription}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="videoDuration" className="block text-sm font-medium text-gray-700 mb-1">
              Duración (minutos)
            </label>
            <input
              type="text"
              id="videoDuration"
              name="videoDuration"
              value={videoData.videoDuration}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <X className="h-5 w-5 mr-2" />
            Cancelar
          </button>
          <button
            type="submit"
            className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Save className="h-5 w-5 mr-2" />
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default VideoEdit;
