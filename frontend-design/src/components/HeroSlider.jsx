import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider({ slides }) {
  return (
    <div className="relative px-4 sm:px-6 py-6">
      <div className="max-w-[1200px] mx-auto relative overflow-visible">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
        >
          {slides.map((s, idx) => (
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
                <button className="hero-prev absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 sm:p-3 shadow-md z-10 hidden sm:block">
                  <ChevronLeft className="w-4 h-4 text-slate-600" />
                </button>
                <button className="hero-next absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 sm:p-3 shadow-md z-10 hidden sm:grid">
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
