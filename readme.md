# Battleship – The Odin Project

This project is a fully functional **Battleship game** built as part of **The Odin Project** JavaScript curriculum.

It focuses on applying JavaScript fundamentals, modular architecture, DOM manipulation, and test-driven development (TDD) to build an interactive browser-based game.

---

## 📚 About The Project

This Battleship game was built following The Odin Project assignment, with additional improvements and refinements.

The main goal was to strengthen understanding of:

- Object-oriented and modular JavaScript design
- Separation of concerns (logic vs UI)
- Test-driven development (TDD)
- Event-driven programming
- State management and game flow
- DOM manipulation and rendering

---

## 🛠️ Built With

- JavaScript (ES6 Modules)
- HTML5
- CSS3 (Grid & Flexbox)
- Jest (for testing logic)
- Git & GitHub

---

## 🎯 What I Practiced

- Designing game logic using factory functions
- Managing game state across multiple layers
- Implementing a turn-based game loop
- Handling user interaction via event delegation
- Keeping UI and logic decoupled
- Debugging complex state and synchronization issues
- Structuring code into reusable modules

---

## 🎮 Features

- Ship placement with rotation (button + keyboard shortcut)
- Validated placement (no overlap / out-of-bounds)
- Turn-based gameplay system
- AI opponent with basic targeting logic (hunts after hits)
- Hit / miss tracking with visual feedback
- Game over detection with winner logging
- Reset functionality (full game restart)
- Clean and responsive UI

---

## 🧠 Architecture Highlights

- **GameController** manages game flow and turn logic
- **Gameboard** handles board state and attacks
- **Player** abstracts player behavior
- **UI Layer** handles rendering and interaction
- **Index (Orchestrator)** connects logic with UI

The project follows a clear separation between:

- Game Logic (pure JS, testable)
- UI Layer (DOM manipulation)
- Application Flow (index.js)

---

## 🎨 Personal Enhancements

In addition to the base assignment, I added:

- Smarter AI (targeting nearby cells after a hit)
- Directional ship placement (horizontal / vertical toggle)
- Full game state handling (placement → battle → game over)
- Clean UI styling with hover and visual feedback
- Reset button for replayability
- Improved interaction control (disabled actions when invalid)

---

## 📈 Future Improvements

- Improve AI with directional tracking after multiple hits
- Add hover preview for ship placement
- Add animations (hit effects, transitions)
- Display winner in UI instead of console
- Add sound effects
- Improve responsiveness for smaller screens

---

## 📖 About The Odin Project

The Odin Project is a free open-source curriculum for learning web development:  
https://www.theodinproject.com/

---

## 👤 Author

Built by Soren Javedan

GitHub: https://github.com/JavedanCode
