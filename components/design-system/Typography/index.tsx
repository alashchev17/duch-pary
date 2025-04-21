import React, { ReactNode } from 'react'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'
type TypographyVariant = 'header1' | 'header2' | 'header3' | 'header4' | 'blockName' | 'menuBottoms' | 'body'

interface TypographyProps {
  variant: TypographyVariant
  children: ReactNode
  as?: HeadingLevel | 'p' | 'span' | 'div'
  className?: string
  uppercase?: boolean
}

export const Typography: React.FC<TypographyProps> = ({ variant, children, as, className = '', uppercase = false }) => {
  // Default tag mappings based on variant
  const defaultTagMapping: Record<TypographyVariant, HeadingLevel | 'p' | 'span'> = {
    header1: 'h1',
    header2: 'h2',
    header3: 'h3',
    header4: 'h4',
    blockName: 'span',
    menuBottoms: 'span',
    body: 'p',
  }

  const Tag = as || defaultTagMapping[variant] || 'div'

  // Tailwind classNames mapping
  const variantClassNames: Record<TypographyVariant, string> = {
    header1: 'font-spectral text-h1-mobile md:text-h1-desktop',
    header2: 'font-nevduplenysh text-h2-mobile md:text-h2-desktop',
    header3: 'font-spectral text-h3-mobile md:text-h3-desktop',
    header4: 'font-spectral text-h4-mobile md:text-h4-desktop',
    blockName: 'font-spectral text-block-name',
    menuBottoms: 'font-manrope text-menu font-semibold',
    body: 'font-manrope text-body',
  }

  return <Tag className={`${variantClassNames[variant]} ${uppercase ? 'uppercase' : ''} ${className}`}>{children}</Tag>
}

export default Typography
