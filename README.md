# Smart Parking Lot System

A modern web-based parking lot management system built with React and Vite.  
The application efficiently manages parking slots, supports EV charging and covered parking preferences, and provides a clean, responsive user interface with smooth animations.

## Live Demo
Live URL: <YOUR_DEPLOYMENT_URL>

## GitHub Repository
Repository: <YOUR_GITHUB_REPO_URL>

---

## Features

- Add and manage parking slots dynamically
- Intelligent vehicle parking based on availability and requirements
- Support for EV charging slots and covered parking
- Real-time slot status updates (Available / Occupied)
- Clean, modern UI with smooth animations
- Fully responsive design for desktop and mobile devices

---

## Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** React Hooks
- **Deployment:** Vercel / Netlify

---

## Application Flow

1. Admin adds parking slots with specific features (covered, EV charging).
2. User parks a vehicle by selecting required features.
3. System automatically assigns the most suitable available slot.
4. Vehicle can be removed from a slot, making it available again.
5. Slot grid updates in real time to reflect the current status.

---

## Components Overview

- **AddSlotForm** – Create new parking slots with configurable features
- **ParkVehicle** – Allocate a vehicle based on slot requirements
- **RemoveVehicle** – Free an occupied parking slot
- **SlotGrid** – Visual representation of all parking slots
- **MessagePanel** – Displays system feedback messages

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone <REPOSITORY_URL>
