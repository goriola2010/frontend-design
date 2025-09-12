import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import Topbar from "./components/Topbar";
import {
  Menu,
  Search,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  MapPin,
  UserPlus,
  X,
  Truck,
  BadgePercent,
  ListFilter,
} from "lucide-react";
import accesories from "./assets/accessories.jpeg";
import furnitures from "./assets/furnitures.jpeg";
import watches from "./assets/accessories.jpeg";
import m13 from "./assets/galaxy m13.jpeg";
import m33 from "./assets/galaxy m33.jpeg";
import m53 from "./assets/galaxy m53.jpeg";
import s22 from "./assets/s22 ultra.jpeg";
import s23 from "./assets/s23 ultra.jpeg";
import wearable from "./assets/wearable.png";
import summer from "./assets/summer.png";
import smartphones from "./assets/smartphones.png";
import realme from "./assets/realme.jpeg";
import oppo from "./assets/oppo.jpeg";
import iphone from "./assets/iphone.jpeg";
import xiaomi from "./assets/xiaomi.jpeg";
import samsung from "./assets/samsung.jpeg";
import cherry from "./assets/cherry.jpeg";
import mango from "./assets/mango.jpeg";
import fruits from "./assets/fruits.jpeg";
import daily from "./assets/daily.jpeg";
import strawberry from "./assets/strawberry.jpeg";
import vegetables from "./assets/vegetables.jpeg";
import googleplay from "./assets/googleplay.png";
import appstore from "./assets/appstore.svg";

