export default function CategoryCard({ category, image }) {
  return (
    <div className="relative bg-gradient-to-br bg-gray-50 dark:bg-gray-900 shadow-xl rounded-xl p-8 text-center hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-950 cursor-pointer transition-all hover:shadow-lg group">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
        <img src={image} alt={category} className="w-8 h-8 object-cover" />
      </div>
      <h3 className="text-xl font-bold capitalize mb-2 text-gray-800 dark:text-gray-50">
        {category}
      </h3>
      <p className="text-gray-600 dark:text-gray-50">Browse {category} products</p>
    </div>
  );
}
