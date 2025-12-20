# 🚌 Project: "Into the Wild" Portfolio

A storytelling portfolio website inspired by the raw, adventurous spirit of _Into the Wild_. This project moves away from corporate sterility to embrace a journal-like, narrative-driven aesthetic.

## 🌲 Theme Concept: "The Journey"

The portfolio treats professional growth as a wilderness expedition.

- **The Hero:** The "Magic Bus" represents the destination/basecamp.
- **Skills:** "Survival Gear" needed for the trek.
- **Experience:** The "Milestones" and "Trail" blazed over time.
- **Projects:** "Campfire Stories" shared along the way.

---

## 🗺️ Step-by-Step Transformation

Here is the log of how we transformed the site into this theme:

### 1. Asset Generation 🎨

We created custom hand-drawn assets to replace generic tech imagery:

- **Magic Bus:** Iconic Bus 142 styling for the Hero & About sections.
- **Survival Backpack:** A tactical bag representing the "Skills" inventory.
- **Campfire:** A sketch for the "Personal Projects" section.
- **Footsteps & Maps:** Trail markers for the Experience timeline.
- _Stamps:_ styled "Entry #142" and dates to look like ink stamps on a passport or journal.

### 2. Component Integration 🛠️

#### **Hero Section (`Hero.jsx`)**

- **Action:** Added the `Magic Bus` textual stamp and illustration.
- **Detail:** Introduced the user with a handwritten "Hi there!" greeting.
- **Result:** Feels like the opening page of a travelogue.

#### **Navigation (`Navbar.jsx`)**

- **Action:** Added a "Hiking Trail" progress bar.
- **Feature:** The bar fills with a **Teal -> Gold** sunset gradient as you scroll.
- **Polish:** A little hiker 🚶 walks the trail and turns into a Bus 🚌 at the destination.
- **Cursor:** Replaced the default pointer with a **Pen Tip** custom cursor to simulate writing/sketching.

#### **About Me -> "The Journal" (`About.jsx`)**

- **Action:** Renamed the section to "The Journal".
- **Style:** Added a paper texture background and an "Entry #142" ink stamp.
- **Decor:** The Magic Bus appears as a faint watermark on the left.

#### **Skills -> "Survival Gear" (`Skills.jsx`)**

- **Action:** Organized skills into a **2x2 Grid** for clarity.
- **Style:** Cards look like gear checklists or taped-down field notes.
- **Categories:** "Frontend", "Backend Ecosystem", "Database & Tools", "AI & ML".

#### **Projects -> "Campfire Stories" (`CompanyProjects.jsx`)**

- **Action:** Mapped projects as "Milestones" (e.g., Base Camp, The Climb, Summit).
- **Visuals:** Added mountain stamps and a connector trail between cards.

---

## 🚀 Tech Stack

- **React:** Component architecture.
- **Tailwind CSS:** Utility-first styling for rapid custom designs.
- **GSAP (GreenSock):** Advanced animations (ScrollTrigger, Timelines).
- **Vite:** Blazing fast build tool.

## 🏃 Run Locally

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Start Development Server:**

    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    ```

---

_"Happiness only real when shared."_ — Christopher McCandless
