import React from "react";

interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className = "" }: SkeletonProps) => {
  return (
    <div
      className={`
        animate-pulse bg-gray-200 
        ${className}
      `}
    />
  );
};

export default Skeleton;
