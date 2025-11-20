import { Star, Bell } from "lucide-react";

function FlowerChart() {
  // A soft, radial "flower" using layered gradients and blur
  return (
    <div className="relative w-48 h-48 md:w-56 md:h-56">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D8CEF8]/70 to-[#FF69B4]/60 blur-xl"/>
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{ transform: `rotate(${i * 22.5}deg)` }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full w-24 md:w-28 h-24 md:h-28 rounded-[60%] bg-white/70 shadow-[inset_0_10px_30px_rgba(216,206,248,0.8)] border border-white/60"/>
        </div>
      ))}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-white to-white/70 shadow-lg border border-white/70"/>
    </div>
  );
}

export default function BottomRow() {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {/* Promo Card */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden relative">
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-[#333]">
              <Star size={18} className="text-[#8B5CF6]"/>
              <h3 className="text-lg font-semibold">Personal offer</h3>
            </div>
            <p className="mt-2 text-[#666]">Explore new AI trainings!</p>
            <button className="mt-4 px-4 py-2 rounded-xl text-white bg-[#7C3AED] hover:bg-[#6D28D9] shadow-[0_10px_24px_rgba(124,58,237,0.35)]">Explore</button>
          </div>
          <img
            alt="promo"
            className="absolute bottom-0 right-0 w-40 md:w-48 lg:w-56 object-cover select-none"
            src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDh8fGFzaWFuJTIwd29tYW4lMjB5b2dhfGVufDB8fHx8fDE2OTk5OTk5OTk"
          />
        </div>
      </div>

      {/* Weight goals */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-[#333]">
            <Bell size={18} className="text-[#7C3AED]"/>
            <h3 className="text-lg font-semibold">Weight goals</h3>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="text-[#666]">Weight <span className="text-[#333] font-medium">63 kg</span></div>
            <div className="text-[#666]">Week loss <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D8CEF8] to-[#FF69B4] font-semibold">-3 kg</span></div>
            <div className="text-[#666]">Total loss <span className="text-[#333] font-medium">-17 kg</span></div>
            <div>
              <button className="px-3 py-1.5 rounded-full text-[#333] bg-[#F5F0FF] border border-white/60 shadow-sm">My goal 56 kg</button>
            </div>
          </div>
        </div>
        <FlowerChart />
      </div>
    </section>
  );
}
