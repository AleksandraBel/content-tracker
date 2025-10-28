function CardItem({ title, genre, status }) {
  return (
    <div className="p-4 bg-white shadow rounded-xl w-48">
      <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{genre}</p>
      <span className="text-xs text-violet-500">{status}</span>
    </div>
  );
}

export default CardItem;
