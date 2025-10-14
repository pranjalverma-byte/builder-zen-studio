import React, { useEffect, useRef, useState } from "react";

interface ZoomedIframeProps {
  src: string;
  baseWidth: number; // intrinsic width of the embedded content (px)
  baseHeight: number; // intrinsic height of the embedded content (px)
  title?: string;
  style?: React.CSSProperties; // optional additional styles for the wrapper
}

// Scales an iframe to fill its container width while preserving aspect ratio,
// effectively "zooming" the embedded content. Height adjusts automatically.
export default function ZoomedIframe({
  src,
  baseWidth,
  baseHeight,
  title,
  style,
}: ZoomedIframeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const update = () => {
      const cw = node.clientWidth;
      if (cw > 0) setScale(cw / baseWidth);
    };

    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(node);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [baseWidth]);

  const scaledHeight = Math.max(1, Math.round(baseHeight * scale));

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: scaledHeight,
          overflow: "hidden",
          border: "1px solid #cccccc",
          borderRadius: 12,
          background: "#fff",
          ...style,
        }}
      >
        <iframe
          title={title}
          src={src}
          width={baseWidth}
          height={baseHeight}
          style={{
            border: 0,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            width: baseWidth,
            height: baseHeight,
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
