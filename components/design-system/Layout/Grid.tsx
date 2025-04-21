import React, { ReactNode } from 'react'

interface GridProps {
  children: ReactNode
  columns?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: 2 | 4 | 8 | 12 | 16 | 24 | 32 | 48
  className?: string
}

export const Grid: React.FC<GridProps> = ({ children, columns = 2, gap = 16, className = '' }) => {
  // Generate grid styles
  const gridStyles = {
    display: 'grid',
    gap: `${gap * 0.25}rem`,
  }

  return (
    <div
      className={`grid ${className}`}
      style={{
        ...gridStyles,
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {children}
    </div>
  )
}

export default Grid
