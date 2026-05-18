"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useTranslation } from 'react-i18next'

// `roleKey`/`quoteKey` hold full i18n keys (landing namespace).
// `as const` keeps each key as a literal type for the type-safe t().
const testimonials = [
  {
    name: 'Alexandra Mitchell',
    roleKey: 'testimonials.items.alexandraMitchell.role',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-1',
    quoteKey: 'testimonials.items.alexandraMitchell.quote',
  },
  {
    name: 'James Thompson',
    roleKey: 'testimonials.items.jamesThompson.role',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-1',
    quoteKey: 'testimonials.items.jamesThompson.quote',
  },
  {
    name: 'Priya Sharma',
    roleKey: 'testimonials.items.priyaSharma.role',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-2',
    quoteKey: 'testimonials.items.priyaSharma.quote',
  },
  {
    name: 'Robert Kim',
    roleKey: 'testimonials.items.robertKim.role',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-2',
    quoteKey: 'testimonials.items.robertKim.quote',
  },
  {
    name: 'Maria Santos',
    roleKey: 'testimonials.items.mariaSantos.role',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-3',
    quoteKey: 'testimonials.items.mariaSantos.quote',
  },
  {
    name: 'Thomas Anderson',
    roleKey: 'testimonials.items.thomasAnderson.role',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-3',
    quoteKey: 'testimonials.items.thomasAnderson.quote',
  },
  {
    name: 'Lisa Chang',
    roleKey: 'testimonials.items.lisaChang.role',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-4',
    quoteKey: 'testimonials.items.lisaChang.quote',
  },
  {
    name: 'Michael Foster',
    roleKey: 'testimonials.items.michaelFoster.role',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-4',
    quoteKey: 'testimonials.items.michaelFoster.quote',
  },
  {
    name: 'Sophie Laurent',
    roleKey: 'testimonials.items.sophieLaurent.role',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-5',
    quoteKey: 'testimonials.items.sophieLaurent.quote',
  },
  {
    name: 'Daniel Wilson',
    roleKey: 'testimonials.items.danielWilson.role',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-5',
    quoteKey: 'testimonials.items.danielWilson.quote',
  },
  {
    name: 'Natasha Petrov',
    roleKey: 'testimonials.items.natashaPetrov.role',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-6',
    quoteKey: 'testimonials.items.natashaPetrov.quote',
  },
  {
    name: 'Carlos Rivera',
    roleKey: 'testimonials.items.carlosRivera.role',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-6',
    quoteKey: 'testimonials.items.carlosRivera.quote',
  },
] as const

export function TestimonialsSection() {
  const { t } = useTranslation('landing')

  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container mx-auto px-8 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">{t('testimonials.badge')}</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('testimonials.heading')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('testimonials.subheading')}
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 md:gap-6 lg:columns-3 lg:gap-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="mb-6 break-inside-avoid shadow-none lg:mb-4">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="bg-muted size-12 shrink-0">
                    <AvatarImage
                      alt={testimonial.name}
                      src={testimonial.image}
                      loading="lazy"
                      width="120"
                      height="120"
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <a href="#" onClick={e => e.preventDefault()} className="cursor-pointer">
                      <h3 className="font-medium hover:text-primary transition-colors">{testimonial.name}</h3>
                    </a>
                    <span className="text-muted-foreground block text-sm tracking-wide">
                      {t(testimonial.roleKey)}
                    </span>
                  </div>
                </div>

                <blockquote className="mt-4">
                  <p className="text-sm leading-relaxed text-balance">{t(testimonial.quoteKey)}</p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
