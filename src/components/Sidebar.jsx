import { Home, Pencil, Zap, Hand, Settings, LifeBuoy } from "lucide-react";

const NavIcon = ({ Icon, active = false }) => (
  <div
    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-sm cursor-pointer border border-white/60
      ${active
        ? "bg-gradient-to-br from-[#D8CEF8] to-[#FF69B4] text-white shadow-[0_10px_25px_rgba(255,105,180,0.25)]"
        : "bg-white text-[#333] hover:shadow-[0_8px_18px_rgba(0,0,0,0.06)]"}`}
  >
    <Icon size={20} />
  </div>
);

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col justify-between min-h-screen w-[84px] p-4 bg-[#F1F1F1] border-r border-black/5">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="w-12 h-12 rounded-2xl bg-white shadow-[0_15px_40px_rgba(99,102,241,0.25)] grid place-items-center relative overflow-hidden">
          <svg width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="g" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#8EC5FF"/>
                <stop offset="100%" stopColor="#3B82F6"/>
              </radialGradient>
            </defs>
            <path d="M32 6c9 8 16 12 16 22 0 10-8 18-18 18S12 38 12 28C12 18 23 15 32 6z" fill="url(#g)" opacity="0.95"/>
            <circle cx="32" cy="32" r="6" fill="#E0EAFF"/>
          </svg>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-4 mt-2">
          <NavIcon Icon={Home} active />
          <NavIcon Icon={Pencil} />
          <NavIcon Icon={Zap} />
          <NavIcon Icon={Hand} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <NavIcon Icon={Settings} />
        <NavIcon Icon={LifeBuoy} />
      </div>
    </aside>
  );
}
