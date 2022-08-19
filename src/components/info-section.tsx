import * as React from "react";

interface InfoSectionProps {
  title: string;
  children?: React.ReactNode;
}

const InfoSection = ({ title, children }: InfoSectionProps): JSX.Element => {
  return (
    <div className="px-8 py-8  bg-gray-200 rounded-2xl shadow-lg my-4">
      <h2 className="font-bold text-2xl pb-2">{title}</h2>
      {children}
    </div>
  );
};

export default InfoSection;
