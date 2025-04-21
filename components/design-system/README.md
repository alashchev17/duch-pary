# Банька-Парилка Design System

This design system implements the visual language defined in the Figma design file for the Банька-Парилка project.

## Components

### Typography

The typography system is based on the following font families:
- **Spectral SC** - Used for headings and block names
- **Nevduplenysh** - Used for display headings (H2)
- **Manrope** - Used for body text and UI elements

Available variants:
- `header1` - Main headings
- `header2` - Display headings
- `header3` - Section headings
- `header4` - Subsection headings
- `blockName` - Block/section labels
- `menuBottoms` - Navigation and menu items
- `body` - Body text

Usage:
```tsx
import { Typography } from '../components/design-system';

<Typography variant="header1">Heading Text</Typography>
<Typography variant="body">Body text content...</Typography>
```

### Colors

The color palette includes:
- Primary brand color: `#958F60` (Gold/beige)
- Background: `#233129` (Dark green)
- Text colors: `#FFFFFF` (White) for main text
- Non-accent colors:
  - Non-accent 1: `#27372E` (Dark green variant)
  - Non-accent 2: `#827D53` (Muted gold)

### Buttons

Button variants:
- Primary
- Secondary
- Text-only

Button sizes:
- Small
- Medium
- Large

Usage:
```tsx
import { Button } from '../components/design-system';

<Button variant="primary" size="medium">Click Me</Button>
```

### Layout Components

- `Container` - For page content containment
- `Flex` - Flexible layout with direction, alignment options
- `Grid` - Grid layout with configurable columns

## Implementation Details

- The design system is built with React and TypeScript
- It's fully integrated with TailwindCSS
- Responsive design is implemented for all components
- Custom fonts are loaded via Next.js font optimization

## Demo

A complete demonstration of all design system elements is available at the `/design-system` route.
