# Tools Used

- React
- TypeScript
- TailwindCSS
- Material UI (MUI)
- Vite
- Framer Motion

---

How to Run the Application

1. Install Dependencies
   npm install

2. Start the Development Server
   npm run dev

   The app will be available at Localhost: [http://localhost:3000/](http://localhost:3000/)

---

Build for Production

To create a production build:
npm run build

---

Project Structure

src/

- animated/ --> Components wrappers with animation
- components/ --> Reusable UI components like Button, Links
- constant/ --> Static data like menu links and dashboard data
- helpers/ --> Global functions
- layouts/ --> Higher Order Components like Dashboard Layout, Topbar, Sidebar
- pages/ --> Pages for the application
- routes/ --> Routes to all pages
- types/ --> TypeScript types
- App.tsx --> Main App component
- index.css --> Tailwind Configuration and Global styling
- main.tsx --> Entry point

---

Notes

- TailwindCSS is used for custom styling.
- MUI is integrated for consistent design components.
- Layout is responsive, using grids on large screens and scrollable cards on mobile.
- Scrollbars are hidden on mobile for a cleaner user experience.

---
