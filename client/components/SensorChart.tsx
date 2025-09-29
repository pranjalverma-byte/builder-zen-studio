import { useMemo } from "react";

type Props = {
  points?: number;
  height?: number;
  color?: string;
};

function generateSeries(n: number) {
  const data: number[] = [];
  let v = Math.random() * 0.6 + 0.2;
  for (let i = 0; i < n; i++) {
    v += (Math.random() - 0.5) * 0.15;
    if (v < 0.05) v = 0.05;
    if (v > 0.95) v = 0.95;
    data.push(v);
  }
  return data;
}

export default function SensorChart({ points = 30, height = 120, color = "#2f6b4b" }: Props) {
  const series = useMemo(() => generateSeries(points), [points]);
  const w = points - 1;
  const h = height;

  const coords = series.map((v, i) => {
    const x = (i / (points - 1)) * w;
    const y = (1 - v) * (h - 6) + 3; // padding 3px
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  });

  const path = `M ${coords.join(" L ")}`;

  return (
    <div style={{ width: "100%", height }}>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%" preserveAspectRatio="none" aria-hidden>
        <path d={path} fill="none" stroke={color} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    </div>
  );
}
