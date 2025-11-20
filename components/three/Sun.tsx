"use client";
import { motion } from "framer-motion";

const Sun = ({
  size = 200,
  circleColor = "#FFD93B",
  rayColor = "#E6C229",
  raysCount = 12,
  rayLength = 10,
  rayWidth = 20,
}) => {
  const center = size / 2;
  const circleRadius = size / 4;

  const rays = [];
  const angleStep = 360 / raysCount;

  for (let i = 0; i < raysCount; i++) {
    const angle = i * angleStep;
    const rad = (angle * Math.PI) / 180;

    const baseX = center + circleRadius * Math.cos(rad);
    const baseY = center + circleRadius * Math.sin(rad);

    const tipX = center + (circleRadius + rayLength) * Math.cos(rad);
    const tipY = center + (circleRadius + rayLength) * Math.sin(rad);

    const perpRad = rad + Math.PI / 2;
    const baseLeftX = baseX + (rayWidth / 2) * Math.cos(perpRad);
    const baseLeftY = baseY + (rayWidth / 2) * Math.sin(perpRad);
    const baseRightX = baseX - (rayWidth / 2) * Math.cos(perpRad);
    const baseRightY = baseY - (rayWidth / 2) * Math.sin(perpRad);

    const points = `${tipX},${tipY} ${baseLeftX},${baseLeftY} ${baseRightX},${baseRightY}`;

    rays.push(<polygon key={i} points={points} fill={rayColor} />);
  }

  return (
    <motion.svg
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileTap={{
        scale: 1.5,
      }}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle cx={center} cy={center} r={circleRadius} fill={circleColor} />
      {rays}
    </motion.svg>
  );
};

export default Sun;
