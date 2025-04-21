import React from 'react'
import { Logo } from './Logo'
import Link from 'next/link'
import Flex from './Flex'

const leftLinks = [
  {
    label: 'Про нас',
    href: '#about',
  },
  {
    label: 'Строительство',
    href: '#construction',
  },
]
const rightLinks = [
  {
    label: 'Аксессуары',
    href: '#accessories',
  },
  {
    label: 'Обучение',
    href: '#training',
  },
]

export const Header: React.FC = () => {
  const linkClasses = 'font-manrope text-[20px] leading-[18px] uppercase text-primary'
  return (
    <header className="py-4">
      <Flex align="center" justify="between">
        <Flex className="gap-[36px]">
          {leftLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClasses}>
              {link.label}
            </Link>
          ))}
        </Flex>
        <Logo />

        <Flex className="gap-[36px]">
          {rightLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClasses}>
              {link.label}
            </Link>
          ))}
        </Flex>
      </Flex>
    </header>
  )
}
