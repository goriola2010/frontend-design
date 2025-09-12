import { MapPin, Truck, BadgePercent } from "lucide-react";

export default function TopBar() {
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
    </div>
  );
}
