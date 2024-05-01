import React from "react";

interface SectionHeadingProps {
  children?: React.ReactNode;
  title: string;
  description: string;
}

function SectionHeading({ children, title, description }: SectionHeadingProps) {
  return (
    <>
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-xl text-foreground">{description}</p>
        </div>
        {children}
      </div>
    </>
  );
}

export default SectionHeading;
