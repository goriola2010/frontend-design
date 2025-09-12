export default function SmartphoneDeals({ phones }) {
  return (
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
                alt={p.name}
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
  );
}
