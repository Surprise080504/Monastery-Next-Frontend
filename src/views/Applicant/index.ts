import dynamic from "next/dynamic";
export const ApplicantView = dynamic(() => import("./Applicant"), { ssr: false });
