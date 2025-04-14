import { useState } from "react"
import { Save, X } from "lucide-react"

function VideoEdit({ video, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    id_video: video.id_video || null,
    video_url: video.video_url || "",
    video_course_id: video.video_course_id,
    video_description: video.video_description || "",
    video_duration: video.video_duration || "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{video.id_video ? "Editar Video" : "Nuevo Video"}</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div>
            <label htmlFor="video_url" className="block text-sm font-medium text-gray-700 mb-1">
              URL del Video
            </label>
            <input
              type="text"
              id="video_url"
              name="video_url"
              value={formData.video_url}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="video_description" className="block text-sm font-medium text-gray-700 mb-1">
              Descripción
            </label>
            <textarea
              id="video_description"
              name="video_description"
              value={formData.video_description}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="video_duration" className="block text-sm font-medium text-gray-700 mb-1">
              Duración (ej. 15:30)
            </label>
            <input
              type="text"
              id="video_duration"
              name="video_duration"
              value={formData.video_duration}
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
  )
}

export default VideoEdit
