import { endpoint } from "./config";

export async function getCourses() {
  try {
    const response = await fetch(endpoint.courses);
    if (!response.ok) {
      throw new Error(`Error fetching courses: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

export async function deleteCourse(courseId) {
  try {
    const response = await fetch(`${endpoint.courses}/${courseId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error deleting course: ${response.status}`);
    } else {
      return true;
    }
  } catch (error) {
    console.error(error.message);
    return false;
  }
}

export async function updateCourse(updatedCourse) {
  console.log("ID del curso a actualizar:", updatedCourse.courseId);
  try {
    const response = await fetch(
      `${endpoint.courses}/${updatedCourse.courseId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCourse),
      }
    );

    if (!response.ok) {
      throw new Error(`Error updating course: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al editar el curso:", error.message);
    throw error;
  }
}

export async function postCourse(newCourse) {
  try {
    const response = await fetch(`${endpoint.courses}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    });

    if (!response.ok) {
      throw new Error(`Error creating course: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al crear el curso:", error.message);
    throw error;
  }
}
