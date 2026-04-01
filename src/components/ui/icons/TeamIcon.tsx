import { SVGProps } from "react";

export default function TeamIcon({
  color = "#009951",
  width = 20,
  height = 23,
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.54883 0.248047C12.669 0.24817 15.2109 2.85796 15.2109 6.09277C15.2109 9.3276 12.669 11.9374 9.54883 11.9375C6.42857 11.9375 3.88574 9.32767 3.88574 6.09277C3.88575 2.85788 6.42857 0.248047 9.54883 0.248047Z"
        fill={color}
        stroke={color}
        strokeWidth="0.496857"
      />
      <path
        d="M9.54907 13.459C14.8223 13.4592 19.0969 17.3873 19.0969 22.2324C19.0969 22.442 19.0863 22.6496 19.0706 22.8555H0.0266113C0.0108801 22.6496 0.000248902 22.442 0.000244141 22.2324C0.000244141 17.3871 4.27564 13.459 9.54907 13.459Z"
        fill={color}
      />
    </svg>
  );
}
