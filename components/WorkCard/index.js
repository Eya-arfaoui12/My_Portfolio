import React, { useEffect, useState } from "react";
import Button from "../Button";
import { useTheme } from "next-themes";

const WorkCard = ({ icon, name, description, onClick, articleUrl, sourceUrl }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`overflow-hidden rounded-xl p-4 transition-transform duration-300 ease-in-out transform ${
        mounted && theme === "dark" ? "bg-gray-900 hover:bg-gray-800" : "bg-white hover:bg-gray-100"
      } shadow-lg hover:shadow-2xl cursor-pointer border border-gray-200`}
    >
      <div
        className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ease-in-out ${
          mounted && theme === "dark" ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <span
          className="text-5xl mb-4"
          role="img"
          aria-label={name}
        >
          {icon}
        </span>
        <h1 className="text-2xl font-semibold mb-2 text-center">
          {name || "Project Name"}
        </h1>
        <h2 className="text-lg text-gray-600 mb-4 text-center">
          {description || "Description"}
        </h2>
        <div className="flex space-x-2">
          {/* {articleUrl && (
            <Button
              type="primary"
              onClick={() => window.open(articleUrl, "_blank")}
              className="bg-blue-600 hover:bg-blue-700 text-white border-none rounded-md py-2 px-4"
            >
              Article
            </Button>
          )} */}
          <Button
            type="primary"
            onClick={() => window.open(sourceUrl, "_blank")}
            className="bg-pink-600 hover:bg-pink-700 text-white border-none rounded-md py-2 px-4"
          >
            Source
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
