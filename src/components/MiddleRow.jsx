import { ChevronDown, Fish, Drumstick, Croissant, Play, Pause } from "lucide-react";

const StatPill = ({ text, color = "#ADB8FF" }) => (
  <span
    className="px-3 py-1 rounded-full text-xs text-white"
    style={{ backgroundColor: color }}
  >
    {text}
  </span>
);

const TrainingItem = ({ title, status, time, playing }) => (
  <div className="flex items-center justify-between py-3 border-b last:border-0 border-black/5">
    <div>
      <p className="text-sm font-medium text-[#333]">{title}</p>
      <p className="text-xs text-[#888] mt-0.5">{time}</p>
    </div>
    <div className="flex items-center gap-3">
      {status === "Completed" ? (
        <StatPill text="Completed" color="#ADB8FF" />
      ) : (
        <StatPill text="In progress" color="#A5E3C7" />
      )}
      <button className="w-9 h-9 grid place-items-center rounded-full bg-white shadow-sm border border-black/5">
        {playing ? <Pause size={16} /> : <Play size={16} />}
      </button>
    </div>
  </div>
);

export default function MiddleRow() {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {/* Food balance */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#333]">Food balance</h3>
          <button className="text-sm text-[#666] inline-flex items-center gap-1 bg-[#F5F6FA] px-3 py-1.5 rounded-full">
            Today <ChevronDown size={16} />
          </button>
        </div>

        {/* Bars */}
        <div className="mt-6 grid grid-cols-3 gap-6 items-end h-48">
          {/* Protein */}
          <div className="relative">
            <div className="h-36 w-full rounded-xl bg-gradient-to-t from-[#D8CEF8] to-[#FF69B4] shadow-[inset_0_-6px_24px_rgba(255,105,180,0.25)]"/>
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[#888] text-xs">Protein</div>
            {/* floating icon */}
            <div className="absolute -top-4 -right-3 w-8 h-8 rounded-full bg-white/70 backdrop-blur border border-white/60 shadow grid place-items-center">
              <Drumstick size={16} className="text-[#333]"/>
            </div>
          </div>

          {/* Fat */}
          <div className="relative">
            <div className="h-24 w-full rounded-xl bg-gradient-to-t from-[#D8CEF8] to-[#FF69B4] shadow-[inset_0_-6px_24px_rgba(255,105,180,0.25)]"/>
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[#888] text-xs">Fat</div>
            {/* pill label */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/70 backdrop-blur text-xs text-[#333] shadow border border-white/60 flex items-center gap-1">
              <Fish size={14} className="text-[#333]"/> Salmon 420 Kcal
            </div>
          </div>

          {/* Carbs */}
          <div className="relative">
            <div className="h-28 w-full rounded-xl bg-gradient-to-t from-[#D8CEF8] to-[#FF69B4] shadow-[inset_0_-6px_24px_rgba(255,105,180,0.25)]"/>
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[#888] text-xs">Carbs</div>
            {/* floating icon */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/70 backdrop-blur border border-white/60 shadow grid place-items-center">
              <Croissant size={16} className="text-[#333]"/>
            </div>
          </div>
        </div>

        {/* y-axis labels */}
        <div className="mt-3 flex justify-between text-xs text-[#888]">
          <span>0 g</span>
          <span>100 g</span>
          <span>200 g</span>
          <span>300 g</span>
        </div>
      </div>

      {/* Training tracker */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#333]">Training tracker</h3>
          <button className="text-sm text-[#666]">See All &gt;</button>
        </div>

        <div className="mt-4">
          <TrainingItem title="Meditation" status="Completed" time="10m 40s" />
          <TrainingItem title="Tennis" status="In progress" time="43m 12s" playing />
          <TrainingItem title="Training" status="In progress" time="15m 05s" />
        </div>
      </div>
    </section>
  );
}
