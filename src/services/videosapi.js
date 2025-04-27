import { endpoint, buildHeader } from "./config";

export async function updateVideo(updatedVideo, token){
  console.log("ID del video a actualizar:", updatedVideo.videoId);
  try {
    const response = await fetch(
      `${endpoint.videos}/${updatedVideo.videoId}`,
      {
        method: "PUT",
        headers: buildHeader(token),
        body: JSON.stringify(updatedVideo),
      }
    );

    if (!response.ok) {
      throw new Error(`Error updating video: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al editar el video:", error.message);
    throw error;
  }
  }