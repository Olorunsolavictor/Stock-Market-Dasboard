import React from "react";

interface TruncateTextProps {
  maxLength: number;
  text: any
}
const TruncateText: React.FC<TruncateTextProps> = ({ maxLength, text }) => {
  const truncatedText =
    text?.length > maxLength ? text?.slice(0, maxLength) + "..." : text;

  return (
    <span className="md:text-sm text-xs w-full">
      {truncatedText}
    </span>
  );
};

export default TruncateText;
