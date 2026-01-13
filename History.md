# Project History - Exchange Plus

## [2026-01-05]
### Initial Development & UI Design
- Initialized Next.js project with Tailwind CSS.
- Implemented a mobile-first UI based on the reference image "환율플러스.png".
- Integrated `lucide-react` for icons and set up basic layout components (Header, CurrencyRow, Keypad, BottomNav, AdBanner).

### Functional Implementation
- Implemented real-time currency conversion logic using mock rates initially.
- Developed a custom 4x4 numerical keypad for user input.
- Added state management for base currency selection and dynamic value calculation.

### Design Refinement (Fancy UI)
- Overhauled the UI for a more modern, premium feel ("Fancy UI").
- Added glassmorphism effects, soft shadows, and micro-interactions (button press animations).
- Optimized typography with `tabular-nums` for stable currency value displays.

### Server Deployment
- Configured "standalone" output mode for low-memory environments (Oracle Cloud Free Tier).
- Successfully deployed to Oracle Cloud server at `158.179.195.90`.
- Upgraded server Node.js version to v20 using NVM to meet Next.js requirements.
- Configured PM2 for continuous process management and automatic restarts.
- Opened port 3000 via `firewalld` and OCI Security Lists.

### Feature Enhancements & UI Simplification
- **Currency Expansion**: Added support for Chinese Yuan (CNY), Hong Kong Dollar (HKD), and Macau Pataca (MOP).
- **Advanced Search**: Implemented a search modal supporting both Korean country names and English currency codes/names (e.g., "캐나다", "Canada", "CAD").
- **UI Streamlining**:
    - Removed unnecessary menu icon (hamburger) from the header.
    - Removed chart and calculator icons from currency rows for a cleaner look.
    - Simplified the keypad by removing the Swap and Operator icons, focusing purely on numerical input.
    - Removed the bottom navigation bar to maximize screen space.
- **Improved Selection Visibility**: Applied a pastel sky blue background (`#E3F2FD`) and a vertical indicator bar to the currently selected currency row for better user feedback.
