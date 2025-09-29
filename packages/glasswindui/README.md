# glasswindui — Liquid Glass UI (alpha)

Glasswind is a Tailwind v4-first CSS library that implements a “Liquid Glass” aesthetic using composable utilities and component classes.

Status: alpha (APIs may change)

## Installation

```bash
pnpm add -D glasswindui
npm i -D glasswindui
yarn add -D glasswindui
```

## Usage (Tailwind v4)

Import Tailwind and the Glasswind stylesheet in your app’s entry CSS:

```css
@import "tailwindcss";
@import "glasswindui/dist/index.css";
```

That’s it. Now you can use provided utilities/classes.

## Quick examples

```html
<button class="gw-btn">Liquid Glass</button>
<div class="gw-card">...</div>
<span class="gw-badge">New</span>
<div class="gw-accordion">
  <input id="a1" type="checkbox" />
  <label for="a1" class="gw-accordion-title">Details</label>
  <div class="gw-accordion-content">Content...</div>
 </div>
```

## Components
- Button: `gw-btn`, sizes `gw-btn-sm|gw-btn|gw-btn-lg`, `gw-btn-disabled`
- Badge: `gw-badge`, sizes `gw-badge-sm|gw-badge|gw-badge-lg`
- Card: `gw-card` (non-interactive glass surface)
- Accordion: `gw-accordion`, parts `gw-accordion-title|gw-accordion-content`, modifiers `gw-accordion-open|gw-accordion-close`

## Tokens
Composable tokens power the look: `gw-glass-base`, `gw-glass-shadow`, `gw-shine-before`, `gw-shine-after`, `gw-glass-hover`, `gw-glass-focus`, `gw-glass-active`.

## License

MIT © Ali Samei
