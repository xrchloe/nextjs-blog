import React, { useEffect, useRef } from "react";

const ScrollVideo = ({ playbackConst }) => {
  const videoRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const videoDuration = 20;
  playbackConst = playbackConst || 500; // Adjust the constant as needed

  useEffect(() => {
    // Use requestAnimationFrame for smooth playback
    function scrollPlay() {
      if (videoRef.current) {
        const frameNumber = window.scrollY / playbackConst;
        videoRef.current.currentTime = frameNumber;
      }
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
  }, []);

  useEffect(() => {
    const setScrollSectionHeihgt = (duration) => {
      const scrollSection = scrollSectionRef.current;
      // console.log("scrollSection", videoRef.current.duration);
      if (videoRef?.current) {
        scrollSection.style.height =
          Math.floor(duration) * playbackConst + "px";
      }
    };
    const video = videoRef.current;

    setScrollSectionHeihgt(videoDuration);

    video.addEventListener("loadedmetadata", () => {
      const { duration } = video;
      setScrollSectionHeihgt(duration);
    });

    return () => {
      video.removeEventListener("loadedmetadata", () => {});
    };
  }, []);

  return (
    <div className="">
      <div className="relative max-w-xxx m-auto z-10">
        <div className="sticky -top-4 py-28 ">
          <div className="guides -z-10">
            <div className="guides_lines">
              <div className="guides_line"></div>
              <div className="guides_line"></div>
              <div className="guides_line"></div>
              <div className="guides_line"></div>
              <div className="guides_line"></div>
            </div>
          </div>
          <video
            ref={videoRef}
            preload="preload"
            className="w-full rounded-3xl z-20"
          >
            <source
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
              src="/videos/mainsplash.mp4"
            ></source>
          </video>
        </div>
        <div ref={scrollSectionRef} id="scrollSection"></div>
      </div>
    </div>
  );
};
export default ScrollVideo;
