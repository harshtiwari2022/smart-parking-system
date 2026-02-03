# Smart Parking Lot System

A modern web-based parking lot management system built with React and Vite.  
The application efficiently manages parking slots, supports EV charging and covered parking preferences, and provides a clean, responsive user interface with smooth animations.

## Live Demo
Live URL: [smartparkingsyste.netlify.app](https://smartparkingsyste.netlify.app/)

## GitHub Repository
Repository: [smart-parking-system](https://github.com/harshtiwari2022/smart-parking-system)


## Features

- Add and manage parking slots dynamically
- Intelligent vehicle parking based on availability and requirements
- Support for EV charging slots and covered parking
- Real-time slot status updates (Available / Occupied)
- Clean, modern UI with smooth animations
- Fully responsive design for desktop and mobile devices


## Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** React Hooks
- **Deployment:** Vercel / Netlify


## Application Flow

1. Admin adds parking slots with specific features (covered, EV charging).
2. User parks a vehicle by selecting required features.
3. System automatically assigns the most suitable available slot.
4. Vehicle can be removed from a slot, making it available again.
5. Slot grid updates in real time to reflect the current status.


## Components Overview

- **AddSlotForm** – Create new parking slots with configurable features
- **ParkVehicle** – Allocate a vehicle based on slot requirements
- **RemoveVehicle** – Free an occupied parking slot
- **SlotGrid** – Visual representation of all parking slots
- **MessagePanel** – Displays system feedback messages


## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/harshtiwari2022/smart-parking-system.git
   ```
2. Navigate to the project directory:
    ```bash
    cd smart-parking-system 
    ```
3. Install dependencies:
    ```bash 
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open the app in your browser: ```http://localhost:5173```

## Future Improvements

- Authentication and role-based access
- Parking analytics dashboard
- Auto-dismiss notifications
- Dark mode support
- Backend integration with database

## Demo Video

Demo video link: [ Assignment video](https://docs.google.com/videos/d/1MQQtec479tdMem0zAXKlvhBZMfPlQxrwZIvFQeGb2WY/edit?usp=sharing)

