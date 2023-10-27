import React, { useEffect, useRef, useState } from 'react';
import ScrollyVideo from './ScrollyVideo';

function ScrollyVideoComponent(props) {

  // 视频外面的容器 ref
  const containerElement = useRef(null);

  // 视频实例 ref
  const scrollyVideoRef = useRef(null);

  // 保存上一次的 props
  const [lastPropsString, setLastPropsString] = useState('');

  useEffect(() => {
    if (containerElement) {
      // 视频播放的百分比
      const { videoPercentage, ...restProps } = props;

      if (JSON.stringify(restProps) !== lastPropsString) {
        // 如果视频已经存在并且有参数已更新，则销毁并重新创建。
        if (scrollyVideoRef.current && scrollyVideoRef.current.destroy) scrollyVideoRef.current.destroy();
        scrollyVideoRef.current = new ScrollyVideo({ scrollyVideoContainer: containerElement.current, ...props });

        // 保存当前的 props
        setLastPropsString(JSON.stringify(restProps));
      }

      // 如果视频已经存在并且 videoPercentage 有更新，则更新视频播放进度
      if (scrollyVideoRef.current && typeof videoPercentage === 'number' && videoPercentage >= 0 && videoPercentage <= 1) {
        scrollyVideoRef.current.setTargetTimePercent(videoPercentage);
      }
    }

    // 组件销毁时销毁视频实例
    return () => {
      if (scrollyVideoRef.current && scrollyVideoRef.current.destroy) scrollyVideoRef.current.destroy();
    }
  }, [containerElement, props]);

  return (<div ref={containerElement} />);
}

export default ScrollyVideoComponent;