import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false); // Initialize as false

  useEffect(() => {
    setMounted(true); // Set mounted to true after component mounts
  }, []);

  // Do not render theme-based logic until mounted
  if (!mounted) {
    return null; // Avoid rendering mismatched content during SSR
  }

  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p
        className="mt-5 opacity-80 text-xl"
        dangerouslySetInnerHTML={{
          __html: description || "Description not available."
        }}
      />
    </div>
  );
};

export default ServiceCard;
