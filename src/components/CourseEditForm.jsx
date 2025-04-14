import { useState } from "react"
import { Save, X } from "lucide-react"

function CourseEditForm({ course, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    id_course: course.id_course || null,
    course_title: course.course_title || "",
    course_description: course.course_description || "",
    course_cover: course.course_cover || "/placeholder.svg?height=200&width=300",
    course_price: course.course_price || 0,
    course_duration: course.course_duration || "",
    course_num_videos: course.course_num_videos || 0,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === "course_price" ? Number.parseFloat(value) : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{course.id_course ? "Editar Curso" : "Nuevo Curso"}</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div>
            <label htmlFor="course_title" className="block text-sm font-medium text-gray-700 mb-1">
              Título
            </label>
            <input
              type="text"
              id="course_title"
              name="course_title"
              value={formData.course_title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="course_description" className="block text-sm font-medium text-gray-700 mb-1">
              Descripción
            </label>
            <textarea
              id="course_description"
              name="course_description"
              value={formData.course_description}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="course_cover" className="block text-sm font-medium text-gray-700 mb-1">
              URL de la imagen de portada
            </label>
            <input
              type="text"
              id="course_cover"
              name="course_cover"
              value={formData.course_cover}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {formData.course_cover && (
              <div className="mt-2 h-40 bg-gray-100 rounded">
                <img
                  src={formData.course_cover || "/placeholder.svg"}
                  alt="Vista previa"
                  className="h-full w-auto object-contain mx-auto"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="course_price" className="block text-sm font-medium text-gray-700 mb-1">
                Precio ($)
              </label>
              <input
                type="number"
                id="course_price"
                name="course_price"
                value={formData.course_price}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
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
            className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <Save className="h-5 w-5 mr-2" />
            Guardar
          </button>
        </div>
      </form>
    </div>
  )
}

export default CourseEditForm
