'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Ticket,
  Users,
  CreditCard,
  FileCode,
  Server,
  ReceiptIcon as Payment,
  Github,
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        <motion.div variants={item} className="space-y-4 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Event Ticket Booking UI — Open Source Practice Project 🎫
          </h1>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-[#004444] bg-[#001a1a]/50 p-6">
            <h2 className="mb-4 text-xl font-semibold">Overview</h2>
            <p className="leading-relaxed text-gray-300">
              This is a beginner-friendly yet practical Event Ticket Booking UI
              designed for developers to clone, explore, and build upon. The
              design focuses on a seamless, login-free ticket reservation flow,
              allowing users to book event tickets quickly and efficiently.
            </p>
            <p className="mt-4 leading-relaxed text-gray-300">
              The project consists of a three-step ticket booking flow, and
              developers can extend it further by integrating payment solutions,
              user authentication (optional), and ticket validation systems.
            </p>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-[#004444] bg-[#001a1a]/50 p-6">
            <h2 className="mb-4 text-xl font-semibold">Flow & Features</h2>
            <div className="space-y-6">
              <FeatureSection
                icon={<Ticket className="h-5 w-5" />}
                title="Ticket Selection"
                items={[
                  'Users can browse available tickets (Free & Paid).',
                  'Ticket options are displayed in a list or card view.',
                  'For Free Tickets → Clicking "Get Free Ticket" proceeds to attendee details.',
                  'For Paid Tickets → Clicking "Purchase Ticket" would ideally open a payment modal.',
                ]}
              />

              <FeatureSection
                icon={<Users className="h-5 w-5" />}
                title="Attendee Details Form"
                items={[
                  'Users input their Name, Email, and optional Phone Number.',
                  'Profile picture upload option with preview functionality.',
                  'Ticket summary is visible to ensure users review their details before submission.',
                ]}
              />

              <FeatureSection
                icon={<CreditCard className="h-5 w-5" />}
                title="Payment or Success Page"
                items={[
                  'If the ticket is free, the user is taken directly to the Ticket Confirmation Page.',
                  'If the ticket is paid, developers can integrate Stripe, Paystack, or Flutterwave to process payments before showing the confirmation page.',
                  'Upon successful booking, users should receive:',
                  '• A visual ticket preview with a unique QR Code.',
                  '• An option to download the ticket as PDF or save it to their device.',
                  '• An email confirmation containing ticket details.',
                ]}
              />
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-[#004444] bg-[#001a1a]/50 p-6">
            <h2 className="mb-4 text-xl font-semibold">How to build This 🚀</h2>
            <div className="space-y-6">
              <TechSection
                icon={<FileCode className="h-5 w-5" />}
                title="Frontend (Next.js or React)"
                items={[
                  'Component Breakdown:',
                  '• TicketCard.tsx — Displays ticket details',
                  '• AttendeeForm.tsx — Captures user details',
                  '• PaymentModal.tsx → Handles payment processing',
                  '• SuccessScreen.tsx — Shows the final ticket preview',
                  "• State Management: React's Context API, Zustand, or Redux (if needed).",
                  '• File Handling: Users should be able to upload images (profile picture for ticket) using Firebase Storage, Cloudinary, or local preview with URL.createObjectURL().',
                ]}
              />

              <TechSection
                icon={<Server className="h-5 w-5" />}
                title="Backend (Optional)"
                items={[
                  'If persistence is required, a backend can be built using:',
                  '• Node.js & Express or Firebase Functions',
                  '• Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket records',
                ]}
              />

              <TechSection
                icon={<Payment className="h-5 w-5" />}
                title="Payment Integration"
                items={[
                  'For paid events, developers should integrate:',
                  '• Stripe Checkout (for international transactions)',
                  '• Paystack or Fluttterwave (for African users)',
                ]}
              />
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-[#004444] bg-[#001a1a]/50 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              What You&apos;ll Learn 📚
            </h2>
            <ul className="list-inside list-disc space-y-2 text-gray-300">
              <li>File handling & validation (profile picture uploads)</li>
              <li>Dynamic UI updates based on ticket selection</li>
              <li>Persisting bookings using local state or a backend</li>
              <li>Integrating payment gateways for ticket purchases</li>
              <li>
                Generating & validating QR Codes for event check-in (Advanced)
              </li>
            </ul>
          </Card>
        </motion.div>

        <motion.div variants={item} className="space-y-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-[80px]">
            💛
            <span className="">Enjoy</span>
          </div>

          <div className="mx-auto flex max-w-[482px] justify-center space-x-[16px] rounded-lg border border-[#0E464F] p-[16px_48px] lg:space-x-[32px] lg:rounded-2xl">
            <Button
              variant="outline"
              className="font-roadrage hover:text-[ #24A0B5] h-[48px] w-[215px] rounded-lg border border-[#0E464F] bg-transparent text-[#24A0B5] hover:bg-transparent"
              asChild
            >
              <Link href="/" target="_blank">
                Design File
              </Link>
            </Button>
            <Button
              className="font-roadrage h-[48px] w-[215px] bg-[#24A0B5] text-white hover:bg-[#24A0B5]"
              asChild
            >
              <Link href="/" target="_blank">
                Github code
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div variants={item} className="text-center">
          <p className="text-gray-400">Need Help? Reach Out 💬</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

function FeatureSection({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode
  title: string
  items: string[]
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        {icon}
        <h3 className="font-roadrage font-semibold">{title}</h3>
      </div>
      <ul className="ml-6 list-inside list-disc space-y-2 text-gray-300">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function TechSection({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode
  title: string
  items: string[]
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        {icon}
        <h3 className="font-roadrage font-semibold">{title}</h3>
      </div>
      <ul className="ml-6 list-inside list-disc space-y-2 text-gray-300">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
