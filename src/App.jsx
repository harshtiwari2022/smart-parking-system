import { useState } from "react";
import { motion } from "framer-motion";

import AddSlotForm from "./components/AddSlotForm";
import ParkVehicle from "./components/ParkVehicle";
import RemoveVehicle from "./components/RemoveVehicle";
import SlotGrid from "./components/SlotGrid";
import MessagePanel from "./components/MessagePanel";

export default function App() {
  const [slots, setSlots] = useState([]);
  const [message, setMessage] = useState("");

  const addSlot = (slot) => {
    if (slots.some((s) => s.slotNo === slot.slotNo)) {
      setMessage("Slot number already exists");
      return;
    }
    setSlots((prev) => [...prev, slot]);
    setMessage(`Slot ${slot.slotNo} added successfully`);
  };

  const parkVehicle = (needsEV, needsCover) => {
    const available = slots
      .filter(
        (s) =>
          !s.isOccupied &&
          (!needsEV || s.isEVCharging) &&
          (!needsCover || s.isCovered)
      )
      .sort((a, b) => a.slotNo - b.slotNo);

    if (!available.length) {
      setMessage("No slot available for given requirements");
      return;
    }

    const chosen = available[0];
    setSlots((prev) =>
      prev.map((s) =>
        s.slotNo === chosen.slotNo
          ? { ...s, isOccupied: true }
          : s
      )
    );

    setMessage(`Vehicle parked at slot ${chosen.slotNo}`);
  };

  const removeVehicle = (slotNo) => {
    const slot = slots.find((s) => s.slotNo === slotNo);

    if (!slot || !slot.isOccupied) {
      setMessage("Invalid slot or slot already empty");
      return;
    }

    setSlots((prev) =>
      prev.map((s) =>
        s.slotNo === slotNo
          ? { ...s, isOccupied: false }
          : s
      )
    );

    setMessage(`Slot ${slotNo} is now available`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Smart Parking System
          </motion.h1>
          <p className="mt-4 max-w-2xl text-white/90 text-lg">
            Intelligent parking allocation with EV & covered slot support
          </p>
        </div>
      </header>

      {/* Content */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-12 space-y-12"
      >
        {/* Add Slot */}
        <motion.section
          whileHover={{ scale: 1.01 }}
          className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            ➕ Add New Parking Slot
          </h2>
          <AddSlotForm onAdd={addSlot} />
        </motion.section>

        {/* Actions */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.section
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">
              🚘 Park Vehicle
            </h2>
            <ParkVehicle onPark={parkVehicle} />
          </motion.section>

          <motion.section
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">
              ❌ Remove Vehicle
            </h2>
            <RemoveVehicle onRemove={removeVehicle} />
          </motion.section>
        </div>

        {/* Message */}
        <MessagePanel message={message} />

        {/* Slots */}
        <motion.section
          whileHover={{ scale: 1.01 }}
          className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-8">
            🅿️ Parking Slots Overview
          </h2>
          <SlotGrid slots={slots} />
        </motion.section>
      </motion.main>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-500 py-8">
        Crafted with ❤️ using React, Vite & Tailwind
      </footer>
    </div>
  );
}
