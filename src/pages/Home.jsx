import { useState } from "react";
import CategoryTabs from "../components/CategoryTabs";
import CardItem from "../components/CardItem";

function Home() {
  const [category, setCategory] = useState("Фільми");

  const testData = {
    Фільми: [
      { title: "Inception", genre: "Sci-Fi", status: "Завершив" },
      { title: "Interstellar", genre: "Sci-Fi", status: "Планую" },
    ],
    Серіали: [
      { title: "Stranger Things", genre: "Триллеры", status: "В процесі" },
    ],
    Книги: [{ title: "1984", genre: "Dystopia", status: "Завершив" }],
    Манга: [{ title: "Naruto", genre: "Shonen", status: "В процесі" }],
  };

  return (
    <div className="p-6">
      <h1 className="text-2x1 font-bold mb-4">Трекер переглянутого</h1>

      <CategoryTabs onSelect={setCategory} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {testData[category].map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
