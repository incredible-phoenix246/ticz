'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Calendar,
  DollarSign,
  Users,
  Ticket,
  BarChart,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/utils'
import { roadrage } from '@/fonts'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <section className="px-4 py-20">
        <div className="container mx-auto text-center">
          <motion.h1
            className={cn(
              'font-roadrage mb-6 text-4xl md:text-6xl',
              roadrage.className
            )}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Create and Sell Event Tickets with Ease
          </motion.h1>
          <motion.p
            className="mb-8 text-xl text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Streamline your event management process and boost ticket sales with
            our powerful platform
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
              <Link href="/create-event">
                Create Your Event <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <h2 className={cn('mb-12 text-center text-3xl', roadrage.className)}>
            Why Choose Our Platform?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Calendar,
                title: 'Easy Event Creation',
                description:
                  'Set up your event in minutes with our intuitive interface',
              },
              {
                icon: Ticket,
                title: 'Customizable Tickets',
                description:
                  'Design tickets that match your brand and event theme',
              },
              {
                icon: DollarSign,
                title: 'Flexible Pricing',
                description: 'Offer various ticket types and pricing tiers',
              },
              {
                icon: Users,
                title: 'Attendee Management',
                description: 'Easily manage registrations and check-ins',
              },
              {
                icon: BarChart,
                title: 'Real-time Analytics',
                description:
                  'Track sales and attendance with powerful insights',
              },
              {
                icon: ArrowRight,
                title: 'Promotion Tools',
                description:
                  'Boost ticket sales with built-in marketing features',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="rounded-lg bg-[#003333] p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="mb-4 h-12 w-12 text-teal-500" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <h2 className={cn('mb-12 text-center text-3xl', roadrage.className)}>
            How It Works
          </h2>
          <div className="flex flex-col items-center justify-center md:flex-row md:space-x-8">
            {[
              {
                step: 1,
                title: 'Create Your Event',
                description:
                  'Set up your event details, ticket types, and pricing',
              },
              {
                step: 2,
                title: 'Customize & Publish',
                description: 'Design your event page and make it live',
              },
              {
                step: 3,
                title: 'Promote & Sell',
                description: 'Share your event and watch ticket sales soar',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="mb-6 w-full rounded-lg p-6 md:mb-0 md:w-1/3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-4 text-4xl font-bold text-teal-500">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto">
          <h2 className={cn('mb-12 text-center text-3xl', roadrage.className)}>
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Sarah L.',
                role: 'Event Organizer',
                quote:
                  "This platform has revolutionized how I manage my events. It's so easy to use!",
              },
              {
                name: 'Michael R.',
                role: 'Conference Director',
                quote:
                  'The analytics feature helps me make data-driven decisions for my events.',
              },
              {
                name: 'Emily T.',
                role: 'Festival Coordinator',
                quote:
                  'I love how customizable the tickets are. It adds a special touch to our events.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="rounded-lg bg-[#003333] p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="mb-4 text-gray-300">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div
          className={cn('container mx-auto text-center', roadrage.className)}
        >
          <motion.h2
            className="mb-6 text-3xl md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Create Your Next Successful Event?
          </motion.h2>
          <motion.p
            className="mb-8 text-xl text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of event organizers who trust our platform
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
              <Link href="/signup">
                Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
