import { JSX, SVGProps } from "react";

const CurvedLine = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1600}
    height={295}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      stroke="url(#b)"
      d="M-7.5 294.422V54.414l.403-.076c.54-.101 1.348-.251 2.426-.447 2.156-.391 5.387-.966 9.687-1.697 8.601-1.462 21.478-3.551 38.58-6.059 34.203-5.014 85.305-11.7 152.891-18.387C331.658 14.374 532.767 1 796.5 1c263.73 0 464.84 13.374 600.01 26.748 67.59 6.686 118.69 13.373 152.89 18.387 17.11 2.508 29.98 4.597 38.58 6.06 4.3.73 7.54 1.305 9.69 1.696 1.08.196 1.89.346 2.43.447.15.03.29.055.4.076v240.008l-.84-.122-4.17-.598c-3.67-.524-9.09-1.292-16.1-2.269a8099.513 8099.513 0 0 0-59.85-8.101 9864.326 9864.326 0 0 0-202.92-24.579C1154.77 240.878 953.617 223 796.5 223c-157.117 0-358.265 17.878-520.121 35.753a9863.378 9863.378 0 0 0-202.922 24.579 8032.212 8032.212 0 0 0-59.844 8.101A4810.997 4810.997 0 0 0-6.655 294.3l-.845.122Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={796.5}
        x2={796.5}
        y1={80.778}
        y2={272.973}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFAFF" />
        <stop offset={1} stopColor="#FAFAFF" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="b"
        x1={796}
        x2={796}
        y1={-152.5}
        y2={152}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CECEEA" stopOpacity={0.62} />
        <stop offset={1} stopColor="#CECEEA" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default CurvedLine;
