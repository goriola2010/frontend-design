import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/* import React, { useState } from "react";

export default function EcommercePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const phones = [
    {
      name: "Galaxy S22 Ultra",
      price: "₹32,999",
      cut: "₹74,999",
      save: "Save - ₹32,999",
      discount: "55% OFF",
      img: "https://images.unsplash.com/photo-1612950781769-9d6f4b3ad0d3?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Galaxy M13 (4GB | 64 GB)",
      price: "₹10,499",
      cut: "₹14,999",
      save: "Save - ₹4,500",
      discount: "58% OFF",
      img: "https://images.unsplash.com/photo-1612832020433-4d8b7b1b1d59?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Galaxy M33 (4GB | 64 GB)",
      price: "₹16,999",
      cut: "₹24,999",
      save: "Save - ₹8,000",
      discount: "50% OFF",
      img: "https://images.unsplash.com/photo-1580910035278-6086f31a48a8?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Galaxy M53 (4GB | 64 GB)",
      price: "₹31,999",
      cut: "₹40,999",
      save: "Save - ₹9,000",
      discount: "56% OFF",
      img: "https://images.unsplash.com/photo-1616628184282-9f60f8f5e6f6?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Galaxy S22 Ultra",
      price: "₹67,999",
      cut: "₹85,999",
      save: "Save - ₹18,000",
      discount: "56% OFF",
      img: "https://images.unsplash.com/photo-1621935980228-0b8f8b6e0615?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const heroSlides = [
    {
      titleTop: "Best Deal Online on smart watches",
      titleMain: "SMART WEARABLE.",
      subtitle: "UP to 80% OFF",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop",
      bg: "#233a56",
    },
    {
      titleTop: "Exclusive Offer",
      titleMain: "SUMMER ELECTRONICS SALE",
      subtitle: "UP to 70% OFF",
      img: "https://images.unsplash.com/photo-1519336555923-5967c9b1a03b?q=80&w=500&auto=format&fit=crop",
      bg: "#233a56",
    },
    {
      titleTop: "Limited Time",
      titleMain: "TOP SMARTPHONES",
      subtitle: "UP to 60% OFF",
      img: "https://images.unsplash.com/photo-1510557880182-3f5d9d5dafb8?q=80&w=500&auto=format&fit=crop",
      bg: "#233a56",
    },
  ];

  const categories = [
    { name: "Mobile", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop" },
    { name: "Cosmetics", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop" },
    { name: "Electronics", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop" },
    { name: "Furniture", img: "https://images.unsplash.com/photo-1549187774-b4e9e1f2b3f7?q=80&w=400&auto=format&fit=crop" },
    { name: "Watches", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop" },
    { name: "Decor", img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=400&auto=format&fit=crop" },
    { name: "Accessories", img: "https://images.unsplash.com/photo-1526178618420-6d5f7c1c7b8f?q=80&w=400&auto=format&fit=crop" },
  ];

  const brandSlides = [
    {
      title: "IPHONE",
      subtitle: "UP to 80% OFF",
      img: "https://images.unsplash.com/photo-1621935980228-0b8f8b6e0615?q=80&w=300&auto=format&fit=crop",
      bg: "#1f2937",
      color: "white",
    },
    {
      title: "REALME",
      subtitle: "UP to 80% OFF",
      img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=300&auto=format&fit=crop",
      bg: "#facc15",
      color: "black",
    },
    {
      title: "XIAOMI",
      subtitle: "UP to 80% OFF",
      img: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=300&auto=format&fit=crop",
      bg: "#fb923c",
      color: "white",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
     <div className="bg-white text-gray-600 text-xs py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>Welcome to worldwide Megamart!</div>
          <div className="hidden sm:flex items-center gap-6">
            <div>📍 Deliver to 423661</div>
            <div>📦 Track your order</div>
            <div>🎯 All Offers</div>
          </div>
        </div>
      </div>

    
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-blue-600 grid place-items-center text-white font-bold text-lg">
              M
            </div>
            <div className="text-2xl font-bold text-blue-600">
              MegaMart
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
              <input
                className="w-full rounded-lg border border-gray-200 bg-blue-50 px-10 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Search essentials, groceries and more..."
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
            <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50">
              <span>👤</span> 
              <span>Sign Up/Sign In</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50">
              <span>🛒</span> 
              <span>Cart</span>
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 space-y-3">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              <input
                className="w-full rounded-lg border border-gray-200 bg-blue-50 px-10 py-2.5 text-sm"
                placeholder="Search..."
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50 w-full">
              <span>👤</span> Sign Up/Sign In
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50 w-full">
              <span>🛒</span> Cart
            </button>
          </div>
        )}
      </div>


      <div className="bg-white px-4 py-3 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center gap-6 text-sm overflow-x-auto">
          <button className="rounded-full bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 flex-shrink-0">
            Groceries ▾
          </button>
          {[
            "Premium Fruits",
            "Home & Kitchen", 
            "Fashion",
            "Electronics",
            "Beauty",
            "Home Improvement",
            "Sports, Toys & Luggage"
          ].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors flex-shrink-0 text-gray-700"
            >
              {cat} ▾
            </button>
          ))}
        </div>
      </div>

    
      <div className="px-4 py-6">
        <div className="max-w-6xl mx-auto relative">
          <div className="relative rounded-xl overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {heroSlides.map((slide, idx) => (
                <div 
                  key={idx}
                  className="w-full flex-shrink-0 h-64 md:h-80 flex items-center justify-between px-8 md:px-12 py-8"
                  style={{ backgroundColor: slide.bg }}
                >
                  <div className="text-white max-w-md">
                    <p className="text-sm opacity-90">{slide.titleTop}</p>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
                      {slide.titleMain}
                    </h1>
                    <p className="text-lg mt-3 font-medium">{slide.subtitle}</p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <img 
                      src={slide.img} 
                      alt={slide.titleMain}
                      className="w-48 md:w-64 h-32 md:h-48 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-md hover:bg-gray-50"
          >
            <span className="text-lg">‹</span>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-md hover:bg-gray-50"
          >
            <span className="text-lg">›</span>
          </button>


          <div className="flex justify-center mt-4 gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            Grab the best deal on <span className="text-blue-600">Smartphones</span>
          </h2>
          <button className="text-blue-600 text-sm font-medium hover:underline">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {phones.map((phone, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 p-4 relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded font-medium">
                {phone.discount}
              </div>
              
              <div className="flex justify-center mb-4">
                <img
                  src={phone.img}
                  alt={phone.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
              </div>
              
              <h3 className="text-sm font-medium text-gray-800 mb-2 leading-tight">
                {phone.name}
              </h3>
              
              <div className="text-sm mb-1">
                <span className="font-semibold text-gray-900">{phone.price}</span>
                <span className="line-through text-gray-400 ml-2">{phone.cut}</span>
              </div>
              
              <div className="text-xs text-green-600 font-medium">
                {phone.save}
              </div>
            </div>
          ))}
        </div>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            Shop From <span className="text-blue-600">Top Categories</span>
          </h2>
          <button className="text-blue-600 text-sm font-medium hover:underline">
            View All →
          </button>
        </div>

        <div className="flex items-center gap-6 overflow-x-auto pb-2">
          {categories.map((category, i) => (
            <div key={i} className="flex flex-col items-center min-w-[100px] cursor-pointer group">
              <div className="w-18 h-18 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center shadow-sm group-hover:border-blue-200 transition-colors">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-10 h-10 object-contain rounded-full"
                />
              </div>
              <span className="mt-3 text-sm text-gray-700 font-medium">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            Top <span className="text-blue-600">Electronics Brands</span>
          </h2>
          <button className="text-blue-600 text-sm font-medium hover:underline">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brandSlides.map((brand, i) => (
            <div 
              key={i}
              className="rounded-lg overflow-hidden relative h-48 cursor-pointer hover:scale-105 transition-transform"
              style={{ backgroundColor: brand.bg }}
            >
              <div className="flex flex-col justify-between h-full p-6">
                <div style={{ color: brand.color }}>
                  <p className="text-sm font-medium">{brand.title}</p>
                  <p className="text-lg font-bold mt-2">{brand.subtitle}</p>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <img
                  src={brand.img}
                  alt={brand.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/
      <footer className="bg-gray-800 text-white mt-16 px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="font-semibold text-sm mb-4">About</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Help</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Payments</li>
              <li className="hover:text-white cursor-pointer">Shipping</li>
              <li className="hover:text-white cursor-pointer">Cancellation</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Policy</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Return Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Use</li>
              <li className="hover:text-white cursor-pointer">Privacy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Social</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Facebook</li>
              <li className="hover:text-white cursor-pointer">Twitter</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Mail Us</h4>
            <div className="text-sm text-gray-300 leading-relaxed">
              MegaMart Pvt Ltd.<br />
              123 Business Street<br />
              Kwara, Nigeria
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}   
}
*/
/* import React, { useState } from "react";

export default function EcommercePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const phones = [
    {
      name: "Galaxy S22 Ultra",
      price: "₹32,999",
      cut: "₹74,999",
      save: "Save - ₹32,999",
      discount: "55% OFF",
      img: "https://images.unsplash.com/photo-1612950781769-9d6f4b3ad0d3?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Galaxy M13 (4GB | 64 GB)",
      price: "₹10,499",
      cut: "₹14,999",
      save: "Save - ₹4,500",
      discount: "58% OFF",
      img: "https://images.unsplash.com/photo-1612832020433-4d8b7b1b1d59?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Galaxy M33 (4GB | 64 GB)",
      price: "₹16,999",
      cut: "₹24,999",
      save: "Save - ₹8,000",
      discount: "50% OFF",
      img: "https://images.unsplash.com/photo-1580910035278-6086f31a48a8?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Galaxy M53 (4GB | 64 GB)",
      price: "₹31,999",
      cut: "₹40,999",
      save: "Save - ₹9,000",
      discount: "56% OFF",
      img: "https://images.unsplash.com/photo-1616628184282-9f60f8f5e6f6?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Galaxy S22 Ultra",
      price: "₹67,999",
      cut: "₹85,999",
      save: "Save - ₹18,000",
      discount: "56% OFF",
      img: "https://images.unsplash.com/photo-1621935980228-0b8f8b6e0615?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const heroSlides = [
    {
      titleTop: "Best Deal Online on smart watches",
      titleMain: "SMART WEARABLE.",
      subtitle: "UP to 80% OFF",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop",
      bg: "#233a56",
    },
    {
      titleTop: "Exclusive Offer",
      titleMain: "SUMMER ELECTRONICS SALE",
      subtitle: "UP to 70% OFF",
      img: "https://images.unsplash.com/photo-1519336555923-5967c9b1a03b?q=80&w=500&auto=format&fit=crop",
      bg: "#233a56",
    },
    {
      titleTop: "Limited Time",
      titleMain: "TOP SMARTPHONES",
      subtitle: "UP to 60% OFF",
      img: "https://images.unsplash.com/photo-1510557880182-3f5d9d5dafb8?q=80&w=500&auto=format&fit=crop",
      bg: "#233a56",
    },
  ];

  const categories = [
    { name: "Mobile", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop" },
    { name: "Cosmetics", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop" },
    { name: "Electronics", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop" },
    { name: "Furniture", img: "https://images.unsplash.com/photo-1549187774-b4e9e1f2b3f7?q=80&w=400&auto=format&fit=crop" },
    { name: "Watches", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop" },
    { name: "Decor", img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=400&auto=format&fit=crop" },
    { name: "Accessories", img: "https://images.unsplash.com/photo-1526178618420-6d5f7c1c7b8f?q=80&w=400&auto=format&fit=crop" },
  ];

  const brandSlides = [
    {
      title: "IPHONE",
      subtitle: "UP to 80% OFF",
      img: "https://images.unsplash.com/photo-1621935980228-0b8f8b6e0615?q=80&w=300&auto=format&fit=crop",
      bg: "#1f2937",
      color: "white",
    },
    {
      title: "REALME",
      subtitle: "UP to 80% OFF",
      img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=300&auto=format&fit=crop",
      bg: "#facc15",
      color: "black",
    },
    {
      title: "XIAOMI",
      subtitle: "UP to 80% OFF",
      img: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=300&auto=format&fit=crop",
      bg: "#fb923c",
      color: "white",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
     <div className="bg-white text-gray-600 text-xs py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>Welcome to worldwide Megamart!</div>
          <div className="hidden sm:flex items-center gap-6">
            <div>📍 Deliver to 423661</div>
            <div>📦 Track your order</div>
            <div>🎯 All Offers</div>
          </div>
        </div>
      </div>

    
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-blue-600 grid place-items-center text-white font-bold text-lg">
              M
            </div>
            <div className="text-2xl font-bold text-blue-600">
              MegaMart
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
              <input
                className="w-full rounded-lg border border-gray-200 bg-blue-50 px-10 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Search essentials, groceries and more..."
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
            <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50">
              <span>👤</span> 
              <span>Sign Up/Sign In</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50">
              <span>🛒</span> 
              <span>Cart</span>
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 space-y-3">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              <input
                className="w-full rounded-lg border border-gray-200 bg-blue-50 px-10 py-2.5 text-sm"
                placeholder="Search..."
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50 w-full">
              <span>👤</span> Sign Up/Sign In
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50 w-full">
              <span>🛒</span> Cart
            </button>
          </div>
        )}
      </div>


      <div className="bg-white px-4 py-3 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center gap-6 text-sm overflow-x-auto">
          <button className="rounded-full bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 flex-shrink-0">
            Groceries ▾
          </button>
          {[
            "Premium Fruits",
            "Home & Kitchen", 
            "Fashion",
            "Electronics",
            "Beauty",
            "Home Improvement",
            "Sports, Toys & Luggage"
          ].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors flex-shrink-0 text-gray-700"
            >
              {cat} ▾
            </button>
          ))}
        </div>
      </div>

      
      <div className="px-4 py-6">
        <div className="max-w-6xl mx-auto relative">
          <div className="relative rounded-xl overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {heroSlides.map((slide, idx) => (
                <div 
                  key={idx}
                  className="w-full flex-shrink-0 h-64 md:h-80 flex items-center justify-between px-8 md:px-12 py-8"
                  style={{ backgroundColor: slide.bg }}
                >
                  <div className="text-white max-w-md">
                    <p className="text-sm opacity-90">{slide.titleTop}</p>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
                      {slide.titleMain}
                    </h1>
                    <p className="text-lg mt-3 font-medium">{slide.subtitle}</p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <img 
                      src={slide.img} 
                      alt={slide.titleMain}
                      className="w-48 md:w-64 h-32 md:h-48 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-md hover:bg-gray-50"
          >
            <span className="text-lg">‹</span>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-md hover:bg-gray-50"
          >
            <span className="text-lg">›</span>
          </button>


          <div className="flex justify-center mt-4 gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            Grab the best deal on <span className="text-blue-600">Smartphones</span>
          </h2>
          <button className="text-blue-600 text-sm font-medium hover:underline">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {phones.map((phone, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 p-4 relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded font-medium">
                {phone.discount}
              </div>
              
              <div className="flex justify-center mb-4">
                <img
                  src={phone.img}
                  alt={phone.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
              </div>
              
              <h3 className="text-sm font-medium text-gray-800 mb-2 leading-tight">
                {phone.name}
              </h3>
              
              <div className="text-sm mb-1">
                <span className="font-semibold text-gray-900">{phone.price}</span>
                <span className="line-through text-gray-400 ml-2">{phone.cut}</span>
              </div>
              
              <div className="text-xs text-green-600 font-medium">
                {phone.save}
              </div>
            </div>
          ))}
        </div>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            Shop From <span className="text-blue-600">Top Categories</span>
          </h2>
          <button className="text-blue-600 text-sm font-medium hover:underline">
            View All →
          </button>
        </div>

        <div className="flex items-center gap-6 overflow-x-auto pb-2">
          {categories.map((category, i) => (
            <div key={i} className="flex flex-col items-center min-w-[100px] cursor-pointer group">
              <div className="w-18 h-18 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center shadow-sm group-hover:border-blue-200 transition-colors">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-10 h-10 object-contain rounded-full"
                />
              </div>
              <span className="mt-3 text-sm text-gray-700 font-medium">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            Top <span className="text-blue-600">Electronics Brands</span>
          </h2>
          <button className="text-blue-600 text-sm font-medium hover:underline">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brandSlides.map((brand, i) => (
            <div 
              key={i}
              className="rounded-lg overflow-hidden relative h-48 cursor-pointer hover:scale-105 transition-transform"
              style={{ backgroundColor: brand.bg }}
            >
              <div className="flex flex-col justify-between h-full p-6">
                <div style={{ color: brand.color }}>
                  <p className="text-sm font-medium">{brand.title}</p>
                  <p className="text-lg font-bold mt-2">{brand.subtitle}</p>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <img
                  src={brand.img}
                  alt={brand.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/
      <footer className="bg-gray-800 text-white mt-16 px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="font-semibold text-sm mb-4">About</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Help</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Payments</li>
              <li className="hover:text-white cursor-pointer">Shipping</li>
              <li className="hover:text-white cursor-pointer">Cancellation</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Policy</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Return Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Use</li>
              <li className="hover:text-white cursor-pointer">Privacy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Social</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Facebook</li>
              <li className="hover:text-white cursor-pointer">Twitter</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Mail Us</h4>
            <div className="text-sm text-gray-300 leading-relaxed">
              MegaMart Pvt Ltd.<br />
              123 Business Street<br />
              Kwara, Nigeria
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}   
}
*/
