import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left nav text */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-[#333]">
          <a className="font-medium">Dashboard</a>
          <a className="text-[#666] hover:text-[#333]">Analytics</a>
          <a className="text-[#666] hover:text-[#333]">Offers</a>
          <a className="text-[#666] hover:text-[#333]">Community</a>
        </nav>

        {/* Search */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full md:w-80 relative">
            <input
              className="w-full bg-[#F5F6FA] text-[#333] placeholder:text-[#9AA0A6] rounded-2xl pl-11 pr-4 py-2 shadow-inner focus:outline-none border border-transparent focus:border-[#D8CEF8]"
              placeholder="Search"
            />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9AA0A6]"/>
          </div>
        </div>

        {/* Right icons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="w-10 h-10 grid place-items-center rounded-full bg-white shadow-sm border border-black/5 hover:shadow">
            <Bell size={18} className="text-[#333]"/>
          </button>
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDJ8fGphcGFuZXNlJTIwd29tYW58ZW58MHx8fHwxNzAwMDAwMDAw&crop=faces" alt="avatar" className="w-10 h-10 rounded-full object-cover"/>
        </div>
      </div>
    </header>
  );
}
