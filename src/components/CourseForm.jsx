import { useState, useEffect } from "react";
import { Save, X } from "lucide-react";
import { getCategories, postCategory } from "../services/categoriesapi";

export default function CourseForm({ course, onSave, onCancel }) {
  const [editedData, setEditedData] = useState({
    courseId: course?.courseId,
    courseTitle: course?.courseTitle || "",
    courseCategory: course?.courseCategory,
    courseDescription: course?.courseDescription || "",
    courseCover: course?.courseCover || "/placeholder.svg?height=200&width=300",
    coursePrice: course?.coursePrice || 0,
    videos: course?.videos || [],
  });

  const [newData, setNewData] = useState({
    courseTitle: course?.courseTitle || "",
    courseDescription: course?.courseDescription || "",
    courseCover: course?.courseCover || "/placeholder.svg?height=200&width=300",
    coursePrice: course?.coursePrice || 0,
    videos: course?.videos || [],
    courseCategory: course?.courseCategory || { categoryId: "1" },
  });

  const [categories, setCategories] = useState([]);
  const [isNewCategory, setIsNewCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCategories(data);
    })();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "coursePrice" ? parseFloat(value) : value;

    setEditedData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
    setNewData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  const handleNewCategoryNameChange = (e) => {
    const { value } = e.target;
    setNewCategoryName(value);
    setEditedData((prev) => ({
      ...prev,
      courseCategory: { categoryName: value },
    }));
    setNewData((prev) => ({
      ...prev,
      courseCategory: { categoryName: value },
    }));
  };

  const handleCategoryChange = (e) => {
    const selectedId = e.target.value;
    if (selectedId === "new") {
      setIsNewCategory(true);
      setEditedData((prev) => ({
        ...prev,
        courseCategory: { categoryId: "", categoryName: "" },
      }));
      setNewData((prev) => ({
        ...prev,
        courseCategory: { categoryId: "new", categoryName: "" },
      }));
    } else {
      setIsNewCategory(false);
      const selectedCategory = categories.find(
        (c) => String(c.categoryId) === selectedId
      );
      setEditedData((prev) => ({
        ...prev,
        courseCategory: selectedCategory,
      }));
      setNewData((prev) => ({
        ...prev,
        courseCategory: selectedCategory,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let dataToSave;
    if (course?.courseId) {
      dataToSave = editedData;
    } else {
      dataToSave = newData;
    }
    if (
      isNewCategory ||
      !dataToSave.courseCategory?.categoryId ||
      dataToSave.courseCategory.categoryId === "new"
    ) {
      const newCatPayload = { categoryName: newCategoryName };
      const newCategoryResponse = await postCategory(newCatPayload);
      dataToSave = {
        ...dataToSave,
        courseCategory: newCategoryResponse,
      };
    }
    onSave(dataToSave);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {course?.courseId ? "Editar Curso" : "Nuevo Curso"}
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div>
            <label
              htmlFor="courseTitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Título
            </label>
            <input
              type="text"
              id="courseTitle"
              name="courseTitle"
              value={editedData.courseTitle || newData.courseTitle}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="courseDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Descripción
            </label>
            <textarea
              id="courseDescription"
              name="courseDescription"
              value={editedData.courseDescription || newData.courseDescription}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="courseCover"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              URL de la imagen de portada
            </label>
            <input
              type="text"
              id="courseCover"
              name="courseCover"
              value={editedData.courseCover || newData.courseCover}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {editedData.courseCover && (
              <div className="mt-2 h-40 bg-gray-100 rounded">
                <img
                  src={
                    editedData.courseCover ||
                    newData.courseCover ||
                    "/placeholder.svg"
                  }
                  alt="Vista previa"
                  className="h-full w-auto object-contain mx-auto"
                />
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="coursePrice"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Precio (€)
              </label>
              <input
                type="number"
                id="coursePrice"
                name="coursePrice"
                value={editedData.coursePrice || newData.coursePrice}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="courseCategory"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Categoría
              </label>
              <select
                id="courseCategory"
                name="courseCategory"
                value={
                  course?.courseId
                    ? editedData.courseCategory?.categoryId || ""
                    : newData.courseCategory?.categoryId || ""
                }
                onChange={handleCategoryChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map((cat) => (
                  <option key={cat.categoryId} value={cat.categoryId}>
                    {cat.categoryName}
                  </option>
                ))}
                <option value="new">Crear nueva categoría</option>
              </select>
            </div>
            {isNewCategory && (
              <div>
                <label
                  htmlFor="newCategoryName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nueva Categoría
                </label>
                <input
                  type="text"
                  id="newCategoryName"
                  name="newCategoryName"
                  value={newCategoryName}
                  onChange={handleNewCategoryNameChange}
                  placeholder="Escribe el nombre de la nueva categoría"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            )}
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
        </div>
      </form>
    </div>
  );
}
