import { SVGProps } from "react";

export default function ExcelenciaIcon({
  color = "#009951",
  width = 27,
  height = 27,
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="13.4151" cy="13.4151" r="12.6699" stroke={color} strokeWidth="1.49057" />
      <circle cx="13.4151" cy="13.4149" r="9.31607" stroke={color} strokeWidth="1.49057" />
      <circle cx="13.4151" cy="13.4146" r="5.96228" stroke={color} strokeWidth="1.49057" />
    </svg>
  );
}
