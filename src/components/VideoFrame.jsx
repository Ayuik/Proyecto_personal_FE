function VideoFrame({ videoLink }) {
  const extractVideoId = (videoLink) => {
    const regex =
      /(?:youtu\.be\/|youtube\.com\/(?:watch\\?v=|embed\/))([^&?/]+)/;
    const match = videoLink.match(regex);
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(videoLink);

  if (!videoId) {
    return <p>URL de YouTube no válida</p>;
  }

  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <iframe
      width="100%"
      height="100%"
      src={videoUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0"
    ></iframe>
  );
}

export default VideoFrame;
