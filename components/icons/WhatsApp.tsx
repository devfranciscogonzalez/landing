import { JSX, SVGProps } from "react";

const WhatsApp = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
      strokeWidth="12"
      stroke="currentColor"
      className="size-[25px] absolute -bottom-[9px] -left-[8px] z-0 text-[#25d366] group-hover:text-green-600"
      {...props}
    >
      {" "}
      <polygon
        fill="currentColor"
        stroke="#FFFFFF"
        points="32,70 90,55 45,0"
      ></polygon>{" "}
    </svg>{" "}
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="z-10 absolute text-[#25d366] group-hover:text-green-600"
    >
      {" "}
      <circle fill="currentColor" cx="50" cy="50" r="50"></circle>{" "}
    </svg>{" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 absolute mt-[8px] ml-[8px] z-20"
    >
      {" "}
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
        clipRule="evenodd"
      ></path>{" "}
    </svg>{" "}
  </>
); 
export default WhatsApp;
