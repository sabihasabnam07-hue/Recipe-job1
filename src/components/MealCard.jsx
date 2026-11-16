
import React from 'react';

function MealCard({ recipe, isBookmarked, onToggleBookmark }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#E5EDE5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">

      {/* Recipe Image */}
      <div className="relative overflow-hidden">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-[#E2F0E8] text-[#15803D] px-4 py-2 rounded-full text-xs font-bold shadow-sm">
          🍃 {recipe.strCategory || 'General'}
        </span>

        {/* Area Badge */}
        {recipe.strArea && (
          <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#183D2B] px-3 py-2 rounded-full text-xs font-semibold shadow-sm">
            🌍 {recipe.strArea}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between">

        <div>
          <h3 className="text-xl font-bold text-[#183D2B] leading-snug mb-3">
            {recipe.strMeal}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed">
            Discover this delicious meal and explore its cooking recipe.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-3 mt-6">

          <a
            href={recipe.strSource || recipe.strYoutube || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-[#15803D] text-[#15803D] px-4 py-3 rounded-xl font-semibold text-sm hover:bg-[#E2F0E8] transition duration-300"
          >
            View Recipe →
          </a>

          <button
            onClick={() => onToggleBookmark(recipe)}
            className={`flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              isBookmarked
                ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100'
                : 'bg-[#15803D] text-white hover:bg-[#166534] shadow-sm'
            }`}
          >
            {isBookmarked ? '✓ Added' : '+ Add to Cart'}
          </button>

        </div>
      </div>
    </div>
  );
}

export default MealCard;