export default function EcommercePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const phones = [
    {
      name: "Galaxy S22 Ultra",
      price: "₹32,999",
      cut: "₹40,999",
      save: "Save - ₹3,2999",
      discount: "55% OFF",
      img: s22,
    },
    {
      name: "Galaxy M13 (4GB | 64 GB)",
      price: "₹10,499",
      cut: "₹14,999",
      save: "Save - ₹4,500",
      discount: "58% OFF",
      img: m13,
    },
    {
      name: "Galaxy M33 (4GB | 64 GB)",
      price: "₹16,999",
      cut: "₹24,999",
      save: "Save - ₹8,000",
      discount: "50% OFF",
      img: m33,
    },
    {
      name: "Galaxy M53 (4GB | 64 GB)",
      price: "₹31,999",
      cut: "₹40,999",
      save: "Save - ₹9,000",
      discount: "56% OFF",
      img: m53,
    },
    {
      name: "Galaxy S22 Ultra",
      price: "₹67,999",
      cut: "₹85,999",
      save: "Save - ₹18,000",
      discount: "56% OFF",
      img: s23,
    },
  ];

  const heroSlides = [
    {
      titleTop: "Best Deal Online on smart watches",
      titleMain: "SMART WEARABLE.",
      subtitle: "UP TO 80% OFF",
      img: wearable,
      bg: "#0b2340",
    },
    {
      titleTop: "Exclusive Offer",
      titleMain: "SUMMER ELECTRONICS SALE",
      subtitle: "UP TO 70% OFF",
      img: summer,
      bg: "#0b2340",
    },
    {
      titleTop: "Limited Time",
      titleMain: "TOP SMARTPHONES",
      subtitle: "UP TO 60% OFF",
      img: smartphones,
      bg: "#0b2340",
    },
  ];

  const categories = [
    {
      name: "Mobile",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Cosmetics",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Electronics",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Furniture",
      img: furnitures,
    },
    {
      name: "Watches",
      img: watches,
    },
    {
      name: "Decor",
      img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Accessories",
      img: accesories,
    },
  ];

  const brandSlides = [
    {
      title: "IPHONE",
      subtitle: "UP to 80% OFF",
      img: iphone,
      bg: "#111827",
      color: "white",
    },
    {
      title: "realme",
      subtitle: "UP to 80% OFF",
      img: realme,
      bg: "#facc15",
      color: "black",
    },
    {
      title: "XIAOMI",
      subtitle: "UP to 80% OFF",
      img: xiaomi,
      bg: "#fb923c",
      color: "white",
    },
    {
      title: "SAMSUNG",
      subtitle: "UP to 70% OFF",
      img: samsung,
      bg: "#e6eef2",
      color: "black",
    },
    {
      title: "OPPO",
      subtitle: "UP to 75% OFF",
      img: oppo,
      bg: "#fff1f2",
      color: "black",
    },
  ];
  const essentials = [
    {
      name: "Daily Essentials",
      img: daily,
      alt: "Daily Essentials",
    },
    {
      name: "Vegetables",
      img: vegetables,
      alt: "Vegetables",
    },
    { name: "Fruits", img: fruits, alt: "Fruits" },
    {
      name: "Strawberry",
      img: strawberry,
      alt: "Strawberry",
    },
    { name: "Mango", img: mango, alt: "Mango" },
    { name: "Cherry", img: cherry, alt: "Cherry" },
  ];
  const mostPopularCategories = [
    "Staples",
    "Beverages",
    "Personal Care",
    "Home Care",
    "Baby Care",
    "Vegetables & Fruits",
    "Snacks & Foods",
    "Dairy & Bakery",
  ];

  const customerServices = [
    "About Us",
    "Terms & Conditions",
    "FAQ",
    "Privacy Policy",
    "E-waste Policy",
    "Cancellation & Return Policy",
  ];

  return (
    <div className="bg-white text-[#6b7280] text-[13px] py-2">
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 flex justify-between items-center pr-10">
        <div>Welcome to worldwide Megamart!</div>
        <div className="hidden sm:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>Deliver to 423661</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-blue-400" />
            <span>Track your order</span>
          </div>
          <div className="flex items-center gap-2">
            <BadgePercent className="w-4 h-4 text-blue-400" />
            <span>All Offers</span>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 sm:px-6 py-3 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="">
              <ListFilter className="w-10 h-7 text-blue-500" />
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-blue-600">
              MegaMart
            </div>
          </div>
          <div className="hidden md:flex flex-1 ml-13 ">
            <div className="relative w-full max-w-[500px] mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                className="w-full rounded-lg border border-[#e6eef2] bg-blue-50 px-10 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Search essentials, groceries and more..."
              />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm text-slate-600">
            <button className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-slate-50">
              <UserPlus className="w-4 h-4 text-blue-400" /> Sign Up/Sign In
            </button>
            <button className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-slate-50">
              <ShoppingCart className="w-4 h-4 text-blue-400" /> Cart
            </button>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-3 space-y-2 text-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                className="w-full rounded-lg border border-[#e6eef2] bg-white px-10 py-2 text-sm"
                placeholder="Search..."
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 w-full">
              <UserPlus className="w-4 h-4" /> Sign Up/Sign In
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 w-full">
              <ShoppingCart className="w-4 h-4" /> Cart
            </button>
          </div>
        )}
      </div>
      <div className="bg-white px-3 sm:px- pt-2 pb-3 overflow-x-auto sm:overflow-x-hidden hide-scrollbar">
        <div className="max-w-[1200px] mx-auto flex items-center gap-3 sm:gap-4 text-sm">
          <button className="rounded-full bg-blue-50 text-blue-600 px-4 py-2 font-semibold hover:bg-blue-400 hover:text-white active:bg-blue-400 active:text-white flex-shrink-0 ">
            Groceries ▾
          </button>
          {[
            "Premium Fruits",
            "Home & Kitchen",
            "Fashion",
            "Electronics",
            "Beauty",
            "Home Improvement",
            "Sports, Toys&Luggage",
          ].map((cat) => (
            <button
              key={cat}
              className="px-3 py-1 rounded-full hover:bg-blue-400 hover:text-white active:bg-blue-400 active:text-white flex-shrink-0"
            >
              {cat} ▾
            </button>
          ))}
        </div>
      </div>
      <div className="relative px-4 sm:px-6 py-6">
        <div className="max-w-[1200px] mx-auto relative overflow-visible">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
          >
            {heroSlides.map((s, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-[220px] sm:h-[320px] overflow-visible">
                  <div className="flex flex-row items-center justify-between h-full bg-[#0b2340] text-white px-6 sm:px-8 py-6 sm:py-10 rounded-xl relative z-10 overflow-visible">
                    <div className="max-w-[520px] text-center sm:text-left">
                      <div className="text-xs sm:text-sm opacity-80">
                        {s.titleTop}
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-extrabold mt-2 leading-tight">
                        {s.titleMain}
                      </h2>
                      <div className="text-sm sm:text-lg mt-2 sm:mt-3 opacity-90">
                        {s.subtitle}
                      </div>
                    </div>
                    <div className="flex-shrink-0 mt-4 sm:mt-0 relative z-0">
                      <img
                        src={s.img}
                        alt={s.titleMain}
                        className="w-40 sm:w-60 mx-auto sm:ml-20"
                      />
                    </div>
                  </div>
                  <button
                    className="hero-prev absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white 
                      p-2 sm:p-3 shadow-md z-10 hidden sm:block"
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-600" />
                  </button>

                  <button
                    className="hero-next absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white 
                      p-2 sm:p-3 shadow-md z-10 hidden sm:grid"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base sm:text-lg font-semibold">
            Grab the best deal on{" "}
            <span className="text-blue-600">Smartphones</span>
            <div className="w-66 sm:w-72 h-1 bg-blue-400 rounded mt-1"></div>
          </h3>
          <button className="text-blue-600 text-sm">View All →</button>
        </div>
        <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 overflow-x-auto px-1 -mx-1 hide-scrollbar">
          {phones.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-[#e6eef2] p-3 sm:p-4 relative flex-shrink-0 w-[160px] sm:w-auto"
            >
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                {p.discount}
              </div>
              <div className="flex justify-center">
                <img
                  src={p.img}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                />
              </div>
              <h4 className="mt-2 sm:mt-3 text-xs sm:text-sm font-semibold">
                {p.name}
              </h4>
              <div className="mt-1 text-xs sm:text-sm">
                <span className="font-semibold">{p.price}</span>{" "}
                <span className="line-through text-slate-400">{p.cut}</span>
              </div>
              <div className="mt-1 sm:mt-2 text-[11px] sm:text-[13px] text-emerald-600">
                {p.save}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base sm:text-lg font-semibold">
            Shop From <span className="text-blue-600">Top Categories</span>
            <div className="w-45 h-1 bg-blue-400 rounded mt-1 sm:w-53"></div>
          </h3>
          <button className="text-blue-600 text-sm">View All →</button>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-hidden hide-scrollbar pb-3">
          {categories.map((c, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[90px] sm:min-w-[110px]"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow border border-[#eef6fb]">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-700">
                {c.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-8 mb-12">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base sm:text-lg font-semibold">
            Top <span className="text-blue-600">Electronics Brands</span>
            <div className="w-40 h-1 bg-blue-400 rounded mt-1"></div>
          </h3>
          <button className="text-blue-600 text-sm">View All →</button>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={12}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {brandSlides.map((b, i) => (
            <SwiperSlide key={i}>
              <div
                className="rounded-lg overflow-hidden relative h-[160px] sm:h-[200px]"
                style={{ backgroundColor: b.bg }}
              >
                <div className="flex flex-col justify-between h-full p-4 sm:p-6">
                  <div
                    className="text-xs sm:text-sm"
                    style={{ color: b.color }}
                  >
                    {b.title}
                  </div>
                  <div
                    className="text-sm sm:text-lg font-bold"
                    style={{ color: b.color }}
                  >
                    {b.subtitle}
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 w-28 sm:w-35">
                  <img
                    src={b.img}
                    alt={b.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-8 mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold mb-6">
              Daily <span className="text-blue-600">Essentials</span>
              <div className="w-35 h-1 bg-blue-400 rounded mt-1"></div>
            </h2>
            <button className="text-blue-600 text-sm">View All →</button>
          </div>
          <div className="flex sm:grid sm:grid-cols-6 gap-4 overflow-x-auto px-1 -mx-1 hide-scrollbar">
            {essentials.map((essential, idx) => (
              <div
                key={essential.name}
                className="flex flex-col items-center min-w-[110px] cursor-pointer"
              >
                <div
                  className={`p-4 rounded-lg ${
                    idx === 0
                      ? "border border-blue-500 shadow-lg"
                      : "hover:shadow-md"
                  }`}
                >
                  <img
                    src={essential.img}
                    alt={essential.alt}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <p className="mt-2 text-sm font-semibold text-center">
                  {essential.name}
                </p>
                <p className="text-xs font-bold">UP to 50% OFF</p>
              </div>
            ))}
          </div>
        </section><footer className="bg-blue-500 text-white py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 sm:px-6">
    {/* Column 1 */}
    <div>
      <h3 className="text-xl font-bold mb-6">MegaMart</h3>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Contact Us</h4>
        <p className="flex items-center space-x-2 mb-1">
          <span>
            <i className="fa-brands fa-whatsapp w-10 h-5 text-gray-300"></i>
          </span>
          <a href="https://wa.me/12029182132">
            WhatsApp <br /> +1 202-918-2132
          </a>
        </p>
        <p className="flex items-center space-x-2">
          <span>
            <i className="fa-solid fa-phone w-10 h-5 text-gray-300"></i>
          </span>
          <a href="tel:+12029182132">
            Call Us
            <br /> +1 202-918-2132
          </a>
        </p>
      </div>

      {/* Download app section */}
      <div>
        <h4 className="font-semibold mb-2">Download App</h4>
        <div className="flex space-x-4">
          {/* App Store Badge */}
          <a
            href="https://apps.apple.com/app/id000000000"
            aria-label="App Store"
          >
            <img
            src={appstore} // put your unzipped svg/png in public/badges/
              alt="Download on the App Store"
              className="h-12"
            />
          </a>

          {/* Google Play Badge */}
          <a
            href="https://play.google.com/store/apps/details?id=com.example.app"
            aria-label="Google Play Store"
          >
            <img
              src={googleplay} // put your unzipped png/svg in public/badges/
              alt="Get it on Google Play"
              className="h-12"
            />
          </a>
        </div>
      </div>
    </div>

    {/* Column 2 */}
    <div>
      <h4 className="font-semibold mb-4 border-b border-white pb-2">
        Most Popular Categories
      </h4>
      <ul className="space-y-2">
        {mostPopularCategories.map((item) => (
          <li
            key={item}
            className="text-sm cursor-pointer hover:underline"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h4 className="font-semibold mb-4 border-b pb-2">
        Customer Services
      </h4>
      <ul className="space-y-2">
        {customerServices.map((item) => (
          <li
            key={item}
            className="text-sm cursor-pointer hover:underline"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>

  <div className="mt-8 text-center text-sm opacity-75">
    © 2022 All rights reserved. Reliance Retail Ltd.
  </div>
</footer>

      </div>
    </div>
  );
}
