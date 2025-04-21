import React from 'react'
import ColorSwatch from './ColorSwatch'
import { colors } from './tokens'
import Typography from '../Typography'

export const ColorPalette: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <Typography variant="blockName" className="mb-4 text-white" uppercase>
          Primary Brand
        </Typography>
        <div className="flex flex-wrap gap-6 mb-8">
          <ColorSwatch color={colors.primaryBrand} name="Primary Brand" textColor="#FFFFFF" />
          <ColorSwatch color={colors.primaryBrandOpacity['75']} name="Primary Brand 75%" textColor="#FFFFFF" />
          <ColorSwatch color={colors.primaryBrandOpacity['50']} name="Primary Brand 50%" textColor="#FFFFFF" />
          <ColorSwatch color={colors.primaryBrandOpacity['25']} name="Primary Brand 25%" textColor="#FFFFFF" />
        </div>
      </div>

      <div className="mb-8">
        <Typography variant="blockName" className="mb-4 text-white" uppercase>
          Background
        </Typography>
        <div className="flex flex-wrap gap-6 mb-8">
          <ColorSwatch color={colors.background} name="Background" textColor="#FFFFFF" />
        </div>
      </div>

      <div className="mb-8">
        <Typography variant="blockName" className="mb-4 text-white" uppercase>
          Text
        </Typography>
        <div className="flex flex-wrap gap-6 mb-8">
          <ColorSwatch color={colors.text.primary} name="Text (White)" textColor="#233129" />
        </div>
      </div>

      <div className="mb-8">
        <Typography variant="blockName" className="mb-4 text-white" uppercase>
          Non-Accent
        </Typography>
        <div className="flex flex-wrap gap-6 mb-8">
          <ColorSwatch color={colors.nonAccent.primary} name="Non-Accent 1" textColor="#FFFFFF" />
          <ColorSwatch color={colors.nonAccent.secondary} name="Non-Accent 2" textColor="#FFFFFF" />
        </div>
      </div>
    </div>
  )
}

export default ColorPalette
