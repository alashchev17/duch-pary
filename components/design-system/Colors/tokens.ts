// Color system tokens based on Figma design
export const colors = {
  // Primary brand color
  primaryBrand: '#958F60', // Gold/beige primary color
  
  // Background colors
  background: '#233129', // Dark green background

  // Text colors
  text: {
    primary: '#FFFFFF', // White
    body: '#FFFFFF',
  },
  
  // Non-accent colors
  nonAccent: {
    primary: '#27372E', // Dark green (slightly lighter than background)
    secondary: '#827D53', // Muted gold (secondary non-accent)
  },
  
  // Various opacities for the primary brand color
  primaryBrandOpacity: {
    '100': '#958F60',
    '75': 'rgba(149, 143, 96, 0.75)',
    '50': 'rgba(149, 143, 96, 0.5)',
    '25': 'rgba(149, 143, 96, 0.25)',
  }
};

// Export individual colors for direct use
export const primaryBrand = colors.primaryBrand;
export const background = colors.background;
export const textPrimary = colors.text.primary;
export const textBody = colors.text.body;
export const nonAccentPrimary = colors.nonAccent.primary;
export const nonAccentSecondary = colors.nonAccent.secondary;

// Additional utility function to get color with opacity
export const getColorWithOpacity = (color: string, opacity: number) => {
  if (color.startsWith('#')) {
    // Convert hex to rgba
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return color;
};
