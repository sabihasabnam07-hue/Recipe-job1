
import React from 'react';
import MealCard from './MealCard';

function Cart({ bookmarks, onToggleBookmark, setActivePage }) {
  return (
    <div className="min-h-screen bg-[#F6F7F2]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10">

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mb-10">

          <div>
            <span className="inline-block bg-[#E2F0E8] text-[#15803D] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🍃 Your Collection
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#183D2B]">
              My Saved Recipes
            </h2>

            <p className="text-gray-500 mt-3">
              All your favorite delicious meals in one place.
            </p>
          </div>

          {/* Recipe Count */}
          <div className="flex items-center gap-4">

            <div className="bg-white border border-[#E5EDE5] px-5 py-3 rounded-2xl shadow-sm">
              <p className="text-sm text-gray-500">Total Recipes</p>
              <p className="text-2xl font-bold text-[#15803D]">
                {bookmarks.length}
              </p>
            </div>

            <button
              onClick={() => setActivePage('home')}
              className="bg-[#15803D] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#166534] transition-all duration-300 shadow-sm"
            >
              ← Back Home
            </button>

          </div>
        </div>

        {/* Empty Cart */}
        {bookmarks.length === 0 ? (
          <div className="bg-white rounded-3xl border border-[#E5EDE5] shadow-sm text-center py-20 px-6">

            <div className="w-24 h-24 bg-[#E2F0E8] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">🍽️</span>
            </div>

            <h3 className="text-2xl font-bold text-[#183D2B] mb-3">
              Your Recipe Collection is Empty!
            </h3>

            <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
              You haven't saved any recipes yet. Explore delicious meals
              and add your favorite recipes to your collection.
            </p>

            <button
              onClick={() => setActivePage('home')}
              className="bg-[#15803D] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#166534] transition-all duration-300 shadow-md"
            >
              🍃 Explore Recipes
            </button>

          </div>
        ) : (

          /* Saved Recipes Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {bookmarks.map((recipe) => (
              <MealCard
                key={recipe.idMeal}
                recipe={recipe}
                isBookmarked={true}
                onToggleBookmark={onToggleBookmark}
              />
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;
