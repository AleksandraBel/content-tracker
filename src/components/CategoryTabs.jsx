import { useState } from "react";

function CategoryTabs({ onSelect }) {
  const categories = ["Фільми", "Серіали", "Книги", "Манга"];
  const [active, setActive] = useState("Фільми");

  const handleClick = (cat) => {
    setActive(cat);
    onSelect(cat);
  };

  return (
    <div className="flex gap-4 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-4 py-2 rounded-lg ${
            active === cat
              ? "bg-violet-400 text-white"
              : "bg-violet-100 hover:bg-violet-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
