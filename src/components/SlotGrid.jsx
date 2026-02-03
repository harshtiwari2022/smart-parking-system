import { motion } from "framer-motion";

export default function SlotGrid({ slots }) {
  if (!slots.length) {
    return (
      <div className="text-center py-16 text-slate-400">
        <p className="text-xl font-medium">No parking slots added yet</p>
        <p className="mt-2 text-sm">
          Add slots to start managing your parking system
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {slots.map((slot) => {
        const statusColor = slot.isOccupied
          ? "from-rose-500 to-red-600"
          : "from-emerald-400 to-green-500";

        return (
          <motion.div
            key={slot.slotNo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`relative rounded-2xl p-[2px] bg-gradient-to-br ${statusColor}`}
          >
            <div className="rounded-2xl bg-white/90 backdrop-blur-xl p-5 h-full shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-800">
                  Slot #{slot.slotNo}
                </h3>

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    slot.isOccupied
                      ? "bg-rose-100 text-rose-600"
                      : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  {slot.isOccupied ? "Occupied" : "Available"}
                </span>
              </div>

              {/* Features */}
              <div className="space-y-2 text-sm">
                <FeatureBadge
                  label="EV Charging"
                  enabled={slot.isEVCharging}
                />
                <FeatureBadge
                  label="Covered Slot"
                  enabled={slot.isCovered}
                />
              </div>

              {/* Footer Indicator */}
              <div className="absolute bottom-4 right-4 text-2xl">
                {slot.isOccupied ? "🚗" : "🅿️"}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function FeatureBadge({ label, enabled }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
        enabled
          ? "bg-indigo-100 text-indigo-600"
          : "bg-slate-100 text-slate-400"
      }`}
    >
      <span>{enabled ? "✔" : "✖"}</span>
      {label}
    </div>
  );
}
