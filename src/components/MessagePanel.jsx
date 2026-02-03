import { motion, AnimatePresence } from "framer-motion";

export default function MessagePanel({ message }) {
  if (!message) return null;

  const type = getMessageType(message);

  return (
    <AnimatePresence>
      <motion.div
        key={message}
        initial={{ opacity: 0, y: -12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
        className={`relative overflow-hidden rounded-2xl
                    backdrop-blur-xl shadow-lg
                    border-l-4 p-5
                    ${typeStyles[type].container}`}
      >
        {/* Accent bar */}
        <div
          className={`absolute inset-y-0 left-0 w-1 
                      ${typeStyles[type].accent}`}
        />

        <div className="flex items-start gap-3">
          <span className="text-2xl">{typeStyles[type].icon}</span>
          <div>
            <p className="font-semibold text-slate-800">
              {typeStyles[type].title}
            </p>
            <p className="text-sm text-slate-600 mt-1">
              {message}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function getMessageType(message) {
  const msg = message.toLowerCase();
  if (msg.includes("success") || msg.includes("parked") || msg.includes("available")) {
    return "success";
  }
  if (msg.includes("error") || msg.includes("invalid") || msg.includes("no slot")) {
    return "error";
  }
  if (msg.includes("exists")) {
    return "warning";
  }
  return "info";
}

const typeStyles = {
  success: {
    title: "Success",
    icon: "✅",
    container: "bg-emerald-50/70 border-emerald-500",
    accent: "bg-emerald-500",
  },
  error: {
    title: "Error",
    icon: "❌",
    container: "bg-rose-50/70 border-rose-500",
    accent: "bg-rose-500",
  },
  warning: {
    title: "Warning",
    icon: "⚠️",
    container: "bg-amber-50/70 border-amber-500",
    accent: "bg-amber-500",
  },
  info: {
    title: "Info",
    icon: "ℹ️",
    container: "bg-indigo-50/70 border-indigo-500",
    accent: "bg-indigo-500",
  },
};
