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

const MacroBar = ({ name, grams, Icon, gradient }) => {
  const max = 300; // g
  const height = Math.max(8, Math.min(grams / max * 100, 100));
  return (
    <div className="relative group">
      {/* bar */}
      <div
        className="w-full rounded-xl shadow-[inset_0_-8px_28px_rgba(255,105,180,0.22)] transition-all duration-700 ease-out origin-bottom group-hover:scale-[1.02]"
        style={{
          height: `${height}%`,
          backgroundImage: `linear-gradient(to top, ${gradient.from}, ${gradient.to})`,
        }}
        aria-label={`${name} ${grams} grams`}
      />

      {/* x label */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[#666] text-xs">
        {name}
      </div>

      {/* icon bubble */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/70 backdrop-blur border border-white/60 shadow grid place-items-center">
        <Icon size={16} className="text-[#333]" />
      </div>

      {/* value pill */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur text-[11px] text-[#333] shadow border border-white/70 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
        {grams} g
      </div>
    </div>
  );
};

export default function MiddleRow() {
  const macros = [
    {
      name: "Protein",
      grams: 240,
      Icon: Drumstick,
      gradient: { from: "#D8CEF8", to: "#FF69B4" },
    },
    {
      name: "Fat",
      grams: 120,
      Icon: Fish,
      gradient: { from: "#E9D7FE", to: "#A78BFA" },
    },
    {
      name: "Carbs",
      grams: 180,
      Icon: Croissant,
      gradient: { from: "#FEE2F2", to: "#FF69B4" },
    },
  ];

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

        {/* chart area */}
        <div className="mt-6 relative h-56">
          {/* grid lines */}
          <div className="absolute inset-x-0 top-0 h-px bg-black/5" />
          <div className="absolute inset-x-0 top-1/4 h-px bg-black/5" />
          <div className="absolute inset-x-0 top-2/4 h-px bg-black/5" />
          <div className="absolute inset-x-0 top-3/4 h-px bg-black/5" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-black/10" />

          {/* bars */}
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-6 items-end h-full">
            {macros.map((m) => (
              <MacroBar key={m.name} {...m} />
            ))}
          </div>
        </div>

        {/* y-axis labels */}
        <div className="mt-3 flex justify-between text-xs text-[#888]">
          <span>0 g</span>
          <span>75 g</span>
          <span>150 g</span>
          <span>225 g</span>
          <span>300 g</span>
        </div>

        {/* legend */}
        <div className="mt-4 flex items-center gap-4 text-xs text-[#666]">
          {macros.map((m) => (
            <div key={m.name} className="inline-flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full shadow"
                style={{ background: `linear-gradient(135deg, ${m.gradient.from}, ${m.gradient.to})` }}
              />
              {m.name}
            </div>
          ))}
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
