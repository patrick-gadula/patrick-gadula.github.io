import { useEffect, useState } from "react";

// Display floating mathematical characters in a grid
const mathSymbols = ["∑", "π", "√", "∞", "∫", "Δ", "λ", "θ", "∇"];

export const GridBackground = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    generateNodes();

    const handleResize = () => generateNodes();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateNodes = () => {
    const spacing = 100;
    const cols = Math.ceil(window.innerWidth / spacing);
    const rows = Math.ceil(window.innerHeight / spacing);

    const newNodes = [];
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        newNodes.push({
          id: `${x}-${y}`,
          left: x * spacing,
          top: y * spacing,
          delay: Math.random() * 4,
          symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
        });
      }
    }

    setNodes(newNodes);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute text-blue-400 text-lg animate-fade-float"
          style={{
            left: `${node.left}px`,
            top: `${node.top}px`,
            animationDelay: `${node.delay}s`,
          }}
        >
          {node.symbol}
        </div>
      ))}
    </div>
  );
};
