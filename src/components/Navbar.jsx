
import React from 'react';

function Navbar({ cartCount, activePage, setActivePage }) {
  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-[#E5EDE5] sticky top-0 z-50 shadow-sm">

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-4">

        <div className="flex justify-between items-center">

          {/* Logo */}
          <h1
            onClick={() => setActivePage('home')}
            className="text-2xl md:text-3xl font-extrabold text-[#183D2B] cursor-pointer flex items-center gap-2"
          >
            <span className="text-3xl">🍳</span>
            Recipe<span className="text-[#16A34A]">Finder</span>
          </h1>

          {/* Navigation */}
          <div className="flex items-center gap-3">

            {/* Home Button */}
            <button
              onClick={() => setActivePage('home')}
              className={`px-4 md:px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activePage === 'home'
                  ? 'bg-[#15803D] text-white shadow-md'
                  : 'text-[#183D2B] hover:bg-[#E2F0E8]'
              }`}
            >
              🏠 Home
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setActivePage('cart')}
              className={`relative px-4 md:px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activePage === 'cart'
                  ? 'bg-[#15803D] text-white shadow-md'
                  : 'bg-[#E2F0E8] text-[#15803D] hover:bg-[#D1FAE5]'
              }`}
            >
              🛒 My Cart

              {/* Cart Count */}
              <span
                className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                  activePage === 'cart'
                    ? 'bg-white text-[#15803D]'
                    : 'bg-[#15803D] text-white'
                }`}
              >
                {cartCount}
              </span>
            </button>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
