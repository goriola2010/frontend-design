import {
  ListFilter,
  Search,
  UserPlus,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <div className="bg-white px-4 sm:px-6 py-3 border-b border-slate-100">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <ListFilter className="w-10 h-7 text-blue-500" />
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
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
  );
}
