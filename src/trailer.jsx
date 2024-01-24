// trailer.js

import React, { useEffect, useState } from "react";

const Trailer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const trailerElement = document.getElementById("trailer");
      const rect = trailerElement.getBoundingClientRect();

      const x = e.clientX - rect.width / 2;
      const y = e.clientY - rect.height / 2;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id="trailer" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}></div>;
};

export default Trailer;
