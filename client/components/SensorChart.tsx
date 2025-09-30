import { useMemo } from "react";

type Props = {
  points?: number;
  height?: number;
  color?: string; // optional, defaults to black
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

export default function SensorChart({ points = 40, height = 140, color = "#000" }: Props) {
  const series = useMemo(() => generateSeries(points), [points]);

  // Viewbox and plot area
  const margin = { top: 8, right: 8, bottom: 24, left: 28 };
  const plotW = points - 1;
  const plotH = height - margin.top - margin.bottom;
  const vbW = plotW + margin.left + margin.right;
  const vbH = height;

  const toX = (i: number) => margin.left + (i / (points - 1)) * plotW;
  const toY = (v: number) => margin.top + (1 - v) * plotH;

  const coords = series.map((v, i) => `${toX(i).toFixed(2)},${toY(v).toFixed(2)}`);
  const path = `M ${coords.join(" L ")}`;

  // Axes (X: time, Y: sensor output) - drawn fully inside plot area
  const x0 = margin.left;
  const y0 = margin.top + plotH;
  const x1 = margin.left + plotW;
  const y1 = margin.top;

  const ticksX = [0, 1 / 3, 2 / 3, 1].map(t => toX(t * (points - 1)));
  const ticksY = [0, 0.5, 1].map(t => toY(t));

  return (
    <div style={{ width: "100%", height, overflow: "hidden" }}>
      <svg viewBox={`0 0 ${vbW} ${vbH}`} width="100%" height="100%" preserveAspectRatio="none" aria-hidden style={{ display: "block" }}>
        <g stroke="#000" strokeWidth={1}>
          <line x1={x0} y1={y0} x2={x1} y2={y0} />
          <line x1={x0} y1={y0} x2={x0} y2={y1} />
          {ticksX.map((x, i) => (
            <line key={`tx-${i}`} x1={x} y1={y0} x2={x} y2={y0 - 4} />
          ))}
          {ticksY.map((y, i) => (
            <line key={`ty-${i}`} x1={x0} y1={y} x2={x0 + 4} y2={y} />
          ))}
        </g>
        <path d={path} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="miter" strokeLinecap="butt" />
      </svg>
    </div>
  );
}
