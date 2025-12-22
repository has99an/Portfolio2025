import { useEffect, useState } from "react";

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isHovering) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-5 h-5 rounded-full bg-accent opacity-50 blur-sm" />
    </div>
  );
};

export default CursorTrail;



