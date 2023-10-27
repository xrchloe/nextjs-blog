import { useEffect, useRef } from "react";

import ScrollyVideo from "../../components/ScrollyVideo";

export default function Video() {
  // const videoWrapRef = useRef(null);
  // useEffect(() => {
  //   const resizeVideo = () => {
  //     console.log(videoWrapRef.current.offsetWidth);
  //     videoWrapRef.current.style.height = `${
  //       videoWrapRef.current.offsetWidth * 0.5625
  //     }px`;
  //   };

  //   resizeVideo();

  //   window.addEventListener("resize", resizeVideo);

  //   return () => {
  //     window.removeEventListener("resize", resizeVideo);
  //   };
  // }, []);
  return (
    <section>
      <div
        className="w-full m-auto max-w-xxx sticky top-0 overflow-hidden"
        style={{
          height: "675px",
        }}
      >
        <ScrollyVideo src="/videos/mainsplash.mp4" debug />
        {/* <video
          className="w-full rounded-3xl"
          autoPlay
          muted
          loop
          controls={false}
          src="/videos/mainsplash.mp4"
        /> */}
      </div>
      <div className="my-20" style={{ margin: "0 auto 90vh" }}>
        <div className="bg-green-500 h-20 w-20 m-auto">hello</div>
      </div>
      <div className="my-20" style={{ margin: "0 auto 90vh" }}>
        <div className="bg-green-500 h-20 w-20 m-auto">hello</div>
      </div>
      <div className="my-20" style={{ margin: "0 auto 90vh" }}>
        <div className="bg-green-500 h-20 w-20 m-auto">hello</div>
      </div>
      <div className="my-20" style={{ margin: "0 auto 90vh" }}>
        <div className="bg-green-500 h-20 w-20 m-auto">hello</div>
      </div>
      <div className="my-20" style={{ margin: "0 auto 90vh" }}>
        <div className="bg-green-500 h-20 w-20 m-auto">hello</div>
      </div>
      <div className="my-20" style={{ margin: "0 auto 90vh" }}>
        <div className="bg-green-500 h-20 w-20 m-auto">hello</div>
      </div>
      <div className="my-20" style={{ margin: "0 auto 90vh" }}>
        <div className="bg-green-500 h-20 w-20 m-auto">hello</div>
      </div>
    </section>
  );
}
