import { endpoint } from "./config";

export async function getVideos() {
    try {
      const response = await fetch(endpoint.videos);
      if (!response.ok) {
        throw new Error(`Error fetching videos: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return [];
    }
  }

export async function filterVideosByCourseId(course){
    try {
        const videos = await getVideos();
        return videos.filter(video => video.video_course_id === course.id_course);
      } catch (error) {
        console.error(error.message);
        return [];
      }
  }