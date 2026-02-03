import { useState } from "react";
import { motion } from "framer-motion";

export default function ParkVehicle({ onPark }) {
  const [needsEV, setNeedsEV] = useState(false);
  const [needsCover, setNeedsCover] = useState(false);

  const handlePark = () => {
    onPark(needsEV, needsCover);
    setNeedsEV(false);
    setNeedsCover(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl 
                 bg-white/70 backdrop-blur-xl 
                 shadow-xl p-8"
    >
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 to-green-100/40 pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🚘</span>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Park Vehicle
            </h2>
            <p className="text-sm text-slate-500">
              Find the best available parking slot
            </p>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          <ToggleOption
            label="Needs EV Charging"
            icon="⚡"
            enabled={needsEV}
            onToggle={() => setNeedsEV(!needsEV)}
          />
          <ToggleOption
            label="Needs Covered Parking"
            icon="🏠"
            enabled={needsCover}
            onToggle={() => setNeedsCover(!needsCover)}
          />
        </div>

        {/* Button */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.01 }}
          onClick={handlePark}
          className="w-full flex items-center justify-center gap-2
                     rounded-xl py-3 font-semibold text-white
                     bg-gradient-to-r from-emerald-500 to-green-600
                     shadow-lg shadow-green-500/30
                     hover:from-emerald-600 hover:to-green-700
                     transition"
        >
          🚗 Park Vehicle
        </motion.button>
      </div>
    </motion.div>
  );
}

function ToggleOption({ label, icon, enabled, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full flex items-center justify-between
                  rounded-xl border px-4 py-3 text-sm font-medium
                  transition
                  ${
                    enabled
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
    >
      <span className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        {label}
      </span>

      <span
        className={`w-10 h-6 flex items-center rounded-full p-1
                    transition ${
                      enabled ? "bg-emerald-500" : "bg-slate-300"
                    }`}
      >
        <span
          className={`bg-white w-4 h-4 rounded-full shadow
                      transform transition ${
                        enabled ? "translate-x-4" : "translate-x-0"
                      }`}
        />
      </span>
    </button>
  );
}
