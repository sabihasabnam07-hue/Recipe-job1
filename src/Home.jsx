
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MealCard from './components/MealCard';
import Cart from './components/MyCart';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activePage, setActivePage] = useState('home');

  // LocalStorage থেকে কার্টের ডেটা লোড করা
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('recipeBookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  // কার্ট আপডেট হলে LocalStorage-এ সেভ করা
  useEffect(() => {
    localStorage.setItem('recipeBookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // API থেকে ডেটা আনার কমন ফাংশন
  const fetchRecipes = (query) => {
    setLoading(true);
    setError('');
    setRecipes([]);

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.meals) {
          setRecipes(data.meals);
        } else {
          setError('No recipes found. Try searching for something else!');
        }
      })
      .catch(() => {
        setLoading(false);
        setError('Failed to fetch recipes. Check your internet connection.');
      });
  };

  // পেজ প্রথমবার লোড হলে ডিফল্ট ডেটা দেখাবে
  useEffect(() => {
    fetchRecipes('chicken');
  }, []);

  // সার্চ বাটনে ক্লিক করলে কল হবে
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    fetchRecipes(searchTerm);
  };

  // কার্টে অ্যাড বা রিমুভ করার ফাংশন
  const toggleBookmark = (recipe) => {
    const isBookmarked = bookmarks.some(
      (item) => item.idMeal === recipe.idMeal
    );

    if (isBookmarked) {
      setBookmarks(
        bookmarks.filter((item) => item.idMeal !== recipe.idMeal)
      );
    } else {
      setBookmarks([...bookmarks, recipe]);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F7F2] pb-12 font-sans">

      {/* Navbar */}
      <Navbar
        cartCount={bookmarks.length}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Home Page */}
      {activePage === 'cart' ? (
        <Cart
          bookmarks={bookmarks}
          onToggleBookmark={toggleBookmark}
          setActivePage={setActivePage}
        />
      ) : (
        <div className="max-w-7xl mx-auto px-5 md:px-10">

          {/* Hero Section */}
          <div className="text-center py-12 md:py-16">

            <span className="inline-block bg-[#E2F0E8] text-[#15803D] px-5 py-2 rounded-full text-sm font-semibold mb-5">
              🍃 Fresh & Delicious Recipes
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-[#183D2B] leading-tight mb-5">
              Discover Your
              <br />
              <span className="text-[#16A34A]">
                Favorite Meals
              </span>
            </h1>

            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore delicious recipes, discover new flavors, and
              find the perfect meal for every moment.
            </p>

          </div>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto flex gap-3 mb-12 bg-white p-3 rounded-2xl shadow-md border border-[#E5EDE5]"
          >
            <input
              type="text"
              placeholder="Search recipes... (chicken, pasta, beef)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 min-w-0 px-4 py-3 bg-transparent text-gray-700 outline-none placeholder:text-gray-400"
            />

            <button
              type="submit"
              className="bg-[#15803D] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#166534] transition-all duration-300 shadow-sm"
            >
              Search
            </button>
          </form>

          {/* Recipe Section Header */}
          <div className="flex items-center justify-between mb-7">

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#183D2B]">
                Explore Recipes
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                Find something delicious to cook today.
              </p>
            </div>

            <div className="hidden sm:block bg-[#E2F0E8] text-[#15803D] px-4 py-2 rounded-xl font-semibold text-sm">
              🍽️ {recipes.length} Recipes
            </div>

          </div>

          {/* Loading */}
          {loading && (
            <div className="text-center py-16">
              <div className="w-12 h-12 border-4 border-[#D1FAE5] border-t-[#15803D] rounded-full animate-spin mx-auto mb-4"></div>

              <p className="text-[#15803D] font-semibold text-lg">
                Finding delicious recipes...
              </p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center bg-white border border-red-100 rounded-2xl p-8 shadow-sm">
              <p className="text-red-500 font-medium">
                {error}
              </p>
            </div>
          )}

          {/* Recipe Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {recipes.map((recipe) => {
              const isBookmarked = bookmarks.some(
                (item) => item.idMeal === recipe.idMeal
              );

              return (
                <MealCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  isBookmarked={isBookmarked}
                  onToggleBookmark={toggleBookmark}
                />
              );
            })}

          </div>

        </div>
      )}
    </div>
  );
}

export default Home;
