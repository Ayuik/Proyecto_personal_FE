import { useState } from "react"
import { Save, X } from "lucide-react"

function CourseForm({ course, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    courseId: course.courseId || "",
    courseTitle: course.courseTitle || "",
    courseCategory: course.courseCategory || { categoryId: "", categoryName: "" },
    courseDescription: course.courseDescription || "",
    courseCover: course.courseCover || "/placeholder.svg?height=200&width=300",
    coursePrice: course.coursePrice || 0,
    videos: course.videos || [],
  })

  const [newData, setNewData] = useState({
    courseTitle: course.courseTitle || "",
    courseDescription: course.courseDescription || "",
    courseCover: course.courseCover || "/placeholder.svg?height=200&width=300",
    coursePrice: course.coursePrice || 0,
    videos: course.videos || [],
    courseCategory: course.courseCategory || { categoryId: "1" },
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === "coursePrice" ? Number.parseFloat(value) : value,
    })
    setNewData({
      ...newData,
      [name]: name === "coursePrice" ? Number.parseFloat(value) : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(course.courseId ? formData : newData)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{course.courseId ? "Editar Curso" : "Nuevo Curso"}</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div>
            <label htmlFor="courseTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Título
            </label>
            <input
              type="text"
              id="courseTitle"
              name="courseTitle"
              value={formData.courseTitle || newData.courseTitle}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="courseDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Descripción
            </label>
            <textarea
              id="courseDescription"
              name="courseDescription"
              value={formData.courseDescription || newData.courseDescription}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="courseCover" className="block text-sm font-medium text-gray-700 mb-1">
              URL de la imagen de portada
            </label>
            <input
              type="text"
              id="courseCover"
              name="courseCover"
              value={formData.courseCover || newData.courseCover}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {formData.courseCover && (
              <div className="mt-2 h-40 bg-gray-100 rounded">
                <img
                  src={formData.courseCover || newData.courseCover || "/placeholder.svg"}
                  alt="Vista previa"
                  className="h-full w-auto object-contain mx-auto"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="coursePrice" className="block text-sm font-medium text-gray-700 mb-1">
                Precio ( €)
              </label>
              <input
                type="number"
                id="coursePrice"
                name="coursePrice"
                value={formData.coursePrice || newData.coursePrice}
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

export default CourseForm
