# AGENTS.md - Exchange Plus

> Real-time currency converter with iOS-style premium UI.

## Commands

```bash
cd exchange-plus
npm run dev      # Dev server (port 3000)
npm run build    # Production build (standalone)
npm run lint     # ESLint check
```

---

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **UI**: React 19.2.3, Tailwind CSS v4, lucide-react
- **Language**: TypeScript (strict mode)
- **Deployment**: Oracle Cloud Free Tier, PM2, Node.js v20+

---

## Project Structure

```
exchange-plus/src/
├── app/
│   ├── layout.tsx      # Root layout, fonts, PWA config
│   ├── page.tsx        # Main client component
│   └── globals.css     # CSS variables, base styles
└── components/
    ├── Header.tsx, CurrencyRow.tsx, Keypad.tsx
    ├── AddCurrencyModal.tsx, BottomNav.tsx, AdBanner.tsx
```

---

## Code Style

### TypeScript
- **Strict mode** - No `any`, `@ts-ignore`, `@ts-expect-error`
- **Interface for props** - Defined above component

```tsx
interface CurrencyRowProps {
  flag: string;
  code: string;
  value: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const CurrencyRow: React.FC<CurrencyRowProps> = ({ flag, code, value }) => {
  return (/* ... */);
};

export default CurrencyRow;
```

### React
- Client components: `'use client';` directive at top
- Default exports for all components
- Functional components only

### Imports Order
```tsx
import React, { useState } from 'react';     // 1. React
import { Plus } from 'lucide-react';         // 2. External
import Header from '@/components/Header';    // 3. Internal (@/* alias)
```

### Naming
| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `CurrencyRow.tsx` |
| Handlers | `handle` prefix | `handleKeyPress` |
| Callback props | `on` prefix | `onClick`, `onDelete` |

---

## Styling (Tailwind v4)

### iOS Design Tokens (in globals.css)
```css
--ios-blue: #007AFF;      /* Primary actions */
--ios-red: #FF3B30;       /* Destructive */
--ios-green: #34C759;     /* Positive */
--ios-background: #F2F2F7;
--ios-separator: rgba(60,60,67,0.36);
```

### Font Sizes
- Title: `text-[24px] font-semibold`
- Body: `text-[17px]`
- Caption: `text-[13px]`
- Small: `text-[11px]`

### Common Patterns
```tsx
className="active:opacity-50 transition-opacity"  // Tap feedback
className="rounded-xl"                            // iOS cards
className="bg-[rgba(255,255,255,0.85)] backdrop-blur-md"  // Glassmorphism
className="tabular-nums"                          // Stable number width
```

---

## Error Handling

```tsx
try {
  const response = await fetch('https://open.er-api.com/v6/latest/USD');
  const data = await response.json();
  if (data?.rates) setRates(data.rates);
} catch (e) {
  setLastUpdate('Offline');  // Graceful fallback
}
```

- Use optional chaining: `data?.rates`
- No empty catch blocks
- App must work offline with mock data

---

## State Management

- `useState` for component state
- Prop drilling for parent-child
- Callback props for child-to-parent

```tsx
const [selectedCode, setSelectedCode] = useState('USD');
<CurrencyRow onClick={() => setSelectedCode(curr.code)} />
```

---

## Agent Instructions

### explore agents
- Components: `src/components/`
- Main logic: `src/app/page.tsx`
- Data structure: `{ flag, code, symbol, symbolEn }`

### frontend-ui-ux-engineer agents
- Follow iOS Human Interface Guidelines
- Use existing CSS variables
- Test at 375px viewport width
- Maintain glassmorphism effects

### general agents
- API: `https://open.er-api.com/v6/latest/USD`
- Conversion: `(value / rates[from]) * rates[to]`
- Formatting: `Intl.NumberFormat('ko-KR')`

---

## Change Tracking

Record all changes in `History.md`:
- Date, Category (UI/Feature/Bugfix), Description
