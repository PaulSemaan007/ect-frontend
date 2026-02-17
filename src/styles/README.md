# ECT Security Design Token System

Comprehensive design tokens for consistent styling across the application.

## 📚 **Table of Contents**

- [Colors](#colors)
- [Spacing](#spacing)
- [Typography](#typography)
- [Shadows](#shadows)
- [Borders](#borders)
- [Z-Index](#z-index)
- [Animations](#animations)
- [Effects](#effects)
- [Usage Examples](#usage-examples)

---

## 🎨 **Colors**

### Base Palette

```css
/* Brand */
--color-neon-primary: #39ff14 --color-neon-dim: #2ecc11 --color-neon-bright: #4dff29
  --color-neon-dark: #1fa008 /* Neutrals */ --color-gray-50 through --color-gray-950 /* Semantic */
  --color-background --color-foreground --color-muted --color-border;
```

### Alpha Variants

Use opacity variants for layering and overlays:

```css
--color-neon-10  /* 10% opacity */
--color-neon-20  /* 20% opacity */
...
--color-neon-90  /* 90% opacity */

--color-bg-10 through --color-bg-95
```

**Example:**

```css
/* Subtle neon background */
background: var(--color-neon-10);

/* Semi-transparent overlay */
background: var(--color-bg-80);
```

---

## 📏 **Spacing**

Based on 4px scale. Use consistent spacing throughout the app.

```css
--space-1  /* 4px */
--space-2  /* 8px */
--space-4  /* 16px */
--space-8  /* 32px */
--space-16 /* 64px */
...
```

**Example:**

```css
padding: var(--space-4) var(--space-6);
margin-bottom: var(--space-8);
gap: var(--space-3);
```

---

## ✍️ **Typography**

### Font Families

```css
--font-sans: Geist Sans fallback stack --font-mono: Geist Mono fallback stack;
```

### Font Sizes (Type Scale 1.25)

```css
--text-xs   /* 12px */
--text-sm   /* 14px */
--text-base /* 16px */
--text-lg   /* 18px */
--text-xl   /* 20px */
--text-2xl  /* 24px */
--text-3xl  /* 30px */
--text-4xl  /* 36px */
--text-5xl  /* 48px */
--text-6xl  /* 60px */
--text-7xl  /* 72px */
--text-8xl  /* 96px */
--text-9xl  /* 128px */
```

### Font Weights

```css
--font-thin through --font-black (100-900)
```

### Line Heights

```css
--leading-none     /* 1 */
--leading-tight    /* 1.25 */
--leading-normal   /* 1.5 */
--leading-relaxed  /* 1.625 */
--leading-loose    /* 2 */
```

**Example:**

```css
font-size: var(--text-2xl);
font-weight: var(--font-bold);
line-height: var(--leading-tight);
```

---

## 🌑 **Shadows**

### Standard Shadows

```css
--shadow-xs through --shadow-2xl
--shadow-inner
```

### Neon Glows

```css
--shadow-neon-sm  /* Small glow */
--shadow-neon-md  /* Medium glow */
--shadow-neon-lg  /* Large glow */
--shadow-neon-xl  /* Extra large glow */
```

### Combined (Elevation + Glow)

```css
--shadow-elevated-neon
--shadow-elevated-neon-lg
```

**Example:**

```css
/* Standard elevation */
box-shadow: var(--shadow-lg);

/* Neon text glow */
text-shadow: var(--shadow-neon-md);

/* Card with glow */
box-shadow: var(--shadow-elevated-neon);
```

---

## 🔲 **Borders**

### Widths

```css
--border-0, --border-1, --border-2, --border-4, --border-8
```

### Radius

```css
--radius-sm    /* 2px */
--radius-md    /* 6px */
--radius-lg    /* 8px */
--radius-xl    /* 12px */
--radius-2xl   /* 16px */
--radius-3xl   /* 24px */
--radius-full  /* 9999px - circles */
```

**Example:**

```css
border: var(--border-1) solid var(--color-gray-800);
border-radius: var(--radius-lg);
```

---

## 📊 **Z-Index**

Use named layers for consistency:

```css
--z-dropdown: 1000 --z-sticky: 1100 --z-fixed: 1200 --z-modal-backdrop: 1300 --z-modal: 1400
  --z-popover: 1500 --z-tooltip: 1600 --z-toast: 1700;
```

**Example:**

```css
/* Modal backdrop */
z-index: var(--z-modal-backdrop);

/* Modal content */
z-index: var(--z-modal);
```

---

## ⏱️ **Animations**

### Durations

```css
--duration-75   /* 75ms - instant */
--duration-150  /* 150ms - quick */
--duration-200  /* 200ms - normal */
--duration-300  /* 300ms - deliberate */
--duration-500  /* 500ms - slow */
```

### Easing Functions

```css
--ease-linear
--ease-in
--ease-out
--ease-in-out

/* Custom */
--ease-bounce  /* Bouncy effect */
--ease-smooth  /* Smooth curve */
--ease-snappy  /* Quick and responsive */
```

**Example:**

```css
transition: transform var(--duration-200) var(--ease-out);
animation: slide-in var(--duration-300) var(--ease-bounce);
```

---

## ✨ **Effects**

### Blur

```css
--blur-sm through --blur-3xl
```

### Opacity

```css
--opacity-0 through --opacity-100
```

### Gradients

```css
--gradient-neon-dark
--gradient-neon-radial
--gradient-dark-to-darker
--gradient-overlay-dark
```

---

## 🎯 **Usage Examples**

### Neon Glow Text

```css
.heading {
  color: var(--color-neon-primary);
  text-shadow: var(--shadow-neon-md);
}

/* Or use utility class */
<h1 className="text-neon neon-glow-md">Title</h1>
```

### Glassmorphism Card

```css
.card {
  background: var(--color-bg-10);
  backdrop-filter: blur(var(--blur-md));
  border: var(--border-1) solid var(--color-bg-20);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

/* Or use utility class */
<div className="glass rounded-lg p-6">...</div>
```

### Neon Border Button

```css
.button {
  border: var(--border-2) solid var(--color-neon-primary);
  box-shadow: var(--shadow-neon-sm);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  transition: box-shadow var(--duration-200) var(--ease-out);
}

.button:hover {
  box-shadow: var(--shadow-neon-md);
}

/* Or use utility classes */
<button className="neon-border hover-glow">Click me</button>
```

### Elevated Card with Glow

```css
.card {
  background: var(--color-gray-900);
  border: var(--border-1) solid var(--color-gray-800);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-elevated-neon);
  padding: var(--space-8);
}

/* Or use utility class */
<div className="bg-gray-900 border border-gray-800 rounded-xl elevated-neon p-8">
  ...
</div>
```

### Smooth Hover Effect

```css
.card {
  transition: transform var(--duration-200) var(--ease-out);
}

.card:hover {
  transform: translateY(-2px);
}

/* Or use utility classes */
<div className="hover-lift">...</div>
```

### Text Gradient

```css
.gradient-text {
  background: linear-gradient(
    135deg,
    var(--color-neon-primary) 0%,
    var(--color-foreground) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Or use utility class */
<h1 className="text-gradient-neon">Gradient Text</h1>
```

---

## 🛠️ **Utility Classes**

### Neon Effects

```css
.neon-glow-xs / sm / md / lg / xl  /* Text glow */
.neon-box-glow-sm / md / lg / xl    /* Box glow */
.neon-border / sm / md / lg         /* Glowing borders */
.neon-overlay / neon-overlay-radial /* Image overlays */
```

### Glassmorphism

```css
.glass          /* Light blur */
.glass-strong   /* Heavy blur */
.glass-neon     /* Neon tinted glass */
```

### Elevation

```css
.elevated         /* Standard shadow */
.elevated-neon    /* Shadow with glow */
.elevated-neon-lg /* Large shadow with glow */
```

### Gradients

```css
.text-gradient-neon         /* Neon to white */
.text-gradient-neon-reverse /* White to neon */
```

### Hover Effects

```css
.hover-lift / lift-sm / lift-lg  /* Lift on hover */
.hover-glow                       /* Glow on hover */
.hover-scale / scale-sm           /* Scale on hover */
```

### Animations

```css
.animate-pulse-neon     /* Pulsing opacity */
.animate-glow-pulse     /* Pulsing glow */
.animate-shimmer        /* Loading shimmer */
.animate-glitch         /* Fast glitch effect (0.3s) */
.animate-glitch-slow    /* Slow glitch effect (1s) */
.animate-typewriter     /* Typewriter with blinking caret */
.animate-shimmer-text   /* Shimmering neon text */
```

### Typography

```css
/* Heading Hierarchy */
.h1, .h2, .h3, .h4, .h5, .h6         /* Semantic heading styles */
.display-1, .display-2, .display-3, .display-4  /* Extra large displays */

/* Text Shadows for Readability */
.text-shadow-sm / md / lg / xl       /* Dark shadows for image overlays */
.text-shadow-neon                    /* Combined shadow + glow */

/* Mono-space Utilities */
.mono                                /* Mono-space font */
.code-block                          /* Code block with styling */
.inline-code                         /* Inline code with neon accent */
.license-text                        /* License plate style (bold, uppercase, wide) */

/* Body Text Variants */
.body-lg, .body, .body-sm            /* Body text sizes */

/* Text Wrapping */
.text-balance                        /* Balanced text wrapping */
.text-pretty                         /* Pretty text wrapping */
```

### Transitions

```css
.transition-smooth  /* Smooth easing */
.transition-snappy  /* Quick response */
.transition-bounce  /* Bouncy effect */
```

### Focus

```css
.focus-neon  /* Neon focus ring */
```

### Accessibility

```css
.sr-only  /* Screen reader only */
```

---

## 🔍 **Best Practices**

1. **Use tokens instead of hard-coded values**

   ```css
   /* ❌ Don't */
   padding: 16px;
   color: #39ff14;

   /* ✅ Do */
   padding: var(--space-4);
   color: var(--color-neon-primary);
   ```

2. **Use utility classes for common patterns**

   ```jsx
   /* ❌ Don't write custom CSS for every glow */
   <h1 style={{ textShadow: '0 0 10px #39FF14...' }}>

   /* ✅ Use utility class */
   <h1 className="neon-glow-md">
   ```

3. **Combine utilities for complex effects**

   ```jsx
   <div className="glass elevated-neon hover-lift transition-smooth">
     <h2 className="text-gradient-neon">Beautiful Card</h2>
   </div>
   ```

4. **Respect user preferences**
   - Animations automatically respect `prefers-reduced-motion`
   - All colors meet WCAG contrast requirements

5. **Use semantic tokens**

   ```css
   /* ❌ Less clear */
   background: var(--color-gray-950);

   /* ✅ More semantic */
   background: var(--color-background);
   ```

---

## 📱 **Responsive Usage**

Tokens work seamlessly with Tailwind's responsive modifiers:

```jsx
<div
  className="
  p-4 md:p-6 lg:p-8
  text-base md:text-lg lg:text-xl
  neon-glow-sm md:neon-glow-md lg:neon-glow-lg
"
>
  Responsive neon text
</div>
```

---

## 🎨 **Customization**

To add new tokens or modify existing ones, edit:

- `src/styles/tokens.css` - All design tokens
- `src/app/globals.css` - Utility classes and effects

Tokens are automatically available throughout the application via CSS custom properties.

---

**Pro Tip:** Use browser DevTools to inspect elements and see which tokens are being used. This makes it easy to maintain consistency across the site.
