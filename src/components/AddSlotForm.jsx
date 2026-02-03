import { useState } from "react";
import { motion } from "framer-motion";

export default function AddSlotForm({ onAdd }) {
  const [slotNo, setSlotNo] = useState("");
  const [isCovered, setIsCovered] = useState(false);
  const [isEV, setIsEV] = useState(false);

  const submit = () => {
    if (!slotNo) return;

    onAdd({
      slotNo: Number(slotNo),
      isCovered,
      isEVCharging: isEV,
      isOccupied: false,
    });

    setSlotNo("");
    setIsCovered(false);
    setIsEV(false);
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
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">➕</span>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Add Parking Slot
            </h2>
            <p className="text-sm text-slate-500">
              Configure parking slot features
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="grid gap-6 md:grid-cols-4 items-end">
          {/* Slot Number */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Slot Number
            </label>
            <input
              type="number"
              placeholder="e.g. 24"
              value={slotNo}
              onChange={(e) => setSlotNo(e.target.value)}
              className="w-full rounded-xl border border-slate-200 
                         px-4 py-3 text-slate-800
                         focus:outline-none focus:ring-2 
                         focus:ring-indigo-500/40
                         transition"
            />
          </div>

          {/* Covered */}
          <FeatureToggle
            label="Covered Slot"
            icon="🏠"
            enabled={isCovered}
            onToggle={() => setIsCovered(!isCovered)}
          />

          {/* EV */}
          <FeatureToggle
            label="EV Charging"
            icon="⚡"
            enabled={isEV}
            onToggle={() => setIsEV(!isEV)}
          />

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.01 }}
            disabled={!slotNo}
            onClick={submit}
            className="w-full rounded-xl py-3 font-semibold text-white
                       bg-gradient-to-r from-indigo-500 to-purple-600
                       shadow-lg shadow-indigo-500/30
                       hover:from-indigo-600 hover:to-purple-700
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition"
          >
            ➕ Add Slot
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function FeatureToggle({ label, icon, enabled, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full flex items-center justify-between
                  rounded-xl border px-4 py-3 text-sm font-medium
                  transition
                  ${
                    enabled
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
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
                      enabled ? "bg-indigo-500" : "bg-slate-300"
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
