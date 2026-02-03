import { useState } from "react";
import { motion } from "framer-motion";

export default function RemoveVehicle({ onRemove }) {
  const [slotNo, setSlotNo] = useState("");

  const handleRemove = () => {
    if (!slotNo) return;
    onRemove(Number(slotNo));
    setSlotNo("");
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
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 to-red-100/40 pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">❌</span>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Remove Vehicle
            </h2>
            <p className="text-sm text-slate-500">
              Free up an occupied parking slot
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Slot Number
          </label>
          <input
            type="number"
            placeholder="Enter slot number (e.g. 12)"
            value={slotNo}
            onChange={(e) => setSlotNo(e.target.value)}
            className="w-full rounded-xl border border-slate-200 
                       px-4 py-3 text-slate-800
                       focus:outline-none focus:ring-2 
                       focus:ring-rose-500/40
                       transition"
          />
        </div>

        {/* Button */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.01 }}
          onClick={handleRemove}
          disabled={!slotNo}
          className="w-full flex items-center justify-center gap-2
                     rounded-xl py-3 font-semibold text-white
                     bg-gradient-to-r from-rose-500 to-red-600
                     shadow-lg shadow-red-500/30
                     hover:from-rose-600 hover:to-red-700
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition"
        >
          🚗 Remove Vehicle
        </motion.button>
      </div>
    </motion.div>
  );
}
