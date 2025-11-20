import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TopRow() {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {/* Greeting */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#333]">
          How do you feel today, Jasmine?
        </h1>
      </div>

      {/* Mood Tracker */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm text-[#666]">
          <button className="p-1 rounded-lg hover:bg-black/5"><ChevronLeft size={18}/></button>
          <div className="flex items-center gap-2">
            <span>Today I am</span>
            <span className="font-semibold text-[#333] flex items-center gap-2">Good! <span>✌️</span></span>
          </div>
          <button className="p-1 rounded-lg hover:bg-black/5"><ChevronRight size={18}/></button>
        </div>

        <div className="relative h-12 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ADB8FF] via-[#D8CEF8] to-[#FF69B4] opacity-90"/>
          <div className="absolute inset-0 backdrop-blur-[1px]"/>
          {/* slider track markers */}
          <div className="absolute inset-0 flex items-center justify-between px-6 text-xs text-white/80">
            <span>Bad</span>
            <span>Okay</span>
            <span>Good</span>
            <span>Great</span>
          </div>
          {/* thumb */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-white to-white/70 shadow-[0_8px_20px_rgba(0,0,0,0.1)] grid place-items-center border border-white/70">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D8CEF8] to-[#FF69B4]"/>
          </div>
        </div>
      </div>
    </section>
  );
}
