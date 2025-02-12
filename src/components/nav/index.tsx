'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/utils'
import BlurImage from '../miscellaneous/blur-image'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'font-inter fixed top-0 right-0 left-0 z-50 px-4 py-2 transition-all duration-300',
        scrolled ? 'mt-2' : 'mt-4'
      )}
    >
      <div
        className={cn(
          'mx-auto max-w-7xl rounded-[24px] border transition-all duration-300',
          'border-[#197686] backdrop-blur-md',
          scrolled ? 'bg-[#001a1a]/80' : 'bg-[#001a1a]/60'
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="flex items-center space-x-2 text-white transition-opacity hover:opacity-90"
          >
            <BlurImage src="/logo.png" width={92} height={36} alt="logo" />
          </Link>

          <nav className="hidden items-center space-x-12 md:flex">
            {[
              { href: '/', label: 'Events' },
              { href: '/', label: 'My Tickets' },
              { href: '/', label: 'About Project' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative text-sm text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-teal-500 transition-all duration-300 group-hover:w-full"
                  whileHover={{ width: '100%' }}
                />
              </Link>
            ))}
          </nav>

          {/* My Tickets Button */}
          <Link
            href="/my-tickets"
            className="flex transform items-center space-x-2 rounded-[24px] bg-white px-[24px] py-[16px] text-sm text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100 active:scale-95"
          >
            <span>MY TICKETS</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
