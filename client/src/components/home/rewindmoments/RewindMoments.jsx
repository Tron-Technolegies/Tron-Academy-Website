import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay, FaTimes } from "react-icons/fa";

const RewindMoments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  const getVideosPerView = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [videosPerView, setVideosPerView] = useState(getVideosPerView());

  useEffect(() => {
    const handleResize = () => setVideosPerView(getVideosPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getYouTubeVideoId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const getYouTubeThumbnail = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      : null;
  };

  const getYouTubeEmbedUrl = (url) => {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  const videos = [
    {
      id: 1,
      videoUrl: "https://youtube.com/shorts/-Bj9ovPedeg?feature=shared",
    },
    {
      id: 2,
      videoUrl: "https://youtube.com/shorts/NBvrozVqX7E?feature=shared",
    },
    {
      id: 3,
      videoUrl: "https://youtube.com/shorts/FFe5sft6Ubk?feature=shared",
    },
    // {
    //   id: 4,
    //   videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //   thumbnail:
    //     "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=600&fit=crop",
    // },
    // {
    //   id: 5,
    //   videoUrl: "https://youtube.com/shorts/-Bj9ovPedeg?feature=shared",
    //   thumbnail:
    //     "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=600&fit=crop",
    // },
    // {
    //   id: 6,
    //   videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //   thumbnail:
    //     "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=600&fit=crop",
    // },
  ];

  const handleVideoClick = (video) => {
    setPlayingVideo(video);
  };

  const closeVideo = () => {
    setPlayingVideo(null);
  };

  const nextSlide = () => {
    if (currentIndex < videos.length - videosPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleVideos = videos.slice(
    currentIndex,
    currentIndex + videosPerView
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 lg:p-8">
      <div className="text-center mb-8 lg:mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold mb-2 px-4">
          <span className="text-black">Rewind the </span>
          <span className="text-primary">Moments</span>
        </h1>
      </div>

      <div className="relative w-full max-w-7xl">
        {/* Arrows */}
        <div className="hidden sm:block">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0
                ? "bg-gray-500 bg-opacity-30 cursor-not-allowed"
                : "bg-white bg-opacity-20 hover:bg-opacity-30 cursor-pointer shadow-lg hover:shadow-xl"
            }`}
          >
            <FaChevronLeft
              className={`w-5 h-5 lg:w-6 lg:h-6 ${
                currentIndex === 0 ? "text-gray-400" : "text-white"
              }`}
            />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= videos.length - videosPerView}
            className={`absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
              currentIndex >= videos.length - videosPerView
                ? "bg-gray-500 bg-opacity-30 cursor-not-allowed"
                : "bg-white bg-opacity-20 hover:bg-opacity-30 cursor-pointer shadow-lg hover:shadow-xl"
            }`}
          >
            <FaChevronRight
              className={`w-5 h-5 lg:w-6 lg:h-6 ${
                currentIndex >= videos.length - videosPerView
                  ? "text-gray-400"
                  : "text-white"
              }`}
            />
          </button>
        </div>

        {/* Videos Container */}
        <div className="px-4 sm:px-12 lg:px-16">
          <div
            className="flex sm:justify-center items-center gap-3 sm:gap-4 lg:gap-6 overflow-x-auto sm:overflow-hidden no-scrollbar transition-all duration-500 ease-in-out"
          >
            {(window.innerWidth < 640 ? videos : visibleVideos).map((video) => {
              const thumbnailUrl =
                video.thumbnail || getYouTubeThumbnail(video.videoUrl);
              return (
                <div
                  key={video.id}
                  className="relative flex-shrink-0 snap-center cursor-pointer transform hover:scale-105 transition-all duration-300 group
                    w-72 h-96 sm:w-72 sm:h-96 lg:w-80 lg:h-[520px]
                    rounded-xl lg:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl"
                  onClick={() => handleVideoClick(video)}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-gray-800"
                    style={{
                      backgroundImage: thumbnailUrl
                        ? `url(${thumbnailUrl})`
                        : "none",
                    }}
                  />
                  {!thumbnailUrl && (
                    <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                      <span className="text-white text-sm sm:text-base lg:text-lg font-medium">
                        Video Thumbnail
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110 shadow-lg">
                      <FaPlay className="w-6 h-6 sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 lg:h-32 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="hidden sm:flex space-x-2 mt-6 lg:mt-8">
        {Array.from({
          length: Math.max(1, videos.length - videosPerView + 1),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex
                ? "bg-pink-400 shadow-lg"
                : "bg-white bg-opacity-30 hover:bg-opacity-50"
            }`}
          />
        ))}
      </div>

      {/* Mobile hint */}
      <div className="sm:hidden mt-6 text-center">
        <p className="text-white text-opacity-70 text-sm">
          Swipe to explore more videos
        </p>
      </div>

      {/* Video Modal */}
      {playingVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-4xl">
            <button
              onClick={closeVideo}
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 shadow-lg"
            >
              <FaTimes className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </button>

            <div className="relative w-full aspect-[9/16] sm:aspect-video bg-black rounded-lg lg:rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={getYouTubeEmbedUrl(playingVideo.videoUrl)}
                title="YouTube video player"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RewindMoments;
